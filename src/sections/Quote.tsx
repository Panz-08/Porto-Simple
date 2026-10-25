import { Fragment, useRef, useState } from "react";
import { site } from "../config/site";
import { useReducedMotion } from "../hooks/useMediaQuery";
import { useScrollFrame } from "../hooks/useScrollFrame";
import { cx } from "../utils/cx";
import "./Quote.css";

const words = site.quote.split(" ");

/** Kutipan besar yang kata-katanya menyala satu per satu saat digulir. */
export function Quote() {
  const reduced = useReducedMotion();
  const [lit, setLit] = useState(0);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useScrollFrame(() => {
    const line = window.innerHeight * 0.72;
    let count = 0;
    for (const el of refs.current) {
      if (el && el.getBoundingClientRect().top < line) count++;
    }
    setLit(count);
  });

  return (
    <div className="quote">
      <div className="wrap">
        <p aria-label={site.quote}>
          {words.map((word, index) => (
            <Fragment key={index}>
              <span
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={cx("w", (reduced || index < lit) && "lit")}
                aria-hidden="true"
              >
                {word}
              </span>
              {index < words.length - 1 && " "}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
