---
title: Object-Oriented Programming (OOP)
date: 2023-11-23
tags: [python_lanjutan, gdsc]
category: python
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## **Duck Typing**

**Catatan:**

Sebelum Anda mulai belajar, perlu diperhatikan bahwa modul OOP ini bersifat opsional. Kita akan belajar Object-Oriented Programming (OOP) tidak secara mendalam, tetapi mendasar.

Python sering dikaitkan dengan metode duck typing, yakni metode ini berbunyi seperti berikut.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:6736db1173b534e08da0308392a979ab20230822104414.jpeg)

Jika diterjemahkan ke dalam bahasa Indonesia, kalimat di atas mengandung arti "**Jika sesuatu berjalan seperti bebek dan bersuara seperti bebek, kemungkinan besar ia adalah bebek**".

Konsep duck typing tidak berkaitan langsung dengan *dynamic typing* atau *loosely typed*, ini merupakan konsep yang lebih erat dengan materi kita kali ini, yaitu pemrograman berorientasi objek (*object-oriented programming*). Duck typing menjelaskan bahwa sebuah tipe atau class dari sebuah object tidak lebih penting daripada method yang menjadi perilakunya. 

Class, object, dan method akan kita bahas secara mendalam pada materi kali ini. Kita hanya akan berkenalan terlebih dahulu secara umum sebelum spesifik membahasnya. Sebenarnya, Python ingin memberikan keleluasaan terhadap para developernya untuk tidak perlu mencemaskan tentang tipe atau kelas (class) dari sebuah objek (object), yang lebih penting adalah kemampuan melakukan operasinya (method). 

Mari kita ambil contoh, masih ingat dengan fungsi len()? len() merupakan fungsi yang bertujuan untuk menghitung panjang atau banyaknya elemen dari list, set, dan string. Bagaimana dengan tipe data numerik, seperti integer? Perhatikan kode di bawah ini.

```python
i = 123
print(len(i))

"""
Output:
Traceback (most recent call last):
  File "/home/glot/main.py", line 2, in <module>
    print(len(i))
TypeError: object of type 'int' has no len()
"""
```

Python akan menghasilkan error yang menyatakan bahwa objek integer tidak memiliki len(). Perhatikan lebih baik kalimat error-nya.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e1402b022c797d734d6208d2440508b520230822104414.jpeg)

Pesan error tersebut menyatakan bahwa objek dengan tipe data "int" tidak memiliki len() yang tersedia, padahal seharusnya method tersebut diharapkan untuk ada. Python secara alami akan memeriksa jika object yang Anda buat memiliki method yang diharapkan atau tidak. Dalam contoh di atas, program menghasilkan error karena object tipe data 'int' tidak memiliki method len().

Baiklah, mari kita mulai perjalanan untuk mempelajari class, object, dan method.

## **Class, Object, dan Method**

Sebelum mengenal secara teknis class, object, dan method. Mari kita berandai-andai sejenak untuk memahami konsep **object-oriented programming** (OOP). 

Bayangkan Anda adalah seorang penggiat mobil, suatu waktu teman Anda yang berasal dari antah-berantah datang menghampiri. Kalian pun mulai berbincang dan dimulai dengan dia yang bertanya satu hal, "**Apa itu mobil?**".

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:6e97620883795bc09cec63e7edb58afa20230822104950.jpeg)

Anda bisa menjawab, "Mobil adalah jenis kendaraan dengan empat roda yang memiliki kemampuan untuk bergerak maju, mundur, berbelok, dan berhenti. Mobil dapat melaju dengan kecepatan dari 0 hingga 160 km/jam. Mobil juga memiliki variasi warna yang beragam, termasuk merah, hitam, dan warna lainnya."

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:aa607e96f06ad021eca26737057ff53b20230822104951.jpeg)

Berdasarkan ilustrasi tersebut, mobil dapat dikatakan sebagai sebuah kelas (**class**) dan perilaku (**method**) mobil tersebut dapat melaju, mundur, berbelok, dan berhenti. Mobil memiliki atribut warna dan warna tersebut bisa beragam, seperti merah, hitam, dan sebagainya serta memiliki **kecepatan** berkisar antara 0 hingga 160 km/jam.

Class dapat diibaratkan sebagai *blueprint* atau cetakan. Dalam contoh percakapan di atas, mobil dapat digambarkan sebagai contoh class atau *blueprint*. Ketika class telah dibuat, Anda dapat membuat sebuah objek baru berdasarkan class tersebut. Objek baru ini memiliki karakteristik, atribut, dan perilaku sama dengan class yang menjadi cetakannya. Anda pun dapat mengubah nilai atribut dari objek tersebut. Perhatikan gambar di bawah ini.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:56ba7cc237efe8e9732873b59b4cb20020230822104950.jpeg)

Pada gambar di atas, kita memiliki sebuah kelas bernama Mobil. Kelas ini memiliki method, yaitu bergerak maju, mundur, berbelok, dan berhenti. Dari kelas ini, kita bisa membuat objek baru, misalkan membuat mobil Dicoding.

