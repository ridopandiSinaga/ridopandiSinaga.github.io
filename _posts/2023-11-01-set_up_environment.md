---
title: Setup Environment
date: 2023-11-01
tags: [javascript, GDSC]
category: JavaScript
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Text Editor dan Terminal

### Text Editor

Dalam pengembangan aplikasi, kita perlu text editor. Sistem operasi seperti Windows, Linux, dan Mac OS memiliki pilihan bawaan, misalnya Notepad, Text Editors, dan TextEdit, yang dapat digunakan untuk belajar JavaScript. Pastikan text editor bisa menyimpan plain text dengan format .js. Jangan gunakan Microsoft Word karena menghasilkan rich text.

Selain text editor bawaan, ada opsi lain yang dirancang khusus untuk pemrograman, seperti Visual Studio Code. Ini dari Microsoft, gratis, dan punya fitur debugging, Git control, syntax highlighting, code completion, snippets, serta code refactoring. Tersedia untuk Windows, Mac, dan Linux. Untuk mengunduhnya, silakan kunjungi website berikut: https://code.visualstudio.com/.

### Terminal

Selanjutnya, kita akan sering menggunakan command line untuk menjalankan program dengan Node.js. Anda bisa melakukannya melalui terminal yang sudah ada di sistem operasi seperti "Terminal" untuk Linux dan MacOS, atau "CMD" atau "PowerShell" untuk Windows. Tidak perlu mengunduh aplikasi tambahan karena terminal ini sudah tersedia secara default.

## JavaScript Runtime

JavaScript mulanya hanya digunakan pada lingkungan web browser.Lingkungan web browser memungkinkan kode JavaScript untuk menerima inputan dari mouse dan keyboard pengguna.Sehingga browser menjadi lingkungan eksekusi yang paling umum untuk kode JavaScript [[1]](https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/ch01.html#idm46198582059640).

Salah satu cara termudah untuk menjalankan kode JavaScript di lingkungan browser adalah menggunakan browser itu sendiri. Kita dapat menggunakan developer tools yang disediakan oleh browser. Developer tools bisa kita akses melalui shortcut `ctrl + shift + i` atau `klik kanan -> Inspect Element`. Setelah itu pilih tab console. Developer tools ini dilengkapi dengan interpreter yang akan menjalankan kode yang kita tulis.

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/8da913ec-0794-4828-8267-ed9c61f84f48){: .shadow w="500" h="300" }

Selain digunakan di browser, JavaScript juga dapat dijalankan di platform lain, yaitu Node.js. Node.js memungkinkan JavaScript beroperasi di berbagai platform, tidak terbatas pada browser. Inilah alasan mengapa JavaScript, yang awalnya dikenal sebagai bahasa untuk front-end web, kini digunakan juga untuk pengembangan back-end situs web.

Node.js memberikan JavaScript akses ke sistem operasi, memungkinkannya untuk membaca dan menulis file, mengirim dan menerima data melalui jaringan, serta melayani permintaan HTTP. Selanjutnya, kita akan fokus pada pengembangan program JavaScript di lingkungan Node, dan untuk memulainya, kita perlu menginstal Node.js terlebih dahulu. Detailnya akan dibahas pada materi selanjutnya.

## Node.js

Node.js adalah lingkungan runtime JavaScript yang bersifat open-source dan mendukung berbagai platform. Dengan Node.js, kita dapat mengeksekusi kode JavaScript di berbagai tempat, tidak hanya dalam lingkungan browser.

Node.js menggunakan mesin JavaScript V8 (yang juga digunakan oleh Google Chrome) di luar browser, yang menghasilkan kinerja yang sangat cepat.

Selain itu, Node.js menyediakan banyak library/modul JavaScript yang mempermudah pengembangan aplikasi web. Berikut beberapa fitur penting yang membuat Node.js menjadi pilihan utama dalam pengembangan aplikasi:

