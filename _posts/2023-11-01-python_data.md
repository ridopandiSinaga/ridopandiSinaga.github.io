---
title: Berinteraksi dengan Data
date: 2023-11-01
tags: [python, gdsc]
category: Python
layout: post
#  image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Data Typing

Sebelum memahami berbagai tipe data yang umum digunakan dalam Python, Anda harus mengenal terlebih dahulu cara menuliskan data dalam pemrograman.

### Deklarasi dan Inisialisasi

Deklarasi merujuk pada pembuatan variabel dengan menentukan tipe data dan nama variabelnya. Umumnya, ini dilakukan oleh bahasa pemrograman lainnya, seperti C/C++. Contohnya berikut.

```python
int age;
float salary;
```

Sementara inisialisasi merujuk kepada pemberian nilai awal pada variabel yang sebelumnya telah dideklarasikan. Berikut contohnya jika menggunakan bahasa pemrograman C/C++.

```python
int age = 17;
float salary = 5000000;
```

Kedua proses tersebut wajib dilakukan dalam bahasa pemrograman lain, seperti C. Beruntungnya Anda, Python tidak mengharuskan Anda untuk melakukan deklarasi tipe data variabel. Hal ini disebabkan Python merupakan bahasa pemrograman yang menerapkan loosely typed. Artinya, Anda tidak perlu mendeklarasikan tipe data variabel secara eksplisit.

Kode C sebelumnya jika diubah ke dalam Python akan menjadi seperti berikut.

```python
age = 17
salary = 5000000.0

print(type(age))
print(type(salary))

"""
Output:
<class ‘int’>
<class ‘float’>
"""
```

Python juga merupakan bahasa pemrograman yang menerapkan dynamic typing. Artinya, Python adalah bahasa pemrograman yang hanya mengetahui tipe variabel saat program berjalan dan melakukan proses assignment. Hal ini memungkinkan kita untuk mengubah tipe data dari suatu variabel seiring berjalannya program.

```python
x = 6
print(type(x))

x = "6"
print(type(x))



"""
Output:
<class ‘int’>
<class ‘str’>
"""
```

Pada kode di atas, variabel yang digunakan sama-sama bernama “x”, tetapi yang pertama “x” bertipe integer, sedangkan yang kedua bertipe string. 

Sekarang Anda paham cara mendeklarasikan variabel dan cara Python bekerja dengan tipe data. Selanjutnya, mari kita pelajari berbagai tipe data pada Python.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:50ea5ade4b7a324f98db1f64ca799a1920230727091703.jpeg)

Sekarang, mari kita bedah data yang dapat diambil dan diimplementasikan dengan pemrograman. Beberapa data tersebut antara lain berikut.
1. **Umur**
Data umur dibentuk dari kumpulan angka. Dalam pemrograman, tipe data ini adalah `numbers` yang memiliki berbagai jenis. Perlu Anda ingat bahwa data umur tentu memiliki rentang, misalnya 1 sampai 100, bila kita asumsikan bahwa umur seseorang tidak lebih dari 100.
2. **Nama**
Data nama dibentuk dari serangkaian huruf. Dalam pemrograman, tipe data ini adalah `string`. Perlu diketahui juga bahwa data nama memiliki rentang jumlah huruf. Rentang data nama adalah 1 sampai 50 huruf, bila kita asumsikan bahwa tidak ada nama yang melebihi 50 huruf.
3. **Berat Badan**
Data berat badan dibentuk dari kumpulan angka, sama seperti data umur.
4.**Keputusan Memakai Jas Hujan**
Keputusan memakai jas hujan juga merupakan data. Dalam pemrograman, ini adalah data `boolean` yang merupakan tipe data dengan hanya dua kemungkinan, yakni *True* dan *False*. Dalam kisah di atas, keputusan Evans hanya ada dua, yakni jika hujan benar-benar terjadi (bernilai True), ia akan memakai jas hujan, sedangkan jika hujan tidak terjadi (bernilai False), ia tidak akan memakai jas hujan.

Dapatkah Anda menemukan data lainnya? Silakan telaah kembali untuk mengasah kemampuan Anda dalam menganalisis.

Sekarang mari kita fokus terhadap berbagai tipe data pada Python. Dalam Python, tipe data dikelompokkan menjadi dua, yakni tipe data **primitif** dan tipe **data collection.**

