# Page Topology — adviest.framer.ai (riferimento) → dariotana.it

Ricognizione svolta via Chrome MCP il 2026-07-20 su https://adviest.framer.ai/, a integrazione del lavoro di redesign già impostato in `components/sections/*`. Questo documento mappa le sezioni della home del riferimento e la loro trasposizione nel sito Dario Tana.

## Layout generale
- Header fisso (`position: fixed`), trasparente in cima, sfondo sfumato/blur dopo lo scroll (soglia ~20px). Logo a sinistra, nav centrata, CTA "Get Started" a destra, hamburger sotto breakpoint `lg`.
- Un solo scroll container nativo (nessuna libreria di smooth-scroll tipo Lenis rilevata: lo scroll è quello nativo del browser, con reveal-on-scroll via IntersectionObserver-style trigger di Framer Motion).
- Sequenza di sezioni alternate: sfondo chiaro (`#F7F8FA` circa) e pannelli blu/celeste (`#5B77B0`-ish nel riferimento, `#31C6F2` nel sito Dario Tana) arrotondati (radius grandi, 24–40px), a piena larghezza del contenitore.
- Footer con pannello CTA colorato + colonne link + wordmark gigante a piena larghezza + bottom bar.

## Sezioni rilevate (ordine top→bottom)
1. **Hero** — card blu arrotondata, headline gigante sovrapposta a una fotografia ritratto (parola per parola reveal dal basso), colonna descrizione + CTA a destra.
2. **Trust bar** — marquee orizzontale di loghi clienti, dicitura "Trusted by Leading Companies" a sinistra, fade ai bordi.
3. **About / Chi siamo** — headline + 3 riquadri affiancati: foto+citazione, foto ambientale, mockup dashboard con grafico animato (`pathLength` draw-on-scroll) + badge rating.
4. **Servizi** — titolo + foto sticky a sinistra, lista numerata (01–04) a destra con hover che cambia colore testo/numero e disegna una linea sottostante.
5. **Approccio / Metodo** — pannello blu a piena larghezza, 4 card numerate in stacking sfalsato (offset verticale/orizzontale) che si sollevano all'hover.
6. **Ambiti di intervento / Engagements** — righe alternate foto/testo (sinistra/destra) con numero progressivo e titolo grande.
7. **Testimonianze** — pannello blu, card bianca con foto + quote grande, frecce prev/next, transizione crossfade tra testimonianze.
8. **Dati / Analisi** — sezione con tab verticali (For Institutions / For Corporates / For Executives — analogo a "Con chi lavoro" nel sito Dario Tana) + contenuto dinamico a destra con foto e mockup.
9. **FAQ** — titolo sticky a sinistra + CTA, accordion a destra con icona +/- che ruota a 45° in apertura.
10. **Footer** — pannello blu con headline CTA + bottone, colonne di link, wordmark gigante ("ADVISORY"/"DARIO.TANA"), bottom bar con copyright e link legali.

## Corrispondenza con l'architettura del sito Dario Tana
Il redesign già presente in `components/sections/` replica fedelmente questa sequenza (Hero, TrustBar, About, Services, Approach, Engagements, Testimonials, Audience, FAQ, Footer) con branding e contenuti propri. Le pagine aggiuntive richieste (Chi sono, Servizi, Formazione e docenza, Casi studio, Blog, Contatti) non hanno un equivalente 1:1 nel riferimento (sito one-page): riusano lo stesso linguaggio visivo (dark `ink`, accenti `celeste`, tipografia Inter, componenti `FadeIn`/`RevealText`/`Container`/`Button`/`SectionLabel`) applicato a layout e contenuti propri di un sito multi-pagina.
