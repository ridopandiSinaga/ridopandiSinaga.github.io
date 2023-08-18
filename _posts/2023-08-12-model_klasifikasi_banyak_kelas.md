---
title: Membuat dan Melatih Model untuk Klasifikasi Banyak Kelas
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---


Pada tulisan kali ini kita akan melanjutkan dengan pengembangan model jst untuk klasifikasi multi-kelas. Aplikasi dari klasifikasi multi-kelas sangat banyak, lebih banyak dari klasifikasi biner. Contohnya seperti produk-produk pada toko online dan program pengalan wajah. Tentu  terdapat lebih dari 2 jenis wajah manusia dibumi bukan?

Nah, langsung saja kita mulai latihan kita. Pada tulisan sebelumnya kita telah belajar  mengklasifikasi dataset iris menggunakan decision tree.Namun kali ini kita  akan beljar menggunakan jst untuk mengklasifikasi spesies bunga iris.Berikut [dataset](https://www.kaggle.com/datasets/uciml/iris)nya.

Pertama import library nya:
```python
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import  train_test_split
from keras.models import Sequenstial
from keras.layers import Dense
```

Kemudian kita gunakan  fungsi read_csv() untuk  mengubah dataset menjadi pandas dataframe. Untuk menampilkan dataframe kita hanya perlu menulis  nama dari  dataframe kita.

```python
df = pd.read_csv('Iris.csv')
df
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803220453261738ae44c54d5e8c57f6a5b823d67b.jpg){: .shadow }

Dapat kita lihat bahwa  terdapat kolom id yang tidak ada hubungan dengan label  sehingga kita perlu membuang kolom tersebut. Untuk membuang kolom dari dataframe gunakan fungsi drop().

```python
df = df.drop(columns='Id')
```

Selanjutnya kita perlu melakukan one hot encoding karena label kita merupakan  data kategorikal. Fungsi get_dummies() memudahkan  kita untuk melakukan hal ini.

```python
category = pd.get_dummies(df.Species)
category
```
![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202008032208254a1777a5c0524ef83ac62c3c42567075.jpg){: .shadow }

Kemudian, kita perlu menggabungkan kolom hasil one hot encoding dan membuang kolom species karena kolom tersebut tidak akan  dipakai.

```python
new_df = pd.contact([df, category], axis=1)
new_df = new_df.drop(columns='Species')
new_df
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803221727bea104e630e527c0f61935c649c9fd06.jpg){: .shadow}

Selanjutnya setelah dataframe telah kita olah, kita konversi dataframe tersebut menjadi numpy array dengan fungsi values dari dataframe.

```python
dataset= new_df.values  
dataset
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803120413141357fa1b6e08af542f2409e6407a9d.jpeg){: .shadow}

Nah, tahap berikutnya adalah kita memisahkan antara atribut dan label  dengan menjalankan kode berikut.

```python
# pilih 4 kolom pertama untuk dijadikan sebagai atribut
X = dataset[:,0:4]
# pilih 3 kolom  terakhir  sebagai label
y = dataset[:,4:7]
```

Lalu, kita perlu lakukan normalisasi data agar  data dapat dipelajari dengan baik oleh jst kita.

```python
# Normalize
min_max_scaler = preprocessing.MinMaxScaler()
X_scale = min_max_scaler.fit_tranform(X)
X_scale
```

Lakukan pembagian data menjadi data latih dan data uji. Untuk ukuran data testing yang digunakan  30%. Anda dapat bereskperimen menggunakan nilai lainnya.

```python
X_train, X_test, Y_train, Y_test = train_test_split(X_scale, y, test_size=0.3)
```

Untuk arsitktur model kita kali ini  menggunakan 3 buah layer. Activation function yang digunakan  pada layer terakhir dipilih softmax karena activation tersebut umum dipakai untuk klasifikasi multi kelas seperti ini.

```python
model = Sequential([
  Dense(64, activation='relu', input_shape=(4,)),
  Dense(64, activation='relu'),
  Dense(3, activation='softmax'),
])
```

Lanjutkan  dengan menentukan optimizer dan loss function dari model. Untuk masalah klasifikasi  multi kelas, Anda dapat menggunakan loss 'categorical_crossentropy'.

```python
model.compile(
  optimizer='Adam',
  loss='categorical_crossentropy',
  metrics=['accuracy']
)
```

Nah, pada latihan ini ada sedikit perubahan. Fungsi fit() sekarang kita tampung ke dalam objek hist(history). Untuk melihat history hasil akurasi dari pelatihan model dan lebih lengkapnya akan dibahas ditulisan selanjutnya ya.


```python
hist = model.fit(X_train, Y_train, epochs=100)
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020080312074043fba090eb4182199eda55dc126d3044.jpeg){: .shadow}

Terakhir kita bisa menguji akurasi prediksi model  data uji.

```python
model.evaluate(X_test, Y_test)
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803120740345f737b5fec7947887a1b58533bc886.jpeg){: .shadow}


