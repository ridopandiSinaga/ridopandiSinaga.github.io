---
title: Ekspresi
date: 2023-11-11
tags: [python, gdsc]
category: Python
layout: post
#  image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Pengertian Ekspresi

Phew, setelah melewati pembahasan tipe data yang sangat komprehensif, Anda memiliki bekal cukup untuk membuat program dan belajar pada modul-modul berikutnya. 

Salah satunya adalah materi ekspresi kali ini. Data yang Anda simpan pada suatu variabel umumnya akan dioperasikan untuk menghasilkan suatu nilai sesuai keinginan. Masih ingat ekspresi pada matematika? Ekspresi pada matematika adalah kombinasi dari simbol-simbol matematika, seperti angka, variabel, operasi matematika, dan sebagainya. Contohnya seperti pada gambar berikut.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a6e426ba67b8d475da61f244c85004a420230727181406.jpeg)

Pada gambar di atas, "4x-7" merupakan ekspresi, sedangkan "4x", "7", dan "5" merupakan suku bilangan. Apabila kita mengingat kembali, operasi pada matematika ataupun pemrograman merupakan suatu proses yang dilakukan untuk mendapatkan hasil nilai tertentu.

Lalu, apa itu ekspresi dalam pemrograman? Ekspresi pada pemrograman merupakan kombinasi dari satu atau lebih variabel, konstanta, operator, dan fungsi yang bermakna untuk menghasilkan suatu nilai dalam suatu tipe tertentu.

Struktur umum ekspresi yang sering dijumpai adalah <operan1> <operator> <operan2>. Namun, perlu Anda ketahui bahwa struktur umum tersebut merupakan struktur ekspresi biner (jenis ekspresi menggunakan dua operan). Mari bedah struktur tersebut lebih dalam.
1. Operan dapat berupa nilai, variabel, konstanta, atau ekspresi lain.
2. Operator merupakan suatu fungsi standar yang disediakan dalam bahasa pemrograman untuk melakukan beberapa hal dasar, seperti perhitungan aritmetika, logika, dan relasional. Contohnya adalah penjumlahan (+), pengurangan (-), perkalian (*), modulus (%), dan sebagainya.

Di bawah ini, penerapan ekspresi pada Python.

```python
x = 10
y = 2
result = x - y

print(result)

"""
Output:
8
"""
```

Lantas, mengapa kita harus paham terlebih dahulu mengenai ekspresi? Sebab, ini merupakan dasar dalam pemrograman untuk melakukan semua perhitungan dan manipulasi data. 

Salah satunya adalah melakukan penggabungan dan replikasi pada list.

```python
angka = [2, 4, 6, 8]
huruf = ['P', 'Y', 'T', 'H', 'O', 'N']
gabung = angka + huruf

print(gabung)

"""
Output:
[2, 4, 6, 8, 'P', 'Y', 'T', 'H', 'O', 'N']
"""
```

Pada kode di atas, Anda menggabungkan dua list dengan menggunakan operator penjumlahan (+). Namun, pada kode di bawah ini, Anda mereplikasi list dengan menggunakan operator perkalian (*).

```python
learn = ['P', 'Y', 'T', 'H', 'O', 'N']
replikasi = learn * 2

print(replikasi)

"""
Output:
['P', 'Y', 'T', 'H', 'O', 'N', 'P', 'Y', 'T', 'H', 'O', 'N']
"""
```

Pada kedua kode di atas, Anda telah melakukan operasi replikasi dan duplikasi pada list menggunakan ekspresi. Sekarang, mari kita pelajari lebih dalam mengenai berbagai jenis ekspresi.

## Jenis-Jenis Ekspresi

Pada dasarnya, jenis-jenis ekspresi dibagi menjadi dua. Pertama adalah menurut jumlah operan (*arity*) dari operator dan kedua adalah menurut tipe data yang dihasilkan.

### Ekspresi Menurut Arity dari Operator

