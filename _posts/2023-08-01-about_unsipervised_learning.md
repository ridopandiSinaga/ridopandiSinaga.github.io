---
title: Something about Unsupervised Learning
date: 2023-08-01
tags: [machine learning, unsupervised]
category: Supervised & unsupervised
layout: post
image: https://64.media.tumblr.com/decc66bc77ee57b351967c603aa7e210/tumblr_nwj3pqHV5i1qd4q8ao1_500.gifv 
---

<!-- https://i.gifer.com/Dz04.gif -->

Setelah kita memberikan sekumpulan data tanpa label, model machine learning akan mempelajari pola dan struktur pada data berdasarkan hubungan atau keterangan antar variabel pada data. Model kemudian akan mengelompokkan data ini kedalam beberapa klaster yang berbeda. Teknik ini disebut sebgai *clustering*.

Contoh kasus untuk teknik clustering adalah *customer segmentation*. Dari data ribuan pengunjung sebuah *website ecommerce* , model akan belajar sendiri untuk mengelompokkan pengujung. Bisa berdasarkan waktu kunjungan, lama kunjungan, penggunaaan fitur search, jumlah klik dan sebagainya. Model unsupervised learning akan menentukan segment market yang berbeda. Dengan output dari model ini, pengelola ecommerce dapat menentukan strategi untuk menignkatkan penjualan atau strategi lain yang dirasa perlu diambil untuk kelanjutan bisnis.

Metode unsupervised learning yang sekarang sedang sangat  populer adalah *generative adversarial networks (GANs). Terinspirasi dari teori game, GAN bekerja dengan cara membuat dua jaringan syaraf tiruan berkompetisi. Dimana ketika kedua jaringan syaraf tersebut bersaing, jaringan pertama mencoba menhasilkan data palsu untuk mengelabui jaringan ke dua, sedangkan jaringan kedua mencoba untuk membedakan data palsu tersebut dari data sampel kumpulan data kita. Seiring waktu, kedua jaringan semakin ahli dalam tugas - tugas mereka dalam menangkap pola spesifik yang halus dalam sekumpulan data.

Berikut beberapa algoritma unsupervised learning yang penting untuk diketahui: *clustering, 
dimensionality reduction, anomaly detection,*  dan *desity estimation*.