1. **Asynchronous & Event-driven**: Semua API dalam Node.js bersifat asynchronous, artinya tidak menghalangi proses lain saat menunggu penyelesaian satu tugas. Server Node.js akan melanjutkan dengan pemanggilan API berikutnya dan menggunakan mekanisme pemberitahuan acara untuk menerima respon dari pemanggilan API sebelumnya.

2. **Sangat Cepat**: Eksekusi kode dengan Node.js sangat cepat karena menggunakan mesin JavaScript V8 dari Google Chrome.

3. **Single Threaded namun Sangat Scalable**: Node.js menggunakan model single thread dengan perulangan event. Ini membantu server merespons secara asynchronous dan meningkatkan skalabilitas dibandingkan dengan server tradisional yang menggunakan banyak thread untuk menangani permintaan. Node.js dirancang khusus untuk aplikasi dengan I/O yang intensif seperti server jaringan atau backend API.

Jika Anda ingin mencoba Node.js di perangkat Anda, langkah instalasinya akan dijelaskan pada materi berikutnya.

## Instalasi Node.js dengan NVM

Untuk menjalankan JavaScript di perangkat lokal, Anda perlu menginstal Node.js. Node.js memiliki dua versi yaitu LTS dan Current: LTS (Long Term Support) yaitu yang disarankan karena mendapatkan dukungan jangka panjang, sementara versi Current berisi fitur-fitur baru yang dirilis untuk Node.js.

Aesuai dengan dokumentasi yang diberikan Node.js pada halaman resminya, dan menggunakan tool bernama Node Version Manager (NVM). Saat ini, cara yang direkomendasikan dalam memasang Node.js adalah dengan bantuan NVM. Alasanya, NVM banyak menyederhanakan proses dalam pemasangan Node.js. Selain itu, Anda bisa mudah menaikkan atau menurunkan versi Node.js tanpa perlu mengulang proses instalasi.

Ikuti panduan berikut untuk memasang Node.js dengan NVM sesuai sistem operasi Anda.

### Linux dan macOS

Pada materi ini kita akan memasang Node.js di Linux dan macOS. Untuk Anda pengguna Windows, scroll materi ini ke bawah hingga menuju bagian Windows.

Seperti yang sudah disebutkan sebelumnya, kita akan memasang NVM, lalu memasang Node.js. Untuk informasi lebih detail mengenai NVM di Linux dan macOS, kunjungi halaman [NVM di GitHub](https://github.com/nvm-sh/nvm).

Berikut langkah-langkah dalam memasang NVM di Linux dan macOS.
1. Buka Terminal di macOS atau Linux
2. Kemudian jalankan perintah di bawah ini pada Terminal.
   ```Shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   ```


   **SKIP DULU**


### Windows

Sejatinya [NVM](https://github.com/nvm-sh/nvm) merupakan proyek yang dibuat khusus untuk macOS dan Linux. Namun, jika Anda menggunakan Windows, terdapat alternatif yang tool bernama nvm-windows yang bisa digunakan. Walau namanya mirip, nvm-windows tidak sama dengan nvm yang ada di Linux dan macOS.

Kita akan memasang NVM di Windows, lalu memasang Node.js. Untuk informasi lebih detail mengenai NVM di Windows, kunjungi halaman [nvm-windows](https://github.com/coreybutler/nvm-windows).

Berikut adalah langkah-langkah dalam memasang nvm-windows.
1. Kunjungi halaman unduh nvm-windows pada tautan berikut: https://github.com/coreybutler/nvm-windows/releases.
2. Unduh installer NVM (for Windows) dengan klik tautan untuk berkas nvm-setup.exe.
![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:4bf44009ca2bb497de4b16971e4f64ed20221207122006.png)
3. Setelah berkas installer diunduh, jalankan installer-nya.
4. Lakukan proses instalasi secara default dengan menekan tombol **Next** hingga selesai.
5. Setelah proses instalasi selesai, bukalah Terminal/PowerShell/CMD dalam **mode administrator**.
6. Pastikan NVM berhasil terpasang dengan menggunakan perintah berikut ini.
   ```Shell
   nvm -v
   ```
   Jika NVM berhasil terpasang, akan menampilkan hasil seperti gambar di bawah ini.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1dcd0c36f65c674cb77908d47bd35bdd20221207122359.png)

7. Setelah NVM berhasil terpasang, selanjutnya kita pasang Node.js. Cara memasang Node.js adalah dengan perintah berikut ini.
   ```Shell
   nvm install 16
   ```
   Perintah tersebut akan memasang Node.js versi 16 terbaru. Prosesnya membutuhkan waktu yang relatif dengan koneksi internet yang Anda miliki.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:72917aa62929268bc7416c3fdc15ad8f20221207122534.png)

   Nomor versi pada perintah tersebut bisa Anda ubah sesuai dengan versi yang diinginkan. Contoh, jika ingin memasang Node.js versi 18, gunakan perintah `nvm install 18`.
8. Setelah NVM memasang Node.js, Anda bisa menggunakan Node.js dengan menggunakan perintah berikut ini.
   ```
   nvm use 16
   ```
   Hasilnya akan tampak seperti gambar di bawah ini.

   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:fac1cae603f919d9acd37f8af63177e020221207122659.png)