| Jenis | Contoh                           |
|-------|----------------------------------|
| Biner | (x + y), (x - y), (x * y),       |
|       | (x / y), (x ** y), (x < y),      |
|       | (x <= y), (x > y), (x >= y),    |
|       | (x % y), (x == y), (x != y).    |
| Uner  | (x += 1), (x-=1), (not x)        |


Ekspresi biner merupakan jenis yang memiliki dua operan. Operatornya meliputi penjumlahan (+), pengurangan (-), perkalian (*), pembagian (/), perpangkatan (**), lebih kecil dari (<), lebih kecil dari sama dengan (<=), lebih besar dari (>), lebih besar dari sama dengan (>=), modulus (%), sama dengan (==), dan tidak sama dengan (!=).

Namun, ekspresi uner adalah jenis ekspresi yang memiliki bentuk dasar operasi dengan satu operan. Contohnya adalah *increment* (x+=1), *decrement* (x-=1), dan negasi (not x).

Anda sudah melihat penerapan ekspresi biner pada submodul sebelumnya dan berikut adalah penerapan ekspresi uner.

```python
a = True
a = not a
print(a)

b = 6
b -= 1
print(b)

c = 6
c += 1
print(c)

d = 10
print(-d)

"""
Output:
False
5
7
-10
"""
```

Mari kita bedah satu persatu kode di atas.
1. Variabel a bernilai True, jika kita memberikan ekspresi "not a" yang artinya "not True", hasil yang didapat adalah False. 
2. Baik *increment* maupun *decrement*, keduanya adalah pola yang sama untuk menambahkan dan mengurangi suatu variabel dengan jumlah tetap.
   1. a += 1 memiliki tujuan yang sama dengan struktur a = a + 1. Jika diasumsikan variabel a bernilai 1, seolah-olah kita melakukan operasi penjumlahan "1+1". Inilah alasan ia disebut dengan *increment* yang artinya kenaikan.
   2. *Decrement* dapat dijelaskan sebagai a -=1, memiliki tujuan yang sama dengan struktur a = a - 1. Jika diasumsikan variabel a bernilai 1, seolah-olah kita melakukan operasi pengurangan "1-1".

Penjelasan lebih detail mengenai operator akan kita bahas pada materi selanjutnya. Saat ini mari kita lanjut membahas ekspresi menurut tipe data yang dihasilkan.

### Ekspresi Menurut Tipe Data yang Dihasilkan

| Jenis                | Contoh                                |
|----------------------|---------------------------------------|
| Ekspresi aritmetika  | `<numerik> <operator> <numerik> = <numerik>`<br>2 + 2 = 4, 2 - 2 = 0                |
| Ekspresi relasional  | `<numerik> <operator> <numerik> = <boolean>`<br>3 < 10 = True, 1 > 10 = False         |
| Ekspresi logika      | `<boolean> <operator> <boolean> = <boolean>`<br>True or False = True

Sebagaimana judulnya, jenis-jenis ini adalah ekspresi yang dikelompokkan berdasarkan tipe data yang dihasilkan. Mari kita bedah satu per satu.
1. Ekspresi aritmetika: jenis ekspresi yang memiliki **operan bertipe numerik** dan menghasilkan **numerik**.
2. Ekspresi relasional: jenis ekspresi yang memiliki **operan bertipe numerik** dan menghasilkan nilai* boolean/logika*.
3. Ekspresi logika: jenis ekspresi yang memiliki **operan bertipe boolean/logika** dan menghasilkan nilai **boolean/logika**.  
  
```python
print(2+2)
print(3<10)
print(True or False)

"""
Output:
4
True
True
"""        
```

Pada kode di atas, kita melakukan operasi dengan melibatkan ekspresi aritmetika, ekspresi relasional, dan ekspresi logika. Pada ekspresi aritmetika, "2+2" menghasilkan nilai "4". Pada ekspresi relasional, "3<10" menghasilkan nilai True; tentu kita tahu bahwa tiga termasuk bilangan yang kurang dari sepuluh. Pada ekspresi logika "True or False" menghasilkan nilai True, ini merupakan gerbang logika pada dunia pemrograman. Anda akan mempelajari lebih detail pada materi operator logika.

