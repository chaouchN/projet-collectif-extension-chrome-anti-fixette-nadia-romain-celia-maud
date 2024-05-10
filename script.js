const bazar = [
  "https://wikiroulette.com/",
  "https://thesecatsdonotexist.com/",
  "https://theuselessweb.com/",
  "https://www.kamoulox.lol/",
  "https://fr.wikihow.com/faire-une-pause-avec-les-r%C3%A9seaux-sociaux",
  "https://fr.wikihow.com/surmonter-la-cyberd%C3%A9pendance",
  "https://lasonotheque.org/jeux/quiz-sonore",
  "https://perdu.com/",
  "http://make-everything-ok.com/",
  "https://pointerpointer.com/",
];
const porn = "https://www.youtube.com/watch?v=4_1sKQP3Uo4";
const midi = [
  "https://www.youtube.com/watch?v=8-lCVMAZBhM",
  "https://www.sports.gouv.fr/les-bienfaits-du-sport-25",
];


const domainesUrls = {
  "www.youtube.com": "https://thesecatsdonotexist.com/",
  "www.amazon.com": "https://www.vinted.com/",
  "www.amazon.fr": "https://www.leboncoin.fr/",
  "www.google.com":"https://wikiroulette.co/",
  "www.facebook.com":"https://theuselessweb.com/",
  "www.instagram.com":"https://www.kamoulox.lol/",
  "twitter.com":"https://fr.wikihow.com/faire-une-pause-avec-les-r%C3%A9seaux-sociaux",
  "www.wikipedia.org":"https://fr.wikihow.com/surmonter-la-cyberd%C3%A9pendance",
  "www.yahoo.com":"https://lasonotheque.org/jeux/quiz-sonore",
  "web.whatsapp.com":"http://make-everything-ok.com/",
  "www.xvideos.com":"https://fr.wikihow.com/nettoyer-un-%C3%A9cran-d%E2%80%99ordinateur",
  "www.tiktok.com":"https://pointerpointer.com/",
  "fr.pornhub.com":"https://fr.wikihow.com/nettoyer-un-%C3%A9cran-d%E2%80%99ordinateur",
  // Ajoutez d'autres correspondances au besoin
};

const hourDay = new Date().getHours();
const intervalID = setInterval(popUp, 5000, bazar.length);
 // Récupérer le nom de domaine actuel 


//appelle la fonction popup toute les X millis avec comme paramètre 4
//alerte qui affiche le paramètre randomisé par la multiplication puis transformé en entier par math.floor
function popUp(a) {
let domaine = window.location.hostname;
  if (hourDay >= 12 && hourDay <= 14) {
    window.open(midi[Math.floor(Math.random() * midi.length)]);
  } else // Vérifier si le domaine actuel a une correspondance dans la liste
  if (domaine in domainesUrls) {
   // Ouvrir l'URL correspondante pour le domaine actuel
   window.location.href = domainesUrls[domaine];
 } else {
   // Si aucun domaine correspondant n'est trouvé, ouvrir une URL générique
   window.open(bazar[Math.floor(Math.random() * a)]);
 }
}
