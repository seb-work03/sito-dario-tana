# Behaviors — adviest.framer.ai (riferimento)

Rilevati via Chrome MCP il 2026-07-20 con sweep di scroll su desktop (1536px) e verifica mobile (390px). Confrontati con l'implementazione già presente nel sito Dario Tana.

## Reveal on scroll
- **Trigger:** IntersectionObserver-style (Framer `whileInView`), soglia ~20% dell'elemento visibile, `once: true` (non si ripete al re-ingresso).
- **Stato iniziale → finale:** `opacity: 0, y: +24/+40px` → `opacity: 1, y: 0`. Per gli headline, split per parola con `y: 110% → 0%` dentro un contenitore `overflow: hidden` (effetto "mask reveal" riga per riga).
- **Transizione:** durate 0.6–1s, easing simile a `cubic-bezier(0.19,1,0.22,1)` (out-expo), piccoli stagger tra parole/elementi (~0.05–0.15s).
- **Implementazione nel sito Dario Tana:** replicata 1:1 in `components/animations/FadeIn.tsx` (fade+translate) e `RevealText.tsx` (mask reveal per parola), già usate in tutte le sezioni.

## Header sticky
- **Trigger:** `scrollY > 20px`.
- **Stato A:** sfondo trasparente. **Stato B:** sfondo scuro/chiaro semi-opaco + blur.
- **Transizione:** CSS transition ~300-500ms.
- Già implementato in `components/layout/Header.tsx` (classe `scrolled`, backdrop-blur).

## Marquee loghi
- Scorrimento orizzontale infinito (`translateX(0) → translateX(-50%)`, loop lineare), lista duplicata per continuità, fade ai bordi con gradiente.
- Pausa al passaggio del mouse (`hover:[animation-play-state:paused]` nel sito Dario Tana — comportamento coerente/migliorativo rispetto al riferimento).
- Implementato in `components/sections/TrustBar.tsx` + keyframe `marquee` in `tailwind.config.ts`.

## Hover su liste numerate (Servizi)
- **Trigger:** `mouseenter`/`mouseleave` sulla riga.
- **Stato A → B:** colore numero/titolo da neutro a celeste, cerchio del numero passa da bordo neutro a bordo+sfondo celeste, linea sottostante `scaleX: 0 → 1` (origin-left).
- Implementato in `components/sections/ServicesSection.tsx`.

## Card offset stacking (Approccio)
- Su desktop: 4 card posizionate in `absolute` con offset verticali/orizzontali alternati (effetto "sfalsato"), reveal in sequenza con stagger, `whileHover: { y: -8 }` per sollevare la card.
- Su mobile: si impila verticalmente in un unico flusso (nessun absolute positioning).
- Implementato in `components/sections/ApproachSection.tsx`.

## Slider testimonianze
- **Trigger:** click su frecce prev/next (non è scroll-driven — verificato scrollando lentamente senza che il contenuto cambiasse automaticamente).
- Transizione crossfade `AnimatePresence mode="wait"` con `y: 10 → 0` in entrata, `y: -10` in uscita, durata ~0.4s.
- Implementato in `components/sections/TestimonialsSection.tsx`.

## Tab verticali (dati/audience)
- **Trigger:** click sul tab (non scroll-driven).
- Contenuto a destra cambia con crossfade (`AnimatePresence`), tab attivo evidenziato con sfondo pieno e icona che ruota.
- Implementato in `components/sections/AudienceSection.tsx`.

## Accordion FAQ
- **Trigger:** click sulla domanda.
- Icona `+` ruota a 45° (diventa `×`) quando aperta; contenuto si espande con `height: 0 → auto` e fade, durata ~0.4s, easing out-expo.
- Implementato in `components/sections/FaqSection.tsx`.

## Responsive
- **Desktop (≥1024px):** nav orizzontale centrata, layout a colonne multiple, card offset assolute nell'Approccio.
- **Tablet (768–1023px):** nav desktop nascosta, hamburger; grid a 2 colonne dove il desktop ne ha 3-4.
- **Mobile (<768px):** tutto in singola colonna, card Approccio impilate verticalmente, header con menu overlay a schermo intero.
- Nessun overflow orizzontale rilevato nel riferimento a nessuna delle tre larghezze.

## Libreria di scroll
- Nessuna libreria di smooth-scroll (Lenis/Locomotive) rilevata: scroll nativo del browser con `scroll-behavior: smooth` per le ancore. Il sito Dario Tana replica questa scelta in `app/globals.css`.
