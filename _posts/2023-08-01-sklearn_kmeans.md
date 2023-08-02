---
title: SKLearn K-Means
date: 2023-08-02
tags: [machine learning, unsupervised, sklearn, clustering, k-means]
category: Supervised & unsupervised
layout: post
image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Tujuan

Membuat model *unsupervised learning* dengan teknik *K-Means Clusatering*.

## Tahapan

1. Konversi data menjadi dataframe
2. Lakukan preprocessing data
3. Hilangkan kolom 'CostumerID' dan 'gender'
4. Latih model K-Means
5. Buat plot untuk elbow dan cluster

## Codelab

Dataset yang akan Anda gunakan adalah data pengunjung sebuah mall fiktif. Dataset bisa Anda dapatkan pada [tautan](https://www.kaggle.com/vjchoudhary7/customer-segmentation-tutorial-in-python) berikut.

Pada cell pertama, kita ubah file csv kita kedalam dataframe pandas dan  menampilkan 3 baris pertama dari dataframe.

```python
import pandas as pd

# ubah file csv menjadi dataframe
df = pd.read_csv('Mall_Customers.csv')

# tampilkan tiga baris pertama
df.head(3)
```
Tampilkan dari 3 baris pertama dataframe diatas seperti berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200430224650330de4b6a3da9b3dc6e31e9a6de6301b.png){: .shadow}

Kemudian kita akan melakukan sedikit preprocessing yaitu mengubah nama kolom agar lebih seragam. Lalu kolom gender adalah kolom kategorik, maka kita akan mengubah data tersebut menjadi data numerik.

```python
# ubah nama kolom
df = df.rename(columns={
  'Gender': 'gender',
  'Age':'age',
  'Annual Income (k$)':'annual_income',
  'Spending Score (1-100)':'spending_score'})

#ubah data kategorik menjadi data kategorik menjadi data numerik
df['gender'].replace(['Female', 'Male'], [0, 1], inlace=True)

# tampilkan data yang sudah diprocess
df.head(3)
```

Setelah dilakuan preprocessing dengan menggunakan nama kolom supaya lebih seragam, maka hasilnya seperti dibawah ini.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202004302250389bbd2c50306e7116d35e903eb41ab339.jpeg){: .shadow}

Di tahap selanjutnya kita akan mengimpor K-Means. Di tahap ini juga kita akan menghilangkan kolom Costumer ID dan gender karena kurang relevan untuk proses clustering. Selanjutnya kita akan menentukan nilai K yangoptimal dengan  metode Elbow. Library K-Means dari SKLearn menyediuakan fungsi untuk menghitung inersia dari K-Means dengan jumlah K tertentu. Disini kita akan membuat list yang berisi inersia dari nilai K antara 1 sampai 11.

```python
from sklearn.cluster import KMeans

# menghilangkan kolom customer id dan gender
X = df.drop(['CostumerID','gender'], axis=1)

# membuart list yang berisi inertia
cluster = []
for i in range(1,11):
  km = KMeans(n_clusters=i).fit(X)
  clusters.append(km.inertia_)
```

Jalankan kode dibawah untuk membuat plot inersia dari setiap nilai K. Sesuai plot dibawah, kita bisa melihat bahwa elbow berada di nilai K sama dengan 5.  Jangan lupa mengimpor library yang dibutuhkan untuk membuat plot ya.

```python
import matplotlib.pylot  as plt
%matplotlib inline
import seaborn as sns

# membuat plot inertia
fig, ax = plt.subplots(figsize(8, 4))
sns.lineplot(x=list(range(1, 11)), y=clusters, ax=ax)
ax.set_title('Cari Elbow')
ax.set_xlabel('Clusters')
ax.set_ylabel('Inertia')
```

Hasil dari kode diatas menampilkan plot inersia sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202004302253449b67112da588a52a3656846e0c4d767e.png){: .shadow}

Terakhir kita bisa melatih kembali K-Means dengan jumlah K yang didapat  dari metode elbow.  Lalu kita bisa membuat plot hasil pengklasteranK-Means dengan menjalankan kode dibawah.

```python
# membuat objek kmeans
km5 = KMeans(n_clusters=5).fit(X)

# menambahkan kolom label pada dataset
X['Labels'] = km5.labels_

# membuat plot kmeans dengan 5 klaster
plt.figure(figsize(8, 4))
sns.scatterplot(
  x = X['annual_income'],
  y = X['spending_score'],
  hue = X['Labels'],
  pallete = sns.color_palette('hls', 5))
plt.title('KMeans dengan 5 Cluster')
plt.show()
```

Sehingga jika kode diatas dijalankan, maka tampilan KMeans dengan  5 klaster seperti dibawah ini.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:2b9aa27c74c179f48d4f4d8f3358f60a20220510155404.png){: .shadow}