### Tipe Data Primitif

Tipe data primitif merupakan jenis paling dasar dalam pemrograman. Tipe data ini menyimpan *single value*. Berikut adalah berbagai tipe data primitif.

#### Numbers

| Tipe Data | Keterangan                                               | Contoh                           |
|-----------|----------------------------------------------------------|----------------------------------|
| Integer   | Bilangan bulat positif atau negatif, tanpa desimal       | 1; -20; 999; 0                   |
| Float     | Bilangan riil yang dapat mewakili bilangan bulat atau desimal | 3.14; 1; 4.01E+1                 |
| Complex   | Bilangan kompleks (tidak digunakan dalam kelas ini)       | 1+2j                             |

Tipe data primitif pertama, yakni *numbers* adalah tipe data angka berupa bilangan bulat, riil, dan kompleks.

Tipe data integer merupakan bilangan bulat positif atau negatif dan tidak memiliki angka desimal. Selanjutnya, tipe data float merupakan bilangan riil yang mewakili bilangan bulat dan angka desimal. Terakhir, tipe data complex yang merupakan representasi dari bilangan kompleks dalam matematika. Tipe data complex terdiri dari bilangan riil dan imajiner dengan bentuk “x +yj”, yaitu “x” adalah bilangan riil dan “y” adalah bilangan imajiner. 

Ciri dari bilangan numbers adalah Anda dapat mengoperasikan bilangan tersebut dengan operasi matematika sederhana, seperti pertambahan (+), pengurangan (-), perkalian (*), dan operasi matematika lainnya.

Berikut adalah implementasi tipe data numbers ke dalam Python.

```python
x = 6
print(type(x))

x = 6.0
print(type(x))

x = 1+2j
print(type(x))


"""
Output:
<class 'int'>
<class 'float'>
<class 'complex'>
"""
```

Perlu diperhatikan bahwa tipe data numbers bersifat immutable yang artinya nilai di dalamnya tidak dapat diubah. Mari lihat contoh di bawah ini.

```python
var = 10
print(var)
print(id(var))
var = 11
print(var)
print(id(var))

"""
Output:
10
<memory address>
11
<memory address>
"""
```

Pada contoh sebelumnya, kita mencoba mengganti tipe data numbers dengan menginisialisasi ulang variabel. Namun, ternyata ini bukanlah proses mengubah nilai variabel. Lebih tepatnya, proses ini dapat dianggap sebagai pembuatan objek baru dengan nilai baru. Ingat kembali apa yang dimaksud dengan variabel? Variabel adalah lokasi dalam komputer yang digunakan untuk menyimpan nilai dengan tipe data tertentu.

Ketika menjalankan program di atas, Anda dapat melihat alamat memori (memory address) dari variabel "var" yang pertama dan kedua menggunakan fungsi "id()". Jika Anda menjalankan kode berulang kali, Anda akan melihat bahwa alamat tersebut terus berubah dengan nilai yang berbeda.

Fenomena ini membuktikan secara alami bahwa integer atau numbers bersifat immutable. Sebagai contoh, nilai integer pada contoh di atas tidak diperbarui; sebaliknya, nilai tersebut tetap sama karena kita masih dapat melihatnya dengan menggunakan nama variabel yang sama.

Penting untuk dicatat bahwa semua tipe data primitif atau single-value (numbers, boolean, string) dapat dianggap immutable secara alami. Banyak programmer mungkin beranggapan bahwa dengan menginisialisasi ulang variabel dalam Python, nilai dapat diperbarui atau diubah. Namun, pada kenyataannya, tindakan tersebut membuat program membuat objek baru dengan nilai baru, bukan mengubah nilai yang ada.

#### Boolean

| Nilai | Keterangan     |
|-------|----------------|
| True  | Bernilai benar |
| False | Bernilai salah |

Tipe data primitif kedua adalah boolean, yakni tipe data yang hanya bernilai TRUE atau FALSE. Tipe data ini merepresentasikan nilai kebenaran (*truth values*). Sebenarnya, setiap variabel yang memiliki nilai bisa dievaluasi dan menghasilkan nilai *true*. Hanya ada beberapa nilai yang akan dianggap bernilai *false* sebagai berikut.
1. Nilai yang sudah didefinisikan bernilai salah: **None** dan **False**.
2. Angka nol dari semua tipe numerik: **0, 0.0, 0j, Decimal(0), Fraction(0,1)**.
3. Urutan (*sequence*) dan koleksi (*collection*) yang kosong: **“”, (), {}, set(), range(0)**.

