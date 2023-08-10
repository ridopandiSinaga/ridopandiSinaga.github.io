---
title: Membuat Model Klasifikasi Gambar 🧐
date: 2023-08-09
tags: [calsification, keras, tensorflow]
category: Tensorflow
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Tujuan

Tahap awal sebelumnya kita membangun sebuah model machine learning adalah mendefenisikan *problem statement*  yang ingin kita selesaikan. Pada tahap ini kita menentukan apa masalah yang ingin diselesaikan dan bagaimana implementasi dari model jaringan syaraf tiruan dapat menyelesaikan masalah tersebut. Setelah kita memahami masalah, kita dapat mengembangkan model jaringan syaraf tiruan  sebagai solusi. 

Pada latihan kali ini, kita akan membuat sebuah model untuk mengklasifikasikan sebuah kamar dan memprediksi apakah kamar tersebut rapiatau berantakan. Pada akhir latihan Anda dapat menguji model  yang telah dibuat  dengan menggunakan gambar kamar Anda sendiri. Keren, bukan?


## Tahapan

Tentunya machine learning membutuhkan data. Pada tahap awal kita perlu memahami dataset yang kita miliki terlebih dahulu. Beberapa hal yang perlu diketahui  adalah format data, jumlah sampel, dan berapa jumlah label. Selain itu, kita perlu juga memastikan apakah dataset tersebut merupakan data kontinu(masalah regresi) atau data diskrit
(masalah klasifikasi)

Dataset yang kita gunakan memiliki 192 sampel data latih yang terdiri dari 96 sampel gambar ruangan rapidan 96 sampel gambar  ruangan berantakan.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:eada20dc23d92909f3c1fe2b91e4126b20211126105827.jpeg){: .shadow}

Tahapan latihan kali ini adalah:
* Memastikan Tensorflow yang digunakan di google collab adalah versi diatas 2.0
* Mengunduh dataset  dan melakukan *extract file* dengna method *unzip*.
* Menampung  direktori setiap kelas pada direktori train dan validasi kedalam variabel.
* *Pre-processing* data dengan *image augmentation*
* Mempersiapkan data latih yang akan dipelajari oleh model.
* Membangun arsitektur model dengan Convolutional Neural Network (CNN).
* *Compile* dan latih model dengan `model.compile` dan `model.fit` hingga mendapatkan akurasi yang diinginkan.
* Menguji model yang dibuat dengan menggunakan gambar yang belum dikenali oleh model.

## Codelab

Hal pertama yang perlu dilakukan adalah **memastikan**  bahwa **Tensorflow**  yang Anda gunakan adalah versi  2 keatas.

```python
import tensorflow as tf
print(tf.__version__)
```
![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200501012634ceede09f2aef01dcc7f7a09c4d51b64e.png){: .shadow}

Tahap selanjutnya adalah mempersiapkan  dataset yang  akan digunakan. Anda dapat mengunduh datset tersebut  dengan menggunakan perintah  berikut.

```python
!wget --no-check-certificate \
  https://dicoding-academy-assets.sgp1.cdn.digitaloceanspaces.com/184/messy-vs-clean-room.zip \
  -O /tmp/messy_vs_clean_room.zip
```
Kode dibawah ini berfungsi untuk mengekstrak data  yang sebelumnya kita unduh. Lalu kita mendefenisikan nama direktori  untuk data latih dan data validasi.

```python
# melakukan ekstraksi pada file zip
import zipfile, os
local_zip =  '/tmp/messy_vs_clean_room.zip'
zip_ref = zipfile.ZipFile(local_zip, 'r')
zip_ref.extractall('/tmp')
zip_ref.close()

base_dir= '/tmp/images'
train_dir = os.path.join(base_dir, 'train')
validation_dir = os.path.join(base_dir, 'val')
```

