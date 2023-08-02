---
title: SKLearn Logistic Regression
date: 2023-07-30
tags: [sklearn, logistic regression, regression]
category: Supervised & unsupervised
layout: post
image: https://1394217531-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LvBP1svpACTB1R1x_U4%2F-Lw70vAIGPfRR1AjprLi%2F-LwAVc1EdfmPMge5dlYC%2Fimage.png?alt=media&token=d72e3231-0d64-4bb7-9e4c-20577940763d
---

# Tujuan 

Memprediksi apakah seseorang akan membeli setelah melihat iklan produk.

# Tahapan

1. Ubah dataset menjadi Dataframe
2. Pisahkan atribut dan label
3, Hapuskan kolom 'User ID'
4. Latih model Logistik Regression
5. Evaluasi akurasi model.

# Codelab

Dataset bisa diunduh pada tautan [ini](https://www.kaggle.com/datasets/dragonheir/logistic-regression).

Pertama kita import library dasar dan menyesuaikan path/lokasi datanya.

```python
import panda as pd

# membaca dataset dan mengubahnya menjadi dataframe
df = pd.read_csv('Social_Network_Ads.csv')
```
Pada sel selanjutanya gunakan fungsi head() pada dataframe untuk melihat 5 baris data pertama dari dataset.

```python
df.head()
```

Hasil fungsi head() sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202004302238474d62c7da27d447baa0b8d30b89f3e4bc.png){: .shadow}


Kita juga perlu melihat apakah ada nilai yang kosong pada setiap atribut dengan menggunakan fungsi info(). Dapat dilihat bahwa nilai pada semua kolom sudah lengkap.

```python
df.info()
```

Berikut hasil dari info()

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200430223940c9aee990b8a1763c632e1362f5f26a2c.png){: .shadow}

Pada dataset terdapat kolom 'User ID'. Kolom tersebut merupakan atribut yang tidka penting untuk dipelajari oleh model sheingga perlu dihilangkan. Untuk menghilangkan kolom dari dataframe, gunakan fungsi drop(). Jangan lupa panggil fungsi get_dummies() untuk melakukan
proses One-Hot Encoding karena label pada dataset  kita merupakan data kategorikal.


```python
# drop kolom yang tidak diperlukan
data = df.drop(columns=['User ID'])

# jalankan proses One-hot Encoding dengan pd.get_dummies()
data = pd.get_dummies(data)
data
```

Hasil dari kode diatas.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202004302240572131844a873e8b6bf9f7605bae936cd0.png){: .shadow}

Kemudian kita pisahkan  atribut dan label

```python
# pisahakan atribut dan label
predicitons = ['Age', 'EstimatedSalary', 'Gender_Female', 'Gender_Male']
X = data[predictions]
y = data['Purchased']
```

Sebelum kita membagi data menjadi train dan test set, kita perlu melakukan standarisasi data.

```python
# lakukan normalisasi terhadap data  yang kita miliki
from sklearn.preprocessing import StandardScaler
scaler  = StandartScaler()
scaler.fit(X)
scaled_data = scaler.transfrom(X)
scaled_data = pd.DataFrame(scaled_data, columns = X.columns)
scaled_data.head()
```

Sekarang kita membagi data menjadi train dan test set dengan fungsi train_test_split yang disediakanSKLearn.

```python
from sklearn.model_selection import train_test_split

#bagi data menjadi train dan test untuk setiap atribut dan label
X_train, X_test, y_train, y_test = train_test_split(scaled_data, y, test_size=0.2, random_state=1)
```

Setelah membagi data, kita membuat model dengan membuat sebuah objek logistik regression. Setelah model dibuat, kita bisa melatih model kita dengan train set  menggunakan fungsi fit().

```python
from sklearn import linear_model

#latih model dengan fungsi fit()
model = linear_model.LogisticRegression()
model.fit(X_train, y_train) 
```

Setelah model dilatih, kita bisa menguji model  pada test set dengan memanggil fungsi score() pada objek model.

```python
#uji akurasi model
model.score(X_test, y_test)
```

Sehingga hasilnya sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202010261403083dff36fc0eb4f15b7e9ce67d682731bb.png){: .shadow}