```python
x = True
print(type(x))

x = False
print(type(x))

"""
Output:
<class 'bool'>
<class 'bool'>
"""
```

Dari kode di atas dapat Anda pahami bahwa nilai True dan False merupakan data bertipe boolean. 

#### String

String merupakan karakter yang berurutan. Ketika Anda membuat variabel bernilai string tentu diawali dengan *single quote* (‘’) atau *double quote* (“”). Jalankan kode di bawah ini untuk mengetahui contoh tipe data string.

```python
x = 'gdsc'
print(type(x))

"""
Output: 
<class 'str'>
"""
```

Variabel x yang menyimpan teks "gdsc" adalah variabel dengan data bertipe string. Sederhananya, teks "gdsc" tersebut adalah string.

Beberapa fakta menarik lainnya dari string Python adalah berikut.
1. Anda dapat menggunakan tiga *single quote* atau *double quote* untuk menyimpan string yang lebih dari satu baris (*multi-line)*.

    ```python
    multi_line = """Halo!
    Kapan terakhir kali kita bertemu?
    Kita bertemu hari Sabtu yang lalu."""

    print(multi_line)

    """
    Output:
    Halo!
    Kapan terakhir kali kita bertemu?
    Kita bertemu hari Sabtu yang lalu.
    """
    ```

    Pada kode di atas, Anda menampilkan string lebih dari satu baris (*multi-line*) menggunakan *double quote* (”””).

2. String merupakan urutan karakter yang setiap karakternya memiliki indeks. Anda dapat mengakses setiap karakter dari string (substring) dengan menggunakan metode *indexing*. Perlu diingat bahwa indeks selalu dimulai dari 0.

    ```python
    x = 'gdsc'
    print(x[0])

    """ 
    Output:
    g
    """
    ```

    Pada kode di atas, diambil indeks ke-0 dari string gdsc yakni huruf “g”. Metode indexing merupakan cara untuk mengambil suatu indeks berdasarkan indeksnya.

3. Namun, Anda tidak dapat mengubah substring di dalamnya. Ini dikarenakan string pada Python bersifat immutable.

    ```python
    x = 'gdsc'
    x[0] = 'F'

    """ 
    Output:
    TypeError: 'str' object does not support item assignment
    """
    ```

    Pada kode di atas, diambil indeks ke-0 dari string “gdsc”, yakni huruf “g” dan digantikan dengan huruf “F”. Namun, kode tersebut menghasilkan error dikarenakan string bersifat immutable yang artinya tidak dapat diubah.

4. Anda dapat mengakses beberapa substring dengan menggunakan metode *indexing* dan *slicing*.

    ```python
    x = 'gdsc usu'
    print(x[2:])

    """
    Output:
    sc usu
    """
    ```

    Pada kode di atas, diambil substring dari indeks ke-2 hingga indeks terakhir dengan menggunakan metode *slicing*. Metode *slicing* adalah cara yang sering digunakan untuk mendapatkan bagian dari suatu list atau array. Metode ini dapat diterapkan pada string untuk mengambil satu atau banyak substring. Kita akan mempelajari lebih detail pada materi list.

5. Anda dapat menampilkan teks/string berdasarkan input dari pengguna dengan berbagai cara. Perhatikan metode di bawah ini dan jalankan kodenya menggunakan IDE atau notebook Anda.
   1. **Formatted String**

      ```python
      name = "Perseus Evans"
      print(f"Hello, nama saya {name}")
      
      """
      Output: 
      Hello, nama saya Perseus Evans
      """
      ```

      Pada kode di atas, Anda menampilkan string dengan menggunakan metode *formatted string*. Metode ini diperuntukkan untuk menampilkan variabel bertipe string dengan menggunakan huruf “f” di depan string dan menempatkan variabel di dalam kurung kurawal.

    2. %-formatting

        ```python
        name = "Perseus Evans"
        print("Nama saya %s" % (name))
        
        """
        Output: 
        Nama saya Perseus Evans
        """
        ```

        Pada kode di atas, Anda menampilkan variabel string dengan menggunakan metode “%-formatting”. Metode ini adalah pendekatan lama yang masih didukung oleh Python. Metode ini menggunakan operator Modulo (%) untuk memasukkan nilai variabel ke dalam string dengan menggunakan format khusus yang ditentukan oleh tipe data variabel.

    3. str.format()

        ```python
        name = "Perseus Evans"
        print("Nama saya {}".format(name))
        
        """
        Output: 
        Nama saya Perseus Evans
        """
        ```

        Pada kode di atas, Anda menampilkan variabel string dengan menggunakan metode “str.format()”. Metode ini memungkinkan penggabungan variabel/nilai ke dalam string dengan menempatkan tanda kurung kurawal atau {} sebagai penempatan variabel. Sekilas mirip dengan formatted string, pembedanya adalah pada penggunaan “.format” setelah string.

