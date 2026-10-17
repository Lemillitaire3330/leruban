/* =====================================================
   LE RUBAN : LISTE DES ARTICLES
   Pour publier : ajoute UNE ligne ci-dessous, où tu veux
   (le site trie tout seul : plus le numéro artX est grand, plus l'article est récent).
   "cat" doit être l'une des catégories du MENU plus bas (accents et majuscules sans importance).
   ===================================================== */
const ARTICLES = [
  { titre: "Le Ruban : Journal d'actualité politique, quoi de neuf ?", cat: "A Propos", date: "16 octobre 2026", resume: "Le Ruban, nouveau journal d'actualité en ligne, présentation par La Rédaction.", lien: "art0.html" },
  { titre: "Blocus lycéens : Que se passe t'il ?", cat: "Politique", date: "17 octobre 2026", resume: "Après des manifestations intensive des collectifs lycéens, avec des actions parfois controversées, que va faire le Gouvernement ?", lien: "art1.html" }
];

/* =====================================================
   MENU : les 4 rubriques du journal, dans cet ordre exact.
   "À la une" (tous les articles) est ajoutée automatiquement en premier.
   ===================================================== */
const MENU = ["Politique", "Géopolitique", "À propos"];

/* ---------- Ne rien modifier en dessous (sauf nom/devise du journal) ---------- */

const numero = a => { const m = String(a.lien).match(/art(\d+)/i); return m ? +m[1] : -1; };
ARTICLES.sort((x, y) => numero(y) - numero(x));

const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const memeCat = (a, b) => norm(a) === norm(b);
const nomCat = c => MENU.find(m => memeCat(m, c)) || c;   // "A Propos" -> "À propos"

function entete() {
  const d = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('entete').innerHTML =
    `<div class="barre"><span>${d}</span><span>Édition quotidienne</span></div>
     <a class="logo" href="index.html">Le Ruban</a>
     <div class="devise">L’actualité, frappée mot pour mot</div>
     <div class="ruban"></div>
     <nav><a href="index.html">À la une</a>${MENU.map(c => `<a href="index.html?cat=${encodeURIComponent(c)}">${c}</a>`).join('')}</nav>`;
  document.getElementById('pied').innerHTML = `© ${new Date().getFullYear()} Le Ruban · Tous droits réservés`;
}
