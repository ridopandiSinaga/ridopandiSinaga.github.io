---
title: Penggunaan Callbacks
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Neural Network Model
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

Pada latihan-latihan sebelumnya pelatihan model berlangsung sebanyak  jumlah epoch yang kita  tentukan sebelumnya. Dan kalau kita amati, pada epoch-epoch terakhir akurasi dari model tidak meningkat lagi. Kasus lainnya misalnya kita memiliki  100 epoch, dan pada epoch ke-20 akurasi dari model sudah memenuhi target kita.

Untungnya, kita dapat memberitahu model kita untuk  berhenti ketika telah mencapai akurasi  tertentu sehingga  proses pelatihan model menjadi lebih singkat. Bayangkan ketika  waktu untuk eksekusi  1 epoch sebesar 6 detik. Untuk mengeksekusi 100 epochberarti membutuhkan  waktu selama  600 detik. Jika model kita telah mencapai target akurasi yang kita inginkan misalnya pada epoch ke-30, da model otomatis berhenti melakukan pelatihan , maka kita bisa menghemat waktu  eksekusi70 epoch yaitu selama  420 detik.

Kita dapat melakukan hal ini dengan menggunakan fungsi callback. Yup, fungsi callback mmembantu kita untuk memberitahu model kita agar berhenti melakukan pelatihan  ketika sudah mencapai target tertentu.  Fungsi ini sangat berguna untuk menghemat waktu pelatihan dari model   seperti yang  dijelaskan pada paragraf sebelumnya. 

Nah, langsung  saja kita praktik menggunakan callback. Kita masih akan menggunakan dataset dan model dari latihan klasifikasi iris. Kode utuhnya seperti dibawah.

```python
import tensorflow as tf
import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense
df = pd.read_csv('Iris.csv')
df = df.drop(columns='Id')
category = pd.get_dummies(df.Species)
new_df = pd.concat([df, category], axis=1)
new_df = new_df.drop(columns='Species')
dataset = new_df.values
X = dataset[:,0:4]
y = dataset[:,4:7]
min_max_scaler = preprocessing.MinMaxScaler()
X_scale = min_max_scaler.fit_transform(X)
X_train, X_test, Y_train, Y_test = train_test_split(X_scale, y, test_size=0.3)
model = Sequential([    
                    Dense(64, activation='relu', input_shape=(4,)),    
                    Dense(64, activation='relu'),    
                    Dense(3, activation='softmax'),])
model.compile(optimizer='Adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```

Selanjutnya kita buat kelas callback. Pada baris pertama lihatlah bahwa kelas callback kita harus inherit tf.keras.callbacks.Callback. Selanjutnya kita buat fungsi yang  paling penting yaitu `on_epoch_end()`. Fungsi inilah yang akan kita gunakan untuk memberitahu model agar berhenti melakukan pelatihan ketika telah mencapai target.

Selanjutnya kode `if(logs.get('accuracy')>0.9)` sangat intutif menunjukkan kalau kode itu memiliki arti "jika akurasi lebih besar dari 0.9 maka eksekusi perintah berikutnya". Kita juga dapat menulis kode `print("\nAkurasi telah mencapai >90%")` untuk ditampilkan ketika callback aktif.


Kode `self.model.stop_training = True` adalah kode yang memberi tahu model untuk menghentikan pelatihan. Setelah  kelas ini dibuat kita buat objek dari kelas tersebut.

```python
class myCallback(tf.keras.callbacks.Callback):
  def on_epoch_end(self, epochm logs={}):
    if(logs.get('accuracy')>0.9):
      print("\nAkurasi telah mencapai >90%!")
      self.model.stop_training=True

callbacks = myCallback()
```

Untuk menggunakan callback sangat gampangm kita hanya perlu menambahkan paramaeter callback dan mengisi  objek callback yang telah kita buat  pada parameter tersebut.

```python
model.fit(X_train, Y_train, epochs=50,  callbacks=[callbacks])
```

Hasilnya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803132551599d63f840efc7c3c938e87da0a390fb.jpeg){: .shadow}

Dari latihan diatas dapat dilihat model kita berhasil menghentikan pelatihan ketika telah  mencapai  akurasiyang kita tentukan pada   epoch ke  35 dari 50. Kita telah menghemat waktu eksekusi 15 epoch. Keren bukan?