Objek baru tersebut memiliki unsur method dan atribut sama dengan kelas yang menjadi cetakannya. Bahkan, kita bisa mengubahnya sesuai keinginan. Misalnya pada objek Mobil Dicoding, kita mengubah warnanya menjadi biru. Jika kita tarik ke perandaian lain, ini mirip seperti manusia di seluruh dunia. Kita memiliki teman bernama Budi, Herman, dan Asep yang walaupun nama mereka berbeda, tetapi mereka tetaplah sama-sama manusia seperti kita.

Tidak hanya objek, Anda juga dapat membuat kelas baru untuk mewarisi kelas yang sudah ada.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:80289924c5bab4c18d13fdbeaa95354220230822104951.jpeg)

Terlihat seperti gambar di atas, anggaplah kita memiliki mobil sebagai kelas dasar dengan method maju, mundur, berbelok, dan berhenti. Selain itu, kelas dasar mobil memiliki atribut warna dan kecepatan.

Ketika membuat kelas baru, seperti **Mobil Sport**, kita dapat menggunakan kelas yang sudah ada (mobil sebagai kelas dasar) untuk mewarisi beberapa hal, mulai dari atribut warna, kecepatan hingga beberapa perilakunya, yakni maju, mundur, berbelok, dan berhenti. Namun, kita ingin menambahkan metode baru karena ini adalah **mobil sport**. Metode baru tersebut adalah turbo yang meningkatkan kecepatan secara signifikan.

Secara umum, konsep OOP dalam pemrograman sangat mirip seperti ilustrasi-ilustrasi di atas. **Object-oriented programming** adalah paradigma pemrograman berorientasi pada pengorganisasian kode menjadi objek-objek yang memiliki atribut dan perilaku (method). Objek merupakan perwujudan dari class dengan anggapan bahwa kelas adalah cetakan yang memungkinkan kita dapat membuat banyak objek berdasarkan cetakan tersebut.

Method adalah perilaku atau tindakan yang dapat dilakukan oleh objek atau kelas. Sebagaimana halnya maju, mundur, berbelok, dan berhenti pada contoh sebelumnya. Atribut adalah variabel yang menjadi identitas dari objek atau kelas, seperti warna dan kecepatan pada contoh sebelumnya.

Mari sederhanakan dengan tabel berikut.

| Nama              | Deskripsi                                                   | Contoh                         |
|-------------------|-------------------------------------------------------------|--------------------------------|
| Class (Kelas)     | Cetakan (blueprint) untuk membuat objek-objek yang memiliki karakteristik dan perilaku serupa. | Mobil; Manusia.                |
| Object (Objek)    | Perwujudan dari kelas.                                       | Mobil Dicoding; Budi, Herman, Asep. |
| Perilaku (Method) | Perilaku atau tindakan yang dapat dilakukan oleh objek atau kelas. | Maju, mundur, berbelok, berhenti.|
| Atribut           | Variabel yang menjadi identitas dari objek atau kelas.       | Warna, kecepatan, merek.        |


### **Class**

Pembuatan class dalam Python mirip seperti fungsi, yakni perlu menggunakan keyword untuk bisa membuatnya. Keyword atau kata kunci untuk membuat kelas dalam Python adalah "class". Mari kita buat sebuah kelas bernama mobil.

```python
class Mobil:
    pass
```

Pada contoh di atas, kita membuat kelas bernama Mobil. Namun, kelas ini atribut dan method-nya belum didefinisikan sehingga kita masukkan pernyataan "**pass**" supaya tidak menghasilkan error. Ingat bahwa class merupakan blok kode sehingga Anda perlu memperhatikan indentasi untuk membuatnya.

Selanjutnya, mari isi kelas tersebut dengan sebuah atribut. Ingat bahwa atribut adalah variabel yang menjadi identitas dari objek atau kelas.

class Mobil: 

```python
class Mobil:
    # Atribut
    warna = "Merah"
```

Pada contoh di atas, kita memberikan variabel warna untuk menjadi atribut atau identitas bawaan dari kelas Mobil. Jika Anda jalankan kode tersebut, tidak akan ada output yang keluar. Hal ini karena kita belum memanggil kelas tersebut dan mendefinisikan kembalian nilai (return).

### **Object (Objek)**

Untuk memanggil kelas yang telah dibuat, kita membuat sebuah [objek](https://kbbi.kemdikbud.go.id/entri/objek). Berdasarkan KBBI dari kemendikbud, objek merupakan benda, hal, dan sebagainya yang dijadikan sasaran untuk diteliti, diperhatikan, dan sebagainya. Keterkaitan antara objek dan class sangat erat. Contohnya, jika Anda membuat kelas bernama manusia, objeknya adalah manusia dengan nama yang berbeda.

Anda bisa umpamakan kelas adalah bentuk abstrak dari objek, layaknya cetakan atau blueprint. Saat kelas diwujudkan menjadi bentuk yang lebih nyata, proses ini disebut sebagai instansiasi. Itulah sebabnya objek disebut juga sebagai instance atau **instance of the class**.

Pada contoh sebelumnya, kita telah membuat class. Untuk memanggilnya, kita harus mengubahnya menjadi bentuk yang lebih nyata atau bisa dikatakan objek dari kelas tersebut perlu dibuat.

```python
class Mobil:
    # Atribut
    warna = "Merah"
 
mobil_1 = Mobil()
```

Pada contoh di atas, kita memanggil sebuah class dengan menyebutkan namanya diikuti oleh tanda kurung buka dan tutup "()", mirip seperti memanggil fungsi. Selanjutnya pada baris kode "mobil_1 = Mobil()", kita membuat sebuah objek dari kelas Mobil dan menyimpannya dalam variabel mobil_1.

Tidak seperti fungsi, variabel dalam contoh di atas adalah objek yang merupakan perwujudan dari kelas yang telah kita buat. Ini berarti variabel tersebut sekarang memiliki atribut yang identik dengan kelas tersebut.

```python
class Mobil:
    # Atribut
    warna = "Merah"

mobil_1 = Mobil()
print(mobil_1.warna)

"""
Output:
Merah
"""
```

Pada contoh di atas, kita memanggil atribut objek yang berasal dari kelas Mobil, yaitu "Merah". Untuk memanggil atribut, kita dapat menyebutkan objek atau instance diikuti dengan nama atributnya. 

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:5ffe37160dd30253772892c93802dcb520230822104950.jpeg)