Masih banyak cara untuk menampilkan string. Anda bisa mendapatkan informasi lebih detail terkait string Python pada laman [berikut](https://docs.python.org/3/library/string.html).

### Tipe Data Collection

Tipe data collection merupakan tipe data yang menyimpan satu atau lebih data primitif sebagai satu kelompok. Dalam Python, berikut yang termasuk tipe data collection.

#### List

List merupakan jenis kumpulan data terurut (ordered sequence) dan salah satu tipe data yang sering digunakan pada Python. List dalam Python ini serupa, tetapi tak sama dengan array pada bahasa pemrograman lainnya. List Python tidak mengharuskan memiliki tipe data yang sama di dalamnya, sedangkan array sebaliknya.

![test](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/be18ee38-b55a-4d6a-ad6e-d320eb3b5c5e)

Melakukan inisialisasi list pada Python cukup mudah, yakni menggunakan kurung siku “[]” dan setiap elemennya dipisahkan dengan koma. Berikut adalah implementasi list pada Python.

```python
x = [1, 2.2, 'gdsc']
print(type(x))

"""
Output: 
<class ‘list’>
"""
```

Pada kode di atas, nilai yang diawali dengan kurung siku “[]” akan dianggap sebagai data bertipe list.

Setiap data atau elemen dalam list memiliki indeks yang selalu dimulai dari 0. Anda dapat mengakses setiap indeks pada list dengan metode indexing.

![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/8d46fa2d-bb49-4862-9883-86c77f0237df)

Berikut implementasinya.

```python
x = [1, 'gdsc', True, 1.0]

print(x[2])

""" 
Output:
True
"""
```

Pada kode di atas, diambil indeks ke-2 dari list yang telah diinisialisasikan. Mungkin Anda sadar bahwa cara tersebut sama persis dengan mengakses substring pada materi string. Hal ini karena string pada Python merupakan urutan karakter yang setiap karakternya memiliki indeks. Persis seperti list yang setiap datanya juga memiliki indeks.

List Python bersifat mutable yang artinya nilai di dalamnya dapat diubah.

```python
x = [1, 2.2, 'gdsc']
x[0] = 'usu'
print(x)

"""
Output:
['usu', 2.2, 'gdsc']
"""
```

Pada kode di atas, Anda mengubah “1” dengan string “usu”. Hal ini dapat terjadi dalam Python karena list bersifat mutable.

Konsep **indexing** merujuk kepada pengambilan data dalam Python berdasarkan indeksnya. Beberapa cara untuk melakukan indexing sebagai berikut.

```python
x = ["laptop", "monitor", "mouse", "mousepad", "keyboard", "webcam", "microphone"]

print(x[0])
print(x[2])
print(x[-1])
print(x[-3])


"""
Output:
laptop
mouse
microphone
keyboard
"""
```

Pada dua sintaks pertama, Anda memerintahkan untuk menampilkan indeks ke-0 dan indeks ke-2. Selanjutnya, dua sintaks terakhir memerintahkan untuk menampilkan indeks terakhir dan indeks ke-3 dari terakhir.

Adapun konsep **slicing** merujuk pada pengambilan data berdasarkan indeks dari rentang tertentu. Slicing pada Python mengikuti pola sebagai berikut.

```Plaintext
sequence[start:stop:step]
```

**Start** merupakan indeks pertama yang Anda ambil. **Stop** merupakan indeks terakhir yang ingin Anda ambil. **Step** merupakan jumlah elemen yang ingin Anda lewati di antara setiap elemen slice. Secara default, nilai step adalah 1.

Hal penting yang harus Anda ingat adalah nilai ***start*** bersifat inklusif sedangkan ***stop*** bersifat eksklusif. Masih ingat dengan konsep tersebut dalam matematika? Konsep ini menggambarkan batas tertentu dalam suatu interval. Jika suatu interval dikatakan inklusif, batas terakhir yang telah ditentukan akan dianggap sebagai bagian dari interval.

<img src="https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/1377b2f0-c78a-45c0-b52e-89f1ef9e5053" alt="Image 1" width="300" height="200">

Namun, jika suatu interval dikatakan eksklusif, batas terakhir yang telah ditentukan tidak akan dianggap sebagai bagian dari interval.

<img src="https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/a0b5c347-86a1-483c-92df-70d9e3647da2" alt="Image 2" width="300" height="200">

Berikut adalah implementasi slicing pada Python.

```python
x = ["laptop", "monitor", "mouse", "mousepad", "keyboard", "webcam", "microphone"]

print(x[0:5:2])
print(x[1:])
print(x[:3])

"""
Output:
['laptop', 'mouse', 'keyboard']
['monitor', 'mouse', 'mousepad', 'keyboard', 'webcam', 'microphone']
['laptop', 'monitor', 'mouse']

"""
```

Pada sintaks pertama, Anda memerintahkan untuk mengambil data dari indeks ke-0 hingga indeks ke-4 dengan setiap elemen ke-2 dan kelipatannya akan dilewati. Pada sintaks kedua, Anda memerintahkan untuk menampilkan data dari indeks ke-1 hingga terakhir. Pada sintaks ketiga, Anda memerintahkan untuk menampilkan data dari indeks ke-0 hingga indeks ke-2 (ingat, bersifat eksklusif).

### Tuple

![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/23c7e389-a566-4e79-8bc4-9135d4313cc3)

Tuple adalah jenis dari list yang tidak dapat diubah elemennya. Umumnya, tuple digunakan untuk data yang bersifat sekali deklarasi dan dapat dieksekusi lebih cepat. Tuple didefinisikan dengan kurung “()“ dan setiap elemen di dalamnya dipisahkan dengan koma.

```python
x = (1, "gdsc", 1+3j)
print(type(x))

"""
Output:
<class 'tuple'>
"""
```

Pada kode di atas, Anda dapat lihat bahwa nilai yang diapit tanda kurung “()” akan dianggap sebagai tuple oleh program. Anda juga dapat melakukan indexing dan slicing pada tuple sama seperti list.

```python
x = (5, 'program', 1+3j)
print(x[1])
print(x[0:3])

""" 
Output:
program
(5, 'program', (1+3j))
"""
```

Pada kode di atas, Anda mengambil string “program” yang berada pada indeks 1 dan menampilkan nilai dari indeks 0 hingga indeks 2 (ingat, bersifat eksklusif).

Tuple bersifat immutable yang artinya tidak dapat diubah.

```python
x = (5, 'gdsc', 1+3j)
x[1] = 'gdsc usu'

"""
Output:
'tuple' object does not support item assignment
"""
```

Pada kode di atas, Anda mencoba mengubah string “gdsc” menjadi “gdsc usu”,  tetapi menghasilkan error karena tuple bersifat immutable.

### Set

Set adalah kumpulan item bersifat unik, tanpa urutan (unordered collection), dan dapat diinisialisasikan dengan kurawal “{}” di mana setiap elemennya dipisahkan dengan koma.

Tidak sama seperti list, dalam set kita tidak bisa melakukan indeksing karena set tidak memiliki indeks. Hal ini merujuk pada definisi nya yang menyatakan bahwa set merupakan kumpulan item tanpa urutan. Perhatikan kode di bawah ini.

```python
x = {1,2,7,2,3,13,3}
print(x[0])

"""
Output:
'set' object is not subscriptable
"""
```

Pada kode di atas, program mengembalikan output **'set' object is not subscriptable** karena setiap nilai dalam set tidak memiliki indeks sehingga tidak bisa dilakukan *indexing*.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ce4ba2d05f6899693e2b74ebb73dee3820230824100254.jpeg)

