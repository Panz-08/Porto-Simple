export interface NavItem {
  id: string;
  label: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  year: string;
  description: string;
  /** Kategori singkat yang tampil di pratinjau saat kursor di atas proyek. */
  tag: string;
  /** Warna latar pratinjau, format hex. */
  color: string;
  /** Tautan proyek. Isi "#" jika belum ada. */
  href: string;
  /** Opsional: gambar pratinjau, misalnya "/images/projects/situs.jpg". */
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: { first: string; last: string };
  locale: string;
  timezone: string;
  timezoneLabel: string;
  seo: { title: string; description: string };
  ui: { themeLabel: string; skipLabel: string };
  nav: NavItem[];
  ctaLabel: string;
  hero: {
    meta: string[];
    intro: string;
    availability: string;
    tags: string;
  };
  marquee: string[];
  portrait: {
    /** Opsional. Jika kosong, dibuat otomatis dari huruf pertama nama depan dan belakang. */
    initials?: string;
    /** Opsional: foto sisi depan, misalnya "/images/foto-depan.jpg". */
    frontImage?: string;
    /** Opsional: foto sisi kedua yang terbuka saat scroll. */
    backImage?: string;
    backTitle: string;
    backCaption: string;
    hint: string;
  };
  bio: {
    heading: string;
    lead: string;
    /** Gunakan **teks** untuk menebalkan kata. */
    paragraphs: string[];
    facts: Fact[];
    journeyTitle: string;
    journey: JourneyStep[];
  };
  quote: string;
  skills: { heading: string; groups: SkillGroup[] };
  projects: { heading: string; items: Project[] };
  contact: {
    heading: string;
    email: string;
    sendLabel: string;
    copyLabel: string;
    copiedLabel: string;
    failedLabel: string;
    socials: SocialLink[];
    clockPrefix: string;
  };
}
