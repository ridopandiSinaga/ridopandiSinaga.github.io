---
layout: page
title: Mengelola portofolio
permalink: /PANDUAN-PORTOFOLIO/
toc: true
---

Video dan proyek baru bisa ditambahkan melalui [editor portofolio](https://ridopandisinaga.github.io/portfolio-editor/). Kamu mengisi formulir, mengunduh satu file, lalu mengunggahnya ke GitHub. Langkah ini tidak memerlukan Codex atau pemasangan aplikasi coding.

Editor menyiapkan file; perubahan terbit setelah kamu menyimpannya ke repository melalui akun GitHub. Orang lain yang membuka editor tidak bisa mengubah website kamu tanpa akses tulis ke repository.

## Menambahkan video

1. Unggah rekaman ke YouTube. Pilih **Unlisted** jika kamu ingin membagikannya lewat tautan tanpa menampilkannya di halaman channel. Siapa pun yang memiliki tautannya tetap bisa menonton dan membagikannya. [Penjelasan pengaturan YouTube](https://support.google.com/youtube/answer/157177?hl=en).
2. Pastikan **Allow embedding** aktif di YouTube Studio → Content → video → Details → Show more. [Pengaturan pemutar video](https://support.google.com/youtube/answer/171780?hl=en).
3. Buka [editor portofolio](https://ridopandisinaga.github.io/portfolio-editor/) dan pilih proyek, misalnya **Book Recommender** atau **Bilingual Text-to-Cypher**.
4. Klik **+ Tambah video**. Isi **Judul video** dan tempel tautan dari tombol **Share** di YouTube ke **Tautan video**. Tautan `youtube.com/watch?v=...` atau `youtu.be/...` bisa langsung digunakan; kamu tidak perlu menyalin kode embed.
5. Isi **Keterangan singkat** jika membantu pembaca. Contoh: “Penjelasan pemilihan model dan hasil evaluasi.” **Gambar sampul** boleh kosong untuk memakai gambar proyek yang sudah ada.
6. Klik **Unduh portfolio.json**, lalu ikuti langkah publikasi di bawah.

Untuk beberapa video dalam satu proyek, tambahkan satu entri per video. Beri judul yang membedakan isinya, misalnya “Demo aplikasi” dan “Penjelasan eksperimen”. Jika belum ada video, biarkan daftarnya kosong.

Video Google Drive juga didukung. Gunakan tautan berbagi berbentuk `https://drive.google.com/file/d/ID_VIDEO/view` dan beri izin **Anyone with the link → Viewer**. Periksa dari jendela samaran agar kamu melihatnya seperti pengunjung lain. Simpan file video di layanan video atau Drive; repository hanya membutuhkan tautannya.

## Menerbitkan perubahan

1. Simpan hasil unduhan dengan nama tepat **portfolio.json**. Jika browser menamainya `portfolio (1).json`, ubah namanya terlebih dahulu.
2. Masuk ke akun GitHub, lalu buka [halaman unggah folder `_data`](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/upload/main/_data).
3. Unggah file tersebut. File ini menggantikan `_data/portfolio.json` yang lama, jadi jangan mengunggahnya ke folder utama repository.
4. Isi pesan commit, misalnya `Add Book Recommender walkthrough`. Pilih menyimpan langsung ke branch **main**, lalu konfirmasikan commit. GitHub menyediakan unggah file lewat browser; [panduan resminya](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) menunjukkan letak tombol unggah dan pilihan branch.
5. Buka [GitHub Actions](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/actions/workflows/jekyll.yml). Tunggu proses untuk commit terbaru sampai pekerjaan **build** dan **deploy** sama-sama hijau.
6. Buka [portofolio](https://ridopandisinaga.github.io/portfolio/), pilih proyek, lalu coba putar videonya. Jika tampilan masih lama, muat ulang dengan **Ctrl+F5**.

Editor tidak mengunggah file ke GitHub secara otomatis. Mengunduh file saja belum mengubah website.

## Menambahkan proyek berikutnya

Gunakan **+ Tambah proyek** di editor. Isi bagian berikut sesuai pekerjaan yang benar-benar tersedia:

- **Judul, kategori, dan ringkasan:** jelaskan apa yang dibuat dan kegunaannya dalam satu atau dua kalimat.
- **Slug:** nama singkat untuk tautan, misalnya `nama-proyek`, memakai huruf kecil dan tanda hubung. Gunakan nama yang belum dipakai proyek lain.
- **Gambar dan teks alternatif:** gunakan screenshot hasil proyek. Langkah unggah gambar ada di bawah.
- **Bagian penjelasan:** ceritakan masalah, pendekatan, hasil, dan batas yang ditemukan. Sertakan konteks pengujian ketika menulis angka.
- **Tautan dan video:** masukkan repository, demo, atau materi yang sudah bisa dibuka. Kolom opsional boleh kosong.

Centang **Tampilkan proyek di website** ketika isi siap ditampilkan. Proyek draf belum muncul di portofolio. Unduh dan terbitkan `portfolio.json` dengan cara yang sama. Kartu proyek, nomor, dan navigasinya mengikuti daftar proyek secara otomatis.

Untuk proyek lama, editor mengelola videonya. Isi studi kasus yang sudah dibuat khusus masih berada di file HTML repository. Untuk proyek baru, isi dari formulir digunakan untuk membuat kartu dan halaman detailnya.

## Mengunggah screenshot atau poster

1. Siapkan gambar JPG, PNG, atau WebP. Gunakan nama sederhana seperti `nama-proyek-demo.webp`.
2. Buka [unggah gambar portofolio](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/upload/main/assets/img/portfolio), unggah gambar, lalu commit ke **main**.
3. Di editor, isi alamat gambar dengan `/assets/img/portfolio/nama-proyek-demo.webp`. Huruf besar dan kecil harus sama dengan nama file.
4. Tulis teks alternatif yang menjelaskan isi gambar, misalnya “Hasil rekomendasi buku berdasarkan riwayat bacaan”.
5. Unduh dan terbitkan file data setelah gambar tersimpan di repository.

Gunakan screenshot yang benar-benar berasal dari proyek. Jika angka hasil evaluasi berubah, perbarui penjelasan dan sumbernya bersama-sama.

## Melanjutkan pekerjaan di lain hari

Saat dibuka, editor mengambil data website terbaru. Jika ada draf dari sesi sebelumnya, tombol **Pulihkan draf** akan muncul. Gunakan hanya jika kamu ingin melanjutkan draf itu; perubahan dari perangkat lain mungkin belum tercakup di dalamnya.

Jika belum selesai, pilih **Unduh cadangan**. File `portfolio-cadangan.json` menyimpan isian meskipun belum lengkap. Untuk melanjutkan, gunakan **Buka file JSON** dan pilih file tersebut. Setelah lengkap, gunakan **Unduh portfolio.json** agar data diperiksa sebelum diterbitkan.

Data yang diunggah ke repository dapat dibaca publik, termasuk proyek draf. Simpan isian yang belum ingin dibagikan sebagai cadangan di komputermu.

## Jika ada yang tidak beres

| Gejala | Yang diperiksa |
| --- | --- |
| Proses **build** merah | Buka langkah yang gagal di Actions. Di editor, pilih **Buka file JSON** dan buka file terakhir yang kamu unggah, lalu perbaiki isian yang disebut dalam pesan kesalahan. Unduh dan commit ulang. Editor yang baru dibuka mengambil data dari website terakhir yang berhasil terbit, jadi perubahan yang gagal belum ada di sana. |
| Build hijau, tetapi **deploy** gagal | Buka langkah deploy yang gagal. Pastikan **Settings → Pages → Source** tetap **GitHub Actions**. Setelah penyebabnya diperbaiki, gunakan **Re-run failed jobs** pada proses tersebut. |
| Video tidak bisa diputar | Coba tautannya di jendela samaran. Periksa izin video, pengaturan embed YouTube, atau izin berbagi Drive. |
| Gambar tidak muncul | Periksa folder, ejaan nama file, dan ekstensi. Alamat di editor harus dimulai dari `/assets/…`. |
| Proyek baru tidak muncul | Periksa pilihan publikasi, commit terbaru, dan status deploy. |
| Perubahan terbaru hilang | Kamu mungkin mengunggah draf lama. Buka riwayat file di GitHub untuk mengambil versi yang benar. |

Tetap gunakan **GitHub Actions** sebagai sumber GitHub Pages. Workflow repository ini sudah mengurus build dan publikasi.

## Mengembalikan data sebelumnya

1. Buka [file `portfolio.json`](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/blob/main/_data/portfolio.json), lalu pilih **History**.
2. Buka versi sebelum perubahan yang salah. Pastikan alamatnya memakai ID commit lama, bukan `main`.
3. Buka **Raw**, lalu simpan isinya sebagai `portfolio.json`.
4. Unggah file itu kembali ke `_data` dan commit ke **main**. Setelah deploy berhasil, periksa hasilnya.

Cara ini membuat commit perbaikan dan tetap menyimpan riwayat perubahan. Jika file gambar yang dirujuk versi lama juga terhapus, pulihkan gambar tersebut dari riwayat repository.

## Menautkan video dari README proyek

Di README repository proyek, satu tautan sudah cukup:

```markdown
[Tonton penjelasan proyek](VIDEO_URL)
```

Jika ingin memakai gambar yang bisa diklik:

```markdown
[![Tonton penjelasan proyek](POSTER_URL)](VIDEO_URL)
```

Ganti `VIDEO_URL` dengan tautan video yang sudah terbit dan `POSTER_URL` dengan alamat gambar. Simpan versi ringkas untuk pembaca yang ingin melihat hasilnya cepat; gunakan video penjelasan lengkap untuk membahas keputusan dan evaluasi.
