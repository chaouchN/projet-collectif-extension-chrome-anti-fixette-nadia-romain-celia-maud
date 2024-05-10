// Début du chargement de l'extension
// On récupère les URL stockés dans le stockage local sous la clé "recupurl"
// et on les ajoute un par un dans la variable "bazar"
chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.local.get(null, (items) => {
    chrome.runtime.sendMessage({ type: "customBazar", content: items });
    console.log("contenu de mon storage", items);
  });

  chrome.runtime.onMessage.addListener(async (message) => {
    if (message.type === 'update-bazar') {
      const customLink = message.newUrl;
      const chromeStorage = {};
      
      let newBazarContent = await chrome.storage.local.get('newBazar');
      chrome.runtime.sendMessage({ type: "newBazarUpdate", newBazar: newBazarContent['newBazar'] });
        console.log("newBazarContent = ", newBazarContent)
        
        if(!newBazarContent){newBazarContent = {};} 
        if(!newBazarContent['newBazar']){newBazarContent['newBazar'] = []}
        newBazarContent['newBazar'].push(customLink)
        // newBazarContent['newBazar'] = [customLink];
        console.log(newBazarContent)

        chrome.storage.local.set(newBazarContent, () => {
            if (chrome.runtime.lastError) {
                console.error("Error in setting data: ", chrome.runtime.lastError);
            } else {
                console.log("bazar updated in service-worker.js", customLink);
              }  
        });
    }
});
  
})
  
// Récupérer les URL du stockage local
  // const storedUrls = [];
  // const recupUrl = bazar;

  // Ajouter les URL récupérés un par un dans "bazar"
//   for (const url of recupUrl) {
//     bazar.push(url);
//     console.log("url is pushed in bazar service-worker.js")
//   }
// });

//recevoir du script.js


