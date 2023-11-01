---
title: Asynchronous Process
date: 2023-11-01
tags: [javascript, GDSC]
category: JavaScript
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---

## Pengantar Asynchronous Process

Dalam pemrograman, tidak semua tugas dapat selesai dengan cepat. Beberapa tugas memerlukan waktu, seperti membaca atau menulis berkas, mengambil data dari internet, dan sejenisnya. Untuk memastikan bahwa tugas yang memakan waktu ini tidak menghentikan tugas lain, kita perlu belajar cara menjalankannya secara asynchronous.

Dalam modul ini, kita akan menjelaskan proses asynchronous dalam JavaScript. Berikut beberapa hal yang akan dibahas dalam modul ini:

- Pengenalan tentang proses asynchronous di JavaScript.
- Cara menggunakan fungsi setTimeout().
- Mengatasi proses asynchronous dengan pola callback.
- Mengatasi proses asynchronous dengan menggunakan Promise.
- Memahami penggunaan metode statis dalam objek Promise.
- Mengatasi proses asynchronous dengan sintaks async dan await.

## Pengenalan Asynchronous

Biasanya, saat kita menjalankan kode dalam sebuah program, kode itu dijalankan satu per satu, dan setiap kode menunggu sampai proses sebelumnya selesai. Sebagai contoh, jika kita memanggil fungsi X pada baris pertama dan kemudian fungsi Y pada baris kedua, fungsi Y hanya akan dijalankan setelah seluruh proses yang terkait dengan fungsi X selesai. Ini disebut sebagai proses synchronous, di mana segalanya berjalan berdasarkan urutan dan saling menunggu.

Dalam asynchronous process, kita bisa menjalankan proses pada baris kedua tanpa harus menunggu proses pada baris pertama selesai. Ini berarti kita bisa melakukan beberapa proses secara bersamaan. Mengapa ini penting? Mari lihat contohnya.

Fungsi di bawah ini digunakan untuk menghasilkan bilangan prima sebanyak yang diinginkan oleh pengguna. Jika Anda memasukkan nilai yang besar, misalnya 1 juta, Anda mungkin akan mengalami sedikit keterlambatan sebelum pesan "proses pembuatan 1.000.000 bilangan prima selesai" muncul.

```js
import { isPrime, random } from "./utils";

export function generatesPrimes(maximum) {
  const MAX_PRIME = 1000000;
    
  const primes = [];
    
  while (primes.length < maximum) {
    const candidate = random(MAX_PRIME);
    
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
    
  return primes;
}
```

Kode diatas menggunakan utils modules, dimana sejauh yang kita praktikan kita belum melakukan instalasi modul tersebut. Sehingga untuk sementara untuk menjalankan kode tersebut, kita menggunakan bantuan *code Sandbox*.

