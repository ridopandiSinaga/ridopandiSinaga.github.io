---
title: Mencegah Overfitting dengan Dropout
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

Seperti yang telah pernah kita pelajari sebelumnya, masalah umum yang dihadapi oleh ML adalah overfitting. Kita ingat kembali overfitting adalah situasi dimana sebuah model memiliki performa  yang bagus  saat mengenali data latih, namun performanya buruk  saat mengenali data baru yang belum pernah ditemuinya.

Begitu juga dengan syaraf tiruan. Terus apakah solusinya?

Ssalah satunya dengan menggunakan dropout. Dropout adalahstandar umum  diindustri yang dipakai untuk mencegah overfitting. Seperti yang kita ketahui, semakin kompleks sebuah model ML, maka akan semkain tinggi kemungkinan model tersebut  mengalami overfitting.  Dropout bekerja denan mengurangi kompleksitas  model jst tanpa  merubah  arsitektur model tersebut.

Bagaimana  dropout bekerja? Nama dropout mengacu pada unit/perseptron  yang di-dropout(dibuang) secra temporer pada sebuah layer. Contohnya  seperti dibawah dimana besaran  dropout yang dipilih adalah 0.5 sehingga 50% dari perseptron  hidden layer  kedua dimatikan secara berkala pada saat pelatihan.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803125202b077a1253a77def9b9e4ae6b553bc1cc.gif){: .shadow}

Weight dari setiap neuron pada sebuah layer bersifat statis. Hal ini menyebabkan  jarigan saraf terlalu  menyesuaikan  dengan data latih sehingga overfitting. Nah, penerapan  dropout akan membantu mengatasi hal ini. Untuk informasi lebih lanjut dapat Anda baca pada [tautan](https://towardsdatascience.com/simplified-math-behind-dropout-in-deep-learning-6d50f3f47275) berikut ini ya.


Untuk mengimplementasikan dropout sendiri  sangatlah mudah pada Keras. Anda cukup menambahkan layer dropout pada sebuah hidden layer di model Anda. Agar lebih jelasnya, lihat contoh dibawah.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202008031316275e401d1766ef610be3df090f912afb4a.jpeg){: .shadow}

Untuk menggunakan dropout kita cukup menambahkan  layer tf.keras.layers.Dropout() dan mengisi parameter berupa persentasee  dropout yang kita inginkan  seperti dibawah. Dropout akan otomatis diaplikasikan pada layer yang mendahuluinya. Sangat mudah, bukan?

Pada tulisan berikutnya, kita akan mengimplementasikan  dropout pada model untuk klasifikasi gambar.
