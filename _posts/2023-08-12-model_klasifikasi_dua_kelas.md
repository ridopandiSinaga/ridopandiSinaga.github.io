---
title: Membuat Model untuk Klasifikasi Dua Kelas
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

Setelah pada tulisan sebelumnya kita membahas bagaimana  mengembangkan model jst sequential untuk masalah regresi sederhana, kita akan lanjut mengembangkan model jst untuk klasifikasi biner.

Nah, pada submodul ini kita akan coba melatih model untuk mengklasifikasikan apakah  sebuah buah merupakan jeruk atau anggur. Untuk datasetnya bisa kita unduh [ditautan](https://www.kaggle.com/datasets/joshmcadams/oranges-vs-grapefruit) berikut.

Karena dataset kita bertipe csv, kita akan menggunakan pandas untuk merubah dataset menjadi sebuah dataframe. Untuk melakukannya, gunakan fungsi read_csv().

```python
import  pandas as pd
df = pd.read_csv('citrus.csv')
```

Kemudian untuk melihat overview dari dataset, kita bisa memanggil fungsi info() pada dataframe. Dapat kita lihat dibawah bahwa pada dataset terdapat 6 buah kolom  dengan 1 kolom  memiliki value bertipe 'object', dan 5 bertipe numerik.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020080311533446bd238751776d7540667d037e448336.jpeg){: .shadow w="450" h="300"}

Selanjutnya gunakan fungsi head() untuk menampilkan dataframe kita. Pada output  dari cell di bawah, label dari dataset  adalah kolom pertamayang berisi string 'orange' dan 'grapefruit'.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803115334cc584bd36c83250b73768ee792cfe842.jpeg){: .shadow w="450" h="300"}

Nah, masih ingat bukan kalau sebuah jst tidak  bisa memproses string? Karena itulah kita harus mengubah nilai-nilai pada kolom  label menjadi  numerik terlebih dahulu agar bisa diproses oleh jst.

Jalankan kode dibawah untuk mengubah nilai-nilai pada kolom name menjadi bilangan numerik. Untuk nilai yang berisi string 'orange' akan diubah menjadi 0 dan nilai yang berisi  string 'grapefruit' akan diubah menjadi 1.

```python
df.name[df.name == 'orange'] = 0
df.name[df.name == 'grapefruit'] = 1
```

Sampai pada tahap ini model kita belum dapat memproses dataset ini karena dataset kita masih dalam bentuk dataframe. Betul, dataset harus dlaam bentuk array agar dapat diproses model. Nah, untungnya kita dapat melakukan ini dengan mudah menggunakan atribut valuesdari dataframe.  Values mengembalikan  numpy array yang dikonversi dari dataframe.

```python
dataset = df.values
```

Untuk melihat dataframe yang telah diubah menjadi array, Anda dapat mengeksekusi objek dataset yang menampung array tersebut. 

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020080311561068fcb941c8a235dfa328077adea7cec7.jpeg){: .shadow w="500" h="250"}

Kemudian kita perlu memisahkan antara atribut dan label pada dataset. Dari eksplorasi data kita sebelumnya, dapat diketahui bahwa 5 kolom terakhir adalah kolom atribut. Untuk memilih 5 kolom  terakhir jalankan kode dibawah.

```python
# pilih 5 kolom terakhir sebagai atribut 
X = dataset[:,1:6]
# bilangan sebelum koma untuk memilih baris pada dataframe
# bilangan setelah koma untuk memilih  kolom pada dataframe
```

Jangan lupa untuk memisahkan label dari dataset. Pada dataset kita, label terdapat pada kolom pertama. Jalankan kode dibawah untuk membuat sebuah array numpy yang hanya berisi label kita.

```python
y = dataset[:,0]
```

Selanjutnya ada tahap yang sangat penting dilakukan agar jst bisa mempelajari dataset dengan baik, apalagi kalau bukan normalisasi. Kita bisa menggunakan  funsi fit_transform() dari sebuah objek MinMaxScaler dari library preprocessing  SKLearn untuk menoralisasi data kita.

