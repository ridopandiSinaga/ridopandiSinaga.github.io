---
title: Klasifikasi Data dengan Sklearn Linear Regresion 
date: 2023-07-31
tags: [machine learning,sklearn, linear regresion, regression]
category: Supervised & unsupervised
layout: post
image: https://miro.medium.com/v2/resize:fit:640/1*LEmBCYAttxS6uI6rEyPLMQ.png
---



<!-- https://64.media.tumblr.com/decc66bc77ee57b351967c603aa7e210/tumblr_nwj3pqHV5i1qd4q8ao1_500.gifv -->

Pada tulisan sebelumnya membahas Decision Tree yang merupakan supervised algorithm. Dan itu merupakan jenis klasifikasi, kali ini kita akan menggunakan yang regresi. Bedanya jika pada klasifikasi model ML memprediksi class sedangkan regresi memprediksi bilangan kontinu atau numerik. Regresion ada dua, yaitu sklearn linear regresion dan sklearn logistic regresion. Kali ini kita mencoba yang linar.

# Tujuan

Pada latihan kali ini, kita akan memprediksi harga rumah berdasarkan jumlah kamar.

# Tahapan

Berikut adalah tahapan:
1. Import library yang dibutuhkan 
2. Buat dataset Dummy dengan Numpy Array
3. Buat plot dari  model

# Codelab

Pertama kita mengimport libary yang dibutuhkan. Lalu buat data dummy menggunakan numpy array
```python
import numpy as np

#buat data jumlah kamar
bedrooms = np.array([1,1,2,2,3,4,4,5,5,5])

#data harga rumah. asumsi dalam dollar
house_price = np.array([15000, 18000, 27000, 34000, 50000, 68000, 65000, 81000,85000, 90000])
```

Selanjutanya kita bisa mencoba menampilkan data tersebut dalam bentuk scatter plot. Jumlah kamar pada sumbu X adalah variabel independen dan harga  rumah pada sumbu Y adalah variabel dependen.

```python
# menampilkan scatter plot dari dataset
import matplotlib.pyplot as plt
%matplotlib inline

plt.scatter(bedrooms, house_price)
```

 Tampilan dari kode tersebut adalah sebagai berikut.

![](/assets/ml/linearregresion.png){: .shadow}

Lalu pada cell berikuntya, kita bisa mulai melatih model kita dengan memanggil fungsi LinearRegresion.fit() pada data kita. Fungsi ini untuk melatih model regresi linear dari library SKLEARN.

```python
from sklearn.linear_model import LinearRegression

# latih model dengan LinearRegression.fit()
bedrooms = bedrooms.reshape(-1,1)
linreg = LinearRegression()
linreg.fit(bedrooms, house_price)
```

Terakhir kita bisa melihat bagaimana model kita menyesuaikan dengan data yang kita miliki dengan membuat plot dari model kita.

```python
# menampilkan plot hubungan antar jumlah kamar dengan harga rumah
plt.scatter(bedrooms, house_price)
plt.plot(bedrooms, linreg.predict(bedrooms))
```

Hasilnya sebagai berikut

![](/assets/ml/linearregrssion2.png){: .shadow}

Model regresi linear adalah salah satumodel Machine Learning yang paling sederhana. Model ini memilki kopleksitas rendah dan bekerja sanagt baik pada dataset yang berhubungan linear. Jadi, ketika kamu menemui masalah yang terlihat memiliki hubungna linear, regresi linear dapat menjadi  pilihan pertama sebagai model untuk dikembangkan.

