---
title: Machine Learning Workflow🕵️‍♂️
date: 2023-07-28
tags: [machine learning]
category: Dasar - Dasar Machine Learning
layout: post
image: https://www.dicoding.com/blog/wp-content/uploads/2020/05/Internship-Robby-AI-Robot-1024x521.jpg
---


## Machine Learning Workflow

Ada beberapa tahapan sebelum project Machine Learning bisa diimplementasikan ke tahap produksi. Tahap-tahpapan yang dimaksud menurut buku *Hands on Machine Learning* karya [Geron]() dapat dirangkum dalam diagram berikut.

![diagram](/assets/ml/diagram.png){: .shadow }

Tahapan dalam diagram ini bersifat iteratif yang artinya bisa berulang-ulang sesuai kebutuhan. Kita mungkin perlu untuk mengevaluasi ulang proses yang kita lakukan dan kembali kelangkah sebelumnya, kapan saja dibutuhkan selama prosesnya.

### Proses Pengumpulan Data

Jika Anda adalah seorang Machine Learning Enginer pada sebuah perusahaan yang bertugas membangun ML untuk keperluan perusahaan, tentu proses pengumpulan datanya tidak semudah kita mengunduh dataset yang telah tersedia di internet seperti *Kaggle, Google Dataset Search Engine, Tensorflow Dataset* dll. Anda perlu mengumpulkan dan mengekstrak sendiri data dari berbagai sumber misalnya database, file, data sensor, dan sumber lainnya. Pada tahap ini kita perlu berurusan dengan berbagai jenis tipe data, mulai dari structured data(seperti excel atau SQL), sampai unstructured data(seperti text file, email, video, audio, gambar dan lainnya). Menurut [*Gartner*]() lebih dari 80% data perusahaan adalah unstructured data.

### Exploratory Data Analysis

Proses ini biasa disebut **EDA**, bertujuan sebagai analisa awal terhadap data dan melihat bagaimana kualitas data untuk meminimalisir potensi kesalahan dikemudian hari. Pada proses ini dilakukan investigasi awal pada data untuk menemukan pola, anomali, menguji hipotesis, memahami distribusi, frekuensi, hubungan antar variabel dan memeriksa asumsi dengan teknik statistik dan representasi grafik.

Pada umumnya **EDA** dilakukan dengan dua cara, yaitu *univariate analysis*, dan *multivariate analysis*. *Univariate analysis* adalah analisis deskriptif yang memeriksa pola dengan satu variabel pada modelnya. *Multivariate analysis* merupakan analysis deskriptif yang memeriksa pola dalam data multidimensi dengan mempertimbangkan dua atau lebih variabel. Jika terdapat dua variabel yang akan dianalysis, maka disebut *bivariate analysis*.

