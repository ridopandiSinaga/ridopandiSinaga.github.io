---
title: Berinteraksi dengan Data
date: 2023-11-11
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

#### Tuple

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

#### Set

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

#### Dictionary

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

## Transformasi Angka, Karakter, dan String

Pada materi ini, Anda akan mempelajari berbagai cara mentransformasi tipe data string. Ada banyak method/metode yang dapat membantu Anda mentransformasi tipe data string.

### Mengubah Huruf Besar/Kecil

Dalam kategori ini terdapat beberapa metode yang dapat digunakan untuk mengubah string menjadi huruf kapital (UPPERCASE) atau huruf kecil (lowercase). Kedua metode ini, baik upper() maupun lower() adalah metode bawaan dari string Python. Perlu diingat bahwa jika terdapat karakter bukan huruf (seperti simbol atau angka) yang tidak memiliki opsi kapital sehingga karakter tersebut tidak diubah.

#### upper()

```python
kata = 'gdsc'
kata = kata.upper()
print(kata)

"""
Output:
GDSC
"""
```

Pada kode di atas, Anda mengubah string "gdsc" menjadi uppercase dengan menggunakan method .upper(). Hasilnya, string tersebut berubah menjadi "GDSC".

#### lower()

```python
kata = 'DICODING'
kata = kata.lower()
print(kata)

"""
Output:
dicoding
"""
```

Pada kode di atas, Anda mengubah string "GDSC" menjadi lowercase dengan menggunakan method .lower(). Hasilnya, string tersebut berubah menjadi "gdsc".

### Awalan dan Akhiran

Kategori ini adalah metode dalam string yang biasanya dipergunakan untuk menghapus karakter whitespace pada suatu string. Namun, selain whitespace bisa juga diperuntukkan untuk menghilangkan kata yang tidak diinginkan.

#### rstrip()

```python
print("gdsc          ".rstrip())

"""
Output:
gdsc
"""
```

Pada kode di atas, Anda menghapus spasi yang berada di sebelah kanan setelah string "gdsc" menggunakan metode ".rstrip()".

#### lstrip()

Kebalikan dari rstrip(), lstrip() bertugas untuk menghapus whitespace pada sebelah kiri atau awal string. 

```python
print("           gdsc".lstrip())

"""
Output:
gdsc
"""
```

Pada kode di atas, Anda menghapus spasi yang berada di sebelah kiri sebelum string "gdsc" menggunakan metode ".lstrip()".

#### strip()

Metode ini bertugas untuk menghapus whitespace pada bagian awal dan akhir string. 

```python
print("         gdsc          ".strip())

"""
Output:
gdsc
"""
```

Pada kode di atas, Anda menghapus spasi yang berada di sebelah kiri dan kanan setelah string "gdsc" menggunakan metode "strip()".

Jika ingin menghilangkan karakter selain whitespace, Anda bisa mengikuti contoh berikut.

```python
kata = 'usuGDSCusu'
print(kata.strip("usu"))

"""
Output:
GDSC
"""
```

Anda dapat mengganti whitespace dengan kata atau hal lainnya. Caranya adalah memberikan nilai pada ".strip()". Kode di atas menghapus kata "usu" pada variabel "kata".

Sekarang, bagaimana jika Anda ingin mencari kata alih-alih menghapusnya? Berikut caranya.

#### startswith()

Metode startswith() bertujuan untuk menemukan suatu kata pada awal string. Metode ini mengembalikan nilai **True**.

```python
print('GDSC USU'.startswith('GDSC'))

"""
Output:
True
"""
```

Pada kode di atas, Anda mencari string "GDSC" pada string pertama "GDSC USU". Operasi ini mengembalikan nilai True karena pada string "GDSC" memang diawali dengan string "GDSC".

#### endswith()

Metode endswith() bertujuan untuk menemukan suatu kata pada akhir string. Metode ini juga mengembalikan nilai **True** jika menemukannya, sedangkan jika tidak menemukan kata yang diinginkan, nilai False dikembalikan.

```python
print('GDSC USU'.endswith('GDSC'))

"""
Output:
False
"""
```

Pada kode di atas, Anda mencari string "GDSC" pada string terakhir "GDSC USU". Operasi ini mengembalikan nilai False karena pada string "GDSC USU" tidak diakhiri dengan string "GDSC", tetapi diakhiri dengan string "USU".

### Memisah dan Menggabung String