[**Coba di Sandbox**](https://codesandbox.io/s/kzu02g?file=/generate-prime.js&utm_medium=sandpack)

<video controls>
  <source src="https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/aabc4b21-9caf-4a4b-b332-52a0eda3bf41" type="video/mp4">
  Maaf, browser Anda tidak mendukung pemutaran video.
</video>

Delay terjadi karena proses menjalankan fungsi generatePrimes() berjalan lambat dan bersifat synchronous, hingga pengguna merasakan hal itu. Pengalaman ini akan membuat pengguna risi, terlebih ketika harus melakukan hal lain sembari menunggu proses itu selesai.

Contoh, cobalah Anda tulis sesuatu pada text area selagi menunggu hasilnya muncul. Apa yang Anda rasakan?

[**Coba di Sandbox**](https://codesandbox.io/s/xe7mwj?file=/generate-prime.js&utm_medium=sandpack)

<video controls>
  <source src="https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/43b01977-652a-46ec-9e5e-19cfe0fff99d" type="video/mp4">
  Maaf, browser Anda tidak mendukung pemutaran video.
</video>

Perasaan Anda ketika menulis teks pasti tidak nyaman. Proses mendapatkan bilangan prima yang menghalangi Anda untuk menulis teks pada text area tersebut. Ketika proses tersebut selesai, teks di dalam text area akan muncul secara tiba-tiba.

Itulah jadinya jika proses yang lama dijalankan secara synchronous. Proses selanjutnya perlu menunggu tahapan sebelumnya selesai. Solusi dari masalah ini adalah dengan menjalankan proses yang lama secara asynchronous.

Ilustrasi di bawah ini menggambarkan perbedaan synchronous dan asynchronous dalam menjalankan proses.

![test](https://github.com/ridopandiSinaga/JavaScript-Beginner-GDSC-USU/assets/89272004/12681113-b35c-4793-af3c-da3c2fdfc367)

Program asynchronous memungkinkan suatu proses berjalan sembari menunggu proses lainnya selesai. Umumnya, kita memanfaatkan asynchronous pada proses yang besar dan membutuhkan waktu lama, seperti mengambil data dari internet, menyimpan data ke database, dan membaca data dari sebuah berkas.

## setTimeout Function

JavaScript adalah bahasa pemrograman yang menerapkan pola event-driven, baik dalam lingkungan Node.js maupun browser. Ini berarti setiap tindakan atau kejadian memicu proses tertentu. Sebagai contoh, ketika browser me-load halaman, acara [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) dipicu, atau ketika program Node.js selesai, acara process exit terjadi. Dengan pendekatan event-driven ini, kode JavaScript tidak harus dieksekusi berurutan; sebaliknya, ia akan menunggu acara tertentu atau bahkan dijadwalkan.

Ada satu fungsi dalam JavaScript yang berguna untuk menjadwalkan eksekusi kode dan membuatnya berjalan secara asynchronous, yaitu `setTimeout()`. Fungsi ini menerima dua argumen, yaitu:

Fungsi yang akan dipanggil sesuai dengan jadwal dan dijalankan secara asynchronous.
Waktu tunda dalam milidetik yang menentukan kapan fungsi pada argumen pertama akan dipanggil.

Inilah contoh dari penggunaan fungsi `setTimeout()`.

```js
console.log('Selamat datang!');
 
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)
 
console.log('Ada yang bisa dibantu?');
```

Ketika kita terbiasa dengan pola synchronous, kita mungkin mengharapkan bahwa output pada konsol akan berjalan sesuai urutan berikut:

1. Mencetak → Selamat datang!
2. Menunggu selama tiga detik.
3. Mencetak → Terima kasih sudah mampir, silakan datang kembali!
4. Mencetak → Ada yang bisa dibantu?

Namun, kenyataannya, fungsi setTimeout() tidak akan menghentikan JavaScript untuk menjalankan kode pada baris berikutnya. Jadi, urutannya sebenarnya seperti ini:

1. Mencetak → Selamat datang!
2. Mencetak → Ada yang bisa dibantu?
3. Menunggu selama tiga detik.
4. Mencetak → Terima kasih sudah mampir, silakan datang kembali!

Anda dapat mencoba contoh ini dengan menuliskan kode tersebut dalam sebuah berkas JavaScript dan menjalankannya menggunakan Node.js.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:7f5b274626242dc4b0aedd011689ebf120230317093450.gif)

Fungsi `setTimeout()` adalah cara paling sederhana untuk menjalankan baris kode secara asynchronous. Dalam pembelajaran ini, kita akan menggunakan setTimeout() untuk mensimulasikan bagaimana mendapatkan nilai dari sebuah proses yang memerlukan waktu.

**Catatan:** bahwa ada beberapa operasi yang berjalan secara asynchronous dalam berbagai lingkungan JavaScript, seperti fungsi [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) di browser dan operasi input/output pada Node.js. Namun, dalam pembelajaran ini, kita tidak akan menggunakan fungsi-fungsi tersebut. Sebaliknya, seluruh proses asynchronous akan kami simulasi menggunakan fungsi `setTimeout()`.

## Asynchronous Handling dengan Callback

Dalam materi sebelumnya, kita telah memahami bahwa di JavaScript, terkadang operasi berjalan secara asynchronous. Artinya, JavaScript dapat melanjutkan menjalankan proses selanjutnya tanpa harus menunggu tahapan sebelumnya selesai. Ini menciptakan cara penanganan proses yang berbeda dengan proses synchronous. Sebagai pengembang, penting bagi kita untuk memahami cara menangani proses asynchronous agar nantinya kita dapat mendapatkan hasil dari proses tersebut.

Saat ini, ada dua cara atau pola yang digunakan dalam JavaScript untuk menangani proses asynchronous. Pola pertama yang akan kita bahas adalah *callback*.

### Pola Callback 

Pola callback adalah cara untuk mengatasi proses yang berjalan secara asynchronous. Ini bukan hanya khusus untuk JavaScript, tetapi juga digunakan dalam bahasa pemrograman lain. Callback adalah sebuah fungsi yang diberikan sebagai argumen kepada fungsi asynchronous, dan fungsi ini akan dijalankan ketika proses asynchronous selesai. Fungsi callback ini akan membawa hasil dari proses asynchronous sehingga kita dapat menggunakannya.

Untuk memberikan gambaran lebih jelas, perhatikan contoh kode di bawah ini.

```js
function getUsers(callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
    callback(users);
  }, 3000);
}
```

Mari asumsikan bahwa `getUsers()` adalah sebuah fungsi yang digunakan untuk mengambil data nama pengguna dari internet. Untuk mensimulasikan jalannya fungsi secara asynchronous, kita menggunakan `setTimeout()`. Anda juga akan melihat bahwa fungsi ini akan memanggil callback yang diberikan sebagai argumen ketika prosesnya selesai dan membawa data `users`.

Berikut adalah cara menggunakan fungsi ini untuk mendapatkan nilai dari `users`.

```js
getUsers((users) => {
  console.log(users);
});
```

Ketika kita menggunakan fungsi getUsers(), kita harus memanggilnya dengan menyediakan sebuah fungsi sebagai argumen. Fungsi ini akan dipanggil ketika proses asynchronous selesai dan akan membawa data pengguna yang dihasilkan. Di dalam ruang lingkup fungsi ini, kita dapat menggunakan data pengguna yang dihasilkan dari proses asynchronous. Inilah inti dari pola callback.

**Penting untuk dicatat** bahwa callback adalah salah satu implementasi dari konsep High-Order Function yang telah kita pelajari dalam modul Functional Programming sebelumnya.

Agar kode lebih mudah dibaca, Anda bisa mendeklarasikan fungsi callback di luar argumen seperti ini.

```js
function getUsers(callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
 
    callback(users);
  }, 3000);
}
 
function usersCallback(users) {
  console.log(users);
}
 
getUsers(usersCallback);
```

Berikut hasilnya jika fungsi tersebut kami jalankan dengan Node.js.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:4e7c5a3ab4543ef82920a41d2130e47e20230317141845.gif)

Proses yang dijalankan secara asynchronous, biasanya berpotensi menghasilkan error. Misalnya, sebuah fungsi yang mengambil data dari internet akan menghasilkan error ketika jaringan kita bermasalah. Contoh lainnya, ketika berkas tersebut tidak ditemukan, fungsi yang membacanya akan menghasilkan error.

Dengan alasan tersebut, pada fungsi callback selain membawa argumen data, ia juga membawa argumen error. Argumen error hanya akan memiliki nilai ketika proses asynchronous gagal atau mengalami gangguan.

Untuk lebih jelasnya, mari kita ubah fungsi `getUsers()` menjadi seperti ini.

```js
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
    
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
```

Kita telah menambahkan argumen `isOffline` ke dalam fungsi `getUsers()` untuk menentukan apakah proses asynchronous berhasil atau gagal. Karena proses ini dapat mengalami kegagalan, nilai yang dibawa oleh fungsi callback harus disesuaikan.

Secara umum (convention), fungsi callback yang digunakan dalam JavaScript mengikuti konvensi standar dan memiliki struktur seperti yang ditunjukkan dalam kode di bawah ini.

```js
function callback(error, data) {
  // logika ketika proses asynchronous selesai
}
```

Argumen pertama pada fungsi callback biasanya digunakan untuk menangani kesalahan (`error`). Argumen ini akan memiliki nilai jika proses asynchronous gagal, sebaliknya, biasanya akan bernilai `null`. Argumen kedua pada fungsi callback digunakan untuk membawa data ketika proses berhasil. Jika proses asynchronous mengalami kegagalan, argumen ini juga akan bernilai `null`.

Selain itu, penting untuk mematuhi konvensi yang telah ditetapkan oleh Node.js bahwa argumen callback selalu ditempatkan sebagai argumen terakhir dalam daftar argumen fungsi. Ini adalah alasan mengapa kami mendefinisikan argumen `isOffline` terlebih dahulu, diikuti oleh `callback` dalam fungsi `getUsers()`.

**Catatan**: Harap diingat convention tersebut ditetapkan karena banyak proses asynchronous yang terdapat pada Node.js API menggunakan struktur tersebut dalam penggunaan callback, seperti fungsi [fs.readFile()](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback).

Dengan diubahnya fungsi `getUsers()`, kita juga perlu menyesuaikan struktur callback-nya. Untuk menangani proses asynchronous pada fungsi `getUsers()`, baik ketika prosesnya berhasil maupun gagal, maka fungsi `usersCallback()` perlu diubah menjadi seperti ini.

```js
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
 
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
function usersCallback(error, users) {
  if (error) {
    console.log('process failed:', error.message);
    return;
  }
  console.log('process success:', users);
}
 
getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline
```

Jika kode di atas kita jalankan dengan Node.js, hasilnya akan tampak seperti ini.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:6df758a5d7799fcf545b2bf5b66a33df20230317142622.gif)