## Jenis-Jenis Operator

Selain ekspresi dengan beragam jenis, operator pun memiliki berbagai jenis yang dikelompokkan menjadi operator aritmetika, operator relational, operator logika, dan operator *assignment*.

### Operator Aritmetika

Jenis pertama adalah operator untuk melakukan operasi aritmetika. Perhatikan tabel di bawah ini untuk memahami contoh penerapan operator aritmetika. **Asumsikan x bernilai 11 dan y bernilai 5**.

| Operator    | Deskripsi                                            | Contoh         |
|-------------|------------------------------------------------------|----------------|
| Penjumlahan | Menambahkan nilai dari kedua operan.                 | x + y = 16     |
| Pengurangan | Mengurangi nilai dari kedua operan.                 | x - y = 6      |
| Perkalian   | Mengalikan nilai dari kedua operan.                 | x * y = 55     |
| Pembagian Bulat | Membagi nilai dari kedua operan. Jika operan adalah integer, hasil operasi adalah bilangan bulat. | x // y = 2     |
| Pembagian Riil  | Membagi nilai dari kedua operan. Jika operan adalah float, hasil operasi adalah bilangan riil. | x / y = 2.2    |
| Modulo      | Sisa hasil pembagian nilai dari dua operan.         | x % y = 1      |
| Pangkat     | Memangkatkan nilai dari dua operan.                 | x ** y = 161051|

Semua operator aritmetika di atas adalah jenis untuk melakukan operasi aritmetika yang sering dijumpai. Mari lihat penerapannya pada Python.

```python
x = 11
y = 5

print(x + y)
print(x - y)
print(x * y)
print(x // y)
print(x / y)
print(x % y)
print(x ** y)

"""
Output:

16
6
55
2
2.2
1
161051
"""
```

Pada kode di atas, Anda telah menerapkan seluruh operasi menggunakan operator aritmetika. Jika kita lihat lebih detail, seluruh output tersebut memiliki hasil yang sama dengan tabel sebelumnya.

### Operator Relasional 

Operator relasional merupakan operator perbandingan antara dua operan yang berupa integer, float, string, ataupun boolean. Hasil akhir dari operator ini adalah nilai bertipe boolean. Perhatikan tabel di bawah untuk memahami contoh penerapan operator relasional. **Asumsikan kedua variabel bertipe numerik atau float dengan x bernilai 5 dan y bernilai 10**.

| Operator             | Deskripsi                                                | Contoh        |
|----------------------|----------------------------------------------------------|---------------|
| Sama dengan (==)     | Menghasilkan True, jika kedua operan bernilai sama.       | x == y, menghasilkan False. |
| Tidak Sama dengan (!=)| Menghasilkan True, jika kedua operan tidak bernilai sama.  | x != y, menghasilkan True.  |
| Lebih Besar dari (>)  | Menghasilkan True, jika operan kiri lebih besar dari operan kanan. | x > y, menghasilkan False. |
| Kurang dari (<)       | Menghasilkan True, jika operan kanan lebih besar dari operan kiri. | x < y, menghasilkan True.  |
| Lebih Besar dari Sama dengan (>=) | Menghasilkan True, jika operan kiri lebih besar atau sama dengan operan kanan. | x >= y, menghasilkan False. |
| Kurang dari Sama dengan (<=)      | Menghasilkan True, jika operan kanan lebih besar atau sama dengan operan kiri. | x <= y, menghasilkan True.  |

Pada dasarnya, ini adalah operator yang membandingkan dua nilai dengan hasil akhir bertipe boolean. Mari lihat penerapannya pada Python.

```python
x = 5
y = 10

print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)

"""
Output:

False
True
False
True
False
True
"""
```

Pada kode di atas, Anda telah menerapkan seluruh operasi menggunakan operator relasional. Jika kita lihat lebih detail, seluruh output tersebut memiliki hasil yang sama dengan tabel sebelumnya. Sebagaimana telah dijelaskan sebelumnya, operator relasional dapat menggunakan operan bertipe integer, string, ataupun float. Kode di atas telah menggunakan operan bertipe integer, Anda juga bisa mengubahnya dengan operan bertipe float. 

