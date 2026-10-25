import { useId, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SECTION_IDS } from "../config/sections";
import { site } from "../config/site";
import { cx } from "../utils/cx";
import "./Skills.css";

export function Skills() {
  const { skills } = site;
  const baseId = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpen((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="section" id={SECTION_IDS.skills}>
      <div className="wrap">
        <SectionHeading>{skills.heading}</SectionHeading>

        <div className="acc">
          {skills.groups.map((group, index) => {
            const isOpen = open.has(index);
            const buttonId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div className={cx("row", isOpen && "open")} key={group.title}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    {group.title}
                  </button>
                </h3>
                <div className="panel" id={panelId} role="region" aria-labelledby={buttonId}>
                  <div>
                    <ul className="chips">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
