//tableau de liens
const linkArray = ["lien 0", "lien 1", "lien 2", "lien 3"];

//appelle la fonction popup toute les X millis avec comme paramètre 4
const intervalID = setInterval(popUp, 10000, 4);

//alerte qui affiche le paramètre randomisé par la multiplication puis transformé en entier par math.floor
function popUp(a) {
  alert(linkArray[Math.floor(Math.random() * a)]);
}