Karena *multivariate analysis* mempertimbangkan lebih banyak variabel, ia dapat memeriksa fenomena yang lebih kompleks dan menemukan pola data yang mewakili dunia nyata dengan lebih akurat. Jika tertarik tertarik untuk belajar lebih lanjut mengenai *exploratory data analysis*, kamu dapat membaca tautan-tautan berikut: [tautan1](https://www.stat.cmu.edu/~hseltman/309/Book/chapter4.pdf), [tautan2](https://www.kite.com/blog/python/data-analysis-visualization-python/), [tautan3](https://datascienceguide.github.io/exploratory-data-analysis), [tautan4](https://www.youtube.com/watch?v=zHcQPKP6NpM).

### Data Preprocessing

Yaitu tahap dimana data diolah lebih lanjut sehingga menjadi 
siap dipakai dalam pengembangan model ML. Dengan kata lain, proses ini mengubah dan menstransformasi firut-fitur data kedalam bentuk yang mudah diinterpretasikan dan diproses oleh algoritma Machine Learning yaitu termasuk *data cleaning* dan *data transformation*.

Proses dalam *data cleaning* adalah penanganan missing value, data yang tidak konsisten, duplikasi data, ketidakseimbangan data, dll. Sementara 
pada proses transformasi data adalah : scaling atau merubah skala data agar sesuai dengan skala tertentu, standarisasi, normalisasi, mengonversi data manjadi variabel kategori dan sebagainya. Tidak lupa pula, proses train test split juga merupakan bagian dari data preprocessing.

### Model Selection

Dalam bukunya K.P. Murphy yang berjudul **Machine Learning: a Probalistic Perspective** [16] katanya: "*When we have a variety of models of different complexity(like linear or logistic regresion models with different degree polynomials, or KKN classifiers with different values of K), how should we pickthe right one?*". Berangkat dari pertanyaan ini, menentukan model yang sesuai dengan data merupakan tahapan yang penting dalam machine learning workflow.

Juga Jie Ding, at all dalam tulisannya "**Model Selection -An Overview**" menyatakan tidak ada model yang cocok secara universal untuk data dan tujuan apapun. Pilihan model atau model yang tidak tepat dapat menyebabkan kesimpulan yang menyesatkan atau performa prediksi yang mengecewakan. Sebagai contoh, saat kita memilikil kasus klasifikasi biner kita perlu  mempertimbangkan apa model terbaik untuk data kita, apakah logistic regresion atau SVM classifier.

Setelah kita menentukan metode yang cocok untuk data  yang ada, kita perlu menubah hyperparameter untuk memperoleh performa terbaik dalam model. Mengubah nilai parameter saat kita menjalankan algoritma ML akan memberikan hasil atau performa yang berbeda. Proses menentukan performa terbaik model dengan pengaturan hyperparameter yang berbeda ini juga disebut model selection.

Dengan demikian, dalam konteks machine learning, model selection bisa berarti dua hal: pemilihan learning method atau algoritma ML dan pemilihan *hyperparameter* terbaik untuk metode machine learning yang dipilih.

### Model Evaluation

Setelah mengutak-atik model kamu dengan *hyperparameter* yang berbeda, akhirnya kamu mendapatkan model yang kinerjanya cukup baik. Lankgah selanjutnya adalah mengevaluasi model akhir pada  data uji. Sederhananya, langakah evaluasi model dapat dijabarkan sebagai berikut:
memprediksi label pada data uji, menghitung jumlah prediksi yang salah (error) kemudian membandingkannya dengan data label yang kita miliki. Dari perbandingan ini kita dapat menghitung akurasi atau performa model.


Pada prinsipnya proses model evaluation adalah menilai kinerja model ML pada data baru, yaitu data yang belum pernah dilihat oleh model sebelumnya. Evaluasi model bertujuan untuk membuat estimasi generalisasi error dari model yang dipilih. Yaitu seberapa baik kinerja model tersebut pada data baru. Idealnya model machine learning yang baik, adalah model yang tidak hanya bekerja dengan baik pada data training, tapi juga pada data baru. Oleh karena itu, sebelum mengirimkan model pada  tahap produksi, kamu harus cukup yakinbahwa performa akan tetap baik dan tidak menurun saat dihadapkan dengan data baru.

### Deployment

Ketika model dievaluasi, model siap untuk dipakai pada tahap produksi. Caranya adalah dengan menyimpan model yang telah dilatih dari tahap preprocessing hingga pipeline prediksi. Kemudian deploy model tersebut ke tahap produksi untuk membuat prediksi dengan memanggil kode predict()-nya.

Berikut contoh ilustrasinya:

![ilustrasi deployment](/assets/ml/ilus_deploy.jpeg){: .shadow }

Misalnya sebuah  model regresi untuk menentukan harga rumah akan digunakan dalam situs web. Pengguna akan mengetik beberapa data tentang lokasi yang diinginkan dan Mengklik tombol "Prediksi Harga". Proses iniakan mengirimkan query yang berisi data ke server, kemudian meneruskannya ke aplikasi Web kamu. Terakhir, kode akan memanggil fungsi predict() untuk memberikan hasil prediksi kepada kamu.

### Monitoring

Model yang telah dipakai pada tahap produksi masih harus tetap dimonitor untuk menjada kualitasnya. Pada tahap produksi, model bisa sajamenemukan data yang tidak dikenali sehingga performa model dapat menurrun. Contoh kasus misalnya, jika model kamu merupakan sistem rekomendasiyang menyarankan produk untuk pengguna, maka untuk memantau performa model bisa dengan cara menghitung jumlah produk rekomendasi yang terjual tiap hari. Jika angka ini turun (dibandingkan dengan jumlah produk yang tidak direkomendasikan), maka dipastikan model kita perlu dilatih ulang menggunakan data-data baru.

Jika kamu bekerja dengan model yang datanya terus berubah, kamu perlu melakukan update pada dataset dan melatih ulang model kamu secara reguler. Atau kamu perlu membuat sistem yang dapat membuat proses update ini berjalan secara otomatis.

Waduh, tak terasa  sudah terlalu panjang ya.

> Machine Learning melibatkan cukup banyak proses dan infrastruktur dalam membangun modelnya. Memahami algoritma machine learning emang penting, tetapi memahami keseluruhan proses machine learning hingga ketahap produksi juga tak kalah pentingnya.
{: .prompt-tip }