9. Untuk memastikan Node.js terpasang dengan baik, jalankan perintah berikut ini.
    ```
    node -v
    ```
    Jika berhasil terpasang, hasilnya akan tampak seperti gambar di bawah ini.

    ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:461bb7a1f881994f5e150648ff38691720221207122805.png)

10. Benefit lain yang bisa kita dapatkan dengan menggunakan NVM adalah mudah untuk berpindah-pindah versi Node.js. Untuk pindah versi, Anda cukup tulis perintah berikut ini.
    ```Plaintext
    nvm use (versi Node.js)
    ```
    Contohnya seperti gambar di bawah ini.

    ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:38ac7930bac2e8acdfc0b0040408274620221207122909.png)

    Agar bisa berpindah versi, pastikan versi tersebut sudah terpasang sebelumnya melalui perintah `nvm install (versi Node.js)`.

## Membuat Project JavaScript

Setelah berhasil menginstal text editor dan Node.js di komputer, berarti peralatan pengembangan kita telah siap.

Meskipun kita bisa membuat berkas atau proyek JavaScript secara manual dengan cara membuat folder dan menambahkan berkas .js di dalamnya, kita akan memilih pendekatan yang lebih praktis dengan menggunakan Node Package Manager (NPM). NPM digunakan untuk mengelola paket tambahan yang akan mempermudah pengembangan aplikasi. Informasi lebih lanjut tentang NPM akan dibahas di modul terpisah. Saat ini, kita akan menggunakan NPM untuk inisialisasi proyek Node.js.

Langkah selanjutnya adalah membuat folder utama proyek di direktori komputer Anda, dan kita akan memberinya nama "CoffeeMachine". Setelah itu, buka folder ini menggunakan Visual Studio Code dengan langkah-langkah: Pilih menu File → Open Folder → Lalu pilih folder proyek Anda.

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/9f00ba70-7113-40fe-a638-2b9f17c7af49)

Lalu buka terminal/command prompt pada project tersebut dengan memilih menu **Terminal → New Terminal**. Ketika terminal muncul jalankan perintah:

```
npm init
```

Selanjutnya Anda akan diberikan beberapa pertanyaan untuk mengisi nilai package name, version, description, dsb. Semua itu merupakan informasi dasar tentang aplikasi yang kita buat.

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/d273068c-6295-4fbd-ac74-4fabb6480767)

Nilai yang berada di dalam tanda kurung merupakan nilai default. Jika nilai default tersebut sudah cocok dengan yang diharapkan, kita dapat menggunakan nilainya dengan langsung menekan tombol enter.

