import Image from "next/image";

const logos = [
  { src: "/reference-assets/adviest/Yg8dAfpwRjbExvmOSbt26OHTJu8.svg", w: 152, h: 28 },
  { src: "/reference-assets/adviest/4TUjaTEnKAcWv7ghXUsBaRXx7fk.svg", w: 142, h: 22 },
  { src: "/reference-assets/adviest/TVuuWCrHWvJTP85qP6WmxCA2vMg.svg", w: 122, h: 22 },
  { src: "/reference-assets/adviest/C1il2dIUmabuXa1inwQA7i6sCY.svg", w: 133, h: 22 },
  { src: "/reference-assets/adviest/T8nJknVCwXBGAlfuC8C3Z5pZPAk.svg", w: 113, h: 22 },
  { src: "/reference-assets/adviest/51Fdd4S0S8qaz8T41jJaeXfVE.svg", w: 120, h: 22 },
];

export function TrustBar() {
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-[#0D1218] px-5 py-10">
      <div className="mx-auto max-w-[1536px] flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <p className="text-[#94A9BE] text-[16px] shrink-0 max-w-[220px] leading-snug">
          Trusted by Leading Companies
        </p>

        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0D1218] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0D1218] to-transparent z-10 pointer-events-none" />
          <div className="flex items-center gap-14 w-max animate-[refmarquee_32s_linear_infinite] hover:[animation-play-state:paused]">
            {doubled.map((logo, i) => (
              <Image key={i} src={logo.src} alt="Client logo" width={logo.w} height={logo.h} className="shrink-0 opacity-80" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