Setelah Anda jalankan kode diatas, perhatikanlah, direktori data latih dan data validasi masing-masing memiliki subdirektori *clean* dan  *messy*. Setiap sub-direktori menyimpan gambar yang sesuai dengan nama sub-direktori tersebut. Jadi pada sub-direktori '*clean*' terdapat gambar-gambar ruangan yang rapi dan pada sub-direktori '*messy*' terdapat gambar-gambar ruangan yang berantakan.

```python
os.listdir('/tmp/images/train')
```

```python
os.listdir('/tmp/images/val')
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201005002027b7e1f64f4fa648bd5971b571c86d97d4.jpeg){: .shadow}

Langkah selanjutnya, kita akan menerapkan `ImageDataGenerator` untuk data latih dan data validasi. `ImageDataGenerator` merupakan sebuah fungsi yang sangat berguna untuk mempersiapkan data latih dan validasi. Beberapa kemudahan yang disediakan `ImageDataGenerator` antara lain,* preprocessing data*, *pelabelan sampel otomatis*, dan *augmentasi gambar*.

Augmentasi gambar merupakan sebuah teknik yang dapat digunakan untuk memperbanyak data latih dengan cara memperbanyak data latih dengan cara menduplikasi gambar yang telah ada dengan menambahkan variasi tertentu. Anda akan mempelajari lebih dalam terkait teknik ini nanti pada tulisan bercategory "Pengembangan Machine Learning". Anda juga dapat melihat detail mengenai augmentasi gambar menggunakan `ImageDataGenerator` pada [tautan](https://keras.io/api/data_loading/image/) berikut.

Kode berikut menunjukkan proses augmentasi gambar pada setiap sampel  di dataset.

```python
from tensorflow.keras.preprocessing.image import  ImageDataGenerator

train_datagen = ImageDataGenerator(
  rescale=1./255,
  rotation_range=20,
  horizontal_flip=True,
  shear_range = 0.2,
  fill_mode = 'nearest'
)

test_datagen = ImageDataGenerator(
  rescale=1./255
)
```

Selanjutnya, siapkan data latih dan validasi dari kumpulan data gambar yang diload dalam memori melalui fungsi flow() berikut.

```python
train_generator = train_datagen.flow_from_direktory(
  train_dir, # direktori data latih
  target_size = (150, 150), # menugbah resolusi seluruh gambar menjadi 150x150  piksel
  batch_size = 4,
  # karena ini merupakan masalah klasifikasi 2 kelas, gunakan class_mode = 'binary'
  class_mode = 'binary'
)