Dengan membuat objek yang merupakan instance dari kelas, kita pun dapat mengubah atribut tersebut sesuai kebutuhan. Contohnya berikut.

```python
class Mobil:
    # Atribut
    warna = 'Merah'

mobil_1 = Mobil()
mobil_1.warna = "Biru"
print(mobil_1.warna)

"""
Output:
Biru
"""
```

Pada contoh di atas, kita mengubah atribut kelas yang awalnya bernilai merah menjadi biru dengan mendeklarasikan ulang nilainya. Perhatikan kode "mobil_1.warna = 'Biru'", itu merupakan kode yang digunakan untuk mengubah nilai atribut kelas.

### **Atribut**

Dalam Python, ada dua jenis atribut kelas yang dapat dibagi, yaitu **atribut kelas** dan **atribut objek atau instance**. Atribut kelas adalah jenis atribut yang secara otomatis terdefinisi dan menjadi bawaan kelas ketika instance dibuat berdasarkan kelas tersebut. Anda dapat menganggapnya sebagai nilai default atau bawaan dari kelas. Jika Anda membuat beberapa objek berdasarkan kelas yang memiliki jenis atribut ini, setiap objek akan memiliki atribut yang sama dengan nilai yang sama. 

Namun, perlu diperhatikan bahwa jenis atribut kelas memiliki kelemahan, yaitu ketika nilai atribut kelas diubah, perubahan tersebut akan memengaruhi semua objek yang dibuat berdasarkan kelas tersebut.

Perhatikan contoh berikut. Asumsikan bahwa kita membuat sebuah kelas bernama "Mobil" dengan atribut "warna". Lalu, dari kelas tersebut kita akan membuat dua objek atau instance.

```python
class Mobil:
    # Atribut kelas
    warna = "Merah"

mobil1 = Mobil()
print(mobil1.warna)

mobil2 = Mobil()
print(mobil2.warna)

# Mengubah atribut kelas
Mobil.warna = "Hitam"

print(mobil1.warna)
print(mobil2.warna)

"""
Output:
Merah
Merah
Hitam
Hitam
"""
```

Pada contoh di atas, kita membuat kelas bernama "Mobil" dengan atribut "warna" diisi dengan nilai "Merah". Selanjutnya, pada kode di bawah ini kita buat dua instance baru yang diambil dari kelas mobil tersebut. Instance pertama adalah "mobil1" dan instance kedua adalah "mobil2".

```python
mobil1 = Mobil()
print(mobil1.warna)
 
mobil2 = Mobil()
print(mobil2.warna)
```

Tahap selanjutnya, pada kode di bawah ini kita ubah atribut kelas Mobil. Dengan kode tersebut, kini nilai atribut warna pada kelas mobil telah berubah

```python
# Mengubah atribut kelas
Mobil.warna = "Hitam"
```

Apa yang terjadi dengan objeknya? Kita cetak atribut mobil1 dan mobil2 dengan menggunakan `print()`. Hasilnya seperti yang Anda lihat sebelumnya bahwa kini kedua atribut pada masing-masing objek ikut mengalami perubahan yang awalnya "Merah" menjadi "Hitam".

**Kelemahan ini akan menjadi masalah** jika kita ingin setiap objek memiliki atribut masing-masing yang menjadi ciri khasnya. Sama seperti manusia yang bisa beragam dan mempunyai ciri khas walau dalam satu "**blueprint**" yang sama.

Jenis atribut yang kedua adalah **atribut objek** atau **atribut instance**. Jenis atribut ini memungkinkan setiap instance dari kelas memiliki atribut yang berbeda-beda sesuai dengan keinginan. 

Namun, untuk membuat **atribut instance** kita perlu menggunakan **class constructor**.


### **Class Constructor**

Pembangun kelas atau class constructor adalah sebuah **fungsi khusus** dalam Python yang digunakan untuk menentukan nilai awal atau kondisi awal dari suatu kelas. Dengan fungsi ini, saat kita melakukan proses instansiasi atau pembuatan objek baru, hal pertama yang dilakukan adalah memanggilnya terlebih dahulu.

```python
class Mobil:
    def __init__(self):
        self.warna = 'Merah'
```

Pada contoh di atas, kita membuat fungsi bernama "`__init__`" sebagai fungsi khusus untuk menjadi constructor. Selanjutnya, kita menggunakan parameter `self`, yakni sebuah kata kunci untuk merujuk pada objek yang sedang diproses saat ini.