### Callback Hell

Dalam pengembangan aplikasi yang semakin kompleks, kita akan lebih sering menggunakan fungsi yang berjalan secara asynchronous. Seringkali kita perlu menggabungkan data dari banyak proses asynchronous yang berbeda. Masalah muncul ketika kita perlu menjalankan satu proses asynchronous setelah proses serupa lainnya selesai.

Bagi pengembang pemula, kita biasanya terbiasa dengan proses yang berjalan berurutan dalam proses synchronous. Jika Anda mencoba membaca kode di bawah ini, Anda akan dengan mudah memahami urutannya.

```js
function getUserWeather(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
 
const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
```

Kode di atas menunjukkan sebuah fungsi `getUserWeather()` yang bertujuan untuk mendapatkan informasi cuaca berdasarkan `userId`. Dalam kode tersebut, kita juga dapat melihat bahwa data cuaca diperoleh dengan menggabungkan hasil dari dua fungsi, yaitu `getUser()` dan `getWeather()`. Jika kedua fungsi ini berjalan secara synchronous, proses penggabungan data akan menjadi lebih mudah karena berjalan secara berurutan dan saling menunggu.

Bayangkan sekarang jika fungsi `getUser()` dan `getWeather()` berjalan secara asynchronous dan menggunakan pola callback. Untuk menghasilkan hasil yang sama, kita perlu mengubah kode seperti ini.