Selain tanpa urutan (unordered collection). Set juga bersifat unik, artinya, data yang Anda simpan pada set tidak akan ada duplikat. Anda dapat memanfaatkan hal ini untuk menghilangkan duplikat pada suatu data.

```python
x = {1, 2, 7, 2, 3, 13, 3}
print(x)
print(type(x))

"""
Output:
{1, 2, 3, 7, 13}
<class 'set'>
"""
```

Pada kode di atas, Anda dapat melihat bahwa nilai yang diapit tanda kurawal “{}” akan dianggap sebagai set oleh program dan nilai duplikat di dalamnya akan dihapus. Pada kode di atas pun, nilai 3 dan 2 yang duplikat telah dihapus. 

Terakhir, set adalah himpunan dalam matematika. Ini maknanya Anda dapat melakukan operasi *union* (gabungan) dan *intersection* (irisan) pada set. Python menyediakan method “.union()” dan “.intersection()” untuk tipe data set.

Method merupakan tindakan atau operasi yang dapat dilakukan oleh suatu objek. Saat ini, tidak apa-apa jika kamu belum memahami sepenuhnya. Anda akan mempelajari lebih detail mengenai *method* pada modul Object-Oriented Programming (OOP). Perhatikan contoh di bawah ini.

```python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union = set1.union(set2)
print("Union:", union)

intersection = set1.intersection(set2)
print("Intersection:", intersection)

"""
Output:
Union: {1, 2, 3, 4, 5, 6, 7, 8}
Intersection: {4, 5}

"""
```

