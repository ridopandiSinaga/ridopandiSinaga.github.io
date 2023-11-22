---
title: Style Guide pada Python
date: 2023-11-22
tags: [python_lanjutan, gdsc]
category: python
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## **Pengecekan Style Guide PEP8**

Sampai dengan saat ini, Anda tentu sudah menuliskan kode pemrograman Python cukup banyak, termasuk di antaranya kode yang Anda tulis mengalami kesalahan sintaksis atau indentasi. Lalu, bagaimana agar ke depannya bisa mencegah hal tersebut terjadi?

Semua itu bergantung pada kode editor yang Anda gunakan untuk menulis kode Python, terkadang ada beberapa kode editor yang sudah dilengkapi dengan fitur pengecekan kemungkinan kesalahan dan memformat kode sesuai arahan gaya penulisan (style guide) PEP8, seperti PyCharm. Ada juga kode editor, seperti Visual Studio Code yang menyediakan plugin tambahan untuk membantu pengecekan kemungkinan kesalahan dan memformat kode.

PEP atau *Python Enhancement Proposals* merupakan panduan yang telah menjadi acuan untuk perkembangan Python. Salah satu panduan tersebut membahas mengenai arahan gaya penulisan (*style guide*) yang baik dan benar ketika Anda ingin membangun kode menggunakan Python. Panduan tersebut adalah PEP8 yang berjudul "[Style Guide for Python Code](https://peps.python.org/pep-0008/)".

Tujuan dari panduan ini agar kode Anda lebih mudah dibaca dan dipahami oleh programmer lain serta menghindari kemungkinan kesalahan yang akan muncul.

Pada materi kali ini, kita akan mempelajari beberapa aplikasi yang dapat Anda gunakan dengan memanggil perintah atau sebaiknya diintegrasikan ke editor kode yang Anda pakai. Tujuannya untuk membantu Anda mengecek kemungkinan kesalahan dan kesesuaian dengan PEP8.

### **Lint**

Lint adalah proses pengecekan kode atas kemungkinan terjadi kesalahan (error), termasuk dalam proses ini adalah mengecek kesesuaian terhadap arahan gaya penulisan kode (style guide) PEP8. Aplikasi yang digunakan untuk proses ini disebut **linter**. 

Integrasi linter dengan editor kode Anda akan membuat efisien dalam menulis kode Python. Pertimbangan ini karena keluaran atau output dari aplikasi linter hanya berupa teks singkat berupa keterangan dan kode Error atau Warning atau Kesalahan Konvensi Penamaan (Naming Conventions).

Lint atau linting akan meminimalkan kode Anda mengalami error, salah satu contohnya karena kesalahan indentasi di Python. Sebelum kode Anda diproses oleh interpreter Python dengan IndentationError, lint akan memberitahukannya lebih dahulu ke Anda.

Berikut akan dibahas tiga jenis aplikasi linter, silakan dicermati dahulu. Tidak harus semuanya diinstal/dicoba, hanya paket yang menurut Anda sesuai kebutuhan saja yang digunakan. Untuk menginstalnya, silakan buka terminal Anda dan jalankan kode di bawah ini sesuai yang Anda pilih.

    **Catatan**: Output ketiga aplikasi ini kemungkinan mirip, tetapi pada kondisi tertentu akan ada output atau fitur yang mungkin sesuai dengan kebutuhan Anda menulis kode.  