```js
// index.js
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});
```

```js
// utils.js
function getUser(id, callback) {
  setTimeout(() => {
    if (!id) {
      callback(new Error("User ID is required"), null);
    }

    callback(null, { id, name: 'John Doe', location: "Jakarta" });
  }, 1000);
}

function getWeather(location, callback) {
  setTimeout(() => {
    if (!location) {
      callback(new Error("Location is required"), null);
    }

    callback(null, { weather: "Sunny", temperature: 30 });
  }, 1000);
}

module.exports = { getUser, getWeather };
```

Apakah menurut Anda kode di atas masih mudah dibaca?
Dalam perbandingan dengan versi synchronous, tentu saja tidak. Ini adalah contoh sederhana untuk menggambarkan masalah yang sering muncul dalam situasi nyata ketika berurusan dengan proses asynchronous. Kami hanya menunjukkan penggunaan dua fungsi asynchronous yang saling membutuhkan di sini, namun bayangkan jika ada tiga atau lebih? Kode akan semakin sulit dibaca.

Menurut kami, masalah yang terkait dengan kerumitan dalam membaca kode adalah masalah serius. Masalah ini sering disebut sebagai "callback hell" atau "piramida keputusasaan." Anda bisa melihat betapa rumitnya struktur kode ketika kita menggunakan callback dalam jumlah yang banyak, sehingga bisa terlihat seperti dalam gambar di bawah ini.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:893a1b1fd2a06c32e31f31ce5b01e9be20230317143222.gif)

