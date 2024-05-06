let recup = []; // Variable pour stocker les adresses personnelles
// let bazar = [];

// Début du chargement de l'extension
// On récupère les URL stockés dans le stockage local sous la clé "recupurl"
// et on les ajoute un par un dans la variable "bazar"
chrome.runtime.onInstalled.addListener(async () => {
  // Récupérer les URL du stockage local
  const storedUrls = await chrome.storage.local.get('recupurl');
  const recupUrl = storedUrls.recupurl || [];

  // Ajouter les URL récupérés un par un dans "bazar"
  for (const url of recupUrl) {
    bazar.push(url);
    console.log("url is pushed in bazar service-worker.js")
  }
});