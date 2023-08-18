---
title: Image Augmentation
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Klasigikasi Gambar
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---


Salah satu tantangan dalam pengembangan model ML, khususnya dalam kasus computer vision adalah terbatasnya data yang tersedia untuk pelatihan model. Ada beberapa cara untuk mengatasi masalah tersebut. Salah satu cara tersebut adalah augmentasi gambar.

Augmentasi gambar adalah sebuah teknik yang sangat berguna dimana ia dapat memperbanyak data latih untuk model tanpa perlu mencari data yang baru. Kok bisa? Prisip yang digunakan sederhana. Duplikasi gambar yang telah ada dengan beberapa variasi, sehingga data menjadi lebih banyak. Salah satu vairasi tersebtu contohnya adalah horizontal flip. Contoh dibawah menunjukkan sebuah sampel data yang berupa gambar ambulan yang diaugmentasi  dengan variasi horizontal flip atau balik secara horizontal.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020080314414652946f02ada4d6b73775474e2032e455.jpeg){: .shadow}

Hasil augmentasi seperti diatas mungkin terlihat kurang signifikan. Namun bagi sebuah model jaringan saraf, nilai-nilai piksel dari gambar baru adalah informasi baru yang dapat dipelajari oleh model. Dengan adanya tambahan informasi, yang dapat dipelajari model, maka model dapat menghasilkan prediksi yang lebih baik.

Seperti yang telah kita pelajari sebelumnya, keras menyediakan ImageDataGenerator yang membantu kita untuk melakukan augmentasi gambar pada dataset kita. Beberapa contoh augmentasi gambar yang dilakukan ImageDataGenerator adalah:

* Rescale - contoh augmentasi ini yang pertama kali kita temui. Rescale berfungsi untuk menormalisai setiap nilai piksel pada gambar menjadi antara 0 dan 1.
* Horizontal_flip - seperti contoh sebelumnya, horizontal flip berfungsi untuk membalikkan gambar secara horizontal.
* Vertical_flip - Berkebalikan dengan horizontal flip, sesuai dengan namanya yaitu membalikkan gambar secara vertikal.
* Zoom_range - melakukan augmentasi berupa zoom pada gambar
* Rotation_range - melakukan rotasi pada gambar secara acak

Untuk melihat jenis-jenis augmentasi  lain dan dokumentasi lengkapnya, kunjungi [tautan](https://keras.io/api/data_loading/image/) berikut yah.

Beberapa hal lai yang perlu diperhatikan dalam augmentasi gambar. Seperti augmentasi yang akan diaplikasikan pada gambar haruslah mempertahankan informasi yang terdapat pada data asli.

![](https://keras.io/api/data_loading/image/){: .shadow}



Seperti contoh diatas, melakukan augmentasi vertikal flip  malah dapat mengurangin performa model  saat pelatihan karena model kemungkinan tidak dapat dipakai untuk prediksi gambar anjing yang terbalik.

Terakhir, augmentasi gambar tidak boleh diaplikasikan pada data testing atau data validasi. Karena mengevaluasi kinerja model pada data yang telah diaugmentasi dapat seolah-olah membuat model yang telah memiliki prediksi yang bagus.