Ini artinya ketika Anda membuat instance baru bernama "mobil_1", constructor akan dipanggil pertama kali dan self akan merujuk pada instance atau objek "mobil_1" tersebut. Begitu pun kalau kita membuat instance baru lainnya bernama "mobil_2", constructor akan dipanggil pertama kali dan self akan merujuk pada instance "mobil_2". 

Hal ini memungkinkan setiap objek baru tersebut memiliki atribut masing-masing, tidak lagi atribut kelas. Jadi, kita dapat mengubah atribut suatu objek tanpa memengaruhi objek lainnya. 

Dengan begitu, `self.warna` yang didefinisikan dalam constructor adalah jenis dari **atribut instance** atau **atribut objek**, yakni atribut yang terkait dengan instance atau objek itu sendiri, bukan kelas. 

Mari kita kembali pada contoh kelas mobil dengan atribut warna. Kali ini kita akan mengubah nilai atribut kembali, tetapi perbedaannya adalah atribut tersebut bukan jenis atribut kelas melainkan atribut instance.

```python
class Mobil:
    # Atribut Instance
    def __init__(self):
        self.warna = 'Merah'
        
mobil_1 = Mobil()
mobil_2 = Mobil()

print(mobil_1.warna)
print(mobil_2.warna)

# Mengubah atribut instance
mobil_1.warna = "Hitam"

# Menampilkan kembali atribut warna
print(mobil_1.warna)
print(mobil_2.warna)

"""
Output:
Merah
Merah
Hitam
Merah
"""
```

Pada contoh di atas, kita membuat kelas bernama **Mobil** dengan atribut instance adalah **warna** dan nilainya **merah**. Selanjutnya, kita membuat dua instance baru bernama "mobil_1" dan "mobil_2". Jika kita cetak atribut kedua objek tersebut ke layar, hasilnya adalah "Merah" untuk kedua atribut tersebut.

Selanjutnya kita ubah atribut instance pada instance "mobil_1" dengan sintaks `mobil_1.warna = "Hitam"`. Sintaks ini mengganti atribut objek tersebut dari awalnya merah menjadi hitam.

Untuk mengetahui perbedaannya, kita cetak kembali kedua instance tersebut menggunakan fungsi "print()". Hasilnya atribut instance mobil_1 berubah menjadi hitam, sedangkan instance mobil_2 tetap merah. 

Jika terlintas dalam benak Anda, mengapa sintaksnya `mobil_1.warna = "Hitam"` bukan `Mobil.warna = "Hitam"`? Jawabannya dapat dilihat jika Anda mengubah kode di atas dengan kode tersebut. Silakan untuk melakukan *copy-paste* terhadap sintaks yang dimaksud. 

Output yang dihasilkan adalah program menampilkan "Merah" semuanya. Artinya atribut pada setiap objeknya tidak terjadi perubahan. Hal ini karena pada kelas yang kita buat tidak memiliki **atribut kelas**, sedangkan sintaks `Mobil.warna = "Hitam"` bertujuan untuk mengubah jenis atribut kelas. 

Jika sebelumnya kita hanya menggunakan parameter self saja dalam class constructor, parameter lain pun dapat ditambahkan sesuai kebutuhan.

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
        
mobil_1 = Mobil('Merah', 'AndreCar', 160)

print(mobil_1.warna)
print(mobil_1.merek)
print(mobil_1.kecepatan)

"""
Output:
Merah
AndreCar
160
"""
```

Pada contoh di atas, kita membuat kelas yang sama, tetapi ada perbedaan dengan yang sebelumnya. Perbedaannya adalah pada kode di atas, kita membuat parameter tambahan, yaitu "warna, merek, kecepatan". Parameter tambahan ini membuat kita perlu menggunakan argumen ketika memanggil kelas mobil **"Mobil('Merah', 'AndreCar', 160)"**. Jika Anda memanggil kelas tanpa argumen yang disebutkan, program akan menyebabkan error.

Hal penting yang perlu diketahui adalah perbedaan antara kode di atas dengan kode sebelumnya. Sebelumnya, kode hanya menggunakan parameter "self". Lalu, jika kita menggunakan kode seperti berikut.

```python
def __init__(self):
        self.warna = 'Merah'
```

Kode di atas berarti kita langsung menentukan nilai default terhadap suatu objek. Itulah sebabnya ketika proses instansiasi, program tidak memunculkan error walaupun kita tidak memberikan argumen apa pun.

Lain halnya pada kode di bawah ini.

```python
def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
```

Semua atribut yang telah ditetapkan tidak memiliki nilai default. Ketika membuat sebuah objek dari kelas tersebut, kita perlu menambahkan argumen tambahan seperti yang disebutkan, yaitu warna, merek, kecepatan. Inilah sebabnya ketika proses instansiasi atau pembuatan objek, program akan memunculkan error jika tidak memberikan argumen apa pun.

### **Method**

Setelah atribut, saatnya membahas method sebagai perilaku atau tindakan yang dapat dilakukan oleh objek atau kelas. Pada pembuatan metode , sebenarnya kita membuat fungsi di dalam kelas itu sendiri. Dengan kata lain, kita menggunakan kata kunci "**def**" atau membuat fungsi sebagai suatu metode. Python membagi method menjadi tiga jenis.

- Metode dari object (object method).
- Metode secara statis (static method).
- Metode dari class (class method)

Dua metode terakhir sangat erat kaitannya dengan konsep dekorator. Kita tidak akan membahasnya lebih detail mengenai dekorator, tetapi secara umum saja. 

Dekorator adalah fungsi dalam Python yang mengembalikan fungsi lain, biasanya diawali dengan sintaks "@" di awal.  Contoh sederhana dekorator sebagai beriku

```python
def my_decorator(func):
    def wrapper():
        print("Sebelum fungsi dieksekusi.")
        func()
        print("Setelah fungsi dieksekusi.")
    return wrapper