Kategori selanjutnya adalah memisah dan menggabung string. Anda dapat menggunakan metode ini untuk tujuan tersebut dengan menggunakan dua metode berikut.

#### join()

```python
print(' '.join(['GDSC','USU', '!']))

"""
Output:
GDSC USU !
"""
```

Pada kode di atas, Anda menggabungkan string "GDSC", "USU", dan "!" yang telah disimpan pada variabel list. Perhatikan bahwa pada sintaks awal sebelum ".join()" Anda menambahkan *single quotes* di sana. Single quotes ini bermaksud agar Anda menentukan *delimiter* pada setiap kata/nilai yang ingin Anda gabungkan. Pada kode di atas, *delimiter*-nya adalah *whitespace* atau spasi.

Anda juga bisa menambahkan delimiter lain, contohnya berikut.

```python
print('123'.join(['GDSC','USU']))

"""
Output:
GDSC123USU123
"""
```

Pada kode di atas, Anda memasukkan delimeter "123" sehingga output-nya adalah "GDSC123USU123".

#### split()

Kebalikan dari metode sebelumnya, metode split() bertujuan untuk memisahkan kata/substring berdasarkan delimiter.

```python
print('GDSC USU !'.split())

"""
Output:
['GDSC','USU','!']
"""
```

Pada kode di atas, Anda memisahkan string "GDSC USU !" menjadi "GDSC",  "USU", dan "!". Perhatikan bahwa kedua string tersebut disimpan sebagai list.

Anda juga bisa menggunakan delimiter **newline (\n)** untuk memisahkan setiap baris pada string multiline.

```python
print('''Halo,
aku ikan,
aku suka sekali menyelam
aku tinggal di perairan.
Badanku licin dan renangku cepat.
Senang berkenalan denganmu.'''.split('\n'))

"""
Output:
['Halo,', 'aku ikan,', 'aku suka sekali menyelam', 'aku tinggal di perairan.', 'Badanku licin dan renangku cepat.', 'Senang berkenalan denganmu.']
"""
```

Pada kode di atas, Anda memisahkan kalimat panjang yang dibatas oleh newline lalu menyimpannya ke dalam sebuah list.


### Mengganti Elemen String

Kategori selanjutnya merupakan metode yang bertujuan untuk mengganti elemen string di dalamnya dengan elemen string lainnya.

#### replace()

```python
string = "Ayo belajar Coding atau coding di GDSC"
print(string.replace("Coding", "Pemrograman"))

"""
Output:
Ayo belajar Pemrograman atau coding di GDSC
"""
```

Perhatikan kode di atas, Anda mengubah kata "Coding" menjadi "Pemrograman". Perlu diingat bahwa replace() bersifat case-sensitive. Contohnya, Anda dapat lihat dalam kode di atas bahwa kata "coding" tidak ikut berubah. Hanya kata "Coding" dengan C kapital saja yang diubah menjadi "Pemrograman". Hal ini karena kata "coding" berawalan huruf c kecil.

### Pengecekan String

Kategori selanjutnya bertujuan untuk melakukan pengecekan pada string. Hasil dari kategori ini adalah mengembalikan nilai boolean True/False. 

#### isupper()

isupper() akan mengembalikan nilai True jika semua huruf dalam string adalah huruf kapital (uppercase). Sebaliknya, jika ada satu huruf saja yang kecil/tidak uppercase, nilai False akan dikembalikan.

```python
kata = 'GDSC'
print(kata.isupper())

"""
Output:
True
"""
```

Pada kode di atas, Anda memastikan variabel kata mengandung string UPPERCASE atau tidak. Jika iya, nilai "True" dikembalikan.

#### islower()

Kebalikannya, islower() akan mengembalikan nilai True jika semua huruf dalam string adalah huruf kecil (lowercase).

```python
kata = 'gdsc'
print(kata.islower())

"""
Output:
True
"""
```

Pada kode di atas, Anda memastikan variabel kata mengandung string lowercase atau tidak. Jika iya, nilai "True" dikembalikan.

#### isalpha()

Metode ini mengembalikan nilai True jika semua karakter dalam string adalah huruf alfabet. Jika ada satu huruf lain yang bukan alfabet, seperti angka, nilai False akan dikembalikan.

```python
kata = 'gdsc'
print(kata.isalpha())

"""
Output:
True
"""
```

Pada kode di atas, Anda mencari tahu variabel kata mengandung string alfabet tanpa adanya karakter selain huruf. Jika iya, nilai "True" dikembalikan.

