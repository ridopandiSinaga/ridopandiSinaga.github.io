---
title: Penggunaan Batch Loading
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---



Pada tulisan kali ini kita akan membahas teknik yang umum dipakai di industri yaitu batch loading. Apa itu batch loading? 

Batch loading adalah  proses pelatihan dimana jst melakukan pembaruan parameternya (weight) setelah membaca sejumlah sampel data tertentu. Misal dataset kita  berisi 800 buah gambar pizza. Tanpa batch size, proses pembuatan parameter terjadi untuk seluruh sampel pada dataset. Sehingga ketika tanpa menggunakan batchsize, pada 1 epoch terdapat 800 kali  pembaruan weight. Ketika 1 ukuran batch adalah  32 buah gambar pizza, aka terdapat 25 buah batch pada dataset. Pada batch loading, model baru melakukan  pembaruan  parameter setelah  membaca satu bach atau 32 buah gambar pizza.  Sehinggga proses pembaruan parameter pada 1 epoch  hanya sebanyak  25 kali.

Apakah Anda sudah menyadari apa fungsi dari batch loading? Yup benar. Dengan batch loading proses pelatihan data menjadi jauh lebih cepat. Kita akan melihat langsung kegunaan dari batch loading dengan latihan dibawah.


Untuk dataset kita menggunakan dataset mnist dan model yang sama dengan tulisan sebelumnya.

```python
import tensorflow  as tf
mnist = tf.keras.datasets.mnist
(training_images, training_labels), (test_images, test_labels) = mnist.load_data()
training_images = training_images/255.0
test_images = test_images/255.0
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape(28,28)),
  tf.keras.layers.Dense(128, activation=tf.nn.relu),
  tf.keras.layers.Dense(10, activation=tf.nn.softmax)
])
model.compile(
  optimizer = tf.optimizers.Adam(),
  loss = 'sparse_categorical_crossentropy',
  metrics = ['accuracy']
)
```


Disini kita mulai menggunakan batchloading. Untuk menggunakan batchloading kita hanya  tinggal menambahkan parameter 'batch_size'  pada fungsi fit(). Tahukah Anda bahwa fungsi fit() secara  default menggunakan  batch loading dengan batch size sebesar 32. Lantas ketika kita tidak mendefenisiskan parameter batch_size, maka ukuran batch akan diisi sebesar  32 secara default. Perhatikan bahwa pada setiap epoch  memakan waktu selama  sekitar 3 atau 4 detik.

Hasilnya sebagai berikut.

```python
model.fit(training_models, training_labels, batch_size=32, epochs=5)
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803133221c8182f23389e4995894901d8534a46e0.jpeg){: .shadow}

Selanjutnya kita akan menggunakan batch_size yang lebih besar yaitu 128.  Dapat kita lihat bahwa semakin besar batch size , waktu eksekusi epoch akan semakin cepat. Silahkan Anda bereksperimen menggunakan batch size yang lain. Bagaiman hasilnya?

```python
model.fit(training_images,  training_labels, batch_size=128, epochs=5)
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803133222b4e0260f0c548cea595aa25cf70ff204.jpeg){: .shadow}

Pada latihan ini kita telah memahami  bahwa dengan menggunakan  batch loading, kita dapat mempercepat pelatihan model kita. Untuk peimlihan batch size tersendiri  tidak ada aturan bakunya  namun yang umum dipakai  adalah 32, 64,  dan 128. Anda umumnya  harus  bereksperimen sendiri guna menemukan  batch size  yang cocok dengan masalah Anda.

Akhirnya, kita telah sampai dipenghujung tulisan ini. Pada tulisan berikutnya  kita akan coba latihan  untuk mengembangkan model yang lebih kompleks.