1. **Pycodestyle** (sebelumnya bernama pep8)
[Pycodestyle](https://github.com/PyCQA/pycodestyle) adalah aplikasi open source (berlisensi MIT/Expat) untuk membantu mengecek kode terkait gaya penulisan kode dengan konvensi PEP8. Untuk instalasi, silakan buka terminal Anda dan jalankan kode berikut.

    ```Plaintext
    pip install pycodestyle
    ```

2. **Pylint**
   
   [Pylint](https://github.com/PyCQA/pylint) adalah aplikasi open source (berlisensi GPL v2) untuk melakukan analisis kode Python, mengecek untuk kesalahan (error) pemrograman, memaksakan standar penulisan kode dengan mengecek penulisan kode yang tidak baik, serta memberikan saran untuk refactoring sederhana. Untuk instalasi, silakan buka terminal Anda dan jalankan kode berikut.

   ```Plaintext
   pip install pylint
   ```

3. **Flake8**

    [Flake8](https://github.com/PyCQA/flake8) adalah aplikasi open source (berlisensi MIT) yang membungkus sejumlah kemampuan aplikasi lain, seperti pycodestyle, pyflakes, dan (skrip/fitur) lainnya. Untuk instalasi, silakan buka terminal Anda dan jalankan kode berikut.

    ```Plaintext
    pip install flake8
    ```

Selanjutnya, mari kita masuk ke pembahasan cara kerja ketiganya. Pastikan Anda sudah menginstal aplikasi yang disebutkan sebelumnya.

1. Masuk ke kode editor Anda, misalnya Visual Studio Code.
2. Buat sebuah file bernama kalkulator.py dan masukkan kode berikut.

    ```python
    class Kalkulator:
        """kalkulator tambah kurang"""
        def __init__(self, _i):
            self.i = _i
        def tambah(self, _i): return self.i + _i
        def kurang(self, _i):
        return self.i - _i
    ```

    Pada kode di atas, kita membuat kelas bernama Kalkulator. Kelas ini memiliki dua metode, yaitu tambah dan kurang. Atribut yang dimiliki kelas ini hanyalah variabel "i".

    Berdasarkan PEP8, kode tersebut masih perlu diperbaiki dan ada blok kode yang akan menghasilkan error. Kita akan mengetahuinya nanti.

3. Mari kita jalankan file atau script tersebut dengan aplikasi yang telah diinstal. Buka kembali terminal Anda, pastikan membuka direktori tempat file atau script Anda berada.
   a. **Pycodestyle**

   Untuk menguji menggunakan pycodestyle, jalankan kode berikut.

   ```Plaintext
   pylint kalkulator.py
   ```

   Output yang dihasilkan adalah berikut.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:138a11d39cda96e183b2a5b32b3c5e3f20230823192816.png)

   Gambar di atas adalah tampilan terminal ketika Anda menjalankan script menggunakan pycodestyle.

   b. **Pylint**

   Untuk menguji menggunakan pylint, jalankan kode berikut.

   ```Plaintext
   pylint kalkulator.py
   ```

   Output yang dihasilkan adalah berikut.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:248507f072ac6c74341b8903ced0d07820230823192952.png)

   Gambar di atas adalah tampilan terminal ketika Anda menjalankan script menggunakan pylint

   c. **Flake8**

   Untuk menguji menggunakan flake8, jalankan kode berikut.

   ```Plaintext
   flake8 kalkulator.py 
   ```

   Output yang dihasilkan adalah berikut.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:91b4268978cf80b7d39ef3c8aad4c7c020230823193054.png)

   Gambar di atas adalah tampilan terminal ketika Anda menjalankan script menggunakan flake8.

Pesan dari ketiga aplikasi tersebut ternyata beragam, tetapi ada satu kesamaan, yakni ketiganya menunjukkan pola yang sama di awal pesan berupa nama file diikuti dengan baris dan kolom.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:229d7b4243edfb42235e72c531c1c2c120230823192255.jpeg)

Untuk mengetahui mana baris dan kolom, perhatikan gambar di bawah ini.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:d7e37b7d7642eee485b9d7d4226a0aa720230823192255.jpeg)

Gambar di atas menunjukkan baris dan kolom dari kode yang telah kita buat sebelumnya. Kita ambil satu contoh, ketika menggunakan pylint pesan yang ditampilkan adalah "kalkulator.py 7:5 Parsing failed: 'expected an indented block after function definition on line 6 (<unknown>, line 7)' (syntax-error).". Ini artinya pylint menunjukkan bahwa pada baris 7 kolom ke-5 seharusnya memiliki indentasi setelah mendefinisikan fungsi di baris ke-6. 

