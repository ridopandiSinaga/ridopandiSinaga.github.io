---
title: Aksi Sekuensial
date: 2023-11-11
tags: [python, gdsc]
category: Python
layout: post
image: https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:846988f563c287badaed1f1342f543ba20230726105936.jpeg
---

## Pengenalan Aksi Sekuensial

Selama Anda mempelajari beberapa materi pertama kelas ini, Anda telah membuat banyak program sederhana. Namun, program yang Anda buat masih terdiri dari satu atau dua baris kode saja. Ke depannya, Anda akan membuat kode program yang tidak hanya terdiri dari satu baris, tetapi bisa banyak baris dan lebih kompleks. 

Kali ini, Anda akan mempelajari cara komputer menjalankan kode program yang kompleks dan memiliki banyak baris. Ini adalah modal dasar Anda untuk paham hal tersebut.

Dalam bahasa pemrograman Python, program yang Anda buat akan dijalankan secara sekuensial. Apa maksudnya? Kode yang Anda bangun akan berjalan sesuai dengan urutan perintahnya. Aksi sekuensial sendiri memiliki makna sebagai sederetan instruksi yang akan dijalankan oleh komputer berdasarkan urutan penulisannya.

Dengan kata lain, program yang Anda bangun haruslah memiliki awal dan akhir. Jadi, ketika program tersebut dijalankan, bisa diketahui waktu berakhirnya. Simak kode di bawah ini untuk melihat implementasinya.

```python
print("Selamat datang dalam program Python!\n")
print("Silakan masukkan data diri Anda.")
nama = input("Masukkan nama Anda: ")
tahun_lahir = input("Masukkan tahun lahir Anda: ")
umur = 2023 - int(tahun_lahir)
 
print(f"Selamat datang {nama} dalam program Python, per 2023 umur Anda adalah {umur} tahun.\n")
print("Terima kasih telah menggunakan program Python!")
 
"""
Output:
Selamat datang dalam program Python!
 
Silakan masukkan data diri Anda:
Masukkan nama Anda: Evans
Masukkan tahun lahir Anda: 2005
Selamat datang Evans dalam program Python, per 2023 umur Anda adalah 18 tahun.
 
Terima kasih telah menggunakan program Python!
"""
```

Untuk memaksimalkan contoh implementasi, silakan salin kode di atas dan jalankan menggunakan notebook atau IDE Anda. Mari bedah kode tersebut.
1. Komputer akan menjalankan kode pertama dengan menampilkan teks "Selamat datang dalam Program Python".
2. Setelah berhasil, kode kedua akan dijalankan dengan menampilkan teks "Silakan masukkan data diri Anda."
3. Lalu, kode ketiga akan dijalankan. Program akan meminta Anda memasukkan nama sembari memunculkan teks "Masukkan nama Anda: ". Input ini akan disimpan pada variabel bernama "nama".
4. Kemudian, kode keempat akan dijalankan. Program akan meminta Anda memasukkan tahun lahir sembari memunculkan teks "Masukkan tahun lahir Anda: ". Input ini akan disimpan pada variabel bernama tahun_lahir.
5. Setelah itu, variabel tahun_lahir akan dikalkulasikan untuk mengetahui umur Anda per tahun 2023. Hasil kalkulasi tersebut disimpan pada variabel umur.
6. Program akan memunculkan teks "Selamat datang {nama} dalam program Python, per 2023 umur Anda adalah {umur} tahun." Dengan {nama} dan {umur} merupakan nilai dari variabel dengan nama yang sama.
7. Program ditutup dengan memunculkan teks "Terima kasih telah menggunakan program Python!". 

Keseluruhan kode tersebut menggambarkan bahwa program akan dijalankan berdasarkan urutan perintahnya. Perlu diperhatikan bahwa terdapat program yang akan berubah hasilnya jika urutan baris instruksinya diubah. Ada juga program yang hasilnya TIDAK akan berubah jika urutan baris instruksinya diubah.

Mari kita pahami satu per satu. Simak kode di bawah ini untuk melihat contoh jika urutan baris diubah, TIDAK mengubah hasil eksekusi.

