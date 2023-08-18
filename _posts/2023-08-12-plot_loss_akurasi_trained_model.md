---
title: Plot Loss dan Akurasi dari Trained Model
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---



Ditulisan sebelumnya kita menampung fungsi fit pada sebuah objek history. Jawabannya adalah karena  kita dapat  membuat plot akurasi dan loss  model kita pada saat proses pelatihan.

Plot ini  sangat berguna utuk melihat  proses keseluruhan pembelajaran model seiring waktu. Untuk meliat bagaimana plot bekerja, ayo kita kerjakan latihan berikut.  Kita akan menggunakan  dataset dan model yang sama dengan latihan sebelumnya. Anda dapat menggunakan latihan sebelumnya dan menambahkan kode-kode berikut dibawah latihan sebelumnya.

```python
plt.plot(hist.history['loss'])
plt.title('Model loss ')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train'], loc='upper right')
plt.show()
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803124318f1aaa012e017bf9a0df05f9a0489689a.jpeg){: .shadow w="600" h="450"}

Untuk membuat plot dari akurasi, kita bisa memilih metri accuracy pada fungsi  history. Dari hasil plot dibawah, cek bahwa  akurasi model stagnan pada epoch di sekitar 20 dan juga  kembali stagnan pada epoch diatas 80.

```python
plt.plot(hist.history['accuracy'])
plt.title('Model accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train'], loc='lower right')
plt.show()
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202008031243184f40abf286562b2a794af27893193a13.jpeg){: .shadow w="600" h="450" }

Akhirnya, kita telah memahami bagaimana plot akurasi dan loss  dari model kita. Pada tulisan berikutnya, kita akan membahas lebih dalam  bagaimana menggunakan plot ini ntuk mendeteksi  overfitting dan underfitting.