![](https://i0.wp.com/blog.tedd.no/wp-content/uploads/2020/05/4b91e-0sdgzt038fovslwf4.jpg?w=900)

Pola callback dapat diterapkan dalam berbagai bahasa pemrograman, dan masalah yang dihadirkannya pun sama. Untungnya, dalam JavaScript, terdapat cara yang lebih baik untuk mengatasi proses asynchronous, yaitu dengan menggunakan Promise. Promise dapat membuat kode kita lebih mudah dibaca dibandingkan dengan callback. Berikut adalah contoh kode yang menggunakan Promise dalam proses asynchronous-nya.

```js
// index.js
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId) {
  let user;
  
  return getUser(userId)
    .then((_user) => { 
      user = _user;
      return getWeather(user.location)
    })
    .then((weather) => ({ ...user, ...weather }))
}

getUserWeather(1)
  .then(console.log)
  .catch(console.log);
```

Mari kita bahas Promise pada materi selanjutnya

## Asynchronous Handling dengan Promise

Sejak diperkenalkannya ECMAScript 2015 (ES6), pola callback bukanlah satu-satunya cara untuk menangani proses asynchronous di JavaScript. Pada era ES6, atau yang sering disebut sebagai era JavaScript modern, muncul sebuah fitur yang disebut "Promise" sebagai salah satu konsep dasar untuk mengeksekusi operasi asynchronous. Saat ini, banyak fungsi yang ada dalam Node.js atau Browser API yang menggunakan Promise untuk menangani proses asynchronous daripada pola callback.

![](https://programmerhumor.io/wp-content/uploads/2023/03/programmerhumor-io-programming-memes-24eeb665f9acf14-758x796.jpg)

Mungkin Anda bertanya, mengapa disebut "Promise" atau "Janji"? Penamaan ini sebenarnya cukup relevan dan dapat diartikan sebagai sebuah analogi. Jika kita merenung lebih dalam, proses yang berjalan secara asynchronous sebenarnya adalah sebuah janji, karena hasil dari proses tersebut tidak bisa diperoleh secara langsung, melainkan perlu menunggu beberapa waktu, mirip dengan sebuah janji di dunia nyata yang butuh waktu untuk terpenuhi.

Selain kesamaan dalam kebutuhan waktu, analogi ini juga mencakup kesamaan dalam hal hasil yang bisa terjadi. Di dunia nyata, sebuah janji bisa terpenuhi atau gagal. Contohnya, jika seorang teman berjanji akan mengajak Anda berlari sore hari, bisa saja janji tersebut gagal terpenuhi karena hujan atau alasan lainnya. Konsep Promise di JavaScript juga mencerminkan hal yang sama karena memiliki beberapa kondisi, yaitu "pending" (sedang berjalan), "fulfilled" (terpenuhi), dan "rejected" (gagal terpenuhi).

Jadi, Promise di JavaScript merupakan sebuah objek yang mewakili operasi asynchronous. Dengan menggunakan Promise, fungsi yang berjalan secara asynchronous dapat ditangani dengan abstraksi yang lebih sederhana. Sebagai contoh, daripada mengirimkan callback melalui argumen fungsi, kita dapat mengembalikan objek Promise langsung dari fungsi yang berjalan secara asynchronous.

Jika penjelasannya masih membingungkan, mari kita ulas kembali fungsi `getUsers()` yang memanfaatkan callback pada materi sebelumnya.

```js
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
  
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
 
    callback(null, users);
  }, 3000);
}
```

Anda mungkin sudah mengenali kode di atas. Fungsi `getUsers()` beroperasi secara asynchronous dan menggunakan argumen `callback` untuk mengirimkan nilainya.

Dengan pendekatan menggunakan Promise, kita tidak lagi memerlukan argumen callback. Sebagai gantinya, fungsi `getUsers()` harus mengembalikan objek `Promise` seperti ini.

```js
function getUsers(isOffline) {
  // return a Promise object
  return new Promise((resolve, reject) => {
 
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }
 
      resolve(users);
    }, 3000);
  
  });
}
```

Perhatikan kode di atas. Fungsi `getUsers()` tidak lagi menerima callback sebagai argumen, melainkan mengembalikan objek `Promise`. Bagaimana dengan nilai yang biasanya disampaikan melalui argumen callback? Di sinilah Promise memberikan alternatif dengan memanfaatkan `resolve` dan `reject`. Jika proses asynchronous mengalami kesalahan, kita dapat menggunakan `reject` untuk mengirimkan error, sementara jika proses asynchronous berhasil, kita dapat menggunakan `resolve` untuk mengirimkan nilai. Sudahkah Anda memahaminya?

**Catatan**: Objek Promise dibuat dengan cara memanggil constructor Promise, yakni `new Promise()`. Kemudian di dalam constructor, Anda wajib memberikan argumen berupa fungsi yang di dalamnya terdapat operasi asynchronous. Fungsi tersebut juga diberikan akses terhadap dua argumen, yaitu `resolve` dan `reject`. Kedua argumen ini bisa Anda manfaatkan dalam membawa hasil dari proses asynchronous berupa data ataupun error.

Sekarang Anda sudah paham cara membuat Promise. Selanjutnya, Anda perlu tahu cara menggunakan Promise untuk mendapatkan nilai yang dibawa olehnya. Mari kita lihat cara memanggil dan mendapatkan hasil dari fungsi `getUsers()`.

Setelah fungsi `getUsers()` diubah dari callback menjadi *Promise-based*, cara penggunaan fungsinya pun akan berubah. Fungsi yang mengembalikan objek Promise akan memiliki fungsi `.then` dan `.catch.` Fungsi tersebut digunakan untuk mengambil nilai yang dibawa oleh `resolve` dan `reject`. Gambarannya seperti ini.

```js
getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
```

Nilai yang dibawa oleh `resolve()` dapat diambil melalui fungsi .`then()` dan seketika status Promise akan berubah dari pending ke *fulfilled*. Di sisi lain, nilai yang dibawa oleh `reject()` dapat diambil melalui fungsi `.catch()` dan seketika status Promise akan berubah dari pending ke rejected.

Perhatikan juga bahwa` .then()` dan `.catch()` selalu mengembalikan Promise, itulah yang menyebabkan pemanggilannya dapat berantai seperti `.then().catch()`.

Mari kita lihat kode lengkapnya agar dapat Anda coba dan jalankan.

```js
//main.js
function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {

    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
```

Jalankan kode di atas, maka fungsi `.then()` akan terpanggil dan menampilkan data users pada console.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ab47bf938ab05866957df3095b517de920230307095959.jpeg)

Fungsi `.catch()` tidak akan terpanggil karena Promise tidak pernah berstatus rejected. Jika Anda ingin Promise menghasilkan status `rejected`, ubahlah nilai argumen pada pemanggilan `getUsers()` menjadi true.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:2b2098fb26c876a33afecddaad50e84520230307100036.jpeg)

## Mengubah Callback Menjadi Promise dengan Promisify

Dalam materi sebelumnya, kita telah mempelajari cara mengubah callback menjadi Promise. Sekarang, kita akan mencoba pendekatan yang berbeda. Di Node.js, terdapat sebuah fungsi dari core module `util` yang dapat dengan mudah mengubah fungsi berbasis callback menjadi berbasis Promise, dan fungsi ini disebut `promisify`.

Mari kita angkat kembali kode dari fungsi `getUsers()` *callback-based* berikut.

```js
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
  
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
```

Dalam materi sebelumnya, kita telah mengubahnya menjadi *Promise-based* dengan *me-refaktor* kode fungsi tersebut. Namun, dalam situasi nyata, seringkali kita tidak memiliki akses untuk *merefaktor* fungsi tersebut, terutama ketika kita menggunakan library pihak ketiga. Bagaimana kita bisa dengan mudah mengubah fungsi tersebut menjadi berbasis Promise?

Node.js menyediakan solusi dengan menggunakan fungsi `promisify` dari core module `util`. Dengan ini, kita dapat dengan mudah membuat fungsi baru yang mengimplementasikan Promise berdasarkan fungsi *callback-based*, seperti yang ditunjukkan di bawah ini.

```js
const { promisify } = require('util');
 
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
     if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);
```