```python
a = 6
b = 9
 
result = a + b
print(result)
 
"""
Output:
15
"""
```

Program di atas merupakan kode sederhana untuk melakukan operasi penjumlahan antar variabel a dan b. Nilai dari variabel a adalah 6 dan nilai dari variabel b adalah 9. Hasil dari operasi tersebut akan disimpan pada variabel "result". 

Sekarang mari kita ubah urutan inisialisasi variabel.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:548af09091716e271f68f86098eaa68a20230804181053.jpeg)

Perhatikan bahwa urutan inisialisasi variabel a dan b sekarang diubah.

```python
b = 9
a = 6

result = a + b
print(result)

"""
Output:
15
"""
```

Program tersebut memunculkan hasil kalkulasi yang sama meskipun urutan inisialisasi variabel a dan b diubah.

Bagaimana dengan urutan instruksi yang mengubah hasil? Simak kode di bawah ini.

```python
a = 6
b = 9
 
print(a**2)
print(b//3)
 
"""
Output:
36
3
"""
```

Kode di atas akan menampilkan hasil kalkulasi variabel a dipangkatkan dengan 2 serta variabel b dibagi dengan 3. Selanjutnya, mari ubah urutan sintaks "print()".

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:783a5bb01e12bd45aad608d8f6f01ff720230804181054.jpeg)

Berikut adalah kodenya.

```python
a = 6
b = 9

print(b//3)
print(a**2)

"""
Output:
3
36
"""
```

Kode di atas merupakan program yang sama dengan kode sebelumnya. Namun, hasil yang didapat berbeda karena Anda mengubah urutan sintaks "print()". 

Sampai di sini Anda paham program yang akan mengubah hasil dan tidak akan mengubah hasil. Ini penting dipahami karena akan membantu menemukan kesalahan sintaks ketika Anda membuat program kompleks.

## Python Interpreter

Python termasuk bahasa pemrograman yang mudah dimengerti oleh manusia karena sintaksnya yang mudah dipahami. Tahukah Anda bahwa proses komputer menjalankan kode yang Anda bangun tidak sesederhana Anda memahaminya? 

Kode dari program Python yang Anda bangun akan ditransformasi menjadi kode yang mudah dimengerti oleh mesin menggunakan program compiler atau interpreter. Compiler merupakan program yang akan menerjemahkan bahasa pemrograman menjadi bahasa mesin sebelum dijalankan dan menghasilkan output. Ini artinya program yang Anda bangun secara keseluruhan akan diubah terlebih dahulu semuanya menjadi bahasa mesin. 

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:12d3fa7d9dfa77a2f504feb1129edb6120230807093615.jpeg)

Hal berbeda terjadi pada *interpreter*, yang akan menerjemahkan bahasa Python satu per satu dan menghasilkan output secara langsung. Hal ini memungkinkan Anda untuk melihat hasil program segera setelah satu baris kode dieksekusi hingga selesai. Implementasi interpreter ada pada mode interaktif Python. Anda dapat menjalankan satu atau dua lebih baris kode secara langsung dan melihat hasilnya.

Python memiliki aturan yang membantu Anda untuk menulis kode dengan baik dan benar. Guido van Rossum selaku pembuat bahasa Python merasa bahwa kode lebih sering dibaca dibandingkan ditulis. Dengan membuat kode yang baik dan benar akan memudahkan Anda untuk memahami kode bahkan membantu interpreter atau compiler berjalan dengan baik. 

### Block Code  

Sebuah program Python dapat berupa pernyataan atau statement, bisa juga terdiri atas blok kode. Sebuah blok merujuk pada potongan kode program Python yang dijalankan sebagai satu unit. Kode blok dapat berupa modul, fungsi, kelas, control flow, dan sebagainya. Tenang! Anda akan mempelajari istilah-istilah tadi lebih dalam pada materi-materi selanjutnya.

Kode di bawah merupakan contoh implementasi dari blok kode. Kode ini merupakan penerapan materi perulangan. Anda akan mempelajari lebih detail pada materi "Control Flow".

```python
for i in range(10):
    print(i)

"""
Output:
0
1
2
3
4
5
6
7
8
9
"""
```