#### isalnum()

Metode isalnum() mengembalikan nilai True jika karakter dalam string adalah alfanumerik, yaitu hanya huruf atau hanya angka atau berisi keduanya. Jika tidak, nilai False akan dikembalikan.

```python
kata = 'gdsc123'
print(kata.isalnum())

"""
Output:
True
"""
```

Pada kode di atas, Anda memastikan variabel kata mengandung string alfabet dengan numerik atau tidak. Jika iya, nilai "True" akan dikembalikan.

#### isdecimal()

Metode isdecimal() akan mengembalikan nilai True jika karakter dalam string berisi hanya angka/numerik. Jika tidak, nilai False akan dikembalikan.

```python
print('123'.isdecimal())

"""
Output:
True
"""
```

Pada kode di atas, Anda memastikan string Anda berisi angka/numerik. Jika iya, nilai "True" dikembalikan.

#### isspace()

Metode isspace() akan mengembalikan nilai True jika string hanya berisi whitespace, seperti spasi, tab, newline, atau karakter whitespace lainnya.

```python
print('         '.isspace())

"""
Output:
True
"""
```

Pada kode di atas, Anda memastikan string Anda merupakan whitespace atau tidak. Jika iya, nilai "True" akan dikembalikan.

#### istitle()

Metode istitle() mengembalikan nilai True jika string berisi huruf kapital pada setiap kata pertamanya. Jika tidak, nilai False dikembalikan.

```python
print('Dicoding Indonesia'.istitle())

"""
Output:
True
"""
```

### Formatting pada String

Kategori terakhir yang akan kita bahas pada modul kali ini adalah *formatting* pada string. Dalam kategori ini terdapat beberapa metode, yaitu zfill(), rjust(), ljust(), center(), dll. Semua metode akan dijelaskan secara detail di bawah ini. Simak baik-baik, ya.

#### zfill()

Metode zfill() bertujuan untuk menambahkan nilai nol (0) di depan sebuah string dengan panjang tertentu. Tujuan dari metode ini adalah membantu untuk memastikan bahwa sebuah angka atau nilai memiliki panjang tetap, terutama ketika ingin menyimpan nilai dalam format yang konsisten.

Simak kode berikut.

```python
teks = 'Code'
tambah_number = teks.zfill(5)
print(tambah_number)

"""
Output:
0Code
"""
```

Kita bedah kode di atas lebih detail.
1. Variabel *teks* menyimpan nilai string berupa "Code". Perlu dipahami bahwa kata "Code" hanya memiliki 4 huruf atau sederhananya panjang kata "Code" adalah 4.
2. Variabel **tambah_number** menyimpan nilai variabel teks dengan memanggil metode zfill(5).  Angka 5 tersebut merupakan parameter untuk menentukan panjang yang diinginkan oleh string. Sederhananya, Anda memastikan bahwa panjang kata "Code" haruslah 5 dan bukan 4. Jadi, program akan menambahkan angka 0 di depan kata "Code" untuk memastikan bahwa panjangnya adalah 5.

Metode zfill() ini berguna ketika ingin memastikan bahwa angka atau nilai dalam string memiliki panjang tetap dan sesuai dengan format yang diinginkan. Metode zfill() dapat diterapkan untuk menetapkan nomor nota atau nomor antrian.

#### rjust()

Metode rjust() berguna untuk merapikan pencetakan teks. Dengan metode rjust() ini, Anda dapat membuat teks menjadi rata kanan sehingga tampilannya lebih rapi.

```python
print('GDSC'.rjust(20))

"""
Output:
            GDSC

"""
```

Berdasarkan kode di atas, perhatikan bahwa secara default, rjust() akan menambahkan whitespace untuk membuat teks menjorok ke sebelah kanan. Angka 20 yang Anda masukkan bersifat sama seperti pada zfill(). Metode rjust() akan memastikan bahwa panjang teksnya adalah 20 termasuk dengan kata "GDSC".

Anda bisa menambahkan teks lain, tidak hanya whitespace.

```python
print('GDSC'.rjust(20, '!'))

"""
Output:
!!!!!!!!!!!!GDSC
"""
```

Pada kode di atas, Anda menambahkan karakter "!" sebelum string "GDSC".

#### ljust()

Selanjutnya adalah metode ljust(), metode ini adalah kebalikan dari metode rjust() yang bertujuan untuk membuat teks menjadi rata kiri.