Sekarang, kita memiliki fungsi `getUsers()`, tetapi dapat menerapkan Promise tanpa perlu mengubahnya secara manual.

```js
getUsersPromise(false)
  .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message)); // cannot retrieve users due offline
```

Sangat mudah, bukan? Namun, terdapat beberapa catatan ketika Anda hendak mengubah fungsi asynchronous callback-based menjadi Promise-based menggunakan `util.promisify()`.

1. Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
2. Promisify akan bekerja dengan baik jika callback memiliki struktur argumen `callback(error, data)`. Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.

**Catatan**: Singkatnya, promisify hanya dapat digunakan pada fungsi yang mengikuti aturan Node.js callback. Inilah salah satu alasan perlunya mengikuti aturan yang standar.

Dalam kasus nyata, Anda bisa menggunakan promisify untuk mengubah berbagai fungsi yang disediakan oleh Node.js menjadi Promise-based, seperti contohnya fungsi `fs.readFile()` yang digunakan untuk membaca berkas secara asynchronous.

```js
// index.js
const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
```

data.txt:

```txt
Anda berhasil membaca teks dari berkas.
```

## Promise Berantai

Masih ingat tentang masalah readability code yang disebabkan oleh callback hell? Masalah tersebut kerap terjadi ketika kita harus menggabungkan data dari berbagai proses asynchronous yang saling bergantung. Dengan adanya Promise, kita dapat menghindari callback hell.

Promise dirancang untuk dijalankan secara berantai dengan Promise lainnya. Misalnya, jika Anda memiliki dua fungsi Promise, Anda bisa menjalankan keduanya secara berurut, atau berantai. Untuk memberikan penjelasan yang lebih menarik, mari kita analogikan dengan kehidupan sehari-hari.

Dalam kehidupan sehari-hari, kita sering melakukan chaining Promise tanpa menyadarinya. Misalnya, ketika ingin menonton film di bioskop, kita harus melewati beberapa tahap sebelum akhirnya menikmati film tersebut. Tahap pertama mungkin adalah **menarik uang** di ATM untuk membeli tiket bioskop. Tahap ini dapat diwakili oleh sebuah fungsi bernama `withdrawMoney()`. Fungsi tersebut akan memberikan sejumlah uang jika saldo mencukupi, yang berarti Promise-nya telah terpenuhi (fulfilled/`resolve`). Namun, jika saldo kurang, maka Promise-nya akan ditolak (`rejected`) dan menampilkan pesan kesalahan. Jika Promise terpenuhi, maka tahap berikutnya akan dilanjutkan.

Tahap kedua adalah membeli tiket bioskop, yang dapat diwakili oleh fungsi `buyCinemaTicket()`. Fungsi ini menerima jumlah uang yang telah Anda tarik sebelumnya. Jika jumlah uang yang Anda berikan kurang dari harga tiket, maka Promise akan ditolak dengan pesan "not enough money to buy ticket". Jika jumlahnya cukup, maka Promise akan mengembalikan nilai "tiket-1".

Tahap ketiga adalah memasuki bioskop, yang bisa direpresentasikan dengan fungsi `goInsideCinema()`, yang menerima satu argumen berupa tiket. Jika Anda tidak memiliki tiket, maka Promise akan ditolak dengan pesan "no ticket". Jika Anda memiliki tiket, maka Promise akan terpenuhi dengan pesan "enjoy the movie".

Seluruh tahap yang  dijelaskan diatas adalah Promise dan dapat dijalankan secara berantai seperti ini.

```js
function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error('not enough money to buy ticket'));
      }

      resolve('ticket-1');
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'));
      }

      resolve('enjoy the movie');
    }, 1000);
  });
}

function watchMovie() {
  withDrawMoney(10)
    .then((money) => {
      return buyCinemaTicket(money);
    })
    .then((ticket) => {
      return goInsideCinema(ticket);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

watchMovie();
```


Ketika kita memanggil fungsi `watchMovie()`, chaining Promise akan dijalankan. Ini memungkinkan kita untuk menentukan urutan pemanggilan tiap-tiap fungsi Promise berdasarkan tahapan yang harus dilakukan.

Pada contoh kode di atas, tahapan pertama adalah memanggil fungsi `withDrawMoney()`, kemudian `buyCinemaTicket()`, dan terakhir `goInsideCinema()`. Setelah semua tahapan selesai, nilai akhir dari Promise akan ditampilkan dalam console menggunakan fungsi `console.log()`. Jika ada Promise yang di-reject pada salah satu tahapan, itu akan ditangkap oleh catch dan pesan error akan ditampilkan ke dalam console dengan fungsi `console.log()`.

Ketika melakukan chaining Promise seperti yang ditunjukkan dalam contoh kode di atas, penting untuk diingat bahwa setiap fungsi `.then()` harus mengembalikan Promise baru untuk melanjutkan proses chaining, karena nilai yang dikembalikan akan dibawa ke fungsi `.then()` selanjutnya.