Kode di atas merupakan satu unit kode blok perulangan yang akan mencetak angka 0 hingga 9. Perhatikan bahwa kode perulangan di atas juga melakukan aksi sekuensial, yakni setiap kode akan dijalankan lalu diulangi hingga kondisi akhir terpenuhi.

Mengapa memahami kode blok penting? Alasannya adalah Anda harus membuat kode yang mudah dimengerti oleh Anda dan orang lain sebagai seorang programmer. Selain itu, kode blok yang baik dan benar akan memudahkan interpreter atau compiler untuk berjalan dengan baik dan tidak menghasilkan error. 

Perhatikan dan jalankan kode di bawah ini.

```python
for i in range(10):
print(i)

"""
Output:
IndentationError: expected an indented block
"""
```

Kode blok di atas merupakan program yang sama dengan sebelumnya. Perbedaannya terletak pada indentasi kode blok tersebut. Program akan menghasilkan error karena interpreter akan menganggap bahwa kode "print(i)" merupakan bagian dari kode blok "for i in range(10)". Error dihasilkan karena harusnya terdapat indentasi (biasanya berupa empat spasi) sebelum kode "print(i)".

Python sangat memperhatikan indentasi karena hal tersebut tidak hanya membantu merapikan kode yang Anda bangun, tetapi juga menjelaskan satu kode blok secara utuh. Dengan indentasi, program akan mengetahui letak awal dan akhir sebuah blok kode. Ke depannya, Anda akan melihat sebuah fungsi, modul, dan kelas yang ada dalam Python juga dengan memperhatikan indentasi untuk menyatakan kode blok secara utuh.

### Case-sensitive

Python termasuk bahasa pemrograman *case-sensitive*. Ini artinya Python memperlakukan huruf besar dan kecil sebagai karakter yang berbeda dalam penamaan variabel, nama fungsi, atau penulisan kode secara umum.

Perhatikan kode di bawah ini untuk memahami maksud dari *case-sensitive*.

```python
teks = "Dicoding"
Teks = "Indonesia"

print(teks)
print(Teks)

"""
Output:
Dicoding
Indonesia
"""
```

Pada program di atas, Anda membuat dua variabel dengan nama "teks" dan "Teks". Python akan menganggap bahwa variabel tersebut berbeda, walaupun bagi kita sebagai manusia, mereka memiliki arti yang sama.

Bahkan jika Anda menambahkan sintaks "print()" untuk menampilkan variabel "TEks" seperti di bawah ini. Hasilnya akan menampilkan pesan Error.

```python
teks = "GDSC"
Teks = "USU"

print(teks)
print(Teks)
print(TEks)

"""
Output:
GDSC
USU
NameError: name 'TEks' is not defined
"""
```

Hal ini disebabkan variabel "teks", "Teks", dan "TEks" dianggap sebagai variabel yang berbeda oleh Python.

## One-liner

Selain membangun kode berdasarkan bloknya, Anda juga dapat membuat sebuah kode hanya dalam satu baris saja atau berupa *single statement*. Konsep ini dikenal sebagai *one-liner*. 

*One-liner* merupakan gaya penulisan pada Python yang memungkinkan Anda untuk membuat sebuah kode hanya dalam satu baris. *One-liner* adalah salah satu keunggulan dalam Python yang susah untuk diimplementasikan bagi beberapa bahasa pemrograman lainnya.

Tujuan dari *one-liner* ini adalah membuat satu baris kode yang singkat dan jelas. Perlu diingat bahwa tidak semua kode blok dapat dijadikan *one-liner*, seperti deklarasi fungsi, modul, dan kelas. 

Perhatikan kode di bawah ini yang merupakan program untuk menukar dua variabel menggunakan cara yang umum dilakukan.

```python
x = 1
y = 2

temp = x
x = y
y = temp

print("Setelah pertukaran: ")
print("x = ", x)
print("y =",  y)

"""
Output:
Setelah pertukaran: 
x = 2
y = 1
"""
```