# Dekorasi fungsi dengan decorator
@my_decorator
def say_hello():
    print("Hello, world!")

# Memanggil fungsi yang sudah didekorasi
say_hello()

"""
Output:
Sebelum fungsi dieksekusi.
Hello, world!
Setelah fungsi dieksekusi.
"""
```

Penjelasan dari contoh di atas adalah berikut.

1. Pertama, kita mendefinisikan sebuah fungsi bernama **my_decorator**. Dekorator ini menerima sebuah fungsi func sebagai parameternya.
2. Dalam fungsi my_decorator, kita mendefinisikan fungsi wrapper(). Fungsi wrapper() bertindak sebagai "pembungkus" yang **menambahkan perilaku sebelum dan setelah eksekusi dari fungsi func**.
3. Setelah itu, fungsi  **my_decorator** mengembalikan (return) fungsi wrapper sebagai hasilnya. Return ini juga menyebabkan fungsi **wrapper** dijalankan.
4. Kemudian, kita mendefinisikan fungsi **say_hello()**. Fungsi ini akan menjadi target dekorasi.
5. Untuk mendekorasi s**ay_hello()**, kita menggunakan simbol "@" diikuti dengan nama dekorator, yaitu **@my_decorator** sebelum mendefinisikan fungsi say_hello.
6. Jadi, secara alur, ketika fungsi say_hello() dipanggil, sebenarnya yang dieksekusi adalah fungsi wrapper() yang menjadi hasil dari dekorasi. Oleh karena itu, pesan "Sebelum fungsi dieksekusi." dicetak terlebih dahulu, kemudian fungsi say_hello() dieksekusi dan mencetak "Hello, world!", lalu akhirnya, pesan "Setelah fungsi dieksekusi." dicetak.
Dekorator sangat berguna untuk menambahkan fungsionalitas tambahan pada suatu fungsi atau metode tanpa harus mengubah kode asli dari fungsi tersebut. Anda bisa membaca lebih dalam mengenai dekorator pada laman [ini](https://docs.python.org/id/3.8/glossary.html#term-decorator).

#### **Metode dari Objek (Object Method)**

Jenis pertama adalah method yang melekat terhadap objek. Ciri dari jenis metode ini adalah **adanya parameter self** yang merujuk pada objek saat ini. Perhatikan contoh di bawah ini, asumsikan bahwa kita membuat kelas mobil yang sama seperti sebelumnya. Namun, kita menambahkan metode bernama "tambah_kecepatan" dan setiap metode ini dipanggil maka kecepatan mobil akan bertambah 10.

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan

    def tambah_kecepatan(self):
        self.kecepatan += 10

mobil_1 = Mobil("Merah", "AndreCar  ", 160)
print("Sebelum ditambahkan: ")
print(mobil_1.kecepatan)

mobil_1.tambah_kecepatan()        # Memanggil metode tambah_kecepatan.

print("Setelah ditambahkan: ")
print(mobil_1.kecepatan)
```

Pada contoh di atas, kita membuat kelas **Mobil** dan mengimplementasikannya pada **objek bernama "mobil_1"**. Dalam kelas tersebut, kita memiliki **constructor ('__init__')** yang digunakan untuk menginisialisasi atribut '**warna**', '**merek**' dan '**kecepatan**' pada objek yang dibuat (mobil_1).

Ketika objek 'mobil_1' dibuat dari kelas Mobil, kita memberikan beberapa argumen yang menjadikannya atribut dari objek tersebut, yakni 'Merah' sebagai warna mobil, 'DicodingCar' sebagai merek, dan 'kecepatan' sebagai kecepatan awal mobil tersebut.

Dalam kelas Mobil yang dibuat, kita menambahkan method berupa fungsi "tambah_kecepatan" dan digunakan untuk meningkatkan kecepatan mobil. Setiap metode ini dipanggil, kecepatan mobil akan bertambah sebesar 10.

Pada bagian kode berikut lebih tepatnya, kita memanggil metode yang telah dibuat tersebut.

```python
print("\nSebelum ditambahkan: ")
print(mobil_1.kecepatan)
 
mobil_1.tambah_kecepatan()        # Memanggil metode tambah_kecepatan.
 
print("\nSetelah ditambahkan: ")
print(mobil_1.kecepatan)
```

Hasilnya bisa kita lihat pada output dalam program tersebut, bahwa sebelum ditambahkan, kecepatannya adalah 160. Namun setelah itu, kecepatannya bertambah menjadi 170.