Ada juga tip yang bisa membuat kode lebih bersih dan ringkas. Anda dapat memanfaatkan arrow function dengan implisit `return`. Namun, tips ini hanya berlaku jika arrow function memiliki satu baris kode saja.

```js
function watchMovie() {
  withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}
```

## Promise Static Method

Dalam JavaScript, Promise adalah salah satu fitur penting, terutama saat Anda berurusan dengan operasi asynchronous. Sebelumnya, Anda sudah memahami dasar-dasar penggunaan Promise.

Promise memiliki beberapa metode statis yang berguna untuk menyederhanakan penggunaannya dalam berbagai situasi. Dalam materi ini, kami akan menjelaskan empat metode statis yang umum digunakan dari kelas Promise, yaitu `Promise.all`,` Promise.race`, `Promise.allSettled`, dan `Promise.any`.

### Promise.all

`Promise.all()` digunakan untuk menjalankan beberapa Promise secara bersamaan. Metode ini menerima sebuah array berisi Promise-promise yang akan dijalankan secara paralel sebagai argumen. Kemudian, ia akan mengembalikan sebuah Promise baru yang akan menampung nilai yang di-resolve oleh masing-masing Promise yang ada dalam array argumen.

Contoh di bawah ini akan mengilustrasikan penggunaan `Promise.all()`.

```js
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik
```

Pada contoh di atas, kita membuat tiga Promise yang masing-masing akan mengembalikan setelah waktu berbeda-beda. Kemudian, kita menggunakan `Promise.all()` untuk mengeksekusi ketiga Promise tersebut secara paralel. Ketika semua selesai dieksekusi, Promise.all() akan mengembalikan Promise baru. Ia membawa nilai array berisi nilai-nilai yang dikembalikan oleh ketiga Promise tersebut.

Jika terdapat rejection pada salah satu Promise, `Promise.all()` akan langsung menghasilkan rejected tanpa mengembalikan nilai Promise lain yang statusnya *fulfilled*. Berikut contohnya.

```js
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups
```

### Promise.race

`Promise.race()` digunakan untuk mengeksekusi beberapa Promise secara paralel seperti `Promise.all()`. Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.

Berikut adalah contoh penggunaan dari `Promise.race()`.

```js
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value)); // 1 setelah 1 detik
```

Pada contoh kode di atas, kita membuat tiga Promise yang masing-masing membutuhkan waktu berbeda untuk menyelesaikan. Kemudian, kita menggunakan `Promise.race()` untuk menjalankan ketiganya secara bersamaan. Penting untuk diingat bahwa `Promise.race()` hanya mengembalikan nilai dari Promise yang menyelesaikan prosesnya paling cepat. Dalam contoh ini, itu akan mengembalikan nilai dari `promise1` karena prosesnya selesai lebih cepat daripada `promise2` dan `promise3`.

Namun, jika salah satu dari Promise ini mengalami rejection, `Promise.race()` akan tetap mengembalikan hasil dari yang paling cepat menyelesaikan prosesnya, baik itu fulfilled atau rejected. Jadi, jika salah satu Promise mengalami rejection lebih cepat daripada yang lain, hasilnya akan tetap rejection, meskipun ada Promise lain yang selesai lebih cepat dengan status fulfilled.

```js
const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups
```

### Promise.allSettled

`Promise.allSettled()` bekerja mirip seperti `Promise.all()`. Namun, `Promise.allSettled()` mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut.

```js
{
  status: 'fulfilled' | 'rejected',
  value: 'value of the Promise',
  reason: 'error of the Promise',
}
```

Dari struktur objek yang dihasilkan, Anda bisa melihat bahwa `Promise.allSettled()` akan mengembalikan seluruh nilai Promise yang dijalankan, baik yang statusnya fulfilled ataupun rejected.

Berikut contoh penggunaan `Promise.allSettled()`.

```js
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
 .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik
```

Pada contoh di atas, kita membuat tiga Promise yang masing-masing membutuhkan waktu eksekusi yang berbeda. Kita menggunakan `Promise.allSettled()` untuk menjalankan seluruh Promise secara paralel. Pada output console, Anda bisa melihat bahwa `Promise.allSettled()` mengembalikan array of object seperti yang sudah dijelaskan sebelumnya.

### Promise.any

Method Promise terakhir yang akan kami bahas adalah` Promise.any()`. Cara kerja method ini mirip seperti `Promise.race()`, tetapi hanya **mengembalikan nilai tercepat yang berstatus fulfilled**. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.

```js
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected
```