Baik flake8 maupun pylint, keduanya memberikan pesan bahwa ada error indentasi, sedangkan pada pycodestyle format kode juga dicek sesuai PEP8 sehingga akan menghasilkan pesan yang berbeda, yakni error indentasi dan blank line.

Mari perbaiki kodenya, silakan ganti dengan kode berikut.

```python
class Kalkulator:
    """kalkulator tambah kurang"""
    def __init__(self, _i):
        self.i = _i
 
    def tambah(self, _i): return self.i + _i
 
    def kurang(self, _i):
        return self.i - _i
```

Pada kode di atas, kita telah melakukan beberapa perbaikan. Pertama adalah kita menambahkan new line (garis baru) pada setiap penulisan setelah blok fungsi, sekarang setiap fungsinya dipisahkan oleh satu baris kosong. Kedua, kita menambahkan indentasi pada metode "kurang". 

Kemudian jalankan kembali file tersebut menggunakan ketiga aplikasi yang sebelumnya digunakan.

Jika diproses menggunakan pycodestyle dan flake8, itu tidak akan memunculkan pesan seperti gambar di bawah ini. Hal ini berarti menjelaskan kodenya sudah lebih baik.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:bf00db5ba34d695e76db376948c4865420230823192254.jpeg)

Namun, ketika Anda menjalankannya menggunakan pylint, beberapa pesan peringatan muncul. Hal ini karena kita perlu menambahkan dokumentasi pada setiap fungsi dan kelas yang dibangun. Tidak apa-apa, itu merupakan peringatan untuk membuat kode kita lebih sempurna.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e67c91e8a3997ebe3ffd5de5c75c2b1420230823192255.jpeg)

## **Memformat Kode**

Jika proses lint atau linting hanya melakukan pengecekan, kali ini adalah arahan gaya penulisan kode agar bisa sesuai dengan PEP8. Kita akan kembali menggunakan beberapa aplikasi yang nantinya akan diinstal. 

Proses memformat kode akan sama dengan cara melakukan proses linting, yaitu kita akan mengeksekusi script. Perbedaannya adalah output yang dihasilkan. Jika proses linting menghasilkan pesan dengan menunjukkan baris dan kode yang mengalami kesalahan, proses memformat kode akan memberikan pesan berupa kode yang telah diperbaiki. Ini artinya Anda tidak perlu mengubah kode secara manual.

Berikut adalah tiga jenis aplikasi untuk memformat kode, silakan dicermati dahulu. Tidak harus semuanya diinstal, hanya paket yang menurut Anda sesuai kebutuhan saja yang digunakan.

