# Reference assets — ricostruzione fedele temporanea

Questo documento elenca le risorse scaricate da `https://adviest.framer.ai/` (CDN `framerusercontent.com`) e salvate in `public/reference-assets/adviest/` per la fase di ricostruzione fedele del frontend (vedi `app/page.tsx` e `components/reference-clone/`).

**Queste risorse sono temporanee.** Verranno sostituite con contenuti e immagini reali di Dario Tana (o con licenza compatibile) prima della pubblicazione definitiva. Non sono hotlinkate: tutti i file sono stati scaricati e serviti localmente.

## Provenienza

Tutte le immagini provengono dalla CDN pubblica `https://framerusercontent.com/images/...` così come referenziata dal markup di `https://adviest.framer.ai/` al momento dell'analisi (2026-07-21). Nessun video è presente sulla homepage del riferimento (solo immagini `<img>`, nessun `background-image` CSS, nessun elemento `<video>`).

## Mappatura per sezione

| File | Utilizzo nel clone | Contenuto reale |
|---|---|---|
| `kS4IUkso6eoSwwkNJt8iut6Qo.svg` | non utilizzato (logo testuale "Adviest" riprodotto come testo) | logo SVG del riferimento |
| `i3hyvUzl7FhrcIR6gR2nigcrK0.png` | Hero — ritratto sulla card blu | fotografia, donna con cartella professionale |
| `Yg8dAfpwRjbExvmOSbt26OHTJu8.svg` … `51Fdd4S0S8qaz8T41jJaeXfVE.svg` (6 file) | Trust bar — marquee loghi | loghi placeholder "Logoipsum" |
| `lWBGvORq26aRQEptEZJQdspijzk.jpg` | About — foto con citazione overlay | fotografia, donna con telefono/caffè |
| `Frr87XRtMwvMp0tFB6pIPmdE.jpg` | About — foto grattacieli | fotografia, grattacieli finanziari |
| `cDLsgPeqL3pVLJhyEAVtGkcw0A.jpg` | About — badge "Revenue growth" overlay | mockup UI (badge) |
| `NvZiTw96HWXcrbBJEfgmR444VR4.jpg` | About — card "Performance reports" | mockup UI (grafico linea + assi data) |
| `fyJf6KtkbPj5vEpJXQT8mlRMLI.jpg` | About — badge "Revenue +12,892K" | mockup UI (badge) |
| `orECDk1yHAceniWXq7yKvfvv7Y.jpg` | Services — foto sticky | fotografia, uomo con occhiali al laptop |
| `U2BCGakYtmoTeb2cJuHIw7BiCWA.jpg` | Insights — foto tab "Institutions"/"Executives" | fotografia, due colleghi al laptop |
| `JjUw52EussY8kwoSstWgrw6glNA.jpg` | Insights — foto tab "Corporates" | fotografia, donna con tablet |
| `JctX5w47uDkusOAsdQO5gGY4pzM.jpg` | Insights — overlay grafico "Sales" | mockup UI (grafico a barre) |
| `sKfOtNNshIWgszaVsZ1LVN9BjUw.jpg` | Insights — overlay "Instagram/Facebook/Twitter" | mockup UI (bolle canali social) |
| `pK0MgeT7XpWRNeefyNQiRiZz7nQ.jpg`, `2HY57myX3y7mgS1UFfrGVyN2yPw.jpg`, `h4Vde8UkfZBpzplF7BaH0980o.jpg`, `Bbboi4AXyPJPomZeBfoeBQjvFfA.jpg`, `0MOEYyAAQpBf4BhTNL0rh0kmJoU.jpg` | Experience — foto delle 5 righe alternate | fotografie di contesto ufficio/finanza |
| `6KOKZ6o9umNtbSW8DNXdQdttgbU.png` | Testimonials — foto "Emily Johnson" | headshot professionale |
| `pWdflF1Kk7imAbImoSDBfTT3JsE.png` | Testimonials — foto "Sophia Martinez" | headshot professionale |
| `8nmd4a4Fuz2gP25iKfTc5Obrs.png` | Testimonials — foto "Daniel Carter" | headshot professionale |
| `f8wibq1eCPCZfEQ5A4AAJJrSAA.png` | non utilizzato (wordmark "ADVISORY" riprodotto come testo) | immagine con contorno testuale "ADVISORY" |
| `DMlUCGGMzVafAtP3YgY1Z7nAfhE.jpg` | non utilizzato in questa iterazione | mockup UI (elenco ricavi per sede) |
| `w3a6K30kwRgfW5LWY8jl0URTDwo.png` | non utilizzato (immagine vuota/trasparente) | — |
| `23vOiraARMkLH53nLLcz9iY3M4.svg`, `6KOKZ6o9umNtbSW8DNXdQdttgbU.png`* | non mappati con certezza in questa iterazione | icone/decorazioni minori |

*alcuni SVG minori (icone) presenti nel markup del riferimento non sono stati assegnati a un uso specifico nel clone; sono comunque scaricati e disponibili in `public/reference-assets/adviest/` per un secondo passaggio.

## Note tecniche

- Script di download: `scripts/download-reference-assets.mjs` (temporaneo, non usato dal build di produzione).
- Alcune assegnazioni immagine↔sezione sono state determinate tramite lettura diretta del contenuto dei file (poiché più file condividevano dimensioni simili) piuttosto che tramite solo l'ordine nel DOM; è possibile che 1-2 immagini minori delle sezioni "Experience" non siano nell'ordine esatto del riferimento.
- Le risposte complete alle 4 domande FAQ successive alla prima non sono state estraibili: il click sull'elemento accordion del riferimento non era riproducibile tramite automazione browser (probabile gesture handler Framer non standard). Il componente `components/reference-clone/Faq.tsx` riporta questa lacuna esplicitamente nel testo placeholder.
