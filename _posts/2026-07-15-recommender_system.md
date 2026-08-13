---
title: "Buku Apa Lagi, Ya?"
date: 2026-07-15
categories: [Machine Learning, Recommender System]
tags: [model-engineering, recommender-system, evaluation]

---

## Cerita
### Horas!

Pernah selesai membaca sebuah buku, lalu bingung mau membaca apa lagi?
Bukunya banyak, tetapi mencari satu per satu ya capek juga. Di sinilah sistem rekomendasi membantu.

> Bagaimana membantu pembaca menemukan buku berikutnya tanpa menyisir seluruh
> katalog?

Dataset: [Kaggle Book Recommendation Dataset](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset)

Dataset proyek ini hanya punya informasi buku, pengguna, dan rating. Tidak ada data klik, pembelian, atau waktu membaca.

### Datanya rada-rada

Setelah dibersihkan, datanya berisi 271.359 buku, 383.843 rating, dan 278.858
pengguna. Banyak ya.

Namun, rating tersebut tidak tersebar merata. Seperti pada gambar dibawah, persentil pengguna menunjukkan hanya 10% pegguna yang memberikan lebih dari 9 rating. Lalu pada buku, hanya 10% buku yang menerima lebih dari 4 rating.

![Distribusi interaksi user dan buku](/assets/recommender_system/user_item_long_tail.png)

Kondisi ini disebut **sparse data**: datanya besar secara keseluruhan, tetapi tipis
jika dilihat per pengguna atau per buku. Matriksnya banyak yg bolong, hehe.

Model tidak langsung menggunakan seluruh data. Untuk konfigurasi awal
(**baseline**), data disaring agar eksperimen lebih ringan dan collaborative
filtering memiliki pola rating yang cukup untuk dipelajari. Setelah penyaringan,
sekitar 52.100 rating digunakan.

Collaborative filtering belajar dari maksimal 1.000 buku. Sementara itu,
content-based menggunakan metadata dari 3.000 ISBN sehingga dapat mencari
rekomendasi dari katalog yang lebih luas.

Satu karya dapat memiliki beberapa ISBN karena perbedaan edisi atau cetakan. Setelah
ISBN yang merujuk pada karya yang sama dikelompokkan, 3.000 ISBN tersebut ternyata
mewakili 2.816 karya unik. Pengelompokan ini mencegah buku yang sama muncul berulang
kali hanya karena edisinya berbeda.

![Alur data menuju katalog model](/assets/recommender_system/data_pipeline_funnel.png)

Angka tersebut adalah konfigurasi awal untuk memeriksa alur data, bukan ukuran
seluruh dataset dan bukan ukuran yang pasti terbaik.

### Tanya Pembaca Lain Dulu

Percobaan pertama memakai **collaborative filtering**. Maksudnya seperti bertanya:

> Orang yang menyukai buku yang sama denganku biasanya membaca apa lagi?

Model belajar dari pola rating bersama. Ia tidak perlu memahami isi buku, tetapi
butuh histori yang cukup. Disini pengguna atau buku baru belum punya pola tersebut. inilah
masalah **cold-start**.

Ada masalah yang lebih mendasar. Model tidak mungkin menemukan buku yang tidak ada di rak pilihannya, atau **candidate catalog**.

Untuk mengujinya, satu buku yang disukai pengguna sengaja disembunyikan. Buku ini
disebut **holdout**, lalu model diminta menemukannya kembali dari histori yang tersisa.

![Penyaringan kasus yang dapat dievaluasi](/assets/recommender_system/evaluation_availability_funnel.png)

Pada tes akhir yang sengaja disimpan (**fixed test**) dengan 200 holdout (satu per
pengguna), hanya 46 buku target atau 23% yang ada di rak model. Hanya 23 kasus yang
juga punya histori, dan tinggal 19 kasus yang masih punya petunjuk selera berupa buku
lain dengan rating minimal 8/10.

#### Kok Cuma 19?

Untuk 200 pengguna tadi, sistem punya dua pekerjaan: mengisi halaman rekomendasi dan
membuktikan hasilnya personal. **Fallback hanya menyelesaikan pekerjaan pertama.**

Fallback adalah rencana cadangan. Jika histori yang terlihat model kosong atau tidak
punya buku lain dengan rating minimal 8/10, sistem menampilkan buku yang secara umum
populer. Jika hasil personal belum mencapai 10 buku, sisanya juga diisi dari daftar
tersebut.

Buku populer dinilai mempertimbangkan rata-rata rating
dan banyaknya rating, lalu membuang buku yang sudah dibaca serta edisi lain dari karya
yang sama.

| Kondisi pengguna | Target ada di rak | Target tidak ada di rak |
|---|---:|---:|
| Punya petunjuk selera | **19** | 46 |
| Tidak punya petunjuk selera | 27 | 108 |

Sebanyak 135 kasus pada baris kedua mengandalkan fallback. Sementara itu, 65 kasus
masih punya sinyal personal, tetapi 46 target mereka tidak ada di rak. Model masih
bisa memberi rekomendasi personal, cuma buku uji tersebut memang mustahil ditemukan.

