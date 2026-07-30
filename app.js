// Απόδοση κατηγοριών στα Ελληνικά για τα φίλτρα/ετικέτες.
const CATEGORY_LABELS = {
  Owned: "Δικά μου",
  Sissy: "Της Σίσσης",
  "Company Car": "Εταιρικά",
  Father: "Του πατέρα μου",
  "3rd Party": "Τρίτων",
};

const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const statsEl = document.getElementById("stats");
const footerCount = document.getElementById("footerCount");
const lightbox = document.getElementById("lightbox");
const lightboxInner = document.getElementById("lightboxInner");
const lightboxClose = document.getElementById("lightboxClose");

let activeFilter = "all";

function label(cat) {
  return CATEGORY_LABELS[cat] || cat;
}

function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c])
  );
}

// --- Στατιστικά ---
function renderStats() {
  const total = CARS.length;
  const categories = new Set(CARS.map((c) => c.category)).size;
  statsEl.innerHTML = `
    <div class="stat"><b>${total}</b><span>Αυτοκίνητα</span></div>
    <div class="stat"><b>${categories}</b><span>Κατηγορίες</span></div>
  `;
}

// --- Φίλτρα ---
function renderFilters() {
  const cats = ["all", ...new Set(CARS.map((c) => c.category))];
  filtersEl.innerHTML = cats
    .map((cat) => {
      const text = cat === "all" ? "Όλα" : label(cat);
      return `<button class="filter-btn ${
        cat === activeFilter ? "active" : ""
      }" data-cat="${escapeHtml(cat)}">${escapeHtml(text)}</button>`;
    })
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.cat;
      renderFilters();
      renderGrid();
    });
  });
}

// --- Κάρτες ---
function renderGrid() {
  const list =
    activeFilter === "all"
      ? CARS
      : CARS.filter((c) => c.category === activeFilter);

  grid.innerHTML = list
    .map((car, i) => {
      const idx = CARS.indexOf(car);
      const specs = [car.engine, car.power].filter(Boolean);
      const yearTxt = car.year ? ` <span class="year">${car.year}</span>` : "";
      return `
        <article class="card" data-idx="${idx}" style="animation-delay:${
        i * 25
      }ms">
          <div class="card-img">
            <img src="${escapeHtml(car.photo)}" alt="${escapeHtml(
        car.brand + " " + car.model
      )}" loading="lazy" onerror="this.style.opacity=0.15" />
          </div>
          <div class="card-body">
            <span class="card-cat">${escapeHtml(label(car.category))}</span>
            <div class="card-title">${escapeHtml(car.brand)} ${escapeHtml(
        car.model
      )}${yearTxt}</div>
            ${
              specs.length
                ? `<div class="card-specs">${specs
                    .map((s) => `<span class="chip">${escapeHtml(s)}</span>`)
                    .join("")}</div>`
                : ""
            }
            ${
              car.note
                ? `<div class="card-note">${escapeHtml(car.note)}</div>`
                : ""
            }
            ${
              car.owned
                ? `<div class="card-owned">Κατοχή: <b>${escapeHtml(
                    car.owned
                  )}</b></div>`
                : ""
            }
          </div>
        </article>`;
    })
    .join("");

  grid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () =>
      openLightbox(CARS[Number(card.dataset.idx)])
    );
  });

  footerCount.textContent = `Εμφανίζονται ${list.length} από ${CARS.length} αυτοκίνητα.`;
}

// --- Lightbox ---
function openLightbox(car) {
  const rows = [
    ["Μάρκα", car.brand],
    ["Μοντέλο", car.model],
    ["Κινητήρας", car.engine],
    ["Ισχύς", car.power],
    ["Χρονολογία", car.year],
    ["Περίοδος κατοχής", car.owned],
    ["Κατηγορία", label(car.category)],
    ["Σημείωση", car.note],
  ].filter(([, v]) => v !== "" && v !== undefined && v !== null);

  lightboxInner.innerHTML = `
    <img src="${escapeHtml(car.photo)}" alt="${escapeHtml(
    car.brand + " " + car.model
  )}" onerror="this.style.opacity=0.15" />
    <div class="lightbox-details">
      <span class="lb-cat">${escapeHtml(label(car.category))}</span>
      <h2>${escapeHtml(car.brand)} ${escapeHtml(car.model)}</h2>
      <div class="lb-grid">
        ${rows
          .map(
            ([k, v]) =>
              `<div class="lb-item"><span>${escapeHtml(
                k
              )}</span><b>${escapeHtml(v)}</b></div>`
          )
          .join("")}
      </div>
    </div>`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// --- Init ---
renderStats();
renderFilters();
renderGrid();
