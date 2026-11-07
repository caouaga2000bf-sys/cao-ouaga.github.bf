/* Internet obligatoire : ce fichier ne garde aucune copie hors ligne. Il supprime les anciennes copies et se retire lui-même. */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.map(n=>caches.delete(n)))).then(()=>self.registration.unregister())));
