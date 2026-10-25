import { useInView } from "../hooks/useInView";
import { cx } from "../utils/cx";
import "./SectionHeading.css";

/** Judul bagian dengan teks yang naik dari balik garis saat terlihat. */
export function SectionHeading({ children }: { children: string }) {
  const [ref, shown] = useInView<HTMLSpanElement>();

  return (
    <h2 className="sec-h">
      <span ref={ref} className={cx("mask", shown && "in")}>
        <span>{children}</span>
      </span>
    </h2>
  );
}
