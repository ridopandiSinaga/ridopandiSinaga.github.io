---
title: Model Sekuensial dengan Beberapa Layer
date: 2023-08-11
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---


Pada tulisan sebelumnya kita telah membuat sebuah JST sederhana yang memiliki 1 layer. Tentu saja, pada masalah-maslah yang terdapat pada industri, tidak dapat diselesaikan oleh jst hanya memiliki 1 buah layer.

Kita aka selelu menggunakan banyak layer untuk masalah yang kita hadapi pada industri.  Bayangkan jika kita ingin mengembangkan model untuk mengklasifikasi tumor otak yang memiliki dataset 500.000 gambar scan dari otak pasien. Jika model yang kita buat hanya memiliki  1 layer, alih-alih akurasi mendekati 99%, justru error yang  akan sangat mendekati 99%. Disinilah kita harus paham cara menggunakan multiple layer ketika mengembangkan jst.

Untungnya, sangatlah mudah untuk menambahkan layer pada model kita. Kita cukup menambahkan fungsi Dense  sesuai jumlah layer yang kita inginkan dari model kita.

Pada kode dibawah kita memanggil fungsi dense sebanyak 3 kali yang menunjukkan model kita memiliki 3 buah layer. Layer pertama hanya memiliki 1 buah perceptron, layer kedua memiliki 8 buah perseptron, dan layer terakhir memiliki 1 buah perseptron. ingat kembali yah, bahwa layer pertama dari model sequential harus memiliki parameter input_shape agar model kita mengenali bentuk input yang akan diterimanya.

```python
model = tf.keras.Sequential([
  keras.layers.Dense(units=1, input_shape=[1]),
  keras.layers.Dense(units=8),
  keras.layers.Dense(units=1)
])
```

Silahkan coba kode diatas pada latihan  sebelumnya yaitu `Menggunakan Model untuk Melakukan Prediksi` dan lihat perbedaanya.
