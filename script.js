//tableau de liens
const linkArray = ["https://www.youtube.com/watch?v=4_1sKQP3Uo4", "https://wikiroulette.co/", "https://thesecatsdonotexist.com/", "https://theuselessweb.com/", "https://www.kamoulox.lol/","https://fr.wikihow.com/faire-une-pause-avec-les-r%C3%A9seaux-sociaux","https://fr.wikihow.com/surmonter-la-cyberd%C3%A9pendance", "https://lasonotheque.org/jeux/quiz-sonore", "https://perdu.com/", "http://make-everything-ok.com/", "https://pointerpointer.com/"];
//appelle la fonction popup toute les X millis avec comme paramètre 4
const intervalID = setInterval(popUp, 1000000, linkArray.length);

//alerte qui affiche le paramètre randomisé par la multiplication puis transformé en entier par math.floor
function popUp(a) {
  window.open(linkArray[Math.floor(Math.random() * a)]);
}
