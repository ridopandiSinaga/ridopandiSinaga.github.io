---
title: Library Populer pada Python
date: 2023-11-22
tags: [python_lanjutan, gdsc]
category: python
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## **Pengenalan Library**

Dalam pengembangan program atau aplikasi, kita tidak akan lepas dari peran **package** atau **library**. Sebagaimana yang sudah dijelaskan dalam materi-materi sebelumnya, package adalah sebuah direktori yang berisi satu atau lebih modul yang terkait dan saling berhubungan, sedangkan library adalah koleksi dari banyaknya modul dan paket yang saling terkait dan dapat digunakan berulang kali. 

Pada materi ini, kita akan mempelajari berbagai library yang telah dikembangkan oleh banyak pengembang dan dapat digunakan kembali oleh kita. Jumlah library Python sangat banyak yang terbagi menjadi **Python Standard Library** dan **Python External Library**.

Python Standard Library adalah jenis library yang telah terinstal secara otomatis ketika kita melakukan instalasi Python. Anda tidak perlu melakukan instalasi kembali jika ingin menggunakannya. Beberapa contoh Python Standard Library adalah “os”, “datetime”, “re”, serta lainnya yang dapat Anda baca lebih lengkap pada laman [berikut](https://docs.python.org/3/library/).

Python External Library adalah kumpulan kode yang telah dikembangkan oleh orang lain atau komunitas dan disediakan dalam bentuk paket atau modul yang dapat diimpor. Jenis library ini mengharuskan Anda untuk melakukan instalasi agar dapat digunakan. External library ini dikembangkan oleh individu atau organisasi di luar tim inti pengembang Python. 

Untuk melakukan instalasi library eksternal, Anda dapat melakukan beberapa cara, seperti menggunakan PIP dan conda.

### **PIP**

PIP adalah package manager resmi dari Python yang dapat digunakan untuk mengunduh, menginstal, menghapus, dan mengelola package Python dari Python Package Index (PyPI) dan repositori lainnya. PyPI merupakan repositori online yang menyediakan ribuan package dari Python dan siap digunakan oleh para pengembang.

Selain mengelola paket, Anda juga bisa membuat lingkungan virtual dalam Python menggunakan PIP. Hanya saja, pip cenderung difokuskan untuk mengelola instalasi paket dibanding lingkungan virtual. Lingkungan virtual memungkinkan kita untuk membuat sebuah lingkungan terisolasi yang terpisah satu sama lain. Kita akan bahas lebih dalam terkait lingkungan virtual pada materi conda.

Kabar baiknya, pip biasanya telah terpasang secara otomatis jika Anda menggunakan Python 2 untuk versi 2.7.9 ke atas atau Python 3 untuk versi 3.4 ke atas. Maka dari itu, silakan periksa bahwa pip telah terpasang dengan menjalankan perintah berikut.

```shell
pip --version
```

Jika layar tidak memunculkan error seperti gambar berikut, pip telah terinstal di lokal komputer Anda.

![image](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/0bc19875-837d-4c5b-b80d-a4b3e1a5290e)

Jika lokal komputer Anda belum memiliki pip, Anda bisa mengikuti langkah-langkah berikut.

1. Unduh file berikut: [https://bootstrap.pypa.io/get-pip.py.](https://bootstrap.pypa.io/get-pip.py) 
2. Buka terminal dan buka folder tempat Anda menyimpan file yang telah diunduh. Kemudian jalankan perintah berikut.
   
   ```shell
   python get-pip.py
   ```

Sekarang, Anda telah menyiapkan pip sebagai package manager yang mendukung instalasi package dan library Python. Untuk melakukan instalasi, Anda bisa mengikuti perintah berikut.

```shell
pip install <nama-package>
```

Ganti \<nama-package> dengan nama package atau library yang ingin Anda unduh. Untuk menghapus package, Anda bisa mengikuti perintah berikut.

```shell
pip uninstall <nama-package>
```

Silakan ganti \<nama-package> dengan package atau library yang ingin Anda hapus.

Contohnya, jika ingin membuat lingkungan virtual menggunakan pip, Anda harus menginstal package pipenv berikut.

```shell
pip install pipenv
```

Anda bisa membaca lebih detail terkait pipenv pada laman [ini](https://pypi.org/project/pipenv/).

### **Conda**

Selain pip yang termasuk package manager resmi dari Python, ada juga conda yang merupakan package manager dan environment manager untuk Python. Conda memungkinkan kita untuk membuat dan mengelola lingkungan (environment) terisolasi atau terpisah satu sama lain. Dengan terisolasinya setiap lingkungan tersebut, kita diuntungkan untuk mencegah konflik yang terjadi antar proyek. 

Contohnya ketika Anda memiliki proyek machine learning dengan versi Python yang digunakan adalah Python 3.9. Di sisi lain, Anda memiliki proyek web development A dengan versi Python yang digunakan adalah Python 3.8. Ada pula proyek web development B dengan versi Python yang digunakan sama-sama menggunakan Python versi 3.8.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:91f2ea515a8428d4622ea58c49b5a09920230823201753.jpeg)


Dengan adanya lingkungan yang terisolasi, Anda bisa menyesuaikan semua library, modul, hingga versi Python sesuai dengan kebutuhan masing-masing proyek. Conda sendiri dapat diinstal melalui Anaconda dan Miniconda. Anaconda merupakan sistem distribusi perangkat lunak yang di dalamnya mencakup Conda. Ketika menginstal Anaconda, Anda pun dapat menggunakan beberapa library dan plugin tambahan melalui Anaconda tersebut. Miniconda adalah versi ringan dari Anaconda. Miniconda hanya berisi conda dan beberapa package dasar yang diperlukan untuk menjalankannya.

Conda sendiri hadir dalam dua bentuk utama: “conda” sebagai package dan environment manager serta “conda-forge”, yakni sebuah repositori berisi ribuan paket yang disediakan oleh komunitas Conda.

Kelebihan Conda adalah sifat tidak terbatasnya pada bahasa pemrograman Python. Conda juga mendukung paket-paket dalam bahasa pemrograman lain, seperti R.

Kali ini, kita akan menginstal conda melalui sistem terdistribusi Anaconda, silakan ikuti langkah-langkah berikut.

1. Kunjungi laman berikut: https://www.anaconda.com/download.
2. Silakan scroll ke bawah dan Anda akan menjumpai “Anaconda Installer” yang tersedia untuk tiga sistem operasi, yakni Windows, Linux, dan Mac. Silakan unduh Anaconda sesuai dengan sistem operasi Anda.
3. Setelah mengunduh, lakukan instalasi dengan menjalankan file installer yang telah Anda unduh.
4. Akan muncul tampilan berikut, lalu pilih “Next”.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:5b141d310ac02c99ca1bd6efecbe6bf620230823202151.png)

5. Anda akan diarahkan pada License Agreement. Pilih “I Agree”

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:f0dc1bfc3732f124e2b8c47351f3895b20230823202207.png)