validation_generator = test_datagen.flow_from_direktory(
  validation_dir, # direkori data validasi
  target_size = (150, 150), # mengubah resolkusi seluruh gambar menjadi 150x150 piksel
  batch_size = 4, # karena ini merupakan masalah klasifikasi 2 kelas, gunakan class_mode = 'binary'
  class_mode = 'binary'
)
```

Setelah data siap, kita bisa membangun model Convolutional Neural Network (CNN). Pembuatan model CNN pada keras mirip dengan pembuatan model Multi Layer Perceptron (MLP)  yang dibahas pad tulisan [sebelumnya](). Perbedaanya terdapat pada empat lapis layer konvolusi dan max polling.

Anda tentu masing ingat bahwa fungsi dari layer konvolusi adalah untuk mengekstrak atribut pada gambar. Sedangkan layer max polling berguna untuk mereduksi resolusi gambar sehingga proses pelatihan model lebih cepat. Nah, pada modul CNN, proses klasisfikasi gambar hanya berfokus pada atribut-atribut unik yang membedakan tiap kategori. Sehingga, teknik ini dinilai lebih optimal dibandingkan hanya menggunakan model MLP yang membedakan tiap kategori dengan melihat keseluruhan piksel-piksel gambar.

```python
model = tf.keras.models.Sequential([
  tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(150, 150, 3)),
  tf.keras.layers.MaxPolling2D(2, 2),
  tf.keras.layers.Conv2D(64, (3,3), activation='relu'),
  tf.keras.layers.MaxPolling2D(2,2),
  tf.keras.layers.Conv2D(128, (3,3), activation ='relu'),
  tf.keras.layers.MaxPolling2D(2,2),
  tf.keras.layers.Conv2D(512, (3,3), activation='relu'),
  tf.keras.layers.MaxPolling2D(2,2),
  tf.keras.layers.Flatten(),
  tf.keras.layers.Dense(512, activation='relu'),
  tf.keras.layers.Dense(1, activation='sigmoid')
])
```

Usai membuat mode, kita bisa menggunakan fungsi `summary()` untuk melihat summary dari arsetktur model  yang telah kita buat.

```python
model.summary()
```

Berikut hasil summary dari arsitektur model yang telah kita buat.

```
Model: "sequential"
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
conv2d (Conv2D)              (None, 148, 148, 32)      896       
_________________________________________________________________
max_pooling2d (MaxPooling2D) (None, 74, 74, 32)        0         
_________________________________________________________________
conv2d_1 (Conv2D)            (None, 72, 72, 64)        18496     
_________________________________________________________________
max_pooling2d_1 (MaxPooling2 (None, 36, 36, 64)        0         
_________________________________________________________________
conv2d_2 (Conv2D)            (None, 34, 34, 128)       73856     
_________________________________________________________________
max_pooling2d_2 (MaxPooling2 (None, 17, 17, 128)       0         
_________________________________________________________________
conv2d_3 (Conv2D)            (None, 15, 15, 512)       590336    
_________________________________________________________________
max_pooling2d_3 (MaxPooling2 (None, 7, 7, 512)         0         
_________________________________________________________________
flatten (Flatten)            (None, 25088)             0         
_________________________________________________________________
dense (Dense)                (None, 512)               12845568  
_________________________________________________________________
dense_1 (Dense)              (None, 1)                 513       
=================================================================
Total params: 13,529,665
Trainable params: 13,529,665
Non-trainable params: 0
```

Anda mungkin bertanya-tanya, bagaimana membaca model summary diatas? Jangan khawatir, yuk kita bahas bersama.

Berdasarkan summary diatas, model yang kita buat terdiri dari empat Concolutional dan MaxPolling layer, sebuah flatten layer, serta dua buah dense layer. Ingatlah bahwa dense layer terakhir merupakan output layer. Pada kasus klasifikasi biner, output model merupakan angka tunggal antara 0 dan  1. Sehingga, kita dense layer terakhir = 1. Sementara itu, kolom "Param #" berisi informasi mengenai jumlah parameter pada tiap layer.

Selanjutnya, kolom "Output Shape" berisi informasi ukuran output yang dihasilkan tiap layer. Jika diperhatikan, ukuran input gambar yang telah didefinisikan sebelumnya asalah sebesar (150, 150).  Tetapi pada convolutional layer pertama, setiap satu input gambar akan menghasilkan ukuran output (148,148) sebanyak 32 gambar. Ukuran tersebut berkurang karena kita menggunakan filter dengan ukuran (3,3) dengan jumlah filter sebanyak 32 filter. Sehingga, setiap satu input gambar  akan menghasilkan 32 gambar baru dengan ukuran (148,148).

Kemudian, resolusi tiap gambar akan diperkecil dengan tetap mempertahankan informasi pada gambar menggunakan MaxPolling  layer yang berukuran (2, 2). Hal ini akan menghasilkan ukuran output gambar sebesar (74, 74). Nah, pada proses tersebut juga berlaku untuk Convolutional dan MaxPolling layer yang lain.

Berikutnya, mari perhatikan layer flatten. Output dari MaxPolling layer terakhir yang terdiri dari 512  gambar dengan ukuran (7,7) akan diubah kedalam bentuk array 1D(tensor 1D). Hal ini akan menghasilkan output berukuran (25088).

Nah, output tersebut kemudian masuk kedalam dense layer  pertama yang memiliki 512 neuron. Sehingga, ia akan menghasilkan output berukuran (1). Output dari layer terakhir inilah yang digunakan sebagai hasil akhir model untuk kasus klasifikasi biner. 

Selamat! Sampai disini, Anda sudah memahami penjelasan mengenai parameter-parameter dalam model summary. Mari kita lanjutkan proses pembuatan model ke tahap berikutnya.

Setelah membuat arsitektur model `CNN`, tahap selanjutnya adalah melakukan *compile* model tersebut menggunakan fungsi `compile()`. Pada tahap ini, kita juga menggunakan **loss function** serta **optimizer** yang akan digunakan. Loss function yang digunakan pada kasus klasifikasi biner adalah "binary_crossentropy". Selain itu, optimizer yang digunakan pada kasus ini adalah "Adam optimizer". Adam optimizer ini dipilih karena mudah diterapkan, lebih efisien secara komputasi dan kebutuhanmemoti yang lebih kecil.

```python
# compile model dengan  'adam' optimizer loss function 'binary_crossentropy'
model.compile(
  loss='binary_crossentropy',
  optimizer=tf.optimizers.Adam(),
  metrics=['accuracy']
)
```

Nah, tahap terkahir dalam pembuatan model adalah proses yang disebut sebgai model fitting. Ia merupakan proses untku melatih  model pada data masukan dan label yang bersesuaian. Pada proses ini, kita memasukkan data latih pada jaringan Neural Network yang telah kita buat sebelumnya.

Hal yang harus didefinisikan pada tahap ini adalh loss function dan optimizer. Kemudian kita mulai proses pelatihan model dengna memenggil fngsi `fit()`.

Dengan menggunakan `ImageDataGenerator` kita tidak perlu memasukkan parameter gambardan labelnya. Image data generator secara otomatis melabeli gambar sesuai dengan direktorinya. Sebagai contoh, sebuah gambar yang terdapat didirektori *clean*, akan dilabeli "clean" oleh `ImageDataGenerator` secara otomatis.

```python
# latih model dengan model.fit()
model.fit(
  train_generator,
  steps_per_epoch=25, # berapa batch yang akan dieksekusi pada setiap epoch
  epochs=20, # tambahkan epoch jika akurasi model belum optimal
  validation_data=validation_generator, #menampilkan akurasi pengujian data validasi
  validation_steps=5, # berapa batch yang akan dieksekusi pada setiap  epoch
  verbose=2
)
```

Sampai disini, proses training telah selesai. Anda telah berhasil membuat model Machine Learning dengan  CNN untuk mengklasifikasi gambar ruangan yang bersih dan berantakan.

Setelah berhasil membuat model, Anda tentu ingin menguji model tersebut untuk memprediksi gambar baru(gambar yang belum pernah dikenal oleh model sebelumnya) potongan program berikut memungkinkan kita secara interaktif memilih sebuah gambar. Kemudian gambar tersebut akan diolah terlebih dahulu sebelum dimasukkan kedalam model untuk diprediksi.

Sebelum menerapkan kode ini, pastikan Anda telah memiliki contoh gambar yang akan diuji. Anda dapat mencari dan mengunfug gambar tersebut dari mesin pencari google. Atau Anda dapat menggunakan gambar dati [tautan](https://drive.google.com/drive/folders/1_k9DSTSld-9kcJ_aW3vBLkdm3lWYbaze) berikut.

```python
from google.colab import files
from tensorflow.keras.preprocessing import image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
%matplotlib inline
 
uploaded = files.upload()
 
for fn in uploaded.keys():
 
  # predicting images
  path = fn
  img = image.load_img(path, target_size=(150,150))
 
  imgplot = plt.imshow(img)
  x = image.img_to_array(img)
  x = np.expand_dims(x, axis=0)
  images = np.vstack([x])
 
  classes = model.predict(images, batch_size=10)  
  print(fn)
  if classes==0:
   print('clean')
  else:
   print('messy')
```

Berikut merupakan contoh tampilan hasil prediksi dari model yang sebelumnya telah kita latih. Keren bukan? Silakan foto kamar Anda sendiri dan lihat hasil prediksi dari model yang telah Anda buat.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:b9c4e26364f0412803a651ccc3df42ec20211126132807.jpeg){: .shadow}