Pada contoh di atas, kita melakukan operasi union atau penggabungan dua variabel bertipe data set, yakni variabel set1 dan variabel set2 dengan menggunakan method “.union()”. Hasilnya adalah tentu nilai gabungan dari kedua variabel. 

Terakhir, kita juga melakukan intersection atau irisan yang merupakan operasi dalam matematika untuk menemukan nilai atau elemen-elemen yang sama dalam dua atau lebih himpunan. Kita menggunakan method “.intersection()” untuk menjalankan operasi ini. Hasilnya adalah nilai 4 dan 5 yang memang berada pada variabel set1 dan variabel set2.

### Dictionary

Dictionary pada Python merupakan kumpulan pasangan *key-value* yang bersifat tidak berurutan. Dictionary dapat digunakan untuk menyimpan data kecil hingga besar. Pada Python, dictionary didefinisikan dengan kurawal dan tambahan definisi berikut.
1. Setiap elemen pasangan *key-value* dipisahkan dengan koma (,).
2. *Key* dan *value* dipisahkan dengan titik dua (:).
3. *Key* dan *value* dapat berupa tipe variabel/objek apa pun.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:086f4fc4aff256332b2227e1b3b4e9d420230727091703.jpeg)

Perhatikan contoh di bawah ini.

```python
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }

print(type(x))

"""
Output:
<class 'dict'>
"""
```

Pada kode di atas, sintaks yang diapit tanda kurawal “{}” dan memiliki pasangan *key-value* akan dianggap sebagai data bertipe dictionary oleh program.

Dalam mengambil setiap nilai/elemen pada dictionary, Anda harus mengetahui *key* (kunci) untuk mengakses setiap *value*-nya (nilai). Hal ini berbeda dengan tipe data sebelumnya yang cukup mengharuskan Anda untuk menyebutkan indeksnya saja.

```python
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }

print(x[0])

""" 
Output:
KeyError: 0
"""
```

Kode di atas menghasilkan error karena Anda mencoba mengakses data pada dictionary dengan menggunakan metode indexing.

```python
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }

print(x ['name'])

""" 
Output:
Perseus Evans
"""
```

Dalam kode di atas, Anda mengambil data pada dictionary dengan memanggil key yang ada.

Beberapa hal lain terkait dictionary dapat dilihat pada poin-poin berikut.
1. **Menambah Data pada Dictionary**
   
   ```python
   x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
    x ['Job'] = "Web Developer"

    print(x)

    """
    Output:
    {'name': 'Perseus Evans', 'age': 20, 'isMarried': False, 'Job': 'Web Developer'}
    """
    ```

    Untuk menambahkan data pada Dictionary, Anda cukup memasukkan key dan value-nya seperti pada contoh kode di atas, yakni “x[‘Job’] = ‘Web Developer’”.
