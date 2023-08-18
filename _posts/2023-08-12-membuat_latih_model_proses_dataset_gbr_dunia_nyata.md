---
title: Membuat dan Melatih Model untuk Memproses Dataset Gambar dari Dunia Nyata
date: 2023-08-12
tags: [keras, tensorflow, keras]
category: Klasifikasi Gambar
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

Ketika Anda bertugas untuk mengembangkan model yang mampu mengenali gambar, hal yang paling umum ditemui adalah data yang akan Anda proses ridak memiliki ukuran dan format yang seragam. Gambar di bawah adalah contoh dataset CIFAR-10, sebuah dataset yang umum dipakai untuk riset dalam computer vision. Dataset ini memiliki sekitar 80 juta gambar dari 10 kelas objek seperti di bawah yaitu pesawat, mobil, burung, dan seterusnya. Gambar pada dataset ini telah diproses sebelumnya ke dalam ukuran yang sama serta yaitu 32x32 piksel.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020080314114424120f73dfe2cfe25873739ab0a60256.jpeg){: .shadow}

Namun jarang sekali dataset yang kita temui telah dalam kondisi telah diolah dan dalam format dan ukuran yang seragam. Contohnya pada gambar dibawah, dimana terdapat 4 buah  gambar catur  dengan ukuran yang berbeda. Dataset seperti inilah  yang umum kita temui di industri.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202008031412473618980d0af84c41070540b779b94a9e.jpeg){: .shadow}

Untungnya library Keras menyediakan ImageDataGenerator yang dapat mempermudah kita dalam  memproses data untuk model kita.

Yuk, kita mulai. Pada google collab  ketik kode berikut untuk mengunduh data.

```python
!wget --no-check-certificate \
    https://github.com/dicodingacademy/assets/raw/main/ml_pengembangan_academy/Chessman-image-dataset.zip \
    -O /tmp/Chessman-image-dataset.zip
```

Jika berhasil, outputnya seperti berikut:

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a508eb3061afe87c5551679150cd8f5220211021113857.png){: .shadow}

Selanjutnya kita perlu melakukan ektraksi terhadap dataset yang kita unduh karena dataset  dalam bentuk zip file.

```python
import  os
import  zipfile
local_zip = '/tmp/Chessman-image-dataset.zip'
zip_ref  = zip_file.ZipFile(local_zip, 'r')
zip_ref.extractall('/tmp')
zip_file.close()
```

Gunakan fungsi listdir dari kelasa os untuk melihat direktori  yang terdapat pada dataset.  Dapat kita lihat bahwa terdapat 6 buah direktori yang terdapat pada dataset. Tiap direktori berisi gambar pion catur  sesuai dengan nama direktorinya.

```python
os.listdir('/tmp/Chessman-image-dataset/Chess')
```

Apabila kode dijalankan tampilannya  sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803141406fa26337f234aa7acb195bcafebb7823f.jpeg){: .shadow}

Selanjutnya kita perlu melihat berapa banyak gambar pada setiap direktori. Dari output dapat dilihat bahwa jumlah sampel pada tiap direktori berbeda. Perlu diperhatikan juga bahwa dataset ini berukuran sangat kecil sehingga performa dari model mungkin tidak akan terlalu baik. Kita akan menggunaka augmentasi gambar untuk mengatasi masalah ini.

```python
print('total pawn images :', len(os.listdir('/tmp/Chessman-image-dataset/Chess/Pawn')))
print('total King images :', len(os.listdir('/tmp/Chessman-image-dataset/Chess/King')))
print('total Knight images :', len(os.listdir('/tmp/Chessman-image-dataset/Chess/Knight')))
```

Apabila kode dijalankan tampilannya sebagai berikut:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202008031414273c4a6cda276ae765cfbe745142adcc67.jpeg){: .shadow}

Kita dapat melihat contoh gambar dari dataset  dengan menjalankan kode berikut.

```python
from tensorflow.keras.preprocessing import image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
%matplotlib inline
img = img.load_img('/tmp/Chessman-image-dataset/Chess/King/00000145.png')
imgplot = plt.imshow(img)
```

Hasilnya sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200804111459ef1883759127c08396f2dfe0ce7ddbad.jpg){: .shadow}

