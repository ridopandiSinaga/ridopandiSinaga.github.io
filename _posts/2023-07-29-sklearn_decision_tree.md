---
title: Klasifikasi Data dengan Decision Tree 🔍
date: 2023-07-29
tags: [machine learning, sklearn decision tree, irish, klasifikasi]
category: Supervised & unsupervised
layout: post
# image: https://miro.medium.com/v2/resize:fit:3840/format:webp/1*ff6FquwFWnrFeZJWfvsiag.jpeg
---

![dino](/assets/dinosaur.gif)

## Tujuan

Melakukan klasifikasi spesies bunga Iris.

## Tahapan

Dataset irish terdiri dari 4 atribut, yaitu panjang sepal, lebar sepal, panjang petal, dan lebar petal. Terdapat 3 kelas target pada dataset ini. Data ini digunakan utk masalah klasifikasi, dimana kita memprediksi jenis spesies sebuah bunga berddasarkan atribut-atribut yang diberikan.

Berikut tahapannya:

1. Ubah dataset ke dalam dataframe.
2. Hapus kolom 'Id' pada dataframe serta pisahkan antara atribut dan label.
3. Bagi dataset menjadi data latih dan data uji.
4. Buat dan latih model Decision Tree.
5. Lakukan pengujian model dengan menggunakan data uji.
6. Lakukan prediksi dengan model yang telah dilatih.
7. Visualisasi model Decision Tree yang telah dilatih.

## Codelab

Pertama, import library yang dibutuhkan dan mempersiapkan dataset. Dataset dapat diunduh pada [tautan](https://www.kaggle.com/uciml/iris) berikut. Setelah data diunduh, masukkan berkas iris.csv kedalam Google Collab. Lalu jangan lupa konversi dataset menjadi Pandas Dataframe.

```python
import pandas as pd

# Membaca file iris.csv
iris = pd.read_csv('Iris.csv')
```

Untuk melihat informasi mengenai data, gunakan fungsi `info()`. Selain itu, Anda juga bisa melihat lima dataset teratas menggunakan fungsi `head()`.

```python
# melihat informasi dataset
iris.info()

# melihat iformasi dataset pada 5 baris teratas
iris.head()
```

ouput :

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 150 entries, 0 to 149
Data columns (total 6 columns):
 #   Column         Non-Null Count  Dtype
---  ------         --------------  -----
 0   Id             150 non-null    int64
 1   SepalLengthCm  150 non-null    float64
 2   SepalWidthCm   150 non-null    float64
 3   PetalLengthCm  150 non-null    float64
 4   PetalWidthCm   150 non-null    float64
 5   Species        150 non-null    object
dtypes: float64(4), int64(1), object(1)
memory usage: 7.2+ KB
```

Dari output di atas, kita dapat mengidentifikasi kolom yang tidak penting pada dataset yaitu kolom "Id". Untuk menghilangkan kolom tersebut, gunakan fungsi `drop()`.

```python
# menghilangkan kolom yang tidak penting
iris.drop('Id',axis=1,inplace=True)
```

Sebelum melatih model kita perlu memisahkan atribut dengan label. Selain itu, kita juga perlu membagi dataset menjadi data latih dan data uji. Jalankan kode berikut untuk menerapkan tahapan di atas.

```python
# memisahkan atribut dan label
X = iris[['SepalLengthCm', 'SepalWidthCm', 'PetalLengthCm', 'PetalWidthCm' ]]
y = iris['Species']

# Membagi dataset menjadi data latih & data uji
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=123)
```

Selanjutnya, definisikan model decision tree yang akan kita gunakan. Kemudian, latih model menggunakan data latih menggunakan fungsi `fit()`.

```python
from sklearn.tree import DecisionTreeClassifier

# membuat model Decision Tree
tree_model = DecisionTreeClassifier()

# Melatih model dengan menggunakan data latih
tree_model = tree_model.fit(X_train, y_train)
```

Setelah model dilatih, uji model menggunakan data uji untuk melihat seberapa baik model yang telah kita buat. Pengujian model ini bisa dilakukan dengan menggunakan fungsi `predict()`.

Berikutnya, gunakan metrik akurasi untuk melihat seberapa baik model yang telah kita latih. Penjelasan terkait metrik akurasi ini akan dibahas pada modul selanjutnya.

```python
# Evaluasi Model
from sklearn.metrics import accuracy_score

y_pred = tree_model.predict(X_test)

acc_secore = round(accuracy_score(y_pred, y_test), 3)

print('Accuracy: ', acc_secore)
```

output :

```
Accuracy:  0.933
```

Nah, kita bisa mencoba model yang telah kita buat untuk memprediksi spesies dari sebuah bunga Iris. Masih ingat bukan, atribut yang menjadi masukan dari model adalah panjang sepal, lebar sepal, panjang petal, dan lebar petal? Kita akan memasukkan nilai yang sesuai dengan format tersebut secara berurutan dalam satuan centimeter. Pada contoh berikut, kita ingin memprediksi spesies dari sebuah bunga iris yang memiliki panjang sepal 6,2 centimeter, lebar sepal 3,4 centimeter, panjang petal 5,4 centimeter, dan lebar petal 2,3 centimeter.

```python
# prediksi model dengan tree_model.predict([[SepalLength, SepalWidth, PetalLength, PetalWidth]])
print(tree_model.predict([[6.2, 3.4, 5.4, 2.3]])[0])
```

output :

```
Iris-virginica
```

Selain melakukan prediksi, kita juga bisa melihat visualisasi dari decision tree yang kita buat terhadap data menggunakan library Graphviz. Hasil dari graphviz adalah dot file yang akan muncul pada folder file di panel sebelah kiri Google Colab (jika Anda menggunakan Google Colab).

```python
from sklearn.tree import export_graphviz
export_graphviz(
    tree_model,
    out_file = "iris_tree.dot",
    feature_names = ['SepalLengthCm', 'SepalWidthCm', 'PetalLengthCm', 'PetalWidthCm'],
    class_names = ['Iris-setosa', 'Iris-versicolor', 'Iris-virginica' ],
    rounded= True,
    filled =True)
```

Setelah kode di atas berhasil dijalankan, Anda akan mendapatkan output berupa berkas iris_tree.dot, sebagai berikut:

![iris tree dot](/assets/ml/iris_tree_dot.jpeg){: .shadow w="750" h="300"}

Untuk mengunduh berkas iris_tree.dot pada gambar di atas, kita dapat melakukan klik kanan pada berkas tersebut kemudian mengunduhnya.

Jika kita ingin melihat visualisasi decision tree, lakukan konversi dot file ke dalam file png menggunakan situs konversi berkas berikut [ini](https://onlineconvertfree.com/converter/images/).

Catatan : Jangan lupa ganti opsi ke images sebelum menekan tombol convert

Berikut merupakan hasil visualisasi dari model decision tree yang telah kita gunakan:

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:9cbc824c85fd2e6f398131863e4d474720211126142343.jpeg){: .shadow w="600" h="200"}

Kita telah berhasil membuat sebuah model decision tree untuk klasifikasi spesies bunga Iris. Kita juga telah berhasil menguji model anda untuk memprediksi spesies dari sebuah bunga iris. Untuk belajar lebih mendalam tentang decision tree, kunjungi tautan [berikut](https://towardsdatascience.com/decision-trees-in-machine-learning-641b9c4e8052) yah.

![Alt Text](/assets/names2/peace-out.gif)
