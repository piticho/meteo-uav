// Service worker mínimo: solo sirve para que el navegador permita instalar la app.
// No guarda nada en caché; todas las peticiones van a la red como siempre.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
