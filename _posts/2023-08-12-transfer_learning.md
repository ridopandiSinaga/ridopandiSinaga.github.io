---
title: Transfer Learning
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Klasigikasi Gambar
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---


Pada masalah computer vision, kesuksesan model  yang kita kembangkan secara signifikan dipengaruhi oleh jumlah data yang tersedia. Jumlah data yang sedikit cenderung membuat model kita overfit, sehingga prediksi dari model hasilnya tidka bagus. Pada tulisan sebelumya kita telah mempelajari teknik untuk mengatasi jumlah data yang terbatas dengan augmentasi gambar. Selain dengan augmentasi gambar ada teknik lain yang bisa kita pakai, ketika data yang kita miliki untuk pengembangan model terbatas, yaitu transfer learning.

Ide dibalik transer learning pada computer vision adalah, model yang dilatih pada dataset yang berukuran besar yang berisi gambar umum mampu dipakai sebagai model dasar yang membantu kita untuk mengenali fitur/bentuk-bentuk benda yang terdapat pada dunia nyata. Kita dapat memanfaatkan fitur-fitur yang dipelajari ini tanpa harus melakukan pelatihan model dari awal sekali.

Sederhananya, transfer learning menggunakan model yang telah dilatih sebelumnya pada dataset lain, untuk dipakai pada dataset kita sendiri.  Masih ingat? layer-layer awal diawal dan ditengah sebuah model bertugas untuk mengenali bentuk-bentuk dari gambar. Misalnya pada model pengenalan wajah manusia, pada layer pertama mungkin mengenali garis, layer kedua mengenali lingkaran,layer ketiga mengenali mata, dan layer keempat mampu mengenali wajah. Nah, layer-layer telah dilatih tersebut dapat kita manfaatkan untuk dipakai pada dataset lain misalnya seperti dataset pengenalan ekspresi manusia.

Untuk melihat bagaimana melihat efektifnya transfer learning, kita akan menggunakan transfer learning pada dataset chessman yang kita pelajari pada tulisan sebelumnya.

Kode yang akan kita gunakan pada tulisan ini hampir sama pada kode latihan sebelumnya, jadi silahkan menyalin atau menggunakan kode latihan sebelumnya. Pada cell Collaboratory pertama kita unduh dataset chessman  yang akan kita pakai.

```python
import os
import zipfile
from tensorflow.keras.preprocessing.image import ImageDataGenerator
local_zip =  '/tmp/Chessman-image-dataset.zip'
zip_ref = zipfile.ZipFile(local_zip, 'r')
zip_ref.extractall('/tmp')
zip_ref.close()
train_dir = os.path.join('/tmp/Chessman-image-dataset/Chess')
train_datagen = ImageDataGenerator(
  rescale=1./255,
  rotation_range=20,
  zoom_range=0.2,
  shear_range=0.2,
  fill_mode = 'nearest',
  validation_split=0.1
) # set validation split
```

Bagi dataset menjadi data training dan data testing

```python
train_generator = train_datagen.flow_from_direcory(
  train_dir,
  target_size=(150,150),
  batch_size=8,
  class_mode='categorical',
  subset='training' # set as training data
)

validation_generator = train_datagen.flow_from_directory(
  train_dir, # same directory as training data
  target_size=(150,150),
  batch_size=16,
  class_mode='categorical',
  subset='validation'
)
```

Nah, disini kita mulai mengimplementasikan transfer learning. Untuk model yang kita pilih sebagai model dasar transfer learning adalah ResNet152V2. Model ResNet152V2 memiliki sebanyak  152layer dan tersedia di library keras. Kita dapat memanfaatkan fitur-fitur yang telah dipelajari model tersebut untuk dipakai model kita.


Untuk mengimpelmentasikan  transfer learning sangatlah mudah seperti kode dibawah. Kita hanya perlu menambahkan 2 buah baros kode berbeda. Layer pertama pada model kita adalah model yang kita pakai untuk transfer learning. Kita cukup memanggil kelas ResNetV2 dan mengisi parameter sebagai berikut.

* Weight - ini adalah bobot atau parameter seperti yang telah pernah dibahas  pada tulisan sebelumnya. Untuk parameter weight  kita mengisi nilai 'imagenet'. Artinya kita ingin menggunakan model ResNetV2  yang telah dilatih pada dataset imagenet. Imagenet adalah sebuah dataset raksasa yang berisi lebih dari 14 juta gambar.
* Include_top - paramter ini bernilai boolean. Maksud dari parameter ini apabila kita ingin tetap memakain layer terakhir/layer prediksi dari model resnet. Kita isi false karena kita memakai model resent untuk memprediksi dataset chessman bukan imagenet.
* Input_tensor - sesuai namanya parameter ini menspesifikasikan ukuran dari input.

```python
import tensorflow as tf
from tensorflow.keras.layers import Input
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.applications import  ResNet152V2
model = tf.keras.models.Sequential([
  ResNet152V2(weights="imagenet", include_top=False, input_tensor=Input(shape=(150, 150, 3))),
  # tf.keras.layers.Dropout(0.4),
  tf.keras.layers.Flatten(), 
  tf.keras.layers.Dense(512, activation='relu'),
  tf.keras.layers.Dense(256, activation='relu'),
  tf.keras.layers.Dense(6, activation='softmax')
])
model.layers[0].trainable = False
```

Lanjutkan dengan menentukan optimizer, loss, serta metric yang ingin digunakan pada model. 

```python
model.compile(
  optimizer=    
)
```