```python
# Normalization
from sklearn import preprocessing
min_max_scaler = preprocessing.MinMaxScaler()
X_scale = min_max_scaler.fit_transform(X)
X_scale
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803182755b2205989004895bd92dc0ceced268d53.jpg){: .shadow w="600" h="250"}


Setelah kita memiliki atribut dan label yang terpisah, kita juga akan memisahkan kembali data kita menjadi data latih dan data uji untuk mengevaluasi kinerja model kita. Fungsi train_test_split dapat membantu kitauntuk melakukan  hal ini dengan mudah. Pada latihan ini kita akan menggunakan 30% dari seluruh data sebagai data uji.

```python
# pisahkan  data training dan testing
from sklearn.model_selection import  train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X_scale, y, test_size=0.3)
```

Dataset telah dipisahkan kedalam training dan test set. Karena tadi kita mengubah  nilai-nilai pada  kolom name menjadi bilangan numerik, yang artinya  kita mengubah label  menjadi tipe data boolean, maka kita perlu mengubah data tersebut menjadi float32 dengan cara berikut.

```python
import numpy as np

Y_train = Y_train.astype(np.float32)
Y_test = Y_test.astype(np.float32)
```

Nah, tahap memproses  data kita telah selesai. Sekarang kita mulai membangun model jst kita.
Import library dibawah dan  lanjutkan  ketahap berikutny.

```python
from keras.models import Sequential
from keras.layers import Dense
```

Untuk model yang kita kembangkan adalah model sequential yang memiliki 3 buah layer seperti dibawah. Activation function pada  2 layer pertama yang dapat digunakan adalah relu untuk latihan ini. Anda dapat bereksplorasi menggunakan activation function  lain. Untuk layer terakhir, isi parameter unit isi dengan 1 dimana output dari jst kita merupakan satu buah bilangan numerik. Activation function pada layer terakhir dipilih sigmoid  karena sigmoid memetakan probabilitas dari 0 dan 1. Sigmoid  sangat cocok  digunakan pada masalah klasifikasi biner.

```python
model = Sequential([
  Dense(32, activation='relu', input_shape=(5,)),
  Dense(32, activation='relu'),
  Dense(1, activation='sigmoid'),
])
```

Kemudian setelah arsitektur dari jst dibentuk, kita perlu menentukan  optimizer  dan loss function dari model kita. Untuk optimizer kita akan menggunakan stochastic gradient descent (sgd) yang merupakan optimizer  yang sangat umum  dan cocok dipakai  pada dataset yang berukuran kecil. Dan untuk loss yang sesuai adalah 'binary_crossentropy' karena masalah  pada latihan kali ini adalah masalah dua kelas (biner).

Selain itu jika kita ingin menampilkan akurasi pada setiap proses pelatihan model kita dapat menambhakn parameter metrics dan mengisinya dengan string 'accuracy'.

```python
model.compile(
  optimizer='sgd',
  loss='binary_crossentropy',
  metrics=['accuracy']
)
```

Ketika semua sudah selesai, kita dapat memulai pelatihan model kita dengan menjalankan kode dibawah.

```python
model.fit(X_train, Y_train, epochs=100)
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803115725a8d03a2d612e48836fe3447a013211f9.jpeg){: .shadow}

Terakhir, jangan lupa untuk mengevaluasi model kita dan melihat apakah modelnya underfitatau overfit. Untuk melihat loss dan akurasi model pada dataset, gunakan fungsi evaluate pada model. Fungsi evaluate mengembalikan 2 nilai. Yang pertama adalah nilai loss,  dan yang kedua adalah nilai akurasinya.

```python
model.evaluate(X_test, Y_test)
#elemen pertama adalah loss  dan elemen kedua adalah akurasi
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803215017aad137c19a521584ee2045c36debc37f.jpg){: .shadow  }