Pada pengujian ini, 200 dari 200 pengguna tetap mendapat 10 rekomendasi. Namun hanya
19 kasus yang layak dipakai untuk menilai personalisasi secara khusus. Daftar penuh
bukan berarti daftar tersebut personal.

Hasil 200/200 juga bukan jaminan untuk semua dataset. Kali ini rak masih punya cukup
banyak karya populer yang unik untuk mengisi daftar.

### Coba Lihat Bukunya

Karena histori pembaca tipis,  maka kita melihat informasi bukunya.

Pendekatan **content-based** mengubah judul, penulis, dan penerbit menjadi angka
dengan TF-IDF. Tujuannya sederhana: mencari buku dengan metadata yang mirip.

![Contoh buku yang mirip berdasarkan metadata](/assets/recommender_system/content_similarity_example.png)

Kemiripan sebuah buku bisa dihitung dari metadata tanpa menunggu banyak rating. Namun,
untuk menyesuaikannya kepada seseorang, model tetap butuh buku yang pernah ia sukai
sebagai acuan. “Mirip” juga belum tentu berarti “paling cocok untuk orang ini”.

Collaborative mengenal pola pembaca tetapi butuh histori. Content mengenal kemiripan
buku tetapi belum benar-benar mengenal pembacanya. Menarik.

### Digabung ajah

Supaya sistem rekomendasi bisa berjalan dengan bagus dikondisi data seperti ini, solusi hybrid yaitu menggabungkan tiga suara: collaborative, content, dan popularity adalah solusi yang bagus.

Ketiga suara menghasilkan skor. Skornya disetarakan, lalu diberi bobot untuk
menentukan urutan rekomendasi. **Bobot dipakai untuk mengatur seberapa besar pengaruh
setiap suara terhadap hasil akhir.**

Beberapa kombinasi dicoba pada validation. Dari percobaan awal itu, komposisi 0,40
untuk collaborative, 0,45 untuk content, dan 0,15 untuk popularity dipakai sebagai
baseline atau titik pembanding.

![Perubahan kontribusi tiga sinyal Hybrid](/assets/recommender_system/hybrid_signal_weights.png)

Bobotnya bisa berubah mengikuti histori pengguna. **Positif** pada grafik berarti
karya yang diberi rating minimal 8/10.

Tanpa karya positif, popularity mengambil alih 100%. Saat baru ada satu atau dua,
content mendapat porsi terbesar, yaitu 64%. Setelah historinya bertambah, porsi
collaborative naik dari 20%, menjadi 32%, lalu 40%.

Jadi, semakin banyak petunjuk selera, semakin besar kepercayaan model pada
collaborative. Grafik ini baru menunjukkan cara kerjanya, belum membuktikan hasilnya
lebih baik. Itu yang akan diuji berikutnya.

### Dipastikan dulu

Hasil percobaan awal tadi belum cukup. Baseline perlu diuji lagi tanpa mengintip
fixed test.

Baseline `0,40 / 0,45 / 0,15` dibandingkan dengan komposisi yang lebih berat ke
content, yaitu `0,30 / 0,60 / 0,10`. Validation dipakai untuk memilih, sedangkan
fixed test disimpan sampai keputusannya selesai.

Pengujian dilakukan pada lima validation split, masing-masing berisi 200 holdout.
Kedua komposisi mendapat pasangan pengguna-buku yang sama. Penggunanya bisa muncul
lagi pada split lain, jadi jumlahnya bukan 1.000 pengguna unik.

Metrik utamanya NDCG@10. Makin dekat buku yang dicari ke 10 urutan teratas, makin tinggi
nilainya.

Rata-rata NDCG baseline adalah 0,01903, sedangkan penantang 0,02011. Selisihnya
+0,00108. Penantang terlihat unggul, tetapi belum tentu konsisten.

![Perbandingan bobot pada repeated validation](/assets/recommender_system/repeated_split_selection.png)

Grafik kiri menunjukkan penantang unggul pada dua dari lima split. Baseline unggul
sekali, sedangkan dua split lainnya sama. Artinya, penantang hanya menang 40% dari
pengujian.

Grafik kanan menunjukkan selisih rata-rata beserta rentang ketidakpastiannya. Setelah
dihitung dengan 2.000 bootstrap sample, rentangnya berada di `-0,00078` sampai
`0,00313`. Karena masih melewati nol, penantang bisa saja sedikit lebih buruk, sama
saja, atau sedikit lebih baik.

Syarat promosi sudah ditetapkan 60%. Penantang hanya mencapai 40%, jadi baseline
tetap dipakai.

Setelah keputusan selesai, fixed test dibuka untuk baseline. Hasilnya NDCG@10 sebesar
0,00631 dan HitRate@10 sebesar 1%. Artinya, buku yang disembunyikan ditemukan di
sepuluh rekomendasi teratas pada 1% dari seluruh kasus uji.

