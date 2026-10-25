import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { cx } from "../utils/cx";
import "./Reveal.css";

type RevealProps<T extends ElementType> = {
  /** Elemen HTML yang dirender. Default: div. */
  as?: T;
  /** Jeda animasi dalam detik. */
  delay?: number;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "className" | "children">;

/** Membungkus konten agar muncul perlahan saat pertama kali terlihat di layar. */
export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag: ElementType = as ?? "div";
  const [ref, shown] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cx("rv", shown && "in", className)}
      style={{ "--d": `${delay}s` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
