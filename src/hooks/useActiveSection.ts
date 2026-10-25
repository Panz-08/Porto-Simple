import { useEffect, useState } from "react";

/** Mengembalikan id bagian halaman yang sedang berada di tengah layar. */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
