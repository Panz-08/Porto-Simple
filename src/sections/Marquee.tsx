import { site } from "../config/site";
import "./Marquee.css";

const REPEAT = 4;

/** Pita kata berjalan. Dekoratif, jadi disembunyikan dari pembaca layar. */
export function Marquee() {
  const words = Array.from({ length: REPEAT }, () => site.marquee).flat();

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
}
