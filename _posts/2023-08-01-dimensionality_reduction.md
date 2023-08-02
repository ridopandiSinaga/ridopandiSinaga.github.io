---
title: Dimensionality Reduction (LDA, PCA, t-SNE)
date: 2023-08-02
tags: [machine learning, unsupervised, lda, pca, t-sna]
category: Supervised & unsupervised
layout: post
image: https://www.oreilly.com/content/wp-content/uploads/sites/2/2019/06/animation-94a2c1ff.gif
---



<!-- https://i.gifer.com/Dz04.gif -->


 Pada Tahap ini kita telah belajar mengimplementasikan 2 model machine learning yaitu regresi dan clustering. Dataset yang kita gunakan  memiliki atribut yang masih sedikit sehingga proses pelatihan model yang kita bangun sebelumnya sangat cepat. Namun dalam praktiknya, banyak masalah Machine Learning yang menggunakan dataset yang memiliki ribuan atau bahkan jutaan atribut, seperti pada dataset yang berisi informasi mengenai genetika manusia.

Dengan begitu banyaknya atribut, proses palatihan akan menjadi lambat dan memakan waktu lama. Contoh lain pada kasus image recognition, dimana atribut image adalh jumlah pixel dari gambar tersebut. Jika sebuah gambar memilki resolusi 28 x 28 pixel, maka gambar tersebut memiliki 784  atribut.

