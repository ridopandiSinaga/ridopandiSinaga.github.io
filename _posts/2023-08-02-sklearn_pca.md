---
title: SKLearn PCA
date: 2023-08-02
tags: [machine learning, unsupervised, sklearn, clustering, k-means]
category: Supervised & unsupervised
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---





## Tujuan

Mengimplementasikan PCA dengan library SKLearn.

## Tahapan

1. Bagi dataset
2. Latih model tanpa PCA
3. Latih model dengan PCA
4. Evaluasi hasil kedua model

## Codelab

Pertama import libary yang dibutuhkan. Kemudian kita masukkan dataset iris dan bagi data menjadi train set dan test set.

```python
from sklearn import datasets
from sklearn.model_selection import train_test_split

iris = datasets.load_iris()
atribut = iris.data
label = iris.target

# bagi dataset menjadi train set dan test set
X_train, X_test, y_train, y_test = train_test_split (
  atribut, label, test_size=0.2, random_state=1
)
```

Kita akan menggunakan model Decision Tree dan menghitung berapa akurasinya tanpa menggunakan PCA. Akurasi tanpa PCA adalah 0.9666. Akurasi dari model Anda mungkin berbeda dengan keularan dibawah.

```python
from sklean  import tree

decision_tree = tree.DecisionTreeClassifier()
model_pertama = decision_tree.fit(X_train, y_train)
model_pertama.score(X_test, y_test)
```

Tampilan hasil akurasi tanpa PCA  dari kode diatas sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200430230236955611691969fb031f6be6d185d902ae.png){: .shadow}

Kemudian kita akan menggunakan PCA dan menghitung variance dari setiap atribut. Hasilnya adalah 1 atribut memiliki variance sebesar 0.922, yang berarti atribut tersebut menyimpan informasi yang tinggi dan jauh signifikan dari atribut lain.

```python
from sklearn.decomposition import PCA

# membuat objek pca pada dataset
pca_attributes = pca.fit_transform(X_train)

# melihat variance dari setiap atribut
pca.explained_variance_ratio_
```

Hasil dari setiap atributnya menjadi sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202004302306411f9b2237edc16045f4f6a31d7f0183a9.png){: .shadow}

Melihat dari variance sebelumnya kita bisa mengambil 2 principal component terbaik karena total variancenya adalah 0.976 yang sudah cukup tinggi.

```python
#pca dengan dua principal component
pca = PCA(n_components = 2)
X_train_pca = pca.fit_transform(X_train)
X_test_pca = pca.fit_transform(X_test)
```

Kita akan menguji akurasi dari classfier setelah menggunakan PCA.

```python
#uji akurasi classifier
model2 = decision_tree.fit(X_train_pca, y_train)
model2.score(X_test_pca, y_test)
```

Hasil pengujian akurasi setelah menggunakan PCA menjadi seperti dibawah ini.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200430231028ae2b75175eb26e463eb621d984a237fc.png){: .shadow}

Dari percobaan diatas, kita bisa lihat bahwa dengan hanya2 principal component atau 2 atribut saja model masih memiliki akurasi yang tinggi. Dengan principal komponent kamu bisa mengurangin atribut yang kurang signifikan dalam memprediksi dan  mempercepat waktu pelatihan sebuah model machine learning.