```python
print('GDSC'.ljust(20))

"""
Output:
GDSC            '
"""
```

Pada kode di atas, Anda menambahkan karakter whitespace setelah string "gdsc" sehingga teks tersebut menjadi rata kiri.

#### center()

Metode center() menjadikan teks rata tengah. Metode ini akan menambahkan whitespace di sebelah kiri dan kanan secara default. Anda juga bisa mengganti whitespace tersebut dengan karakter lain.

```python
print('GDSC'.center(10, '-'))

"""
Output:
-GDSC-

"""
```

Pada kode di atas, Anda menambahkan karakter strip "-" pada kiri kanan string "GDSC" sehingga teks tersebut menjadi rata tengah. 

Sekali lagi, Anda harus ingat bahwa zfill(), rjust(), ljust(), dan center() berfungsi sama, yakni memastikan panjang teks sesuai dengan yang diminta.

### String Literals

Umumnya, string ditulis dengan mudah di Python, diapit oleh tanda petik tunggal. Namun, dalam kondisi tertentu, dibutuhkan petik tunggal di tengah string (misalnya, struktur kepemilikan dalam bahasa Inggris—Dicoding's Cat atau penyebutan Jum'at pada hari dalam bahasa Indonesia).

Misalnya, kita menuliskannya sebagai berikut.

```python
st1 = 'Jum'at'
```

Python akan salah mengira bahwa string berakhir setelah huruf m dan selebihnya merupakan kode yang invalid. Namun, Python memperbolehkan untuk menggunakan petik dua seperti Anda menggunakan petik tunggal. Dalam kasus sebelumnya, Anda cukup mengetik seperti berikut.

```python
st1 = "Jum'at"
```

Dalam contoh di atas, Python mengenali bahwa petik tunggal adalah bagian tidak terpisahkan dari string tersebut. Bagaimana jika kita memerlukan kedua jenis petik dalam string tunggal? Python menyediakan *escape character*.

*Escape character* memungkinkan Anda untuk menggunakan karakter yang sebelumnya tidak bisa dimasukkan dalam string. Umumnya diawali dengan *backslash* (\) dan diikuti karakter tertentu yang diinginkan. Contohnya, untuk petik tunggal Anda dapat menambahkan \'.

Ini merupakan cara paling aman untuk melakukan penambahan atau penyuntingan dalam variabel. Contohnya berikut.

```python
st1 = 'Jum\'at'
```

Python mengetahui bahwa pada Jum\'at, sebelum petik terdapat *backslash* (\) yang menandakan petik tunggal sebagai bagian dari string dan bukan akhir dari string. *Escape character* \' dan \" memungkinkan Anda untuk memasukkan karakter ' dan '' dalam bagian string. Beberapa contoh *escape character* lainnya sebagai berikut.
- \' Single quote
- \" Double quote
- \t Tab
- \n Newline (line break)
- \\ Backslash

```python
print("Halo!\nKapan terakhir kali kita bertemu?\nKita bertemu hari Jum\'at yang lalu.")


"""
Output:
Halo!
Kapan terakhir kali kita bertemu?
Kita bertemu hari Jum'at yang lalu.
"""
```

Pada kode di atas, Anda menampilkan baris teks dalam satu baris kode menggunakan escape character "\n". Jadi, ketika teks tersebut muncul pada layar akan menampilkan baris teks yang awalnya hanya satu baris menjadi tiga baris dan dipisahkan oleh line break.

### Raw String

Python juga menyediakan cara untuk mencetak string sesuai dengan apa pun input atau teks yang diberikan. Metode ini dinamakan *raw strings*. Umumnya, ia digunakan untuk regex atau beberapa implementasi lain yang sangat bergantung pada keberadaan backslash. Untuk mengimplementasikan raw strings, sisipkan huruf r sebelum pembuka string.

```python
print(r'GDSC\tUSU')

"""
Output:
GDSC\tUSU

"""
```

Pada kode di atas, Anda menampilkan raw string dari "GDSC\tUSU". Perhatikan bahwa *escape character* (\t) ikut tercetak pada teks tersebut. Hal ini karena raw string akan mencetak string sesuai dengan apa pun input atau teks yang diberikan.

## Operasi pada List, Set, dan String

Dalam modul ini, Anda akan belajar mengenai contoh-contoh operasi pada list, set ,dan string. Banyak fungsi dalam Python yang dapat digunakan untuk melakukan operasi pada list, set, dan string. 