![](https://lh3.googleusercontent.com/vbjmzhJYoGfaQkoJMFodwsUM2uMeq7ljuHBPId-MhD5bGLkXqEM7qrp20MT_MLlUhsrkg6njhvYfz92wbaDrASIPp9vyU1Wq4kx9iawub-pbZeczb9DTlf3XS0YXPVsnNxMusRoM){: .shadow}

Pada 2 gambar diatas, setiap pixel adalah sebuah atribut. Hanya atribut yang berada didalam kotak merah, yang berguna untuk dipakai dalam pelatihan model. Pengurangan dimensi pada kasus ini adalah dengan membuang pixel atau atribut yang berada diluar kotak merah. Bayangkan jika terdapat 10.000 gambar seperti diatas dalam suatu dataset. Pengurangan dimensi akan mempercepat pelatihan model secara signifikan.

Ada beberapa teknik dalam pengurangan dimensi. Slah satu metode pengurangan dimensi yang terkenal adalah Principal Component Analysis atau sering  disebut PCA.





## Principal Component Analysis (PCA)

Secara sederhana, tujuan dari PCA adalah mereduksi dimensi atau mengurangin jumlah atribut pada dataset tanpa mengurangin informasi. Contohnya pada sebuah dataset harga rumah. Pada PCA setiap atribut disebut sebgai principal component. Jika terdapat 10 atribut pada dataset, berarti terdapat 10 principal component. Pada gambar dibawah, terdapat histogram dari 10  principal component dan variance dari setiap principal component.

![](https://lh6.googleusercontent.com/a6YEzOwc2JKLSmpEqZHrSO3_SzYTM7oToQy9A4liIdPPNJgc9n-mP88Lfj8UvmoOpdGuVXb9Ac8pGX9RP3UdMucYs-GAGccuZIcSZ-jVbFqPkjY1I0FExYVPkGWWlln6vRsBW2Io){: .shadow}

PCA bekerja dengan menghitung variance dari tiap atribut. Variance adalah informasi yang dimiliki sebuah atribut. Misal pada dataset rumah, atribut jumlah kamar memiliki variance atau informasi sebesar 92%  dan warna rumah memiliki variance/informasi sebesar 4% tentang harga rumah terkait. Dari hasil perhitungan variance, atribuat warna rumah dapat dibuangdari dataset karena tidak memilki informasi yang cukup signifikan ketika kita ingin mempercepat  pelatihan sebuah model.

## LDA 

Linear Discriminant Analysis atau analisis diskriminan linear adalah teknik statistika yang dipakai untuk reduksi dimensi. LDA bekerja dengan mencari kombinasi atribut terbaik yang dapat memisahkan kelas-kelas pada dataset dan meminimalkan varian pada masing-masing kelas. Kontra dengan PCA yang bekerjaa dengan mencari atribut komponen yang memiliki varian tertinggi.

Perbedaan mendasar lain yang membedakan LDA dengan PCA  merupakan teknik unsupervised karena pada pengurangan dimensi,  PCA tidak menghiraukan label yang terdapat pada dataset. Sedangkan LDA merupakan teknik supervised karena LDA  memperhatikan bagaimana kelas-kelas pada data  dapat dipisahkan dengan baik.

Tujuan LDA adalah mengurangi dimensi dataset berdimensi-i dengan memproyeksikannya ke subruang berdimensi-j, dimana j<i. LDA menggunakan fitur dari kedua sumbu (X dan Y) untuk membuat sumbu baru, kemudian memproyeksikan data ke sumbu baru dengan cara meminimalkan varians dan memaksimalkan jarak antara dua kategori. Dengan demikian, dua kriteria utama yang digunakan LDA untuk membuat sumbu baru adalah.
1. Meminimalkan varian pada masing-masing kelas.
2. Memaksimalkan jarak antar rata-rata(mean) kedua kelas.

Secara sederhana, berikut adalah contoh ilustrasi bagaimana LDA menggunakan 2 kriteria diatas untuk mereduksi dimensi.

![](https://lh4.googleusercontent.com/1VtZuliFaC6dd5Avqzky_4OMsqRrXHWV30aR_vTMycQwyLTUFWvUxtcdbE9ze17aWAlw1EmJIfpd1b3ANLYZNjgfdygwECwxp4Y3bRxNsnL4IZO0q_YRQurA-Mzx5fgSPck57vym){: .shadow .normal  w="300" h="300" }
![](https://lh6.googleusercontent.com/sN-QfXBouoDDfhLhKLouA0p4XDX04uLqZ1FaE2CsWinpBcU7z2c09YW_kuRjuacYacdfYA6NKI-WghhPBlQbCQVBpgh703ja18UoNzO93ucSQ4vwNYalM3F2Eeu2i-sqW0-5bZdm){: .shadow .normal w="300" h="300"}

Pada kedua gambar diatas, tampak pada sumbu baru yang berwarna merah telah dibuat dan diplot grafik 2D sedemikian rupa sehingga memaksimalkan jarak antara rata-rata(mean) dari kedua kelas dan meminimalkan varian dari setiap kelas. Dengan kata lain, sumbu ini meningkatkan permisahan titik-titik data dari kedua kelas. Setelah membuat sumbu baru dengan kriteria yang disebutkan diatas, semua titik-titik data kemudian diplot pada sumbu baru seperti tampak pada gambar disebelah kanan.

Hasil akhirnya akan tampak seperti berikut.

![](https://lh3.googleusercontent.com/HDRR3_g_kjC9wLc9yTBETS7ipCZVv8IBAPViTkxjwT-rKMzlTw1dSJinDaVvusmXo9sO2MqEet1K4YCjj802swmgkVTEpabCgmqdT-rJlISp-vKZWQaED4XrGpvvX2Hvg9gSMi21){: .shadow}

Bagaimana mudah dipahamikan? Ilustrasi diatas menggunakan data yang sederhana agar kita lebih mudah memahami tentang LDA. Perlu diingat bahwa pada kenyataanya, dataset yang ada  tentu tidak sesederhana ini.

Silahkan kunjungin [tautan](https://sebastianraschka.com/Articles/2014_python_lda.html) berikut untuk membaca lebih lanjut mengenai LDA, juga [tautan](https://scikit-learn.org/stable/modules/lda_qda.html) berikut untuk memahami LDA dengan library scikit-learn.

## t-SNE 

t-Distrbuted Stochastic Neighbor Embedding atau sering disebut t-SNE dikembangkan oleh Laurens van der  Maaten dan Geoffrey Hinton pada tahun 2008. t-SNE adalah teknik nonlinear unsupervised  yang digunakan untuk reduksi dimensi, eksplorasi data,  dan visalisasi data berdimensi tinggi.

Algoritma t-SNE memungkinkan kita untuk memisahkan data yang tidak dapat dipisahkan oleh garis linear. Dengan t-SNE kita bisa melihat visualisasi bagaimana data terusun pada ruang berdimensi tinggi. Lalu, bagaimana cara kerja algoritma t-SNE?

t-SNE menhitung ukuran kesamaan antara pasangan titik data diruang berdimensi tinggi dan dimensi rendah, kemudian mengoptimalkan dua kesamaan ini. Dengan kata lain, t-SNE mengurangin dimensi dengan menjaga sampel-sampel yang mirip agar berdekatan, dan sebaliknya sampel-sampel yang kurang mirip, berjauhan.

Cyrille Rossant dalam [tulisannya](https://www.oreilly.com/content/an-illustrated-introduction-to-the-t-sne-algorithm/) *An Ilustrated Introduction to the t-SNE Algorithm* membuat visualisasi handwriting digit dengan t-SNE sebagai berikut.

![](https://lh4.googleusercontent.com/9aDncqTS383hxKmRzrvGvB9PRJ2QYnUBwCID2yzP0oWgc3Zk-cy5FD2pJd5dwxyPtdapf0iRhr4HFyfoC18ptZZB08FK8tfVjkarXp1evpjcpr7doLT8ve1fDm_6tnZCzg74i-Jv){: .shadow}

Laurens Van der Maaten pada acara Google Tech Talk menyampaikan langkah-langkah dalam algoritma t-SNE sebagai berikut. Pertama menghitung ukuran kesamaan antara pasangan pada ruang berdimensi tinggi. Selanjutnya menghitung ukuran kesamaan antara pasangan pada ruang berdimensi rendah. Langkah terakhir, kita ingin himpunan problabilitas dari ruang dimensi rendah untuk mencerminkan ruang berdimensi tinggi sebaik mungkin sehingga diharapkan kedua struktur serupa.

Dengan teknik ini, t-SNE mmapu menangkap banyak struktur lokal dari data berdimensi tinggi dengan sangat baik, sekaligus menunjukkan struktur global seperti keberadaan cluster dibeberapa skala. t-SNE serin dipakai untuk visualisasi data  yang memiliki dimensi besar dan dipakai luas dalam pemrosesan gambar, pemrosesan bahasan alami, data genomika, dan speech processing.

Jika tertarik mempelajari lenbih lanjut tentang t-SNE, Silahkan mengunjungi laman pribadi L. V. Maaten, ilmuwan yang menemukan teknik t-SNE pada [tautan](https://lvdmaaten.github.io/tsne/) berikut. Untuk memahami bagaimana implementasi t-SNE dengan bahasa pemrograman python, silahkan kunjungin [tautan](https://www.oreilly.com/content/an-illustrated-introduction-to-the-t-sne-algorithm/) berikut serta [tutan](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html) berikut untuk memahami implementasi t-SNE dengan library scikit-learn.