1. **black**

    [black](https://github.com/psf/black) adalah proyek open source yang dikembangkan di repository Python Software Foundation (PSF) dengan lisensi MIT. Untuk mendapatkan gambaran, versi online (tidak resmi) ada di https://black.now.sh.

    Untuk instalasi, silakan buka terminal Anda dan jalankan kode berikut.

    ```Plaintext
    pip install black
    ```
2. **YAPF (Yet Another Python Formatter)**

    [YAPF](https://github.com/google/yapf) adalah proyek open source yang dikembangkan di repository Google dengan lisensi Apache.

    Untuk instalasi, silakan buka terminal Anda dan jalankan kode berikut.

    ```Plaintext
    pip install yapf
    ```

3. **autopep8**

    [autopep8](https://github.com/hhatto/autopep8) adalah proyek open source (berlisensi MIT) yang termasuk paling awal untuk memformat kode dengan bantuan lint pycodestyle.

    Untuk instalasi, silakan buka terminal Anda dan jalankan kode berikut.

    ```Plaintext
    pip install autopep8
    ```

Selanjutnya, mari kita masuk ke pembahasan cara kerja ketiganya. Kita akan menggunakan kode yang sama seperti sebelumnya, yaitu kalkulator.py. Pastikan Anda sudah menginstal aplikasi yang disebutkan sebelumnya.

1. Buka script kalkulator.py dan salin kode berikut.

    ```python
    class Kalkulator:
        """kalkulator tambah kurang"""
        def __init__(self, _i):
            self.i = _i
        def tambah(self, _i): return self.i + _i
        def kurang(self, _i):
            return self.i - _i
    ```

    Contoh di atas merupakan kode kalkulator yang sama seperti materi sebelumnya, saat kita mendefinisikan kelas kalkulator dengan dua metode, yaitu tambah dan kurang serta satu atribut objek.

2. Mari jalankan file atau script tersebut dengan aplikasi yang telah kita instal. Buka kembali terminal Anda, pastikan membuka direktori tempat file atau script Anda berada.
   
      a. **black** 
      
      Untuk menguji menggunakan black, jalankan kode berikut.

      ```Plaintext
      black kalkulator.py
      ```

      Ketika Anda menjalankan perintah di atas, kode yang berada di dalam kalkulator.py akan mengalami perubahan. Silakan cek kembali kode dalam file Anda.

      b. **yapf**

      Untuk menguji menggunakan yapf, jalankan kode berikut.

      ```Plaintext
      yapf kalkulator.py
      ```

      Ketika Anda menjalankan perintah di atas, tidak akan mengubah kode Anda secara langsung, seperti black. Namun, yapf akan memberikan saran kode melalui terminal.

      ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:cf1f60b0fa519d9814e994ff3e37fbd220230823193800.png)

      Gambar di atas adalah tampilan layar terminal menunjukkan saran kode yang telah diperbaiki oleh yapf. 

      c. **autopep8**

      Cara kerja autopep8 dapat seperti yapf yang akan memberi saran kode ke layar terminal atau seperti black yang akan mengubah langsung isi file kalkulator.py.

      Jika Anda ingin autopep8 memberikan saran kode, silakan jalankan kode berikut.

      ```Plaintext
      autopep8 kalkulator.py
      ```

      Ketika dijalankan, layar akan memunculkan saran kode yang telah diperbaiki seperti pada gambar berikut.

      ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:30f97cfbed4e720b5a76ef2b2ff807b920230823193847.png)

      Jika Anda ingin mengubah kode file secara langsung, silakan jalankan kode berikut dan periksa kembali file kode Anda.

      ```Plaintext
      autopep8 --in-place --aggressive --aggressive kalkulator.py
      ```

Setelah mempelajari kedua mekanisme: pengecekan gaya penulisan (style guide) dan proses memformat kode, Anda tinggal fokus dengan penulisan indentasi dalam kode Python. Untuk format sisanya, aplikasi-aplikasi yang telah kita pelajari di atas dapat membantu.

Jika Anda menulis dengan editor kode yang sangat sederhana, anggap saja seperti notepad di Windows atau pico/nano di Linux, dalam menuliskan kode Python cukup perhatikan indentasi untuk setiap baris pernyataan (statement). Setelah selesai menuliskan kodenya, simpan kodenya sebagai file .py, lalu eksekusi perintah linter atau langsung eksekusi perintah aplikasi untuk memformat kode. Hasilnya, kode Anda sudah dirapikan sesuai arahan gaya penulisan PEP8 juga dilakukan pengecekan terhadap kemungkinan kesalahan (jika Anda lakukan linting).

Untuk Anda yang mengikuti instalasi editor kode PyCharm dalam materi awal, secara bawaan sudah menggunakan fitur inspeksi dengan kemampuan yang kurang lebih sama. Namun jika Anda mau, bisa juga menambahkan aplikasi lint yang sudah dijelaskan sebagai tambahan dari bawaan. Demikian juga untuk fitur format ulang kode juga tersedia secara bawaan di aplikasi PyCharm.


## **Style Guide Statement Gabungan**


## **SAMPE SINI DULU LA YA UTK GUIDESTYLE, KYK GA MATCHING NIH LANJUT KE LIBRARY2 PYTHON AJA**


