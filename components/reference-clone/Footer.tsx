import { Send } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

const columnA = [
  { label: "Services", href: "#service" },
  { label: "About", href: "#about-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contatti" },
];

const columnB = [
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#17222F] px-5 pt-16 pb-8 overflow-hidden">
      <div className="mx-auto max-w-[1536px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">
          <div>
            <h2 className="text-[#EDF2F7] font-medium text-[28px] md:text-[44px] leading-[1.15] max-w-lg mb-8">
              Professional Banking and Investment Adviest Services.
            </h2>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/8 hover:bg-[#77C0CF]/15 border border-white/10 flex items-center justify-center text-[#94A9BE] hover:text-[#77C0CF] transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Telegram" className="w-11 h-11 rounded-full bg-white/8 hover:bg-[#77C0CF]/15 border border-white/10 flex items-center justify-center text-[#94A9BE] hover:text-[#77C0CF] transition-colors">
                <Send size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-11 h-11 rounded-full bg-white/8 hover:bg-[#77C0CF]/15 border border-white/10 flex items-center justify-center text-[#94A9BE] hover:text-[#77C0CF] transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="flex gap-16 shrink-0">
            <ul className="flex flex-col gap-3">
              {columnA.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#C1CEDF] hover:text-[#77C0CF] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {columnB.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#C1CEDF] hover:text-[#77C0CF] transition-colors inline-flex items-center gap-1">
                    {l.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-10 mb-6">
          <p
            className="text-[#EDF2F7]/10 font-bold leading-[0.9] whitespace-nowrap select-none"
            style={{ fontSize: "clamp(3rem, 13vw, 9rem)" }}
            aria-hidden="true"
          >
            ADVISORY
          </p>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#4F6577] text-sm">
          <span>contact@advisory.com</span>
          <span>© 2025 Adviest</span>
          <span>Global Adviest Solutions</span>
        </div>
      </div>
    </footer>
  );
}
