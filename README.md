# 🚗 Η Συλλογή Αυτοκινήτων μου

Στατικό (front-end only) site με όλα τα αυτοκίνητα που είχα και έχω στην κατοχή μου.
Χωρίς βάση δεδομένων — όλα τα δεδομένα βρίσκονται στο [`data.js`](data.js).

## Δομή

```
Cars/
├── index.html      # Η σελίδα
├── styles.css      # Εμφάνιση / στυλ
├── app.js          # Λογική (κάρτες, φίλτρα, lightbox)
├── data.js         # ⭐ ΕΔΩ αλλάζεις τα αυτοκίνητα
├── vercel.json     # Ρυθμίσεις Vercel
└── photos/         # Οι φωτογραφίες
```

## Πώς προσθέτω / αλλάζω αυτοκίνητο

Άνοιξε το [`data.js`](data.js) και πρόσθεσε ή τροποποίησε ένα αντικείμενο:

```js
{
  brand: "Toyota",          // Μάρκα
  model: "Starlet",         // Μοντέλο
  engine: "1.3",            // Κυβικά / κινητήρας
  power: "75 HP",           // Ισχύς
  year: 1989,               // Χρονολογία αυτοκινήτου
  owned: "2002 – 2010",     // Περίοδος κατοχής (άφησε "" αν δεν ισχύει)
  category: "Owned",        // Owned | Sissy | Company Car | Father | 3rd Party
  photo: "photos/starlet.png",
},
```

> Τα 5 αυτοκίνητα με σημείωση «Συμπλήρωσε στοιχεία» (Peugeot 3008, Ford Puma,
> Audi Q3, VW Tiguan, BMW X1) περιμένουν να συμπληρώσεις κινητήρα/ισχύ/χρονολογίες.

## Τοπική προεπισκόπηση

Απλά άνοιξε το `index.html` στον browser, ή:

```bash
npx serve .
```

## Ανέβασμα στο GitHub Pages (με domain cars.cloudcorner.gr)

Το αρχείο [`CNAME`](CNAME) περιέχει ήδη το `cars.cloudcorner.gr`.

**1. Δημιούργησε το repo & ανέβασέ το:**
```bash
git remote add origin https://github.com/<USERNAME>/cars.git
git push -u origin main
```

**2. Ενεργοποίησε GitHub Pages:**
- Repo → **Settings → Pages**
- Source: **Deploy from a branch** → Branch: `main` / `(root)` → **Save**
- Στο πεδίο **Custom domain** βάλε `cars.cloudcorner.gr` (θα διαβαστεί από το `CNAME`)
- Τσέκαρε **Enforce HTTPS** (αφού ενεργοποιηθεί το πιστοποιητικό)

**3. Ρύθμισε DNS στον provider του cloudcorner.gr:**
| Type  | Name (Host) | Value                    |
| ----- | ----------- | ------------------------ |
| CNAME | `cars`      | `<USERNAME>.github.io`   |

> Το DNS μπορεί να χρειαστεί λίγη ώρα να ενεργοποιηθεί. Μετά, το site θα είναι
> διαθέσιμο στο **https://cars.cloudcorner.gr**.

## Εναλλακτικά: Vercel
```bash
npm i -g vercel
vercel
```
Framework Preset: **Other** (χωρίς build). Το site είναι εντελώς στατικό.
