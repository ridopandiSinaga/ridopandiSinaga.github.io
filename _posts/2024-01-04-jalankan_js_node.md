---
title: Menjalankan JavaScript menggunakan Node.js
date: 2024-01-04
tags: [gdsc]
category: backend
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

# **Menjalankan JavaScript Menggunakan Node.js**

Terdapat dua cara dalam menjalankan kode JavaScript menggunakan Node.js. Yang pertama dengan memanfaatkan Node REPL dan yang kedua dengan mengeksekusi berkas berekstensi JS. Mari kita kupas keduanya!

## **The Node.js REPL**

Node.js memiliki fitur REPL atau **R**ead-**E**val-**P**rint **L**oop. Sesuai namanya, fitur ini berfungsi untuk membaca kode JavaScript, mengevaluasi kode tersebut, kemudian mencetak hasil evaluasinya ke console. Nah, untuk *loop*, berarti proses tersebut selalu berulang.

1. REPL merupakan fitur bawaan dari Node.js. Anda bisa mengaksesnya menggunakan perintah node pada Terminal. 

   ![](https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/academy/dos:909ca60528057438780736558e8f726a20231030102744.png) 

   Tanda > pada Terminal menunjukan Anda sudah masuk ke mode Node REPL.
  
2. Sekarang, Anda bisa menuliskan kode JavaScript dan mengeksekusinya dengan menggunakan *enter*.
   
   ![](https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/academy/dos:af90d54fb02d40dc1b87c95050d99d0220231030102805.png)

   Lihat gambar di atas. Ketika mengeksekusi console.log(‘Hello Node.js REPL’), selain pesan “**Hello Node.js REPL**”, nilai **undefined** juga tercetak. Hal tersebut karena REPL selalu menampilkan nilai evaluasi pada console. Karena method **console.log()** tidak mengembalikan nilai, jadi *undefined*-lah yang tercetak pada console.

3. Untuk membuktikan hal itu, cobalah Anda tuliskan statement yang mengembalikan nilai. Contoh sederhananya **2+2**. Maka nilai **4** akan tercetak pada console.

    ![](https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/academy/dos:44996c3cf4023a10555fa3e6ae27caf020231030102823.png)

    Cukup asik kan fitur REPL? Tapi kok terkesan hanya dapat mengeksekusi kode satu baris saja ya? Bila Anda beranggapan seperti itu, sebenarnya tidak tepat karena di dalam REPL terdapat mode editor yang berfungsi untuk menuliskan kode JavaScript lebih dari satu baris.

4. Untuk menggunakan mode editor, Anda bisa tuliskan perintah **.editor** .
   
   ![](https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/academy/dos:4fb969fdee76bb45192ed037e9f690f220231030102837.png)

   Ketika masuk ke mode editor, Anda bisa secara leluasa menuliskan kode JavaScript lebih dari satu baris menggunakan **enter**. Fungsi untuk mengeksekusi kode digantikan dengan kombinasi tombol **CTRL+D**. Untuk keluar dari mode editor, gunakan kombinasi **CTRL+C**.

   ![](https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/academy/dos:5b641779e492864cc17e0613fa80811c20231030102855.png)

Nilai variabel yang Anda buat di REPL dapat diakses selama Anda masih berada di dalam REPL. Jika Anda menutup Terminal atau keluar dari REPL menggunakan perintah .exit, variabel yang sudah Anda buat sebelumnya tidak bisa diakses kembali. Itu artinya, REPL hanya menyimpan memory ketika session masih berlangsung.

Fitur REPL sangat berguna ketika Anda hendak melakukan kalkulasi sederhana, bereksperimen, atau belajar potongan kode JavaScript. Karena melalui REPL Anda bisa mengeksekusi kode JavaScript dan mendapatkan hasil dengan cepat tanpa harus membuat berkas JavaScript terlebih dahulu.

## **Running JavaScript File using Node.js**

Cara lain untuk mengeksekusi kode JavaScript menggunakan Node.js adalah melalui berkas JS. 

1. Silakan buat berkas JavaScript pada proyek nodejs-basic. Gunakan VSCode agar lebih mudah yah.
   
   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:683289aef0b41c2199e01fbcb24b843920231009162840.jpeg)

2. Buatlah berkas JavaScript dengan nama “index.js”. 
   
   ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:4ba3f77a87207bdfc19443fd311b348a20231009162840.jpeg)
  
3. Di dalam berkas index.js, Anda bisa menuliskan kode JavaScript sesuka Anda. Pastikan kode yang Anda tulis menampilkan nilai di console yah, jadi Anda bisa melihat nilai yang tampak pada console. Jika bingung, silakan tuliskan kode berikut.
   
    ```js
      console.log('Hello World!');
    ```

4. Untuk mengeksekusi kode tersebut, silakan buka kembali Terminal. Kemudian, tuliskan perintah:
   
   ```
   node index.js
   ```

    Node.js pun akan mengeksekusi berkas ‘**index.js**’. Bila Anda menuliskan kode seperti yang dicontohkan di atas, maka akan muncul teks ‘Hello World!’ pada console.

    ![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:6cc34878f829158aafcb46bdd2e6dd6220231009162840.jpeg)




