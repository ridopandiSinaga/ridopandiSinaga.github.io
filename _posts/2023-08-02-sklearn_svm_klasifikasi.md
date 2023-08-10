---
title: SKLearn SVM untuk Klasifikasi
date: 2023-08-02
tags: [machine learning, unsupervised, svm, classification]
category: Support Vector Machine (SVM)
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Tujuan

Mengklasifikasikan apakah seorang pasien positif diabetes atau tidak.

Menggunakan model SVM yang tersedia di library SKLearn. Menggunakan dataset Prima Indian. Dataset ini dikumpulkan oleh *National Institute of Diabetes and Digestive and Kidney  Diseases*


## Tahapan

Dataset berisi 8 atribut dan 1 kolom label yang berisi 2 kelas yaitu1 dan 0. Angkat 1 menandakan postif diabetes dan 0 menandakan sebaliknya. Terdapat 768 sampel yang merupakan 768 pasien perempuan keturunan suku Indian Pima.

1. Ubah data kedalam dataframe.
2. Bagi dataset.
3. Lakukan standarisasi.
4. Buat dan latih model.
5. Evaluasi model.
   

## Codelab

Pertama unduh dataset Pima Indian Diabetes dari [tautan](https://www.kaggle.com/uciml/pima-indians-diabetes-database) berikut.

Pada tahap selanjutnya kita akan mengimpor library pandas dan mengubah dataset menjadi sebuah dataframe.

```python
import panda as pd

df = pd.read_csv('diabetes.csv')
```

Lalu kita tampilkan 5 baris teratas dari dataframe untuk melihat isi dataset. Kita dapat menggunakan fungsi `head()` seperti dibawah.


```python
df.head()
```
![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202004302153042e9a31f72bc888ba288b079bda6f3663.png){: .shadow w="600" h="300"}

Hal penting selanjutnya adlah akita perlu mengecek apakah terdapat nilai-nilai yang hilang pada dataset serta apakah ada atribut yang bukan berisi bilangan numerik. Kita bisa melakukannya dengan memanggil fungsi `.info()` pada dataframe.

```python
df.info()
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020043021540468d55498f34c239c16e337cb9d7b3bdd.png){: .shadow w="400" h="400"}

Output dari fungsi `info()` menunjukkan bahwa semua atribut nilainya lengkap, dan juga nilai-nilai tiap kolom memiliki tipe data numerik yaitu int64 dan float64.

Pada tahap ini data sudah bisa dipakai untuk pelatihan model.


Kita lalu memisahkan antara atribut dan label pada dataframe. Untuk memisahkan kolom-kolom pada dataframe kamu bisa melihat dokumentasinya pada [tautan](https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html) ini.


```python
# memisahkan taribut pada dataset dan menyimpannya pada sebuah vaiabel
X = df[df.columns[:8]]

# memisahkan label pada dataset dan menyimpannya pada sebuah variabel
y = df['Outcame']
```

Jika kita lihat, nilai-nilai pada dataset memiliki skala yang berbeda. Contohnya pada kolom *Glucose* dan kolom *Diabetes Pedigree Function*. Kita perlu mengubah nilai-nilai dari setiqap atribut berada pada skala yang sama.  Kita dapat mencoba menggunakan standarisasi  menggunakan fungsi *StandardScaler()* dari SKLearn.


```python
from sklearn.preprocessing import StandardScaler

# standarisasi nilai-nilai dari dataset
scaler = StandardScaler()
scaler.fit(X)
X = scaler.transform(X)
```

Setelah atribut dan label dipisah, kita bisa memisahkan data untuk training dan testing menggunakan fungsi *.train_test_split*.

```python
from sklearn.model_selection import train_test_split
 
# memisahkan data untuk training dan testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.33, random_state=42)
```
Kita kemudian membuat objek Support Vector Classifier dan menampungnya pada variabel clf. Akhirnya kita sampai pada tahapan yang kita tunggu-tunggu, kita memanggil fungsi fit untuk melatih model.

```python
from sklearn.svm import SVC
 
# membuat objek SVC dan memanggil fungsi fit untuk melatih model
clf = SVC()
clf.fit(X_train, y_train)
```

Terakhir, kita bisa melihat bagaimana akurasi prediksi dari model yang kita latih terhadap data testing.

```python
# Menampilkan skor akurasi prediksi
clf.score(X_test, y_test)
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200430220814d41d434f0c8262bf11d287dc3f2daee4.png){: .shadow}

Selamat, Anda telah berhasil mengembangkan sebuah model Support Vector Classifier untuk mendeteksi diabetes.