Setelah mengisi seluruh pertanyaan yang diberikan, kita akan diminta untuk melihat dan memverifikasi informasi yang akan disimpan.

    license: (ISC)
    About to write to D:\GDSC USU\CoffeeMachine\package.json:

    {
      "name": "coffeemachine",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

Jika nilai yang ditampilkan sudah sesuai, tekan tombol **enter**. Nilai tersebut akan tersimpan dalam berkas** package.json**. Jika, berkas package.json dibuka, hasilnya terlihat seperti gambar di bawah ini.

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/92a5078f-a177-4c4f-ad07-e97a5f5b2288)

Berkas tersebut digunakan untuk menyimpan informasi aplikasi yang kita buat. Untuk membuat berkas package.json, sebenarnya kita dapat membuatnya sendiri layaknya membuat berkas baru pada umumnya. Namun, cara tersebut bukan pendekatan yang baik. Dalam membuat berkas package.json, sebaiknya gunakan perintah **npm init** pada Terminal di dalam project yang kita buat.

## Menjalankan Project Node

Pada modul sebelumnya kita telah tahu bagaimana membuat proyek Node.js. Sekarang kita akan mulai menuliskan kode dan menjalankannya melalui terminal.

Pertama, buatlah berkas baru di dalam folder proyek Anda. Caranya,** klik kanan** pada daftar file yang ada di Visual Studio Code lalu pilih **New File**. Beri nama berkas sesuai yang Anda masukkan pada package.json (default-nya adalah **index.js**).

![20210330235057d6419a63ca8267c4de1a7669d1bbbcc7](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/6c97ca95-7a91-49ac-b573-074b554e4b92)

Pada berkas inilah kita bisa mulai menuliskan kode JavaScript. Sebagai permulaan, cetak sejumlah proses pembuatan kopi dari mesin kopi kita. Tambahkan kode berikut ke dalam file index.js:

```js
console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
```

Untuk menjalankan file JavaScript di atas juga cukup mudah, cukup jalankan perintah berikut pada terminal:

```txt
node index.js
```

Node.js akan mengeksekusi setiap baris kode yang kita tulis lalu menampilkannya ke konsol terminal.

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/8f099c21-2962-4cf1-80dd-b546e45a21a3)

### Run Scripts

Pada berkas package.json terdapat beberapa object yang penting untuk kita perhatikan, salah satunya adalah object scripts. Secara default object tersebut akan terbentuk ketika package.json dibuat menggunakan perintah init. Nilai default dari scripts adalah seperti ini:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Untuk coba-coba Anda dapat menggantinya dengan berikut:

```json
  "scripts": {
    "test": "echo \"Google Developer Students Club USU\"",
  },
```

Object scripts merupakan objek yang mengandung kumpulan script di dalamnya. Script tersebut dapat dijalankan kapan saja pada proyek kita. Untuk menjalankan script, gunakan perintah `npm run <script-name>` yang dapat Anda tulis seperti di bawah ini:

```
npm run test
```
Dengan menjalankan script test, artinya kita mengeksekusi kode yang berada di dalam nilai test, yaitu:

```
"echo \"Google Developer Students Club USU\""
```

Sehingga, pada terminal akan menghasilkan output seperti berikut:

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/937b79ae-469f-4690-a48b-a28aed0a4014)


Pada object scripts biasanya kita menetapkan script yang sering digunakan secara berkala, seperti menjalankan aplikasi (selama proses development), compiling source code ke tahap produksi, atau melakukan testing.

Untuk menetapkan nilai baru pada object scripts, kita tuliskan nama script sebagai properti. Kemudian tuliskan perintah yang akan dieksekusi sebagai nilai dari properti tersebut. Mari kita buat script baru untuk menjalankan kode dari berkas **index.js**.

Pada object scripts, tuliskan nilai baru dengan properti bernama **start**, kemudian tambahkan perintah untuk mengeksekusi berkas sebagai nilainya:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
```

Kini kita bisa menjalankan program dengan perintah npm run start seperti di bawah ini

![image](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/32a076f1-c3b9-4cce-85a8-7dfbc26a84f3)