Jika menyadarinya, perbedaan ketika Anda memanggil method dan atribut terletak pada penempatan tanda kurung “()”. Ketika memanggil atribut, Anda cukup menyebutkan nama atribut tersebut **tanpa ada** tanda kurung “()”, contohnya “mobil_1.kecepatan”. Namun untuk memanggil method, Anda **harus menempatkan** tanda kurung “()” setelahnya, contohnya “mobil_1.tambah_kecepatan()”.

Selain itu, saat kode di bawah ini dieksekusi,

```python
mobil_1.tambah_kecepatan()
```

ia setara dengan kita melakukan kode berikut.

```python
Mobil.tambah_kecepatan(mobil_1)
```

Hal inilah yang dimaksud dengan *self* pada object method karena ketika kita memanggil object method, argumen pertamanya adalah objek dia sendiri (self).

Namun, object method adalah metode yang melekat terhadap suatu objek dan menggunakan parameter *self*. Jadi, kita **tidak bisa** memanggil metode ini langsung melalui kelasnya.

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
    
    def tambah_kecepatan(self):
        self.kecepatan += 10
        
Mobil.tambah_kecepatan()

"""
Output:
Traceback (most recent call last):
  File "/home/glot/main.py", line 10, in <module>
    Mobil.tambah_kecepatan()
TypeError: tambah_kecepatan() missing 1 required positional argument: 'self'
"""
```

Pada contoh di atas, kita perlu membuat kelas yang sama seperti sebelumnya. Namun kali ini, kita memanggil object method melalui kelasnya secara langsung. Hal ini menyebabkan error karena kita mendefinisikan fungsi tambah_kecepatan sebagai object method. Artinya, metode ini memerlukan parameter self dan merujuk pada objek yang dibuat, sedangkan kita memanggilnya melalui kelas tanpa membuat objek.

Jika ingin membuat metode yang tidak melekat pada objek, kita bisa menggunakan class method atau static method.

#### **Metode secara Statis (Static Method)**

Static method adalah fungsi atau method pada sebuah kelas yang bersifat statis. Artinya, metode atau fungsi ini bersifat independen dan tidak terikat pada instance kelas. Metode ini dapat dianggap seperti kita membuat fungsi seperti biasa, tetapi didefinisikan dalam kelas sehingga ini menjadi perilaku untuk kelas tersebut. Untuk membuat static method, Anda bisa menambahkan dekorator **@staticmethod** tepat sebelum mendefinisikan fungsi atau metode.

```python
class Mobil:
    def __init__(self, merek):
        self.merek = merek
    
    @staticmethod
    def intro_mobil():
        print("Ini adalah metode dari kelas Mobil")
        
Mobil.intro_mobil()
mobil_1 = Mobil("AndreCar")
mobil_1.intro_mobil()

"""
Output: 
Ini adalah metode dari kelas Mobil
Ini adalah metode dari kelas Mobil
"""
```

Pada contoh di atas, kita membuat sebuah fungsi bernama intro_mobil() yang menjadi metode atau perilaku dari kelas Mobil dengan diawali oleh dekorator @staticmethod. Fungsi atau metode yang kita buat bernama intro_mobil dan mencetak pesan "ini adalah metode dari kelas Mobil".

#### **Metode dari Kelas (Class Method)**

Metode terakhir adalah class method yang termasuk jenis metode cukup spesial dalam Python. Jika object method identik dengan parameter *self* yang merujuk pada objek, **class method** juga memerlukan sebuah parameter yang merujuk pada kelas. Mari buat contoh yang sama dengan sebelumnya, tetapi kali ini menggunakan class method.

```python
class Mobil:
    def __init__(self, merek):
        self.merek = merek

    @classmethod
    def intro_mobil(cls):
        print("Ini adalah metode dari kelas Mobil")
        
Mobil.intro_mobil()
mobil_1 = Mobil("DicodingCar")
mobil_1.intro_mobil()

"""
Output:
Ini adalah metode dari kelas Mobil
Ini adalah metode dari kelas Mobil
"""
```

Pada contoh di atas, kita membuat program yang sama, tetapi ada sedikit perbedaan, yakni dekorator @classmethod digunakan. Perhatikan baik-baik pada bagian kode berikut.

```python
@classmethod
def intro_mobil(cls):
    print("Ini adalah metode dari kelas Mobil")
```

Pada bagian fungsi intro_mobil, kita menambahkan parameter **cls**. Ini adalah parameter wajib dalam menggunakan dekorator @classmethod.

**Catatan**:
Penamaan cls merupakan kesepakatan bersama dari programmer Python untuk memudahkan pembacaan kode. Anda dapat mengganti namanya, tidak harus cls.

Mengapa demikian? Sebab, ketika menggunakan class method, kita akan menambahkan argumen tambahan pada posisi pertama berupa kelas itu sendiri. Perhatikan kode berikut.

```python
class Mobil:
    def __init__(self, merek):
        self.merek = merek

    @classmethod
    def intro_mobil(*args):
        print(args)
        
Mobil.intro_mobil()
mobil_1 = Mobil("AndreCar")
mobil_1.intro_mobil()