2. **Menghapus Data pada Dictionary**

    ```python
    x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
    del x['isMarried']

    print(x)

    """
    Output:
    {'name': 'Perseus Evans', 'age': 20}
    """
    ```

    Anda dapat menghapus data pada Dictionary dengan menggunakan sintaks “del”. Pada kode di atas, data “isMarried” dihapus.

3. **Mengubah Data pada Dictionary**

    ```python
    x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
    x ['name'] = "Wilson"

    print(x)

    """
    Output:
    {'name': 'Wilson', 'age': 20, 'isMarried': False}
    """
    ```

    Untuk mengubah value pada Dictionary, Anda dapat melakukannya dengan mengakses key-nya dan lakukan inisialisasi variabel dengan nilai baru. Pada kode di atas, data “name” diubah dari “Perseus Evans” menjadi “Wilson”.

### Konversi antara Tipe Data

Setelah mengetahui berbagai tipe data pada Python, Anda pun dapat melakukan konversi antar tipe data dengan menggunakan beberapa fungsi.

Fungsi merupakan blok kode yang dapat dipanggil untuk melakukan tugas tertentu. Anda akan mempelajari fungsi lebih detail pada modul subprogram. Saat ini, Anda cukup memahami bahwa fungsi di bawah ini dapat melakukan operasi terhadap list, set, dan string.

Di bawah ini merupakan berbagai fungsi yang dapat digunakan untuk mengonversi data antar list, set, dan string.

#### Konversi Integer ke Float

```python
print(float(5))

"""
Output:
5.0
"""
```

Untuk melakukan konversi dari integer ke float cukup menggunakan fungsi float() dengan memasukkan nilai integer di dalamnya.

#### Konversi Float ke Integer

```python
print(int(5.6))
print(int(-5.6)) 

""" 
Output:
5
-5
"""
```

Untuk melakukan konversi dari float ke integer cukup menggunakan fungsi int() dengan memasukkan nilai float di dalamnya.

#### Konversi dari-dan-ke String

```python
print(int("25"))
print(str(25))
print(float("25"))
print(str(25.6))

"""
Output:
25
25
25.0
25.6
"""
```

Kode di atas merupakan berbagai fungsi untuk mengonversi dari-dan-ke string. Jika ingin melakukan konversi ke string, Anda cukup menggunakan fungsi str().

Perlu Anda perhatikan bahwa konversi dari-dan-ke string akan melalui pengujian dan dipastikan validitasnya. Jika pengujian dan validitasnya gagal, error akan dihasilkan.

```python
print(int("1p"))

"""
Output:
ValueError: invalid literal for int() with base 10: '1p
"""
```

Kode di atas menghasilkan error karena 1p dianggap tidak valid.

#### Konversi Kumpulan Data

```python
print(set([1,2,3]))
print(tuple({5,6,7}))
print(list('hello'))

"""
Output:
{1,2,3}
(5,6,7)
['h','e','l','l','o']
"""
```

Untuk melakukan konversi kumpulan data dari-dan-ke set/list/tuple, Anda cukup menggunakan fungsi dari tipe data yang diinginkan. Misalnya, set(), tuple(), dan list() seperti pada kode di atas.

#### Konversi ke Dictionary

Untuk konversi ke dictionary, data harus memenuhi persyaratan key-value. Selain itu, Anda bisa melakukan konversi ke dictionary menggunakan fungsi dict(). 

List dari beberapa list yang isinya pasangan nilai menjadi dictionary.

```python
print(dict([[1,2],[3,4]]))

"""
Output:
{1:2, 3:4}
"""
```

Pada kode di atas terdapat list berisi dua list yang berisi pasangan nilai, yakni [1,2] dan [3,4]. Lalu, list tersebut diubah menjadi dictionary dengan nilai 1 dan 3 sebagai key serta nilai 2 dan 4 sebagai value.

Konversi list dari beberapa tuple yang isinya pasangan nilai menjadi dictionary.

```python
print(dict([(3,26),(4,44)]))

"""
Output:
{3:26, 4:44}
"""
```

Pada kode di atas terdapat list yang berisi dua tuple dengan pasangan nilai, yakni (3,26) dan (4,44). Setelah diubah menjadi dictionary, nilai 3 dan 4 menjadi key, sedangkan nilai 26 dan 44 menjadi value.












