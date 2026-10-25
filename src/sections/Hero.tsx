import type { CSSProperties } from "react";
import { fullName, site } from "../config/site";
import { SplitText } from "./SplitText";
import "./Hero.css";

export function Hero() {
  const { name, hero } = site;
  const lines = [name.first, name.last].filter((line) => line.length > 0);

  // Nama yang panjang diperkecil otomatis supaya tidak melebihi lebar layar.
  const longest = Math.max(...lines.map((line) => line.length));
  const scale = Math.min(1, 7 / longest);
  const offsets = lines.map((_, i) => lines.slice(0, i).reduce((sum, l) => sum + l.length, 0));

  return (
    <div className="wrap hero">
      <div className="hero-meta">
        {hero.meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <h1 className="name" aria-label={fullName} style={{ "--name-scale": scale } as CSSProperties}>
        {lines.map((line, i) => (
          <SplitText
            key={`${line}-${i}`}
            text={line}
            offset={offsets[i]}
            className={i > 0 ? "ln-last" : undefined}
          />
        ))}
      </h1>

      <div className="hero-foot fade">
        <p>{hero.intro}</p>
        <div className="badges">
          <span className="badge live">
            <i aria-hidden="true" />
            {hero.availability}
          </span>
          <span className="badge">{hero.tags}</span>
        </div>
      </div>
    </div>
  );
}