6. Lalu Anda diharuskan untuk memilih tipe instalasi. Pilih “Just Me” untuk saat ini, kemudian klik “Next”.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e1011797f891289d46768d4faf2c209020230823202228.png)

7. Selanjutnya, Anda perlu menentukan lokasi instalasi. Silakan sesuaikan dengan kebutuhan Anda. Saat ini biarkan default saja dan pilih “Next”.

8. Anda akan diarahkan ke menu opsi “Advanced Installation”. Anda bisa membiarkan secara default atau jika ingin mengatur Anaconda3 sebagai default Python, Anda bisa mencentangnya. Setelah selesai, klik Install.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e44a8f11ce5bcad8cb33b2c47243797620230823202323.png)

9. Proses instalasi akan berjalan. Jika sudah selesai, klik Finish.


Terakhir, Anda memeri
ksa bahwa conda telah terinstal. Silakan buka “Anaconda Prompt” dengan klik windows button atau sistem pencarian sesuai sistem operasi Anda dan ketik “Anaconda Prompt”.

Pada terminal tersebut, jalankan kode berikut.

```shell
conda -V
```

Anda akan melihat versi conda yang telah terinstal, seperti pada gambar berikut.

![image](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/abb8442b-ca2b-4b75-9fe9-f0bc44a81b6c)

Anda juga bisa membuka Anaconda Navigator dengan klik windows button atau sistem pencarian lainnya yang sesuai dengan sistem operasi dan ketik “Anaconda Navigator”.

Berikut adalah tampilan dari Anaconda Navigator.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:086a85e27e4570a0f8c799fb7181780420230823201754.jpeg)


Anda bisa mempelajari Conda lebih lanjut pada laman berikut: [https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#activating-an-environment). 

Selanjutnya, mari kita pelajari beberapa library populer yang dapat digunakan oleh Anda.
