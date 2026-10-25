import { cx } from "../utils/cx";

interface SplitTextProps {
  text: string;
  /** Jumlah huruf sebelum baris ini, supaya animasi berlanjut antar baris. */
  offset?: number;
  className?: string;
}

/** Memecah teks per huruf agar bisa dianimasikan naik satu per satu. */
export function SplitText({ text, offset = 0, className }: SplitTextProps) {
  return (
    <span className={cx("ln", className)} aria-hidden="true">
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          className="ch"
          style={{ animationDelay: `${0.15 + (index + offset) * 0.07}s` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
