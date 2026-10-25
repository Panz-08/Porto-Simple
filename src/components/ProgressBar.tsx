import { useRef } from "react";
import { useScrollFrame } from "../hooks/useScrollFrame";
import "./ProgressBar.css";

/** Garis tipis di atas layar yang menunjukkan sejauh mana halaman sudah digulir. */
export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  });

  return <div className="progress" ref={ref} aria-hidden="true" />;
}
