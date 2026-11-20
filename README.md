# Meteo UAV

Previsión meteorológica gratuita para volar drones y aeromodelos: sin publicidad, sin registro, y funciona en el móvil y en el PC.

**Abrir la app:** https://piticho.github.io/meteo-uav/

*English version below.*

## Qué hace

- **Veredicto rápido**: para cada hora dice si hay buenas condiciones, si hay que ir con precaución o si es mejor no volar. Lo calcula según los límites del aparato que elijas.
- **Viento por altura**: muestra el viento en superficie y a las alturas que configures para cada aparato, hasta 2000 m sobre el suelo. Las alturas altas se calculan con los niveles de presión del modelo.
- **Fuerza Beaufort** junto a cada valor de viento.
- **Rachas, lluvia, nubes, visibilidad, temperatura, humedad, presión, índice UV, calidad del aire y tormentas**, hora a hora, durante 7 días.
- **Comparación de modelos**: enfrenta ECMWF, ICON y GFS para ver si la previsión es fiable.
- **Índice Kp** de actividad geomagnética.
- **Satélites visibles** de GPS, Galileo, GLONASS y BeiDou, con una elevación mínima configurable.
- **Mapa de zonas UAS de ENAIRE**: indica si un punto está en una zona restringida a tu altura de vuelo.
- **NOTAM de ENAIRE**: los muestra en el mapa y avisa de los que están vigentes a la hora y en el punto elegidos.
- **Zonas medioambientales** (espacios naturales protegidos y ZEPA), a título informativo.
- **Mapas del IGN**: mapa base y ortofoto, con **radar de lluvia** opcional (últimas 2 horas).
- **Favoritos con nombre** y aparatos con sus propios límites. Todo se guarda solo en tu navegador.
- **Enlace para compartir** que abre la app directamente en un sitio.
- Si al abrirla estás lejos del último sitio usado, **te propone tu ubicación actual**.
- Disponible en **español e inglés**, con viento en km/h, m/s o nudos.
- **Se puede instalar como app** (en el menú del navegador, «Añadir a pantalla de inicio») y entonces se abre a pantalla completa, sin barra de direcciones.

## Privacidad

La app es una única página web estática. No tiene servidor propio, no usa cuentas y no recoge datos. Tus favoritos, aparatos y ajustes se quedan en tu navegador (localStorage). La ubicación solo se usa para pedir la previsión de ese punto.

## Fuentes de datos

- Previsión: [Open-Meteo](https://open-meteo.com/) (CC BY 4.0)
- Índice Kp: [NOAA SWPC](https://www.swpc.noaa.gov/)
- Órbitas de satélites: [CelesTrak](https://celestrak.org/)
- Zonas UAS, NOTAM y zonas medioambientales: [ENAIRE Drones](https://drones.enaire.es/)
- Calidad del aire: [Open-Meteo Air Quality](https://open-meteo.com/en/docs/air-quality-api) (CAMS)
- Radar de lluvia: [Weather data by RainViewer](https://www.rainviewer.com/)
- Mapa y ortofoto: © [IGN](https://www.ign.es/); geocodificación: © [OpenStreetMap](https://www.openstreetmap.org/copyright)

## Aviso

Meteo UAV es una herramienta gratuita y meramente informativa. Los datos proceden de servicios de terceros y pueden contener errores, retrasos o diferencias con la realidad. El autor no garantiza su exactitud ni su disponibilidad, y no se hace responsable de las decisiones que se tomen a partir de ellos ni de sus consecuencias. La decisión de volar, la comprobación de las zonas y los NOTAM en las fuentes oficiales y el cumplimiento de la normativa vigente son responsabilidad exclusiva del piloto. La referencia oficial de zonas y NOTAM es [ENAIRE Drones](https://drones.enaire.es/). La decisión de volar y el cumplimiento de la normativa son responsabilidad del piloto.

---

## English

Free weather forecast for flying drones and model aircraft, with no ads and no sign-up.

**Open the app:** https://piticho.github.io/meteo-uav/

Features:
- A go / caution / no-go verdict for each hour, based on your aircraft's limits.
- Wind at configurable heights up to 2000 m above ground.
- Beaufort force next to every wind value.
- Gusts, rain, clouds, visibility, temperature, humidity, pressure, UV index, air quality and storms over a 7-day forecast.
- Model comparison across ECMWF, ICON and GFS.
- Kp index.
- Visible GNSS satellites.
- Spanish UAS zones, NOTAM and environmental areas from ENAIRE.
- IGN maps with optional rain radar.
- Named favourites.
- Shareable links.
- Installable as an app that opens full screen.

All data stays in your browser.

The app is for information only. The pilot is responsible for the decision to fly and for complying with regulations.
