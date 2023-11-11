---
title: Berkenalan dengan Python
date: 2023-11-11
tags: [python, gdsc]
category: Python
layout: post
image: https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:846988f563c287badaed1f1342f543ba20230726105936.jpeg
---


### Pengenalan Python

Python, yang diperkenalkan oleh Guido van Rossum pada tahun 1991, merupakan bahasa pemrograman serbaguna yang didesain untuk kemudahan pembacaan dan pemahaman. Van Rossum menghadirkan Python dengan fokus pada kejelasan kode dan penanganan kesalahan yang efektif. Berkat prinsip-prinsip ini, Python berhasil meraih popularitasnya dan diadopsi secara luas di berbagai bidang.

Dengan kemampuannya yang beragam, Python dapat diimplementasikan dalam berbagai sektor, termasuk pengembangan server-side untuk website, analisis data, dan bahkan dalam konteks pembelajaran mesin. Sebagai bahasa pemrograman yang adaptif, Python memiliki keunikan tersendiri, salah satunya adalah ketidakwajiban penggunaan titik koma atau semikolon (;) pada akhir setiap baris kode. Contoh sintaks kode program dapat ditemukan di bawah ini.

```python
print("Hello World!")
```

Perintah tersebut digunakan untuk menampilkan atau mencetak teks ke layar komputer. Dalam sintaks ini, kita menggunakan kata "print," yang jika diterjemahkan ke dalam bahasa Indonesia memiliki arti mencetak. Jelas ini lebih akan lebih mudah dipahami.

### Versi Python

Sejak awal kemunculannya, Python terus mengalami perkembangan dengan penambahan berbagai fitur baru. Pada perilisan Python versi 2 pada Oktober 2000, beberapa fitur baru diperkenalkan, termasuk garbage collector dan manajemen memori.

Kedua fitur tersebut memiliki tujuan untuk membantu para pengembang dalam mengelola memori secara lebih efisien, sehingga mereka dapat fokus pada pengembangan aplikasi atau program tanpa harus terlalu memikirkan kompleksitas manajemen memori. Hal ini penting karena setiap baris kode yang dibuat akan disimpan dalam memori komputer, dan jika manajemennya tidak terkendali, dapat menyebabkan kehabisan memori pada komputer.

Perkembangan Python berlanjut dengan perubahan mayor dari versi 2 menjadi versi 3, yang dirilis pada Desember 2008. Python 3 tidak lagi mendukung kompatibilitas mundur, artinya beberapa sintaksis yang berjalan di versi 2.x tidak dapat digunakan di versi 3 ini. Perubahan tersebut bertujuan untuk menjaga prinsip-prinsip Python yang menekankan pada kejelasan, konsistensi, dan eksplisit.

Hingga saat ini, Python versi 3.x terus mengalami peningkatan dan dirilis secara berkala. Pada penulisan kelas ini, Python versi 3.11 merupakan versi terbaru yang menawarkan peningkatan kecepatan sekitar 10-60% dibandingkan dengan versi sebelumnya, yaitu 3.10.

