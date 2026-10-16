/* =====================================================
   LE RUBAN : LISTE DES ARTICLES
   Pour publier : ajoute UNE ligne ci-dessous (la plus récente en premier).
   Les catégories apparaissent toutes seules dans le menu.
   ===================================================== */
const ARTICLES = [
  { titre: "Exemple : le Parlement adopte le texte après trois jours de débats", cat: "Politique", date: "16 octobre 2026", resume: "Le vote s’est joué à une poignée de voix dans un hémicycle tendu.", lien: "art1.html" },
  { titre: "Exemple : les marchés européens ouvrent en légère hausse", cat: "Économie", date: "16 octobre 2026", resume: "Les investisseurs attendent les chiffres de l’emploi.", lien: "art2.html" },
  { titre: "Exemple : une exposition consacrée aux machines à écrire", cat: "Culture", date: "15 octobre 2026", resume: "Quatre-vingts modèles anciens réunis dans un musée de province.", lien: "art3.html" },
  { titre: "Exemple : le championnat bascule lors de la dernière journée", cat: "Sport", date: "15 octobre 2026", resume: "Un but à la 93e minute change le classement.", lien: "art4.html" },
  { titre: "Exemple : la sécheresse touche de nouveaux départements", cat: "Société", date: "14 octobre 2026", resume: "Les restrictions d’eau s’étendent à l’ensemble du bassin.", lien: "art5.html" }
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
