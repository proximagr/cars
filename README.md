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
  note: "",                 // Προαιρετική σημείωση
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

## Ανέβασμα στο Vercel

**Επιλογή A — μέσω GitHub (προτεινόμενο):**
1. Ανέβασε τον φάκελο σε ένα GitHub repository.
2. Στο [vercel.com](https://vercel.com) → **Add New → Project** → διάλεξε το repo.
3. Framework Preset: **Other** (δεν χρειάζεται build). Πάτησε **Deploy**.

**Επιλογή B — μέσω CLI:**
```bash
npm i -g vercel
vercel
```

Το site είναι εντελώς στατικό, οπότε δεν χρειάζεται build command ούτε βάση.
