---
title: Keras Library 📚
date: 2023-08-08
tags: [keras, tensorflow]
category: Tensorflow
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Pengenalan

Keras adalah API untuk mengembangkan jaringan saraf tiruan. Dengan keras kita dapat membuat sebuah *multilayer perceptron* dan *convoluntional neural network* dengan sangat mudah. Aplikasi Keras sangat luas dimana kita dapat membangun jaringan saraf tiruan untuk klasifikasi gambar, pemrosesan bahasa alami, pengenalan suara, dan prediksi *time series*.

Komponen inti pembangun sebuah jaringan saraf tiruan dalam Keras adalah *layer*. Sebuah *layer* pada Keras, sama dengan sebuah layer pada MLP yang memiliki beberapa perseptron.

Pada keras misalnya, kita ingin melakukan klasifikasi pada dataset fashion MNIST seperti pada contoh dibawah. Dataset fashion MNIST memiliki label 10 kelas yang terdiri dari baju, sepatu, tas, dan sebagainya. Dataset ini berguna untuk megklasifikasikan sebuah objek fashion.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201224170738ab2415a173666f09befd53df4668a753.png){: .shadow}

Dengan Keras, kita dapat membuat sebuah model hanya dengan beberapa baris kode seperti dibawah.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202012241710462020a62c6cea32ea2f186fb28d9d2063.png){: .shadow}

## Mari kita ~~coba~~ bahas

Mari kita bahas kode diatas satu persatu. Hal yang paling pertama adalah kita perlu mempersiapkan data kemudian membaginya menjadi data latih dan data uji. Data fashion MNIST bisa kita dapatkan dengan mudah dari library datasets yang disediakan Keras.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202012241711118545727f26e114ab79b272c99989c993.png){: .shadow}

Dalam klasifikasi gambar, setiap pixel pada gambar memiliki nilai dari 0 sampai 255. Kita perlu melakukan normalisasi dengan membagi setiap pixel pada gambar dengan 255.  Dengan nilai yang telah dinormalisasi, jaringan syaraf dapat belajar dengan lebih baik.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201224171129eedfe9a85ae363c1f274281e6261dac7.png){: .shadow}

Pada langkah berikutnya, kita mendefenisikan arsitektur dari jarigann syaraf yang akan kita latih.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201224171145741d3950ef47f1d4dfb859100f2d5cf7.png){: .shadow}

Sama dengan yang kita pelajari pada tulisan sebelumnya, guna membuat sebuah MLP kita hanya perlu mendegenisikan sebuah input layer, hidden layer dan output layer. Untuk membuat sebuah MLP dikeras kita harus memangggil fungsi tf.keras.models.Sequential([...]) dan menampungnya pada sebuah variabel. Model sequential pada keras adalah tumpukan layer-layer, yang sama seperti  pada sebuah MLP.


Berikut kita mendefenisikan 3 layer utama pada model sequential:

* *Input layer*: adalah layer yang memiliki parameter 'input_shape'. input_shape sendiri adalah resolusi dari gambar-gambar pada data latih. Dalam hal ini sebuah gambar MNIST memiliki resolusi 28x28 pixel.  Sehingga input *shape*-nya adalah (28,28). Sebuah layer Flatten pada keras akan berfungsi untuk meratakan input.  Meratakan disini artinya merubah gambar yang merupakan matriks 2 dimensi menjadi larik 1 dimensi. Pada kasus kita  sebuah gambar MNIST yang merupakan matriks 28x28 elemen akan diubah menjadi larik/array satu dimensi sebesar 784 elemen.

* *Hidden layer*: Dense layer pada keras merupakan layer yang dapat dipakai sebgai hidden layer dan  output layer pada sebuah MLP. Paraameter unit merupakan jumlah perceptron pada sebuah layer. Masih ingat bukan, bahwa activation function adalah fungsi aktivasi yang telahkita pelajari pada tulisan [sebelumnya](). Kita dapat menggunakan fungsi aktivasi relu(*rectified liner unit*) atau fungsi aktivasi lain untuk hidden layer kita.

* *Output layer*:  Didefenisikan dengan membuat sebuah Dense layer. Jumlah unit menyesuaikan dengan jumlah label pada dataset. Untuk fungsi aktivasi  pada layer output,  gunakan fungsi aktivasi *Sigmoid* ketika hanya terdapat 2 kelas/label pada dataset. Untuk dataset yang memiliki 3 kelas atau lebih, gunakan fungsi aktivasi Softmax. Fungsi aktivasi softmax akan memilih kelas mana yang memiliki probabilitas tertinggi. Untuk data fashion MNIST  kita akan menggunakan fungsi aktivasi softmax karena terdapat 10 kelas.


Setelah membuat arsitektur dari MLP, model kita belum bisa melakukan apa-apa. Agar model bisa belajar, kita perlu memanggil fungsi compile pada model kita dan menspesifikasi optimizer dan loss function. Hal ini sama seperti penjelasan dari propagasi balik di tulisan [sebelumnya]().

Untuk optimizer kita bisa menggunakan Adam. Selanjutnya untuk loss function kita dapat menggunakan sparse categorical entropy pada kasus klasifikasi 3 kelas atau lebih. Untuk masalah 2 kelas, loss function yang lebih tepat adalah binary cross entropy. Parameter metrics  berfungsi untuk menampilkan metrik yang dipilih pada proses pelatihan model.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202012241712424387fb2c541ca2cb810f22dc4bcb53e7.png){: .shadow}

Setelah membuat arsitektur MLP dan menentukan optimizer serta loss functionnya, kita dapat melatih model kita pada data training. Parameter epoch merupakan jumlah berapa kali sebuah model melakukan propagasi balik.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201224171302fb885dccf2135bc4a73565b82dc541e5.png)

Begitulah bagaimana kita membuat sebuah jaringan saraf dengan Keras. Sangat muddah bukan? Pada tulisan-tulisan berikutnya kita akan menggunakan data yang sedikit lebih kompleks dari Kaggle.