Hasil ini tidak membuktikan baseline mengalahkan penantang di fixed test karena
penantang memang tidak diuji di sana. Bukti yang tersedia hanya mengatakan bahwa
belum ada alasan cukup kuat untuk mengganti baseline.

### Raknya Diperbesar?

Kalau kita kilas balik ke bagian **Tanya Pembaca Lain Dulu**, hanya 46 dari 200 buku
target yang masuk candidate books. Sebanyak 154 buku lainnya tidak pernah sampai ke
tahap pengurutan.

Jumlah candidate books diatur dengan dua batas. Angka `1.000 / 3.000`, misalnya,
berarti 1.000 buku punya pola rating untuk collaborative dan total 3.000 buku bisa
dipertimbangkan hybrid. Jadi, jumlahnya bukan 4.000 buku.

Kita coba tiga ukuran: kecil `1.000 / 3.000`, sedang `3.000 / 10.000`, dan besar
`5.000 / 20.000`. Data test, pengguna, holdout, dan bobot tetap sama. Yang berubah
hanya jumlah candidate books.

![Ketersediaan target pada tiga ukuran katalog](/assets/recommender_system/catalog_reach.png)

Candidate books yang lebih banyak memang membuat lebih banyak target tersedia. Kasus
yang bisa dinilai secara personal juga naik dari 12,6% menjadi 23,3%, lalu 29,0%.

![Perubahan NDCG pada katalog yang lebih besar](/assets/recommender_system/catalog_quality.png)

Titiknya memang berada di kanan nol, tetapi kedua garis masih melewati nol. Artinya,
nilai rata-rata NDCG terlihat naik, tetapi kenaikannya belum pasti.

![Biaya tiga ukuran katalog](/assets/recommender_system/catalog_cost.png)

Ukuran sedang masih berada di bawah dua batas biaya. Ukuran terbesar sudah melewati
batas waktu respons dan ukuran file model.

Tidak ada ukuran baru yang lolos semua syarat. Jadi, ukuran kecil tetap dipakai. Bukan
karena selalu paling bagus, tetapi karena belum ada bukti yang cukup untuk
menggantinya.

### Jadi Pakai yang Mana?

Popularity berguna saat histori belum ada. Collaborative bekerja saat pola pembaca
sudah terbentuk. Content membantu mencari buku serupa. Hybrid yang sedang berjalan
menggabungkan ketiganya dengan bobot baseline.

![Trade-off kualitas dan keragaman rekomendasi](/assets/recommender_system/recommendation_tradeoffs.png)

Titik biru adalah bobot baseline. Titik oranye memberi porsi lebih besar kepada
content-based. `C` berarti collaborative, `T` berarti content-based yang membaca teks
metadata, dan `P` berarti popularity.

Pada coverage, novelty, dan diversity, posisi lebih ke kanan menunjukkan nilai yang
lebih tinggi. Pada share buku populer, posisi lebih ke kiri berarti hasilnya tidak
terlalu dikuasai buku populer. Di sini, titik oranye tidak memperbaiki tiga metrik
pertama, sedangkan porsi buku populernya tetap sama.

Grafik ini dipakai untuk diagnosis, bukan untuk mengumumkan satu bobot sebagai
pemenang.

Nah, bisnisnya belum selesai di NDCG. Evaluasi offline belum menjawab apakah pengguna
akan mengklik, menyimpan, atau membeli buku.

Kalau sistem ini dipakai di produk nyata, tahap berikutnya adalah membandingkan versi
lama dan baru lewat A/B test. Ukur klik, wishlist, pembelian, kunjungan kembali, serta
latency dan error. Pengguna baru dan pengguna aktif juga sebaiknya dibaca terpisah
karena kebutuhan mereka berbeda.

### Belum selesai

Collaborative mengajarkan pentingnya histori. Content membantu saat interaksi tipis.
Fallback yaitu menggunakan buku populer menjaga halaman tidak kosong, sedangkan Hybrid menyatukan semua petunjuk.

Eksperimen katalog juga memberi pesan sederhana: rak lebih besar memperluas
ketersediaan target dan karya yang muncul secara offline, tetapi ranking belum
terbukti membaik dan model makin berat. Jadi, baseline 0,40 / 0,45 / 0,15 dengan rak
1.000 / 3.000 tetap berjalan.

Langkah berikutnya adalah memperbaiki pemilihan kandidat dan, ketika data produk
tersedia, menguji dampaknya secara online.

Kalau ingin mencobanya, sistem rekomendasi ini tersedia di
[website Streamlit](https://books-system-recommendation.streamlit.app/). Kode,
eksperimen, dan pipeline-nya bisa dilihat di
[repository GitHub](https://github.com/ridopandiSinaga/System-Recommendation).

## notebook

<iframe
  src="{{ 'assets/notebooks/01_end_to_end_book_recommender.html' | relative_url }}"
  width="100%"
  height="1200px"
  style="border: none;">
</iframe>