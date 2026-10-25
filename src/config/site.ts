import type { SiteConfig } from "../types";
import { SECTION_IDS } from "./sections";

/*
 * ============================================================
 *  FILE UTAMA UNTUK MENGEDIT ISI PORTOFOLIO
 *  Semua teks, nama, tautan, dan data proyek ada di sini.
 *  Tidak perlu menyentuh komponen untuk mengganti konten.
 * ============================================================
 */

// 1. Tulis namamu di sini. Nama depan tampil di baris pertama, nama belakang di baris kedua.
//    Kosongkan "last" jika hanya ingin satu baris. Nama pendek (4 sampai 8 huruf per baris) paling pas.
const first = "Alpanza";
const last = "Triadie";

// 2. Kontak.
const email = "astrapanz08@gmail.com";

export const fullName = `${first} ${last}`.trim();

export const site: SiteConfig = {
  name: { first, last },
  locale: "id-ID",
  timezone: "Asia/Jakarta",
  timezoneLabel: "WIB",

  seo: {
    title: `${fullName} | Pelajar TKJ dan Web Developer`,
    description: "Portofolio pelajar TKJ yang membangun web, jaringan, dan game.",
  },

  ui: {
    themeLabel: "Tema",
    skipLabel: "Lewati ke konten",
  },

  nav: [
    { id: SECTION_IDS.bio, label: "Bio" },
    { id: SECTION_IDS.skills, label: "Keahlian" },
    { id: SECTION_IDS.work, label: "Karya" },
  ],
  ctaLabel: "Hubungi",

  hero: {
    meta: ["Belajar sejak 2022", "Indonesia", "Portofolio 2026"],
    intro:
      "Pelajar jurusan TKJ yang suka merakit web, merancang jaringan, dan membuat game kecil sampai benar-benar jalan.",
    availability: "Terbuka untuk kolaborasi",
    tags: "TKJ, Web, Game",
  },

  marquee: ["Web", "Jaringan", "Game", "Laravel", "Godot", "Mikrotik", "JavaScript", "Linux"],

  portrait: {
    // Untuk memakai foto, taruh file di public/images lalu isi path-nya, contoh: "/images/foto-depan.jpg"
    frontImage: "/images/foto-depan.jpg",
    backImage: "/images/foto-belakang.jpg",
    backTitle: "Indonesia",
    backCaption: "Pelajar sejak 2022",
    hint: "Scroll, sisi kedua akan terbuka",
  },

  bio: {
    heading: "Bio",
    lead: "Saya senang melihat hal rumit jadi sederhana.",
    paragraphs: [
      `Halo, saya **${fullName}**, pelajar **Teknik Komputer dan Jaringan** dari bogor. Saya terbiasa memecah masalah menjadi bagian kecil lalu menyusunnya lagi menjadi sesuatu yang bisa dipakai.`,
      "Di luar kelas saya mengerjakan proyek web, berlatih konfigurasi jaringan di lab virtual machine, dan membuat game sederhana.",
    ],
    facts: [
      { label: "Sekolah", value: "SMK Putra Pakuan" },
      { label: "Fokus", value: "Jaringan, Web Dev, dan Game Dev" },
      { label: "Bahasa", value: "Indonesia, Inggris" },
      { label: "Email", value: email },
    ],
    journeyTitle: "Perjalanan",
    journey: [
      {
        year: "2026",
        title: "Kelas XII jurusan TKJ",
        description: "Server, keamanan jaringan, dan proyek akhir.",
      },
      {
        year: "2025",
        title: "Proyek web pertama yang dipakai harian",
        description: "Belajar PHP dan Laravel lewat situs sendiri.",
      },
      {
        year: "2024",
        title: "Masuk SMK",
        description: "Pertama kali masuk smk putra pakuan dengan jurusan TKJ.",
      },
    ],
  },

  quote:
    "Dari ide ke aksi. Produk digital yang sederhana, dibangun untuk belajar cepat dan berguna di dunia nyata.",

  skills: {
    heading: "Keahlian",
    groups: [
      { title: "Pengembangan web", items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"] },
      { title: "Jaringan", items: ["Subnetting", "Routing dasar", "VLAN", "Mikrotik", "Packet Tracer"] },
      { title: "Game", items: ["Godot Engine", "GDScript", "Desain level"] },
      { title: "Alat kerja", items: ["Git", "GitHub Pages", "Linux", "VS Code"] },
    ],
  },

  projects: {
    heading: "Karya",
    items: [
      {
        title: "Situs Dokumentasi",
        year: "2026",
        description: "Catatan belajar yang dirapikan jadi situs dengan pencarian dan kategori.",
        tag: "Web",
        color: "#d8b87a",
        href: "https://github.com/Panz-08/Porto-Panz08",
      },
      {
        title: "Game Aksi 2D",
        year: "2026",
        description: "Petualangan bergaya piksel dengan pertarungan, dialog, dan beberapa area.",
        tag: "Game",
        color: "#9fb8a4",
        href: "#",
      },
      {
        title: "Simulasi Jaringan Sekolah",
        year: "2025",
        description: "Rancangan tiga lantai dengan VLAN terpisah untuk lab, kantor, dan perpustakaan.",
        tag: "Jaringan",
        color: "#d49a8a",
        href: "#",
      },
    ],
  },

  contact: {
    heading: "Ayo ngobrol",
    email,
    sendLabel: "Kirim email",
    copyLabel: "Salin alamat email",
    copiedLabel: "Alamat tersalin",
    failedLabel: "Gagal menyalin",
    socials: [{ label: "GitHub", href: "https://github.com/panz-08" }],
    clockPrefix: "Waktu di sini",
  },
};
