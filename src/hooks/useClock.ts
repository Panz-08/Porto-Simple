import { useEffect, useState } from "react";

function formatTime(locale: string, timeZone: string): string {
  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  })
    .format(new Date())
    .replace(".", ":");
}

/** Jam setempat dalam zona waktu tertentu, diperbarui tiap 30 detik. */
export function useClock(locale: string, timeZone: string): string {
  const [time, setTime] = useState(() => formatTime(locale, timeZone));

  useEffect(() => {
    setTime(formatTime(locale, timeZone));
    const id = window.setInterval(() => setTime(formatTime(locale, timeZone)), 30_000);
    return () => window.clearInterval(id);
  }, [locale, timeZone]);

  return time;
}
