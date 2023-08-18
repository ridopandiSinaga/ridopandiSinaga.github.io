---
title: Menggunakan Model untuk Melakukan Prediksi 
date: 2023-08-11
tags: [keras, tensorflow]
category: Tensorflow
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---


Setelah data kita siap untuk dilatih pada model, kita kemudian bisa membuat model dan  melihat hasil prediksinya. Sama seperti model ML yang disediakan  pada library Scikit Learn, mekanisme  kerja dari model tensorflow dan Keras API juga sama. Yup, untuk melatih model, kita hanya perlu memanggil fungsi fit() dan mengisi parameter atribut dan label pada dataset serta  jumlah epoch yang harus dilakukan.

Mari kita tulis kode untuk model kita. Kita akan membuat model untuk memprediksi persamaan linear sederhana dimana,  atributnya adalah   sebuah bilangan X , dan labelnya  bernilai 2X+2.

Sebuah model dari API Keras dapat menerima masukan dengan tipe data numpy array. Sehingga kita bisa membuat2 buah objek bertipe  numpy array, satu untuk atribut dan satu sebagai labelnya. Untuk jenis tipe data lain yang dapat diterima sebagai masukan sebuah label dari API Keras, Anda dapat mengunjungi [tautan](https://www.tensorflow.org/api_docs/python/tf/keras/Model) berikut ini ya.

```python
import tensoflow as ts
import numpy as np
from tensorflow import keras
```

```python
xs = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], dtype=float)
ys = np.array([4.0, 6.0, 8.0, 10.0, 12.0, 14.0], dtype=float)
```


Kemudian kita buat model JST kita dengan memanggil fungsi tf.keras.Sequential(). Sequential adalah model JST yang paling sederhana  da telah kita pelajari sebelumnya. Pada model sequential, setiap layer pada jaringan syaraf tiruan terhubung secara konsekuensial, sesuai namanya.

```python
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
```

Pada model sequential ini, kita kemudian isi layer yang kita inginkan untuk model kita. Untuk membuat sebuah layer, kita dapat menggunakan fungsi keras.layers.Dense().

* Parameter units dari fungsi keras.layers.Dense() adalah jumlah perseptron yang dimiliki oleh layer tersebut. Yang perlu diperhatikan pada model sequential adalah, layer pertama pada model tersebut haruslah memiliki parameter input_shape agar model bisa mengenali bentuk input yang akan diprosesnya.
* Paramereter input_shape menunjukkan bentuk dari setiap elemen input yang akan diterima oleh model. Pada kasus kita setiap elemen dari data kita adalah sebuah  bilangan numerik 1 digit,  sehingga kita bisa input_shape  kita dengan angka 1. Jika sebuah elemen dari dataset  kita berupa gambar yang memiliki dimensi32*32 piksel, maka input_shape  yang sesuai adalah [32, 32].

Kemudian, hal yang paling penting selanjutnya adalah menentukan optimizer dan loss dari model agar model kita  bisa belajar. Untuk menetapkan optimizer dan loss kita gunakan fungsi compile. Untuk masalah regresi kita yang sederhana, kita dapat menggunakan stochastic gradient descent sebagai optimizer, dan  mean squared error sebagai loss function model kita.

```python
model.compile(optimizer='sgd', loss='mean_squared_error')
```

Terakhir, yuk kita panggil fungsi yang paling terkenaldari machine learning yaitu fit(). Fungsi fit() adalah fungsi dimana kita menyuruh model kita untuk mempelajari hubungan antara atribut dan  label pada dataset. Selain atribut dan label, parameter lain yang diperlukan sebuah model keras pada fit  adalah epochs. Epochs adalah berapa kali sbuah JST harus belajar memperbaiki akurasinya.

```python
model.fit(xs, ys, epochs=150)
```

Dapat anda lihat bahwa pada setiap epochs yang baru, error yang dibuat model akan semakin menurun pada kasus regresi kita.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803114555a6da0b4981171dc897f4e19508b3e072.jpeg){: .shadow}

Ketika model kita dilatih, kita kemudian dapat menggunakan model tersebut utnuk memprediksi data yang belum pernah dilihatnya menggunakan fungsi predict. Ketika kita menjalankan kode dibawah, hasil yang kita dapat seharusnya adalah  22 dimana 2(10)+2 =22.

```python
print(model.predict([10,10 ]))
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803114555aedc1ea99b1c6d0371d427407cb20cec.jpeg){: .shadow}

Menariknya, hasil yang didapat dari JST kita akan mendekati angka 22. Kenapa demikian? Karena JST menghitung probabilitas. Pada kasus kita neural network mempelajari bahwa pola yang terdapat pada dataset kemungkinan adalah 2X+2, namun ia juga belum pasti tentang hal itu. Sehingga prediksi yang dihasilkan adalah probabilitas hasilnya mendekati 22. Semakin banyak data yang kita berikan dan juga error ketika training model semakin kecil, maka prediksi dari NN  akan semkain mendekati 22. 
