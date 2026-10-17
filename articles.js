/* =====================================================
   LE RUBAN : LISTE DES ARTICLES
   Pour publier : ajoute UNE ligne ci-dessous (la plus récente en premier).
   Les catégories apparaissent toutes seules dans le menu.
   ===================================================== */
const ARTICLES = [
  { titre: "Le Ruban : Journal d'actualité politique, quoi de neuf ?", cat: "A Propos", date: "16 octobre 2026", resume: "Le Ruban, nouveau journal d'actualité en ligne, présentation par La Rédaction.", lien: "art0.html" },
  { titre: "Blocus lycéens : Que va faire le gouvernement ?", cat: "Politique", date: "17 octobre 2026", resume: "Après des manifestations intensive des collectifs lycéens, avec des actions parfois controversées, que va faire le Gouvernement ?", lien: "art1.html" }
];

/* ---------- Ne rien modifier en dessous (sauf nom/devise du journal) ---------- */
const CATS = [...new Set(ARTICLES.map(a => a.cat))];

function entete() {
  const d = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('entete').innerHTML =
    `<div class="barre"><span>${d}</span><span>Édition quotidienne</span></div>
     <a class="logo" href="index.html">Le Ruban</a>
     <div class="devise">L’actualité, frappée mot pour mot</div>
     <div class="ruban"></div>
     <nav><a href="index.html">À la une</a>${CATS.map(c => `<a href="index.html?cat=${encodeURIComponent(c)}">${c}</a>`).join('')}</nav>`;
  document.getElementById('pied').innerHTML = `© ${new Date().getFullYear()} Le Ruban · Tous droits réservés`;
}
