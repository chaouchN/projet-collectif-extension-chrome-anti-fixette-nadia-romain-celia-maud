const debug = document.getElementById("debug");

const bazar = [
  "https://wikiroulette.co/",
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

const hourDay = new Date().getHours();
const intervalID = setInterval(popUp, 100000, bazar.length);

//appelle la fonction popup toute les X millis avec comme paramètre 4
//alerte qui affiche le paramètre randomisé par la multiplication puis transformé en entier par math.floor
function popUp(a) {
  if (hourDay >= 12 && hourDay <= 14) {
    window.open(midi[Math.floor(Math.random() * midi.length)]);
  } else {
    window.open(bazar[Math.floor(Math.random() * a)]);
  }
}

// function fetchTableau() {
//   return fetch("tableau.json")
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Erreur lors de la récupération du fichier JSON :", error);
//     });
// }

// let tableauDataPromise = fetchTableau();
// console.log(tableauDataPromise);

// tableauDataPromise.then((data) => {
// });

// document.querySelector('button').addEventListener('click', onOff, false);
// function onOff(){
//   let currentvalue = document.getElementById('onoff').value;
//   if(currentvalue == "Off"){
//     document.getElementById("onoff").value="On";
//   }else{
//     document.getElementById("onoff").value="Off";
//   }
//   alert("testOnOff");
//   debug.innerHTML="testOnOff";
// }