### len()

Fungsi len() bertujuan untuk menghitung panjang atau banyaknya elemen dari list, set, dan string. Khusus pada string, program akan menghitung jumlah karakternya.

```python
# List

contoh_list = [1, 3, 3, 5, 5, 5, 7, 7, 9]

print(contoh_list)
print(len(contoh_list))

"""
Output:
[1, 3, 3, 5, 5, 5, 7, 7, 9]
9
"""
```

Dalam kode di atas, Anda menampilkan panjang dari anggota yang berada pada list. Anda bisa memperhatikan lebih detail setiap anggota list memang berjumlah 9 atau tidak.

```python
# Set

contoh_list = set([1, 3, 3, 5, 5, 5, 7, 7, 9])

print(contoh_list)
print(len(contoh_list))

"""
Output:
{1, 3, 5, 7, 9}
5
"""
```

Pada kode di atas, Anda mengonversi list menjadi set terlebih dahulu. Hal ini menyebabkan anggota list berubah menjadi anggota set yang tidak memiliki duplikat. Setelah itu, Anda mencetak jumlah anggota dari set. Hasilnya adalah anggota set berjumlah 5.

```python
# String
contoh_list = "Belajar Python"

print(contoh_list)
print(len(contoh_list))

"""
Output:
Belajar Python
14
"""
```

Pada kode di atas, Anda menghitung jumlah karakter string yang ada pada variabel "contoh_list". Perhatikan bahwa karakter space dihitung sebagai karakter string.

### min() dan max()

Selain menghitung panjang atau banyaknya elemen, Anda juga dapat mengetahui berapa nilai minimum dan maksimum dari suatu list menggunakan fungsi min() dan max().

```python
angka = [13, 7, 24, 5, 96, 84, 71, 11, 38]
print(min(angka))
print(max(angka))

"""
Output:
5
96
"""
```

Pada kode di atas, Anda mencari anggota dengan nilai terkecil (minimal) dan nilai terbesar (maksimal) pada variabel "angka" yang merupakan list.

### count()

Fungsi count() digunakan untuk mengetahui berapa kali suatu objek muncul dalam list.

```python
genap = [2, 4, 4, 6, 6, 6, 8, 10, 10]
print(genap.count(6))

"""
Output:
3
"""
```

Pada kode di atas, program akan menghitung banyaknya angka 6 dalam list. Namun, pada kode di bawah, program akan menghitung banyaknya substring/huruf "a" dalam string.

```python
string = "Belajar Python sangat menyenangkan"
substring = "a"
print(string.count(substring))


"""
Output:
6
"""
```

### In dan Not In

**In** dan **not in** merupakan operator yang diperuntukkan untuk mengetahui nilai atau objek yang ada dalam list. Anda bisa menggunakan operator ini untuk memastikan suatu nilai ada dalam list bahkan dalam string. Operator **in** dan **not in** akan mengembalikan nilai boolean True atau False. 

```python
kalimat = "Belajar Python sangat menyenangkan"
print('GDSC' in kalimat)
print('tidak' in kalimat)
print('GDSC' not in kalimat)
print('tidak' not in kalimat)

"""
Output:
False
False
True
True

"""
```

Ada empat baris kode di atas. Pada baris pertama, Anda mencari kata atau substring "GDSC" dalam variabel kalimat. Hasilnya, kata tersebut tidak ada dalam variabel kalimat sehingga mengembalikan nilai False. 

Hal ini berlaku sebaliknya pada baris kode ketiga, Anda justru memastikan bahwa substring "GDSC" tidak ada dalam variabel kalimat. Hasilnya tentu True karena kita sudah tahu pada baris kode pertama bahwa substring "GDSC" tidak ada dalam variabel kalimat. 

Hal ini juga yang dilakukan pada baris kode kedua dan keempat. Pada kode tersebut yang dicari adalah substring "tidak". Apakah jawabannya? Silakan Anda telaah lebih dalam.

### Memberikan Nilai untuk Multiple Variable

Dalam list atau tuple, terkadang Anda perlu memberikan nilai pada variabel-variabel tersebut. Secara konvensional, Anda bisa melakukan hal tersebut dengan menandai indeks yang diinginkan dan memberikan nilai satu per satu sesuai keinginan. 

```python
data = ['shirt', 'white', 'L']
apparel = data[0]
color = data[1]
size = data[2]
```

