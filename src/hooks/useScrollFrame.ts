import { useEffect, useRef } from "react";

/**
 * Menjalankan callback satu kali per frame saat scroll atau resize,
 * dan sekali di awal. Callback terbaru selalu dipakai tanpa memasang ulang listener.
 */
export function useScrollFrame(callback: () => void) {
  const latest = useRef(callback);
  latest.current = callback;

  useEffect(() => {
    let frame = 0;

    const run = () => {
      frame = 0;
      latest.current();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    run();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