"""
Output:
(<class '__main__.Mobil'>,)
(<class '__main__.Mobil'>,)
"""
```

Pada contoh kode di atas, fungsi intro_mobil() menggunakan variadic positional parameter, yakni *args untuk melihat argumen yang diterima oleh fungsi tersebut. Perhatikan lebih baik output-nya, kode di atas menerima sebuah parameter, yakni kelas Mobil walaupun ketika pemanggilan fungsi intro_mobil() kita tidak memberikan argumen apa pun.

```python
Mobil.intro_mobil()
mobil_1 = Mobil("AndreCar")
mobil_1.intro_mobil()
```

Ini membuktikan bahwa ketika Anda menggunakan class method, Python akan secara otomatis menambahkan kelas tersebut sebagai argumen pertama.

## **Inheritance (Pewarisan)**

Sebagaimana ilustrasi awal, kita dapat membuat sebuah kelas baru dengan menggunakan kelas induk yang sudah ada. Konsep ini disebut dengan 'inheritance' atau dalam bahasa Indonesia artinya pewarisan.

### **Mekanisme Pewarisan**

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:d33e86529030af3a78283af384ce923a20230822111858.jpeg)

Untuk melakukan pewarisan, anggap kita memiliki "kelas A" sebagai induk atau kelas dasar. Dari kelas A tersebut kita membuat kelas baru bernama "kelas B" sebagai kelas turunan dari kelas yang didapatkan (kelas A). Ketika kelas B mewarisi kelas A, secara otomatis kelas ini memiliki fitur-fitur yang dimiliki oleh kelas A tersebut, dalam hal ini atribut-atribut dan metode-metode. 

Sebagaimana halnya pada ilustrasi di sampingnya, Anda mempunyai **kelas Mobil** sebagai kelas dasar atau induk. Lalu, kita membuat **kelas Sport** sebagai turunan dari kelas mobil yang sudah ada. Selanjutnya, kita bisa memiliki perilaku dan atribut yang sama dengan kelas sebelumnya. Bahkan kita bisa menambahkan hal baru, seperti perilaku turbo pada kelas mobil sport.

Hal yang perlu diperhatikan, jika kelas B memiliki nama metode yang sama dengan kelas A, metode tersebut akan menimpa metode yang diwariskan oleh kelas A. 

Mari lihat contoh pewarisan di bawah ini, asumsikan bahwa kita perlu membuat kelas Mobil sebagai kelas dasar. Dari kelas Mobil ini, kita akan membuat kelas Mobil baru bernama Mobil Sport dengan fitur yang sama seperti kelas dasarnya. Namun, ada tambahan fitur baru pada kelas tersebut, yakni turbo untuk meningkatkan kecepatan mobil hingga 50 km/jam.

Mari mulai dengan kelas dasar Mobil.

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
    
    def tambah_kecepatan(self):
        self.kecepatan += 10

mobil_1 = Mobil("Merah", "AndreCar", 160)
print(mobil_1.kecepatan)

"""
Output:
160
"""
```

Pada contoh di atas, kita membuat sebuah kelas bernama Mobil dengan atributnya adalah warna, merek, dan kecepatan. Kelas ini juga memiliki metode, yaitu tambah_kecepatan untuk meningkatkan kecepatan mobil sebesar 10. Anggap bahwa kode ini tidak boleh diubah sama sekali.

Kita akan membuat sebuah kelas baru bernama "MobilSport" yang mewarisi atribut dan metode kelas Mobil dasar. Lalu, kita menambahkan metode baru, yaitu turbo untuk meningkatkan kecepatan sebesar 50.

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
    
    def tambah_kecepatan(self):
        self.kecepatan += 10


class MobilSport(Mobil):
    def turbo(self):
        self.kecepatan += 50

# Kelas Mobil Dasar
mobil_1 = Mobil("Merah", "AndreCar", 160)
print(mobil_1.kecepatan)

# Kelas Mobil Sport
mobil_sport_1 = MobilSport("Hitam", "AndreSportCar", 160)
print(mobil_sport_1.kecepatan)
mobil_sport_1.turbo()
print(mobil_sport_1.kecepatan)

"""
Output:
160
160
210
"""
```

Pada contoh di atas, kita membuat kelas baru bernama MobilSport yang mewarisi kelas sebelumnya, yaitu kelas Mobil. Mari fokus terlebih dahulu pada bagian kode berikut.

```python
class MobilSport(Mobil):
    def turbo(self):
        self.kecepatan += 50