Dalam kode di atas, Anda mengakses indeks pertama pada variabel "data" yang merupakan list, lalu menyimpannya pada variabel baru bernama "apparel". Lalu, berlaku seterusnya, Anda mengakses indeks kedua serta ketiga dan menyimpannya pada variabel baru, masing-masing bernama "color" dan "size".

Alih-alih melakukannya satu persatu, Anda dapat melakukan hal tersebut sekaligus dalam Python. 

```python
data = ['shirt', 'white', 'L']
apparel, color, size = data

print(data)
print(apparel)
print(color)
print(size)

"""
Output:
['shirt', 'white', 'L']
"""
```

Pada kode di atas, Anda melakukan hal yang sama dengan kode sebelumnya. Anda mengakses indeks 0, 1, dan 2 pada variabel "data" yang merupakan list. Namun, alih-alih melakukannya satu persatu, Anda melakukannya sekaligus dalam satu baris kode.

Perlu diperhatikan bahwa jumlah variabel yang ingin Anda masukkan haruslah sama dengan jumlah variabel yang ada pada list atau tuple. Pada variabel data di atas, list yang telah diinisialisasikan beranggota sebanyak tiga dan sintaks kedua juga melakukan inisialisasi tiga data, yakni "apparel, color, size". Tidak percaya? Silakan ubah kode "**apparel, color, size**" menjadi "**apparel, color, size, size_chart**".

### Sort

Anda bisa menggunakan fungsi sort() untuk mengurutkan angka atau urutan huruf.

```python
kendaraan = ['motor', 'mobil', 'helikopter', 'pesawat']
kendaraan.sort()

print(kendaraan)

"""
Output:
 ['helikopter', 'mobil', 'motor', 'pesawat']
"""
```

Pada kode di atas, Anda mengurutkan anggota variabel "kendaraan" yang merupakan list. Perhatikan cara fungsi sort() mengurutkan anggota di dalamnya. Anggota list merupakan string maka akan diurutkan berdasarkan huruf pertamanya dalam alfabet.

Beberapa hal yang perlu kamu ketahui mengenai sort sebagai berikut.
1. Anda dapat membalikkan urutan dengan cara berikut.
   
    ```python
      kendaraan = ['motor', 'mobil', 'helikopter', 'pesawat']
      kendaraan.sort(reverse=True)

      print(kendaraan)

      """
      Output:
      ['pesawat', 'motor', 'mobil', 'helikopter']

      """
    ```

    Pada kode di atas, Anda mengurutkan variabel "kendaraan" secara *descending* atau menurun. Hal ini membuktikan bahwa secara default fungsi sort() akan mengurutkan secara *ascending* atau menaik.

2. Metode sort tidak dapat mengurutkan list yang memiliki angka dan string sekaligus di dalamnya.

    ```python
    urutan = ['Dicoding', 1, 2, 'Indonesia', 3]
    urutan.sort()

    print(urutan)

    """
    Output:
    TypeError: '<' not supported between instances of 'int' and 'str'
    """
    ```

    Pada kode di atas menghasilkan error karena Anda mengurutkan dua tipe data, yakni **string** dan **number**.

3. Metode sort menggunakan urutan ASCII sehingga nilai huruf kapital (uppercase) akan lebih dahulu dibandingkan huruf kecil (lowercase).

```python
kendaraan = ['motor', 'mobil', 'helikopter', 'Pesawat']
kendaraan.sort()

print(kendaraan)

"""
Output:
['Pesawat', 'helikopter', 'mobil', 'motor']
"""
```

*ASCII (American Standard Code for Information Interchange)* table merupakan sebuah kode karakter yang memetakan set karakter yang umum digunakan ke dalam angka. Sederhananya, tabel ini menampilkan karakter-karakter ASCII beserta nilai angka yang mewakilinya. Metode sort() mengurutkan berdasarkan angka pada ASCII ini. Anda bisa meninjau lebih dalam mengenai ASCII pada link berikut: [ASCII Table](https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html).

Untuk mengatasi masalah ini, Anda dapat memasukkan keyword "str.lower" pada parameter metode sort(). Jadi, sort() akan menganggap semua objek menggunakan huruf kecil, tanpa mengubah kondisi asli dari objek tersebut.

Tampak perbedaannya? Dengan mengubah semua nilai di dalam list menjadi lowercase, nilai-nilai tersebut menjadi berurutan menurut ASCII table.
      