Informasi terkait Python versi 3.11 dapat ditemukan secara detail melalui [dokumentasi resmi Python](https://docs.python.org/release/3.11.2/whatsnew/3.11.html).

## Python Overview

Setelah tahun 2000, Python mengembangkan beberapa sistem yang mendukung transformasinya menjadi bahasa pemrograman yang berkelanjutan dan terus berkembang seiring berjalannya waktu. Dua inisiatif yang memiliki dampak signifikan dalam pencapaian ini adalah Python Enhancement Proposals (PEP) dan Python Software Foundation (PSF).

Python Software Foundation (PSF) adalah sebuah organisasi non-profit yang berkomitmen untuk menciptakan lingkungan yang mendukung pertumbuhan dan perkembangan Python beserta komunitasnya. PSF berperan penting dalam mengarahkan pengembangan Python setelah peran Guido van Rossum (GvR) sebagai Benevolent Dictator For Life (BDFL) berakhir pada 12 Juli 2018. Sebelum tanggal tersebut, hampir semua keputusan pengembangan Python diambil oleh GvR.

Sistem kedua yang memainkan peran kunci adalah Python Enhancement Proposals (PEP), yang menjadi pedoman dalam pengembangan Python. Sebagai contoh, perubahan-perubahan dalam versi Python yang telah Anda pelajari sebelumnya merujuk pada panduan yang disebut PEP atau Python Enhancement Proposals. Perlu dicatat bahwa panduan tersebut tidak terbatas pada satu dokumen, melainkan ribuan panduan yang menjadi pedoman perkembangan Python. Informasi rinci mengenai PEP dapat ditemukan di [tautan berikut](https://peps.python.org/pep-0000/).

Salah satu panduan utama yang menjadi landasan pengambilan keputusan dalam pengembangan Python adalah PEP 20 yang dikenal sebagai Zen of Python. PEP 20 ini menjadi pijakan untuk setiap langkah pengembangan Python. Berikut adalah isi dari panduan tersebut.

Salah satu pedoman kunci yang dipegang sebagai acuan adalah PEP 20 yang diberi judul Zen of Python. PEP 20 ini berfungsi sebagai landasan atau akar dalam setiap proses pengambilan keputusan dalam pengembangan Python. Di bawah ini adalah esensi dari panduan tersebut.

## Mengapa Python

Mengapa memilih Python untuk memulai pemrograman? Selain mudah dipahami bagi pemula, Python terbukti efektif dengan banyaknya pengguna, seperti yang terungkap dalam [Developers Survey 2022](https://survey.stackoverflow.co/2022/#most-popular-technologies-language-learn) di Stack Overflow. Python menempati peringkat tiga sebagai bahasa pemrograman favorit untuk pembelajaran.

Keunggulan lainnya adalah kemampuan Python dalam mendukung berbagai gaya pemrograman, termasuk terstruktur, prosedural, berorientasi objek, dan fungsional.

Terakhir, Python dapat dimanfaatkan dalam berbagai sektor berikut.

- Web development (server-side);
- Software development;
- Mathematics & data science;
- Machine learning;
- System scripting;
- Internet of Things (IoT) development; dan lain lain.

## Menjalankan Kode Program Pertama

```python
print("Hello World!")
```

Seperti yang dijelaskan sebelumnya, "print()" adalah sintaks untuk menampilkan pesan di layar komputer. Salah satu contohnya adalah menampilkan kalimat "Hello World!" seperti yang tertera di atas.

Mari kita telusuri lebih lanjut dengan mengubah teks yang ingin Anda tampilkan! Anda bisa menampilkan nama lengkap atau pesan apapun yang ingin Anda sampaikan kepada dunia. Pastikan untuk menggunakan tanda kutip ("") saat menggantinya.

## Bersiap Membuat Kode Program di Lokal

Untuk menjalankan program Python di komputer lokal, Anda perlu melakukan dua langkah penting: menginstal Python dan menyiapkan Integrated Development Environment (IDE).

### Instal Python

Sebelum memulai proses instalasi, pastikan Python belum terpasang di komputer lokal Anda. Jika Anda menggunakan Mac OS atau Ubuntu, Python umumnya sudah terinstal secara otomatis. Untuk memeriksa apakah Python sudah terpasang atau belum, ikuti langkah-langkah berikut.

1. Masuk ke terminal atau *command prompt*.
Pengguna Windows, bisa melakukannya dengan klik **windows button** lalu ketik “Command Prompt”.
Pengguna Mac OS, bisa melakukannya dengan menekan **command + spacebar**. Lalu ketik “Terminal”.
Pengguna Ubuntu, bisa menggunakan keyboard shortcut dengan menekan **Ctrl + Alt + T**.
2. Masukan perintah berikut dan jalankan dengan menekan Enter.
   
   ```Plaintext
   python --version
   ```

3. Baik Mac OS, Ubuntu, dan Windows akan menampilkan versi Python yang telah terinstal.

    ![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/36672243-10b6-4003-91bd-d9f2173da531)

Jika Python 3 sudah terinstal di komputer Anda, langsung beralih ke langkah menyiapkan Integrated Development Environment (IDE). Jika belum terinstal, ikuti langkah-langkah berikut.

Ada berbagai cara untuk menginstal Python, tergantung pada sistem operasi (OS) yang Anda gunakan dan sumber instalasi yang dipilih. Untuk mempermudah, berikut disajikan panduan instalasi Python yang mudah diikuti. Silakan pilih  sesuai sistem operasi yang digunakan ya.

#### Windows

1. Kunjungi situs berikut :  [https://www.python.org/downloads/windows/]( https://www.python.org/downloads/windows/),
2. Pilih versi Python Anda, kami merekomendasikan versi 3.7 atau lebih tinggi.
3. Pilih Windows installer (32-bit) atau Windows installer (64-bit). Pemilihan ini akan mempengaruhi jumlah memori yang dapat digunakan. Umumnya, komputer saat ini mendukung 64 bit.
4. Setelah installer berhasil diunduh, lakukan instalasi dan pastikan mencentang “Add Python 3.7 to PATH”.
   
   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:97f5129ed1c5a0ff94d128b6466ee3a320230726112828.png)

   **Catatan**: Sebaiknya klik Disable path length limit untuk mengatasi problem path yang melebihi 255 karakter (nama folder yang terlalu panjang).

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:d209a188634bbbdd4d5945c15233a2ee20230726112915.png)

Perlu dicatat, jika Anda menghadapi kesulitan selama proses instalasi, Anda dapat merujuk ke sumber informasi di: [https://docs.python.org/id/3.8/installing/index.html](https://docs.python.org/id/3.8/installing/index.html), menggunakan mesin pencari, atau bertanya pada ChatGPT atau Google Bard atau pada grup wa yg telah dibuatkan.

Dengan Python yang sudah terinstal, mari kita persiapkan lingkungan kerja dengan menyiapkan Integrated Development Environment (IDE).

## Menyiapkan Integrated Development Environment (IDE)

Integrated Development Environment (IDE) adalah sebuah aplikasi yang menyediakan fasilitas lengkap untuk pengembangan aplikasi bagi para programmer. Salah satu fitur utama dari IDE adalah kode editor yang memungkinkan Anda membuat dan mengubah kode program dengan lebih efisien.

Ada berbagai IDE populer yang dapat digunakan untuk menulis program menggunakan bahasa Python. Berikut adalah beberapa contoh IDE yang sering digunakan.

### Visual Studio Code

Visual Studio Code merupakan IDE yang sangat populer untuk membuat kode program dalam berbagai bahasa pemrograman. Sebuah fakta menarik tentang Visual Studio Code adalah ketersediaan ribuan ekstensi atau plugin yang dapat meningkatkan produktivitas Anda dalam pengembangan program. Ekstensi atau plugin adalah komponen tambahan yang dapat memperluas fungsionalitas IDE. Contohnya, terdapat ekstensi khusus bernama "Python" yang menyediakan fitur-fitur seperti debugging, pemformatan kode, dan lainnya secara spesifik untuk pembuatan program Python.

Anda dapat mengeksplorasi lebih lanjut mengenai plugin Visual Studio Code di laman [berikut](https://code.visualstudio.com/docs/editor/extension-marketplace).

Visual Studio Code dapat digunakan untuk membuat program menggunakan bahasa Python. Berikut adalah langkah-langkah instalasi Visual Studio Code.
1. Silakan kunjungi laman berikut: https://code.visualstudio.com/.
2. Unduh Visual Studio Code berdasarkan sistem operasi Anda.
3. Instal Visual Studio Code.
4. Jika sudah selesai, aplikasi akan terbuka dengan file dan proyek baru.

    ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:0a2e699ed65c189e9207b3048068783620230726115224.png)

### PyCharm

PyCharm adalah Integrated Development Environment (IDE) yang dirancang khusus untuk memfasilitasi pengembangan aplikasi dengan menggunakan bahasa pemrograman Python. Dengan fokus pada tujuan ini, PyCharm menyediakan sejumlah fitur khusus untuk membantu para programmer dalam memperlancar proses pengembangan aplikasi Python.

Anda dapat menginstal PyCharm dengan mengikuti langkah berikut.
1. Kunjungi laman berikut: https://www.jetbrains.com/pycharm/. 
2.Unduh PyCharm berdasarkan sistem operasi Anda, lalu pilih Community - For pure Python development.
3. akukan instalasi dan PyCharm akan terbuka dengan file dan proyek baru.

### Jupyter Notebook

Jupyter Notebook adalah Integrated Development Environment (IDE) berbasis web yang memungkinkan Anda membuat, berbagi, dan berkolaborasi dalam penulisan kode program dengan programmer lainnya. Jupyter Notebook terdiri dari sel-sel yang dapat berisi baik kode maupun teks. Keunikan Jupyter Notebook terletak pada kemampuannya untuk menjalankan setiap sel secara terpisah, menampilkan hasilnya tanpa memerlukan eksekusi seluruh kode secara menyeluruh.

Anda dapat mengikuti langkah-langkah berikut untuk menginstal Jupyter Notebook.
1. Buka terminal/command prompt.
2. Jalankan kode berikut untuk memastikan “pip” Anda menggunakan versi terbaru. Tenang, tidak apa-apa jika Anda belum tau pip. Kita akan mempelajarinya nanti.

    ```Plaintext
    pip install --upgrade pip
    ```

3. Jalankan kode berikut untuk melakukan instalasi Jupyter Notebook
   ```Plaintext
   pip install jupyter
   ```
4. Setelah terinstal, akses Jupyter Notebook dengan menjalankan perintah berikut

    ```Plaintext
    jupyter notebook
    ```

    **Catatan**: Pastikan Anda membuka folder proyek yang Anda inginkan. Contohnya, pada gambar di bawah ini, kami membuka folder “Memulai Pemrograman dengan Python\Jupyter Notebook”

    ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:6ae440fc5be31c3a1123e335f359dd3720230726115550.png)

    Anda dapat memilih folder dengan menjalankan perintah berikut.

    ```Plaintext
    cd <nama folder>
    ```

    Dengan menjalankan sintaks di atas, Anda akan membuka folder yang dipilih. Silakan menyesuaikan kembali folder mana yang Anda inginkan.

5. Terakhir, setelah Anda menjalankan perintah sebelumnya, laman Jupyter Notebook akan terbuka.

    ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:fcac709d264e65d43ed239db67d585e220230726115950.png)

### Google Colaboratory 


Google Colaboratory adalah Integrated Development Environment (IDE) berbasis web yang dapat diakses secara daring dan memiliki fungsi serupa dengan Jupyter Notebook. Kelebihan Google Colaboratory adalah Anda tidak perlu melakukan instalasi seperti yang biasanya diperlukan saat menggunakan Jupyter Notebook. Cukup dengan mengakses laman [https://colab.research.google.com/](https://colab.research.google.com/), proyek Google Colaboratory dapat langsung dibuka, seperti yang terlihat pada gambar di bawah ini.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:2a2d342242eb69dc5c631f2e03f1a39d20230726112203.jpeg)

## Menjalankan Kode Program di Lokal


Setelah menyelesaikan instalasi Python dan memilih IDE, mari kita jalankan kode program pertama Anda menggunakan komputer lokal.

Terdapat tiga mode untuk menjalankan kode program Python di komputer lokal, yaitu mode interaktif, script, dan notebook.

### Kode Interaktif

![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/7e93f40c-9773-43bb-ac97-276f7f7b80bd)


Mode interaktif memungkinkan Anda mengeksekusi kode Python langsung dari terminal atau command prompt. Biasanya, mode ini digunakan oleh para programmer untuk eksplorasi dan eksekusi kode dalam jumlah baris yang sedikit, sekitar dua hingga tiga baris. Pastikan Python sudah terinstal sebelum menggunakan mode interaktif ini.

Berikut adalah langkah-langkah untuk menjalankan kode menggunakan mode interaktif.
1. Buka terminal/command prompt.
2. Jalankan perintah berikut.
    ```Plaintext
    Jalankan perintah berikut.
    ```
3. Tampilan mode kode interaktif akan muncul seperti gambar di bawah ini.

    ![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/a4776b8d-b096-480d-9786-a93f3b68a980)

4. Sekarang, coba jalankan kode berikut.

    ```python
    print("Hello World!")
    ```

    Kode di atas akan menampilkan teks “Hello World!” pada terminal Anda. Selain itu, Anda juga bisa melakukan operasi matematika pada terminal Anda. Silakan masukkan kode berikut.

    ```
    2+2
    ```
5. Jika ingin keluar dari kode interaktif, gunakan perintah `exit()`

    ![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/92419df0-8d33-4f0a-901d-82a4f0e5830c)

### Script

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:c62e2046e66ff24501a6c7f4836eece720230726161327.png)

Mode script adalah mode yang paling umum digunakan oleh para programmer untuk membuat kode program. Dengan cara sederhana, Anda membuat sebuah file yang disebut sebagai script dengan ekstensi ".py". Untuk menjalankan kode yang ada dalam file tersebut, Anda perlu mengeksekusi file tersebut.

Berikut adalah langkah-langkah untuk menjalankan kode menggunakan mode script.
1. Buka IDE atau editor kode Anda, misalnya **Visual Studio Code**.
2. Buka folder dengan mengakses, **File > Open Folder** yang berada di pojok kiri atas. Lalu, silakan memilih folder yang bertujuan untuk menyimpan script file Anda nanti.
3. Buat file Python terbaru dengan mengakses **File > New File** yang berada di pojok kiri atas.
4. Jika Anda memiliki opsi untuk memilih “Python File”, ikuti langkah berikut.
   1. Pilih opsi tersebut, Anda akan membuat file Python (file berekstensi .py).
   2. Simpan file Anda dengan menggunakan shortcut **Ctrl + S**.
   3. Anda akan diarahkan untuk memasukkan nama dan memilih folder untuk menyimpan file tersebut, lalu klik simpan.
5. Jika Anda memiliki opsi “Text File”, ikuti langkah berikut.
   1. Pilih opsi tersebut, Anda akan membuka Text File baru.
   2. Simpan file Anda dengan menggunakan shortcut **Ctrl + S**.
   3. Anda akan diarahkan untuk memasukkan nama file dan memilih folder untuk menyimpan file tersebut.
   4. Masukkan nama file yang diinginkan dengan ekstensi .py (contoh: first-program.py), lalu klik simpan.
6. Setelah Anda membuat file Python, silakan masukkan kode program Anda. Misal, masukkan kode berikut dan simpan dengan menekan **Ctrl + S**.
   
   ```python
   print("Hello World!")
   ```
7. Sekarang, mari eksekusi file tersebut. 
   ```Plaintext
   python <nama file>.py
   ```

   ![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/62f8e63d-84d2-4565-85bf-770908a144ea)

   **Catatan**: sesuaikan “<nama file>” dengan nama file Python yang telah Anda buat.

### Notebook

Untuk menggunakan mode Notebook, Anda bisa mengakses Google Colaboratory atau mengakses Jupyter Notebook yang sebelumnya telah Anda instal.

Mari buat kode Python menggunakan Google Colaboratory dengan mengikuti langkah berikut.
1. Buka [Google Colaboratory](https://colab.research.google.com/).
2. Anda akan diperintahkan membuka file dari berbagai sumber, saat ini mari kita membuat notebook baru dengan memilih “New Notebook”.
3. Anda akan membuka proyek colab baru. Di sana terdapat sel kode kosong yang dapat Anda isi. Silakan masukan kode berikut.

   ```python
   print("Hello World!")
   ```

4. Jalankan sel tersebut dengan klik tombol “Run cell” yang ada di sebelah kiri. Colab akan menjalankan kode tersebut dan menampilkan hasilnya.
5. Jalankan sel tersebut dengan klik tombol “Run cell” yang ada di sebelah kiri. Colab akan menjalankan kode tersebut dan menampilkan hasilnya.
   
   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:2cbdd3ddea68330f575a6bfa9d91758520230726162514.png)

   Sampai sini, Anda telah mempelajari berbagai IDE dan menjalankan kode program menggunakan lokal komputer. Anda bisa mencoba mengikuti kelas ini sembari membuat kode program sendiri dan menjalankannya menggunakan lokal komputer.

## Variable dan Assignment

Mari kita sekarang fokus pada pembahasan lebih rinci tentang pembuatan kode program dalam Python.

Saat Anda membuat kode program, Anda sebenarnya sedang menuliskan serangkaian instruksi yang akan dieksekusi oleh komputer. Dalam Python, setiap baris kode berfungsi sebagai instruksi yang memberi tahu komputer tentang tindakan yang harus dilakukan selanjutnya. Sebagai contoh, pada perintah berikut, komputer diinstruksikan untuk mencetak teks "Hello World!".

   ```python
   print("Hello World!")
   ```

   Teks tersebut sebenarnya merupakan data yang memiliki tipe string (penjelasan lebih lanjut akan disampaikan pada materi "Berkenalan dengan Tipe Data"). Dalam prakteknya, setiap data yang digunakan umumnya disimpan dalam variabel. Dengan demikian, ketika Anda perlu menggunakan kembali data tersebut, Anda hanya perlu memanggil variabel yang telah dibuat.

### Variable

Variabel dapat didefinisikan sebagai lokasi dalam komputer yang digunakan untuk menyimpan nilai dengan tipe data tertentu. Saat Anda mendefinisikan variabel, Anda sebenarnya memberikan instruksi kepada komputer untuk mencari dan menetapkan ruang kosong yang akan digunakan untuk menyimpan nilai atau data.

Proses pembuatan variabel erat kaitannya dengan assignment. Saat Anda memesan ruang kosong dalam komputer, langkah selanjutnya adalah memberikan nilai atau data ke dalam ruang kosong tersebut, bukan hanya meninggalkannya kosong.

Pentingnya variabel terletak pada kemampuannya untuk menyimpan nilai yang dapat digunakan kembali. Selanjutnya, mari kita bahas lebih lanjut mengenai assignment, yang memang sangat terkait dengan pembuatan variabel seperti yang dijelaskan sebelumnya.

### Assignment

Assignment merupakan proses pemberian atau penetapan nilai pada sebuah variabel. Dalam Python, proses melakukan assignment dapat mengikuti formula berikut.

```
<Ruas Kiri> = <Ruas Kanan>
```

**Catatan**:
1. Ruas kiri adalah variabel.
2. Ruas kanan adalah ekspresi/nilai/variabel yang sudah jelas nilainya.

Kita akan mempelajari ekspresi lebih detail pada materi ekspresi. Saat ini Anda cukup memahami bahwa ruas kanan dapat berupa ekspresi/nilai/variabel.

Mari kita implementasikan proses assignment dengan menggunakan kode sebelumnya.

```python
# main.py
greeting = 'Hello World!'   #  Ini adalah assignment
print(greeting)

"""
Output: Hello World!
"""
```
Pada kode di atas, teks “Hello World” disimpan pada variabel “greeting”. Jadi, setelah proses assignment tersebut, variabel “greeting” memiliki nilai “Hello World!”.

Proses assignment juga bisa melibatkan ekspresi atau variabel lainnya, contohnya berikut.

```python
# main.py
"""
addition adalah variabel yang bernilai ekspresi 2+2,
result adalah hasil pengurangan dari variabel addition dikurangi 1
"""

addition = 2+2
result = addition - 1
print(result)


"""
Output: 3
"""
```

Pada kode di atas, addition adalah variabel yang di dalamnya menyimpan nilai ekspresi "2+2". Lalu variabel tersebut dioperasikan dengan dikurangi 1. Setelah dikurangi, hasil tersebut disimpan pada variabel “result”.

## Input/Output dan Komentar

Dalam bagian ini, Anda akan mempelajari tentang variabel yang nilainya tidak ditentukan oleh Anda sebagai programmer, tetapi ditentukan oleh pengguna.

### Input

Untuk memungkinkan pengguna memberikan masukan, Anda dapat menggunakan perintah input(). Berikut implementasinya menggunakan Python.

```python
name = input('Masukan nama Anda: ')
```

![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/c83a6a25-0e05-4914-ab92-cff4b5d02825)


Jalankan kode tersebut menggunakan notebook atau IDE Anda. Ketika kode tersebut dijalankan, program akan meminta Anda sebagai pengguna untuk memasukkan nilai.

### Output

Sebenarnya, Anda telah mengenal output dari materi sebelumnya. Fungsi print() yang sebelumnya Anda gunakan adalah perintah untuk menampilkan output ke layar komputer Anda. Mari gabungkan fungsi input() dan output() berdasarkan contoh kode sebelumnya.

```python
name = input('Masukan nama Anda: ')
print(name)
```
Sekali lagi, jalankan kode di atas pada notebook atau IDE Anda. Lalu, Anda akan diminta untuk memasukkan nilai berupa "GDSC USU". Kemudian, nilai "GDSC USU" tersebut akan ditampilkan ke layar.

![image](https://github.com/ridopandiSinaga/JavaScript-GDSC-USU/assets/89272004/fea2459c-c5b3-4c4b-a251-e208e683ff50)


### Comment

Sebagai seorang programmer, penting untuk memastikan bahwa kode yang dibuat dapat terbaca dan dipahami oleh programmer lain. Salah satu cara untuk mencapai hal tersebut adalah dengan menggunakan fitur komentar, yang berguna untuk memberikan penjelasan mengenai fungsi, baris kode, atau informasi lainnya.

Komentar adalah barisan teks yang akan diabaikan oleh Python saat program dijalankan. Anda dapat menulis satu atau beberapa baris teks sebagai komentar dalam kode program untuk memberikan klarifikasi atau dokumentasi kepada programmer lain yang membaca kode tersebut.

### Inline Comment

Inline comment pada Python merupakan komentar yang biasanya diletakkan pada baris yang sama dengan kode atau satu baris sebelum kode. Penggunaan inline comment diperuntukkan untuk menjelaskan baris kode secara spesifik. Berikut adalah implementasi inline comment.

```python
# Variabel ini menyimpan nama 'Perseus Evans'
name = 'Perseus Evans'
```

Ketika Anda menjalankan kode tersebut, teks yang diawali dengan “#” akan dianggap sebagai komentar. Jadi, Python akan mengabaikan teks tersebut dan tidak memunculkan error.

### Block Comment

Berbeda dengan inline comment yang hanya satu baris, block comment merupakan satu blok kode dengan tujuan menjelaskan kode kompleks atau membuat dokumentasi dari sebuah fungsi atau modul.  

Penggunaan block comment diawali dan diakhiri dengan tiga double quote (“””) atau tiga single quote (‘’’). Berikut adalah implementasi block comment menggunakan tiga double quote (“””).

```python
"""
Ini adalah Block Comment,
Teks ini akan diabaikan oleh Python.
"""
print("Hello World!")
```

Setelah menjalankan kode di atas, teks yang diapit oleh tiga double quote (“””) akan dianggap sebagai komentar sehingga akan diabaikan oleh komputer.

Selain itu, berikut adalah implementasi block comment menggunakan single quote (‘’’).

```python
'''
Ini adalah Block Comment,
Teks ini akan diabaikan oleh Python.
'''
print("Hello World!")
```

Kedua cara tersebut sama-sama mengarahkan program Anda untuk menganggap teks di dalamnya sebagai komentar, sehingga ketika dijalankan tidak akan memunculkan error.



