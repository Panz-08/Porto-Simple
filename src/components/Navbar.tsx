import { SECTION_IDS } from "../config/sections";
import { fullName, site } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { cx } from "../utils/cx";
import "./Navbar.css";

const OBSERVED_SECTIONS = Object.values(SECTION_IDS);

export function Navbar() {
  const { toggle } = useTheme();
  const active = useActiveSection(OBSERVED_SECTIONS);
  const initial = site.name.first.charAt(0).toUpperCase();

  return (
    <header className="nav">
      <nav className="nav-in" aria-label="Navigasi utama">
        <a className="logo" href="#top">
          <b className="logo-mark" aria-hidden="true">
            {initial}
          </b>
          {fullName}
        </a>

        {site.nav.map((item) => (
          <a
            key={item.id}
            className={cx("nav-link", active === item.id && "is-active")}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}

        <button type="button" className="nav-theme" onClick={toggle}>
          {site.ui.themeLabel}
        </button>
        <a className="nav-cta" href={`#${SECTION_IDS.contact}`}>
          {site.ctaLabel}
        </a>
      </nav>
    </header>
  );
}