Mari bedah kode tersebut.
1. Anda menginisialisasi variabel x dengan nilai 1 dan variabel y dengan nilai 2. 
2. Anda menginisialisasi variabel temp dengan nilainya adalah variabel x. Hal ini menyebabkan variabel temp memiliki nilai 1. 
3. Anda menginisialisasi variabel x dengan nilai baru, yakni variabel y. Hal ini menyebabkan nilai dari variabel x menjadi 2.
4. Anda menginisialisasi variabel y dengan nilai baru, yakni variabel temp. Hal ini menyebabkan nilai dari variabel y menjadi 1.
5. Proses penukaran variabel telah selesai. Selanjutnya, Anda menampilkan nilai pada variabel tersebut dengan sintaks "print()".


Mungkin Anda bertanya, mengapa variabel x dan y bisa berubah? Ingat konsep aksi sekuensial, program akan menjalankan kode tersebut baris per baris. Jadi, nilai dari variabel x dan y setelah inisialisasi pertama akan berubah karena pada sintaks berikutnya Anda menetapkan nilai baru pada variabel x dan y. Anda menggunakan variabel bantuan, yakni variabel "temp" untuk menyimpan nilai awal dari variabel x. 

Mari buat gambaran tersebut lebih sederhana dengan menggunakan contoh dalam kehidupan sehari-hari. Simak analogi berikut.

Di bawah ini terdapat tiga gelas kosong yang akan diisi dengan kelereng. Anda bisa asumsikan gelas dengan variabel x disebut sebagai gelas x dan seterusnya.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:d60c9bc7023030202700e34fc3b2900520230807143127.jpeg)

Selanjutnya, perhatikan gambar bergerak (GIF) berikut.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:7cc181bfb154ca0d07ecea461cea49fb20230807143226.gif)

Mari kita bedah langkahnya satu per satu.
1. Langkah pertama, gelas x diisi dengan 1 kelereng dan gelas y diisi dengan 2 kelereng; sedangkan, gelas temp kosong.
2. Langkah kedua, kelereng dari gelas x dipindahkan ke gelas temp. Hal ini menyebabkan gelas temp terisi 1 kelereng, sedangkan gelas x menjadi kosong.
3. Langkah ketiga, akibat gelas x kosong, Anda memindahkan 2 kelereng yang berada pada gelas y ke gelas x. Hal ini menyebabkan gelas y menjadi kosong.
4. Langkah keempat,  gelas y kosong sehingga kelereng yang berada pada gelas temp dipindahkan ke gelas y.

Dengan begitu, Anda telah memindahkan posisi kelereng pada gelas x dan gelas y.

Phew, cukup memakan tenaga, ya. Namun, tahukah Anda kalau ada kode one-liner yang dapat memudahkan Anda untuk melakukan operasi menukar dua variabel ini? Berikut adalah kodenya.

```python
x = 1
y = 2

x, y = y, x    # One-liner

print('Setelah pertukaran: ')
print('x =', x)
print('y =', y)



"""
Output:
Setelah pertukaran: 
x = 2
y = 1
"""
```

Kode di atas memiliki tujuan yang sama dengan kode sebelumnya, yakni menukar dua variabel. Namun, pada kode program di atas, Anda menggunakan teknik *one-liner* untuk melakukan operasi tersebut. 

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:8eb35fda178c21fc1f89c6da95e9172b20230807143127.jpeg)

Pada kode di atas, Anda seolah-olah menginisialisasikan ulang variabel x dengan nilai variabel y di sebelah kanan. Anda juga menginisialisasikan ulang variabel y dengan nilai variabel x yang ada di sebelah kanan. Sederhana, bukan? Dengan menginisialisasikan ulang variabel masing-masing, nilai tersebut pada akhirnya bisa saling bertukar.

Hal yang Anda pelajari sekarang merupakan salah satu penerapan *one-liner*. Ke depannya banyak sekali materi pada Python yang memiliki versi *one-liner*-nya. Anda dapat membaca penjelasan detail mengenai *one-liner* pada link[ berikut](https://wiki.python.org/moin/Powerful%20Python%20One-Liners).

Okay selesai sudah modul ini, kita bakal lanjut ke modul **Control Flow** ya.
