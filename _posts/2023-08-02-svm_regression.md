---
title: SKLearn SVM Regression 🔢
date: 2023-08-02
tags: [machine learning, unsupervised, svm, classification]
category: Support Vector Machine (SVM)
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

Seperti yang telah disebutkan pada [tulisan]() sebelumnya, selain bisa menyelesaikan masalah klasifikasi, support vector juga bisa dipakai untuk prediksi data kontinu yaitu kasus regresi.

Support vector regression (SVR) menggunakan prinsip yang sama dengan SVM  pada kasus klasifikasi. Perbedaanya adalah jika pada kasus klasifikasi, SVM berusaha mencari 'jalan' terbesar yang bisa memisahkan sampel-sampel dari kelas berbeda, maka pada kasus regresi SVR  berusaha mencari jalan yang dapat menampung sebanyak mungkin sampel di  'jalan'.

Perhatikan gambar berikut untuk melihat contoh SVR

![](https://lh5.googleusercontent.com/5OYp_CIu7on-QJCH39VvRHs1hYTHnnoX6b2Y3Jp48kRYR5G9Q4terHU1ywGqlOb0DoTSYnAQvS_SmUKC4tj80KApp3WYsZ6QlX6DkqdPp_XkAFMe1_BDGQUYZUraY7ouEaVcxd9q){: .shadow}

Seperti dijelaskan oleh Garon dalam Hands-On Machine Learning With Scikit Learn, gambar diatas menunjukkan dua model Regresi SVM Linear yang dilatih pada beberapa data linear acak, satu dengan margin besar (ϵ = 1,5)  dan yang lainnya dengan margin kecil (ϵ = 0,5). lebar jalan dikontrol oleh hyperparameter ϵm yang juga disebut  maksimum error. Menambahkan data training kedalam margin tidak akan mempengaruhi prediksi model. Oleh karena itu, model disebut sebagai ϵ-insensitivity (tidak sensitif-ϵ).

Berbeda dengan SVM  dimana support vector adalah 2 sampel dari 2 kelas berbeda yang memiliki jarak paling dekat, ada SVR support vector adalah sampel yang menjadi pembatas jalan yang dapat menampung seluruh sampel pada data.  M. Awad dan R. Khanna dalam bab 4 bukunya [14](https://link.springer.com/chapter/10.1007/978-1-4302-5990-9_4) mengilustrasikan support vector pada SVR sebagai berikut.

![](https://lh6.googleusercontent.com/gwFeCNov7CQ16aLYkHRFgRsenRTbkqE1u8N7QPoQraRQtig6SUUc1n9byEr1IShy_qbnYjIOEGFkWkskdDUlbW1aBTNlKFqjFUMa2V1ajl7dbjJKZvIX0SKJaUykoAAAYznOAkJ9){: .shadow}