Static method Promise, seperti `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, dan `Promise.any()` dapat sangat membantu ketika bekerja dengan operasi asynchronous menggunakan Promise. Dengan menggunakan method-method tersebut, kita dapat mengeksekusi banyak Promise secara paralel dan mengelola hasilnya dengan lebih efisien.

## Asynchronous Handling dengan Sintaks Async dan Await

Dalam materi sebelumnya, kita telah mempelajari tentang Promise dan setuju bahwa penggunaan Promise lebih baik daripada menggunakan callback dalam menangani proses asynchronous. Dengan Promise, kita dapat menulis kode yang lebih sederhana dan mudah dibaca.

Sekarang, bayangkan jika kita bisa menangani proses asynchronous dengan cara yang mirip dengan proses synchronous. Hal ini akan membuat kode kita lebih ringkas dan mudah dimengerti karena kita tidak perlu lagi menggunakan `.then()` dan `.catch()` untuk mengelola nilai dari Promise. Untungnya, harapan ini telah menjadi kenyataan dengan hadirnya fitur `async` dan `await` di JavaScript sejak versi ECMAScript 2017.

Sintaks `async` dan `await` memungkinkan kita menulis kode untuk menangani proses asynchronous yang berbasis pada Promise dengan cara yang mirip dengan kode yang menjalankan proses secara synchronous. Selain itu, kita juga dapat mengelola error (rejection) menggunakan blok `try` dan `catch`, seperti saat menangani error dalam proses synchronous. Mari kita lihat contohnya dengan kasus menonton film di bioskop secara asynchronous.

```js
function watchMovie() {
  withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}
watchMovie();
```
Saya yakin Anda sudah memahami bagaimana penanganan Promise berantai seperti yang ditunjukkan di atas. Sekarang, mari kita lihat bagaimana kita dapat memanfaatkan `async` dan `await` untuk menangani proses asynchronous-nya. Kodenya akan terlihat seperti ini.

```js
async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
 
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
 
watchMovie();
```

Untuk menggunakan fitur `async` dan `await`, Anda perlu mengubah sebuah fungsi agar berjalan secara asynchronous dengan menambahkan kata kunci `async` pada awal fungsi. Setelah itu, di dalam fungsi tersebut, Anda dapat mengambil data yang dihasilkan oleh Promise dengan menggunakan sintaks `await`. Sintaks await akan memberi tahu JavaScript untuk menunggu proses Promise selesai sebelum mengeksekusi kode baris selanjutnya. Jadi, Anda bisa melakukan Promise berantai tanpa perlu menggunakan `.then()`. Simak juga cara penanganan error-nya. Anda tidak perlu lagi menggunakan `.catch()`, tetapi cukup menggunakan blok `try` dan `catch` layaknya proses synchronous.

Perlu diingat bahwa setiap fungsi yang didefinisikan dengan kata kunci `async` akan selalu mengembalikan sebuah Promise. Sebagai contoh dalam kode di atas, Anda bisa menggunakan fungsi `.then()` setelah pemanggilan fungsi `watchMovie()` seperti ini.

```js
async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
 
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
 
watchMovie().then(() => console.log('done'));
 
/** output */
// enjoy the movie
// done
```

Jika sebuah fungsi yang diberi kata kunci "async" mengembalikan sebuah Promise, Anda dapat mengontrol status dari Promise tersebut dengan menggunakan "return" untuk mengubah statusnya menjadi `fulfilled` (terpenuhi) dan "throw" untuk mengubah statusnya menjadi `rejected` (gagal). Berikut adalah contohnya, di mana kita mengubah fungsi "watchMovie()" dengan mengembalikan nilai dan melemparkan error.

```js
// index.js
const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require('./utils');

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(10)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message));

watchMovie(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)); // not enough money to buy ticket
```

```js
// utils.js
function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'))
      }

      resolve(amount)
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error('not enough money to buy ticket'))
      }

      resolve('ticket-1')
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'))
      }

      resolve('enjoy the movie')
    }, 1000);
  });
}

module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema };
```

Perubahan kode di atas menunjukkan bahwa fungsi `watchMovie()` tidak lagi menampilkan nilai ke `console.log()`, melainkan mengembalikan nilai `result` atau melemparkan error. Dalam pemanggilan fungsi tersebut, kita menggunakan `.then()` dan `.catch()` untuk mengambil nilai yang di-resolve atau menangkap error yang di-reject. Hal ini membuktikan bahwa kata kunci `async` membuat fungsi secara implisit mengembalikan sebuah Promise.

Sintaks async dan await memiliki beberapa keuntungan dibandingkan dengan penggunaan callback dan Promise secara langsung:

1. **Lebih mudah dipahami dan ditulis**: Sintaks async dan await memungkinkan kita untuk menulis kode yang menangani proses asynchronous dengan cara yang mirip dengan kode synchronous. Ini membuat kode lebih mudah dipahami dan ditulis.

2. **Terhindar dari callback**: Penggunaan Promise secara langsung sering melibatkan penggunaan callback seperti `.then()` dan `.catch()`. Dengan async dan await, kita dapat menghindari pola callback ini.

3. **Lebih mudah dalam mengelola error**: async dan await memungkinkan penanganan error yang mirip dengan kode synchronous, dengan menggunakan `try`, `catch`, dan `throw`.

Dengan demikian, async dan await adalah alat yang berguna dalam mempermudah penanganan operasi asynchronous dalam JavaScript.

![](https://miro.medium.com/v2/resize:fit:1358/1*39VCzgw4wzMlbmefvLI1lg.jpeg)