Namun, berbeda halnya dengan operan bertipe string. Anda dapat melihat tabel di bawah untuk contoh penerapannya. **Asumsikan x bernilai "GDSC" dan y bernilai "USU"**.

| Operator             | Deskripsi                                                      | Contoh        |
|----------------------|----------------------------------------------------------------|---------------|
| Sama dengan (==)     | Menghasilkan True, jika kedua string memiliki nilai yang identik/sama persis. | x == y, menghasilkan False. |
| Tidak Sama dengan (!=)| Menghasilkan True, jika kedua string memiliki nilai yang tidak sama. | x != y, menghasilkan True.  |
| Lebih Besar dari (>)  | Menghasilkan True, jika huruf pertama pada string pertama lebih BESAR dari huruf pertama pada string kedua dalam urutan alfabet. | x > y, menghasilkan False. |
| Kurang dari (<)       | Menghasilkan True, jika huruf pertama pada string pertama lebih KECIL dari huruf pertama pada string kedua dalam urutan alfabet. | x < y, menghasilkan True.  |
| Lebih Besar dari Sama dengan (>=) | Menghasilkan True, jika huruf pertama pada string pertama lebih besar atau sama dengan dari huruf pertama pada string kedua dalam urutan alfabet. | x >= y, menghasilkan False. |
| Kurang dari Sama dengan (<=)      | Menghasilkan True, jika huruf pertama pada string pertama lebih kecil atau sama dengan dari huruf pertama pada string kedua dalam urutan alfabet. | x <= y, menghasilkan True.  |

Mari lihat implementasinya pada contoh kode di bawah ini.

```python
x = "GDSC"
y = "USU"

print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)

"""
Output:

False
True
False
True
False
True
"""
```

Perhatikan kode di atas, string "GDSC" dan "USU" tidak sama sehingga sintaks operator sama dengan "==" menghasilkan nilai False, sedangkan operator tidak sama dengan "!=" menghasilkan nilai True. Operator sisanya akan membandingkan huruf G pada string "GDSC" dan huruf U pada string "USU". Anda bisa mencoba mengganti huruf pertama tersebut untuk memahami lebih detail.


### Operator Logika

Operator logika merupakan jenis operator untuk melakukan operasi logika dengan kedua operannya bertipe boolean. Hasil akhir dari operasi ini adalah nilai bertipe boolean. Perhatikan kode di bawah ini untuk memahami contoh penerapannya,**asumsikan bahwa p bernilai True dan q bernilai False**.

| Operator    | Deskripsi                                                      | Contoh             |
|-------------|----------------------------------------------------------------|--------------------|
| "AND" atau "&" | Logika yang hanya menghasilkan True jika kedua operan bernilai True. | p and q = False, p & q = False |
| "OR" atau "\|"  | Logika yang menghasilkan True jika salah satu dari kedua operan bernilai True. | p or q = True, p | q = True   |
| NOT             | Logika yang bertujuan untuk membalikkan nilai logika dari operannya. | not q = True      |

Jenis operator ini membandingkan dua operan bertipe boolean. Perhatikan gambar ini untuk memahaminya lebih dalam.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:559e28c4cf3b9c694a2c0122a88ca1b620230728090557.jpeg)

Operator AND hanya akan menghasilkan nilai True jika kedua operannya bernilai True. Operator OR akan menghasilkan nilai True jika salah satunya bernilai True. Operator NOT hanya akan membalikkan nilai logika; jika True, False yang akan dikembalikan, begitupun sebaliknya.  

Mari kita bedah satu per satu jenis operator di atas.

### Operator AND

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a4e7715072de241440547eb483c7d4e620230728090557.jpeg)

Pada tabel di atas, operator AND hanya akan menghasilkan nilai TRUE jika kedua operan, yakni P dan Q bernilai TRUE. Sisanya akan menghasilkan nilai FALSE. Mari lihat penerapannya pada Python.

