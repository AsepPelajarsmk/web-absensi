# Absensi Kelas

Aplikasi Next.js + Supabase dengan gaya neo-brutalism untuk absensi kelas berbasis QR.

## Menjalankan Lokal

1. Buat project Supabase, lalu buka **SQL Editor** dan jalankan isi `supabase/schema.sql`.
2. Salin `.env.example` menjadi `.env.local`, lalu isi URL, anon key, dan service role key Supabase.
3. Jalankan `npm install`, lalu `npm run seed`.
4. Jalankan `npm run dev`, kemudian buka `http://localhost:3000`.

Contoh akun:

- Guru: `guru@sekolah.test` / `Guru123!`
- Siswa: `siswa1@sekolah.test` / `Siswa123!`

## Deploy Vercel

1. Push folder ini ke GitHub lalu import repository di Vercel.
2. Tambahkan environment variable dari `.env.local` pada Vercel.
3. Deploy, lalu masukkan URL Vercel ke **Authentication → URL Configuration** di Supabase.

## Alur Singkat

Supabase Auth menyimpan password dengan hash dan menerbitkan sesi cookie. Middleware serta `requireRole()` melindungi halaman guru/siswa. QR memakai token UUID harian dan waktu server Asia/Jakarta. Upload surat hanya menerima JPG/PNG maksimal 2 MB dan disimpan di bucket privat.

Rekap CSV tersedia pada halaman **Absen Manual & Rekap**.