import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemPrefersDark(): boolean {
  return !window.matchMedia("(prefers-color-scheme: light)").matches;
}

/**
 * Tema gelap atau terang. Tanpa pilihan tersimpan, mengikuti pengaturan sistem.
 * Atribut data-theme dipasang di elemen html.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  const toggle = useCallback(() => {
    const current: Theme = theme ?? (systemPrefersDark() ? "dark" : "light");
    const next: Theme = current === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* penyimpanan tidak tersedia, abaikan */
    }
  }, [theme]);

  return { theme, toggle };
}