```python
print(True and True)
print(True and False)
print(False and True)
print(False and False)


"""
Output:

True
False
False
False
"""
```

Pada kode di atas, Anda menerapkan seluruh contoh yang ada pada tabel sebelumnya menjadi program Python. Dapat dilihat bahwa hanya jika kedua operan bernilai True yang menghasilkan nilai True.

### Operator OR

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:65391a944424685ffa4b11fb5fda1aa320230728090557.jpeg)

Pada tabel di atas, operator OR akan menghasilkan nilai TRUE jika salah satu atau kedua operan (yakni P atau Q) bernilai True. Mari lihat penerapannya pada Python.

```python
print(True or True)
print(True or False)
print(False or True)
print(False or False)


"""
Output:

True
True
True
False
"""
```

Pada kode di atas, Anda menerapkan seluruh contoh yang ada pada tabel sebelumnya menjadi program Python. Dapat dilihat bahwa jika salah satu atau kedua operan bernilai True, hasil akhirnya bernilai True.

### Operator NOT

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:7098dc791e8ae1734bf7094c8104be7620230728090556.jpeg)

Pada tabel di atas, operator NOT akan membalikkan nilai boolean dari operan aslinya atau disebut sebagai negasi. Mari lihat penerapannya pada Python.

```python
print(not True)
print(not False)

"""
Output:

False
True
"""
```

Pada kode di atas, Anda menerapkan seluruh contoh yang ada pada tabel sebelumnya menjadi program Python. Dapat dilihat bahwa jika operan bernilai True, hasilnya False dan sebaliknya.

### Operator Assignment

Operator selanjutnya adalah assignment. Operator ini bertujuan untuk melakukan proses assignment atau pemberian nilai pada suatu variabel dengan nilai tetap. Perhatikan tabel di bawah ini untuk memahami contoh penerapan operator assignment. **Asumsikan x bernilai 11 dan y bernilai 5.**

| Operator | Deskripsi                                       | Contoh                 |
|----------|-------------------------------------------------|------------------------|
| +=       | Menyederhanakan operasi `x = x + y`.           | `x += y`, menghasilkan nilai 16.  |
| -=       | Menyederhanakan operasi `x = x - y`.           | `x -= y`, menghasilkan nilai 6.   |
| *=       | Menyederhanakan operasi `x = x * y`.           | `x *= y`, menghasilkan nilai 55.  |
| /=       | Menyederhanakan operasi `x = x / y`.           | `x /= y`, menghasilkan nilai 2.2. |
| %=       | Menyederhanakan operasi `x = x % y`.           | `x %= y`, menghasilkan nilai 1.  |

Sederhananya, seluruh operator di atas setara dengan x = x <operator> y. Biasanya, Anda akan sering menjumpai operator assignment ini pada perulangan (Anda akan mempelajarinya nanti). Perulangan pada pemrograman berarti Anda membuat sebuah program yang akan terus berulang hingga berakhir karena suatu kondisi. Salah satu caranya agar dapat terus berulang adalah dengan menambahkan operator assignment. 

Mari lihat penerapannya pada Python.

```python
# +=
x = 11
x += 5
print(x)

# -=
x = 11
x -= 5
print(x)

# *=
x = 11
x *= 5
print(x)

# /=
x = 11
x /= 5
print(x)

#%=
x = 11
x%= 5
print(x)


"""
Output:
16
6
55
2.2
1
"""
```

Dalam kode di atas, Anda menerapkan seluruh contoh yang ada pada tabel sebelumnya menjadi program Python. Masih bingung? Mari lihat salah satu kode di atas dan bedah lebih dalam.

```python
x = 11
x += 5
print(x)


x = 11
x = x + 5
print(x)

"""
Output:
16
16
"""
```

Kode "x += 5" setara dengan "x = x + 5". Asumsikan x bernilai 11, hasil yang didapat dari kedua kode di atas adalah 16. Seolah-olah Anda melakukan operasi seperti berikut: "x = 11 + 5".

Okay sekian dulu tentang Ekspresi pada python, kita lanjut ke modul Aksi Sekuensial ya.
