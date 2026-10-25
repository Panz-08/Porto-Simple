import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { ProjectPeek } from "../components/ProjectPeek";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { SECTION_IDS } from "../config/sections";
import { site } from "../config/site";
import { useMediaQuery } from "../hooks/useMediaQuery";
import type { Project } from "../types";
import "./Projects.css";

interface PeekState {
  /** Posisi kursor saat ini. */
  mx: number;
  my: number;
  /** Posisi kartu pratinjau yang menyusul kursor secara halus. */
  px: number;
  py: number;
  running: boolean;
  frame: number;
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function Projects() {
  const { projects } = site;
  const canHover = useMediaQuery("(hover: hover)");
  const peekRef = useRef<HTMLDivElement>(null);
  const state = useRef<PeekState>({ mx: 0, my: 0, px: 0, py: 0, running: false, frame: 0 });
  const [active, setActive] = useState<Project | null>(null);
  const [visible, setVisible] = useState(false);

  const step = useCallback(() => {
    const s = state.current;
    s.px += (s.mx - s.px) * 0.14;
    s.py += (s.my - s.py) * 0.14;

    if (peekRef.current) {
      peekRef.current.style.transform = `translate(${s.px + 24}px, ${s.py - 90}px)`;
    }

    if (Math.abs(s.mx - s.px) > 0.3 || Math.abs(s.my - s.py) > 0.3) {
      s.frame = requestAnimationFrame(step);
    } else {
      s.running = false;
    }
  }, []);

  useEffect(() => {
    const s = state.current;
    return () => cancelAnimationFrame(s.frame);
  }, []);

  const handleEnter = (project: Project, event: MouseEvent) => {
    const s = state.current;
    // Mulai dari posisi kursor agar kartu tidak melayang dari pojok layar.
    s.mx = s.px = event.clientX;
    s.my = s.py = event.clientY;
    if (peekRef.current) {
      peekRef.current.style.transform = `translate(${s.px + 24}px, ${s.py - 90}px)`;
    }
    setActive(project);
    setVisible(true);
  };

  const handleMove = (event: MouseEvent) => {
    const s = state.current;
    s.mx = event.clientX;
    s.my = event.clientY;
    if (!s.running) {
      s.running = true;
      s.frame = requestAnimationFrame(step);
    }
  };

  return (
    <section className="section" id={SECTION_IDS.work}>
      <div className="wrap work">
        <SectionHeading>{projects.heading}</SectionHeading>

        {projects.items.map((project, index) => {
          const external = isExternal(project.href);
          const hoverProps = canHover
            ? {
                onMouseEnter: (event: MouseEvent) => handleEnter(project, event),
                onMouseLeave: () => setVisible(false),
                onMouseMove: handleMove,
              }
            : {};

          return (
            <Reveal
              as="a"
              className="p"
              key={project.title}
              delay={(index % 3) * 0.08}
              href={project.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={(event: MouseEvent) => {
                if (project.href === "#") event.preventDefault();
              }}
              {...hoverProps}
            >
              <h3>{project.title}</h3>
              <span className="y">{project.year}</span>
              <p>{project.description}</p>
            </Reveal>
          );
        })}
      </div>

      <ProjectPeek project={active} visible={visible} innerRef={peekRef} />
    </section>
  );
}
