/* =====================================================
   LE RUBAN : LISTE DES ARTICLES
   Pour publier : ajoute UNE ligne ci-dessous (la plus récente en premier).
   Les catégories apparaissent toutes seules dans le menu.
   ===================================================== */
const ARTICLES = [
  { titre: "Le Ruban : Journal d'actualité politique, quoi de neuf ?", cat: "A Propos", date: "16 octobre 2026", resume: "Le Ruban, nouveau journal d'actualité en ligne, présentation par La Rédaction.", lien: "art0.html" },
  { titre: "Blocus lycéens : Que va faire le gouvernement ?", cat: "Politique", date: "17 octobre 2026", resume: "Après des manifestations intensive des collectifs lycéens, avec des actions parfois controversées, que va faire le Gouvernement ?", lien: "art1.html" }
];

const MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
function lireDate(txt) {
  txt = String(txt).toLowerCase().trim();
  let m = txt.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]).getTime();
  m = txt.match(/(\d{1,2})\s*(?:er)?\s+([a-zéûè]+)\s+(\d{4})/);
  const i = m ? MOIS.indexOf(m[2].replace('fevrier', 'février').replace('aout', 'août').replace('decembre', 'décembre')) : -1;
  if (i === -1) { console.warn('Date non reconnue :', txt); return 0; }
  return new Date(+m[3], i, +m[1]).getTime();
}
ARTICLES.map((a, n) => ({ a, n }))
  .sort((x, y) => lireDate(y.a.date) - lireDate(x.a.date) || y.n - x.n)
  .forEach((o, k) => { ARTICLES[k] = o.a; });
 
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
