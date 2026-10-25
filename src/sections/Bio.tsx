import { useRef } from "react";
import { Reveal } from "../components/Reveal";
import { RichText } from "../components/RichText";
import { SectionHeading } from "../components/SectionHeading";
import { SECTION_IDS } from "../config/sections";
import { fullName, site } from "../config/site";
import { useScrollFrame } from "../hooks/useScrollFrame";
import "./Bio.css";

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export function Bio() {
  const { name, portrait, bio } = site;
  const gridRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);

  const initials =
    portrait.initials ?? `${name.first.charAt(0)}${name.last.charAt(0)}`.toUpperCase();

  // Sisi kedua potret terbuka dari bawah mengikuti progres scroll di bagian ini.
  useScrollFrame(() => {
    const grid = gridRef.current;
    const back = backRef.current;
    const bar = barRef.current;
    if (!grid || !back || !bar) return;

    const rect = grid.getBoundingClientRect();
    const total = rect.height - window.innerHeight + 220;
    let progress = clamp01(total > 0 ? (220 - rect.top) / total : 0);

    if (window.innerWidth <= 860) {
      progress = clamp01((window.innerHeight * 0.7 - rect.top) / rect.height);
    }

    back.style.clipPath = `inset(${100 - progress * 100}% 0 0 0)`;
    bar.style.transform = `scaleX(${progress})`;
  });

  return (
    <section className="section" id={SECTION_IDS.bio}>
      <div className="wrap">
        <SectionHeading>{bio.heading}</SectionHeading>

        <div className="bio-grid" ref={gridRef}>
          <div className="portrait">
            <div className="frame">
              <div className="face a">
                {portrait.frontImage ? (
                  <img src={portrait.frontImage} alt={fullName} loading="lazy" decoding="async" />
                ) : (
                  <span aria-hidden="true">{initials}</span>
                )}
              </div>
              <div className="face b" ref={backRef}>
                {portrait.backImage ? (
                  <img src={portrait.backImage} alt="" loading="lazy" decoding="async" />
                ) : (
                  <div>
                    <strong>{portrait.backTitle}</strong>
                    <span>{portrait.backCaption}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bar" aria-hidden="true">
              <i ref={barRef} />
            </div>
            <p className="cap">{portrait.hint}</p>
          </div>

          <div>
            <Reveal as="p" className="lead">
              {bio.lead}
            </Reveal>

            <Reveal className="prose" delay={0.08}>
              {bio.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </Reveal>

            <Reveal as="dl" className="facts" delay={0.16}>
              {bio.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </Reveal>

            <div className="journey">
              <Reveal as="h3">{bio.journeyTitle}</Reveal>
              {bio.journey.map((step, index) => (
                <Reveal className="step" key={step.year} delay={(index % 3) * 0.08}>
                  <b>{step.year}</b>
                  <p>
                    <strong>{step.title}</strong>
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
