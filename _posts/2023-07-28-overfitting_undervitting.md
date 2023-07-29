---
title: Overfitting dan Underfitting 📈
date: 2023-07-28
tags: [machine learning]
category: Dasar - Dasar Machine Learning
layout: post
image: https://miro.medium.com/v2/resize:fit:786/format:webp/0*h4YQEuVi4xnzvHms.jpg
---

Salah satu hal yang paling penting untuk diperhatikan saat mengembangkan model ML adalah mengecek apakah model tersebut underfit atau overfit. Sebuah model yang layak dideploy ke tahap produksi dipastikan tidak overfitting maupun underfitting atau biasa disebut goodfit.

## Bagaimana cara melihat sebuah model overfitting atau underfitting?

Salah satu caranya yakni dengan membagi dataset menjadi train set dan test set. Setelah data tersebut dibagi, kita akan melakukan pengembangan model hanya dengan data training. Hasil pengujian model terhadap data testing dapat memberitahu kita apakah model kita underfit atau overfit.

---

##  Overfitting

### Pemisalan 

Bayangkan suatu saat Anda berkunjung ke suatu kota, kemudian Anda mengalami kejadian tidak menyenangkan seperti dicopet di dalam angkutan umum. Anda kemudian mungkin akan berpikir bahwa semua angkutan umum di kota tersebut tidak aman. Kadang-kadang, kita melakukan generalisasi yang berlebihan terhadap sesuatu.

Demikian halnya pada mesin yang juga bisa terjebak pada persepsi generalisasi yang sama. Dalam machine learning, kondisi ini disebut sebagai overfitting.

### Penyebab 

Overfitting terjadi ketika model memiliki prediksi yang terlalu baik pada data training, namun prediksinya buruk pada data testing. Ketika sebuah model overfit, model tidak dapat melakukan generalisasi dengan baik sehingga akan membuat banyak kesalahan dalam memprediksi data-data baru yang ditemui pada tahap produksi.

### Contohnya 

Contoh kasus adalah sebuah model machine learning untuk mengenali gambar anjing. Sebuah model yang overfit akan sangat menyesuaikan dengan dataset. Nah, di dataset mayoritas dari gambar anjing adalah anjing berwarna hitam. Maka model akan berpikir bahwa setiap hewan yang berwarna hitam adalah anjing. Ketika model tersebut dipakai untuk memprediksi sebuah gambar kucing dan kuda berwarna hitam, maka prediksinya adalah anjing.

### Bagaimana untuk mengenali apakah sebuah model overfit atau tidak?

Sebelum men-deploy model ML ke tahap produksi, ada teknik sederhana untuk mengecek apakah model overfit atau tidak. Pada model klasifikasi jika akurasi model pada data training tinggi dan data testing rendah, maka model yang Anda kembangkan overfitting. Pada model jenis regresi, jika model membuat kesalahan yang tinggi pada data testing maka model tersebut overfitting.

### Mencegah 

Beberapa cara untuk menghindari overfitting yaitu:

*  Memilih model yang lebih sederhana, contohnya pada data yang memiliki pola linier menggunakan model regresi linear daripada model decision tree.
* Mengurangi dimensi data contohnya dengan metode PCA
* Menambahkan data untuk pelatihan model jika memungkinkan.

---

## Underfitting

### Penyebab

Underfit terjadi ketika model terlalu sederhana dan tidak mampu untuk menyesuaikan pola yang terdapat pada data latih. 

### Contohnya

Sebuah model dapat dikatakan underfit jika memiliki eror yang tinggi pada data training. Underfitting menandakan bahwa model tersebut belum cukup baik dalam mengenali pola yang terdapat pada data latih. Misalnya ketika sebuah model dilatih pada data latih yang memiliki 50 sampel coklat dan 50 sampel kacang. Setelah pembelajaran dengan data latih, model malah mengenali pada data latih terdapat 90 sampel coklat dan 10 sampel kacang.

### Bagaimana untuk mengenali apakah sebuah model underfit atau tidak? 

Pada kasus klasifikasi, underfitting ditandai ketika model memiliki akurasi yang rendah pada data training. Pada kasus regresi, underfitting terjadi ketika model memiliki tingkat eror yang tinggi.

Pada ilustrasi regresi di bawah, model di sebelah kiri belum menyesuaikan dengan baik terhadap pola yang terdapat pada data. Bandingkan dengan model di sebelah kanan.

![underfit](/assets/ml/underfit.png){: .shadow w="600" h="300"}

### Mengatasi

Cara menghindari underfitting adalah dengan menyeleksi model atau meningkatkan performa dengan tuning hyperparameter yang akan dibahas di tulisan selanjutnya. Kualitas data juga sangat mempengaruhi dataset. Model machine learning yang sangat kompleks sekalipun tidak akan memiliki performa yang baik jika data yang digunakan memiliki kualitas yang buruk. Ingat prinsip: “Garbage in, garbage out” ya.

---

## Good Fit

Model ML yang baik adalah model good fit atau model yang tidak underfit maupun overfit. Sebuah model good fit akan memprediksi lebih baik dan membuat lebih sedikit kesalahan di tahap produksi. Contoh dari model yang tidak good fit seperti di bawah.

![not good fit](/assets/ml/no_goodfit.png){: .shadow w="750" h="300"}

Sebuah model membuat banyak kesalahan dalam memprediksi gambar di atas. Seperti sebuah kaos kaki dan anjing yang diprediksi sebagai gajah india, dan seekor paus yang diprediksi sebagai african grey. Tentunya Anda tidak ingin agar model ML membuat banyak kesalahan seperti di atas bukan. Berikut sebuah tabel yang membandingkan model yang underfitting, good fit, dan overfitting pada masalah regresi dan klasifikasi.

![not good fit](/assets/ml/ex_ovungofit.png           ){: .shadow w="750" h="300"}

