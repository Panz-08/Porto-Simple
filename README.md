# Porto-Simple
IDK. Ini Versi Simple Nya

# Portofolio

Portofolio pribadi berbasis Vite, React, dan TypeScript. Siap dijalankan dengan npm dan di-deploy ke Vercel.

## Menjalankan di komputer

Kebutuhan: Node.js 20 atau lebih baru.

```bash
npm install
npm run dev        # server pengembangan di http://localhost:5173
npm run build      # cek tipe TypeScript lalu build ke folder dist
npm run preview    # coba hasil build secara lokal
```

## Mengganti nama dan isi

Buka satu file saja: **`src/config/site.ts`**

- Ubah `first` dan `last` di bagian atas file dengan namamu. Judul halaman, logo, huruf awal, dan potret ikut berubah otomatis.
- Semua teks lain (bio, perjalanan, keahlian, proyek, email, tautan GitHub) ada di file yang sama.
- Kata yang ditulis `**seperti ini**` pada paragraf bio akan ditebalkan.
- Nama yang panjang diperkecil otomatis agar muat di layar.

Tidak perlu mengedit komponen untuk mengganti konten.

## Menambah foto

1. Taruh foto di `public/images/`, misalnya `public/images/foto-depan.jpg`.
2. Isi di `src/config/site.ts`:

```ts
portrait: {
  frontImage: "/images/foto-depan.jpg",
  backImage: "/images/foto-kedua.jpg", // opsional
  ...
}
```

Gambar pratinjau proyek: taruh di `public/images/projects/` lalu isi `image: "/images/projects/nama.jpg"` pada proyek terkait. Jika `href` proyek diisi `"#"`, klik tidak melakukan apa-apa; ganti dengan tautan asli saat sudah ada.

## Struktur proyek

```
.
├── index.html              Titik masuk HTML (judul dan deskripsi diisi dari site.ts)
├── vite.config.ts          Konfigurasi Vite
├── vercel.json             Pengaturan deploy dan header keamanan
├── tsconfig.json
├── public/                 File statis, disajikan apa adanya
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/             Foto pribadi
│       └── projects/       Gambar pratinjau proyek
└── src/
    ├── main.tsx            Titik masuk React, memuat font dan gaya global
    ├── App.tsx             Susunan halaman
    ├── config/
    │   ├── site.ts         Semua isi portofolio (edit di sini)
    │   └── sections.ts     ID bagian halaman
    ├── types/              Tipe TypeScript untuk data
    ├── sections/           Bagian halaman: Hero, Marquee, Bio, Quote, Skills, Projects, Contact
    ├── components/         Komponen bersama: Navbar, Reveal, SectionHeading, ProjectPeek, dll
    ├── hooks/              Logika berulang: tema, scroll, jam, deteksi terlihat
    ├── styles/             Warna dan gaya dasar (tokens.css, base.css)
    └── utils/
```

Setiap komponen punya file CSS di sebelahnya, jadi gaya mudah dicari. Warna dan font ada di `src/styles/tokens.css`.
