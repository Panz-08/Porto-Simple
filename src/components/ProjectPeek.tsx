import type { Ref } from "react";
import type { Project } from "../types";
import { cx } from "../utils/cx";
import "./ProjectPeek.css";

interface ProjectPeekProps {
  project: Project | null;
  visible: boolean;
  innerRef: Ref<HTMLDivElement>;
}

/** Kartu pratinjau yang mengikuti kursor saat menyorot sebuah proyek. */
export function ProjectPeek({ project, visible, innerRef }: ProjectPeekProps) {
  return (
    <div
      ref={innerRef}
      className={cx("peek", visible && "on")}
      style={{ background: project?.color }}
      aria-hidden="true"
    >
      {project?.image ? (
        <img src={project.image} alt="" />
      ) : (
        <div>
          {project?.title.charAt(0)}
          <small>{project?.tag}</small>
        </div>
      )}
    </div>
  );
}