Selanjtunya kita import ImageDataGenerator dan aplikasikan augmentasi gambar pada dataset kita. Perhatikan bahwa ada parameter yaitu validation split. Parameter ini akan dijelaskan pada parameter berikutnya.

```python
from.tensorflow.keras.preprocessing.image import ImageDataGenerator

train_dir = os.path.join('/tmp/Chessman-image-dataset/Chess')
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20, 
    zoom_range=0.2,
    shear_range=0.2,
    fill_mode='nearest',
    validation_split=0.1 # set validation split
)
```

Dataset yang kita miliki hanya terdiri dari satu buah direktori dan tidak terbagi menjadi data training dan testing. Tapi tenang, dengan ImageDataGenerator kita tidak perlu susah payah membagi direktori secara manual, cukup dengan menggunakan parameter validation_split yang disebut pada paragraf sebelumnya. Dengan parameter tersebut, kita hanya cukup memberitahu ImageDataGenerator mana data untuk training dan mana data untuk testing  dengan menambahkan parameter subset dengan nilai training  atau validation.

```python
train_generator = train_datagen.flow_from_direktory(
    train_dir,
    target_size(150,150),
    batch_size=8,
    class_mode=categorical,
    subset='training' # set as training data
)

validation_generator = train_datagen.flow_from_direktory(
    train_dir, # same direktory  as training data 
    target_size=(150,150),
    batch_size=16,
    class_mode='categorical',
    subset='validation'
)
```
Ketika kodenya dijalankan, hasilnya sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202008041120107de426e66b9e2d910bb57d97c4c444c5.jpg){: .shadow}

Selanjuatnya kita buat arsitektur dari model kita. Untuk model ini kita menggunakan 3 lapis convolution dan 2 hidden layer dengan 512 dan 256 buah unit perseptron.

```python
import tensorflow as tf
model = tf.keras.models.Sequential([
    # Note the input shape is the desired size of the image 150x150 with 3 bytes color
    tf.keras.layers.Conv2D(64, (3,3), activation='relu', input_shape=(150, 150, 3)),
    tf.keras.layers.MaxPooling2D(2,2),
    tf.keras.layers.Conv2D(32, (3,3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2,2),
    tf.keras.layers.Dropout(0.4),  
    tf.keras.layers.Conv2D(64, (3,3), activation='relu'), 
    tf.keras.layers.MaxPooling2D(2,2),
    tf.keras.layers.Dropout(0.4),  
    # Flatten the results to feed into a DNN
    tf.keras.layers.Flatten(), 
    # 512 neuron hidden layer
    tf.keras.layers.Dense(512, activation='relu'),
    tf.keras.layers.Dense(256, activation='relu'),
    tf.keras.layers.Dense(6, activation='softmax')  
])
```


Setelah arsitektur dibuat, tentukan optimizer dan loss yang akan digunakan model.

```python
model.compile(
    optimizer.tf.optimizers.Adam(),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)
```

Terakhir, panggil fungsi fit() untuk melatih model kita.

```python
history = model.fit(
    train_generator,
    validation_data=validation_generator,
    epoch=50,
    verbose=2
)
```

Dapat dilihat bahwa  akurasi dari data validasi yang dihasilkan berada disektiar 0.5.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803141735eee2a1e566a52d805dab1127be660a02.jpeg){: .shadow}

Anda juga dapat melihat akurasi dari model menggunakan kode berikut.

```python
import matplotlib.pyplot as plt
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Akurasi model')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['train', 'test'], loc='upper left')
plt.show()
```

Jika kode diatas dijalankan, maka hasilnya seperti berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2020080314204459651e284df7146d79b1f0045a317efa.jpeg){: .shadow}

Untuk membuat plot loss, Anda cukup mengunakan kode berikut.

```python
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Loss Model')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['train', 'test'], loc='upper left')
plt.show()
```

Hasil ketika dijalankan sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20200803142044d66915cfbcd090d61aa6a12db0e6b3a1.jpeg){: .shadow}


Akhirnya, kita berhasil mengembangkan model untuk mengklasifikan dataset yang sangat variatif. Akurasi yang didapat sekitar 80% dimana model akan membuat sekitar 50 persen  prediksi yang salah.

Pada tulisan berikutnya, kita akan memperlajari transfer learning dan melihat bagaimana teknik itu meningkatkan akurasi dari model ini.
