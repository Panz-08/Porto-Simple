import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SECTION_IDS } from "../config/sections";
import { fullName, site } from "../config/site";
import { useClock } from "../hooks/useClock";
import { cx } from "../utils/cx";
import "./Contact.css";

type CopyStatus = "idle" | "copied" | "failed";

export function Contact() {
  const { contact, locale, timezone, timezoneLabel } = site;
  const time = useClock(locale, timezone);
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<number>(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    let next: CopyStatus = "copied";
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      next = "failed";
    }
    setStatus(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 1800);
  };

  const copyLabel =
    status === "copied" ? contact.copiedLabel : status === "failed" ? contact.failedLabel : contact.copyLabel;

  return (
    <section className="section" id={SECTION_IDS.contact}>
      <div className="wrap">
        <SectionHeading>{contact.heading}</SectionHeading>

        <a className="mail" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <div className="btns">
          <a className={cx("btn", "pri")} href={`mailto:${contact.email}`}>
            {contact.sendLabel}
          </a>
          <button className="btn" type="button" onClick={copyEmail} aria-live="polite">
            {copyLabel}
          </button>
          {contact.socials.map((social) => (
            <a className="btn" key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>

        <footer className="footer">
          <span>
            {fullName}, {new Date().getFullYear()}
          </span>
          <span>
            {contact.clockPrefix} {time} {timezoneLabel}
          </span>
        </footer>
      </div>
    </section>
  );
}