```

Pada bagian kode tersebut, kita mendefinisikan kelas MobilSport dengan menambahkan parameter tambahan, yaitu kelas Mobil. Dengan demikian, kelas MobilSport akan mewarisi seluruh fitur dari kelas Mobil, seperti atribut warna, merek, kecepatan, dan sebagainya. 

Dalam kelas MobilSport, kita membuat object method baru, yaitu turbo untuk meningkatkan kecepatan mobil. Perhatikan bahwa dalam kelas tersebut, kita tidak perlu mendefinisikan kembali atribut sehingga parameter *self* akan merujuk pada atribut bawaan, yakni kelas Mobil.

Selanjutnya, pada bagian kode berikut.

```python
# Kelas Mobil Sport
mobil_sport_1 = MobilSport("Hitam", "AndreSportCar", 160)
print(mobil_sport_1.kecepatan)
mobil_sport_1.turbo()
print(mobil_sport_1.kecepatan)
```

Pada contoh di atas, kita memanggil kelas baru dan membuat objek bernama "mobil_sport_1". Perhatikan bahwa kita juga perlu menambahkan argumen sesuai atribut yang didefinisikan. 

Perintah "print()" pertama akan mencetak kecepatan mobil_sport_1 saat ini, yaitu 160, dan itu adalah nilai bawaan dari kelas mobil dasar. Lalu, kita memanggil metode baru yang telah dibuat, yaitu "**mobil_sport_1.turbo()**". Hal ini menyebabkan kita memanggil atribut kecepatan yang bertambah dari 160 menjadi 210 (bertambah 50).

Dengan melakukan pewarisan, Anda dengan mudah bisa menambahkan (*extend*) kemampuan dari suatu kelas dengan fitur yang dibuat sendiri.

### **Override**

Selanjutnya, seperti yang dijelaskan di awal, ketika kita membuat metode baru di kelas turunan (kelas baru) dengan nama yang sama seperti metode di kelas induk, itu akan menyebabkan metode baru menimpa (*override*) metode dari kelas induk.

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
    
    def tambah_kecepatan(self):     # tambah_kecepatan
        self.kecepatan += 10

class MobilSport(Mobil):
    def turbo(self):
        self.kecepatan += 50
    
    def tambah_kecepatan(self):     # tambah_kecepatan
        self.kecepatan += 20

# Kelas Mobil Sport
mobil_sport_1 = MobilSport("Hitam", "AndreSportCar", 160)
print(mobil_sport_1.kecepatan)
mobil_sport_1.tambah_kecepatan()     # Memanggil metode baru tambah kecepatan()
print(mobil_sport_1.kecepatan)

"""
Output:
160
180
"""
```

Pada contoh di atas, kita menambahkan metode baru bernama **tambah_kecepatan**. Metode ini juga ada di kelas mobil dasar. Namun, kita melakukan perbedaan pada metode baru ini berupa penambahan kecepatan yang awalnya sebesar 10 di kelas induk, menjadi sebesar 20 di kelas baru. Hasilnya, dapat kita lihat bahwa kecepatan kini bertambah 20 setiap kita memanggil metode `tambah_kecepatan()`.

Namun, perlu dipahami bahwa menimpa bukan berarti mengubah metode dari kelas induk. Hal ini karena metode dari kelas baru tersebut merupakan hasil dari pewarisan sehingga tidak akan mengubah metode dari kelas induk. Silakan tambahkan kode berikut ke program di atas pada bagian akhir kode (sebelum komentar output).

```python
# Kelas Mobil Dasar
mobil_1 = Mobil("Merah", "DicodingCar", 160)
print(mobil_1.kecepatan)
mobil_1.tambah_kecepatan()
print(mobil_1.kecepatan)
```

Anda akan melihat bahwa ketika kita membuat objek dari kelas dasar, lalu memanggil metode dari kelas dasar tersebut, program tetap menambah kecepatan sebesar 10 walaupun kita sudah melakukan overriding (menimpa) di kelas baru.

Saat Anda menjalankan program, Python akan mencari nama metode dengan nama yang sesuai di kelas baru terlebih dahulu. Jika tidak ada, nama akan dicari di kelas induk.

### **Super**

Lantas, bagaimana cara untuk kita ingin menggunakan metode atau atribut dari kelas induk, tetapi tidak ingin menuliskan ulang semua kode? Ini adalah tujuan dari adanya **super** dalam konsep OOP. Nama super sebenarnya merujuk pada kelas induk yang disebut juga sebagai **super class**. Kita bisa memanfaatkan konsep ini untuk menghindari kode berulang dan memanfaatkan fungsi yang sudah ada pada kelas induk (super class).

Mari kita lihat contohnya, kita akan menggunakan program yang sama seperti pada materi overriding. Namun, alih-alih menambah kecepatan, mari kita tambahkan teks baru berupa "Kecepatan Anda meningkat! Hati-Hati!".

```python
class Mobil:
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan
    
    def tambah_kecepatan(self):
        self.kecepatan += 10


class MobilSport(Mobil):
    def turbo(self):
        self.kecepatan += 50
    
    def tambah_kecepatan(self):
        super().tambah_kecepatan()
        print("Kecepatan Anda meningkat! Hati-Hati!")

# Kelas Mobil Sport
mobil_sport_1 = MobilSport("Hitam", "AndreSportCar", 160)
mobil_sport_1.tambah_kecepatan()     # Memanggil metode baru tambah kecepatan()
print(mobil_sport_1.kecepatan)

"""
Output:
Kecepatan Anda meningkat! Hati-hati!
170
"""
```

Pada contoh di atas, kita membuat kelas MobilSport sebagai kelas turunan dengan metode tambahan, yaitu tambah_kecepatan().

```python
  def tambah_kecepatan(self):
        super().tambah_kecepatan()
        print("Kecepatan Anda meningkat! Hati-Hati!")
```

Pada metode ini, kita menggunakan "super()" untuk mengambil metode tambah_kecepatan yang berasal dari super class atau induknya, yaitu kelas Mobil. Dengan begitu, program akan menjalankan metode tersebut dan di bawahnya kita menambahkan teks baru sesuai kebutuhan pada kelas turunan berupa "Kecepatan Anda meningkat! Hati-hati!".
