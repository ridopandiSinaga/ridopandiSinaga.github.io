---
title: Automation Testing
date: 2024-02-04
tags: [backend, automation-testing]
category: Catatan menjadi Backend Expert
layout: post
## image: https://www.tutonaut.de/wp-content/uploads/2019/06/Dino.gif
---

## **Automation Testing**

### **Pendahuluan Automation Testing**

Ketika menulis kode, bagaimana cara memastikan kode yang Anda tulis sudah benar?
Menjalankannya secara manual? Mungkin jika kode yang ditulis masih sedikit, cara tersebut masuk akal. Nmaun, bagaimana dengan program yang memiliki banyak kode? Belum lagi bila ada developer lain yang ikut menuliskan kode. Bagaiman caranay mengetahui kode yang mereka tulis tidak merusak kode yang sebelumnya sudah ada? Apakah masih sanggup mengujinya secara manual, pasti sangat merepotkan. Mungkin tidak ada lagi yang mau jadi developer bila seperti itu caranya.

Pernahkah Anda terpikir untuk menguji kode secara otomatis? Bila Anda belum pernah mendengarnya, inilah saat yang tepat untuk memulainya. Di modul ini, kita akan belajar banyak mengenai automation testing dalam menguji kode JavaScript yang Anda tuliskan. Hingga akhir modul ini, Anda diharapkan dapat:

- Memahami pentingnya pengujian pada pengembangan aplikasi.
- Mengenal kultur Test Driven Development (TDD) dalam pengembangan aplikasi.
- Menerapkan automation testing dengan kultur TDD.
- Memahami teknik test double pada automation testing.
- Menerapkan automation testing pada server Hapi.

### **Pentingnya Pengujian pada Pengembangan Aplikasi**

Mari kita awali dengan sebuah cerita. Bayangkan, Anda memiliki saldo di bank sebesar 5 juta. Kemudian pada suatu malam bank tersebut melakukan update. Paginya Anda kaget karena ketika cek saldo melalui aplikasi online hanya tertera 600rb saja. Loh? Ke mana perginya uang Anda? Apakah saldo yang tampak di sana itu nyata atau kesalahan sistem?

Kejadian tersebut tidak hanya terjadi pada Anda, banyak nasabah lain yang mengalaminya. Pihak bank kewalahan dalam menanggapi keluhan yang dilontarkan nasabah. Hingga akhirnya banyak nasabah yang menutup rekening di bank tersebut karena takut uang yang dimilikinya raib begitu saja.

Pihak bank mengalami kerugian terbesar dalam sejarah pendirian. Akhirnya mereka menemukan biang keladinya. Ternyata uangnya tidak hilang, melainkan kelalaian developer yang salah menampilkan saldo. Kesalahan tersebut dibawa sampai ke tahap produksi karena dia tidak melakukan pengujian terhadap perubahan kode yang dilakukan.

Eror pada pengembangan software tidak bisa dihindari. Anda sebagai developer tentu sudah biasa berhadapan dengan eror atau ketidaksesuaian. Bahayanya, ketika Anda tidak tahu atau tidak menyadari akan terjadinya eror dan membawanya ke tahap produksi, perusahaan dapat mengalami kerugian.

Cambridge Judge Business School melakukan study dan menyatakan biaya yang ditimbulkan perusahaan akibat kegagalan sistem bisa mencapai $61 miliar per tahun. Hal tersebut setara dengan 620 juta jam selama setahun developer menghabiskan waktunya hanya untuk debugging [[4]](https://www.prnewswire.com/news-releases/study-software-failures-cost-the-enterprise-software-market-61b-annually-301066579.html).

Agar pengeluaran tersebut dapat dikurangi, developer profesional harus disiplin untuk selalu menguji aplikasi selama pengembangan hingga tahap pre-rilis (staging).

Pengujian pada aplikasi dapat dilakukan secara manual maupun menggunakan automation, berikut detailnya:

- **Manual**
  
  Proses pengujian secara manual biasanya terjadi pada tahap pre-rilis. Proses pengujian ini melibatkan seorang yang ditunjuk sebagai tester, atau pengguna yang mendapatkan akses pre-rilis. Proses ini biasanya berkaitan dengan *usability, accessibility* dari sebuah aplikasi.

- **Otomatis**
  
  Proses pengujian secara otomatis dilakukan oleh komputer dengan menuliskan script khusus, biasanya dilakukan oleh software engineer langsung ataupun QA Engineer. Proses ini biasanya berkaitan dengan fungsionalitas dari sebuah aplikasi.

Oke. dari cerita di atas, kita bisa menyimpulkan bahwa sangat penting melakukan pengujian pada aplikasi. Sebagai seorang developer, pengujian bisa diterapkan pada unit yang paling kecil, yakni menguji kode. Agar pengujian kode tidak dilakukan secara manual, yuk kita mulai mengenal automation testing lebih dalam.

### **Mengenal Automation Testing**

Singkatnya, automation testing pada pengembangan aplikasi merupakan pengujian yang dilakukan oleh komputer atau mesin untuk menentukan apakah sebuah program sudah berjalan sesuai harapan atau tidak. Automation testing dapat dilakukan untuk menguji kode yang kita tuliskan atau keseluruhan aplikasi yang dijalankan melalui sebuah simulasi.

Ketahuilah di dunia automation testing terdapat beberapa tingkatan dalam pengujian. Mulai dari Unit Test, Integration Test, hingga Functional Test.

![202108090006287cb23473d5049ee17aad80473a50f9c4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0fc9578b-f19b-4d0d-8948-c855efc452fa)


Berikut penjelasanya:

- Unit Test
  
  Pengujian yang berfokus pada satu unit. Unit yang diuji dapat berupa fungsi, objek, ataupun sebuah modul. Pastinya, ketika membuat unit test, kita tidak fokus pada perilaku objek lain yang berkolaborasi dengan objek yang sedang diuji. Kita lebih fokus pada perilaku unit yang diuji. Sehingga bila ada kegagalan dalam unit tesnya, kita tahu penyebabnya adalah unit yang sedang diuji.

- Integration Test
  
  Pengujian yang menentukan keharmonisan sebuah unit dalam berkolaborasi. Artinya, pengujian tidak terfokus pada satu unit yang diuji saja, melainkan banyak unit yang terlibat dalam membentuk sebuah fitur.

- Functional Test
  
  Dikenal juga sebagai End-to-End Test (E2E) merupakan pengujian yang dilakukan untuk memastikan aplikasi berjalan dengan baik dari hulu ke hilir. Bahkan untuk mendapatkan hasil yang nyata, pengujian harus dijalankan pada platform yang sama seperti end user gunakan (biasanya sebuah simulasi).

  Contoh bila mengembangkan aplikasi web, functional test harus dijalankan pada browser. Jika Anda mengembangkan aplikasi Android, functional test harus dijalankan pada device Android. Bagaimana dengan RESTful API? Tentu functional test dilakukan melalui request terhadap HTTP server kemudian menelaah kesesuaian responsenya. Pengujian otomatis menggunakan Postman adalah salah satu contoh Functional Test.

Tiga istilah di atas bukanlah istilah yang baku dan disepakati oleh semua developer. Namun, ada baiknya kita mendefinisikan tiap tingkatan seperti di atas untuk membantu proses pemahaman pembelajaran.

### **Contoh Automation Testing di JavaScript**

Bagaimana cara menerapkan automation di JavaScript? Sebelum menjawab pertanyaan tersebut, ketahuilah bahwa dalam menguji kode JavaScript sebenarnya kita juga menggunakan kode JavaScript. Namun, kode testing yang dituliskan hanya berfokus untuk menguji fungsionalitas dari unit kode yang ingin kita uji. Di Node.js, kita dapat membuat kode testing dengan bantuan [core module assert](https://nodejs.org/api/assert.html).

Mari kita ambil contoh kode testing dalam menguji fungsi `typeTriangle` (mendeteksi jenis segitiga). Fungsi tersebut berguna untuk mendeteksi jenis segitiga berdasarkan inputan sisi. Spesifikasinya sebagai berikut:

- Bila semua sisi sama, mengembalikan “Segitiga sama sisi”
- Bila sisi ada yang sama, mengembalikan “Segitiga sama kaki”
- Bila semua sisi berbeda, mengembalikan “Segitiga sembarang”
- 
Berikut kodenya:

```js
// main.js
  const assert = require('assert');
  const typeTriangle = require('./typeTriangle');

  try {
    assert.strictEqual(typeTriangle(4, 4, 4), 'Segitiga sama sisi');
    assert.strictEqual(typeTriangle(4, 6, 4), 'Segitiga sama kaki');
    assert.strictEqual(typeTriangle(4, 6, 5), 'Segitiga sembarang');
    console.log('Seluruh pengujian berhasil');
  } catch (error) {
    console.error(error);
  }
```

```js
// typeTriangle.js
const typeTriangle = (sideA, sideB, sideC) => {
  if(sideA === sideB && sideB === sideC) {
    return 'Segitiga sama sisi';
  }
    
  if(sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'Segitiga sama kaki';
  }
    
  return 'Segitiga sembarang';
};

module.exports = typeTriangle;
```

Dari kode di atas, Anda bisa melihat bahwa kode testing berada di berkas main.js. Kode yang kita tuliskan di sana hanya bertujuan untuk menguji apakah fungsi `typeTriangle` sudah berfungsi sesuai harapan atau tidak.

Pengujian dilakukan melalui fungsi `assert.strictEqual`, di mana fungsi tersebut digunakan untuk membandingkan keidentikan antara dua nilai yang diberikan pada parameternya. Kedua nilai tersebut merupakan nilai *actual* dan *expected*. Nilai *actual* didapatkan dari hasil pemanggilan fungsi yang diuji, sedangkan *expected* merupakan nilai yang kita harapkan. Bila kedua nilai tersebut tidak identik, maka fungsi strictEqual akan membangkitkan eror.

Jika potongan kode di atas dijalankan, ia akan menghasilkan output seperti berikut:

```
Seluruh pengujian berhasil
```

Itu berarti fungsi `typeTriangle` sudah berhasil berjalan sesuai harapan kita.

Sekarang, anggaplah Anda atau rekan tim tidak sengaja mengubah kode yang ada di fungsi `typeTriangle`. Kode yang diubah adalah nilai kembalian “Segitiga sembarang” menjadi “Segitiga sembrang”. Kemudian ketika kodenya dijalankan kembali, hasilnya terlihat seperti di bawah ini.

![2021080317524424730169185db0c70d5e175d4f8967c0](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/56c8b0c0-d03d-4040-957e-490f2b439e65)

Kini output menghasilkan eror dan hal ini menjadi sinyal untuk developer bahwa ada yang tidak beres dengan kode yang dituliskan.

Dari contoh di atas, Anda mungkin menyadari automation testing bisa dianggap sebagai jaring pengaman (*safety net*) yang bisa menjamin keabsahan fungsionalitas aplikasi. Karena jika terjadi suatu perubahan yang merusak fungsionalitas kode, pengujiannya akan gagal. Jadi, semakin banyak kode aplikasi yang ter-*cover* oleh testing, semakin banyak proteksi yang kita buat. Harapannya aplikasi bisa terhindar dari eror dan bugs.

### **Framework Testing untuk JavaScript**

Walaupun Node.js memiliki core module assert yang dapat digunakan untuk membuat automation testing, namun nyatanya penulisan menggunakan core module tersebut masih cukup sulit dalam menuliskan kode testing di proyek yang nyata.

Pasalnya, seiring kompleksnya kode aplikasi, maka akan sulit juga dalam menuliskan kode testingnya. Jangan sampai kita dibuat pusing hanya untuk menuliskan kode testing. Hal itu malah membuat pengembangan aplikasi menjadi terhambat dan menimbulkan *cost* bagi perusahaan.

Testing merupakan hal yang sangat penting dan wajib diterapkan ketika mengembangkan aplikasi agar terhindar dari bugs. Namun agar mudah dalam menuliskan kode testing, gunakanlah framework testing. Di JavaScript ada banyak opsi framework testing yang bisa Anda gunakan, salah satu yang terbaik dan populer digunakan adalah [Jest](https://jestjs.io/).

![202108031738113c54c96be404927de4c36cfeab5df7ad](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8ede9618-0284-4a9e-9832-740dfa122a88)

Jest merupakan testing framework yang dikembangkan oleh Facebook. Fokus Jest ialah menyederhanakan dan meningkatkan kompatibilitas automation testing pada proyek JavaScript dalam skala besar sekalipun. Jest dapat digunakan pada aplikasi Node.js dan Front-End Web seperti React, Angular, Vue, dan lainnya. Menggunakan framework Jest sangat mudah, pasalnya ia tidak membutuhkan konfigurasi saat pertama kali digunakan.

Selain memudahkan dalam penulisan testing, penggunaan framework testing juga membantu meningkatkan *readability* kode testing yang dituliskan. Dengan menggunakan Jest, kita dapat menuliskan kode testing layaknya skenario pengujian yang mudah dibaca oleh manusia.

Agar mudah dalam memahami maksudnya, mari kita coba ubah kode testing yang menggunakan core module menjadi Jest.

```js
// typeTriangle.test.js
const typeTriangle = require('./typeTriangle');
 
describe('Sebuah fungsi typeTriangle', () => {
  it('harus mengembalikan segitiga sama sisi ketika semua nilai sisi sama', () => {
    expect(typeTriangle(4, 4, 4)).toEqual('Segitiga sama sisi');
    expect(typeTriangle(1, 1, 1)).toEqual('Segitiga sama sisi');
    expect(typeTriangle(8, 8, 8)).toEqual('Segitiga sama sisi');
  });
  
  it('harus mengembalikan segitiga sama kaki ketika ada dua nilai sisi yang sama', () => {
    expect(typeTriangle(2, 2, 1)).toEqual('Segitiga sama kaki');
    expect(typeTriangle(4, 2, 4)).toEqual('Segitiga sama kaki');
    expect(typeTriangle(1, 3, 3)).toEqual('Segitiga sama kaki');
  });
  
  it('harus mengembalikan segitiga sembarang ketika tidak ada nilai sisi yang sama', () => {
    expect(typeTriangle(4, 2, 1)).toEqual('Segitiga sembarang');
    expect(typeTriangle(2, 3, 5)).toEqual('Segitiga sembarang');
    expect(typeTriangle(8, 2, 1)).toEqual('Segitiga sembarang');
  });
});
```

```js
// typTriangle.js
const typeTriangle = (sideA, sideB, sideC) => {
if(sideA === sideB && sideB === sideC) {
 return 'Segitiga sama sisi';
}
 
if(sideA === sideB || sideA === sideC || sideB === sideC) {
 return 'Segitiga sama kaki';
}
 
return 'Segitiga sembarang';
};
 
module.exports = typeTriangle;
```

Bila pengujian tersebut dijalankan, maka hasilnya akan tampak seperti ini:

![20210803174959041c1dd6d5d2be3bbe8d166fc0e4a972](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4b02ab65-8820-4029-80b4-9d20b7a64255)

Saat ini, pengujian tidak dapat dijalankan pada platform Dicoding karena belum mendukung pemasangan package pihak ketiga. Jika Anda ingin melihat penerapan lengkap dari contoh pengujian menggunakan Jest silakan lihat repository berikut: [jest-example](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/201-jest-example)

Simak contoh kode dan hasil pengujian di atas, ada dua perbedaan yang signifikan antara pengujian yang dituliskan menggunakan core module assert dan Jest.

Perbedaan yang pertama ada di penulisan kode testing. Kode testing yang dituliskan menggunakan Jest jauh lebih mudah untuk dibaca dan kelola, sehingga kode testing dapat lebih mudah dipahami dan dikembangkan.

Kode testing dapat dituliskan layaknya sebuah skenario yang dipisahkan berdasarkan kasus yang hendak diuji. Contohnya pada skenario *harus mengembalikan segitiga sama sisi ketika semua nilai sisinya sama*, di sana kita bisa fokus untuk menguji fungsi **typeTriangle** ketika diberikan nilai parameter yang seluruhnya sama.

Perbedaan yang kedua ada pada hasil pengujiannya. Ketika menggunakan Jest, laporan hasil pengujiannya cukup komprehensif. Anda bisa lihat skenario pengujian yang dijalankan beserta hasilnya. Jest juga bisa memberikan laporan *code coverage testing* bila Anda membutuhkannya.

Jika terdapat pengujian yang gagal, Jest akan menghasilkan output seperti ini:

![202108031750382a3b611eb04d91a26fa607d03c8066ad](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/82052e29-b4b2-4f29-9667-7df922ab76c6)

Jest akan memberitahu letak skenario yang gagal sehingga Anda bisa menyimpulkan dengan cepat di mana potensi kesalahan kode pada aplikasi.

Framework Jest kaya akan fitur dan memiliki API yang luas. Kita akan menggunakan Jest pada latihan di modul ini dan mempelajari API-nya seiring berjalannya materi. Jika Anda ingin mengenal Jest lebih dalam dan *best practice* yang ada di dalamnya, disarankan untuk meluangkan waktu untuk membaca [dokumentasi yang diberikan oleh Jest](https://jestjs.io/docs/getting-started).

### **Mengenal Kultur Test Driven Development**

Saking pentingnya penerapan testing pada pengembangan aplikasi, salah satu metodologi pengembangan software yaitu [extreme programming](https://www.google.com/url?q=http://www.extremeprogramming.org&sa=D&source=editors&ust=1627990681070000&usg=AOvVaw3KU8nNKr8cdBfMQl3BBwl6) menyebutkan bahwa pengembang aplikasi harus selalu menerapkan unit testing, serta semua bagian software harus diuji secara menyeluruh. Semua pengujian harus passed sebelum software (atau fitur baru) dapat dirilis. Bahkan, pengujian harus ditulis sebelum kode produksi ditulis. Karena dengan menuliskan pengujian di awal, Anda akan merasa jauh lebih mudah dan lebih cepat dalam menuliskan kode [[5]](https://www.google.com/url?q=http://www.extremeprogramming.org/rules/testfirst.html&sa=D&source=editors&ust=1627990681070000&usg=AOvVaw3gVfpPp76BCS4nJtsBf_qD).

Konsep ini dikemukakan oleh Kent Beck (pembuat extreme programming) pada tahun 1999 dan dikenal dengan nama *Test First Programming*. Konsep ini terus berkembang dan saat ini dikenal dengan nama Test Driven Development atau disingkat menjadi TDD.

TDD sudah menjadi kultur dalam mengembangkan aplikasi atau fitur baru terutama pada model pengembangan Agile. Dengan menerapkan kultur TDD, aplikasi yang dibangun dapat terhindar dari kecacatan atau ketidaksesuaian dan meningkatkan kepercayaan diri dalam men-deliver karena kode yang ditulis sudah terjamin dan terproteksi oleh pengujian.

Pengembangan software menggunakan TDD memiliki alur yang khas ketika membangun fitur baru. Berikut alurnya:

1. **Membuat test**
   
    Diawali dengan membuat kode test untuk fitur baru tersebut. Kode test awal biasanya dimulai dengan skenario yang paling spesifik dahulu. Contohnya, jika Anda menguji sebuah fungsi, awali dengan menguji ketidaksesuaian input yang diberikan. Atau bila Anda menguji sebuah objek, awali dengan menguji ketersediaan member (properti atau method) yang diharapkan.

2. **Menjalankan test dengan hasil yang gagal.**
   
    Setelah membuat tes, pastikan Anda menjalankan tesnya. Konfirmasi bahwa tes tersebut harus gagal dengan alasan yang wajar. Pengujian akan gagal karena Anda belum menuliskan kode apa pun.

3. **Menulis kode apa adanya untuk membuat tes menjadi lulus**
   
    Setelah itu, tulislah kode dan buat pengujiannya lulus. Di tahap ini, Anda tidak perlu “sok pintar” dengan menuliskan kode canggih. Tulis kode apa adanya yang terpenting adalah membuat pengujiannya menjadi lulus.

4. **Menjalankan test dengan hasil yang lulus**

    Selesai menuliskan kode, jalankan kembali testnya dan pastikan lulus. Jika masih ada yang gagal, silakan ulangi langkah ke-3.

5. **Refactor kode sebelumnya dan pastikan pengujian tetap lulus**
   
    Setelah pengujiannya lulus, inilah saatnya Anda memperbaiki kode yang sudah ditulis sebelumnya. Namun, pastikan perbaikan yang Anda lakukan tetap menjaga fungsionalitas kode dan pengujiannya tetap lulus. Perbaikan kode dapat meliputi:
    - Menghapus duplikasi kode
    - Memecah kode menjadi fungsi-fungsi kecil
    - Mengoptimasi logika yang dituliskan
  
6. **Ulangi**
   
   Setelah kode selesai di-refactor, ulangi alur di atas dalam menambahkan setiap fungsionalitas baru. Pengujian harus dilakukan sekecil mungkin dan bertahap. Jadi, jika ke depannya ada kesalahan, kita tidak perlu men-debug-nya dan langsung menyadari letak kesalahan tersebut. Jangan lupa, untuk lakukan commit sesering mungkin jika Anda menggunakan Git.

Dari alur tersebut, TDD dikenal memiliki alur red-green-refactor, karena diawali dengan pengujian yang merah (gagal), kemudian hijau (lulus), dan terakhir refactor kode.


![20210809161854e7f0bad3de588df59ae327deab4b6d9b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/65bde38a-b06e-4d74-8be6-709cf3d554b0)

Terdapat beberapa aspek penting yang perlu Anda ketahui dan ikuti ketika menerapkan kultur TDD. Contohnya [Keep It Simple, Short (KISS)](https://en.wikipedia.org/wiki/KISS_principle) dan [You Aren’t Gonna Need It (YAGNI)](https://www.google.com/url?q=https://en.wikipedia.org/wiki/You_aren%2527t_gonna_need_it&sa=D&source=editors&ust=1627990681074000&usg=AOvVaw00btjJpTvOiVMRkaup3oY_). Prinsip tersebut mengajarkan kita untuk menuliskan kode sesederhana mungkin dan fokus terhadap fitur yang akan dibangun. Artinya, tulislah kode yang memang bertujuan untuk lulus dari tes.  

### **Menulis Skenario Test**

Pengembangan aplikasi dengan menerapkan kultur TDD diarahkan berdasarkan testing. Jadi, tentu penting untuk memiliki skenario testing di awal sebelum Anda mulai membangun sebuah fitur baru. Pertanyaannya, bagaimana caranya kita membuat skenario testing yang menjamin fungsionalitas fitur baru tercukupi, tanpa adanya kecacatan yang memungkinkan terjadi?

Untuk menjawab pertanyaan tersebut Anda harus mengetahui sedikit tentang siklus pengembangan software. Contohnya di Agile, bila Anda hendak membuat fitur baru, idealnya terdapat siklus di mana developer duduk bareng dengan client untuk mendiskusikan dan mendeskripsikan seperti apa fitur yang diinginkan. Siklus tersebut dikenal sebagai [*Requirement Analysis*](https://en.wikipedia.org/wiki/Requirements_analysis).

Pada Requirement Analysis, seluruh *stakeholder* terkait fitur baru, baik teknikal (developer, QA engineer) maupun nonteknikal (client) harus terlibat dalam diskusi tersebut. Tujuannya untuk menghilangkan *gap knowledge* di antara mereka. Di proses ini, client merupakan *domain expert* alias individu yang paling tahu dan mengerti seperti apa fitur harus berfungsi.

Dari diskusi tersebut biasanya menghasilkan sebuah *acceptance scenario* yang mendeskripsikan *behavior* dari fitur yang hendak dibangun berdasarkan sebuah skenario. Acceptance scenario digunakan sebagai patokan QA engineer (atau developer bila tidak ada tim QA engineer) dalam membuat test case atau skenario testing. Pertanyaan selanjutnya, seperti apa format dokumen acceptance scenario?

Sebenarnya, tidak ada format baku dalam menuliskan acceptance scenario, selama format tersebut dapat dimengerti untuk membuat sebuah test case, harusnya tidak ada masalah. Sebagai gambaran, Anda bisa menuliskan acceptance scenario sesederhana ini:

    Fitur: Fungsi pendeteksi segitiga

    Deskripsi: Sebagai seorang user, saya ingin mengetahui segitiga apa yang terbentuk ketika diberikan 3 input sisi.

    Payload:

    - sideA (Number)
    - sideB (Number)
    - sideC (Number)


    Spesifikasi:

    - Ketika semua nilai sisi sama
      - Mengembalikan nilai "Segitiga sama sisi"
    - Ketika ada dua nilai sisi yang sama
      - Mengembalikan nilai "Segitiga sama kaki"
    - Ketika tidak ada nilai sisi yang sama
     - Mengembalikan nilai "Segitiga sembarang"

Namun, ada salah satu format yang banyak digunakan perusahaan dalam menetapkan acceptance scenario, yakni *feature files*.

Biasanya *feature files* dituliskan dengan format Given-When-Then (GWT). *Given* merupakan sebuah keadaan yang diberikan ketika pengujian dilakukan, *When* merupakan aksi yang dilakukan, dan *Then* merupakan hasil yang diharapkan.

Agar terbayang, berikut adalah contoh dari *feature files* dalam membangun fitur mendeteksi segitiga yang sudah kita ketahui sebelumnya.

    // detect_triangle.feature

    Feature: Fungsi pendeteksi segitiga
    Sebagai seorang user, saya ingin mengetahui segitiga apa yang terbentuk ketika diberikan 3 input sisi.
    
    Scenario Outline: Mendeteksi segitiga sama sisi
      Given Saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
      When Saya mendeteksi segitiga
      Then Menghasilkan "Segitiga sama sisi"
    
    Examples:
    | sideA | sideB | sideC |
    | 4 | 4 | 4 |
    | 1 | 1 | 1 |
    | 8 | 8 | 8 |
    
    Scenario Outline: Mendeteksi segitiga sama kaki
      Given Saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
      When Saya mendeteksi segitiga
      Then Menghasilkan "Segitiga sama kaki"
    
    Examples:
    | sideA | sideB | sideC |
    | 2 | 2 | 1 |
    | 4 | 2 | 4 |
    | 1 | 3 | 3 |
    
    Scenario Outline: Mendeteksi segitiga sembarang
      Given Saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
      When Saya mendeteksi segitiga
      Then Menghasilkan "Segitiga sembarang"
    
    Examples:
    | sideA | sideB | sideC |
    | 4 | 2 | 1 |
    | 2 | 3 | 5 |
    | 8 | 2 | 1 |

*Feature files* dituliskan dalam bahasa Gherkin.

Dari *feature files* tersebut QA engineer bisa mengubah formatnya ke kode testing seperti Jest atau framework lainnya.

Ketahuilah bahwa *feature files* menggunakan bahasa [Gherkin](https://cucumber.io/docs/gherkin/). Bahasa ini cocok digunakan dalam menuliskan skenario pengujian karena simpel, mudah dibaca oleh nonteknikal, dan membantu kita untuk fokus terhadap behavior dari fitur yang akan dibangun (dikenal dengan istilah [*Behavior-Driven Development [BDD]*](https://en.wikipedia.org/wiki/Behavior-driven_development)).

Karena kelebihannya ini, terdapat tools yang memudahkan dalam menerapkan BDD yakni, [cucumber](https://cucumber.io/). Pasalnya, dengan cucumber, *feature files* dapat digunakan sebagai dasar skenario pengujian secara langsung dan kode testingnya pun dapat dituliskan menggunakan format GWT.

Simak perbedaan kode testing yang menggunakan cucumberjs dan Jest.

```js
// cucumberjs

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const typeTriangle = require('../../src/typeTriangle');
 
let actualAnswer;
 
Given('Saya memiliki nilai sisi {int}, {int}, {int}', (sideA, sideB, sideC) => {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
});
 
When('Saya mendeteksi segitiga', () => {
  actualAnswer = typeTriangle(this.sideA, this.sideB, this.sideC);
});
 
Then('Menghasilkan {string}', (expectedAnswer) => {
  assert.strictEqual(actualAnswer, expectedAnswer);
});
```

```js
// Jest

const typeTriangle = require('./typeTriangle');
 
describe('Sebuah fungsi typeTriangle', () => {
  it('harus mengembalikan segitiga sama sisi ketika semua nilai sisi sama', () => {
    expect(typeTriangle(4, 4, 4)).toEqual('Segitiga sama sisi');
    expect(typeTriangle(1, 1, 1)).toEqual('Segitiga sama sisi');
    expect(typeTriangle(8, 8, 8)).toEqual('Segitiga sama sisi');
  });
 
  it('harus mengembalikan segitiga sama kaki ketika ada dua nilai sisi yang sama', () => {
    expect(typeTriangle(2, 2, 1)).toEqual('Segitiga sama kaki');
    expect(typeTriangle(4, 2, 4)).toEqual('Segitiga sama kaki');
    expect(typeTriangle(1, 3, 3)).toEqual('Segitiga sama kaki');
  });
 
  it('harus mengembalikan segitiga sembarang ketika tidak ada nilai sisi yang sama', () => {
    expect(typeTriangle(4, 2, 1)).toEqual('Segitiga sembarang');
    expect(typeTriangle(2, 3, 5)).toEqual('Segitiga sembarang');
    expect(typeTriangle(8, 2, 1)).toEqual('Segitiga sembarang');
  });
});
```

Namun ingat! Gherkin hanyalah sebuah tools untuk memudahkan kita menerapkan BDD, bukan berarti BDD harus menggunakan Gherkin. Anda tetap bisa menggunakan Jest atau framework lainnya. Yang terpenting adalah pastikan skenario testing mencakup seluruh skenario dalam menguji behavior dari sebuah komponen dalam membangun fitur.



**Perhatian:**
Menggunakan bahasa Indonesia dalam menuliskan test case di JavaScript bukanlah *best practice*. Maka dari itu, tetap gunakan bahasa Inggris ya! Kode yang ditampakkan pada materi ini menggunakan bahasa Indonesia dengan alasan untuk memudahkan pemahaman Anda bagaimana test case harus dituliskan.

### **Menerapkan Automation Testing dalam Membangun Program Matematika Dasar**

Cukup untuk teori, sekarang saatnya kita mempraktikkan apa yang sudah kita pelajari dalam teori. Tanpa latihan tentu rasanya tidak afdal bukan? Nah, persiapkan text editor kalian karena sekarang tiba saatnya kita *ngoding*!

Dalam latihan kali ini, kita akan membuat sebuah program matematika dasar yang mungkin sudah Anda pelajari sedari SD. Walau proyeknya tidak sulit, tetapi inti dari latihan kali ini adalah mendapatkan pengalaman menuliskan sebuah program menggunakan kultur TDD.

Jadi, seperti apa program matematika dasarnya? Sangat simpel! Kita akan membuat program yang dapat menambahkan (add), mengurangi (subtract), mengalikan (multiply), dan membagi (divide) dua buah nilai angka. Fungsi-fungsi operasi tersebut akan kita bungkus dalam sebuah objek bernama MathBasic.

Berikut adalah skenario pengujian untuk **MathBasic**.

Sebuah objek MathBasic

    - Harus memiliki fungsi add, subtract, multiply, dan divide

    - Sebuah fungsi add:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a + b ketika diberikan dua parameter number

    - Sebuah fungsi subtract:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a - b ketika diberikan dua parameter number

    - Sebuah fungsi multiply:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a * b ketika diberikan dua parameter number

    - Sebuah fungsi divide:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a / b ketika diberikan dua parameter number

Dalam menentukan skenario pengujian, penulis suka mengawali dengan skenario gagal terlebih dahulu. Karena dengan menentukkan skenario gagal (eror), memastikan bahwa sebuah unit yang diuji dapat menangani berbagai anomali yang terprediksi mungkin terjadi. Terlebih variabel di JavaScript bersifat *dynamic type*, sehingga pengecekan tipe data diperlukan bila Anda menganggap tipe data adalah hal yang ketat untuk diuji.

Secara alami variabel pada JavaScript bersifat *dynamic type*. Hal ini ini menjadi tantangan tersendiri bagi developer agar lebih disiplin dan berhati-hati dalam memberikan nilai pada variabel atau parameter fungsi. Bila salah memberikan tipe data, besar kemungkinan aplikasi akan eror.

Untuk mengurangi kesalahan, Anda bisa menerapkan pengujian tipe data. Namun, kekurangannya adalah skenario pengujian menjadi gemuk dan tidak fokus ke bisnis logic, di mana bisnis logic lebih esensial untuk diuji. Karena alasan itu, banyak developer yang menghiraukan pengujian tipe data pada JavaScript.

Oke, cukup jelas untuk skenario pengujiannya? Yuk kita mulai. 

### **Menyiapkan Proyek Latihan**

Pertama, silakan buat proyek baru dengan nama math-api (spoiler, ke depannya kita akan mengembangkan program ini menjadi API). Kemudian inisialisasi proyek dengan perintah:

```
npm init --y
```

Pastikan berkas **package.json** terbentuk.

![20210803184747cdaadf434dab12aaa602a2f3ee54ff05](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b5f4006e-d3c3-4d38-b15b-1c5c38f335b1)

Karena kita akan menggunakan Jest untuk pengujian, maka selanjutnya pasang package Jest dengan perintah:

```
npm install jest @types/jest --save-dev
```

Package **@types/jest** digunakan untuk mengaktifkan [code Intellisense](https://code.visualstudio.com/docs/editor/intellisense) terhadap global object/method Jest di VSCode. Tujuannya, agar memudahkan Anda dalam menuliskan skenario pengujian menggunakan Jest

Anda juga bisa memasang ESLint agar kode yang dituliskan memiliki gaya yang konsisten. 

```
npm install eslint --save-dev
```

Ketahuilah bahwa kami menggunakan [AirBnB Code Style](https://github.com/airbnb/javascript) dalam menuliskan potongan kode JavaScript di seluruh kelas ini. Namun, itu bukan berarti kami mengharuskan Anda juga menggunakannya. Anda bisa memilih style guide atau membuatnya sesuai selera dan kebutuhan Anda.

Setelah package Jest dan ESLint (opsional) terpasang, silakan buka berkas **package.json** dan ubah script runner `test` menjadi seperti ini:

```js
"scripts": {
    "test": "jest --watchAll"
 },
```

Dengan begitu, pengujian menggunakan jest dapat dilakukan melalui perintah:

```
npm run test
```

Secara default ketika menjalankan pengujian dengan Jest, Jest akan mendeteksi berkas pengujian yang memiliki nama *.test.js (configurable). Jadi, setiap berkas pengujian nanti kita akan beri nama dengan pola tersebut.

Pada script runner tersebut Anda juga melihat terdapat parameter `--watchAll`. Parameter tersebut digunakan agar Jest selalu memantau perubahan kode yang kita lakukan di proyek. Bila terdapat perubahan kode, Jest akan menjalankan ulang pengujian.

Oke, simpan berkas **package.json** dan selanjutnya buat folder baru bernama src.

![2021080318474769454f0722ba798fa363e2d81d05316c](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/94f944fe-a5fd-49c6-bd6d-35f705ce7271)

Di folder inilah kita akan membuat seluruh kode.

Oh ya! Bila Anda menggunakan ESLint, jangan lupa untuk memberitahu bahwa Anda menggunakan environment Jest. Tujuannya agar ESLint mengenal global method Jest seperti `describe`, `it`, `expect`, dan method lainnya. 

Caranya, silakan buka berkas **.eslintrc.json**, pada properti “env”, tambahkan properti “jest” dengan nilai true seperti ini:

```js
"env": {
    "commonjs": true,
    "es2021": true,
    "node": true,
    "jest": true
},
```

Simpan perubahan pada berkas **.eslintrc.json** dan sekarang kita siap untuk mulai menuliskan kode.

### **Menuliskan Pengujian dan Kode MathBasic**

Skenario Pengujian:

    - Sebuah objek MathBasic

      Harus memiliki fungsi add, subtract, multiply, dan divide

    - Sebuah fungsi add:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a + b ketika diberikan dua parameter number

    - Sebuah fungsi subtract:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a - b ketika diberikan dua parameter number

    - Sebuah fungsi multiply:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a * b ketika diberikan dua parameter number

    - Sebuah fungsi divide:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a / b ketika diberikan dua parameter number

Kita mulai dengan membuat dua berkas JavaScript bernama **MathBasic.js** dan **MathBasic.test.js** di dalam folder src.

![202108031855409387946ed2b35e3670ce2f829d61b5f0](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f05965e1-0a60-44dd-a2ed-9aaab75f0e8a)

Ingat! Langkah pertama dari TDD adalah menuliskan test case terlebih dulu. Jadi, buka berkas **MathBasic.test.js** dan mari kita tulis test case yang pertama.

```js
// MathBasic.test.js

const MathBasic = require('./MathBasic');
 
describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
});
```

Kemudian jalankan pengujiannya menggunakan perintah:

```
npm run test
```

Tentu hasilnya akan gagal seperti berikut:

![2021080318580953dd43cd884aa207b2d575153d6f94bc](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d589afff-b01f-431e-8c87-d16ad546fc26)

Wajar, karena kita belum menuliskan kode apa pun dalam membentuk objek `MathBasic`. Jadi, mari kita buat pengujiannya menghasilkan warna hijau (lolos). Tetap jalankan tesnya ya.

Buka berkas MathBasic.js dan buat buat objek `MathBasic` yang memiliki fungsi `add`, `subtract`, `multiply`, dan `divide`. Ingat! Dalam menuliskan kodenya, fokus saja dulu untuk membuat pengujiannya lolos.

```js
// MathBasic.js

const MathBasic = {
  add: function add() {
 
  },
  subtract: function subtract() {
 
  },
  multiply: function multiply() {
 
  },
  divide: function divide() {
 
  },
};
 
module.exports = MathBasic;
```

Simpan berkas **MathBasic.js** dan lihat hasil pengujiannya.

![20210803190120053abeb6bf9ed61ff9b8f32f7c5f11d1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/624d07a4-c4ab-4df4-8d26-02f9b73ffaee)

*Good job*! Kita mendapat hijau pertama. Kita bisa tandai pengujian pertama selesai.

    Skenario Pengujian:

    - Sebuah objek MathBasic

      Harus memiliki fungsi add, subtract, multiply, dan divide

    - Sebuah fungsi add:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a + b ketika diberikan dua parameter number

    - Sebuah fungsi subtract:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a - b ketika diberikan dua parameter number

    - Sebuah fungsi multiply:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a * b ketika diberikan dua parameter number

    - Sebuah fungsi divide:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a / b ketika diberikan dua parameter number


Tahap selanjutnya adalah refactor. Dalam tahap ini kita akan memperbaiki kode yang dituliskan sebelumnya. Carilah kode yang kira-kira bisa kita improvisasi. Bila dirasa kode sudah baik, Anda bisa langsung menuju *test case* selanjutnya.

Kebetulan kode yang kita tuliskan sebelumnya memiliki beberapa hal yang bisa diperbaiki. Contoh, karena penulis lebih senang menggunakan arrow function, maka kita bisa mengubah regular function menjadi arrow function.

```js
// MathBasic.js

const MathBasic = {
  add: () => {
 
  },
  subtract: () => {
 
  },
  multiply: () => {
 
  },
  divide: () => {
 
  },
};
 
module.exports = MathBasic;
```

Hal terpenting dalam tahap refactor adalah kita tetap menjaga pengujiannya hijau. Simpan berkas **MathBasic.js** dan pastikan pengujiannya masih hijau.

![20210803190730770945f132f22a860f208e2c45255b5a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/99122c05-9e2f-4807-94fc-8ea8f0cfcd41)

Bagaimana menurut Anda? TDD asyik, bukan?

Kita lanjutkan dengan menuliskan test case selanjutnya. Buka kembali **MathBasic.test.js** dan tuliskan skenario pengujian berikut:

```js
// MathBasic.test.js

const MathBasic = require('./MathBasic');
 
describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
 
 
  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });
  });
});
```

**Catatan**: Untuk menguji throw error, Anda harus membungkus kode dalam sebuah fungsi. Jika tidak, error tidak akan tertangkap dan menyebabkan proses assertion menjadi gagal. Lihat referensi asli yang diberikan Jest mengenai ini: [toThrowError](https://jestjs.io/docs/expect#tothrowerror)

Sekarang, pengujian kembali merah.

![20210803190926b27216fa11b8dcaf15a4df53473fcfec](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/daf76638-6c45-4c83-af8b-53f94a060abc)

Yuk kita buat pengujiannya jadi hijau. Tuliskan kode berikut pada fungsi `add`.

```js
// MathBasic.js

const MathBasic = {
  add: (...args) => {
    if (args.length < 2 || args.length > 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }
  },
  subtract: () => {
 
 
  },
  multiply: () => {
 
 
  },
  divide: () => {
 
 
  },
};
 
 
module.exports = MathBasic;
```

Operator … pada parameter fungsi disebut rest parameters. Operator tersebut dapat menggabungkan seluruh parameter yang diberikan pada fungsi menjadi array. Itulah mengapa variable `args` memiliki properti `length` karena sejatinya ia adalah array yang berisi nilai dari seluruh parameter yang diberikan. Jika Anda belum familiar dengan rest parameters, silakan pelajari lebih dalam dengan melihat dokumentasi yang diberikan MDN mengenai [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Simpan berkas MathBasic.js dan pastikan pengujiannya menjadi hijau.


![20210803191112c9951bc2897764deb3d0fc0369ef4174](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b7f615d0-4ca9-4b77-af77-1dccbe75d22a)

Skenario Pengujian:

    Sebuah objek MathBasic

      Harus memiliki fungsi add, subtract, multiply, dan divide

    Sebuah fungsi add:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a + b ketika diberikan dua parameter number

    Sebuah fungsi subtract:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a - b ketika diberikan dua parameter number

    Sebuah fungsi multiply:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a * b ketika diberikan dua parameter number

    Sebuah fungsi divide:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a / b ketika diberikan dua parameter number

Sekarang saatnya melakukan refactor. Kita bisa perbaiki kode kondisi **args.length < 2 || args.length > 2** menjadi **args.length !== 2.**

```js
// MathBasic.js

const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
  },
  subtract: () => {
 
 
  },
  multiply: () => {
 
 
  },
  divide: () => {
 
 
  },
};
 
 
module.exports = MathBasic;
```

Pastikan pengujiannya tetap hijau ya!

Kita lanjutkan dengan menulis test case selanjutnya. Buka kembali **MathBasic.test.js** dan tuliskan test case berikut:

```js
const MathBasic = require('./MathBasic');
 
describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
 
  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });
 
    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });
  });
});
```

Simpan berkas tesnya dan pastikan pengujian menjadi merah.

![202108031918597e25e87e7d84042595c82899d8191ed5](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8d77056e-3d15-4016-9b95-462cb3c2f44b)

Mari kita buat pengujian menjadi hijau kembali dengan menambahkan kode pengecekan tipe data pada argument yang diberikan.

```js
// MathBasic.js

const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
    const a = args[0];
    const b = args[1];
 
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
  },
  subtract: () => {
 
  },
  multiply: () => {
 
  },
  divide: () => {
 
  },
};
 
module.exports = MathBasic;
```

Sekarang pengujian kembali hijau.

![20210803192238759af1e2cb56d93513ca3fc332c49f6a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4a62901c-8ce6-434c-9be5-2347f4c4d360)

Skenario Pengujian:

    Sebuah objek MathBasic

      Harus memiliki fungsi add, subtract, multiply, dan divide

      Sebuah fungsi add:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a + b ketika diberikan dua parameter number

    Sebuah fungsi subtract:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a - b ketika diberikan dua parameter number

    Sebuah fungsi multiply:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a * b ketika diberikan dua parameter number

    Sebuah fungsi divide:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a / b ketika diberikan dua parameter number

Refactor kode sebelumnya agar lebih baik lagi. Kita bisa gunakan destructuring array untuk menginisialisasi variabel **a** dan **b** daripada mengambil satu per satu dari index array.

```js
// MathBasic.js

const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
    const [a, b] = args;
 
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
  },
  subtract: () => {
 
  },
  multiply: () => {
 
  },
  divide: () => {
 
  },
};
 
module.exports = MathBasic;
```

Pastikan perubahan yang dilakukan tidak merusak pengujiannya ya.

Kita menuju test case terakhir untuk fungsi `MathBasic.add.` Setelah seluruh test case negatif sudah tertulis, saatnya kita menguji fungsionalitas asli dari fungsi `add`. Silakan tulis *test case* berikut:

```js
// MathBasic.test.js

const MathBasic = require('./MathBasic');
 
describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
 
  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });
 
    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });
 
    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });
});
```

Pengujian akan kembali merah.

!~~[2021080319313017e4788d3b657eaaa3a9a9784f264fa5](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/1962cb4a-2e03-4aa7-893a-101059915a21)

Sekarang, kembalikan fungsi add dengan **a + b**.

```js
const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
    const [a, b] = args;
 
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
 
    return a + b;
  },
  subtract: () => {
 
  },
  multiply: () => {
 
  },
  divide: () => {
 
  },
};
 
module.exports = MathBasic;
```

Pengujian kembali hijau.

![202108031932342a8962fc876645b5fafaf8ab89ce646d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0c33af8e-7712-43c6-a215-f17463c0273c)

Selesai sudah pengujian dan penulisan kode untuk fungsi **MathBasic.add**. Kita bisa coret skenario pengujian tersebut.

    Skenario Pengujian:

    Sebuah objek MathBasic

      Harus memiliki fungsi add, subtract, multiply, dan divide

      Sebuah fungsi add:

      Harus mengembalikan eror ketika tidak diberikan dua parameter

      Harus mengembalikan eror ketika diberikan parameter selain number

      Harus mengembalikan nilai a + b ketika diberikan dua parameter number

    Sebuah fungsi subtract:

    Harus mengembalikan eror ketika tidak diberikan dua parameter

    Harus mengembalikan eror ketika diberikan parameter selain number

    Harus mengembalikan nilai a - b ketika diberikan dua parameter number

    Sebuah fungsi multiply:

    Harus mengembalikan eror ketika tidak diberikan dua parameter

    Harus mengembalikan eror ketika diberikan parameter selain number

    Harus mengembalikan nilai a * b ketika diberikan dua parameter number

    Sebuah fungsi divide:

    Harus mengembalikan eror ketika tidak diberikan dua parameter

    Harus mengembalikan eror ketika diberikan parameter selain number

    Harus mengembalikan nilai a / b ketika diberikan dua parameter number

Kini kita memiliki tiga fungsi lain yang perlu kita buat dan uji. Semua proses pengujian dan penulisan kode dalam membangun fungsi-fungsi tersebut sama seperti yang sudah kita lakukan.

Untuk Anda yang baru pertama kali mencoba TDD. Mungkin proses pengembangan aplikasi menjadi terasa aneh dan tidak biasa. Tapi percayalah, hal itu karena Anda hanya belum terbiasa dengan pola TDD. Anda akan terbiasa bila terus mencoba dan berlatih. Karena itu, silakan lengkapi fungsionalitas fungsi subtract, multiply, dan divide berdasarkan skenario pengujian secara mandiri. Tapi ingat, harus TDD ya.

Sebelum Anda *ngoding* secara mandiri, ada beberapa tips dan trik yang mungkin perlu diketahui dalam menuliskan test case menggunakan Jest.

- Cobalah untuk mengaktifkan fitur coverage test ketika menjalankan pengujian. Tujuannya untuk mengetahui seberapa ter-cover-nya kode yang Anda tuliskan oleh pengujian. Caranya, pada jest runner, tambahkan parameter `--coverage`.

```
"scripts": {
"test": "jest --watchAll --coverage"
}
```

Laporan coverage test akan tampak pada hasil pengujian.

![2021080319360411af69cab33070fdebd1fd05e794c3d4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b0904d7a-d6c2-44f3-a367-e62bd5a530a9)

Semakin tinggi persentase yang dihasilkan oleh coverage test, itu berarti semakin baik kode yang kita tuliskan. Karena *kode yang buruk adalah kode yang tidak diuji*.

**Perhatian:**
Berikut adalah source code penerapan lengkap untuk fungsi [MathBasic](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/202-math-basic) beserta pengujiannya: math-basic. Sebelum melihat source code tersebut, alangkah baiknya Anda kerjakan dulu secara mandiri agar pengalaman TDD Anda semakin terasah.

### **Integration Test**

Ketika kita menuliskan kode, tak jarang sebuah unit memiliki ketergantungan (*dependent*) terhadap unit lain. Contohnya, sebuah objek request handler membutuhkan objek service agar dapat mengelola data dari/ke database. 

Untuk menguji objek handler tersebut, penting untuk memastikan hubungan antara objek handler dan service bekerja secara harmonis. Seperti memastikan handler memanggil service yang benar, memastikan service harus dipanggil menggunakan parameter tertentu, dan hal lainnya dalam memastikan bagaimana service diperlakukan oleh handler. 

Dalam arti lain, jika sudah sampai tahap pengujian yang melibatkan lebih dari satu unit, Anda sudah bisa dikatakan telah sampai tahap integration test.

Cakupan di mana pengujian bisa dikatakan "integration test" sebenarnya masih buram. Banyak yang menganggap integration test memiliki cakupan yang luas, seperti menguji kolaborasi dengan unit yang dituliskan oleh developer berbeda atau unit pihak ketiga. Jika dependency hanya terhadap objek internal saja, hal itu belum bisa dikatakan integration test. Namun, di materi ini cakupan integration test kami persempit guna memudahkan dalam memahami materinya.

Untuk lebih jelasnya, mari kita lihat bagaimana integration testing diimplementasikan pada sebuah studi kasus program peluncuran roket:

```js
// RocketLauncher.js

class RocketLauncher {
 constructor(rockets = []) {
   this.rockets = rockets;
 }
 
 launchAllRockets() {
   this.rockets.forEach((rocket) => {
     rocket.engineStatus = 'active';
   });
 
   this.rockets = [];
 }
 
 launchRocketByQueue() {
   const rocket = this.rockets.shift();
   rocket.engineStatus = 'active';
 }
}
 
module.exports = RocketLauncher;
```

```js
// Rocket.js

class Rocket {
 constructor(name) {
   this.name = name;
   this.engineStatus = 'inactive';
 }
}
 
module.exports = Rocket;
```

Kita memiliki program peluncuran roket yang dapat meluncurkan satu roket dan banyak roket sekaligus. Peluncuran roket tersebut merupakan instance dari `RocketLauncher`. Rocket launcher yang kita miliki bisa menampung banyak roket untuk diluncurkan, kita simpan roket-roket tersebut pada properti `this.rockets`.

Seluruh roket yang disimpan merupakan instance dari `Rocket`. Di mana setiap instance-nya memiliki `name` dan `engineStatus` dengan nilai default “inactive”.

Peluncuran roket dapat dilakukan melalui dua fungsi. Jika ingin meluncurkan seluruh roket yang berada di dalam `this.rockets`, gunakan fungsi `launchAllRockets`. Namun, jika ingin meluncurkan roket satu per satu, gunakan fungsi `launchRocketByQueue`. Setiap roket yang diluncurkan akan dihapus dari `this.rockets` dan `statusEngine` dari roket tersebut berubah menjadi “active”.

Dari kasus di atas, ketika ingin menguji apakah fungsi `launchAllRockets` dan launchRocketByQueue sudah benar, Anda harus memeriksa beberapa keadaan. Pertama, Anda harus memastikan jumlah roket yang berada di dalam `this.rockets` harus berkurang sesuai roket yang diluncurkan. Kedua, Anda juga harus memastikan `statusEngine` roket yang diluncurkan berubah menjadi “active”.

Cukup untuk penjelasanya, berikut adalah contoh pengujian untuk fungsi `launchAllRockets` dan `launchRocketByQueue`.

```js
// RocketLauncher.test.js

const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');
 
describe('A RocketLauncher', () => {
 it('should launch all rockets', () => {
   // Arrange
   const nasaRocket = new Rocket('Nasa');
   const spaceXRocket = new Rocket('SpaceX');
   const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);
 
   // Action
   rocketLauncher.launchAllRockets();
 
   // Assert
   expect(nasaRocket.engineStatus).toEqual('active');
   expect(spaceXRocket.engineStatus).toEqual('active');
   expect(rocketLauncher.rockets.length).toEqual(0);
 });
 
 it('should launch only one rocket by queue', () => {
   // Arrange
   const nasaRocket = new Rocket('Nasa');
   const spaceXRocket = new Rocket('SpaceX');
   const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);
 
   // Action
   rocketLauncher.launchRocketByQueue();
 
   // Assert
   expect(nasaRocket.engineStatus).toEqual('active');
   expect(spaceXRocket.engineStatus).toEqual('inactive');
   expect(rocketLauncher.rockets.length).toEqual(1);
 });
});
 
/** hasil uji
 
 PASS  ./RocketLauncher.test.js
  A RocketLauncher
    ✓ should launch all rockets (8 ms)
    ✓ should launch only one rocket by queue (3 ms)
*/
```

Dari kode testing untuk menguji peluncuran roket di atas, kita tak hanya menguji instance dari `RocketLauncher` saja, tetapi juga harus memastikan objek lain yang terlibat dalam fitur tersebut. Tujuannya untuk memastikan semua integrasi antar objek bekerja dengan semestinya.

Oh ya! Pada tahap integration testing, biasanya test case terdiri dari 3 bagian, yakni *Arrange, Action*, dan *Assert* (mirip seperti Given, When, Then).

- **Arrange** : merupakan bagian di mana kita mengumpulkan seluruh kebutuhan untuk melakukan pengujian sesuai skenario. Contohnya membuat objek dependencies, membuat objek konteks yang bakal diuji, ataupun persiapan lainnya. Contoh pada kode di atas adalah kita membuat instance `Rocket` dan memasukkannya ke instance `RocketLauncher` agar roket dapat diluncurkan.

- **Action** : merupakan bagian aksi dari sistem yang diuji ([System Under Test [SUT]](https://en.wikipedia.org/wiki/System_under_test)). Biasanya bagian ini hanya terdiri dari satu baris saja. Contohnya adalah memanggil fungsi `launchAllRocket`.

- **Assert** : merupakan bagian dalam menguji hasil yang diharapkan setelah aksi dilakukan. Contohnya, mengecek apakah jumlah `rockets` dalam `RocketLauncher` sudah berkurang dan juga mengecek apakah `engineStatus` bernilai “active”.

### **Test Double**

Semakin kompleks aplikasi yang dibuat, maka semakin kompleks pula *codebase* yang ada di dalamnya. Ketika sebuah objek yang hendak kita uji memiliki ketergantungan terhadap objek lain yang rumit untuk dibuat, saat itulah pengujian terhadap kode tersebut sulit untuk dilakukan. Pasalnya, untuk melakukan pengujian kita perlu menyiapkan dulu objek yang “rumit” itu sebagai *dependencies*-nya.

Lantas bagaimana solusinya? Alih-alih menggunakan objek asli sebagai dependencies saat proses pengujian, sebenarnya Anda dapat menggunakan objek *“palsu”* dengan implementasi yang lebih sederhana. Istilah ini dinamakan dengan Test Double.


![202108091617216e42ca2fae57d981cfbfedc3e59d24bc](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ba4471a9-f0f6-4ce3-8ba3-1e6a19eb671a)

Test Doubles merupakan istilah yang digunakan untuk menggantikan implementasi yang dibutuhkan dalam menjalankan pengujian pada sistem yang diuji. Karena implementasinya dipalsukan, maka kita juga bisa menguji beberapa behavior yang mungkin terjadi (seperti eror atau behavior lainnya) secara mudah. Tujuannya tidak lain untuk memenuhi skenario pengujian.

Ada beberapa macam-macam Test Double dalam praktiknya, yakni `dummy`, `stub`, `mock`, dan `spy`. Untuk memudahkan pemahaman, kita contohkan kembali dalam sistem peluncuran roket.

Anggaplah sistem peluncuran roket kita sudah dikembangkan dan sekarang ia memiliki fungsi tambahan yaitu memperbaiki roket yang ada pada properti `this.rockets`. Untuk memperbaikinya, `RocketLauncher` membutuhkan instance `RocketRepairKit` yang memiliki fungsi repair. Jadi, sekarang `RocketLauncher` memiliki dependencies terhadap instance `RocketRepairKit`.

```js
// RocketLauncher.js

class RocketLauncher {
  constructor(repairKit, rockets = []) {
    this.repairKit = repairKit;
    this.rockets = rockets;
  }
 
  launchAllRockets() {
    this.rockets.forEach((rocket) => {
      rocket.engineStatus = 'active';
    });
 
    this.rockets = [];
  }
 
  launchRocketByQueue() {
    const rocket = this.rockets.shift();
    rocket.engineStatus = 'active';
  }
 
  async repairAllRockets() {
    let failedRepairCount = 0;
  
    for(const rocket of this.rockets) {
      try {
        await this.repairKit.repair(rocket);
      } catch {
        failedRepairCount++;
      }
    }
 
    if(!failedRepairCount) {
      return 'all rocket repaired!';
    }
 
    return `there was ${failedRepairCount} of ${this.rockets.length} rocket fail to repair!`;
  }
}
 
module.exports = RocketLauncher;
```

```js
// RocketRepairKit.js

class RocketRepairKit  {
  /**
   * Anggap proses membuat instance RocketRepairKit itu rumit
   * Karena ia membutuhkan banyak dependencies.
   */
  constructor(objA, objB, objC) {
    this.objA = objA;
    this.objB = objB;
    this.objC = objC;
  }
 
  repair(rocket) {
    /**
    * Anggap ini proses yang diambil dari suatu service external.
    * sehingga prosesnya membutuhkan waktu dan rentan gagal.
    */
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(`${rocket.name} repaired!`)
      }, 500);
    });
  }
}
 
module.exports = RocketRepairKit;
```

Seperti yang Anda lihat pada contoh kode di atas. Anggap pembuatan *instance* `RocketRepairKit` ini mahal dan rumit. Sehingga untuk menguji sistem yang membutuhkan instance `RocketRepairKit` menjadi sulit. Untuk memudahkan dalam menguji `RocketLauncher`, kita akan gunakan Test Double.

#### **Dummy**

Test Double pertama yang akan kita gunakan adalah *dummy*. Dummy adalah teknik di mana kita hanya memberikan sembarang nilai pada sebuah parameter (fungsi atau constructor). Hal tersebut karena parameter tersebut butuh untuk diisi nilainya, meskipun sebenarnya nilainya tidak digunakan sama sekali.

Contohnya pada sistem peluncuran roket, teknik dummy digunakan untuk mengisi parameter `repairKit` dalam pembuatan instance `RocketLauncher` di skenario pengujian `launchAllRockets` dan `launchRocketByQueue`. Karena `repairKit` sama sekali tidak dibutuhkan ketika menjalankan proses pada kedua fungsi tersebut.

```js
describe('A RocketLauncher', () => {
 
  // dummy example
  it('should launch all rockets', () => {
    // Arrange
    const nasaRocket = new Rocket('Nasa');
    const spaceXRocket = new Rocket('SpaceX');
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);
 
    // Action
    rocketLauncher.launchAllRockets();
 
   // Assert
   expect(nasaRocket.engineStatus).toEqual('active');
   expect(spaceXRocket.engineStatus).toEqual('active');
   expect(rocketLauncher.rockets.length).toEqual(0);
  });
 
  it('should launch only one rocket by queue', () => {
    // Arrange
    const nasaRocket = new Rocket('Nasa');
    const spaceXRocket = new Rocket('SpaceX');
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);
 
    // Action
    rocketLauncher.launchRocketByQueue();
 
    // Assert
    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('inactive');
    expect(rocketLauncher.rockets.length).toEqual(1);
  });
});
```

Fokus terhadap kode yang diberi tanda tebal. Seperti yang Anda lihat, ketika membuat *instance* `RocketLauncher`, parameter `repairKit` hanya diberikan objek sembarang saja. Objek tersebut dibutuhkan hadir untuk mengisi parameter, namun sebenarnya tidak digunakan untuk apa-apa.

#### **Stub**

Test Double yang kedua adalah *stub*. Stub merupakan teknik dalam mengubah *behavior* objek ( palsu atau asli) agar hasilnya terprediksi guna memenuhi skenario pengujian. Contohnya teknik stub dapat digunakan ketika Anda hendak menguji fungsi `repairAllRockets`, tetapi dengan harapan fungsi `RocketRepairKit.repair` membangkitkan eror. Karena sulit untuk membuat fungsi repair membangkitkan eror pada *behavior* aslinya, maka Anda bisa men-*stub* fungsi `repair` agar behavior-nya sesuai dengan yang dikehendaki.

```js
const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');
const RocketRepairKit = require('./RocketRepairKit');
 
describe('A RocketLauncher', () => {
 
 // ... skenario pengujian sebelumnya
 
 // stub example
  it('should return correct result when repair kit cannot repair the rocket', async () => {
   // Arrange
   /** stub! Kita butuh mengubah implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji.
    * Namun kita tidak menguji apa pun terkait fungsi yang diubah. */
   const fakeRocketRepairKit = {
     repair: () => Promise.reject('failed to repair the rocket'),
   };
 
   const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}]);
 
   // Action
   const result = await rocketLauncher.repairAllRockets();
 
   // Assert
   expect(result).toEqual('there was 1 of 1 rocket fail to repair!');
 });
});
```

Seperti yang Anda lihat di atas, kita memasukkan implementasi fungsi repair pada objek `fakeRocketRepairKit` agar menghasilkan *behavior* eror. Dengan begitu kita bisa menguji fungsi `repairAllRockets` dengan skenario pengujian negatif (diharapkan untuk eror).

#### **Mock**

Test Double yang ketiga adalah mock. Mock serupa dengan stub, di mana dengan mock kita bisa mengubah implementasi dari sebuah objek agar memiliki *behavior* yang terprediksi. Bedanya, ketika Anda melakukan mock, selain memastikan hasil dari sistem yang diuji sesuai, Anda juga memiliki ekspektasi terhadap implementasi objek yang diubah diperlakukan.

Contoh, mock bisa diterapkan ketika Anda menguji fungsi `repairAllRockets`, kemudian Anda ingin memastikan apakah fungsi `RocketRepairKit.repair` benar-benar dipanggil ketika pengujian dilakukan.

```js
const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');
const RocketRepairKit = require('./RocketRepairKit');
 
describe('A RocketLauncher', () => {
 
 // ... skenario pengujian sebelumnya
 
 // mock example
 it('should repair some repairable rocket when repair kit cannot repair some the rocket', async () => {
   // Arrange
   const repairableRocket = new Rocket('repairableRocket');
   const unrepairableRocket = new Rocket('unrepairableRocket');
   /** mock! Kita butuh mengubah implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji.
   * Dan kita butuh untuk menguji apakah fungsi yang dijalankan/diperlakukan. */
   const fakeRocketRepairKit = {
     repair: jest.fn().mockImplementation((rocket) => {
       if (rocket.name === 'repairableRocket') {
         return Promise.resolve();
       }
       return Promise.reject('failed to repair the rocket');
     }),
   }
 
   const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [repairableRocket, unrepairableRocket]);
 
   // Action
   const result = await rocketLauncher.repairAllRockets();
 
   // Assert
   expect(result).toEqual(`there was 1 of 2 rocket fail to repair!`);
   /**
    * memastikan bahwa fungsi repair terpanggil
    */
   expect(fakeRocketRepairKit.repair).toBeCalled();
   expect(fakeRocketRepairKit.repair).toBeCalledWith(repairableRocket);
 });
});
```

Dalam Jest, untuk melakukan *mock* terhadap implementasi fungsi gunakan method **jest.fn().mockImplementation()**.

Seperti yang Anda lihat pada contoh pengujian menggunakan mock di atas. Pada bagian Assert, selain menguji hasil dari `repairAllRockets`, kita juga memiliki ekspektasi terhadap fungsi repair, seperti harus dipanggil (`toBeCalled`) dan parameter yang digunakan pada pemanggilannya (`toBeCalledWith`).

#### **Spy**

Test Double terakhir adalah spy. Serupa dengan mock tetapi tidak serupa dengan stub. Melalui spy kita bisa melihat apakah sebuah fungsi dari objek yang menjadi dependencies terhadap sistem yang diuji benar-benar dipanggil dan diperlakukan dengan sesuai atau tidak. Yap, serupa dengan *mock* kan? Bedanya, spy tidak mengubah implementasi fungsinya sehingga behavior fungsi tersebut masih sama seperti aslinya. Sesuai namanya, ia hanya bisa “memata-matai” saja.

Berikut adalah contoh penerapan spy dalam menguji fungsi `repairAllRockets` ketika `RepairRocketKit.repair` berjalan sesuai dengan *behavior*-nya.

```js
const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');
const RocketRepairKit = require('./RocketRepairKit');
 
describe('A RocketLauncher', () => {
 
 // ... skenario pengujian sebelumnya
 
 // spy example
 it('should repair all the rockets with repair kit correctly', async () => {
   // Arrange
   const nasaRocket = new Rocket('Nasa');
   const spaceXRocket = new Rocket('SpaceX');
   // Menggunakan objek real
   const rocketRepairKit = new RocketRepairKit({}, {}, {});
   /** spy! Memata-matai fungsi repair pada objek RocketRepairKit
    * Tujuannya, untuk memastikan fungsi repair dijalankan */
   const spyRepair = jest.spyOn(rocketRepairKit, 'repair');
   const rocketLauncher = new RocketLauncher(rocketRepairKit, [nasaRocket, spaceXRocket]);
 
   // Action
   const result = await rocketLauncher.repairAllRockets();
 
   // Assert
   expect(spyRepair).toBeCalledTimes(2);
   expect(spyRepair).toBeCalledWith(nasaRocket);
   expect(spyRepair).toBeCalledWith(spaceXRocket);
   expect(result).toEqual('all rocket repaired!');
 });
});
```

#### **Kesimpulan Test double**

Setelah mengetahui perbedaan macam-macam Test Double yang ada, semoga Anda bisa mengimplementasi Test Double dengan bijak sesuai kebutuhan. Mungkin mock terlihat lebih mudah diterapkan karena memiliki sifat stub dan spy. Namun ingat, *don’t mock everything!* 

Ketika Anda hendak menggunakan mock, coba dipikirkan lagi. Apakah objek yang kita mock tidak cukup untuk di-spy saja? Atau perlukah kita memastikan fungsi yang di-mock dipanggil? Jangan-jangan cukup di-stub saja. Cobalah untuk menghindari mock dengan menggunakan spy atau stub.

Satu hal lagi yang perlu Anda ingat, sebelum membuat objek palsu sebagai dependency sistem yang akan diuji, pastikan dulu apakah memang perlu untuk dibuat objek palsu? Selama objek dependency masih bisa dibuat dengan mudah dan tidak bergantung terhadap teknologi luar (seperti database atau network), maka utamakan menggunakan objek asli dibandingkan dengan *fake*.



Perhatian:
Berikut adalah source code lengkap contoh Test Double menggunakan framework Jest: [test-double-example](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/205-test-double-example). Anda bisa mencobanya dengan menyalin kodenya dan menjalankan pengujian menggunakan perintah **npm run test**.

### **Menerapkan Automation Testing dalam Membangun Program Perhitungan Bangun Dua Dimensi**

Waktunya latihan! Di praktik kali ini, kita akan mengembangkan kembali proyek **math-api** yang sebelumnya sudah dibuat. Jadi, pastikan Anda sudah melengkapi penulisan kode dan pengujian untuk fitur **MathBasic**. Jika Anda kesulitan dalam mengerjakannya, silakan lihat solusi yang diberikan oleh kami pada repository: [math-basic](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/202-math-basic).

Saat ini kita akan mengembangkan proyek math-api untuk menghitung luas dan keliling bangun datar (Persegi dan Segitiga). Nah, untuk membuat fitur perhitungan tersebut, ketahuilah terlebih dahulu seperti apa formula (rumus) yang ada dibalik perhitungannya.

| 2D Figure (Bangun Datar) | Perimeter (Keliling)      | Area (Luas)               |
|--------------------------|---------------------------|---------------------------|
| Rectangle (Persegi Panjang)| 2 * (length + width)      | length * width            |
| Triangle (Segitiga)       | (sideA + sideB) + base    | (base * height) / 2       |


Dari perhitungan tersebut, kita akan membuat empat buah fungsi baru yakni `calculateRectanglePerimeter`, `calculateRectangleArea`, `calculateTrianglePerimeter`, dan `calculateTriangleArea`. Fungsi-fungsi tersebut akan kita bungkus dalam sebuah objek dari class bernama `FigureCalculator`.

Rumus di atas terdiri dari perhitungan-perhitungan dasar matematika yang sudah pernah kita buat sebelumnya. Contohnya, dalam menghitung keliling persegi panjang terdapat pertambahan dan perkalian, di mana kita bisa memanfaatkan fungsi `MathBasic.add` dan `MathBasic.multiply`.

Sehingga, kita putuskan untuk menggunakan MathBasic dalam melakukan perhitungan dasarnya. Terlebih, MathBasic sudah teruji fungsionalitasnya. Jadi, `FigureCalculator` memiliki dependency terhadap `MathBasic`.

Apakah sudah jelas? Yuk langsung saja kita buat skenario pengujiannya.

Skenario Pengujian:

    Sebuah objek FigureCalculator

      - Harus memiliki fungsi calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, dan calculateTriangleArea.
      - Sebuah fungsi calculateRectanglePerimeter
        Harus mengembalikan error ketika tidak diberikan dua parameter
        Harus mengembalikan error ketika diberikan parameter selain number
        Harus mengembalikan nilai yang tepat berdasarkan rumus keliling persegi
      - ebuah fungsi calculateRectangleArea
        Harus mengembalikan error ketika tidak diberikan dua parameter
        Harus mengembalikan error ketika diberikan parameter selain number
        Harus mengembalikan nilai yang tepat berdasarkan rumus luas persegi
      - Sebuah fungsi calculateTrianglePerimeter
        Harus mengembalikan error ketika tidak diberikan 3 parameter
        Harus mengembalikan error ketika diberikan parameter selain number
        Harus mengembalikan nilai yang tepat berdasarkan rumus keliling segitiga
      - Sebuah fungsi calculateTriangleArea
        Harus mengembalikan error ketika tidak diberikan 2 parameter
        Harus mengembalikan error ketika diberikan parameter selain number
        Harus mengembalikan nilai yang tepat berdasarkan rumus luas segitiga

Cukup jelas untuk skenario ujinya? Yuk kita ngoding lagi.

Buka kembali proyek math-api dan buat dua berkas JavaScript baru bernama **FigureCalculator.js** dan **FigureCalculator.test.js**.

![2021080320010500ede0725ef0d603f09bbe3a3525e80b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/cac6ee56-739f-4595-8620-3d4380b27a6a)

Mari kita tuliskan skenario pengujian yang pertama. Silakan buka berkas **FigureCalculator.test.js** dan tulis kode pengujian berikut:

```js
// FigureCalculator.test.js

const FigureCalculator = require('./FigureCalculator');
 
describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});
 
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
});
```

Karena `FigureCalculator` memiliki dependency terhadap objek lain, baiknya ia dibuat melalui sebuah class. Dengan begitu, lebih mudah untuk memberikan dependency melalui constructor dan menyimpannya pada properti class. Perhatikan juga bahwa di *test case* ini kita menggunakan teknik dummy dalam memberikan dependency BasicMath.

Simpan perubahan pada berkas testing. Kemudian jalankan pengujiannya dan pastikan hasil pengujiannya merah.

![20210803200250873552776c887545a2d7b761ed69e723](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a7106e91-752e-4685-9ba9-8a4c21168c0c)

Sekarang, kita buat pengujiannya menjadi hijau. Silakan buka berkas FigureCalculator.js dan penuhi pengujiannya dengan membuat class **FigureCalculator**.

```js
// FigureCalculator.js

class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }
 
  calculateRectanglePerimeter() { }
  calculateRectangleArea() { }
  calculateTrianglePerimeter() { }
  calculateTriangleArea() { }
}
 
module.exports = FigureCalculator;
```

Simpan berkas tersebut dan pengujian kembali hijau.


![2021080320034691c0ca28a712792fe1ac8ba3e13e5efb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/1fea8453-c2e9-4f1c-b593-b5edc34a3c41)

Skenario Pengujian:

    Sebuah objek FigureCalculator

      Harus memiliki fungsi calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, dan calculateTriangleArea.

      Sebuah fungsi calculateRectanglePerimeter

        Harus mengembalikan eror ketika tidak diberikan dua parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus keliling persegi

      Sebuah fungsi calculateRectangleArea

        Harus mengembalikan eror ketika tidak diberikan dua parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus luas persegi

      Sebuah fungsi calculateTrianglePerimeter

        Harus mengembalikan eror ketika tidak diberikan 3 parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus keliling segitiga

      Sebuah fungsi calculateTriangleArea

        Harus mengembalikan eror ketika tidak diberikan 2 parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus luas segitiga

Sepertinya kode yang dituliskan sudah cukup baik sehingga tidak perlu ada refactor di sini. Maka dari itu, kita lanjutkan dengan menuliskan test case selanjutnya.

Kembali ke berkas pengujian dan tulis pengujian berikut:

```js
// FigureCalculator.test.js

const FigureCalculator = require('./FigureCalculator');
 
describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});
 
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
 
  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });
  });
});
```

Simpan perubahan dan pengujian akan kembali merah.

![20210803200648cedc98d21b87628f50d65a4499e1a251](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8d8d0027-2e6b-4f3c-87eb-06d1d1a00828)

Buat pengujian kembali hijau dengan kode berikut:

```js
// FigureCalculator.js

class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }
 
  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
  }
  calculateRectangleArea() { }
  calculateTrianglePerimeter() { }
  calculateTriangleArea() { }
}
 
module.exports = FigureCalculator;
```

Good! Sekarang pengujian kembali hijau.

![202108032008382de9f27269aed65ef9e988056ec02db3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f05899f2-c7c4-41c1-a526-45fb6b3be410)

Skenario Pengujian:

    Sebuah objek FigureCalculator

      Harus memiliki fungsi calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, dan calculateTriangleArea.

      Sebuah fungsi calculateRectanglePerimeter

        Harus mengembalikan eror ketika tidak diberikan dua parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus keliling persegi

      Sebuah fungsi calculateRectangleArea

        Harus mengembalikan eror ketika tidak diberikan dua parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus luas persegi

      Sebuah fungsi calculateTrianglePerimeter

        Harus mengembalikan eror ketika tidak diberikan 3 parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus keliling segitiga

      Sebuah fungsi calculateTriangleArea

        Harus mengembalikan eror ketika tidak diberikan 2 parameter

        Harus mengembalikan eror ketika diberikan parameter selain number

        Harus mengembalikan nilai yang tepat berdasarkan rumus luas segitiga

Mari kita tulis test case selanjutnya. Buka kembali berkas pengujian dan tulis kode pengujian berikut:

```js
// FigureCalculator.test.js

const FigureCalculator = require('./FigureCalculator');
 
 
describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});
 
 
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
 
 
  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
 
 
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });
 
 
    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
    });
  });
});
```

Simpan berkas pengujian dan hasilnya akan kembali merah.

![202108032010338b9cac99f06ec231474a5ec0f9e02fae](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/693c565f-b685-4440-96a6-30da1904fca1)

Buat pengujian hijau kembali dengan menuliskan kode berikut:

```js
// FigureCalculator.js

class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }
 
 
  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
 
    const [length, width] = args;
 
 
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
  }
  calculateRectangleArea() { }
  calculateTrianglePerimeter() { }
  calculateTriangleArea() { }
}
 
 
module.exports = FigureCalculator;
```

Simpan berkas FigureCalculator.js dan pengujian akan kembali hijau.


![20210803201117189107e2edbe3b4f429198cb880f29cb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/262e851b-359e-4431-a350-b874c49db5cc)


Skenario Pengujian:

    Sebuah objek FigureCalculator

        Harus memiliki fungsi calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, dan calculateTriangleArea.

        Sebuah fungsi calculateRectanglePerimeter

            Harus mengembalikan eror ketika tidak diberikan dua parameter

            Harus mengembalikan eror ketika diberikan parameter selain number

            Harus mengembalikan nilai yang tepat berdasarkan rumus keliling persegi

        Sebuah fungsi calculateRectangleArea

            Harus mengembalikan eror ketika tidak diberikan dua parameter

            Harus mengembalikan eror ketika diberikan parameter selain number

            Harus mengembalikan nilai yang tepat berdasarkan rumus luas persegi

        Sebuah fungsi calculateTrianglePerimeter

            Harus mengembalikan eror ketika tidak diberikan 3 parameter

            Harus mengembalikan eror ketika diberikan parameter selain number

            Harus mengembalikan nilai yang tepat berdasarkan rumus keliling segitiga

        Sebuah fungsi calculateTriangleArea

            Harus mengembalikan eror ketika tidak diberikan 2 parameter

            Harus mengembalikan eror ketika diberikan parameter selain number

            Harus mengembalikan nilai yang tepat berdasarkan rumus luas segitiga

Kita menuju test case terakhir untuk fungsi calculateRectanglePerimeter. Setelah seluruh test case negatif sudah dituliskan, saatnya kita menguji fungsionalitas asli dari fungsi tersebut. Silakan tulis test case berikut:

```js
// FigureCalculator.test.js

const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');
 
describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});
 
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
 
  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
 
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });
 
    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});
 
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
    });
 
    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);
      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);
      // Assert
      expect(result).toEqual(60); // 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
    });
  });
});
```

Lihat skenario pengujian yang tertulis di atas. Di skenario pengujian kali ini, kita tidak menggunakan dummy untuk `MathBasic`. Karena untuk menguji test case kali ini, kita membutuhkan behavior asli dari `MathBasic`.

Untuk memastikan MathBasic diperlakukan dengan benar, kita mata-matai beberapa fungsi yang digunakan. Nantinya, kita cek fungsi-fungsi tersebut apakah ia digunakan dengan benar atau tidak.

Simpan perubahan berkas pengujian dan pengujiannya akan menjadi merah.

![20210803201341b01568aa54dc7987df6946853f4c48e8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/84c14b06-dfc0-4aa9-80e4-67cb72c269c9)

Kita buat pengujian kembali hijau dengan mengembalikan fungsi `calculateRectanglePerimeter` dengan kalkulasi rumus keliling persegi panjang dengan benar menggunakan `this._mathBasic`.

```js
// FigureCalculator.js

class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }
 
  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
 
    const [length, width] = args;
 
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
 
    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }
  calculateRectangleArea() { }
  calculateTrianglePerimeter() { }
  calculateTriangleArea() { }
}
 
module.exports = FigureCalculator;
```

Simpan perubahan berkas tersebut dan pengujian akan kembali hijau!

![20210803201538c9a72c9dd217d63bd50abbedf2019dfe](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b73aa13c-f005-47a0-aecf-a8e204a4b287)

Skenario Pengujian:

    Sebuah objek FigureCalculator

        Harus memiliki fungsi calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, dan calculateTriangleArea.

        Sebuah fungsi calculateRectanglePerimeter

          Harus mengembalikan error ketika tidak diberikan dua parameter

          Harus mengembalikan error ketika diberikan parameter selain number

          Harus mengembalikan nilai yang tepat berdasarkan rumus keliling persegi

        Sebuah fungsi calculateRectangleArea

          Harus mengembalikan error ketika tidak diberikan dua parameter

          Harus mengembalikan error ketika diberikan parameter selain number

          Harus mengembalikan nilai yang tepat berdasarkan rumus luas persegi

        Sebuah fungsi calculateTrianglePerimeter

          Harus mengembalikan error ketika tidak diberikan 3 parameter

          Harus mengembalikan error ketika diberikan parameter selain number

          Harus mengembalikan nilai yang tepat berdasarkan rumus keliling segitiga

        Sebuah fungsi calculateTriangleArea

          Harus mengembalikan error ketika tidak diberikan 2 parameter

          Harus mengembalikan error ketika diberikan parameter selain number

          Harus mengembalikan nilai yang tepat berdasarkan rumus luas segitiga

Pengujian fungsi calculateRectanglePerimeter selesai!

Ada tiga fungsi lagi yang belum kita buat dan uji. Seperti biasa, silakan Anda lengkapi secara mandiri agar lebih terbiasa dengan TDD dan penggunaan Test Double. Setelah seluruh pengujiannya berhasil, jangan lupa untuk refactor kode yang dituliskan sebaik mungkin dan hindari duplikasi kode.

**Perhatian**:
Berikut adalah *source code* penerapan lengkap untuk fungsi [FigureCalculator](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/204-figure-calculator) beserta pengujiannya: figure-calculator. Sebelum melihat source code tersebut, alangkah baiknya Anda kerjakan dulu secara mandiri agar pengalaman TDD Anda semakin terasah.

### **Functional Test**

Pengujian tahap tertinggi adalah Functional Test atau sering dikenal juga sebagai End-to-End Test. Pengujian ini memastikan aplikasi berjalan mulus, sesuai harapan, dan tanpa *bugs* ketika digunakan oleh **end user** di platform. Ketika mengembangkan aplikasi Web, functional testing dijalankan pada browser dan menguji seluruh fungsi mulai dari UI, alur, hingga aksesibilitas aplikasi. Functional test bertujuan untuk memastikan seluruh aplikasi dari hulu ke hilir harus berjalan normal.

Pengembangan aplikasi Front-End seperti Web dan Mobile memiliki antarmuka visual yang digunakan oleh end user. Bagaimana dengan pengembangan API? Pengembangan aplikasi seperti API memang tidak memiliki visual untuk diuji, tetapi bukan berarti API tidak memiliki end user. End user dari API adalah “seorang” yang mengonsumsi API tersebut. Alih-alih pelanggan bisnis asli, biasanya ia adalah sebuah aplikasi client (Front-End) yang hendak mengambil data kemudian diolah menjadi bentuk visual.

Functional test pada API harus dilakukan layaknya aplikasi client mengonsumsi API tersebut. Untuk REST API, Functional Test dijalankan melalui protokol HTTP dengan membuat request pada sebuah *resource* dan menguji response yang dihasilkan. Contoh:

| Endpoint             | Deskripsi                                                    |
|----------------------|--------------------------------------------------------------|
| GET /hello           | Selalu mengembalikan "Hello World".                          |
| GET /hello/{name}    | Mengembalikan "Hello, {name}".                                |
| GET /weather         | Mengembalikan cuaca saat ini di lokasi IP Anda.              |

Sebagai seorang Back-End Developer, kami yakin Anda sudah familier dengan aplikasi Postman. Aplikasi tersebut sering Anda gunakan ketika hendak menguji fungsionalitas REST API. Ketika menggunakan Postman untuk menguji sebuah REST API baik secara manual maupun otomatis, sebenarnya Anda sudah melakukan sebuah Functional Testing.

Postman bukanlah satu-satunya cara dalam menguji fungsionalitas REST API. Jika mengembangkan REST API menggunakan Hapi, Anda bisa melakukan functional testing menggunakan kode JavaScript secara mudah tanpa perlu library atau tools tambahan.

HTTP server yang dibangun menggunakan Hapi memiliki kemampuan untuk diuji route-nya tanpa harus benar-benar menjalankan server tersebut. Dengan begitu, pengujian dapat dilakukan dengan cepat dan tidak terintervensi oleh kompleksitasnya protokol TCP. 

Penasaran? Simak materi selanjutnya.

#### **Hapi Server Test**

Pengujian pada server Hapi dapat dilakukan melalui fungsi server.inject. Contohnya sebagai berikut:

```js
// createServer.js

const Hapi = require('@hapi/hapi');
 
const createServer = () => {
 const server = Hapi.server({
   host: 'localhost',
   port: 5000,
 });
 
 server.route([
   {
     method: 'GET',
     path: '/hello',
     handler: () => {
       return { value: 'Hello World' };
     },
   },
   {
     method: 'GET',
     path: '/hello/{name}',
     handler: (request) => {
       const { name } = request.params;
       return { value: `Hello ${name}`};
     },
   },
 ]);
 
 return server;
};
 
module.exports = createServer;
```

```js
// createServer.test.js

const createServer = require('./createServer');
 
describe('Hapi Server', () => {
 it('should response 200 with payload value "Hello World" when GET /hello', async () => {
   // Arrange
   const server = createServer();
 
   // Action
   const response = await server.inject({
     method: 'GET',
     url: '/hello',
   });
 
   // Assert
   const responseJson = JSON.parse(response.payload);
   expect(response.statusCode).toEqual(200);
   expect(responseJson.value).toEqual('Hello World');
 });
 
 it('should response 200 with payload value "Hello john" when GET /hello/john', async () => {
   // Arrange
   const server = createServer();
 
   // Action
   const response = await server.inject({
     method: 'GET',
     url: '/hello/john',
   });
 
   // Assert
   const responseJson = JSON.parse(response.payload);
   expect(response.statusCode).toEqual(200);
   expect(responseJson.value).toEqual('Hello john');
 });
});
 
/** 
 output:
 PASS  src/createServer.test.js
  Hapi Server
    ✓ should response 200 with payload value "Hello World" when GET /hello (96 ms)
    ✓ should response 200 with payload value "Hello john" when GET /hello/john (12 ms)
*/
```

Berkas pertama adalah **createServer.js**, pada berkas tersebut Anda bisa melihat bahwa kita membuat Hapi server yang memiliki dua route. Route pertama **GET /hello** yang selalu mengembalikan “Hello World”, dan yang kedua **GET /hello/{name}** yang mengembalikan “Hello” diikuti dengan nama yang diberikan. Pada berkas ini, kita sama sekali tidak menjalankan Hapi server, melainkan hanya membuatnya saja.

Beranjak ke berkas pengujian **createServer.test.js**, di dalam berkas ini kita menuliskan pengujian untuk menguji route dari server hapi yang kita buat. Di sini kita menggunakan Jest untuk menjalankan pengujiannya. Pada masing-masing pengujian, Anda bisa lihat bahwa pengujian route dilakukan menggunakan fungsi `server.inject`. 

Melalui fungsi `server.inject` kita bisa membuat sebuah HTTP request palsu yang biasanya digunakan untuk proses pengujian terhadap HTTP server. Proses inject akan menghasilkan response sesuai berdasarkan [inject options](https://hapi.dev/module/shot/api/?v=5.0.5#await-shotinjectdispatchfunc-options) yang diberikan.

Perlu diketahui juga bahwa fungsi `server.inject` berjalan secara asynchronous. Itulah mengapa fungsi test case dijalankan secara `async` agar kita dapat menggunakan `await` ketika memanggil fungsi `inject`.

**Catatan**:
Berikut adalah source code lengkap contoh penerapan functional testing pada Hapi server: [hapi-test-example](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/206-hapi-test-example).

### **Menerapkan Automation Testing dalam Membangun Math API**

Saatnya latihan! Di latihan sebelumnya, Anda sudah mengembangkan math-api dengan menambahkan fungsionalitas baru yaitu menghitung bangun datar untuk persegi panjang dan segitiga. Jika ada kesulitan saat proses pengerjaan, silakan lihat solusi dari kami yang bisa diakses di repository: [figure-calculator](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/204-figure-calculator).

Math API tidak bisa disebut API bila tidak ada *interface* untuk mengaksesnya. Jadi, di latihan kali ini kita akan menambahkan HTTP server (menggunakan Hapi) agar program perhitungan matematika yang kita buat dapat diakses oleh *end user*.

Seperti biasa, kita akan menerapkan TDD dalam pembuatan HTTP server. Tujuannya untuk menjaga fungsionalitas HTTP server bila terjadi perubahan. Untuk itu mari kita tentukan desain dari endpoint.

| Fungsi                   | Endpoint                               |
|--------------------------|----------------------------------------|
| add (pertambahan)        | GET /add/{a}/{b}                       |
| subtract (pengurangan)   | GET /subtract/{a}/{b}                  |
| multiply (perkalian)     | GET /multiply/{a}/{b}                  |
| divide (pembagian)       | GET /divide/{a}/{b}                    |
| rectangle perimeter      | GET /rectangle/perimeter/{length}/{width}|
| rectangle area           | GET /rectangle/area/{length}/{width}   |
| triangle perimeter       | GET /triangle/perimeter/{sideA}/{sideB}/{base}|
| triangle area            | GET /triangle/area/{base}/{height}     |


Seperti apa skenario yang akan kita buat kali ini? Untuk mempersingkat proses penyampaian, kita akan fokus terhadap behavior utama pada tiap endpoint-nya. Jadi, berikut adalah skenario pengujiannya.


Skenario Pengujian:

    Sebuah objek HTTP Server

        Ketika GET /add

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil pertambahan a dan b secara tepat

        Ketika GET /subtract

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil pengurangan a dan b secara tepat

        Ketika GET /multiply

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perkalian a dan b secara tepat

        Ketika GET /divide

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil pembagian a dan b secara tepat

        Ketika GET /rectangle/perimeter

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling persegi panjang

        Ketika GET /rectangle/area

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas persegi panjang

        Ketika GET /triangle/perimeter

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling segitiga

        Ketika GET /triangle/area

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas segitiga

Yuk, langsung saja kita mulai.

Silakan buka kembali proyek **math-api** dan pasang package **@hapi/hapi** dengan perintah:

```
npm install @hapi/hapi
```

Pastikan terdapat package **@hapi/hapi** pada package.json.

Selanjutnya, tiga berkas baru yaitu `app.js`, `createServer.js`, dan `createServer.test.js`.

![202108032031370508ca46d4d1ee8cc305be100144085b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/aa7bb431-e699-40bd-8662-efa63384417a)

Berkas `app.js` digunakan untuk menjalankan HTTP server yang hendak kita buat. Berkas `createServer.js` dan `createServer.test.js` digunakan untuk membuat HTTP server menggunakan Hapi beserta kode pengujiannya.

Mari kita mulai dengan menuliskan skenario pengujian pertama. Silakan buka berkas `createServer.test.js` dan tulis kode pengujian berikut:

```js
// createServer.test.js

const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
 
describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });
 
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });
});
```

Skenario di atas kita menggunakan Test Double yakni spy untuk memata-matai fungsi `MathBasic.add` benar-benar digunakan. 

Untuk memudahkan proses Test Double, ada satu hal yang perlu Anda ingat. Gunakan selalu teknik *dependency injection* (akan dibahas detail di modul selanjutnya) ketika sistem yang diuji memiliki ketergantungan terhadap objek lain. Ketergantungan tersebut tidak terikat erat (*tightly couple*) sehingga bisa diganti dengan objek lain (fake atau dummy) secara mudah. Itulah mengapa kita menerapkan pola de*pendency injection* pada fungsi `createServer`. Paham ya?

Simpan berkas pengujian tersebut dan hasil pengujian akan kembali merah.

![202108032035059ebb855048925eec4eabbaedbdb30719](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8efa80bd-f459-4aef-b49e-2909f32eba20)

Wajar jika hasilnya merah seperti gambar di atas karena kita sama sekali belum membuat fungsi `createServer` untuk membuat HTTP server. Jadi, mari kita buat pengujiannya hijau dengan menuliskan kode fungsi createServer pada berkas `createServer.js`.


```js
// createServer.js

const Hapi = require('@hapi/hapi');
 
const createServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });
 
  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.add(a, b);
        return { value };
      },
    },
  ]);
 
  return server;
};
 
module.exports = createServer;
```

Simpan kode tersebut dan coba lihat hasil pengujiannya.


![20210803203655d94077f5b3e7970b5c3c35d553038fb1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d5c876ac-cbb2-42b1-8deb-894743591925)

Ah ternyata masih gagal! Tapi tenang, jangan panik. Coba periksa kembali kira-kira di mana letak kesalahannya? Dengan menerapkan automation testing, kita bisa menggaransi bahwa kesalahan bukan berasal dari kode MathBasic karena kode di dalamnya sudah diuji dan sesuai harapan. Kesalahan pasti berada pada kode yang baru saja ditulis. Coba Anda telaah lagi di mana kira-kira letak kesalahannya.

Kesalahan terletak pada pemanggilan fungsi `mathBasic.add`. Di mana kita memberikan nilai yang bukan number pada parameter fungsinya. Loh kok bisa? Bukannya di skenario uji kita menetapkan nilai a = 10 dan b = 20? 

Memang benar. Namun, karena nilai tersebut diberikan melalui path parameter url, secara default ia akan bertipe data string. Sehingga ketika handler mendapatkan nilai a dan b, alih-alih mendapatkan nilai 10 dan 20, kita malah dapat nilai “10” dan “20”. Itulah mengapa fungsi mathBasic.add menghasilkan eror.

Oke kita perbaiki kesalahan tersebut dengan mengubah nilai a dan b menjadi number ketika pemanggilan fungsi `mathBasic.add`.

```js
// createServer.js

const Hapi = require('@hapi/hapi');
 
const createServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });
 
  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.add(Number(a), Number(b));
        return { value };
      },
    },
  ]);
 
  return server;
};
 
module.exports = createServer;
```

Simpan perubahannya sehingga pengujian berubah menjadi hijau.


![20210803203922c6636b6f70c4fed0be7c8f7c3313cb38](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/81cd45c3-2164-40c7-ada7-89149b6742aa)

Good! Dari kesalahan sebelumnya bisa dipetik kesimpulan bahwa dengan adanya pengujian, kita bisa mengetahui letak kesalahan lebih cepat dibandingkan tanpa adanya pengujian. Bila tidak ada pengujian mungkin kita akan menelaah kesalahan hingga ke MathBasic dan membutuhkan waktu lebih lama untuk mencari solusinya.

Oke skenario pertama selesai.

Skenario Pengujian:

    Sebuah objek HTTP Server

      Ketika GET /add

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil pertambahan a dan b secara tepat

      Ketika GET /subtract

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil pengurangan a dan b secara tepat

      Ketika GET /multiply

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil perkalian a dan b secara tepat

      Ketika GET /divide

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil pembagian a dan b secara tepat

      Ketika GET /rectangle/perimeter

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling persegi panjang

      Ketika GET /rectangle/area

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas persegi panjang

      Ketika GET /triangle/perimeter

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling segitiga

      Ketika GET /triangle/area

          Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas segitiga

Kita lanjutkan ke skenario kedua.

Silakan tulis pengujian berikut:

```js
// createServer.test.js

const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
 
describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });
 
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30); // a + b
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });
 
  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); // a - b
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });
});
```

Simpan perubahannya. Kemudian hasil pengujiannya akan kembali merah.

![2021080320411420f265a9ced45825ac9539bd08e70093](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/51520f88-bd00-424c-a2b3-1b9dfdc018c1)

Buat pengujian kembali hijau dengan menambahkan route GET /subtract/{a}/{b} beserta handler-nya pada HTTP server.

```js
// createServer.js

const Hapi = require('@hapi/hapi');
 
const createServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });
 
  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.add(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/subtract/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.subtract(Number(a), Number(b));
        return { value };
      },
    },
  ]);
 
  return server;
};
 
module.exports = createServer;
```

Simpan perubahan dan kini pengujiannya akan kembali hijau.

![20210803204236f55b1aaa7eea34bdf83f99123ca0a4e8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0e76232e-9231-469b-8c06-ed99af99b252)

Skenario Pengujian:

    Sebuah objek HTTP Server

        Ketika GET /add

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil pertambahan a dan b secara tepat

        Ketika GET /subtract

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil pengurangan a dan b secara tepat

        Ketika GET /multiply

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perkalian a dan b secara tepat

        Ketika GET /divide

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil pembagian a dan b secara tepat

        Ketika GET /rectangle/perimeter

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling persegi panjang

        Ketika GET /rectangle/area

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas persegi panjang

        Ketika GET /triangle/perimeter

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling segitiga

        Ketika GET /triangle/area

            Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas segitiga

Mudah kan?

Sekarang, silakan Anda lengkapi fungsionalitas HTTP server sesuai dengan skenario yang sudah ditetapkan. Pastikan prosesnya dilakukan secara TDD ya. Jangan lupa terapkan Test doubles agar proses perhitungannya dilakukan secara benar.



Perhatian:
Berikut adalah source code penerapan lengkap pembuatan HTTP server beserta pengujiannya: [math-api-hapi-test](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/207-math-api-hapi-test). Sebelum melihat source code tersebut, alangkah baiknya mengerjakan  secara mandiri terlebih dahulu supaya pengalaman TDD Anda semakin terasah.

### **Menjalankan Math API HTTP Server**

Selamat! Sejauh ini Anda sudah berhasil membuat program yang menerapkan TDD dengan sangat baik. Perkembangan yang sangat pesat, bukan? Dengan menerapkan TDD, kode yang Anda tulis sudah teruji dan terbebas dari *bugs*.

Meski kita sudah membuat dan menguji program dari hulu ke hilir, tetapi program tersebut sebenarnya belum dijalankan secara nyata. Tak afdal rasanya bila HTTP server belum kita jalankan. Untuk itu yuk langsung saja kita jalankan.

Silakan buka kembali proyek math-api. Kemudian pada berkas `app.js`, tuliskan kode berikut:

```js
// app.js

const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');
 
 
const start = async () => {
  const figureCalculator = new FigureCalculator(MathBasic);
  const server = createServer({
    mathBasic: MathBasic,
    figureCalculator,
  });
 
 
  await server.start();
  console.log(`Server start at ${server.info.uri}`);
};
 
 
start();
```

Supaya proses menjalankan programnya lebih mudah, buat npm runner baru pada `package.json` seperti ini:

```
"scripts": {
  "test": "jest --watchAll --coverage",
  "start": "node src/app.js"
},
```

Simpan seluruh perubahan dan jalankan program menggunakan perintah:

```
npm run start
```

Pastikan server berjalan dengan lancar.

![202108032046371fe576a23c214c8b04853e1b3028b28f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e6eaaf0a-2228-4eec-a252-29d3819cd2d7)

Setelah server berjalan, silakan akses servernya melalui browser dengan mencoba perhitungan penambahan, perkalian, dan lainnya. Seharusnya fungsionalitas aplikasi sudah dipastikan berjalan lancar dan sesuai ya.

Di tahap ini, Anda juga bisa melakukan functional test menggunakan Postman.

### **Saran dan Best Practice dalam Automation Testing**

Belajar menerapkan TDD tidaklah mudah. Anda akan bertemu dengan beragam masalah. Jangan lari dari masalah. Justru ketika masalah datang, di saat itulah Anda berpeluang mengasah dan memperdalam kemampuan TDD.

Ketika ada kode yang sulit dites, maka di saat itulah kita perlu mengevaluasi, seperti apakah ada bagian yang perlu diperbaiki? Apakah ada architecture yang perlu dipertimbangkan ulang? Apakah ada teknik yang bisa dipelajari?

Bila Anda dapat menerapkan TDD di produk yang sedang dibangun, maksimalkan peluang tersebut. Jangan sia-siakan. Bagaimana jika belum memperoleh kesempatan seperti itu? Buatlah aplikasi sederhana yang Anda bangun menggunakan teknik TDD secara disiplin. Seiring waktu tambahkan kemampuan dari aplikasi, sehingga Anda memperoleh beragam kasus yang menarik untuk di-TDD-kan.

Menurut kami, TDD adalah salah satu kemampuan penting yang layak dimiliki dan terus diasah oleh para engineer. Teruslah belajar. Semoga sukses di perjalanan Anda memberi dampak yang besar dan berarti bagi kehidupan ini.

Berikut ini beberapa buku (berbayar) dan resource yang kami rekomendasikan untuk Anda terus gali guna meningkatkan kemampuan dan mengetahui best practices dalam menerapkan automation testing dan TDD.

- [Test Driven Development](https://www.pearson.com/us/higher-education/program/Beck-Test-Driven-Development-By-Example/PGM206172.html): By Example. Buku karangan Kent Beck yang menjelaskan secara detail praktik TDD.

- [JavaScript Testing Best Practice](https://github.com/goldbergyoni/javascript-testing-best-practices). Kumpulan best practice dalam menuliskan kode pengujian otomatis di JavaScript.

- [Jest API](https://jestjs.io/docs/api). Semua API yang ada di Jest Framework.

- [Hapi Testing](https://hapi.dev/tutorials/testing/?lang=en_US). Penjelasan detail terkait pengujian otomatis pada aplikasi Hapi.

## **Clean Architecture**

### **Pendahuluan Clean Architecture**

Membuat aplikasi merupakan hal biasa bagi Software Developer. Namun, membuat aplikasi yang dapat bertahan (*sustainable*) serta mudah untuk dikembangkan merupakan sebuah tantangan yang perlu dihadapi oleh seorang Software Developer profesional. Untuk mencapainya, Software Developer harus mendesain aplikasi dengan baik mulai dari penulisan kode hingga arsitekturnya.

Dalam modul ini kita akan fokus untuk mempelajari cara membangun aplikasi dengan desain yang baik dan mudah beradaptasi seiring perkembangan bisnis. Sehingga, aplikasi yang dibuat bisa terus bertahan dalam mendukung kebutuhan bisnis perusahaan. Pada akhir modul ini, Anda diharapkan dapat:

- Memahami pentingnya kode yang bersih.
- Mengetahui dan menerapkan Design Pattern JavaScript seperti Creational Pattern, Structural Pattern, dan Behavioural Pattern.
- Mengetahui dan memahami Architectural Pattern dalam pengembangan aplikasi seperti Domain Driven Design dan Clean Architecture.
- Mampu membangun RESTful API yang memiliki sifat mudah dikembangkan, mudah diadaptasi oleh berbagai framework, dan mudah untuk diuji.
  
### **Pentingnya Kode yang Bersih**

Perusahaan pasti menginginkan aplikasi dibuat dengan kualitas terbaik dan mampu menjadi pendukung bisnis yang dapat diandalkan. Salah satu indikatornya adalah semua fitur aplikasi dapat berjalan dengan baik dan tentunya dapat mudah beradaptasi pada kedinamisan kebutuhan bisnis dengan upaya (*effort*) seminimal mungkin.

Hal inilah yang membuat developer pemula umumnya hanya memperhatikan apakah fitur-fitur pada aplikasi bisa berjalan atau tidak tanpa memperhatikan kualitas kode yang ditulis. Akibatnya, kode yang ditulis terkesan asal-asalan, duplikasi kode di mana-mana, serta struktur dan aspek penulisan kode yang ala kadarnya. Tampak luar aplikasi terlihat baik, tetapi sebenarnya sangat ringkih secara kode.

Simaklah kisah berikut yang disadur dari buku Clean Code karya Robert C. Martin atau yang biasa dikenal dengan Uncle Bob [6]:

Ada sebuah perusahaan pada tahun 80-an membuat aplikasi yang sangat keren, sebut saja aplikasi XYZ. Aplikasi itu sangat populer di kalangan profesional. Banyak yang membeli dan memakainya. Alhasil, banyak fitur ditambahkan untuk meningkatkan layanan aplikasi tersebut. Namun, tahukah Anda apa yang terjadi selanjutnya?

Semakin lama interval update dari aplikasi itu semakin panjang. Aplikasi sering kali eror dan menjadi lambat. Pada akhirnya, sang penulis buku (Uncle Bob) menyaksikan sendiri bagaimana aplikasi XYZ itu dihentikan dan tidak pernah dipakai lagi. Tak lama kemudian perusahaannya pun bangkrut.

20 tahun kemudian, Uncle Bob bertemu dengan salah satu karyawan dari perusahaan tersebut dan menanyakan apa yang sebenarnya terjadi. Ia mengatakan bahwa setiap kali fitur bertambah, kode menjadi semakin buruk dan tidak dapat dipelihara lagi. `Kode yang buruk menyebabkan perusahaan tersebut bangkrut`.

Menulis kode dengan struktur yang bagus adalah sesuatu yang penting dan menjadi kewajiban bagi setiap developer. Lalu bagaimana caranya agar dua hal tersebut tercapai? Ingat, salah satu tantangan terbesar pengembang adalah bagaimana menciptakan aplikasi yang dapat beradaptasi sesuai perkembangan kebutuhan bisnis.

Lalu, bagaimana membuat kode yang bersih (*clean code*) dan bisa bertahan seiring banyaknya penambahan fitur (*scalable*)? Jawabannya adalah dengan memiliki rasa tanggung jawab yang lebih pada setiap baris kode yang Anda tulis. Salah satunya, dengan menulis kode yang mudah dipahami oleh orang lain. Bukan hanya kamu dan komputer yang memahaminya. 

*“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”* Itulah kata-kata Martin Fowler dalam buku Refactoring : Improving the Design of Existing Code. Yap, kode yang baik bukan hanya mudah dibaca oleh komputer, tetapi yang lebih penting adalah mudah dibaca oleh manusia[7]. “*Cause programming is mostly about reading, not writing*”.

Sadari pula bahwa aplikasi yang dibangun tidak hanya memenuhi kebutuhan pengguna, tetapi juga menjadi bentuk tanggung jawab seorang developer pada anggota tim lainnya. Akhirnya, yang bahagia bukan hanya pengguna aplikasi, tapi rekan kerja juga bisa ikut bahagia dengan kode yang Anda tulis.

### **Design Pattern**

Design pattern merupakan salah satu topik yang penting jika Anda ingin berkarir sebagai Software Developer. Lalu, apa yang dimaksud Design Pattern? Design Pattern adalah sebuah solusi umum yang telah teruji dan bisa digunakan kembali untuk menyelesaikan suatu masalah yang sering terjadi pada perancangan perangkat lunak [8]. Jadi, penggunaan Design Pattern ditentukan oleh permasalahan apa yang akan diatasi.

Dalam pengembangan aplikasi Node.js dan aplikasi pada umumnya, beberapa permasalahan yang bersifat berulang dapat diatasi dengan Design Patterns. Caranya, dengan meningkatkan kualitas rancangan aplikasi pada aspek-aspek penggunaan ulang (`reusability`), perluasan fungsi (`extensibility`), skalabilitas (`scalability`), dan pemeliharaan (`maintainability`). Tentunya, semua ini juga akan berdampak pada gaya penulisan kode (*code style*) dengan mematuhi konvensi yang disepakati dalam tim.

Terdapat tiga jenis Design Pattern yang digunakan dalam Software Development, yaitu:

- Creational Pattern : Berhubungan dengan penciptaan suatu objek (instantiation).
- Structural Pattern : Berhubungan dengan komposisi suatu objek (relationships).
- Behavioral Pattern : Berhubungan dengan komunikasi antar objek (communications).

### **Design Pattern - Creational Pattern**

#### **Creational Pattern**

Creational Pattern digunakan untuk membuat instance atau suatu objek tanpa perlu mengetahui bagaimana step-by-step objek itu dibuat. Sehingga, pembuatan objek akan lebih mudah dan cepat. Jenis ini mengedepankan fleksibilitas dan penggunaan kembali objek yang dibuat. Berikut beberapa hal yang termasuk creational pattern di JavaScript yang akan dibahas:

- Constructor Function/Class Pattern
- Singleton Pattern
- Builder Pattern
- Dependency Injection Pattern
  
#### **Constructor Function/Class Pattern**

Kami yakin Anda sudah terbiasa menggunakan Constructor Function atau Class Pattern. Constructor Function dan Class adalah hal yang sama. Ketika Anda menggunakan class di JavaScript, sebenarnya dibalik layar ia menggunakan constructor function dalam membuat sebuah objek. Class hadir di ES6 guna mempermudah penggunaan constructor function dan penerapan paradigma OOP di JavaScript.

Class Pattern dapat meminimalisir kode repetitif dalam membuat objek yang serupa di JavaScript. Pasalnya, dalam pembuatan objek menggunakan class tidak perlu mendefinisikan ulang seperti apa behavior atau properti yang diinginkan dalam objek tersebut. Class layaknya sebuah blueprint yang dapat mencetak banyak objek serupa secara singkat.

Berikut contoh pembuatan objek mobil tanpa dan dengan class pattern.

```js
// tanpa class pattern

const xenia = {
  manufacture: 'daihatsu',
  model: 'xenia',
  year: 2020,
  color: 'black',
  engineStatus: 'inactive',
  startEngine() {
    this.engineStatus = 'active';
    console.log(`${this.model} ${this.color} is starting`);
  },
};
 
const avanza = {
  manufacture: 'toyota',
  model: 'avanza',
  year: 2019,
  color: 'white',
  engineStatus: 'inactive',
  startEngine() {
    this.engineStatus = 'active';
    console.log(`${this.model} ${this.color} is starting`);
  },
};
 
const crv = {
  manufacture: 'honda',
  model: 'crv',
  year: 2020,
  color: 'gray',
  engineStatus: 'inactive',
  startEngine() {
    this.engineStatus = 'active';
    console.log(`${this.model} ${this.color} is starting`);
  },
};
 
xenia.startEngine(); // "xenia black is starting"
avanza.startEngine(); // "avanza white is starting"
crv.startEngine(); // "crv gray is starting"
```

```js
// dengan class pattern

class Car {
  constructor(manufacture, model, year, color) {
    this.manufacture = manufacture;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engineStatus = 'inactive';
  }
  
  startEngine() {
    this.engineStatus = 'active';
    console.log(`${this.model} ${this.color} is starting`);
  }
}
 
const xenia = new Car('daihatsu', 'xenia', 2020, 'black');
const avanza = new Car('toyota', 'avanza', 2019, 'white');
const crv = new Car('honda', 'crv', 2020, 'gray');
 
xenia.startEngine(); // "xenia black is starting"
avanza.startEngine(); // "avanza white is starting"
crv.startEngine(); // "crv gray is starting"
```

Lihat! Bagaimana class dapat mempersingkat pembuatan objek mobil yang ada. Dengan menggunakan class, kita tidak perlu mendefinisikan properti dan method yang ada pada objek modul secara berulang. Sangat efektif bukan?


####  **Singleton Pattern**

Pattern ini digunakan ketika Anda ingin memastikan suatu objek hanya memiliki satu instance saja dan satu cara akses ke instance tersebut. Cara ini akan sangat bermanfaat ketika sebuah objek dibutuhkan di banyak Class. Terlebih terhadap objek-objek yang memang akan digunakan terus menerus seperti objek database Pool atau Logging.

Mengapa kita hanya ingin instance dibuat dalam satu objek saja? Ketahuilah, setiap kali membuat objek baru berarti kita mengalokasikan memori untuk menyimpan objek tersebut. Jika secara tidak sengaja program membuat banyak objek, ia akan menyebabkan memory leak (kebocoran memori). Tak jarang program menjadi eror disebabkan oleh hal ini.

Ada dua mekanisme pembuatan objek Singleton di JavaScript. Anda bisa menggunakan objek literals secara langsung ataupun constructor function/class.

```js
// object literal

const Logging = {
  logs: [],
  addLog(log) {
    this.logs.push(log);
  },
  viewLogs() {
    console.log(this.logs);
  }
}
 
const loggingA = Logging;
const loggingB = Logging;
 
loggingA.addLog('log 1');
loggingB.addLog('log 2');
loggingB.addLog('log 3');
 
loggingA.viewLogs(); // ["log 1","log 2","log 3"]
```

```js
// constructor function/class

class Logging {
  constructor() {
    if (typeof Logging.INSTANCE === 'object') {
      return Logging.INSTANCE;
    }
    
    this.logs = [];
    Logging.INSTANCE = this;
  }
  
  addLog(log) {
    this.logs.push(log);
  }
  
  viewLogs() {
    console.log(this.logs);
  }
}
 
const loggingA = new Logging();
const loggingB = new Logging();
 
loggingA.addLog('log 1');
loggingB.addLog('log 2');
loggingB.addLog('log 3');
 
loggingA.viewLogs(); // ["log 1","log 2","log 3"]
```

Pembuatan objek menggunakan object literal merupakan singleton secara default. Objek akan berada di suatu tempat di memory dan akan selamanya di sana hingga aplikasi berhenti dijalankan. Jika Anda mendefinisikan variabel baru dengan menginisialisasikan terhadap objek tersebut, variabel akan mereferensi terhadap objek yang sama. Sehingga tidak akan terjadi pembuatan objek baru.

Bila Anda tipe orang yang menghindari pembuatan objek menggunakan object literals secara langsung, singleton juga dapat diterapkan pada constructor function atau class. Caranya dengan menyimpan objek (instance dari class) pada static properti seperti yang Anda lihat pada contoh kode di atas. Objek logging hanya akan dibuat ketika pembuatan instance Logging pertama kali. Ketika pembuatan instance selanjutnya, alih-alih membuat objek baru, ia hanya akan menggunakan objek yang disimpan pada Logging.INSTANCE.

#### **Builder Pattern**

Pattern ini digunakan ketika kita ingin membuat sebuah objek secara bertahap, tetapi hanya fokus pada bentuk objek yang diinginkan. Sehingga, kita tidak perlu mendefinisikan semua variabel yang ada di class tersebut. Cukup yang akan diubah saja.

Sebagai contoh, ketika ingin membeli handphone, biasanya Anda cukup menyebutkan fitur yang penting saja, seperti processor dan RAM. Anda tidak perlu mengatakan handphone yang ada screen, speaker, atau baterainya, kan? Walaupun saat membelinya Anda akan mendapatkan komponen-komponen tersebut.

Hal ini sama dengan ketika sebuah Class memiliki banyak sekali properties. Ada yang penting dan ada yang tidak penting. Maka untuk membuat objek dengan class seperti ini Anda bisa menggunakan Builder Pattern.

Untuk lebih mudahnya lihatlah kode berikut:

```js
class Handphone {
  constructor(processor, ram, speaker, screen) {
    this.processor = processor;
    this.ram = ram;
    this.speaker = speaker;
    this.screen = screen;
  }
}
 
class HandphoneBuilder {
  constructor(processor, ram) {
    this.processor = processor; // wajib ada
    this.ram = ram; // wajib ada
    
    this.speaker = 'Dolby Atmos'; // default
    this.screen = 'IPS'; // default
  }
  
  setSpeaker(speaker) {
    this.speaker = speaker;
    return this;
  }
  
  setScreen(screen) {
    this.screen = screen;
    return this;
  }
  
  build() {
    return new Handphone(this.processor, this.ram, this.speaker, this.screen);
  }
}
```

Sekarang untuk membuat objek Handphone, kita bisa menggunakan bantuan HandphoneBuilder. Kita tidak perlu perlu mendefinisikan properti Handphone satu per satu, cukup definisikan properti yang dibutuhkan dan ingin diganti saja. Sebagai contoh, Anda ingin Handphone yang memiliki spesifikasi sebagai berikut:

- Prosesor “Octa-core”
- Ram “8GB”
  
Anda cukup membuatnya dengan seperti ini:

```js
const myPhone = new HandphoneBuilder('Octa-core', '8GB')
  .build();
```

Jika ingin mengubah tipe screen menjadi Amoled, Anda bisa memanggil setScreen sebelum Handphone di-build.

```js
const myPhone = new HandphoneBuilder('Octa-core', '8GB')
  .setScreen('Amoled')
  .build();
```

#### **Dependency Injection Pattern**

Tak jarang sebuah objek membutuhkan objek lain untuk melakukan suatu proses. Sangat wajar bila hal ini terjadi karena kita tak ingin membuat objek “serba bisa” dengan memisahkan fungsi-fungsi yang berbeda menjadi objek yang lebih kecil. Objek yang dibutuhkan oleh objek lain dinamakan objek dependency.

Agar mudah memahami konsep dependency objek, berikut contoh class `Car` yang membutuhkan *instance* dari class `Engine` untuk melakukan fungsi `start`.

```js
class Engine {
  constructor() {
    this.status = 'inactive';
  }
  
  activate() {
    this.status = 'active';
  }
}
 
class Car {
  constructor() {
    this.engine = new Engine();
  }
  
  start() {
    this.engine.activate();
    
    console.log(`status mesin: ${this.engine.status}`);
  }
}
 
const car = new Car();
car.start(); // status mesin: active
```

Ini adalah contoh kode yang tidak mengimplementasikan dependency injection pattern. Mengapa? Karena class Engine dibuat di dalam class Car dengan gambaran seperti ini:


![20210809001457a9b5168ddfbbdf623a844de19dfdb1ab](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d73e57c6-0565-44ab-83c8-00dcf7d8dbf3)

Hal ini akan menimbulkan masalah yang serius, yaitu:

- Class Car dan Engine saling terhubung erat (tightly coupled). Sehingga, ketika ingin membuat objek baru dengan Engine yang berbeda, Anda harus membuat class Car yang baru lagi.
- Membuat unit testing menjadi lebih sulit. Karena Anda harus menggunakan objek asli dari Engine secara langsung. Anda tidak bisa menerapkan Test Double seperti membuat fake object atau mock object.
  
Oleh karena itu muncullah dependency injection pattern. Alih-alih membuat class Engine langsung di dalam class Car, kita akan mengeluarkan class Engine dan memasukkannya (inject) ke dalam class Car dengan gambaran seperti ini:


![20210809001605365797adfd2c523cebf0c32a8e94da46](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/921fa5e8-1452-4dc7-bc5b-abd240c82a37)

Sehingga, implementasi kode dari ilustrasi di atas menjadi seperti berikut:


```js
class Engine {
  constructor() {
    this.status = 'inactive';
  }
  
  activate() {
    this.status = 'active';
  }
}
 
class Car {
  constructor(engine) {
    this.engine = engine;
  }
  
  start() {
    this.engine.activate();
    
    console.log(`status mesin: ${this.engine.status}`);
  }
}
 
const engine = new Engine();
const car = new Car(engine);
car.start(); // status mesin: active
```

Dengan demikian, dependency terhadap engine menjadi longgar (*loosely coupled*) dan memudahkan kita jika ingin mengganti objek Engine.

### **Design Pattern - Structural Pattern**

#### **Structural Pattern**

Pada pattern ini kita fokus pada cara menyusun struktur dari suatu kode. Di sini kita akan mempelajari beberapa design pattern yang berguna untuk mempermudah Anda dalam mengimprovisasi dan mengembangkan kode sesuai kebutuhan bisnis. Berikut adalah beberapa structural pattern yang ada di JavaScript yang akan kita bahas:

- Facade Pattern
- Adapter Pattern
  
#### **Facade Pattern**

Dengan menggunakan facade pattern, sistem yang kompleks dibuat menjadi lebih simpel sehingga memudahkan proses membaca dan menuliskan kode. Caranya yaitu menyembunyikan kompleksitas dengan membuat fungsi baru yang mudah digunakan.

![20210809001818d03c010c6721dde712a21c7016871f86](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/79441622-b824-43f3-a372-b134af4957b6)

Seringnya fungsi facade dibuat ketika proses refactoring kode. Lebih tepatnya, ketika Anda mulai merasa kode yang dituliskan berantakan sehingga membutuhkan abstraksi lebih tinggi agar proses yang rumit tidak perlu diketahui oleh client atau *high-level code*.

Di dalam dunia nyata, pola facade juga sering kita jumpai. Contohnya ketika Anda memesan makanan di restoran. Sebagai client, ketika Anda ingin mendapatkan makanan mungkin terkesan sangat mudah karena cukup memesan ke pelayan restoran dan membayarnya dengan sejumlah uang. 

Namun nyatanya, proses penyajian makanan tidaklah mudah. Pelayan harus berurusan dengan beberapa sub sistem, seperti akuntan, bagian dapur, dan koki. Dengan pola facade, Anda sebagai client tidak mengetahui proses rumit tersebut karena sudah diabstraksikan.

Berikut adalah contoh dalam implementasi kode:

```js
class FoodOrder {
  static async order(menu) {
    try {
      const accountant = new Accountant();
      const kitchen = new Kitchen();
      const chef = new Chef();
     
      const bill = await accountant.recordOrder(menu);
      await kitchen.verifyAvailabilityIngredients(menu);
      const orderedFood = await chef.cook(menu);
      return { orderedFood, bill };
    } catch (error) {
      console.log(`ups! order fail due ${error}`)
    }
  }
}
 
// facade
FoodOrder.order('spicy bulgogi');
```

Berikut penjelasannya:

    Facade -- Di contoh kode: FoodOrder

        Mengetahui subsistem mana yang bertanggung jawab ketika request masuk.

        Mendelegasikan request masuk kepada subsistem dengan benar.

    Subsistem -- Di contoh kode: Accountant, Kitchen, Chef

        Mengimplementasikan dan menjalankan fungsionalitas khusus.

        Tidak mengetahui apapun terhadap facade, alias hanya melakukan tugasnya saja.

#### **Adapter Pattern**

Adapter Pattern merupakan pola yang menghubungkan dua komponen yang tidak cocok agar bisa bekerja sama. Caranya yaitu dengan membuat converter atau adapter supaya salah satu komponen bisa cocok dengan yang lainnya.

Mari kita contohkan dengan kejadian yang ada di dunia nyata. Anda memiliki pengisi daya (charger) dengan tipe colokan berkaki 3, tetapi stop kontaknya hanya memiliki 2 lubang. Supaya pengisi daya dapat digunakan, Anda membutuhkan adapter yang memiliki 3 lubang dan berkaki 2.


![2021080900190225d95cc92b32bdbf931a9acd27d43524](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/fd79a526-8678-49e5-96d7-6a6a032280e1)

Untuk lebih mudahnya, mari kita ilustrasikan dengan contoh lain dalam bentuk kode. Katakanlah aplikasi Anda terhubung dengan Google Authorization dan asumsikan aplikasi sudah berfungsi sempurna. Namun, pengguna ingin tambahan fitur login melalui GitHub. Sayangnya, GitHub SDK memiliki metode authorization yang berbeda. Bagaimana cara mengatasinya? Anda dapat membuat Adapter yang memiliki interface sama dengan penerapan Google Authorization (penerapan yang sudah ada).

```js
// main.js

class GoogleSDKAuthentication {
  authenticate() {
    // implementasi autentikasi Google
    return 'authenticated!';
  }
}

class GithubSDKAuthentication {
  setToken(token) {
    this.token = token;
  }
  
  setMode(mode) {
    this.mode = mode;
  }
  
  signIn() {
    // implementasi autentikasi Github
    if (!this.token || !this.mode) {
      throw new Error('Need to define token and mode');
    }
    
    return 'authenticated!';
  }
}

class GithubAuthenticationAdapter {
  constructor(githubSDKAuthentication, token, mode) {
  	this.githubSDKAuthentication = githubSDKAuthentication;
    this.token = token;
    this.mode = mode;
  }
  
  authenticate() {
    this.githubSDKAuthentication.setToken(this.token);
    this.githubSDKAuthentication.setMode(this.mode);
    return this.githubSDKAuthentication.signIn();
  }
}

// implementasi autentikasi lama
const authenticateApps = (authenticator) => {
  console.log(authenticator.authenticate());
}

const googleSDKAuthentication = new GoogleSDKAuthentication();
const githubSDKAuthentication = new GithubSDKAuthentication();
const githubAuthenticationAdapter = new GithubAuthenticationAdapter(githubSDKAuthentication, 'abcd-efgh', 'read');

// Works!
authenticateApps(googleSDKAuthentication);

// Works!
authenticateApps(githubAuthenticationAdapter);
```

### **Design Pattern - Behavioral Pattern**

#### **Behavioral Pattern**

Pada pattern ini kita fokus untuk mengatur komunikasi antara satu objek dengan objek lain. Dengan begitu, kita bisa melihat tanggung jawab masing-masing objek. Kode aplikasi pun akan menjadi lebih fleksibel, tidak saling terikat, dan mudah dibaca. Berikut beberapa behavioral pattern dalam JavaScript yang akan dibahas:

- Observer Pattern
- Template Method Pattern
  
#### **Observer Pattern**

Anda mungkin sudah mengenal event di Node.js. Dalam mengembangkan aplikasi Node.js, tak jarang Anda memanfaatkan event untuk mendapatkan data dari sebuah proses, seperti ketika memproses berkas melalui teknik stream. Proses menulis data menggunakan stream dilakukan secara berangsur dan bagian data yang siap dikonsumsi akan didistribusikan melalui event. Untuk mendapatkan data dari event, kita harus menyediakan fungsi event handler yang selalu dipanggil ketika event tersebut terjadi.

Event dan event handler di JavaScript adalah bentuk implementasi dari observer pattern. Observer pattern juga biasa dikenal dengan istilah lain yaitu Pub/Sub atau singkatan dari Publication/Subscription.

![2021080900201326a4892a02410844cf8a4a9c99af5a6f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2c3da30b-3e6f-480c-be14-569ee6ce6b77)

Observer pattern menggunakan pola subscription dalam proses komunikasi di antara dua objek atau lebih. Komunikasi terjadi di antara objek subject dan objek observers. Subject merupakan objek yang memiliki state atau data, sedangkan observer merupakan objek yang mengamati perubahan state atau data pada subject.

Selain memiliki state atau data, objek subject juga bertanggung jawab mengatur daftar observer, menyediakan interface untuk subscribe dan unsubscribe, serta mengirimkan sinyal terhadap observer ketika terjadi perubahan state atau data.

Contoh mudahnya adalah saat Anda berlangganan (*subscribe*) sebuah channel di YouTube. Handphone Anda akan mendapatkan notifikasi ketika ada video baru muncul di channel tersebut. Channel YouTube berperan sebagai subject dan handphone Anda adalah observers.

Mari kita implementasikan dalam bentuk kode.

```js
class FavoriteYouTubeChannel {
  constructor(subscription) {
    this.subscription = subscription;
  }
 
  uploadNewVideo(title) {
    this.subscription.notify(`new video: ${title}`);
  }
}
 
class Subscription {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  
  notify(message) {
    this.observers.forEach((observer) => {
      observer(message);
    });
  }
}
 
const subscriber1 = (data) => {
  console.log(data);
}
 
const subscriber2 = (data) => {
  console.log(data);
}
 
const subscription = new Subscription();
const favoriteYouTubeChannel = new FavoriteYouTubeChannel(subscription);
 
// subscribe
subscription.subscribe(subscriber1);
subscription.subscribe(subscriber2);
 
// event trigger!
favoriteYouTubeChannel.uploadNewVideo('Ultimate Prank Bro!');
 
// unsubscribe
subscription.unsubscribe(subscriber2);
 
// event trigger!
favoriteYouTubeChannel.uploadNewVideo('Mukbang Seafood!');
 
/* output
new video: Ultimate Prank Bro!
new video: Ultimate Prank Bro!
new video: Mukbang Seafood!
*/
```

#### **Template Method Pattern**

Apabila Anda memiliki dua komponen dengan tugas yang mirip, buatlah pola (template) yang dapat dicontoh untuk menyelesaikan masalah tersebut. Caranya yaitu dengan membuat abstract class sebagai superclass dengan default implementation. Nah, jika ingin melakukan tugas yang lebih spesifik, Anda dapat membuat subclass-nya dan override beberapa bagian fungsi yang diinginkan.

![20210809002113b64a8cc400302a2a2bd40c9932963c3d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6cb023b8-5aa8-4fca-b559-c0a89c46f9fd)

Contohnya:

```js
class Datastore {
  constructor() {
    if (this.constructor.name === 'Datastore') {
      throw new Error('datastore is abstract and need to be implemented');
    }
  }
  
  connect() {
    throw new Error('method not implemented');
  }
  
  query(query) {
    throw new Error('method not implemented');
  }
  
  disconnect() {
    throw new Error('method not implemented');
  }
  
  process(query){
    this.connect();
    const result = this.query(query);
    this.disconnect();
    return result;
  }
}
 
class MySQLDatastore extends Datastore {
  connect() {
    console.log('mysql connect step');
  }
  
  query(query) {
    console.log(`mysql execute query: ${query}`);
    return ['some data'];
  }
  
  disconnect() {
    console.log('mysql disconnect step');
  }
}
 
class PostgreSQLDatastore extends Datastore {
  connect() {
    console.log('postgresql connect step');
  }
  
  query(query) {
    console.log(`postgresql execute query: ${query}`);
    return ['some data'];
  }
  
  disconnect() {
    console.log('postgresql disconnect step');
  }
}
 
const mySQLDatastore = new MySQLDatastore();
const postgreSQLDatastore = new PostgreSQLDatastore();
 
mySQLDatastore.process('SELECT * FROM users');
postgreSQLDatastore.process('SELECT * FROM users');
```

Pada contoh di atas, kita menggunakan teknik inheritance untuk mewarisi method yang ada pada *base class*. Class Datastore merupakan base class dan bersifat abstract, alias tidak boleh ada instance yang dibuat langsung menggunakan class ini. Mengapa demikian? Karena datastore tidak mengenal implementasi dari method `connect`, `query`, dan `disconnect`. Namun, ia mengetahui implementasi method process karena untuk memproses pada setiap datastore tahapannya sama.

Instance Datastore hanya bisa dibuat melalui *concrete class* (MySQLDatastore dan PostgreSQLDatastore) yang mengimplementasikan method abstract, yakni `connect`, `query`, dan `disconnect`. Karena implementasi dari ketiga method tersebut mungkin berbeda pada MySQL ataupun PostgreSQL, masing-masing *concrete* class harus mendefinisikannya.

Pola template seperti ini akan memudahkan kita untuk mengubah datastore (MySQL, Postgres, Oracle, dan lainnya) tanpa harus mendefinisikan ulang sebagian methodnya.

### **Architectural Pattern**

#### **Architectural Pattern**

Sebelumnya Anda telah mempelajari Design Pattern. Selanjutnya untuk menuju level yang lebih tinggi, kita akan mulai mempelajari Architectural Pattern. Design Pattern membahas solusi yang lebih spesifik, sedangkan pada Architectural Pattern memiliki skala yang lebih besar tentang pengorganisasian keseluruhan komponen aplikasi. 

Architectural Pattern lebih berfokus pada *separation of concern* (soc), yaitu pembagian tugas yang lebih jelas antar komponennya. Bila diibaratkan dengan pembangunan kota, Architectural Pattern merupakan teknik dalam mengatur tata letak pemukiman, pasar, sekolah, dan taman. Sedangkan Design Pattern merupakan teknik dalam membuat pemukiman, pasar, sekolah, dan taman tersebut. Sehingga Architectural Pattern lebih luas daripada Design Pattern. Nah, itulah perbedaan antara Architectural Pattern dan Design Pattern.

#### **Clean Architecture**

Clean Architecture merupakan software architecture yang berfokus untuk mengenkapsulasi logika bisnis dari framework atau teknologi luar. Dengan begitu, logika bisnis mudah untuk diadaptasi ketika terjadi perubahan terhadap framework atau teknologi yang digunakan. Untuk mencapai hal tersebut, pattern ini membagi aplikasi menjadi beberapa layer (lapisan) dalam bentuk cincin, seperti Interface, Controller/Handler, UseCase (*Application Business*), dan Entities (*Enterprise Business*).

![202108041723553069af4b89118ddc73ae025dbbeb8ecc](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9e33ebab-9285-41d8-a862-a4c52aa560c8)

Lapisan terluar tergantung dengan yang di dalam, sementara lapisan yang dalam tidak tahu lapisan luarnya. Sehingga, ketika terdapat perubahan pada lapisan terluar tak akan mempengaruhi lapisan yang di dalamnya. Dengan begini, maka aplikasi Anda akan menjadi lebih `maintainable`, `independent`, `testable`, dan `robust`.

Kita akan bahas lebih dalam mengenai clean architecture pada materi selanjutnya.

### **Clean Architecture pada Pengembangan REST API**

Sampai saat ini, ada banyak arsitektur yang bermunculan dalam pengembangan software engineering. Mulai dari [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)), [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/), hingga Clean Architecture. Walaupun berbeda-beda, tetapi semuanya memiliki tujuan sama, yaitu *separation of concern*.

Dengan menerapkan architecture yang standar, kita bisa membaca kode di proyek aplikasi lebih mudah. Selain itu, pada Clean Architecture Anda bisa mendapatkan benefit lain yaitu:

- Independent of Framework : Tidak tergantung pada implementasi framework yang digunakan dan menempatkan framework hanya sebagai tools.
- Testable : Kode untuk proses bisnis dapat diuji dengan mudah karena tidak bersentuhan langsung dengan Interface, Database, atau elemen external lainnya.
- Independent of UI: User Interface aplikasi dapat diubah dengan mudah, tanpa perlu mengubah keseluruhan sistem. Contoh, bila saat ini Anda mengembangkan aplikasi REST namun suatu saat Anda ingin mengganti Interface menjadi CLI, maka Anda bisa menggunakan kode bisnis yang sama tanpa perlu mengubahnya sama sekali.
- Independent of Database : Tidak bergantung pada framework database tertentu dan dapat diganti dengan mudah.
- Independent of External : Proses bisnis yang ada tidak perlu tahu apa yang ada di luarnya.
  
Untuk mempermudah pembagian tersebut, maka dibuatlah layer-layer sesuai dengan kebutuhannya. Pada Studi kasus pembuatan API nanti, berikut struktur layer yang akan kita gunakan.

![202108090023460f9c8053ae59d69d3c2f9a6f6599792d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9ffc76be-680c-40e6-8108-e6fb92107b84)

Sebenarnya untuk jumlah level bisa bervariasi sesuai kebutuhan, namun di sini kita akan menggunakan 4 level seperti di atas. Kita pahami dulu satu per satu level yang disebutkan di atas:

1. Entities (Enterprise Business Rules)
Level ini digunakan sebagai tempat penyimpanan data entitas bisnis utama dalam bentuk objek yang mungkin juga memiliki method. Level ini berhubungan erat dengan proses bisnis. Ini merupakan bagian yang paling tidak mungkin berubah ketika terjadi perubahan dari external. Misalnya, ketika ada perubahan framework HTTP. Karena ia sangat plain, maka Anda bisa menggunakannya untuk aplikasi lainnya.

2. Use Case (Application Business Rules)
Ini adalah bagian orkestrasi proses bisnis berada. Level ini melakukan proses bisnis yang dibutuhkan dengan memanipulasi data dan algoritma untuk memenuhi objektif kebutuhan bisnis. Ini juga merupakan tempat yang diharapkan tidak ada perubahan ketika ada perubahan external baik HTTP server ataupun Database.

3. Interface Adapter
Mediator atau penghubung antara layer framework dengan layer application business (use case). Level ini akan mengatur aliran request dari/ke HTTP server/database. Yang termasuk di dalamnya, yaitu handler untuk mengatur aliran request dari HTTP server dan repository untuk mengatur aliran request ke database.

4. Frameworks
Level paling luar merupakan bagian yang berhubungan dengan framework. Seperti Hapi untuk HTTP Server, dan Postgres untuk Database.

#### **Dependency Rule**

Bagian terpenting pada Clean Architecture adalah aturan dependency atau dependency rule. Dependency Rule pada arsitektur ini mengatakan, dependency hanya boleh terjadi dari arah luar ke dalam. Lingkaran dalam tidak bisa mengetahui apa pun yang ada di lingkaran luarnya.

![20210809002435a94d912ff6f8354f09850620d242a56e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b0892c0f-3625-4e8e-b511-3a8f591f5d27)

Lalu bagaimana caranya layer use case dapat menyimpan entities di database bila tidak mengetahui penerapan database-nya? Caranya adalah dengan menerapkan prinsip [Dependency Inversion](https://en.wikipedia.org/wiki/Dependency_inversion_principle), yakni membuat abstraction interface di layer Enterprise atau Application Business sehingga layer tersebut tidak akan bergantung terhadap objek concrete yang berada di luar lingkarannya.

Dengan begitu, layer Enterprise atau Application Business akan terbebas dari implementasi framework atau teknologi secara spesifik. Sehingga, bila Anda hendak mengubah database dari Postgres menjadi MySQL, tidak perlu mengubah kode yang ada di layer Application Business apalagi Enterprise Business. Menarik, kan?

Mungkin secara teori saja tidak cukup untuk memahami clean architecture ini. Di modul selanjutnya, kita akan coba membuat RESTful API dengan menerapkan prinsip Clean Architecture.

### **Studi Kasus Clean Architecture + TDD: Membangun Auth API**

Setelah matang dengan teori yang diberikan, kini saatnya kita praktikkan materi yang sudah dipelajari dari awal pembelajaran hingga saat ini pada proyek membangun RESTful API. Kita akan menerapkan 100% *coverage testing*, serta mengikuti prinsip Clean Architecture dalam dependency rule.

Tujuan latihan kali ini adalah menciptakan aplikasi yang bersifat:

- Mudah dikembangkan;
- Mudah diadaptasi oleh berbagai framework;
- Teruji dan terhindar dari bugs;
  
Pada latihan kita akan membangun proyek Authentication API atau disingkat Auth API. Seperti namanya, API ini berfokus untuk mengelola fitur autentikasi saja, tak lebih. Auth API dapat melayani permintaan registrasi pengguna, login (get authentication), refresh authentication, dan logout (delete authentication). Terlihat mudah kan? Terlebih bila Anda sudah familiar dengan Token-Based authentication menggunakan JWT.

Walaupun terlihat mudah, ternyata bisnis logika dari fungsi-fungsi tersebut cukup kompleks dan cocok untuk kita jadikan studi kasus kali ini. Anda akan belajar cara mengorkestrasikan alur bisnis serta mengenkapsulasinya agar independen dari penerapan framework atau tools luar. Di sini Anda akan merasakan bahwa Clean Architecture + TDD akan sangat berperan dalam pengembangan aplikasi.

Yuk kita mulai.

Beberapa diagram yang ditunjukkan pada latihan kali ini mungkin akan sedikit berbeda dari yang sudah Anda lihat di teori. Tapi tidak apa-apa, karena tetap menghasilkan output yang sama.

### **Mengenal Struktur Proyek**

Sebelum memulai latihan, pahami dulu struktur proyek yang akan dibangun. Jadi, proyek Auth API akan memiliki empat struktur folder besar, yaitu `Domains`, `Applications`, `Interfaces`, dan `Infrastructures`.

- `Domains`: Merupakan Enterprise Business Layer, di dalam folder ini terdapat model domain (entities) dan abstract/interface repository. Di folder ini diharapkan untuk tidak ada dependencies (*sintaks require atau import*) terhadap agen external seperti framework atau tools luar.

- `Applications`: Merupakan Application Business Layer, di dalam folder ini terdapat alur bisnis yang kita definisikan dalam bentuk use case. Selain itu, kita juga bisa meletakkan abstraksi atau interface dari services, helper, tools, dan lainnya yang digunakan oleh use case. Di folder ini juga diharapkan untuk tidak ada dependencies langsung terhadap framework atau tools luar. Hal yang berada di dalam folder `Applications` diperbolehkan memiliki dependencies atau menggunakan domain karena domain berada di dalam lingkarannya.

- `Interfaces`: Merupakan adapter atau jembatan penghubung antara use case dengan agen eksternal, seperti HTTP server. Di sini kita akan mendefinisikan routes configuration dan juga handler yang dibungkus dengan Hapi Plugin.

- `Infrastructures`: Merupakan letak agen eksternal seperti framework, HTTP Server, Database, JWT Token, Bcrypt dan sebagainya. Di folder ini juga kita mendefinisikan concrete repository dari Domain, atau concrete service, helper, tools dari Application.

Penamaan folder disesuaikan berdasarkan empat layer aplikasi pada konsep *Domain-Driven Design*. Konsep tersebut dikemukakan oleh Eric Evans melalui bukunya yang berjudul [*Domain-Driven Design*: Tackling Complexity in the Heart of Software](https://www.pearson.com/us/higher-education/program/Evans-Domain-Driven-Design-Tackling-Complexity-in-the-Heart-of-Software/PGM168436.html).

Selain empat folder besar tersebut, kita juga menambahkan satu folder tambahan yakni Commons. Folder ini merupakan *shared folder* yang berisi class, function, atau apa pun yang boleh digunakan oleh ke-empat folder tersebut. Contohnya, kita akan mendefinisikan custom exception agar dapat menangani error secara spesifik.

Agar kode bisnis tetap bersih, kode yang berada di folder Domains dan Applications akan menghindari penggunaan shared folder.

#### **Alur Kontrol**

Supaya lebih memahami cara kerja fungsi dan struktur proyek, silakan simak dengan seksama bagan dari alur control aplikasi berikut.

![20210809002537bddffee0e6ff9c6b4211de67c059d99b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/fbdf2086-61d1-4bb4-a459-da24d69bf0b3)

Seperti yang tampak pada bagan di atas, kita membagi struktur aplikasi menjadi empat folder yakni Infrastructures (biru), Interfaces (hijau), Applications (merah), dan Domains (kuning). Berikut penjelasan dari alur tersebut:

1. Client melakukan request POST /users untuk membuat user baru.
2. Request masuk ke HTTP server yang dijalankan oleh Application Entry Point.
3. Request tersebut akan diarahkan oleh routes dan ditangani oleh handler yang sesuai.
4. Handler menangani request dari client dengan memanggil addUser use case dan memberikan request payload dari client sebagai use case payload. Handler memiliki objek repository dan security concern concrete yang dibawa dari entry point -> server -> routes -> handler. Di mana objek concrete tersebut juga diberikan kepada use case oleh handler agar ia dapat menjalankan tugasnya.
5. addUser Use case menerima tugas dari handler dan mengolah use case payload menjadi domain model NewUser. Setelah memiliki domain model, use case akan meminta UserRepository untuk menyimpan NewUser pada database.
6. UserRepository akan menyimpan NewUser dan mengembalikan nilai yang dibutuhkan Use Case untuk dijadikan response oleh handler terhadap permintaan client.
   
Kira-kira seperti itulah alur proses aplikasi yang akan kita bangun. Mungkin sebagian dari Anda masih ada yang belum memahami sepenuhnya alur dari aplikasi yang hendak dibuat. Tidak apa-apa, seiring praktik pemahaman Anda akan semakin matang. 

#### **Anatomi Proyek**

Sebelum melangkah ke materi selanjutnya, ada baiknya Anda mengenal anatomi proyek yang akan kita bangun secara lebih detail terlebih dahulu. Simaklah anatominya di bawah ini.

    auth-api/                   → Root Proyek.
    ├─ config/                  → Folder konfigurasi, digunakan untuk mengonfigurasi node-pg-migrate pada database testing.
    ├─ migrations/              → Berkas migrations database.
    ├─ src/                     → Source code aplikasi
    │  ├─ Applications/         → Application Business Rules
    │  │  ├─ security/          → Abstraksi/interface dari tools dan helper dalam hal security yang digunakan pada use case. Contohnya AuthTokenManager dan EncryptionHelper
    │  │  ├─ use_cases/         → Alur bisnis aplikasi.
    │  ├─ Commons/              → Shared folder.
    │  │  ├─ exceptions/        → Custom exceptions.
    │  ├─ Domains/              → Enterprise Business Rules.
    │  │  ├─ authentications/   → Subdomain authentications, di sini berisi domain model (entities) dan abstraksi/interface AuthenticationRepository .
    │  │  ├─ users/             → Subdomain users, di sini berisi domain model (entities) dan abstraksi/interface UserRepository.
    │  ├─ Infrastructures/      → Agen External seperti Framework dan Tools External.
    │  │  ├─ database/          → Driver database.
    │  │  ├─ http/              → HTTP Server menggunakan Hapi.js.
    │  │  ├─ repositories/      → Objek konkrit/implementasi dari repository domain.
    │  │  ├─ security/          → Objek konkrit/implementasi dari tools dan helper dalam hal security.
    │  │  ├─ container.js       → Penampung (container) seluruh instance dari service yang digunakan aplikasi.
    │  ├─ Interfaces/           → Interface Adapter. Di sini kita akan mendefinisikan routes configuration dan juga handler yang dibungkus dengan Hapi Plugin.
    │  ├─ app.js                → Entry point aplikasi.
    ├─ tests/                   → Utilitas kebutuhan untuk testing.
    ├─ .env                     → Environment variable.
    ├─ package.json             → Project Manifest.

### **Menyiapkan Proyek**

Awali dengan menyiapkan kebutuhan untuk proyek, database, dan testing supaya kita dapat fokus menulis kode tanpa terganggu proses konfigurasi dan persiapan lain nantinya. Sudah siap? Yuk, langsung simak uraiannya di bawah ini.

Sebelum membuat proyek, pastikan komputer Anda sudah terpasang PostgreSQL dan psql-cli untuk mengakses Postgres melalui Terminal

#### **Membuat Proyek Node.js**

Silakan buat proyek baru dengan nama `auth-api`, kemudian inisialisasi proyek dengan perintah:

```
npm init -y
```

Pastikan berkas `package.json` sudah terbentuk seperti berikut:

![2021080511363908a8e4be0f1795270c998848d730e6c1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c61f744b-027f-41a8-97ca-3ec4e409dbc6)

Selanjutnya pasang beberapa package dependencies yang dibutuhkan melalui perintah berikut:

```
npm install @hapi/hapi @hapi/jwt bcrypt dotenv nanoid@3.x.x pg
```

**Catatan**: Pastikan Anda memasang nanoid dengan versi 3.x.x. Karena jika menggunakan versi terbaru, nanoid tidak dapat digunakan dengan format module CommonJS.

Kemudian pasang juga beberapa package dev dependencies melalui perintah berikut:

```
npm install @types/jest eslint jest node-pg-migrate nodemon --save-dev
```

Setelah proses instalasi dependencies selesai, pastikan seluruh package yang dipasang muncul pada properti `dependencies` dan `devDependecies` di `package.json`.

![20210805113751b8dfb911430f0c6a7bde44fe2d87cfe4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/10e823bc-ded3-4e5b-8227-7d7b97545364)

Selanjutnya, jika Anda ingin menggunakan ESLint pada proyek kali ini, silakan konfigurasi ESLint dan pilih style guide yang ingin diadopsi melalui perintah:

```
npx eslint --init
```

Jika Anda tidak ingin menggunakan ESLint, hiraukan perintah tersebut.

Setelah proses pemasangan dependencies selesai, kita akan mengatur script runner pada package.json. Silakan buka berkas `package.json`, kemudian buat runner script seperti di bawah ini:

```js
"scripts": {
    "start": "node src/app.js",
    "start:dev": "nodemon src/app.js",
    "test": "jest --setupFiles dotenv/config",
    "test:watch": "jest --watchAll --coverage --setupFiles dotenv/config",
    "migrate": "node-pg-migrate",
    "migrate:test": "node-pg-migrate -f config/database/test.json"
  },
```

Berikut penjelasan dari fungsi masing-masing runner script:

- `start` → Menjalankan aplikasi tahap production.
- `start:dev` → Menjalankan aplikasi tahap development menggunakan nodemon.
- `test` → Menjalankan pengujian di sisi production. Runner ini akan kita gunakan nanti ketika deployment.
- `test:watch` → Menjalankan pengujian setiap kali ada perubahan berkas. Runner digunakan saat development untuk memastikan setiap kode yang ditulis lolos pengujian. Di sana Anda juga akan melihat tambahan parameter --setupFiles yang diberi nilai dotenv/config. Itu berarti Jest akan menggunakan dotenv setiap kali pengujian dijalankan.
- `migrate` → Menjalankan migration pada database yang digunakan oleh aplikasi.
- `migrate:test` → Menjalankan migration pada database yang digunakan untuk proses pengujian.

Sudah paham fungsi dari runner script yang dibuat? Jangan lupa untuk menyimpan perubahan pada berkas `package.json` ya.

Terakhir, kita siapkan struktur dasar dari proyek Auth API. Silakan buat struktur folder dan berkas `app.js` seperti ini:

![20210805113941d632693856cb4f70d706f4f8c07c616e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b2327825-edc3-4c18-8d25-f34568cf7261)

Mantap! Sampai di sini dulu untuk persiapan proyek Node.js-nya karena kita akan lanjut untuk mempersiapkan kebutuhan database terlebih dahulu.

#### **Menyiapkan Kebutuhan Database**

Saat ini kita akan membuat dua database yang digunakan untuk aplikasi dan proses pengujian. Mengapa memerlukan dua database? Hal tersebut karena pada proses pengujian nantinya akan menyentuh hingga level integrasi dengan database. Proses pengujian akan benar-benar menyimpan data di database walaupun data tersebut hanya sebatas data dumi (*dummy*). Oleh karena itu, praktik terbaiknya adalah membuat dua database supaya database utama (yang digunakan aplikasi) tidak terganggu proses pengujian.

Silakan masuk ke Postgres Database menggunakan akun postgres (root account) melalui psql dengan perintah berikut:

```
psql --username postgres
```

Hasilnya:


![2021080511411197fbf91c5aa98cf7a04751505d4c4d80](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a8faa8a4-7fac-4678-94e2-2fdbce2d172a)

Kemudian buat dua database baru dengan nama authapi dan authapi_test. Gunakan perintah berikut:

```
CREATE DATABASE authapi; CREATE DATABASE authapi_test;
```

Hasilnya:

![20210805114144e19eead7f1df33659197feea30963f7c](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/1b04bea7-e4b6-4ce9-8ec8-adfa1129f194)

Jika Anda ingin mendelegasikan pengelolaan database ke user yang lain, Anda bisa gunakan perintah berikut:

```
GRANT ALL PRIVILEGES ON DATABASE authapi, authapi_test TO <user>;
```

Ubah <**user**> dengan user Postgres yang Anda miliki. Contoh, jika Anda memiliki user dengan nama developer, hasilnya menjadi seperti di bawah ini:

![202108051142219725713878cda8ea7649fb3f1b4c7727](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2d172663-117b-46f7-8c11-b6068d417e27)

**Catatan**: Untuk PostgreSQL versi 15 ke atas, Anda perlu mengubah owner database ke user developer dengan perintah: `ALTER DATABASE authapi OWNER TO <*USER*>;` `ALTER DATABASE authapi_test OWNER TO <*USER*>;`

Pembuatan database selesai. Silakan tulis perintah `exit` untuk keluar dari psql.

Selanjutnya, buat berkas `.env` pada root proyek dan tulis environment variable untuk nilai konfigurasi database seperti ini:

```
## POSTGRES
PGHOST=localhost
PGUSER=developer
PGDATABASE=authapi
PGPASSWORD=supersecretpassword
PGPORT=5432
 
## POSTGRES TEST
PGHOST_TEST=localhost
PGUSER_TEST=developer
PGDATABASE_TEST=authapi_test
PGPASSWORD_TEST=supersecretpassword
PGPORT_TEST=5432
```

Sesuaikan nilai `PGUSER` dan `PGPASSWORD` dengan kredensial user Postgres yang Anda miliki. Setelah itu, simpan perubahan pada berkas `.env`.

Selanjutnya, buat berkas `test.json` di dalam folder baru dengan alamat config/database.

![20210805114351860f9a3b45d81950697346df13e3d17f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b56b8c6f-22bc-454d-bfef-eb6c4a0c50a7)

Kemudian dalam berkas tersebut, tulis konfigurasi seperti di bawah ini:

```js
{
  "user": "developer",
  "password": "supersecretpassword",
  "host": "localhost",
  "port": 5432,
  "database": "authapi_test"
}
```

Berkas konfigurasi di atas akan digunakan oleh runner script `migrate:test`. Supaya proses migration dapat mengarah ke database testing, `migrate:test` tidak boleh menggunakan *default configuration* melainkan harus mengarahkan konfigurasinya ke berkas tersebut. Paham kan maksudnya? Silakan simpan berkas `test.json` dan kita lanjut dengan membuat tabel yang dibutuhkan pada database.

Auth API membutuhkan 2 tabel yakni tabel `users` dan `authentications`. Tabel users digunakan untuk menyimpan data pengguna (*user*) yang terdaftar pada Auth API. Sedangkan tabel `authentications` digunakan untuk menyimpan refresh token user yang terautentikasi agar dapat memperbarui autentikasinya. Jadi, seperti apa bentuk kedua tabel yang akan kita buat? Berikut struktur tabelnya.


Tabel: users
| Nama Kolom | Tipe Data  | Constraint              |
|------------|------------|-------------------------|
| id         | VARCHAR(50)| PRIMARY KEY              |
| username   | VARCHAR(50)| NOT NULL, UNIQUE         |
| password   | TEXT       | NOT NULL                 |
| fullname   | TEXT       | NOT NULL                 |


Tabel: authentications

| Nama Kolom | Tipe Data  | Constraint    |
|------------|------------|---------------|
| token      | TEXT       | NOT NULL      |

Setelah mengetahui struktur dari tabel yang akan dibuat, saatnya sekarang kita membuat tabel tersebut pada database aplikasi maupun testing melalui proses migration.

Pertama, kita buat tabel `users` terlebih dahulu. Silakan buat migrations baru dengan nama “create table users” melalui perintah berikut:

```
npm run migrate create "create table users"
```

Pastikan berkas migrations baru terbuat.

![2021080511495609374f7f5d89f94215048dd4e2262736](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/33214ac3-b404-48d1-a062-ee0a5f6d3006)

Buka berkas migrations tersebut, kemudian tulis kode dalam membuat tabel users seperti ini:

```js
/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    username: {
      type: 'VARCHAR(50)',
      notNull: true,
      unique: true,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    fullname: {
      type: 'TEXT',
      notNull: true,
    },
  });
};
 
exports.down = (pgm) => {
  pgm.dropTable('users');
};
```

Simpan berkas migrations tersebut dan kita lanjutkan dengan membuat berkas migrations kedua untuk tabel `authentications`.

Silakan buat berkas migration dengan nama “create table authentications” melalui perintah berikut:

```
npm run migrate create "create table authentications"
```

Pastikan berkas migrations baru terbuat:


![2021080511524228c95fe63a43594b29b3fb98687a805a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2fc2ea11-e3f6-49e7-9686-6e4c832fe128)

Buka berkas migration dan tulis kode dalam membuat tabel authentications.

```js
/* eslint-disable camelcase */
 
exports.up = (pgm) => {
  pgm.createTable('authentications', {
    token: {
      type: 'TEXT',
      notNull: true,
    },
  });
};
 
exports.down = (pgm) => {
  pgm.dropTable('authentications');
};
```

Simpan berkas migration tersebut. Selanjutnya kita akan mengeksekusi migration pada database aplikasi dan testing.

Silakan eksekusi kedua migration pada database aplikasi dengan perintah:

```
npm run migrate up
```

Hasilnya:


![20210805115348f3a5f0b67d22aafbbaad3706ec11cfad](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b18dc494-cd12-492d-855b-11907394f532)

Eksekusi juga migrations untuk database testing dengan perintah:

```
npm run migrate:test up
```

Hasilnya:

![20210805115428ce7ecc99b7b440573c78c47186071981](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f1a5fefa-933e-4745-a755-dfe7b0765204)

Mantap! Sekarang database authapi dan authapi_test memiliki tabel users dan authentications di dalamnya.

Selanjutnya, kita buat pool connection yang dibutuhkan dalam mengakses postgres database. Silakan buat berkas pool.js di dalam folder baru dengan lokasi *Infrastructures/database/postgres*.

![20210805115511a5b931950c66d1b2f517f10562e86862](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/5e247ec7-397b-4ab4-9832-a767049eceba)

Kemudian di dalam berkas `pool.js` tuliskan kode berikut:

```js
/* istanbul ignore file */
const { Pool } = require('pg');
 
const testConfig = {
  host: process.env.PGHOST_TEST,
  port: process.env.PGPORT_TEST,
  user: process.env.PGUSER_TEST,
  password: process.env.PGPASSWORD_TEST,
  database: process.env.PGDATABASE_TEST,
};
 
const pool = process.env.NODE_ENV === 'test' ? new Pool(testConfig) : new Pool();
 
module.exports = pool;
```

Komentar kode istanbul ignore file berfungsi untuk memberitahu Jest bahwa berkas ini (pool.js) tidak perlu diuji. Berkas ini akan diabaikan oleh jest dan tidak akan masuk ke dalam laporan coverage test.

Connection pool digunakan untuk mengakses database aplikasi maupun pengujian. Nilai dari konfigurasi connection pool ditentukan oleh nilai environment variable NODE_ENV. Jika nilai `NODE_ENV` tersebut “test”, connection pool akan menggunakan database testing. Selain itu, connection pool akan menggunakan database utama.

Sebagai informasi, ketika node process dijalankan oleh Jest (itu berarti menjalankan pengujian), environment variable NODE_ENV secara otomatis akan bernilai “test”. Jadi, kita tidak perlu mendefinisikan nilai NODE_ENV secara manual.

Simpan perubahan pada berkas pool.js dan kebutuhan database sudah selesai.

#### **Menyiapkan Kebutuhan Testing**

Setelah kebutuhan database sudah siap, sekarang kita lanjut menyiapkan beberapa kebutuhan untuk pengujian nanti. Kebutuhannya adalah membuat class Helper yang berfungsi untuk mengelola dan membersihkan database pengujian selama kebutuhan testing nantinya.

Silakan buat folder baru bernama `tests` di root proyek. Kemudian buat dua berkas JavaScript baru di dalamnya dengan nama `UsersTableTestHelper.js` dan `AuthenticationsTableTestHelper.js`.

![20210805115738bb38805621f81b71b619bc385127e452](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/379eb59f-ec51-4acb-97d9-51a1b8139f4c)

Di dalam kedua berkas tersebut, tuliskan kode berikut:

```js
// UsersTableTestHelper.js

/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');
 
const UsersTableTestHelper = {
  async addUser({
    id = 'user-123', username = 'dicoding', password = 'secret', fullname = 'Dicoding Indonesia',
  }) {
    const query = {
      text: 'INSERT INTO users VALUES($1, $2, $3, $4)',
      values: [id, username, password, fullname],
    };
 
    await pool.query(query);
  },
 
  async findUsersById(id) {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id],
    };
 
    const result = await pool.query(query);
    return result.rows;
  },
 
  async cleanTable() {
    await pool.query('TRUNCATE TABLE users');
  },
};
 
module.exports = UsersTableTestHelper;
```

```js
// AuthenticationsTableTestHelper.js

/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');
 
const AuthenticationsTableTestHelper = {
  async addToken(token) {
    const query = {
      text: 'INSERT INTO authentications VALUES($1)',
      values: [token],
    };
 
    await pool.query(query);
  },
 
  async findToken(token) {
    const query = {
      text: 'SELECT token FROM authentications WHERE token = $1',
      values: [token],
    };
 
    const result = await pool.query(query);
 
    return result.rows;
  },
  async cleanTable() {
    await pool.query('TRUNCATE TABLE authentications');
  },
};
 
module.exports = AuthenticationsTableTestHelper;
```

Ingat, kode di atas hanya digunakan untuk membantu proses pengujian saja, tidak digunakan sebagai kode production. Jadi Anda tidak perlu khawatir bila kode tidak dituliskan dengan TDD, karena memang kode tersebut tidak perlu diuji.

Simpan perubahan kedua berkas tersebut. Kini persiapan kebutuhan pengujian sudah selesai.

### **Membuat Custom Error**

Setelah persiapan proyek selesai, saatnya kita mulai *ngoding*. Sebelum menulis fitur aplikasi, kita lakukan pemanasan dulu dengan membuat custom error yang akan digunakan dalam beberapa kode untuk membangkitkan eror.

Custom error yang akan dibuat adalah `ClientError`, `InvariantError`, `AuthenticationError`, dan `NotFoundError`. Berikut penjelasannya:

- `ClientError` (extends dari Error) : Custom error yang mengindikasikan eror karena masalah yang terjadi pada client. ClientError ini bersifat abstrak karena client error bisa lebih spesifik. Sebaiknya Anda tidak membangkitkan error menggunakan class ini secara langsung, gunakan turunannya saja.
- `InvariantError` (extends dari ClientError) : Custom error yang mengindikasikan eror karena kesalahan bisnis logic pada data yang dikirimkan oleh client. Kesalahan validasi data merupakan salah satu InvariantError.
- `AuthenticationError` (extends dari ClientError) : Custom error yang mengindikasikan eror karena masalah autentikasi. Contohnya password yang diberikan salah dan refresh token yang diberikan tidak valid.
- `NotFoundError` (extends dari ClientError) : Custom error yang mengindikasikan eror karena resource yang diminta client tidak ditemukan.
  
`ClientError` dan setiap turunannya harus memiliki properti statusCode. Properti tersebut digunakan sebagai response code bila terjadi ClientError. Kami rasa, Anda sudah mengerti akan hal ini, bukan?

Oke, sekarang kita mulai membuat custom error `ClientError` terlebih dahulu. Buatlah berkas baru dengan nama `ClientError.js` pada *Commons/exceptions* dan `ClientError.test.js` pada *Commons/exceptions/_test*.


![20210805144528fb919a2c42d47ea6d6d81cffb7fbbd0d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/3f769f8b-eb52-4168-9c10-1e87fcbfea9b)

Seluruh berkas testing akan kita simpan dalam folder *_test* sesuai dengan lokasi berkas yang akan diuji.

Kita akan menerapkan kultur TDD dalam menulis kode aplikasi. Sehingga, kita akan menuliskan kode testing terlebih dahulu sebelum kode aplikasi.

Jadi, buka berkas `ClientError.test.js` dan tulis kode testing berikut:

```js
// ClientError.test.js

const ClientError = require('../ClientError');
 
describe('ClientError', () => {
  it('should throw error when directly use it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});
```

Supaya Anda terbiasa dan lancar dalam menulis kode testing, kami sangat merekomendasikan untuk menulis kode yang diberikan secara mandiri daripada menyalin (*copy*) dan menempel (*paste*) secara mentah-mentah.

Karena kita menginginkan `ClientError` bersifat abstrak, maka skenario pengujian yang dituliskan adalah memastikan error dibangkitkan bila terjadi pembuatan *instance* langsung dari `ClientError`.

Simpan kode testing `ClientError.test.js` dan jalankan pengujian dengan perintah:

```
npm run test:watch
```

Hasil pengujiannya akan eror:

![202108051451059fdb5980cd309dd3a0ceb45d6964108e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/3d847b36-a730-4df7-b3e2-4e9a740fd05e)

Sekarang ayo kita buat pengujiannya menjadi hijau dengan menuliskan kode berikut:

```js
// ClientError.js

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
 
    if (this.constructor.name === 'ClientError') {
      throw new Error('cannot instantiate abstract class');
    }
 
    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}
 
module.exports = ClientError;
```

Simpan perubahan kode `ClientError.js` sehingga pengujiannya akan menjadi hijau.

![202108051452210e6064feeb17263d179334a5e1424d24](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/18be38ed-0b0b-4ece-b06c-a6465be7513d)

Mantap! Pada laporan coverage test menunjukkan ada baris yang tidak tercangkup oleh pengujian, yakni baris 9-10. Untuk mencakup kode tersebut, kita butuh skenario yang tidak membangkitkan eror. Artinya, baris kode tersebut akan tercangkup ketika menguji pembuatan custom error turunan dari `ClientError`. Mari kita beranjak ke custom error selanjutnya.

Kita lanjutkan dengan membuat `InvariantError`. Silakan buat berkas JavaScript baru bernama `InvariantError.js` dalam *Commons/exceptions* dan `InvariantError.test.js` pada *Commons/exceptions/_test*.

![20210805145317bfccf1c609b06c81480c4e13e33d9aa8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/95ce8372-ddb2-4b54-90cb-8fd6161a4b97)

Selanjutnya, tulis skenario pengujian untuk menguji custom error InvarintError.js.

```js
const InvariantError = require('../InvariantError');
 
describe('InvariantError', () => {
  it('should create an error correctly', () => {
    const invariantError = new InvariantError('an error occurs');
 
    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('an error occurs');
    expect(invariantError.name).toEqual('InvariantError');
  });
});
```

Skenario pengujian tersebut berfokus pada pembuatan instance `InvariantError`, seperti memastikan objek yang dibuat merupakan instance dan turunan dari `InvariantError`, `ClientError`, dan `Error`. Dengan cara memastikan instance `InvariantError` yang terbentuk memiliki nilai properti yang sesuai.

Simpan kode testing `InvariantError.test.js` dan pengujiannya kembali merah seperti di bawah ini.

![20210a805145508f34490566fb593eac52db9736b5c2531](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/bc5a482d-ce67-4aff-9483-0ed1a1daec79)

Mari hijaukan pengujian dengan menuliskan kode berikut pada `InvariantError.js.`

```js
// InvariantError.js

const ClientError = require('./ClientError');
 
class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}
 
module.exports = InvariantError;
```

Simpan kode `InvariantError.js` sehingga pengujiannya kini menjadi hijau.


![202108051457075ff55b937d0bef7fe8f90d38bd206ce8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9fa4b2d4-dae7-44d6-b55e-9eb703c88886)

Selain itu Anda juga bisa melihat coverage test saat ini menjadi 100%. Hal tersebut menandakan baris kode 9-10 pada `ClientError.js` sudah tercakup oleh kode testing.

Kita lanjut ke custom error AuthenticationError. Buat berkas baru dengan nama `AuthenticationError.js` pada *Commons/exceptions* dan `AuthenticationError.test.js` pada *Commons/exceptions/_test*.

Kemudian tuliskan skenario pengujian berikut:

```js
// AuthenticationError.test.js

const AuthenticationError = require('../AuthenticationError');
 
describe('AuthenticationError', () => {
  it('should create AuthenticationError correctly', () => {
    const authenticationError = new AuthenticationError('authentication error!');
 
    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.message).toEqual('authentication error!');
    expect(authenticationError.name).toEqual('AuthenticationError');
  });
});
```

Kode pengujian yang ditulis serupa dengan pengujian `InvariantError`, di mana kita memastikan pembuatan instance `AuthenticationError` benar.

Simpan perubahan kode `AuthenticationError.test.js` dan pengujiannya akan kembali merah.


![20210805145836c485e85ce3547562214e85b388acae62](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/984003c1-dd1e-40b1-b60b-c4c62169d45c)

Ayo kita buat pengujian hijau dengan menuliskan kode berikut pada `AuthenticationError`.

```js
// AuthenticationError.js

const ClientError = require('./ClientError');
 
class AuthenticationError extends ClientError {
  constructor(message) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}
 
module.exports = AuthenticationError;
```

Simpan kode `AuthenticationError.js` sehingga pengujiannya akan kembali hijau.

![202108051501126f2edd5f7375a17826c2329b351ede25](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/145eb5f3-408b-42c9-a222-62c335cd98a3)

Kita beranjak ke custom error terakhir yakni `NotFoundError`. Silakan buat berkas baru bernama `NotFoundError.js `pada *Commons/exceptions* dan `NotFoundError.test.js` pada *Commons/exceptions/_test*.

Kemudian tuliskan skenario pengujian berikut:

```js
// NotFoundError.test.js

const NotFoundError = require('../NotFoundError');
 
describe('NotFoundError', () => {
  it('should create error correctly', () => {
    const notFoundError = new NotFoundError('not found!');
 
    expect(notFoundError.message).toEqual('not found!');
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
```

Simpan kode testing `NotFoundError.test` dan pengujiannya kembali merah.

![20210805150346f17e2ad644c8b1cb6aec747920e39624](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/69a6c359-bc10-4068-8c83-7c6133e9cedd)

Hijaukan pengujian dengan menuliskan kode berikut dalam berkas `NotFoundError.js`:

```js
// NotFoundError.js

const ClientError = require('./ClientError');
 
class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}
 
module.exports = NotFoundError;
```

Simpan perubahan kode tersebut sehingga pengujiannya kembali hijau.


![20210805150458ea95e94b53871bb5a587856cd61a3148](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/dce6f46f-4f70-49da-9516-405ddb6c403b)

Mantap! Seluruh pembuatan custom error untuk kebutuhan proyek kita telah selesai. Bagaimana, sudah cukup pemanasannya? 

Pada materi selanjutnya, kita akan mulai membangun fitur Auth API. API tersebut memiliki beberapa kegunaan, antara lain:

- Melayani permintaan registrasi pengguna;
- Mendapatkan autentikasi atau proses login;
- Memperbarui autentikasi atau proses refresh access token;
- Menghapus autentikasi atau proses logout;

### **Membangun Fitur Registrasi Pengguna - Membuat User Domain**

Mari kita mulai dengan membangun fitur registrasi pengguna. Dengan fitur ini, client diharapkan dapat mendaftarkan entitas sebagai pengguna. Melalui registrasi, pengguna akan mengirimkan kredensial yang ia miliki untuk digunakan pada proses autentikasi nantinya. Oke, bagaimana spesifikasi untuk fitur kali ini?

Berikut adalah *acceptance scenario*-nya:

Fitur: Registrasi Pengguna
Sebagai seorang pengguna, saya ingin mendaftarkan diri sebagai entitas untuk proses autentikasi.
 
    Payload:
    - username (string)
    - password (string)
    - fullname (string)
    
    Spesifikasi:
    - Ketika mendaftar tanpa memberikan entitas yang dibutuhkan:
      - maka error
    - Ketika mendaftar dengan memberikan entitas yang tipe datanya tidak sesuai: 
      - maka error
    - Ketika mendaftar dengan username lebih dari 50 karakter:
      - maka error
    - Ketika mendaftar dengan username yang mengandung karakter terlarang:
      - maka error 
    - Ketika mendaftar dengan username yang sudah digunakan:
      - maka error
    - Ketika mendaftar dengan payload yang benar
      - maka user baru harus terbuat
    
    Catatan sisi sistem:
    - Enkripsi password user
    - Simpan user baru pada database
    - Kembalikan permintaan pengguna dengan nilai user yang dimasukkan

Oke sudah paham dengan spesifikasi fiturnya? Yuk kita mulai.

#### **Membuat User Domain**

Kita mulai dengan membuat kebutuhan domain untuk fitur registrasi pengguna. Di dalam domain, kita akan membuat dua hal, yaitu `entitas` dan `UserRepository abstrak/interface`. Kita mulai dengan membuat entitas terlebih dahulu.

##### **Membuat Entities User Domain**

Seperti yang sudah kita ketahui, entitas merupakan sebuah objek yang memiliki set struktur data dan method. Kita membutuhkan entitas domain untuk memastikan data yang dibutuhkan dalam melakukan sebuah proses selalu terpenuhi dan sesuai.

Pada fitur registrasi pengguna, kita akan membuat dua domain entitas yakni `RegisterUser` dan `RegisteredUser`. Entitas `RegisterUser` digunakan untuk menampung data yang hendak dimasukan ke database melalui repository, sedangkan `RegisteredUser` digunakan untuk menampung data yang dihasilkan oleh repository setelah memasukkan user baru. Jelas?

Yuk, kita mulai membuat entitas `RegisterUser`. Silakan buat berkas JavaScript baru dengan nama `RegisterUser.js` pada *Domains/users/entities/* dan `RegisterUser.test.js` pada *Domains/users/entities/_test*.

![202108301224093496d8af4d56cd01342f64b42610a545](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/7856fe0b-8614-4820-9c93-6ba6cb238f20)

Ingat TDD! Mulailah dengan menulis skenario testing terlebih dahulu. Kita akan menguji pembuatan objek `RegisterUser`, yang di mana objek tersebut harus sesuai dengan a*cceptance scenario*. 

Mari kita menulis kode testing pertama :

```js
// RegisterUser.test.js

const RegisterUser = require('../RegisterUser');
 
describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };
 
    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
});
```

Simpan kode testing R`egisterUser.test.js` dan kini pengujiannya akan merah:

![20210805165658d774570baf789857a82544d149c89e5e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/babf429e-5cbd-4a85-adcd-435b2cecc77e)

Sebelum beranjak, mungkin Anda bertanya mengapa pesan error yang dibangkitkan terlihat memiliki format tertentu? Pertanyaan yang bagus!

Ketahuilah bahwa `kita tidak ingin kode bisnis yang ada dalam folder Domains dan Applications memiliki ketergantungan terhadap folder lain`, termasuk folder Commons. Kita ingin kode yang ada dalam dua folder tersebut pure tanpa campur tangan framework, tools, termasuk penanganan error yang spesifik berdasarkan interface (HTTP Error). Hal ini dilakukan supaya kode bisnis mudah diadaptasi oleh berbagai framework, tools, maupun interface.

Sehingga, dalam membangkitkan eror di level Domain dan Application, kita akan tetap menggunakan native Error yang disediakan oleh JavaScript. Kemudian untuk menspesifikasikan eror secara lebih detail, kita memanfaatkan pesan terformat seperti yang Anda lihat pada skenario pengujian. Jangan khawatir jika pesannya sulit dibaca oleh pengguna karena kita akan menerjemahkan pesan tersebut ke bahasa yang mudah dimengerti dengan memanfaatkan HTTP Error. Namun itu nanti, bukan di-level Domain dan Application. Semoga Anda memahami penjelasan tersebut, ya.

Selanjutnya kita akan membuat pengujian kembali hijau dengan menuliskan kode berikut pada `RegisterUser.js`.

```js
// RegisterUser.js

class RegisterUser {
  constructor({ username, password, fullname }) {
    if (!username || !password || !fullname) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }
  }
}
 
module.exports = RegisterUser;
```

Simpan perubahan kode `RegisterUser.js` sehingga pengujiannya kembali hijau.


![202108051704540ca7d314758681a3b21279c916947f43](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f30b43d3-0ecd-459a-92d2-d05ea03f9e81)

Untuk mempercepat proses penyampaian materi dan tidak bertele-tele, kami akan mempersingkat proses TDD mulai saat ini dan seterusnya. Kami akan menuliskan skenario pengujian secara lengkap di awal kemudian menuliskan kode aplikasi untuk memenuhi pengujian tersebut. Namun, dalam proses TDD yang sebenarnya diharapkan untuk menuliskan pengujian secara berurut dan sekecil mungkin. Tetap gunakan pola *red-green-refactor* ketika Anda menuliskan kode di proyek nyata.

Oke, kita lanjut. Tuliskan skenario pengujian (lengkap) berikut pada `RegisterUser.test.js`.

```js
// RegisterUser.test.js

const RegisterUser = require('../RegisterUser');
 
describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };
 
    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
 
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      username: 123,
      fullname: true,
      password: 'abc',
    };
    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should throw error when username contains more than 50 character', () => {
    // Arrange
    const payload = {
      username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
      fullname: 'Dicoding Indonesia',
      password: 'abc',
    };
    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });
  it('should throw error when username contains restricted character', () => {
    // Arrange
    const payload = {
      username: 'dico ding',
      fullname: 'dicoding',
      password: 'abc',
    };
    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  });
  it('should create registerUser object correctly', () => {
    // Arrange
    const payload = {
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
      password: 'abc',
    };
    // Action
    const { username, fullname, password } = new RegisterUser(payload);
    // Assert
    expect(username).toEqual(payload.username);
    expect(fullname).toEqual(payload.fullname);
    expect(password).toEqual(payload.password);
  });
});
```

Simpan kode testing `RegisterUser.test.js` dan kini terdapat 3 pengujian yang merah.

![20210805170845e803db955334ec9f0e74417f41c53dfb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b0bb60d8-1324-42f0-a03e-62c23e7160f7)

Lanjut tulis kode berikut pada `RegisterUser.js` untuk membuat pengujian menjadi hijau.

```js
// RegisterUser.js

class RegisterUser {
  constructor({ username, password, fullname }) {
    if (!username || !password || !fullname) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }
 
    if (typeof username !== 'string' || typeof password !== 'string' || typeof fullname !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
 
    if (username.length > 50) {
      throw new Error('REGISTER_USER.USERNAME_LIMIT_CHAR');
    }
 
    if (!username.match(/^[a-zA-Z1-9_]+$/)) {
      throw new Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    }
 
    this.username = username;
    this.password = password;
    this.fullname = fullname;
  }
}
 
module.exports = RegisterUser;
```

Sekarang pengujian kembali hijau.

![20210805171016adb7a7b885fc48623978d17e79a492e8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4c15bba6-f7e1-4f16-aa0d-37d6f63504c2)

Jangan lupa untuk refactor kode yang sudah dituliskan agar lebih baik lagi. Anda bebas mengubah kode (dalam hal memperbaiki kode) selama pengujiannya tetap hijau. Pada kasus ini, kita bisa memindahkan proses validasi ke fungsi yang terpisah dan mengubah pola regex /^[a-zA-Z1-9_]+$/ menggunakan /^[\w]+$/ (cara cepat untuk pola a-zA-Z1-9_).

```js
// RegisterUser.js

class RegisterUser {
  constructor(payload) {
    this._verifyPayload(payload);
 
    const { username, password, fullname } = payload;
 
    this.username = username;
    this.password = password;
    this.fullname = fullname;
  }
 
  _verifyPayload({ username, password, fullname }) {
    if (!username || !password || !fullname) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }
 
    if (typeof username !== 'string' || typeof password !== 'string' || typeof fullname !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
 
    if (username.length > 50) {
      throw new Error('REGISTER_USER.USERNAME_LIMIT_CHAR');
    }
 
    if (!username.match(/^[\w]+$/)) {
      throw new Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}
 
module.exports = RegisterUser;
```

Simpan perubahan dan kita beranjak membuat entitas `RegisteredUser`.

Mari kita ingat kembali. Fungsi dari entitas `RegisteredUser` adalah untuk menampung data pengguna yang baru saja dimasukkan ke database. Data di dalamnya berupa `id`, `username`, dan `fullname` user. `RegisteredUser` juga digunakan sebagai response dari permintaan registrasi pengguna. Sehingga, di sini tidak ada data password karena ia termasuk data sensitif.

Silakan buat berkas JavaScript baru dengan nama `RegisteredUser.js` pada *Domains/users/entities/* dan `RegisteredUser.test.js` pada *Domains/users/entities/_test/*.

Kemudian tulis skenario pengujian untuk `RegisteredUser` seperti berikut:

```js
// RegisteredUser.test.js

const RegisteredUser = require('../RegisteredUser');
 
describe('a RegisteredUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
    };
 
    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
 
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
    };
 
    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
 
  it('should create registeredUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
    };
 
    // Action
    const registeredUser = new RegisteredUser(payload);
 
    // Assert
    expect(registeredUser.id).toEqual(payload.id);
    expect(registeredUser.username).toEqual(payload.username);
    expect(registeredUser.fullname).toEqual(payload.fullname);
  });
});
```

Simpan kode testing `RegisteredUser.test.js` sehingga akan ada 3 pengujian yang merah:

![20210805172121ab7e8a6c163bb957ca0d72ae2746fcdb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b958df56-4b25-4ecf-8480-c1000eba591b)

Ayo buat pengujiannya kembali hijau dengan mengimplementasikan kode berikut pada `RegisteredUser.js`.

```js
// RegisteredUser.js

class RegisteredUser {
  constructor(payload) {
    this._verifyPayload(payload);
 
    const { id, username, fullname } = payload;
 
    this.id = id;
    this.username = username;
    this.fullname = fullname;
  }
 
  _verifyPayload({ id, username, fullname }) {
    if (!id || !username || !fullname) {
      throw new Error('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }
 
    if (typeof id !== 'string' || typeof username !== 'string' || typeof fullname !== 'string') {
      throw new Error('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}
 
module.exports = RegisteredUser;
```

Simpan perubahan kode tersebut dan pengujian akan kembali hijau.

![202108051724045a189d1c0c121242809c47f75c3f1577](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/aca5c62b-94f2-446c-9011-a8213006b0ee)

Kebutuhan entities untuk fitur registrasi user selesai. Kita lanjutkan dengan membuat `UserRepository` abstrak/interface.

##### **Membuat UserRepository Interface**

Kita ingin logika bisnis terbebas dari implementasi framework atau tools luar, tetapi bagaimana caranya suatu proses bisnis bersentuhan dengan database untuk menyimpan suatu data? Jawabannya adalah melalui interface.

Interface merupakan teknik dalam mendefinisikan kemampuan (*behavior*) objek, tetapi tanpa sebuah implementasi yang nyata, kemampuan tersebut bersifat abstrak. Meskipun kemampuan objek bersifat abstrak, objek interface nyatanya cukup untuk digunakan dalam menentukan alur proses bisnis aplikasi (pada use case). Padahal untuk menjalankan proses bisnisnya, tentu kita butuh objek konkritnya.

Jika Anda familiar dengan bahasa pemrograman Java, Kotlin, C#, atau bahasa pemrograman yang kental dengan paradigma OOP, tentunya Anda familiar dengan hadirnya Interface. JavaScript sendiri sebenarnya tidak mengenal interface, namun kita tetap bisa membuat konsep interface melalui teknik inheritance class.

Dalam level domain users, kita perlu mendefinisikan interface `UserRepository`. Interface `UserRepository` nantinya akan digunakan oleh use case dalam menentukkan alur proses bisnis. Repository pada proyek kita berperan sebagai jembatan untuk memproses domain model terhadap agen eksternal, seperti database, queue, storage, dan sebagainya.

Jadi, Anda sudah paham kan apa itu Interface, User Repository Interface, dan fungsi Repository? Jika belum, silakan baca kembali penjelasannya secara perlahan atau Anda boleh bertanya pada forum diskusi. Jika sudah, yuk sekarang kita buat interface dari `UserRepository`.

Silakan buat berkas JavaScript baru bernama `UserRepository.js` pada *Domains/users/* dan `UserRepository.test.js` pada *Domains/users/_test*.


![2021080517272891f0c0f70d4fd8f6f84323c772ed00f3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ea0512cd-0bb4-4253-92bc-36447da4d132)

`UserRepository` merupakan objek yang memiliki kumpulan fungsi, di mana fungsi tersebut digunakan untuk berinteraksi dengan database (agen eksternal) dalam cakupan domain users. Untuk membangun fitur registrasi pengguna, kita membutuhkan dua fungsi pada UserRepository, yakni `addUser` dan `verifyAvailableUsername`. `addUser` digunakan untuk menyimpan user baru ke database, sedangkan `verifyAvailableUsername` digunakan untuk memeriksa keunikan username baru dari database. 

Perlu diingat kembali, kemampuan atau fungsi `UserRepository` di sini bersifat abstrak. Sehingga, kita tidak akan menulis cara menyimpan user baru ke database atau memverifikasi keunikan username dari database, tetapi cukup mendefinisikan fungsi-fungsinya saja. Supaya tidak ada yang menggunakan fungsi langsung dari objek abstrak ini, maka kita buat fungsinya membangkitkan error.

Saatnya menuliskan kode! Kita mulai dari pengujian. Karena kita membuat objek UserRepository abstrak, ujilah objek tersebut untuk memastikan *behavior*-nya bersifat abstrak dengan mengembalikan sebuah error.

```js
// UserRepository.test.js

const UserRepository = require('../UserRepository');
 
describe('UserRepository interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    // Arrange
    const userRepository = new UserRepository();
 
    // Action and Assert
    await expect(userRepository.addUser({})).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
```

Mengapa kita menggunakan *async/await* dalam menguji fungsi repository interface? Hal tersebut karena proses transaksi dengan agen eksternal seperti database membutuhkan operasi asynchronous. Sehingga, fungsi pada repository interface yang berhubungan dengan agen external (tak hanya database) kita buat asynchronous secara *default*.

Jika Anda belum familier dengan pengujian fungsi asynchronous di Jest, silakan simak dokumentasi berikut: [Testing Asynchronous Code using Async/Await](https://jestjs.io/docs/asynchronous#asyncawait)”

Simpan kode testing UserRepository.test.js dan kini pengujiannya kembali merah:

![2021080517311445a5781c697609cb69769989a6beed86](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a01afa98-40ea-45db-b38b-006a478c765f)

Mari kita buat kode `UserRepository` interface pada berkas `UserRepository.js` seperti ini:

```js
// UserRepository.js

class UserRepository {
  async addUser(registerUser) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
 
  async verifyAvailableUsername(username) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}
 
module.exports = UserRepository;
```

Sekarang pengujian akan kembali hijau.

![202108051733178d57ae39d0b35f2a1f2026f1ba5aa55f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4df28e3f-fd6a-4e35-9d2d-5e148d62a233)

Mantap! Kebutuhan Domains sudah selesai. Pada materi selanjutnya kita akan mendefinisikan alur bisnis dalam bentuk use case pada folder Applications.

### **Membangun Fitur Registrasi Pengguna - Membuat AddUser Use Case dan PasswordHash Interface**

Setelah urusan Domains alias Enterprise Business Layer selesai, sekarang mari kita beranjak untuk mendefinisikan alur bisnis dalam menambahkan user baru. Ingat kembali bahwa seluruh alur bisnis pada aplikasi kita hanya akan ditulis dalam bentuk *use case* level Application Business Layer alias folder Applications. Bila nantinya aplikasi Anda masih memiliki alur bisnis logika di luar dari *use case*, itu berarti arsitektur aplikasi Anda masih belum *clean*.

Sebelum menulis kode use case, kita perlu mengetahui seperti apa alur bisnis dalam menambahkan user baru. Perhatikan alurnya di bawah ini:

- Request handler memanggil use case dan memberikan payload yang dibutuhkan use case (use case payload) seperti username, password, dan fullname.
- Memverifikasi keunikan username pada database.
- Hashing password yang diberikan.
- Membuat domain model RegisterUser berdasarkan payload dan password sudah di-hash.
- Memasukkan RegisterUser ke database.

Jika alurnya ditelaah kembali, ternyata ada satu alur yang belum kita siapkan kebutuhannya yaitu *hashing* password. Agar proses *hash* mudah dan memiliki standar, kita akan memanfaatkan tools luar seperti bcrypt.

Namun, perlu diingat, Domains dan Applications sebisa mungkin terhindar dari penerapan framework atau tools luar agar mudah diadaptasi bila terjadi perubahan. Oleh karena itu, kita akan menghindari penulisan kode yang memiliki dependency terhadap tools luar. Solusinya, kita akan menggunakan teknik yang sama seperti Repository yaitu membuat interface untuk PasswordHash.

Proses hashing tidak terikat dengan subdomain mana pun, tetapi ia merupakan proses yang dibutuhkan oleh use case pada level Applications. Jadi, tempat terbaik untuk menyimpan PasswordHash interface adalah di folder Applications. Yuk, kita buat sekarang.

#### **Membuat PasswordHash Interface**

Silakan buat berkas JavaScript baru dengan nama `PasswordHash.js` pada *Applications/security/PasswordHash.js* dan `PasswordHash.test.js` pada *Applications/security/_test/PasswordHash.test.js*.

![dos_3859185d8da44b30c23e3622e9c4686220210831135128](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a3a57212-0995-482e-af67-d7167fd73690)

PasswordHash merupakan objek yang memiliki fungsi untuk melakukan proses *hash* yang dibutuhkan oleh use case. Untuk saat ini, kita hanya membutuhkan fungsi dalam hashing password saja. Jadi, `PasswordHash` hanya memiliki satu fungsi dengan nama `hash`. 

Behavior dari PasswordHash di sini bersifat abstrak. Sehingga, pengujian berfokus untuk memastikan hash membangkitkan eror ketika ia dipanggil. Silakan tulis kode pengujian berikut:

```js
// PasswordHash.test.js

const PasswordHash = require('../PasswordHash');
 
describe('PasswordHash interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    // Arrange
    const passwordHash = new PasswordHash();
 
    // Action & Assert
    await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
```

Simpan perubahan kode dan pengujian akan menjadi merah:

![20210805191040fbd2e7ac098ea7be7153d348e762a12c](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0e1df456-c754-4632-ba17-54257f580ef2)

Hijaukan kembali pengujian dengan menuliskan PasswordHash interface seperti ini:

```js
// PasswordHash.js

class PasswordHash {
  async hash(password) {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }
}
 
module.exports = PasswordHash;
```

Simpan perubahan kode dan pengujian kembali hijau.

![202108051912588272acc8cfc434c0691c7337e64a14db](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/7d899640-2864-40a4-a06b-d78fb9058477)

Mantap! Sekarang kita sudah memiliki seluruh kebutuhan untuk menuliskan *use case*. Jadi, sekarang saatnya kita membuat *use case*.

#### **Membuat AddUserUseCase**

Sebelum membuat use case, kita ketahui dulu sebenarnya seperti apa sih use case di dalam proyek kita ini? Dalam bukunya yang berjudul [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164), Uncle Bob mengatakan:

*"These use cases orchestrate the flow of data to and from the entities, and direct those entities to use their Critical Business Rules to achieve the goals of the use case."*

Mungkin sebagian dari Anda berpikir bahwa definisi yang diberikan terlalu umum dan tidak konkret. Ya memang seperti itu definisinya.

Untuk memudahkan pemahaman, Anggap use case sebagai daftar aksi yang dapat dilakukan oleh aplikasi. Pada use case juga, kita mendefinisikan langkah demi langkah untuk mencapai aksi tersebut. Contohnya, “aksi untuk memasukkan user baru ke database”. Apakah data user baru perlu diverifikasi sebelum masuk ke database? Atau justru tanpa proses verifikasi sama sekali? Semua itu terdefinisikan pada use case.

Namun, ingat! Use case hanya mendefinisikan langkah demi langkahnya saja, ia tidak melakukan pekerjaan yang didefinisikan. Use case adalah *orchestrator* (mandor) bukan *implementor* (pelaksana). Nah, yang melaksanakan tugas adalah repository dan service-service yang dibutuhkan oleh use case untuk mencapai goal sebagai *orchestrator*.

Sampai tahap ini, semoga Anda paham tugas dan fungsi use case.

Lalu, seperti apa bentuk use case? Tidak ada gambaran jelas atau standar bagaimana bentuk use case. Definisi use case tidak terpaku pada bentuk, tetapi tugas dan tanggung jawabnya saja. Tak peduli ia adalah sebuah class atau hanya sekedar fungsi. Di proyek kali ini, kita akan membuat use case dalam bentuk class.

Class use case memiliki satu fungsi public yaitu, `execute`. Fungsi ini digunakan untuk mengeksekusi aksi dari use case. Contoh, fungsi execute dari class `AddUserUseCase` berguna untuk melakukan aksi menambahkan user baru ke aplikasi. Apakah Anda sudah paham? Jika sudah, mari kita mulai membuat `AddUserUseCase`.

Buatlah berkas JavaScript baru bernama `AddUserUseCase.js` pada *Applications/use_case/* dan `AddUserUseCase.test.js` pada *Applications/use_case/_test*.

![20210805192133294b519f3ee236c21114aa683400e8f5](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/bf392860-08cd-4cfc-aca7-464f849960c6)

Mari kita mulai dengan menulis pengujian AddUserUseCase. Tulis skenario pengujian berikut:

```js
// AddUserUseCase.test.js

const RegisterUser = require('../../../Domains/users/entities/RegisterUser');
const RegisteredUser = require('../../../Domains/users/entities/RegisteredUser');
const UserRepository = require('../../../Domains/users/UserRepository');
const PasswordHash = require('../../security/PasswordHash');
const AddUserUseCase = require('../AddUserUseCase');
 
describe('AddUserUseCase', () => {
  it('should orchestrating the add user action correctly', async () => {
    // Arrange
    const useCasePayload = {
      username: 'dicoding',
      password: 'secret',
      fullname: 'Dicoding Indonesia',
    };
    const mockRegisteredUser = new RegisteredUser({
      id: 'user-123',
      username: useCasePayload.username,
      fullname: useCasePayload.fullname,
    });
 
    /** creating dependency of use case */
    const mockUserRepository = new UserRepository();
    const mockPasswordHash = new PasswordHash();
 
    /** mocking needed function */
    mockUserRepository.verifyAvailableUsername = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockPasswordHash.hash = jest.fn()
      .mockImplementation(() => Promise.resolve('encrypted_password'));
    mockUserRepository.addUser = jest.fn()
      .mockImplementation(() => Promise.resolve(mockRegisteredUser));
 
    /** creating use case instance */
    const getUserUseCase = new AddUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash,
    });
 
    // Action
    const registeredUser = await getUserUseCase.execute(useCasePayload);
 
    // Assert
    expect(registeredUser).toStrictEqual(new RegisteredUser({
      id: 'user-123',
      username: useCasePayload.username,
      fullname: useCasePayload.fullname,
    }));
    expect(mockUserRepository.verifyAvailableUsername).toBeCalledWith(useCasePayload.username);
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.password);
    expect(mockUserRepository.addUser).toBeCalledWith(new RegisterUser({
      username: useCasePayload.username,
      password: 'encrypted_password',
      fullname: useCasePayload.fullname,
    }));
  });
});
```

Wah! Banyak sekali kode testing yang dituliskan. Tenang, jangan khawatir. Simak penjelasannya di bawah ini.

Fungsi dari `AddUserUseCase` adalah mengatur alur dalam melakukan sebuah aksi. Use case akan mengorkestrasikan atau memandori repository dan service yang digunakan agar aksi tersebut berhasil dilakukan. Ketika melakukan pengujian, tentu kita harus fokus menguji fungsi utama dari sistem yang diuji (SUT). Sehingga pengujian pada use case adalah memastikan ia menjadi mandor yang benar agar aksi “memasukkan user” sesuai dengan alur bisnis yang ditetapkan.

`AddUserUseCase` membutuhkan objek `UserRepository` dan `PasswordHash` untuk melakukan tugasnya. Itulah sebabnya kita memberikan dua objek tersebut melalui interface yang sudah dibuat sebelumnya. Karena behavior fungsinya bersifat abstrak, manfaatkanlah Test Double untuk membuat implementasi palsu dari fungsi yang digunakan. 

Pada use case, kita membutuhkan teknik Test Double menggunakan mock. Mengapa? Karena selain mengubah implementasi fungsi, kita juga perlu memastikan fungsi tersebut dipanggil dengan tepat oleh use case.

Simpan perubahan pada kode pengujian dan kini pengujian akan merah.


![20210805192434eb0243f9098963b629326cb7f600d77b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ea889d2e-a844-41e1-80bd-fc1cab024319)

Buat pengujiannya hijau dengan menuliskan kode AddUserUseCase berikut:

```js
// AddUserUseCase.js

const RegisterUser = require('../../Domains/users/entities/RegisterUser');
 
class AddUserUseCase {
  constructor({ userRepository, passwordHash }) {
    this._userRepository = userRepository;
    this._passwordHash = passwordHash;
  }
 
  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);
    await this._userRepository.verifyAvailableUsername(registerUser.username);
    registerUser.password = await this._passwordHash.hash(registerUser.password);
    return this._userRepository.addUser(registerUser);
  }
}
 
module.exports = AddUserUseCase;
```

Simpan perubahan kode pada AddUserUseCase. Sehingga, pengujiannya kini akan kembali hijau.

![20210805192548b6e241dbfd0275a1bcebcd9ce37e24fd](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b72cfb68-e572-4495-97b9-6b9f950dc480)

### **Membangun Fitur Registrasi Pengguna - Implementasi User Repository dan PasswordHash**

Seluruh kebutuhan entities dan alur bisnis sudah selesai. Kini saatnya kita lanjutkan ke layer Infrastruktur untuk membuat implementasi dari `UserRepository` dan `PasswordHash`. Kita akan mulai dengan UserRepository.

#### **Membuat UserRepositoryPostgres**

Repository di level domain hanya sebatas Interface. Walaupun cukup untuk mendefinisikan alur bisnis pada use case, tetapi nyatanya ia tidak bisa digunakan untuk menjalankan aksi. Hal tersebut karena behavior dari Repository domain bersifat abstrak atau butuh diimplementasikan. Sekarang, saatnya kita membuat bentuk konkrit dari `UserRepository`.

Objek `UserRepository` saat ini memiliki dua fungsi yaitu `addUser` dan `verifyAvailableUsername`. Kedua fungsi tersebut membutuhkan database sebagai tempat penyimpanan datanya. Seperti yang sudah diketahui, kita sudah memiliki database Postgres yang disiapkan untuk aplikasi ini. Selain itu, kita juga sudah memiliki dua tabel yaitu users dan authentications.

Database yang akan digunakan adalah PostgreSQL. Sehingga, kita akan membuat `UserRepository` konkrit dengan nama `UserRepositoryPostgres`. Sudah tidak sabar, bukan? Simak langkah-langkahnya di bawah ini.

Silakan buat berkas JavaScript baru bernama `UserRepositoryPostgres.js` pada *Infrastructures/repository* dan `UserRepositoryPostgres.test.js` pada *Infrastructures/repository/_test*.

![202108052012297d00d7cdbad5349cfb9ac0bf0be97d3d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6b435d30-db90-4706-a533-606fb9acd699)

Seperti biasa, kita mulai dengan pengujiannya.

Karena fungsi utama dari `UserRepositoryPostgres` berinteraksi dengan database, maka dalam pengujiannya pun kita perlu bersentuhan dengan database secara langsung. Sehingga kita dapat memastikan secara akurat, `UserRepositoryPostgres` benar bekerja sesuai fungsinya.

Ketika sebuah pengujian sudah bersentuhan dengan database, kita membutuhkan sebuah helper. Helper tersebut digunakan untuk melihat, memasukkan, atau membersihkan data yang dimasukkan ke database selama proses pengujian. Masih ingatkan dengan `UsersTableTestHelper` yang kita buat ketika menyiapkan kebutuhan testing? Nah, di pengujian kali ini, kita akan menggunakan helper tersebut.

Mari kita tulis skenario pengujiannya dengan kode testing berikut:

```js
// UserRepositoryPostgres.test.js

const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const RegisterUser = require('../../../Domains/users/entities/RegisterUser');
const RegisteredUser = require('../../../Domains/users/entities/RegisteredUser');
const pool = require('../../database/postgres/pool');
const UserRepositoryPostgres = require('../UserRepositoryPostgres');
 
describe('UserRepositoryPostgres', () => {
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
 
  afterAll(async () => {
    await pool.end();
  });
 
  describe('verifyAvailableUsername function', () => {
    it('should throw InvariantError when username not available', async () => {
      // Arrange
      await UsersTableTestHelper.addUser({ username: 'dicoding' }); // memasukan user baru dengan username dicoding
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
 
      // Action & Assert
      await expect(userRepositoryPostgres.verifyAvailableUsername('dicoding')).rejects.toThrowError(InvariantError);
    });
 
    it('should not throw InvariantError when username available', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
 
      // Action & Assert
      await expect(userRepositoryPostgres.verifyAvailableUsername('dicoding')).resolves.not.toThrowError(InvariantError);
    });
  });
 
  describe('addUser function', () => {
    it('should persist register user', async () => {
      // Arrange
      const registerUser = new RegisterUser({
        username: 'dicoding',
        password: 'secret_password',
        fullname: 'Dicoding Indonesia',
      });
      const fakeIdGenerator = () => '123'; // stub!
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);
 
      // Action
      await userRepositoryPostgres.addUser(registerUser);
 
      // Assert
      const users = await UsersTableTestHelper.findUsersById('user-123');
      expect(users).toHaveLength(1);
    });
 
    it('should return registered user correctly', async () => {
      // Arrange
      const registerUser = new RegisterUser({
        username: 'dicoding',
        password: 'secret_password',
        fullname: 'Dicoding Indonesia',
      });
      const fakeIdGenerator = () => '123'; // stub!
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);
 
      // Action
      const registeredUser = await userRepositoryPostgres.addUser(registerUser);
 
      // Assert
      expect(registeredUser).toStrictEqual(new RegisteredUser({
        id: 'user-123',
        username: 'dicoding',
        fullname: 'Dicoding Indonesia',
      }));
    });
  });
});
```

Kode di atas memiliki empat buah pengujian. Seperti yang sudah Anda ketahui, setiap pengujian ditandai dengan blok `it`. Mari kita bedah maksud dari keempat pengujiannya.

- *verifyAvailableUsername function should throw InvariantError when username not available*
  
  Ini adalah pengujian untuk behavior fungsi `verifyAvailableUsername`. Fungsi ini memiliki dua kemungkinan, yakni membangkitkan `InvariantError` dan tidak membangkitkan eror. Di pengujian kali ini, kita akan menguji keadaan fungsi ketika username tidak tersedia atau sudah terdaftar di database. Pengujian ini memastikan `verifyAvailableUsername` membangkitkan InvariantError.

  Sebelum melakukan pengujian--*lebih tepatnya pada bagian Arrange*--kita memasukkan data user baru ke database dengan username “dicoding” melalui table helper. Hal ini diperlukan untuk memenuhi skenario pengujian bahwa user dengan username “dicoding” sudah ada di dalam database. Sehingga, `verifyAvailableUsername` seharusnya membangkitkan `InvariantError`.

- *verifyAvailableUsername function should not throw InvariantError when username available*
  
  Ini juga pengujian untuk behavior fungsi `verifyAvailableUsername`. Kebalikan dari pengujian sebelumnya, di sini kita akan menguji keadaan di mana username baru dapat digunakan atau belum ada yang menggunakannya di database. Table helper tidak digunakan pada pengujian ini karena tidak dibutuhkan.

- *addUser function should persist register user*
  
  Ini adalah pengujian untuk behavior fungsi `addUser`. Hal yang diuji yaitu apakah fungsi `addUser` mampu menyimpan user baru pada database dengan benar. Kita menggunakan UsersTableTestHelper.findUsersById untuk menguji apakah user dimasukkan ke database.

- *addUser function should return added user correctly*
  
  Selain dapat menyimpan data di database, fungsi add user juga harus mengembalikan nilai id, username, dan fullname dari user yang baru saja dimasukkan ke database (RegisteredUser). Di sini kita menggunakan table helper untuk melihat apakah data user benar-benar dimasukkan ke dalam database.


Pada skenario di atas juga kita menggunakan `describe` untuk membagi skenario pengujian berdasarkan konteksnya. Kami yakin Anda sudah mengetahui fungsi dari describe ini. Hal baru yang ada di sana adalah penggunaan fungsi `afterEach` dan afte`rAll.

Fungsi `afterEach` dan `afterAll` merupakan fungsi yang digunakan untuk menampung sekumpulan kode yang dijalankan setelah melakukan pengujian. Bedanya fungsi `afterEach` dieksekusi setiap kali fungsi it selesai dijalankan, sedangkan `afterAll` dieksekusi setelah seluruh fungsi it selesai dijalankan. Biasanya kode yang dituliskan di fungsi ini adalah kode cleaning atau teardown. Untuk mengenal lebih dalam kedua fungsi ini disarankan untuk membaca dokumentasi yang diberikan Jest mengenai [Setup and Teardown](https://jestjs.io/docs/setup-teardown). 

Dalam tautan tersebut, Anda juga akan menemukan penggunaan `beforeEach` dan `beforeAll` yang sering digunakan untuk meringkas kode testing yang berulang seperti melakukan setup.

Baik, penjelasan tentang kode pengujian untuk `UserRepositoryPostgres` cukup jelas, bukan? Sekarang simpan perubahannya dan kini terdapat 4 pengujian yang merah:

![20210805202704d7bdbba5567e45357d810646d8984576](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/48e88dc2-9178-45b8-bc70-5dc002766de9)

Sekarang, buat kembali pengujiannya menjadi hijau dengan menuliskan kode berikut pada `UserRepositoryPostgres.js`:

```js
// UserRepositoryPostgres.js

const InvariantError = require('../../Commons/exceptions/InvariantError');
const RegisteredUser = require('../../Domains/users/entities/RegisteredUser');
const UserRepository = require('../../Domains/users/UserRepository');
 
class UserRepositoryPostgres extends UserRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }
 
  async verifyAvailableUsername(username) {
    const query = {
      text: 'SELECT username FROM users WHERE username = $1',
      values: [username],
    };
 
    const result = await this._pool.query(query);
 
    if (result.rowCount) {
      throw new InvariantError('username tidak tersedia');
    }
  }
 
  async addUser(registerUser) {
    const { username, password, fullname } = registerUser;
    const id = `user-${this._idGenerator()}`;
 
    const query = {
      text: 'INSERT INTO users VALUES($1, $2, $3, $4) RETURNING id, username, fullname',
      values: [id, username, password, fullname],
    };
 
    const result = await this._pool.query(query);
 
    return new RegisteredUser({ ...result.rows[0] });
  }
}
 
module.exports = UserRepositoryPostgres;
```

idGenerator adalah [nanoid](https://www.npmjs.com/package/nanoid) yang digunakan untuk membuat nilai id secara unik. Kita menggunakan teknik dependency injection agar mudah dalam melakukan pengujian.

Simpan perubahan kode di atas dan pengujian akan kembali hijau:

![20210805202832ce876326ec74dbc69a9f4b4d7cd1dcde](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2ff2b9ff-4c3e-4674-ae38-71823ee4bae6)

Mantap! UserRepositoryPostgres sudah selesai. Selanjutnya kita buat PasswordHash konkrit.

#### **Membuat BcryptPasswordHash**

Untuk melakukan proses enkripsi, kita akan menggunakan [bcrypt](https://www.npmjs.com/package/bcrypt). Jadi mari kita buat objek konkrit dengan nama `BcryptPasswordHash`. 

Silakan buat berkas JavaScript baru dengan nama `BcryptPasswordHash.js` pada *Infrastructures/security* dan `BcryptPasswordHash.test.js` pada *Infrastructures/security/_test*.

![dos_54bd4dfdc486eb747fdb0d6f848cf66b20210831135504](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9d7eedeb-9c88-4eb2-9a69-6492aba7ae4c)

Kita tulis dulu skenario pengujiannya:

```js
// BcryptPasswordHash.test.js

const bcrypt = require('bcrypt');
const BcryptPasswordHash = require('../BcryptPasswordHash');
 
describe('BcryptPasswordHash', () => {
  describe('hash function', () => {
    it('should encrypt password correctly', async () => {
      // Arrange
      const spyHash = jest.spyOn(bcrypt, 'hash');
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt);
 
      // Action
      const encryptedPassword = await bcryptPasswordHash.hash('plain_password');
 
      // Assert
      expect(typeof encryptedPassword).toEqual('string');
      expect(encryptedPassword).not.toEqual('plain_password');
      expect(spyHash).toBeCalledWith('plain_password', 10); // 10 adalah nilai saltRound default untuk BcryptPasswordHash
    });
  });
});
```

Mari kita bedah pengujiannya. Di sana, terdapat satu pengujian yang kita tuliskan.

- *hash function should encrypt password correctly*

  Skenario ini menguji kebenaran dari fungsi hash dalam mengenkripsi password menggunakan bcrypt. Di sini, kita menggunakan teknik spy untuk melihat apakah fungsi hash dari bcrypt dipanggil dan diperlakukan dengan benar. Di sini juga kita memastikan nilai “plain_password” sudah terenkripsi.

Simpan perubahan kode testing `BcryptPasswordHash.test.js`. Kemudian akan muncul dua pengujian yang merah seperti berikut.

![dos_7820f5f66ec9c88cdbedb6b697fad53620220728142706](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/162bf036-01bc-46a1-a033-2ab4759cd21f)

Sekarang tuliskan kode berikut pada BcryptPasswordHash untuk membuat pengujiannya kembali hijau.

```js
// BcryptPasswordHash.js

const PasswordHash = require('../../Applications/security/PasswordHash');
 
class BcryptPasswordHash extends PasswordHash {
  constructor(bcrypt, saltRound = 10) {
    super();
    this._bcrypt = bcrypt;
    this._saltRound = saltRound;
  }
 
  async hash(password) {
    return this._bcrypt.hash(password, this._saltRound);
  }
}
 
module.exports = BcryptPasswordHash;
```

Simpan perubahan kode dan pengujian akan kembali hijau

![2021080520332416f86da33cb3c2ba68e53ee3274c5280](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ca197f49-a378-4748-b610-ac4d8875467f)

Good job!

### **Membuat Service Locator**

Kita sudah selesai membuat `UserRepositoryPostgres` dan `BcryptPasswordHash`. Selain itu, kita juga sudah memastikan semua yang kita buat berkerja dengan baik dan sesuai melalui pengujian automatis. Selanjutnya, kita akan membuat HTTP server menggunakan repository, use case, dan helper yang sudah kita buat di sana. Tapi tunggu! Sebelum itu, ada hal penting yang perlu Anda ketahui dulu.

#### **Dampak dari Penerapan Dependency Injection**

Masih ingat dengan pola dependency injection (DI)? Sejauh latihan yang sudah dilalui, kita banyak menerapkan pola dependency injection. Manfaat dari menerapkan pola ini adalah hubungan antar objek tidak saling terikat erat, dengan begitu kita dapat menciptakan arsitektur yang clean dan mudah menerapkan test double ketika pengujian. Kami yakin Anda sudah mengetahui dan merasakannya secara langsung.

Salah satu dampak dari pola dependency injection adalah pembuatan instance dari class menjadi rumit, terutama bila ia memiliki dependency yang banyak. Karena, kita perlu menyiapkan seluruh objek yang dibutuhkan ketika membuat suatu class. Contoh, kita sudah membuat `AddUserUseCase` dan kita akan menggunakanya pada route handler nantinya. Pada handler, tentu kita perlu membuat instance dari `AddUserUseCase`. Sedangkan untuk membuat instance tersebut, kita butuh menyiapkan objek yang dibutuhkan, yaitu `UserRepository` dan `AuthenticationTokenManager`. Karena itu, pembuatan instance `AddUserUseCase` menjadi rumit dan mahal. Belum lagi bila `AddUserUseCase` digunakan di banyak handler. Kita perlu mengulang proses pembuatannya yang rumit.

Tenang, setiap masalah pasti ada solusinya. Untuk dapat membuat dan menggunakan instance class yang menerapkan pola DI dengan mudah, kita perlu membuat objek khusus yang memang bertugas untuk mengatur seluruh instances atau services yang diperlukan oleh aplikasi. Objek tersebut dikenal sebagai [Service Locator](https://en.wikipedia.org/wiki/Service_locator_pattern).

#### **Service Locator**

Service locator merupakan objek yang berfungsi untuk mengabstraksikan pembuatan dan pengaksesan sebuah instance class. Sesuai namanya, ketika menggunakan service locator, kita bisa mendapatkan instance secara mudah karena ia berada di satu lokasi saja. Karena service locator menampung banyak instance di dalamnya, ia juga berfungsi sebagai service container. 

Ketahuilah bahwa kita akan menggunakan teknik service locator untuk menyelesaikan masalah dependency injection. Namun, alih-alih kita membuatnya sendiri, kita akan menggunakan package [instances-container](https://github.com/dimasmds/instances-container/blob/master/README.id-ID.md) dalam membuat service locator atau container. Tujuannya untuk meringankan efort dan tentunya lebih optimal. 

Silakan pasang package *instances-container* menggunakan perintah:

```
npm install instances-container
```

Setelah package berhasil dipasang, kemudian buat berkas JavaScript baru dengan nama `container.js` pada *Infrastructures/*.

![dos_9e7e3e8296a4e65e444d8a4c4d522d6320210902154700](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0e9aec73-fb30-442e-8a9b-eecefe2c275d)

Kemudian di dalamnya tulis kode untuk membuat container dan daftarkan seluruh class *use case* dan *services* yang dibutuhkan oleh aplikasi:

```js
/* istanbul ignore file */
 
const { createContainer } = require('instances-container');
 
// external agency
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const pool = require('./database/postgres/pool');
 
// service (repository, helper, manager, etc)
const UserRepositoryPostgres = require('./repository/UserRepositoryPostgres');
const BcryptPasswordHash = require('./security/BcryptPasswordHash');
 
// use case
const AddUserUseCase = require('../Applications/use_case/AddUserUseCase');
const UserRepository = require('../Domains/users/UserRepository');
const PasswordHash = require('../Applications/security/PasswordHash');
 
// creating container
const container = createContainer();
 
// registering services and repository
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: PasswordHash.name,
    Class: BcryptPasswordHash,
    parameter: {
      dependencies: [
        {
          concrete: bcrypt,
        },
      ],
    },
  },
]);
 
// registering use cases
container.register([
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name,
        },
      ],
    },
  },
]);
 
module.exports = container;
```

Objek container yang kita buat merupakan objek yang menampung seluruh instance dari class yang didaftarkan di dalamnya. Untuk mendapatkan instance di dalam container, nantinya kita akan menggunakan fungsi `container.getInstance(key)`. *Key* merupakan kata kunci dalam bentuk string yang digunakan untuk mendapatkan instance.

Pada kode di atas, ketika mendaftarkan class, kita memberikan nilai `Class.name` (contohnya `UserRepository.name`) sebagai *key*. Hal itu bertujuan untuk menghindari kesalahan penulisan (*typo*).

Jangan khawatir bila Anda belum mengerti bagaimana menuliskan konfigurasi untuk mendaftarkan class di package instance-container. Untuk mengetahuinya lebih lanjut, silakan baca [dokumentasi yang disedikan](https://github.com/dimasmds/instances-container/blob/master/README.id-ID.md). Di sana Anda akan mengetahui secara rinci penggunaan instances-container. Kontributor dari package menyediakan dokumentasi dalam Bahasa Indonesia yang harusnya mudah Anda pahami.

Kita tidak perlu menguji kode container.js. karena instances-container sudah teruji ketika mengembangkannya. Itulah sebabnya *istanbul ignore files* ditambahkan di awal kode.

Selain instances-container, Anda juga bisa menggunakan package lain dalam menerapkan service locator seperti:

- [Awilix](https://github.com/jeffijoe/awilix)
- [Bottlejs](https://github.com/young-steveo/bottlejs)

### **Membangun Fitur Registrasi Pengguna - Membuat HTTP Server dan Functional Test**

Kita berada di tahap akhir dalam pembuatan fitur registrasi pengguna. Seluruh kebutuhan untuk menangani fitur ini sudah hampir selesai. Tersisa pembuatan HTTP server yang nantinya akan dijalankan oleh aplikasi kita agar pengguna bisa mengirim permintaan dan kita bisa menanggapinya.

Pada tahap ini kita juga melakukan functional test, yakni menguji seluruh fungsionalitas aplikasi dari hulu ke hilir. Kita ingin memastikan seluruh kode yang sudah dibuat berjalan dengan benar. Ayo kita mulai!

Di sini kita akan membuat HTTP server dan pengujiannya terlebih dahulu. Silakan buat berkas JavaScript baru bernama `createServer`.js pada *Infrastructures/http* dan `createServer.test.js` pada *Infrastructures/http/_test*.

![202108061331523b416b74aa690faf80a30c625e4cbc12](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/032bbf43-c2d0-4961-a70f-f0114e37aff7)

Kita mulai dari skenario pengujian inti dari fitur ini, yaitu “mendaftar user baru dengan benar”. Dari skenario tersebut kita ingin melihat apakah kode yang sudah dibuat bekerja dengan benar.

Silakan tulis pengujian berikut:

```js
// createServer.test.js

const pool = require('../../database/postgres/pool');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const createServer = require('../createServer');
 
describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });
 
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
 
  describe('when POST /users', () => {
    it('should response 201 and persisted user', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.data.addedUser).toBeDefined();
    });
  });
});
```

Kode di atas menguji request `POST /users` dengan payload yang benar. Ia seharusnya mengembalikan response 201 dan membawa data user yang telah dimasukkan.

Simpan kode testing `createServer.test.js`. Kemudian pengujiannya akan menjadi merah seperti di bawah ini:

![202108061333154626e04a84557b86abc7479bbd0a2411](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/15d73633-fc62-4ac4-94d0-a43403362539)

Selanjutnya kita akan membuatnya menjadi hijau dengan menyiapkan HTTP server. Namun, sebelum membuat HTTP server, alangkah baiknya kita siapkan routes dan handler terlebih dahulu. Karena Anda sudah familier dengan Hapi plugin, kita akan membungkus routes dan handler tersebut dalam bentuk Hapi plugin.

Silakan buat berkas `index.js`, `routes.js`, dan `handler.j`s pada *Interfaces/http/api/users*. 

![20210806133315f2d23176f49f8e514d5724f41cacae19](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/594385a3-9f78-4b50-b87b-06ca08fe7e19)

Kita mulai dari routes. Silakan buka berkas `routes.js` dan tulis route konfigurasi berikut:

```js
const routes = (handler) => ([
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
]);
 
module.exports = routes;
```

Simpan berkas `routes.js` dan selanjutnya kita tulis kode handlernya.

Silakan buka berkas `handler.js` dan tuliskan kode berikut:

```js
// handler.js

const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
 
class UsersHandler {
  constructor(container) {
    this._container = container;
 
    this.postUserHandler = this.postUserHandler.bind(this);
  }
 
  async postUserHandler(request, h) {
    const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    const addedUser = await addUserUseCase.execute(request.payload);
 
    const response = h.response({
      status: 'success',
      data: {
        addedUser,
      },
    });
    response.code(201);
    return response;
  }
}
 
module.exports = UsersHandler;
```

Fungsi handler (`postUserHandler`) dalam kode tersebut tidak ada lagi logika yang dituliskan selain untuk merespons permintaan karena semua logic akan ditangani oleh use case. Handler memanggil fungsi `execute` dari use case dan memberikan `request.payload` sebagai payload use case. Handler memiliki akses terhadap instance use case melalui container yang akan dikirim oleh HTTP server melalui plugin `options`. Perhatikan juga bahwa untuk mendapatkan instance dari container, kita menggunakan fungsi` getInstance(key)`.

Simpan berkas `handler.js`. Kemudian kita lanjut untuk membuat plugin `users`.

Silakan buka berkas `index.js` dan tulis kode untuk membuat plugin `users` sebagai berikut:

```js
// index.js

const UsersHandler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'users',
  register: async (server, { container }) => {
    const usersHandler = new UsersHandler(container);
    server.route(routes(usersHandler));
  },
};
```

Simpan berkas `index.js` dan kebutuhan plugin users selesai. Sekarang kita lanjut membuat HTTP server melalui fungsi `createServer` dan mendaftarkan plugin users.

Silakan buka berkas `createServer.js` dan tulis kode berikut:

```js
// createServer.js

const Hapi = require('@hapi/hapi');
const users = require('../../Interfaces/http/api/users');
 
const createServer = async (container) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
  });
 
  await server.register([
    {
      plugin: users,
      options: { container },
    },
  ]);
 
  return server;
};
 
module.exports = createServer;
```

Karena kita memanfaatkan environment variable dalam menetapkan nilai host dan port server, jangan lupa tambahkan nilainya pada berkas `.env`.

```js
## HTTP SERVER
HOST=localhost
PORT=5000
 
## POSTGRES
PGHOST=localhost
PGUSER=developer
PGDATABASE=authapi
PGPASSWORD=supersecretpassword
PGPORT=5432
 
## POSTGRES TEST
PGHOST_TEST=localhost
PGUSER_TEST=developer
PGDATABASE_TEST=authapi_test
PGPASSWORD_TEST=supersecretpassword
PGPORT_TEST=5432
```

Simpan seluruh perubahan yang ada dan kini HTTP server berhasil dibuat. Seharusnya, pengujian sudah kembali hijau.

![20210806134245f0aa44fc008419ac1da5cc4eb25a883a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0fd0795c-3019-452f-bf25-843a8ed3945d)

Mantap! Fitur registrasi pengguna berhasil dibuat.

### **Membangun Fitur Registrasi Pengguna-Menerjemahkan Domain Error ke HTTP Error**

Hakikatnya, Auth API sudah berfungsi dengan baik sesuai harapan. Namun dengan catatan, client selalu memenuhi spesifikasi permintaan seperti memberikan payload request yang tepat. Kita belum mengetahui bagaimana jadinya jika client memberikan payload yang tidak sesuai, apakah server dapat menanganinya dengan baik?

Pada domain, lebih tepatnya entities RegisterUser, kita telah menulis verifikasi payload yang diberikan, seperti mengecek kelengkapan properti, tipe data, dan spesifikasi username. Tentunya Anda masih ingat hal itu, bukan? 

Lalu, jika verifikasinya gagal, apakah server dapat memberikan respon yang sesuai, misalnya seperti response code 400? Semuanya akan terjawab dalam latihan kali ini.

Silakan tambahkan skenario baru pada createServer.test.js untuk menguji beberapa skenario negatif berikut:

- should response 400 when request payload not contain needed property.
- should response 400 when request payload not meet data type specification.
- should response 400 when username more than 50 character.
- should response 400 when username contain restricted character.
- should response 400 when username unavailable.
  
Berikut kodenya:

```js
// createServer.test.js

const pool = require('../../database/postgres/pool');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const createServer = require('../createServer');
 
describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });
 
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
 
  describe('when POST /users', () => {
    it('should response 201 and persisted user', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.data.addedUser).toBeDefined();
    });
 
    it('should response 400 when request payload not contain needed property', async () => {
      // Arrange
      const requestPayload = {
        fullname: 'Dicoding Indonesia',
        password: 'secret',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada');
    });
    it('should response 400 when request payload not meet data type specification', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: ['Dicoding Indonesia'],
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena tipe data tidak sesuai');
    });
    it('should response 400 when username more than 50 character', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena karakter username melebihi batas limit');
    });
    it('should response 400 when username contain restricted character', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding indonesia',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena username mengandung karakter terlarang');
    });
    it('should response 400 when username unavailable', async () => {
      // Arrange
      await UsersTableTestHelper.addUser({ username: 'dicoding' });
      const requestPayload = {
        username: 'dicoding',
        fullname: 'Dicoding Indonesia',
        password: 'super_secret',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('username tidak tersedia');
    });
  });
});
```

Simpan pengujiannya dan kini terdapat 5 pengujian yang gagal.

![20210806151607c4e434b987af40f44136958d88c6b451](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/37943e62-7d03-4dab-95f1-187f04168013)

Itu berarti server kita belum bisa menangani error dengan benar. Coba lihat salah satu hasil pengujian yang gagal.

![20210806151623a994fb877c17aa9b172b770272431396](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/bbba7452-8da3-4bde-8c45-ef0c32aff392)

Salah satu contohnya adalah skenario *should response 400 when request payload not contain needed property* seperti di atas. Ketika payload tidak memiliki properti yang dibutuhkan untuk membuat user baru, pembuatan entities `RegisterUser` akan membangkitkan error. Error yang dibangkitkan tidak ditangani oleh server sehingga menyebabkan response 500.

Masalahnya, eror yang dibangkitkan oleh domain model `RegisterUser` adalah generic error. Ia tidak memiliki status code yang digunakan sebagai nilai response code. Lalu, bagaimana cara server dapat menangani eror tersebut dengan benar? Tidak ada cara lagi selain menerjemahkan domain eror menjadi HTTP error.

Ingat! Tidak semua eror yang ada di Domains dan Applications perlu diterjemahkan. Salah satu eror yang dapat diterjemahkan adalah yang disebabkan oleh kesalahan client. Contohnya, eror yang dibangkitkan pada proses verifikasi payload RegisterUser. Sementara itu, error seperti abstrak method yang belum diimplementasi tidak perlu diterjemahkan karena eror tersebut ditujukan untuk pengembang aplikasi (developer).

Bagaimana cara menerjemahkannya? Kita dapat memetakan secara manual setiap domain eror yang memang perlu diterjemahkan. Setiap eror yang dibangkitkan pada folder Domains dan Applications selalu memberikan format pesan yang jelas. Pesan tersebut akan kita manfaatkan sebagai kunci dalam menerjemahkan domain eror menjadi HTTP Error.

Oleh karena itu, mari kita buat penerjemah error tersebut dengan nama DomainErrorTranslator. 

Silakan buat berkas JavaScript baru bernama `DomainErrorTranslator.js` pada *Commons/exceptions/* dan `DomainErrorTranslator.test.js` pada *Commons/exceptions/_test/*

Tuliskan kode pengujiannya terlebih dahulu seperti di bawah ini. 

```js
// DomainErrorTranslator.test.js

const DomainErrorTranslator = require('../DomainErrorTranslator');
const InvariantError = require('../InvariantError');
 
describe('DomainErrorTranslator', () => {
  it('should translate error correctly', () => {
    expect(DomainErrorTranslator.translate(new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY')))
      .toStrictEqual(new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'));
    expect(DomainErrorTranslator.translate(new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'));
    expect(DomainErrorTranslator.translate(new Error('REGISTER_USER.USERNAME_LIMIT_CHAR')))
      .toStrictEqual(new InvariantError('tidak dapat membuat user baru karena karakter username melebihi batas limit'));
    expect(DomainErrorTranslator.translate(new Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER')))
      .toStrictEqual(new InvariantError('tidak dapat membuat user baru karena username mengandung karakter terlarang'));
  });
 
  it('should return original error when error message is not needed to translate', () => {
    // Arrange
    const error = new Error('some_error_message');
 
    // Action
    const translatedError = DomainErrorTranslator.translate(error);
 
    // Assert
    expect(translatedError).toStrictEqual(error);
  });
});
```

Proses *translate* dilakukan oleh fungsi `DomainErrorTranslator.translate.` Di sana kita menguji apakah fungsi tersebut mampu menerjemahkan eror yang dihasilkan oleh domain. Ingat! Tidak seluruh eror harus diterjemahkan. Untuk saat ini, cukup terjemahkan eror yang dibangkitkan ketika proses verifikasi payload pembuatan RegisterUser.

Simpan perubahan kode pengujian. Sehingga akan ada 7 pengujian yang merah seperti berikut:

![2021080615195676d041a3fc48f2374cede88b92642df8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b92e8814-10d2-4eab-86d4-9b7c935fe02a)

Selanjutnya mari kita ubah pengujian DomainErrorTranslator menjadi hijau dengan menulis kode berikut:

```js
// DomainErrorTranslator.js

const InvariantError = require('./InvariantError');
 
const DomainErrorTranslator = {
  translate(error) {
    switch (error.message) {
      case 'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY':
        return new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada');
      case 'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION':
        return new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai');
      case 'REGISTER_USER.USERNAME_LIMIT_CHAR':
        return new InvariantError('tidak dapat membuat user baru karena karakter username melebihi batas limit');
      case 'REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER':
        return new InvariantError('tidak dapat membuat user baru karena username mengandung karakter terlarang');
      default:
        return error;
    }
  },
};
 
module.exports = DomainErrorTranslator;
```

Simpan perubahan kode tersebut. Setelah itu, pengujian `DomainErrorTranslator` menjadi hijau dan pengujian yang merah kembali menjadi 5.


![20210806152139663e5435a4d0fa8a8f498338d89d76b1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/db478749-be01-4b6f-b2da-c59bc0cc7d2d)

Apakah butuh *refactor*? Tentu saja kita memerlukannya karena secara personal, penulis tidak menyukai penggunaan switch case sebanyak itu. Kodenya terkesan berantakan dan sulit dibaca dan dikelola. Ada cara yang lebih efektif yakni dengan memanfaatkan error message sebagai properti objek seperti berikut:

```js
// DomainErrorTranslator.js

const InvariantError = require('./InvariantError');
 
const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};
 
DomainErrorTranslator._directories = {
  'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
  'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),
  'REGISTER_USER.USERNAME_LIMIT_CHAR': new InvariantError('tidak dapat membuat user baru karena karakter username melebihi batas limit'),
  'REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER': new InvariantError('tidak dapat membuat user baru karena username mengandung karakter terlarang'),
};
 
module.exports = DomainErrorTranslator;
```

Simpan perubahan kode dan pengujian untuk `DomainErrorTranslator` tetap hijau kan? Kode yang dituliskan menjadi lebih singkat, serta mudah dibaca dan dikelola.

Oke. Translator sudah selesai. Saatnya kita menggunakan translator tersebut untuk menangani eror pada server.

Silakan buka kembali berkas handler.js pada users plugin. Bungkus kode di dalam fungsi handler dengan *try catch*. Kemudian dalam blok catch, manfaatkan `DomainErrorTranslator` untuk penanganan errornya.

```js
// handler.js

const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
const DomainErrorTranslator = require('../../../../Commons/exceptions/DomainErrorTranslator');
 
class UsersHandler {
  constructor(container) {
    this._container = container;
 
    this.postUserHandler = this.postUserHandler.bind(this);
  }
 
  async postUserHandler(request, h) {
    try {
      const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
      const addedUser = await addUserUseCase.execute(request.payload);
      const response = h.response({
        status: 'success',
        data: {
          addedUser,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const translatedError = DomainErrorTranslator.translate(error);
      const response = h.response({
        status: 'fail',
        message: translatedError.message,
      });
      response.code(translatedError.statusCode);
      return response;
    }
  }
}
 
module.exports = UsersHandler;
```

Simpan perubahan kode tersebut dan pengujiannya akan kembali hijau.

![202108061524562dd8bdbd9158467e49d503796b262a71](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/cef9982f-a1ae-4ec0-8d73-25335d51630d)

Hore! Sekarang HTTP server sudah mampu menangani client error dengan baik. Lalu, bagaimana dengan penanganan server error? Apakah server mampu menanganinya sesuai dengan yang diharapkan? Mari kita coba dalam uraian di bawah ini.

Tambahkan pengujian baru pada c`reateServer.test.js` dengan skenario membangkitkan server error. Untuk membangkitkannya, berikan saja `container` palsu pada pembuatan server.

```js
// createServer.test.js

const pool = require('../../database/postgres/pool');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const createServer = require('../createServer');
 
describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });
 
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
 
  describe('when POST /users', () => {
    it('should response 201 and persisted user', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.data.addedUser).toBeDefined();
    });
 
    it('should response 400 when request payload not contain needed property', async () => {
      // Arrange
      const requestPayload = {
        fullname: 'Dicoding Indonesia',
        password: 'secret',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada');
    });
 
    it('should response 400 when request payload not meet data type specification', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: ['Dicoding Indonesia'],
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena tipe data tidak sesuai');
    });
 
    it('should response 400 when username more than 50 character', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena karakter username melebihi batas limit');
    });
 
    it('should response 400 when username contain restricted character', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding indonesia',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena username mengandung karakter terlarang');
    });
 
    it('should response 400 when username unavailable', async () => {
      // Arrange
      await UsersTableTestHelper.addUser({ username: 'dicoding' });
      const requestPayload = {
        username: 'dicoding',
        fullname: 'Dicoding Indonesia',
        password: 'super_secret',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('username tidak tersedia');
    });
  });
 
  it('should handle server error correctly', async () => {
    // Arrange
    const requestPayload = {
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
      password: 'super_secret',
    };
    const server = await createServer({}); // fake container
    // Action
    const response = await server.inject({
      method: 'POST',
      url: '/users',
      payload: requestPayload,
    });
    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(500);
    expect(responseJson.status).toEqual('error');
    expect(responseJson.message).toEqual('terjadi kegagalan pada server kami');
  });
});
```

Simpan perubahan kode testing `createServer.test.js`. Sehingga, pengujiannya akan kembali merah.

![202108061528233d76f10ae760005d0387fca0195a9d3b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/400a503a-649c-4b05-8d90-dc9e6199f1bf)

Bila kita lihat detail hasil pengujiannya akan tampak pesan seperti berikut:

![20210806155710a9980a20c6ae68e3d6b6cc70b2607524](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6c5805f0-8a95-4bff-879d-f8365e232d02)

Pesan di atas muncul disebabkan oleh penanganan error yang kita buat kurang tepat. Penanganan error tersebut hanya aman untuk `ClientError`, tetapi tidak untuk eror secara general. Hal tersebut terjadi karena ia tidak memiliki properti `statusCode` yang digunakan sebagai nilai response code pada handler.

Oleh karena itu, mari kita perbaiki dan sesuaikan response ketika terjadi server error. Silakan buka kembali berkas `handler.js` pada users plugin dan ubah penanganan error menjadi seperti ini:

```js
// handler.js

const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
const ClientError = require('../../../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../../../Commons/exceptions/DomainErrorTranslator');
 
class UsersHandler {
  constructor(container) {
    this._container = container;
 
    this.postUserHandler = this.postUserHandler.bind(this);
  }
 
  async postUserHandler(request, h) {
    try {
      const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
      const addedUser = await addUserUseCase.execute(request.payload);
 
      const response = h.response({
        status: 'success',
        data: {
          addedUser,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const translatedError = DomainErrorTranslator.translate(error);
      if (translatedError instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: translatedError.message,
        });
        response.code(translatedError.statusCode);
        return response;
      }
      const response = h.response({
        status: 'error',
        message: 'terjadi kegagalan pada server kami',
      });
      response.code(500);
      return response;
    }
  }
}
 
module.exports = UsersHandler;
```

Simpan perubahan kode dan pengujiannya akan kembali hijau

![20210806160224b68b38aec33c5373864855fd338d4f7e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/0178abdd-016a-444f-8ac5-cb974fa6b88e)

Selesai sudah perjalanan kita dalam membangun fitur registrasi pengguna. Tinggal selangkah lagi yakni menjalankan HTTP server pada app.js agar fitur tersebut dapat digunakan melalui permintaan HTTP. 

Namun sebelum itu, kita akan melakukan sedikit refactor pada penanganan error. Kita akan memindahkan penanganan error pada cakupan server agar kode handler bisa fokus pada penggunaan use case tanpa adanya penanganan error di sana.

Caranya, kita akan menggunakan teknik [extensions](https://hapi.dev/api/?v=20.1.4#-serverextevents) function ketika siklus `onPreResponse` pada server Hapi. Fungsi extensions ini akan terpanggil sebelum server Hapi merespon sebuah permintaan. Dalam fungsi extension ini, kita bisa mengubah respons sebelum ia dikirim ke client. Dengan begitu, kita bisa mengintervensi response--khususnya response error--dengan penanganan eror sesuai kebutuhan.

Silakan buka berkas createServer.js dan tulis kode extensions function untuk siklus `onPreResponse` tepat sebelum mengembalikan nilai `server`.

```js
// createServer.js

const Hapi = require('@hapi/hapi');
const ClientError = require('../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTranslator');
const users = require('../../Interfaces/http/api/users');
 
const createServer = async (container) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
  });
 
  await server.register([
    {
      plugin: users,
      options: { container },
    },
  ]);
 
  server.ext('onPreResponse', (request, h) => {
    // mendapatkan konteks response dari request
    const { response } = request;
    if (response instanceof Error) {
      // bila response tersebut error, tangani sesuai kebutuhan
      const translatedError = DomainErrorTranslator.translate(response);
      // penanganan client error secara internal.
      if (translatedError instanceof ClientError) {
        const newResponse = h.response({
          status: 'fail',
          message: translatedError.message,
        });
        newResponse.code(translatedError.statusCode);
        return newResponse;
      }
      // penanganan server error sesuai kebutuhan
      const newResponse = h.response({
        status: 'error',
        message: 'terjadi kegagalan pada server kami',
      });
      newResponse.code(500);
      return newResponse;
    }
    // jika bukan error, lanjutkan dengan response sebelumnya (tanpa terintervensi)
    return h.continue;
  });
 
  return server;
};
 
module.exports = createServer;
```

Kemudian pada fungsi handler, hapus kode penanganan error. Sehingga berkas handler.js kembali menjadi seperti ini:

```js
const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
 
class UsersHandler {
  constructor(container) {
    this._container = container;
 
    this.postUserHandler = this.postUserHandler.bind(this);
  }
 
  async postUserHandler(request, h) {
    const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    const addedUser = await addUserUseCase.execute(request.payload);
    const response = h.response({
      status: 'success',
      data: {
        addedUser,
      },
    });
    response.code(201);
    return response;
  }
}
 
module.exports = UsersHandler;
```

Silakan simpan seluruh perubahan dan pastikan pengujiannya tetap hijau.

![20210806160715e3184ea76ee256cf2cdcf1eecca1e9bb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/46793ea6-b1f7-415e-a629-4a2305e179f6)

Mantap! Hal lain yang perlu kita perhatikan adalah Hapi framework secara *native* memiliki penanganan erornya sendiri. Misalnya, ketika mengakses endpoint yang tidak terdaftar, secara native Hapi akan mengembalikan 404 eror. Kita perlu memastikan juga bahwa intervensi response yang kita lakukan tidak merusak behavior tersebut. Oke, mari kita pastikan dengan langkah-langkah di bawah ini.

Silakan tambah skenario pengujian ‘*should response 404 when request unregistered route*’ pada `createServer.test.js`:

```js
// createServer.test.js

const pool = require('../../database/postgres/pool');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const createServer = require('../createServer');
 
describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });
 
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
 
  it('should response 404 when request unregistered route', async () => {
    // Arrange
    const server = await createServer({});
    // Action
    const response = await server.inject({
      method: 'GET',
      url: '/unregisteredRoute',
    });
    // Assert
    expect(response.statusCode).toEqual(404);
  });
 
  describe('when POST /users', () => {
    it('should response 201 and persisted user', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.data.addedUser).toBeDefined();
    });
 
    it('should response 400 when request payload not contain needed property', async () => {
      // Arrange
      const requestPayload = {
        fullname: 'Dicoding Indonesia',
        password: 'secret',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada');
    });
 
    it('should response 400 when request payload not meet data type specification', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding',
        password: 'secret',
        fullname: ['Dicoding Indonesia'],
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena tipe data tidak sesuai');
    });
 
    it('should response 400 when username more than 50 character', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena karakter username melebihi batas limit');
    });
 
    it('should response 400 when username contain restricted character', async () => {
      // Arrange
      const requestPayload = {
        username: 'dicoding indonesia',
        password: 'secret',
        fullname: 'Dicoding Indonesia',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('tidak dapat membuat user baru karena username mengandung karakter terlarang');
    });
 
    it('should response 400 when username unavailable', async () => {
      // Arrange
      await UsersTableTestHelper.addUser({ username: 'dicoding' });
      const requestPayload = {
        username: 'dicoding',
        fullname: 'Dicoding Indonesia',
        password: 'super_secret',
      };
      const server = await createServer(container);
 
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
 
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('username tidak tersedia');
    });
  });
 
  it('should handle server error correctly', async () => {
    // Arrange
    const requestPayload = {
      username: 'dicoding',
      fullname: 'Dicoding Indonesia',
      password: 'super_secret',
    };
    const server = await createServer({}); // fake injection
 
    // Action
    const response = await server.inject({
      method: 'POST',
      url: '/users',
      payload: requestPayload,
    });
 
    // Assert
    const responseJson = JSON.parse(response.payload);
    expect(response.statusCode).toEqual(500);
    expect(responseJson.status).toEqual('error');
    expect(responseJson.message).toEqual('terjadi kegagalan pada server kami');
  });
});
```

Simpan kode testing dan hasil pengujiannya menjadi merah.

![20210806161204c2deb8266c6fc7e0ecb2341c2ef44bf5](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ff5f03b6-a91f-4c43-99ff-da86daad5500)

Wah ternyata behaviornya rusak. Karena kita telah menyadari hal ini, buat pengujiannya kembali hijau dengan menambahkan kode berikut (yang diberi tanda tebal) pada *extensions function*.

```js
// createServer.js

const Hapi = require('@hapi/hapi');
const ClientError = require('../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTranslator');
const users = require('../../Interfaces/http/api/users');
 
const createServer = async (container) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
  });
 
  await server.register([
    {
      plugin: users,
      options: { container },
    },
  ]);
 
  server.ext('onPreResponse', (request, h) => {
    // mendapatkan konteks response dari request
    const { response } = request;
 
    if (response instanceof Error) {
      // bila response tersebut error, tangani sesuai kebutuhan
      const translatedError = DomainErrorTranslator.translate(response);
 
      // penanganan client error secara internal.
      if (translatedError instanceof ClientError) {
        const newResponse = h.response({
          status: 'fail',
          message: translatedError.message,
        });
        newResponse.code(translatedError.statusCode);
        return newResponse;
      }
 
      // mempertahankan penanganan client error oleh hapi secara native, seperti 404, etc.
      if (!translatedError.isServer) {
        return h.continue;
      }
 
      // penanganan server error sesuai kebutuhan
      const newResponse = h.response({
        status: 'error',
        message: 'terjadi kegagalan pada server kami',
      });
      newResponse.code(500);
      return newResponse;
    }
 
    // jika bukan error, lanjutkan dengan response sebelumnya (tanpa terintervensi)
    return h.continue;
  });
 
  return server;
};
 
module.exports = createServer;
```

Ketika Hapi server hendak mengembalikan response yang merupakan eror, response tersebut memiliki properti `isServer`. Properti tersebut mengindikasikan apakah error merupakan client atau server. Jika eror tersebut merupakan client, kita bisa mengembalikan dengan response asli tanpa ada proses intervensi. Hal tersebut karena kita ingin mempertahankan behavior Hapi dalam menangani client error. Namun, jika erornya server, response akan terintervensi dengan penanganan server error yang kita tetapkan.

Simpan perubahan kode dan pengujian akan kembali hijau.

![20210806161752def84172c2390a347632f0ad5d191fee](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6cd41463-34b7-4306-83aa-fe7b9bde20f2)

Selamat! Anda telah berhasil menerjemahkan Domain Error ke HTTP Error.

### **Membangun Fitur Registrasi Pengguna-Menjalankan HTTP Server**

Kita sudah berhasil membangun fitur registrasi pengguna. Namun sampai sejauh ini, kita sama sekali belum menjalankan web server. Berita baiknya adalah kita bisa menjamin fitur yang kita bangun sudah berjalan dengan baik karena adanya automation testing. Bahkan, tanpa menjalankan dan mencobanya melalui protokol HTTP sekalipun. Menarik bukan?

Jadi, inilah waktunya untuk menjalankan HTTP server yang sudah kita buat. Silakan buka berkas app.js dan tuliskan kode untuk menjalankan server berikut ini:

```js
// app.js

require('dotenv').config();
const createServer = require('./Infrastructures/http/createServer');
const container = require('./Infrastructures/container');
 
const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};
 
start();
```

Simpan perubahan kode dan jalankan HTTP server menggunakan perintah di bawah ini:

```
npm run start:dev
```

Pastikan HTTP server berjalan dengan baik.

![202108061623244dd5b166ba59e6f4460993f5d17e693e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4a7a8f84-3894-423f-8a5e-dcfe20910416)

Pada tahap ini, Anda bisa menguji fitur registrasi menggunakan Postman.

![2021080616232449dd74afd0aeba813c3c1ae8e5ec4322](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/dafcc977-33a3-4bf4-96f1-9ac7e4780bc9)

### **Pendinginan**

Anda sudah berhasil membangun fitur registrasi pengguna dengan sangat baik. Kode yang dituliskan juga sudah terproteksi 100% oleh automation testing sehingga bila terjadi perubahan, kita bisa mengetahui secara cepat apakah kode tersebut merusak fungsionalitas yang ada atau tidak. Selain itu, Anda juga sudah berhasil membangun aplikasi yang bisnis logikanya clean atau bersih dari implementasi framework.

Semoga dengan apa yang sudah kita lalui, Anda mendapatkan pengalaman baru dan naik level sebagai seorang developer. Namun, jangan cepat berpuas diri. Teruslah berlatih mengasah kemampuan yang dimiliki dengan terus bereksplorasi dan belajar agar menjadi seorang software developer yang lebih baik lagi. 

Pembahasan mengenai clean architecture sangatlah luas dan tidak ada habisnya. Software Architecture merupakan topik yang sangat terbuka untuk diperdebatkan. Mungkin sejauh ini, banyak sekali pertanyaan yang ingin Anda tanyakan kepada kami. Oleh karena itu, kami coba merangkum beberapa pertanyaan umum terkait penerapan clean architecture yang mungkin bisa membantu Anda di proyek mendatang.

- `Apakah pembuatan entities atau domain model selalu dibutuhkan dalam membangun fitur?`
  
  Entities atau domain model tidak esensial untuk dibuat bila struktur data yang dibutuhkan tidak kompleks dan tidak memiliki aturan yang ketat. Pada fitur registrasi pengguna, kita membuat entities NewUser karena memerlukan beberapa proses validasi di sana. Sehingga entities diharuskan hadir pada fitur tersebut.

  Beda cerita bila Anda mengembangkan fitur refresh access token. Karena payload yang dikirimkan hanya refresh token saja (di mana ia adalah string), maka pembuatan entities tidaklah esensial.

- `Apakah wajib membuat use case setiap kali membangun fitur?`
  
  Menurut kami ini wajib. Mengapa? Karena inilah tempat didefinisikannya alur bisnis. Semua aksi tentu ada alurnya, bukan? Walaupun alurnya hanya satu baris saja (seperti mendapatkan data dari repository), itu tetaplah alur bisnis. Mungkin saat ini hanya butuh satu baris, siapa tahu kedepannya alur bisnis akan berkembang dan membutuhkan banyak kode. Dengan adanya use case, kita sudah mempunyai wadah yang tepat untuk menampung bisnis logic tersebut.

  Selain itu dengan adanya use case, kemampuan dari aplikasi kita menjadi terpetakan.

- `Apakah fitur CRUD dapat dibuat hanya dengan satu Use Case?`
  
  Ingat kembali. Use Case tidak berfokus terhadap bentuk, tetapi fokus terhadap peran dan tujuannya. Untuk resource yang membutuhkan operasi CRUD supaya tidak terlalu banyak membuat class UseCase, buatlah use case sebagai fungsi yang digabungkan dalam satu buah class seperti ini:

  ```js
  class MusicUseCase {
    constructor({ musicRepository }) {
      this._musicRepository = musicRepository;
    }
  
    // a.k.a addMusicUseCase
    addMusic(useCasePayload) {
      // orchestrating business flow
    }
  
    // a.k.a getMusicUseCase
    getMusic(useCasePayload) {
      // orchestrating business flow
    }
  
    // a.k.a editMusicUseCase
    editMusic(useCasePayload) {
      // orchestrating business flow
    }
  
    // etc
  }
  ```
- `Apakah use case payload perlu divalidasi?`
Perlu, terutama bila tidak ada entities yang digunakan oleh use case atau tidak ada proses validasi di entities. Validasi data merupakan hal yang baik. Sebisa mungkin lakukan validasi data di setiap layer.


- `Apakah boleh menggunakan tools seperti Joi untuk memvalidasi data di level Domains atau Use Case?`
Boleh saja selama Anda dan tim sepakat untuk menggunakannya pada level Domains atau Use Case. Namun konsekuensinya, jika ingin mengubah tools validasi data, Anda harus mengubah kode pada Domains atau Use Case.


- `Apakah Use Case boleh menggunakan lebih dari satu repository?`
Sangat boleh. Karena memang use case berada di lingkaran lebih luar dibandingkan dengan domain. Terkadang, suatu aksi membutuhkan lebih interaksi dengan lebih dari satu subdomain. Contohnya, aksi login pengguna (GetAuthenticationUseCase), di sana Anda akan membutuhkan setidaknya dua repository yakni UserRepository untuk mengecek validitas kredensial dan AuthenticationRepository untuk menyimpan refresh token pada database.

### **Keberlangsungan Aplikasi Auth API**

Terdapat tiga fitur lain yang perlu dibuat pada Auth API agar API tersebut dapat berfungsi seutuhnya dan itu menjadi tugas Anda untuk menyelesaikannya. Bila Anda sudah berhasil hingga sejauh ini, kami yakin Anda mampu menyelesaikan tugasnya dengan baik. Fitur yang perlu Anda buat adalah:

- Mendapatkan autentikasi atau proses login
- Memperbarui autentikasi atau refresh access token
- Menghapus autentikasi atau proses logout
  
Dalam menyelesaikan fitur tersebut, tentu Anda perlu pakem seperti apa fitur seharusnya dibuat. Maka dari itu, kami menyediakan Postman Collection dan Environment untuk menguji fungsionalitas Auth API. Silakan unduh pada tautan ini berikut:

- [Auth API Collection and Environment](https://github.com/dicodingacademy/a276-backend-expert-labs/raw/099-shared-content/shared-content/02-module-content/Auth%20API%20Test.zip)

Cobalah untuk memenuhi pengujian yang ada di Postman tersebut.

Tips lain. Dalam membangun fitur baru, mulailah dari:

- Kebutuhan bisnis seperti domain model dan repository interface + unit testing.
- Alur bisnis atau use case dan service interface yang dibutuhkan use case + unit testing.
- Kebutuhan infrastruktur seperti database (termasuk pembuatan tabel jika diperlukan), repository concrete, service concrete + integration testing
- Kebutuhan interface HTTP server seperti routing dan handler + functional test

## **Continuous Integration dan Continuous Deployment**

### **Pendahuluan Continuous Integration dan Continuous Deployment**

Tahukah Anda apa yang perlu diperhatikan setelah menulis kode? Jawabannya adalah memastikan kode yang Anda tulis sudah benar dan telah melewati tes sebelum dirilis. Sehingga, jangan sampai aplikasi yang sudah berada di production terkendala alias mengalami bug yang merugikan waktu dan biaya untuk perusahaan Anda. Terlebih, jika aplikasi Anda populer, kehilangan banyak pelanggan adalah hal yang mungkin saja bisa terjadi.

Pada modul kali ini, Anda akan belajar bagaimana cara men-deploy aplikasi ke tahap production secara efisien, cepat, dan aman. Aplikasi yang di-deploy ke tahap production dipastikan telah lolos pengujian sehingga aman untuk digunakan oleh pelanggan.

Di akhir modul ini Anda diharapkan dapat:

- Mengetahui bagaimana developer mengelola source code aplikasi.
- Mengetahui apa itu Continuous Integration dan Continuous Deployment serta manfaatnya.
- Mengetahui platform yang dapat digunakan dalam menerapkan CI/CD pada Node.js.
- Mengetahui alur penerapan CI/CD pada pengembangan aplikasi.
- Menerapkan CI/CD pada pengembangan aplikasi Node.js menggunakan GitHub Actions.

### **Mengelola Source Code**

Sebelum masuk ke topik deployment aplikasi dan membahas teknik CI/CD, ada baiknya Anda mengetahui terlebih dahulu bagaimana cara mengelola source code aplikasi yang dibangun oleh banyak developer. Mulai dari pertanyaan dasar, bagaimana cara agar beberapa developer bisa mengerjakan sebuah proyek menggunakan codebase yang sama?

Jawabannya adalah menggunakan version control system (vcs), seperti git. Dengan menggunakan version control, setiap developer bisa berkolaborasi di codebase yang sama, melakukan tracking pada setiap perubahan, mengetahui siapa yang melakukan perubahan di kode, dan masih banyak lagi.

Git dapat berjalan di komputer lokal maupun server. Namun, bila aplikasinya dikembangkan oleh banyak developer, tentu membutuhkan git server/hosting agar source code yang dimiliki setiap developer bisa saling sinkron dan *up-to-date*.

Kita bisa membuat git server sendiri atau menggunakan layanan berbasis *cloud* seperti Gitlab atau GitHub. Dengan menggunakan git server/hosting, kita akan lebih dimudahkan dalam urusan pengelolaan repositori git.

Kami percaya bahwa sebagian Anda telah mengetahui dan bahkan menggunakan git dalam mengelola source code aplikasi. Bahkan sudah menggunakan GitHub sebagai git server untuk menyimpan source code di Internet.

Kita akan menggunakan git dan GitHub pada latihan modul ini. Untuk Anda yang tidak biasa dengan git, berikut beberapa istilah dalam git yang perlu Anda ketahui agar tidak asing dengannya.

- `Repository`
  
  Merupakan istilah yang digunakan sebagai penyimpanan source code. Repository dapat bersifat local dan remote. Repository lokal merupakan repository yang berada di lokal komputer developer dan digunakan selama proses pengembangan atau coding. Sedangkan remote repository yaitu repository yang berada di server yang menjadi repository induk agar repository lokal yang digunakan oleh developer selalu tersinkron dan up-to-date. Remote repository juga biasa digunakan sebagai source code untuk proses deployment.

- `Branch`

  Git merupakan versioning control, di mana versioning ini salah satunya diatur oleh fitur branch. Setiap repository git memiliki minimal satu branch atau cabang, branch ini adalah branch utama (main). Normalnya, seluruh source code aplikasi yang sudah matang berada di branch utama ini. Bila seorang developer hendak mengembangkan fitur baru, ia harus membuat cabang (branch) baru dari aplikasi agar source code yang sudah matang tidak terganggu.

- `Commit`
  
  Commit merupakan sebuah aksi yang dilakukan developer untuk membuat rekam jejak (snapshot) dari perubahan kode ia tuliskan. Seorang developer akan melakukan commit ketika kode yang dituliskan sudah benar atau sudah mencapai poin-poin tertentu. Jika developer mengalami kesalahan dalam menuliskan kode berikutnya, maka ia dapat dengan mudah mengembalikan source code ke versi di mana ia melakukan commit. Aksi commit harus dilakukan pada perubahan kode sekecil mungkin, agar perubahan kode selalu terekam dengan baik.

- `Push`
  
  Push merupakan aksi untuk mengirim perubahan branch dari local repository ke remote repository. Push dilakukan untuk memperbarui kode yang ada di-remote dengan kode yang ada di-local.

- `Pull Request`
  
  Pull Request merupakan request untuk menggabungkan perubahan kode pada suatu branch ke branch lain. Contohnya, ketika Anda mengembangkan fitur pada branch B dan pengembangannya sudah selesai serta kode yang ditulis sudah matang, maka Anda bisa melakukan pull request branch B kepada branch main (branch utama) agar fitur yang Anda kembangkan dapat diterapkan pada aplikasi.

- `Merge`

  Merge merupakan aksi untuk menggabungkan perubahan kode pada suatu branch ke branch lain. Merge dapat dilakukan melalui atau tanpa pull request.

Untuk mempelajari git secara lebih dalam, kami sarankan Anda untuk mempelajarinya pada kelas terkait yang kami sediakan.

### **Pengertian dan Manfaat CI/CD**

Di modul sebelumnya kita telah belajar banyak mengenai automation testing. Dengan begitu aplikasi yang dikembangkan dapat berjalan dengan baik sesuai yang diharapkan. Karena Anda sudah menerapkan automation test, kurang efektif bila proses `build` dan `deploy` aplikasi Anda masih manual. Untuk itu, mari kita berkenalan dengan teknik build dan deploy secara automate dengan teknik CI/CD.

CI/CD merupakan teknik delivery aplikasi yang efisien, cepat, dan aman. Di mana teknik tersebut terdiri dari dua proses yaitu CI (`Continuous Integration`) dan CD (`Continuous Deployment`).

![20210809002852c14f5928160df046b089b719df71059b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4e7309fd-f3ff-4fd1-9547-7e90d9813771)

#### **Continuous Integration**

*Continuous Integration* (CI) adalah proses terintegrasinya sebuah aksi ketika developer mengirim (push) kode barunya ataupun melakukan pull request (PR) ke branch utama pada repository (codebase). CI biasanya diterapkan untuk memastikan kebenaran kode yang baru saja push atau PR. Karena itu, proses yang terintegrasi biasanya adalah proses building dan testing (jika program tidak perlu di-*build*, maka hanya *testing*). 

Dengan menerapkan CI kita bisa mendeteksi lebih dini bila kode yang dituliskan salah atau error. Karena setiap kali kode pada branch utama repository berubah, proses pengujian akan dijalankan. 

#### **Continuous Deployment**

Sedangkan *Continuous Deployment* (CD) adalah proses deployment aplikasi secara otomatis yang hanya akan dijalankan bila pengujian aplikasi berstatus *passed* dan lulus proses review bila proses pengembangan aplikasi menerapkan proses review. Karena proses deployment hanya berjalan setelah pengujian berhasil, dapat dipastikan kode yang di-deploy ke production aman dan tidak eror.

CI dan CD merupakan proses yang berbeda dan terpisah. Anda bisa menerapkan CI tanpa CD, begitu juga sebaliknya. Namun, ketahuilah bila keduanya kita integrasikan maka akan menciptakan proses delivery aplikasi yang efisien, cepat, dan aman.

Dalam penerapan CI/CD, CI mencakup proses *building* dan *testing* yang otomatis dijalankan ketika kode di push ke branch utama. Kemudian dilanjutkan oleh CD yakni men-deploy secara otomatis perubahan kode pada branch utama ke production `bila pengujian yang dilakukan CI berhasil`.

#### **Manfaat Penerapan CI/CD**

Sangat disayangkan bila Anda sudah menerapkan pengujian otomatis pada aplikasi tetapi proses delivery aplikasinya masih dilakukan secara manual. Jika Anda tidak menerapkan CI/CD itu berarti semua kegiatan production akan dilakukan secara manual. Dari mulai proses `testing`, `building`, hingga deployment ke server production. Seluruh proses tersebut harus Anda lakukan sendiri.

Beda cerita bila Anda menerapkan CI/CD, Anda akan mendapatkan banyak manfaat, seperti:

- Mengurangi proses testing secara manual yang bisa jadi terlupakan karena human-factor.
- Memastikan semua fitur berjalan lancar setiap kali terjadi perubahan kode (push).
- Mendeteksi eror secepat mungkin.
- Membuat proses delivery ke production menjadi lebih cepat.
- Terkait aspek kolaborasi tim, Anda dapat mengatasi masalah ketika menggabungkan (merge) project.
- Untuk Anda yang memanfaatkan branch, CI bisa memastikan branch utama (production) tetap bersih dan bisa dijalankan.
- Menyimpan arsip build terakhir kali yang sukses sehingga apabila terjadi kesalahan. Anda bisa tahu kode mana yang sukses dijalankan.
  
### **Platform CI/CD untuk Node.js**

Saat ini ada banyak fitur yang bisa Anda gunakan untuk CI/CD untuk aplikasi Node.js. Berikut ini adalah beberapa tool yang familier dan sering digunakan oleh industri.

#### **Amazon Web Service**

roses CI/CD dapat dilakukan sepenuhnya pada Amazon Web Service menggunakan kombinasi beberapa service, seperti AWS CodePipeline, AWS CodeCommit/AWS S3, AWS CodeDeploy, dan Amazon EC2 seperti yang ditampilkan pada bagan berikut:

![20210825110927d32d046a1bcf953e3c70f67a0081f2a1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c77dbf39-c076-4514-94c7-1b8764eb5a04)

Berikut penjelasan dari masing-masing service-nya:

- AWS CodePipeline: merupakan service yang digunakan untuk mengotomasikan proses delivery software. Perubahan kode dari source stage akan dipantau, di-build, dan diuji secara otomatis setiap kali ada perubahan sebelum akhirnya di-deploy. Source stage dapat bersumber dari S3, AWS CodeCommit atau cloud repository lain seperti GitHub dan Gitlab.
- AWS CodeCommit: merupakan service yang menawarkan host git repositories yang aman, terkelola, dan scalable. Dalam praktik CI/CD, AWS CodeCommit dapat digunakan sebagai source stage.
- AWS S3: merupakan service yang digunakan untuk menyimpan objek atau berkas. Dalam praktik CI/CD, AWS S3 juga dapat digunakan sebagai source stage.
- AWS CodeDeploy: merupakan layanan yang digunakan untuk mengautomasikan proses deployment software pada compute engine services seperti Amazon EC2, AWS Fargate, AWS Lambda, ataupun server on-premise.
- Amazon EC2: merupakan layanan compute engine atau virtual machine yang tawarkan oleh AWS. Dalam CI/CD, EC2 merupakan service yang menjalankan aplikasi.
  
Untuk Anda yang ingin eksplor lebih dalam bagaimana menerapkan CI/CD pada AWS dapat melihat tutorial yang diberikan oleh AWS langsung:

- [Menyiapkan Pipeline CI/CD di AWS](https://aws.amazon.com/id/getting-started/projects/set-up-ci-cd-pipeline/)
- [Complete CI/CD with AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy, and AWS CodePipeline](https://aws.amazon.com/blogs/devops/complete-ci-cd-with-aws-codecommit-aws-codebuild-aws-codedeploy-and-aws-codepipeline/)
  
#### **Travis CI**

![202108061953307364e3487286014a31870fd044cbed08](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8765bfff-8771-48b5-b5c0-fed53579270f)

Merupakan layanan continuous integration yang popular digunakan. Layanan ini bersifat gratis untuk proyek aplikasi yang bersifat open-source [[10]](https://docs.travis-ci.com/user/travis-ci-for-private/#why-cant-i-find-information-on-pricing-on-travis-ciorg). Ia juga dapat langsung diintegrasikan dengan GitHub dengan cepat. Kelebihan Travis CI adalah tidak perlu menyediakan mesin atau server khusus untuk menjalankan layanan ini, karena semuanya sudah disediakan oleh Travis. Kita hanya perlu menyiapkan proyek yang berada pada GitHub.

#### **Jenkins**

![202108061953540440ab81aced5e006abf5bb77c25d534](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f1c13998-5a89-447e-819b-ff63c81b0f17)

Merupakan open-source untuk membuat continuous integration pada server yang paling terkenal. Dibuat dengan Java, ia memiliki lebih dari 300 plugin untuk membantu mencoba dan menjalankan tes pada project apa pun. Cocok digunakan untuk project yang sudah besar karena bisa di-customized lebih dalam. Namun, Anda harus menyiapkan server sendiri untuk menjalankannya.

#### **GitHub Action**

![2021080619541618a7b8e1be07a11f7a3479318ddbb88e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/fa57d73d-394e-4978-b624-cf42a937a078)

GitHub Actions merupakan salah satu layanan dari GitHub yang membantu kita untuk menjalankan task secara otomatis berdasarkan sebuah event yang terjadi pada repository. Contoh, ketika setiap kali seseorang melakukan push ke branch utama pada repository, GitHub Action dapat menjalankan perintah, seperti build dan testing secara otomatis. Melalui GitHub Actions kita juga bisa melakukan deployment pada compute engine service seperti Amazon EC2 dengan mudah. Ia juga bisa diintegrasikan dengan CodeDeploy atau bisa juga menggunakan SSH untuk mengakses EC2 secara langsung. GitHub Actions berlisensi gratis dan sangat mudah untuk digunakan. Namun layanannya terbatas hanya pada repository GitHub.

### **Alur CI/CD**

Pada dasarnya berikut ini adalah alur yang perlu Anda lakukan untuk melakukan sebuah proses Continuous Integration:

    Dengan tahapan review

    - Menghubungkan project ke version control seperti AWS CodeCommit, GitHub, atau Gitlab.
    - Membuat konfigurasi continuous integration pada repository.
    - Melakukan perubahan pada kode.
    - Commit dan Pull Request ke version control.
    - Tool CI akan otomatis build (jika dibutuhkan), unit testing, dan integration testing.
    - Jika hasil unit dan integration testing berhasil, tahapan selanjutnya adalah proses review
    - Jika proses review lolos, reviewer melakukan merge ke version control.
    - Dilanjutkan dengan proses deployment.

    Atau jika digambarkan dalam diagram akan terlihat seperti ini:

  ![20210825111141209d6ebc6892f9dd0dbfa7cf4c546f37](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/241c656b-eb00-4c4b-b8fb-fa57d79fda25)
  Alur CI/CD dengan proses review

    Tanpa tahapan review

    - Menghubungkan project ke version control seperti AWS CodeCommit, GitHub, atau Gitlab.
    - Membuat konfigurasi continuous integration pada repository.
    - Melakukan perubahan pada kode.
    - Commit dan Push ke version control.
    - Tool CI akan otomatis build (jika dibutuhkan), unit testing, dan integration testing.
    - Jika hasil unit dan integration testing berhasil, tahapan selanjutnya adalah proses deployment.
  
    Atau jika digambarkan dalam diagram akan terlihat seperti ini:
![202108251112157deac8164b37b63c1dbadca76f8d1756](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ac9a1198-de84-43be-a93d-69a32230b823)
Alur CI/CD tanpa proses review

## **Deploy RESTFul API ke Amazon EC2 dan Amazon RDS**

Pada latihan kali kita akan mencoba mempraktikkan bagaimana cara menerapkan CI/CD pipeline menggunakan GitHub Action pada proyek Auth API yang sudah kita gunakan. Pastikan proyek Auth API Anda siap untuk di deploy serta memiliki fitur penuh yang ter-cover oleh pengujian secara otomatis. Jika belum, Anda bisa mengunduh proyek Auth API pada tautan berikut:

- [Auth API Full Features + Testing](https://github.com/dicodingacademy/a276-backend-expert-labs/tree/302-auth-api-full-features)

Sebelum kita membuat CI/CD pipeline, kita perlu siapkan dulu kebutuhan server aplikasi dan database. Selain itu, kita juga perlu men-deploy Auth API pertama kali dengan cara manual. Tapi jangan khawatir, selanjutnya proses deployment akan dilakukan dengan teknik CI/CD.

Untuk server dan databasenya kita akan menggunakan AWS. Jadi siapkan juga akun AWS yang Anda miliki ya. Kami sarankan, gunakan akun AWS yang masih memiliki masa free tier agar tidak menimbulkan biaya selama praktik berlangsung.

### **Meluncurkan EC2 Server**

Kita mulai dengan meluncurkan EC2 instance baru. Silakan masuk ke halaman AWS Management Console dengan cara:

Kunjungi halaman [Login AWS Management Console](https://aws.amazon.com/id/console/). Login dengan akun AWS Anda (bisa menggunakan root access atau IAM User).

Catatan: Jika Anda menggunakan IAM user, pastikan user memiliki permission AmazonEC2FullAccess dan juga AmazonRDSFullAccess (Karena kita juga akan meluncurkan cluster RDS).

Kemudian Anda akan masuk ke halaman AWS Management Console.

![20210806201226112eee8c097a2d928df6fce01d4ec9f8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a3ea2077-1b45-4e8f-b7aa-d3bee0730e03)

Untuk meluncurkan EC2 instance, silakan menuju halaman dashboard EC2 dengan mencarinya menggunakan kolom pencarian yang ada di bar atas

![202108062017359a4eb166cef05f3be2af89299079763a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/fd04cd5f-78e5-408d-ba1d-db3b2ebf9c1c)

Setelah memilih menu EC2, maka Anda akan diarahkan ke halaman utama service EC2.

![20210806201900aec62bde71430a1273259222a706bfd1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e4dd1562-5b5f-4908-90d3-0dff92508fc1)

Gulir jendela browser ke bawah dan Anda akan melihat tombol Launch Instance.

![20210806201900f0102f5d8c3ce1cd583e5bdc3fa6f395](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4f03eccf-40c1-4623-b07d-b52489b063a5)

Klik tombol tersebut dan pilih Launch instance untuk membuat EC2 instance.

![202108062018595ef7b47e5231260e2d547d4755f81582](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d5117463-6bc6-4d43-bc29-a1c7580bac80)

Setelah itu, Anda akan diarahkan ke halaman pemilihan Amazon Machine Image (AMI). AMI merupakan sebuah template yang berisi konfigurasi software seperti sistem operasi, server, dan aplikasi lainnya. Untuk menjalankan EC2, tentu kita perlu AMI. Jadi, silakan pilih Ubuntu sebagai AMI kita kali ini.

Anda bisa mencari dengan kata kunci “Ubuntu” pada kolom pencarian.

![202108062021079c57f0210a230f55860eed50a8b02fec](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ab9f8b15-4864-42cf-b742-3fb8e44f9786)

Saat ini, pilih AMI Ubuntu Server 20.04 LTS 64-bit (x86). Pastikan terdapat tulisan “Free tier eligible” agar fitur gratis dapat kita manfaatkan. Silakan klik tombol Select yang ada di samping kanan.

![20210806202313f709bb0686e2ff30596f3adc9d0d8651](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/106cb37e-f62f-48c9-adf1-94f20e9d6760)

Kemudian, Anda akan diarahkan ke halaman pemilihan tipe instance. Secara default, opsi t2.micro akan dipilih dan ini menjadi pilihan yang tepat karena kita dapat menggunakannya secara gratis. Jadi lanjut saja dengan menekan tombol Next: Configure Instance Details.

![202108062023135f38ecdbe4c26314edec9ff9d9fd1220](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/39343539-0c7f-420d-9d4f-ec794510ad51)

Di halaman ini Anda tidak perlu mengubah apa pun, semua sudah diatur dengan nilai yang benar. Jadi, Anda bisa lanjut dengan menekan tombol Next: Add Storage.

![20210806202312327b83240c360469327d8a9c11dcde9f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e8d08fea-d0e2-43d3-8186-ed223150c3e6)

Selanjutnya, Anda akan diarahkan ke halaman konfigurasi storage. Sejujurnya, saat ini kita belum membutuhkan storage yang besar. Kita bisa men-deploy web server pada volume root yang berukuran 8GiB.

![20210806202312ac7d69dba87a7775f9b6edc6f7b52ddf](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a4c006dd-6484-4f9c-ba50-768b2d069fd9)

Karena itu kita bisa lanjut dengan klik tombol Next: Add Tags.

![202108062023124e5ffba5a1e5182f65c77c57db796e16](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/edee82ef-da5a-41be-82c8-88714465561a)

Di halaman ini Anda bisa memberikan tags pada instance EC2. Tags atau label berfungsi untuk menandai atau bisa juga sebagai identitas dari instance yang Anda buat. Pada kasus ini kita bisa memberikan label dengan key “name” dan value “application server”.

![20210806202312c977822ba722d0eed1459ccda1adb7b9](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/05097cf3-746c-411a-9ceb-c7ca7014aad4)

Lanjut klik tombol Next: Configure Security Group.

![2021080620231320cfec6cb51151f475a2108e7015bb2b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/cd98e04d-15f9-4352-a25e-34b5618a2468)

Halaman selanjutnya adalah konfigurasi Security Group. Di halaman ini kita menentukan cara atau jalur apa saja untuk mengakses EC2 Instance yang dibuat. Secara default, AWS menambahkan SSH pada security group. Jalur SSH ini digunakan nanti oleh kita untuk mengoperasikan EC2 secara remote.

Selain SSH, kita perlu menambahkan security group lainnya agar web server kita dapat diakses secara publik. Jadi, silakan klik Add Rule. Pilih tipenya Custom TCP, port range 5000 (sesuai dengan yang digunakan oleh application), dan source-nya Anywhere.

![2021080620230952165ff0b414a1fb52155f61cdad9201](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/1b060d51-61d2-47d5-a7e0-1049cc1c0167)

Agar mudah dalam mengelola Security Group, ubahlah nama Security Group menjadi application-server-sg dan beri deskripsi dengan nilai "security group for application server".

![20210806202310e56e55b4369ed3a520d71e1b8ccf5cdf](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9cba1269-72f5-4449-9501-350b1c0dfb8d)

Sehingga Security Group tampak seperti ini:

![202108062023127bb736049e6729e69105117db4c81d54](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/372bf945-7563-401c-9a59-de926afc31c4)

Setelah itu klik Review and Launch.

![20210806202313e123d99ba03fdfe909bb1d681be3a861](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/699877ad-ef34-41be-ba11-cd4d52e14db2)

Halaman ini menampilkan keseluruhan konfigurasi yang hendak ditetapkan. Anda bisa periksa kembali konfigurasinya, pastikan semua sesuai dengan yang Anda hendaki. Jika sudah sesuai, silakan klik tombol Launch.

![20210806202312427c13c1ffbfab7ec3d99673e6461120](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ee3e8ba9-0c1b-4082-bd15-76f3df0c0fd6)

Sekarang sebuah pop-up muncul. Pop-up ini menjelaskan bahwa untuk mengakses instance melalui SSH secara aman, dibutuhkan sebuah key pair. Karena tak memiliki key pair, jadi pilih saja opsi Create a new key pair, lalu isi nama key pair dengan nilai auth-api-app-server.

![20210806202312134e8dcd5a9bbfafbb3bedf245ff57f8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/bdbca937-b9f6-4f58-b44b-28a53d86b4ef)

Selanjutnya klik tombol Download Key Pair.

Simpan berkas pem yang terunduh pada lokasi yang aman. Karena berkas ini digunakan ketika hendak mengoperasikan instance melalui SSH, jadi jangan sampai hilang yah. Agar mudah, taruh saja berkas tersebut di dalam folder proyek auth-api.

![20210806202309859cee9446509b7bc17d45e9bd62deae](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/14c77251-43bc-4a75-aade-99647eb2b5f8)

Kembali ke browser.


![202108062023125a00e91ed331bfaabf3a6df1324c439b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/25ac7be8-3802-402a-b044-2decdbb589eb)

Klik tombol Launch Instance untuk membuat dan menjalankan EC2 instance.

![20210806202313a6e498d238d17b50909645d1d6850aa1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2400a4e3-0496-49b5-96fb-b8eb4abc916a)

Voila! EC2 instance berhasil dibuat dan berjalan! Anda bisa melihat statusnya dengan mengeklik tombol View Instances.

![20210806202312ea9d9f93cb0693d7f5c05b72d3aebe25](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a9a20066-7682-49ab-be04-05bef0260056)

Anda bisa lihat status dari instance tersebut adalah Running. Selanjutnya kita akan membuat kebutuhan database (untuk pengujian dan aplikasi) dengan meluncurkan cluster RDS.

### **Membuat Cluster RDS**

Kita lanjutkan dengan membuat Cluster (selanjutnya akan kita panggil `server`) RDS, tetapi sebelum itu ada hal yang perlu diingat dan diketahui.

Kita akan membuat database untuk dua hal, yakni untuk pengujian dan production yang digunakan oleh aplikasi. Best practice-nya adalah selalu pisahkan server dari kedua database tersebut karena memang kebutuhan server antara keduanya berbeda. Database yang digunakan untuk pengujian tentu memiliki spesifikasi yang rendah dibandingkan dengan database production, karena data yang digunakan untuk testing tidak akan sebanyak data yang ada di production. 

Selain itu, kita akan menerapkan CI di luar service AWS yakni menggunakan GitHub Action. GitHub Action memiliki lisensi gratis dan relatif mudah untuk digunakan. Oleh karena itu, database pengujian perlu mengaktifkan akses publik agar dapat diakses server di luar dari VPC-nya, yakni CI server dari GitHub Action. Namun untuk database production, hindari mengaktifkan akses publik karena dapat membuka kerentanan terhadap pembobolan data. Itulah sebabnya Anda perlu memisahkan server database antara pengujian dan production.

Pada praktik kali ini kita akan membuat database pengujian dan production pada satu server RDS. Hal ini bukanlah *best practice*, tetapi kami melakukannya untuk menghindari penggunaan service di luar cakupan free tier dan meminimalkan proses yang tidak terlalu esensial dalam mempelajari praktik CI/CD.

Semoga Anda paham dan dapat memaklumi hal tersebut. Mari kita lanjutkan.

Silakan kembali lagi ke halaman [AWS Management Console](https://aws.amazon.com/id/console/).

![20210806205029f426adc65404b7efb780c35390bc1a93](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/93ee84dc-9166-4449-ae52-30c65d381472)

Setelah kembali ke AWS Management Console, selanjutnya kita kunjungi halaman services Amazon RDS. Caranya, lakukan pencarian dengan kata kunci “Amazon RDS” dan klik opsi services RDS.

![202108062050364170e90d5e4640c7ad6c302c1ee10b6d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/178dab02-246c-4603-afd9-fe0c0dda5d8a)

Kemudian Anda akan diarahkan ke halaman dashboard Amazon RDS.

Untuk mulai membuat database pada Amazon RDS, silakan scroll layar hingga Anda melihat tombol `Create database`.

![20210806205036366bcf75295a182e8be6519712da1f8a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/817039a6-1bc4-4fda-accb-9410280a9625)

Klik tombol `Create database` dan Anda akan diarahkan ke halaman pembuatan database.

![202108062050360c888843d246c508607d57b04e3afb7a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c933c172-9d1a-4de1-b214-a25c6df671c4)

Pada opsi `Choose a database` creation method biarkan nilainya tetap `Standard create`.

![202108062050351137bf136d2111fcd537d6bf08008bd2](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/59d07973-aa0a-4e52-a7ab-1ee3b6df8708)

Lanjut ke Engine options, pilih engine PostgreSQL dan biarkan versi PostgreSQL tetap `12.5-R1` (agar kita dapat memanfaatkan fitur *free*).

![2021080620503500ab09d31f7c09afdaa1b717ddab204b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/7fc2837e-5136-4f91-950a-65ef8e0de54e)

**Catatan**
Hindari memilih `Postgres 15.x` (atau di atasnya) karena untuk menghubungkannya perlu SSL dan melampirkan sertifikat, di mana langkah-langkahnya tidak dibahas pada kelas ini. Selama pembelajaran, kami sarankan untuk menggunakan versi `Postgres 12.5-R1` agar langkah demi langkah dapat dijalankan dengan baik.

Jika Anda ingin menggunakan Postgres versi 15, catat dulu cara mengaksesnya pada panduan yang diberikan AWS di: [Using SSL with a Postgres DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Concepts.General.SSL.html).

Kemudian pada `DB Instance Size`, pilih opsi `Free tier` untuk memanfaatkan fitur gratis.

![202108062050355cf661cd2077eff612307106ce41c552](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4ca600e7-7eaf-4cbc-a996-d85a2f1cfc14)

Lanjut pada `DB instance identifier` berikan nama auth-api sebagai nama DB instance-nya.

![202108062050340d15c0e6490d208161da0b98efe0fc88](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/445ab4d8-d11d-41b2-9453-704001b1b088)

Kemudian pada pengisian kredensial seperti username dan password, Anda bebas tentukan sendiri, karena ini hak Anda. Jangan sampai lupa kredensialnya. Di sini kami contohkan nilai username `“postgres”` password `“supersecret”`.

![20210806205032ad715cc0aa9c8a1d8685474574420500](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/483922b6-4241-4911-a660-b977bcd65236)


Lanjut scroll halaman ke bawah hingga pada opsi `Storage`. Silakan matikan fitur autoscaling karena kita tidak membutuhkan autoscaling saat ini.

![202108062050365978b21155a111bdf362028dcdbfc624](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/398d888b-3ebe-490b-afe0-0fcd12fd989c)

Lanjut scroll halaman ke bawah hingga pada opsi `Connectivity`. Silakan ubah `public access` menjadi `Yes` karena kita butuh database server diakses pada server yang berada di luar VPC kita, yaitu diakses oleh Server CI GitHub.

![2021080620503673ea925b497e14e6d1c16bef689df865](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/19f12d7d-a162-4218-99d0-18b7730af18a)

Kemudian di bawahnya Anda akan melihat pengaturan VPC Security Group. 

Pada VPC Security Group silakan pilih opsi Create new. Kemudian beri nama VPC Security Group dengan “database-server-test-sg”. Biarkan Availability Zone tetap bernilai `No preference`.

![2021080620503531a3121b69cb79981124875c6411a74d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6bc6ea08-6d95-48fb-83ca-0004ca14f2d0)

Di bawahnya, Anda bisa melihat Additional configuration. Silakan buka dan Anda akan melihat default port dari PostgreSQL yakni, `5432`.

![202108062050352bddb21daab5ec89797082cb6feae492](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d039d204-946c-4d43-a548-15467254c5a9)

Jangan ubah nilai port-nya yah. Cukup Anda ketahui saja.

Lanjut scroll halaman ke bawah hingga Anda menemukan `Additional configuration`. Silakan klik menu tersebut dan di sana akan terlihat beberapa konfigurasi tambahan.

![20210806205035d3d297ca8265dbec1d6343167a6a0f57](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/702644a4-7db0-491e-ade5-bfb7b1d5bf46)


Pada database options, biarkan nilai initial database name kosong. Hal tersebut karena kita akan membuat database untuk aplikasi dan pengujian nanti melalui CLI menggunakan psql.

Lanjut ke bawah hingga ke opsi `Backup`. Silakan matikan `Enable automatic backups` karena kita tidak ingin database melakukan back-up saat ini.

![2021080620503228543201627dcd540ae0afb442dff97e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6eae4fd5-3f22-4cd2-a4b0-27a13a2084fc)

Selanjutnya pada opsi `Performa insights`, matikan juga `Enable Performance Insight`.

![20210806205034895c008e3c7a858831b77ca14338a791](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/1a20b2a6-ed5b-4a27-8dfd-16897be6eb36)

Terakhir pada opsi `Maintenance`, matikan `Enable auto minor version upgrade`.

![20210806205035671c6e28e6b35827f08d3b208b8958c7](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/675c8946-c95a-40d8-8b08-782e836bba1a)

Setelah semuanya selesai dan sesuai, Anda bisa klik tombol Create database yang berada di paling bawah halaman untuk mulai membuat database.

![20210806205036e21544fd812547e9d5a6acfdda057a0d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/83c83361-8561-4edf-93d7-7859f570e7fa)

Setelah menekan tombol `Create databas`e, Anda akan diarahkan ke halaman daftar database dan Anda bisa melihat auth-api database yang sedang dalam proses creating di sana.

![20210806205036f56ed72a0f2f6876244af4492b5a88ae](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/7a3e5637-5fb2-4957-93f3-772ff37bca69)

Proses pembuatan database bisa memakan waktu beberapa menit jadi silakan tunggu hingga prosesnya selesai yah. Setelah status database auth-api berubah menjadi `available`, itu berarti database siap untuk digunakan.

Setelah status menjadi `available`, Anda bisa melihat host dan port dari database server ini dengan cara klik auth-api pada DB identifier.

![20210806205035ce085142f1ec3c0d8aa5658e4f7955c4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f2639d87-44f6-4a13-b483-17ef0301d755)


Anda akan diarahkan ke halaman detail dari database server auth-api. Pada bagian Connectivity & security, Anda bisa lihat host (endpoint) dan port yang digunakan oleh database server.

![2021080620503575797720b3e01867d868e2c00a8a51f8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/cdd03d00-4893-4359-b22d-495e91141ee6)

Agar server database kita dapat diakses dari mana saja, kita ubah dulu security group yang digunakan pada server RDS. Caranya, silakan menuju services `VPC`.

![202108062050342862d6fb3dbe99786d5fc723ed2caace](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/40e74030-67ff-4e04-b4b0-69c41cb05dba)

Kemudian Anda akan diarahkan ke halaman dashboard VPC. 

![2021080620503614c3e7d470fc87c4b0ef3f0d8889068f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/5b152a1e-375e-44f2-870a-1d6953d046dc)

Silakan klik menu Security Groups yang ada di panel samping kiri.

![202108062050351bf6d4d9caffb30dbe45f172200026d4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d9506150-4e7b-4c56-94dd-52c5d8a72243)

Kemudian pilih `Security Groups` yang digunakan pada server RDS auth-api, yakni `database-server-sg`.

![20210806205036fae5a20f40d4ef61be11ca5912cc0ed5](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/55b387d3-ad31-4089-b2ed-a31fcf63ea2d)

Klik tombol *Actions -> Edit Inbound Rules* yang berada di pojok kanan atas halaman.

![20210806205035fbc2a352e3d826e29f79540cea6ab03a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d4a09e49-edf4-440c-bfac-e8042d2ef0be)

Kemudian Anda akan diarahkan ke halaman `Edit inbound rules` dari database-server-sg.

![202108062050361d8cee193a39c1a5ad5271db0e8ac2ed](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/386ba179-e4fa-4622-8c3a-f09f20ede4e4)

Tambahkan rule dengan menekan tombol `Add rule`. Kemudian isikan rule seperti ini:

![20210806205035b682d11320b7232c76380a6c7cfed5ed](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8c3a0c3e-aba6-46c1-a142-4113d6a691f1)

Dengan menambahkan rule tersebut itu berarti kita membuka akses database dari sumber mana saja.

Jika sudah, silakan klik tombol `Save rules` untuk menyimpan perubahan pada Inbound rules.

### **Membuat Database authapi dan authapi_test**

Setelah kita menyiapkan database server, selanjutnya kita perlu membuat database di dalamnya. Kita akan membuat dua database yakni authapi dan authapi_test melalui CLI menggunakan psql.

Silakan buka Terminal pada komputer Anda dan masuk ke server database menggunakan perintah berikut:

```
psql --host <endpoint> --username <username
```

Silakan ubah <endpoint> dengan alamat host atau endpoint server database dan <username> dengan kredensial username yang Anda tetapkan.

```
psql --host auth-api.csadc8kpllpa.ap-southeast-1.rds.amazonaws.com --username postgres
```

Hasilnya:

![20210807161857a16d75983ce669d0bed3ff80828ee8c3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c782f882-78b6-4619-a0ca-cdbf6195e1fb)

Kemudian buat dua database yaitu authapi dan authapi_test menggunakan perintah berikut:

```
CREATE DATABASE authapi; CREATE DATABASE authapi_test;
```

Hasilnya:

![20210807161857dee30b01b9a74d05bc6371be5f6f3353](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/83596e4a-838a-4883-abb2-3e6d065dab58)

Jika muncul respons seperti gambar di atas, berarti kedua database tersebut berhasil dibuat.

Kebutuhan untuk database telah selesai! Selanjutnya kita akan menggunakan git pada Auth API dan mengunggah repository ke GitHub.

### **Membuat Remote Repository GitHub**

Kita lanjut menggunakan git pada Auth API dan mengunggahnya ke GitHub. Kita mulai dengan membuat remote repository baru pada GitHub.

Silakan l[ogin GitHub](https://github.com/login) menggunakan akun Anda dan buat [repository baru](https://github.com/new) dengan nama `auth-api`.

![20210807164048abf0af6da07c899dfa7636b6733da8de](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/20632a95-7e6a-4d65-b20b-be9ce0a2aed7)

Kemudian klik `Create repository` untuk membuat remote repository baru.

![20210807164055c2884581d9da49ac577b7ec29d2ce342](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ad2b96ec-c8ac-40df-9afb-d5f333a0c2ca)

Remote repository berhasil dibuat dan pastikan repository masih kosong seperti gambar di atas.

Sekarang kita akan pasang git pada proyek Auth API untuk membuat local repository. Silakan buka kembali proyek Auth API pada VSCode. Kemudian pasang git pada proyek menggunakan perintah:

```
git init
```

Hasilnya:

![20210807164148f3af007bc80d192a4e0a80a908104cf8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/23d02f60-624b-49b2-a978-7d3cc97fd979)

**Catatan**: Jika gagal, pastikan Anda sudah memasang git pada komputer.

Selanjutnya buat berkas `.gitignore` pada proyek. Tulislah beberapa folder dan file penampung kredensial yang tidak perlu dikelola oleh git pada proyek. Silakan tulis kode berikut:

```js
node_modules
coverage
.env
auth-api-app-server.pem
package-lock.json
config/database/test.json
```

Setelah itu masukkan seluruh berkas (selain yang berada di .gitignore) ke *stage change* dan commit dengan pesan “initial commit” melalui kode berikut:`

```
git add .
git commit -m "initial commit"
```

Hasilnya:

![202108071647408cae8a8d6fc2770c2154b2c34da9437a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/acf133d3-a501-45bc-9d16-dd8104dbeecd)


Selanjutnya tambahkan remote repository yang sudah kita buat di GitHub pada local repository dengan perintah:

```
git remote add origin <remote repository URL
```

Silakan ganti <remote repository URL> dengan URL url remote repository GitHub yang Anda miliki. Contoh:

```
git remote add origin https://github.com/dimasmd/auth-api.git
```

Setelah itu, push branch master (branch utama) pada local repository ke remote repository dengan perintah:

```
git push origin master
```

Proses ini membutuhkan authorization pada akun GitHub. Untuk Linux dan macOS, Anda bisa menuliskan username dan password github secara langsung pada Terminal. Namun, jika menggunakan Windows, Anda bisa login melalui GitHub desktop.

Jika sudah terautentikasi, hasilnya seperti ini:

![20210807164700aeedbabd083bd09dffd54010796badee](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e2d02ec8-9d2b-460c-830e-f81ca922e95b)

Silakan kembali ke halaman remote repository GitHub pada browser. Refresh halaman tersebut dan Anda akan melihat source code proyek di sana.

![20210807164749c8c434ecd9fbe54093a5f30f6d503bc3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2201cd7b-00dc-4bdf-b2ec-f7d99c26d808)


### **Mengonfigurasi EC2 Instances dan Menjalankan Auth API**

Setelah menyiapkan local dan remote repository, kita akan mengonfigurasi kebutuhan untuk menjalankan Auth API pada server EC2 Instance, seperti memasang Node.js, menetapkan environment variable, dan memasang Process Manager.

Silakan buka Terminal/PowerShell/CMD pada directory di mana Anda menyimpan key pairs (key.pem) untuk akses EC2 instance. Kemudian tuliskan kode berikut:

```
ssh -i "<key>.pem" <user>@<alamat instance EC2>
```

Ganti <key> dengan nama berkas .pem yang Anda miliki, Kemudian ubah <user> dengan nama user yang akan login (contohnya ubuntu) dan <alamat instance EC2> dengan public DNS dari EC2 instance. Jika Anda belum mengetahui cara mengakses EC2, disarankan untuk lihat tutorial yang diberikan oleh AWS tentang [Connect to your Linux instance using SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html).

Hasilnya:

![20210807170241e81e755b070c5964c27007ba2cf57525](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9d268731-62b5-41eb-969b-7c2867aadb41)


Jika mengalami eror UNPROTECTED PRIVATE KEY FILE! Silakan ubah dulu permission access dari berkas .pem melalui perintah:

```

// Windows PowerShell/CMD

$path = ".\auth-api-app-server.pem"
# Reset to remove explicit permissions
icacls.exe $path /reset
# Give current user explicit read-permission
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
# Disable inheritance and remove inherited permissions
icacls.exe $path /inheritance:r
```

```
// Linux/macOS Terminal

chmod 400 auth-api-app-server.pem
```

Kemudian jalankan kembali perintah ssh.

Setelah berhasil masuk ke dalam instance EC2 melalui ssh, silakan pasang Node.js versi 14.x menggunakan perintah berikut:

```
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Hasilnya:

![20210807174050a254392e1f120cb078c2b49ba81d840e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/215493d3-6154-413a-ba78-433d5cd21f1e)

Pastikan Node.js terpasang dengan baik dengan mengecek versinya melalui perintah:

```
node -v
```

Jika Terminal menampilkan versi Node.js, tandanya instalasi berhasil.

![202108071741497278d628fa1fca0359e4fe9ab37ef6bc](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/151c22c2-29b2-4c34-9b76-a75aeef15f3e)

Selanjutnya kita pasang process manager agar Auth API nantinya dapat berjalan di background. Silakan pasang package [pm2](https://www.npmjs.com/package/pm2) secara global melalui perintah berikut:

```
sudo npm install pm2 -g
```

Hasilnya:

![20210807174202d9baed575983c1fcae6d60c673b03e79](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c02a52a4-0c37-4369-a169-6848a5140560)

Mantap! Kebutuhan untuk menjalankan proyek telah selesai. Selanjutnya unduh (clone) proyek Auth API dari remote repository dengan menggunakan perintah:

```
git clone <remote repository URL>
```

Ganti <remote repository URL> dengan URL yang remote repository GitHub yang Anda miliki. Contohnya

```
git clone https://github.com/dimasmd/auth-api.git
```

Eksekusi perintah tersebut dan proses cloning repository pun akan berjalan.

![20210807174151d0a0dc46213e939085793770260dbc6a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/362889e4-1966-458b-8dcd-b3864d59baa4)


Masuk ke dalam folder auth-api dengan perintah:``

```
cd auth-api
```

Kemudian pasang seluruh package yang dibutuhkan proyek dengan perintah:

```
npm install
```

Hasilnya:

![202108071744137c16d743fbc665752fdb658ad60696ed](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e99b3725-621d-4d5e-ad0c-092a4f933976)

Jangan langsung menjalankan proyeknya karena kita butuh konfigurasi variable environment terlebih dulu. Silakan buat berkas .env dengan menggunakan perintah berikut:

```
touch .env
```

Perintah touch .env akan membuat berkas baru bernama .env pada auth-api. Silakan buka berkas tersebut dengan perintah:

```
vim .env
```

Hasilnya:

![202108071744014afd934387065320cc3162213e6c413c](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b05c665c-348f-41cd-bcd8-ad0042593b9b)

Anda akan masuk ke vim editor yang kondisinya read-only. Untuk menuliskan teks di berkas .env, Anda perlu menekan tombol Insert pada keyboard.

![202108071746408e36ec0044a7083d08cc3f0430486235](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/5df55d91-41a2-44bd-907b-043dbaa46b97)

Setelah menekan tombol Insert akan muncul keterangan `-- INSERT --` di pojok kiri bawah Terminal. Itu berarti kita sedang berada di mode writing.

Silakan tulis kode dalam menetapkan nilai environment variable untuk production. Anda bisa copy dari berkas .env yang ada di lokal dan sesuaikan nilai dari host HTTP server, database host, kredensial, dan lainnya. Contohnya seperti berikut:

`.env`:

```
# HTTP SERVER
HOST=0.0.0.0
PORT=5000
 
 
# POSTGRES
PGHOST=auth-api.csadc8kpllpa.ap-southeast-1.rds.amazonaws.com
PGUSER=postgres
PGDATABASE=authapi
PGPASSWORD=supersecret
PGPORT=5432
 
 
# POSTGRES TEST
PGHOST_TEST=auth-api.csadc8kpllpa.ap-southeast-1.rds.amazonaws.com
PGUSER_TEST=postgres
PGDATABASE_TEST=authapi_test
PGPASSWORD_TEST=supersecret
PGPORT_TEST=5432
 
 
# TOKENIZE
ACCESS_TOKEN_KEY=8b7b4ef375716ab08b2a3951b29d52fc00b1c855f9d1a847229b8c5935bef56d9d271e76a9cf08e614300395c3b90ebe559cf968a0741b18c9505549394b2c70
REFRESH_TOKEN_KEY=5078605e074a462b1460608fcbe0d0963c644402e04ad334455ff5a856cb43fd99825861dde02957d5e3184c90c532ca7d0249df20fe93d535632f3d11be7bad
```

Hasilnya:

![202108071749169d7cf9f155c2238927e7daf0a9b0d481](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b49cad98-bc52-4263-b88d-371e97223a9a)

Jika semua nilai variabel sudah terisi, simpan perubahan pada berkas .env dengan cara:

- Tekan tombol Escape atau ESC pada keyboard. Hingga indikator -- INSERT --- menghilang.

- Kemudian ketik :wq pada keyboard hingga tampak tulisan seperti ini pada pojok kiri bawah

  ![2021080717483788b0766695c85217a0c5c72003bf1e60](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/cb6c0fb8-da73-4ea1-bbc4-5af1b387970f)

- Selanjutnya tekan Enter dan Anda akan keluar dari vim editor.
  
Setelah environment variable selesai, ada satu konfigurasi lagi yang perlu kita siapkan, yaitu konfigurasi database untuk proses migration pada database testing melalui berkas `test.json`.

Silakan buat folder config/database pada proyek auth-api menggunakan perintah.

```
mkdir -p config/database
```

Kemudian buat berkas test.json menggunakan perintah:

```
touch config/database/test.json
```

Lanjut buka berkas test.json dengan perintah:

```
vim config/database/test.json
```

Hasilnya:

![202108071839153ea793761da3b914986a1f763815083f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2b1b400d-ec1c-4b7e-af00-d26742a330d0)


Silakan tulis konfigurasi sama seperti berkas `test.json` yang ada di lokal. Namun, sesuaikan nilai host, user, dan password dengan server database yang dibuat pada AWS. Contoh:


```js
{
"user": "postgres",
"password": "supersecret",
"host": "auth-api.csadc8kpllpa.ap-southeast-1.rds.amazonaws.com",
"port": 5432,
"database": "authapi_test"
}
```

Hasilnya:

![202108071839155d815c031b34418e017f81817c0cec6b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4cb22e0c-e9de-4cfa-9fe2-4239caa2f543)


Simpan perubahan dengan menggunakan perintah `:wq`.

Konfigurasi selesai! Sebelum menjalankan Hapi server menggunakan pm2, lakukan migration terlebih dahulu supaya tabel users dan authentications terbentuk di database `authapi` dan `authapi_test`. Silakan tulis perintah berikut:

```
npm run migrate up
```

Lanjutkan juga dengan perintah di bawah ini:

```
npm run migrate:test up
```

Hasilnya:

![20210807183915d52433ac74f0063c074c78093f186ed4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b50e3554-0c92-4da8-a09f-8964dba2afe7)

Untuk memastikan semuanya sudah benar. Kita coba jalankan pengujian menggunakan perintah:

```
npm run test
```

Hasilnya:

![202108071922498f55c7a23d1f29ef601c6dfa05c6e4a7](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/7d96695e-8bac-460d-9e10-459ff76acb0c)

Hore semuanya hijau! Sekarang jalankan HTTP server dengan PM2 melalui perintah berikut:`

```
pm2 start npm --name "auth-api" -- run "start"
```

Hasilnya:

![20210807192249163616b453cd9306abdd9a9678006888](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6e20d218-7db6-4282-852c-f58399cb69d6)

Mantap! Sekarang HTTP server sudah berjalan dan Anda bisa mengaksesnya melalui IPv4 public EC2 instance dan port 5000.

![2021080719224929ecf6c72048c51b25a194e137097b07](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4bc695e3-828f-47b8-adba-5f98008d000d)


### **Implementasi CI/CD Menggunakan GitHub Action**

Auth API kita sudah berjalan secara production di EC2 instance. Namun, saat ini proses deployment masih dilakukan secara manual yang notabene rentan terjadi human error. Sekarang saatnya kita mangautomasikan proses deployment dengan membuat CI/CD pipeline menggunakan GitHub Action. Tujuan akhir kita adalah membuat workflow CI/CD pipeline seperti ini:

![20210825111457a2c206108c00ea66163bf83d569c08dd](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/04faecf2-25ef-446f-ba37-3ec5750b0c5f)
Alur CI/CD menggunakan GitHub Action

### **Membuat CI Pipeline menggunakan GitHub Action**

Mari kita membuat CI Pipeline menggunakan GitHub Action terlebih dahulu. Caranya yaitu dengan membuat berkas .yml di dalam folder .github/workflows repository. Dalam berkas tersebut, definisikan kebutuhan dan juga alur kerja (workflow) untuk menjalankan sebuah aksi. Satu berkas .yml akan dibaca sebagai satu buah aksi.

Silakan buka kembali proyek Auth API dan buat berkas baru bernama ci.yml pada folder .github/workflows (buat folder baru).

![20210807214341517b3fe44244b6e2d1a09ac51e40f61f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/25be8f8f-03d5-418c-a951-45057cd86e83)

Di dalamnya, tulis kode berikut:

`ci.yml`
```yml
name: Continuous Integration
 
on: 
  pull_request:
    branches:
      - master
 
jobs:
  test:
    runs-on: ubuntu-latest
 
    strategy:
      matrix:
        node-version: [14.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
 
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install migrate and test
      run: |
        npm install
        npm run migrate up
        npm run test
      env:
        CI: true
        PGHOST_TEST: ${{ secrets.PGHOST_TEST }}
        PGUSER_TEST: ${{ secrets.PGUSER_TEST }}
        PGDATABASE_TEST: ${{ secrets.PGDATABASE_TEST }}
        PGPASSWORD_TEST: ${{ secrets.PGPASSWORD_TEST }}
        PGPORT_TEST: ${{ secrets.PGPORT_TEST }}
        PGHOST: ${{ secrets.PGHOST_TEST }}
        PGUSER: ${{ secrets.PGUSER_TEST }}
        PGDATABASE: ${{ secrets.PGDATABASE_TEST }}
        PGPASSWORD: ${{ secrets.PGPASSWORD_TEST }}
        PGPORT: ${{ secrets.PGPORT_TEST }}
        ACCESS_TOKEN_KEY: ${{ secrets.ACCESS_TOKEN_KEY }}
        REFRESH_TOKEN_KEY: ${{ secrets.REFRESH_TOKEN_KEY }}
```

**Catatan**:
Pastikan spasi dan tab sama dengan yang ada di modul karena dalam bahasa YAML hal ini sangat berpengaruh. Jika Anda belum familier dengan bahasa YAML, silakan pelajari secara singkat pada tautan berikut: [Learn yaml in Y Minutes](https://learnxinyminutes.com/docs/yaml/).

GitHub Actions (dan kebanyakan tools CI lainnya) menggunakan format YAML untuk mendefinisikan alur dari sebuah actions. Format YAML cocok untuk digunakan karena alur kerja yang didefinisikan relatif mudah untuk dibaca.

Kami tidak akan menjelaskan secara detail bagaimana kode GitHub Actions ditulis, tetapi hanya bagian-bagian penting saja. Pada bagian terluar berkas ci.yml terdapat properti `name`, `on`, dan `jobs`. Berikut penjelasan dari masing-masing properti tersebut:

- `name`: merupakan nama dari actions. Karena ini CI pipeline, maka namanya adalah Continuous Integrations.

- `on`: merupakan event trigger atau event yang dapat men-trigger kapan actions harus berjalan. Di properti ini, kita mendefinisikan `pull_request` pada branch `master` sebagai event trigger.

- `jobs`: merupakan properti yang mendefinisikan pekerjaan yang dilakukan ketika event trigger dibangkitkan. Satu GitHub Actions dapat terdiri dari beberapa jobs. Namun pada contoh kali ini, kita hanya mendefinisikan satu jobs yaitu `test`. Di dalam job test kita definisikan alur dan cara kerjanya, seperti mendefinisikan plugin yang digunakan, scripts yang perlu dijalankan, dan menetapkan nilai-nilai environment yang diperlukan.

Anda juga mungkin menyadari beberapa nilai environment dituliskan dengan memanfaatkan nilai dari properti milik secrets. Yups, nantinya seluruh nilai environment akan kita simpan pada *repository secrets*.

Bila Anda ingin mengetahui lebih dalam bagaimana menuliskan workflow pada GitHub Actions, kami sangat merekomendasikan untuk membaca dokumentasi yang diberikan langsung oleh GitHub mengenai [GitHub Actions](https://docs.github.com/en/actions). Oke, mari kita lanjutkan.

Simpan perubahan pada berkas tersebut, kemudian commit dan push perubahannya dengan perintah:

```
git add .
git commit -m "add ci action"
git push origin master
```

Setelah berhasil push maka repository GitHub auth-api sudah memiliki actions CI yang ter-trigger bila ada pull request pada branch master.

Sebelum mencoba pull request, kita perlu menyiapkan environment variable yang dibutuhkan oleh proses CI terlebih dahulu. Karena nilai environment variable tersebut bersifat rahasia atau sensitif, maka simpan nilainya pada repository secrets.

Silakan buka halaman repository GitHub proyek Auth API Anda. Kemudian klik tab `Settings`.

![202108072147468475a7dcec10b9d365ff6c1350a11a2f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a4d5403d-adfe-4d9f-95ac-e7bfa5e418ee)

Kemudian pilih menu `Secrets` pada panel samping kiri halaman setting.

![202108072147447300e296b3d69a641247c321a3d871e6](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4e6381e9-a8ec-422c-9a57-9a07391c21e7)

Setelah itu klik tombol `New repository secret `untuk membuat repository secret baru.

![202108072147448d63417019179dceba59f5a3b5fab5cb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d208a455-0dd7-4742-9f5f-49b8bfb6ba48)

Selanjutnya Anda akan diarahkan ke halaman input secret.

![20210807214743a72225dcaa36465a883dcf71661fc7a4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/333ad290-0b6b-4a9b-877b-71423e1ed65b)


Pada kolom input `Name` isi dengan nama environment variable. Kemudian untuk input Value, isi dengan nilai environment variable. Contoh name `PGHOST_TEST` dengan nilai `auth-api.csadc8kpllpa.ap-southeast-1.rds.amazonaws.com` (sesuaikan dengan host/endpoint RDS server Anda):

![202108072149109100d9f3e0b05d8ec0e3b14171a1c632](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/195d7977-feaa-4ee8-9ad3-81d41b6b53b5)


Untuk menambah dan menyimpan nilai secrets, silakan klik tombol `Add secret`. 

Pastikan nilai secrets yang baru saja kita tambahkan muncul pada Repository secrets.

![20210807214911114c6e622a6a01d42d9c42d200f58da4](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/aef17196-eef2-428f-92a6-87f81130ed28)


Silakan tambahkan repository secret lain dengan nilai-nilai berikut:

- PGUSER_TEST: `postgres` (sesuaikan dengan kredensial Anda)
- PGPASSWORD_TEST: `supersecret` (sesuaikan dengan kredensial Anda)
- PGDATABASE_TEST: `authapi_test`
- PGPORT_TEST: `5432`
- PGHOST: `auth-api.csadc8kpllpa.ap-southeast-1.rds.amazonaws.com` (sesuaikan dengan host/endpoint RDS server Anda)
- PGUSER: `postgres` (sesuaikan dengan kredensial Anda)
- PGDATABASE: `authapi_test`
- PGPASSWORD: `supersecret` (sesuaikan dengan kredensial Anda)
- PGPORT: 5432
- ACCESS_TOKEN_KEY: (access token key Anda)
- REFRESH_TOKEN_KEY: (refresh token key Anda)
  
**Catatan**: Untuk nilai `PGDATABASE`, tetap gunakan database testing (`authapi_test`). Hal tersebut karena sejatinya proses CI tidak perlu bersentuhan dengan database production. Nilai `PGDATABASE` pada proses CI digunakan dalam proses migration database menggunakan perintah `npm run migrate`.

Berikut tampak repository secret setelah Anda memasukkan seluruh nilai yang ada di atas.

![2021080721551274990f6242adb8e506b7a925027c321d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/729fcfc6-2233-459a-9ed9-c80cc0e7718a)

Sekarang, kita bisa coba trigger CI dengan membuat pull request ke branch master. Caranya:

- Buat branch baru di lokal repository,
- Push branch baru ke remote repository.
- Pull request branch baru ke branch master.
  
Yuk kita mulai. Silakan buka kembali proyek Auth API pada VSCode dan anggaplah kita membuat fitur baru yakni “say hello world”. Jadi, buat branch baru dengan nama “feature-say-hello-world” dengan perintah berikut:

```
git checkout -b feature-say-hello-world
```

**Catatan**: perintah tersebut digunakan untuk membuat sekaligus berpindah ke branch `feature-say-hello-world`.

Hasilnya:

![20210807215745a27b1d7c2bb9dd68d43a9990936791bd](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b409bd4a-b85d-444b-afac-556b259eed6f)

Selanjutnya buat fitur say hello world pada Endpoint `GET` /. Seperti biasa, kita tulis testingnya terlebih dahulu. Tambahkan skenario testing pada kode yang diberi tanda tebal.

```js
// createServer.test.js

const pool = require('../../database/postgres/pool');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const AuthenticationsTableTestHelper = require('../../../../tests/AuthenticationsTableTestHelper');
const injections = require('../../injections');
const createServer = require('../createServer');
 
describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });
 
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
    await AuthenticationsTableTestHelper.cleanTable();
  });
 
  it('should response 404 when request unregistered route', async () => {
    // Arrange
    const server = await createServer({});
 
    // Action
    const response = await server.inject({
      method: 'GET',
      url: '/unregisteredRoute',
    });
 
    // Assert
    expect(response.statusCode).toEqual(404);
  });
 
  describe('when GET /', () => {
    it('should return 200 and hello world', async () => {
      // Arrange
      const server = await createServer({});
      // Action
      const response = await server.inject({
        method: 'GET',
        url: '/',
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual('Hello world!');
    });
  });
 
  // Skenario testing lain ...
});
```

Jalankan testingnya dan hasilnya akan merah:

![202108072200233417857a0fab720a4d3a4cbff3220adc](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/29369fda-2826-4e47-b58f-55ee7688f241)

Sebelum memperbaiki pengujiannya, alangkah baiknya kita coba dulu pull request dengan skenario gagal seperti ini. Hal tersebut supaya kita mengetahui apa yang terjadi jika Anda atau anggota tim melakukan pull request dengan pengujian yang gagal.

Silakan commit dan push perubahan ke branch feature-say-hello-world ke remote repository dengan menggunakan perintah:

```
git add .
git commit -m "add say hello world test case"
git push origin feature-say-hello-world 
```

Hasilnya:

![202108072200248091d4ddd509f222cb8d2149a44c4ea6](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/13975d16-8dcc-4401-8f5b-4a59d47a3ad3)

Sekarang kembali ke halaman GitHub repository Auth API Anda. Seharusnya terdapat branch baru yaitu feature-say-hello-world.

![20210807220206529fbfc7943e4e5042a201368d168c9e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e702005a-73e3-44ac-b45c-36d38790de97)

Buat pull request dengan klik tombol `View all branches.`

![202108072202057bfd803c4b298191085d3f1b28d4fed3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a28e97f9-47f7-42bd-8da7-824b3eaa4fe2)


Kemudian pada halaman daftar branches, buat pull request baru dengan klik tombol `New pull request` dari branch `feature-say-hello-world`.

![20210807220206b46d9c215c703b214012bee4a7cc2a3e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/815fe442-6bd7-486d-beaf-a39b56065e39)

Secara default pull request akan dilakukan dari branch feature-say-hello-world ke branch master (utama).

![20210807220206366fbde85285f7fa631cbc6a3ba1966d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6d67ba88-823d-4a21-8e7b-a98f01735e0a)

Biarkan konfigurasi tetap seperti default dan klik Create pull request untuk mulai membuat pull request.

![2021080722020655225d98b709e542adce4c00d7b1ed90](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/43ef88a1-b44e-473b-8631-0342dcb63e20)


Setelah pull request berhasil dibuat, maka actions CI akan berjalan seperti pada gambar di atas.

Karena kita melakukan pull request dengan hasil pengujian yang gagal, maka CI pun akan memberitahukan bahwa proses pengujiannya gagal.

![20210807220204f8226d5d27f17c185c709054c1b5f899](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/213ac858-cb7d-45b1-89bd-4f29fefe8fab)


Dari sini kita tahu bahwa kode yang di PR oleh Anda atau tim tidaklah benar. Detail kesalahan yang terjadi dapat dilihat dengan klik tautan `Details`.

![2021080722020652245622913b546dce0ced93b81f4f80](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/645b62ac-6dae-4e38-84d5-cbcd0248e5d5)

Kembali ke halaman pull request. Karena proses pengujian pada CI gagal, reviewer bisa langsung close atau menolak pull request dengan klik tombol `Close pull request`.

![20210807220205ec26f05540b107f90483bc1e28dfdb5f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4b2184c7-53a6-469b-a48e-79398201dfc9)


Sekarang, kita coba perbaiki dengan membuat pengujiannya hijau.

Silakan buka kembali VSCode dan buat pengujiannya menjadi hijau dengan menuliskan kode yang diberi tanda tebal pada fungsi createServer:

```js
// createServer.js

const Hapi = require('@hapi/hapi');
const ClientError = require('../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTranslator');
const users = require('../../Interfaces/http/api/users');
const authentications = require('../../Interfaces/http/api/authentications');
 
const createServer = async (injections) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
  });
 
  await server.register([
    {
      plugin: users,
      options: { injections },
    },
    {
      plugin: authentications,
      options: { injections },
    },
  ]);
 
  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({
      value: 'Hello world!',
    }),
  });
 
  server.ext('onPreResponse', (request, h) => {
    // mendapatkan konteks response dari request
    const { response } = request;
 
    if (response instanceof Error) {
      // bila response tersebut error, tangani sesuai kebutuhan
      const translatedError = DomainErrorTranslator.translate(response);
 
      // penanganan client error secara internal.
      if (translatedError instanceof ClientError) {
        const newResponse = h.response({
          status: 'fail',
          message: translatedError.message,
        });
        newResponse.code(translatedError.statusCode);
        return newResponse;
      }
 
      // mempertahankan penanganan client error oleh hapi secara native, seperti 404, etc.
      if (!translatedError.isServer) {
        return h.continue;
      }
 
      // penanganan server error sesuai kebutuhan
      const newResponse = h.response({
        status: 'error',
        message: 'terjadi kegagalan pada server kami',
      });
      newResponse.code(500);
      return newResponse;
    }
 
    // jika bukan error, lanjutkan dengan response sebelumnya (tanpa terintervensi)
    return h.continue;
  });
 
  return server;
};
 
module.exports = createServer;
```

Jalankan testing dan hasilnya akan hijau:

![202108072213501646697b56983a8060c131a22cf81269](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9e3776b9-3e09-4042-af0c-6d797e234c69)

Kita commit perubahan dan push kembali branch `feature-say-hello-world` ke remote repository menggunakan perintah:

```
git add .
git commit -m "pass say hello world test case"
git push origin feature-say-hello-world
```

Hasilnya:

![202108072213501b0c3055a7d97bfd7680d5790dcf3bf0](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ee75a078-4f1c-42d7-8ddc-3d2cb6aa42c4)

Kembali ke GitHub Repository. Sekarang kita buat pull request lagi dengan cara yang sama yaitu *View all branches -> New pull request* pada branch *feature-say-hello-world*.

![2021080722135102a2641e22d549ff9f6d64207501494b](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/59258e3d-1eb3-441b-aca9-b8afba5f32f3)

Klik` Create pull request` untuk mulai membuat pull request baru.

Setelah pull request berhasil dibuat, tunggu proses CI hingga selesai dan lolos.

![20210807222049c3b4c5592f82b3303588c95a5dd1f12f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ae441f7b-8068-48e9-867f-7d03790a61ea)

Proses CI selesai dan lulus. Sehingga, reviewer bisa merge pull request dengan aman. Namun, sebelum melakukan merge pull request, kita buat dulu CD pipeline agar perubahan kode langsung bisa di-deploy secara otomatis ke server EC2.

### **Membuat CD Pipeline menggunakan GitHub Action**

Kita sudah berhasil mengimplementasikan CI Pipeline menggunakan GitHub Action. Kini setiap kali ada pull request yang masuk ke branch master akan dicek melalui pengujian. Dengan begitu, jika terjadi eror, kita dapat mengetahuinya dengan lebih cepat. Selanjutnya, kita akan menerapkan CD pipeline menggunakan GitHub Actions agar proses deployment aplikasi ke EC2 instances dapat dilakukan secara otomatis.

Sebelum membuat berkas action baru, kita perlu pindah kembali ke branch master. Caranya gunakan perintah berikut:

```
git checkout master
```

Hasilnya:

![20210807222305069acd61c814491608f2d0fed2985b0f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2c72eeaa-53b7-41a4-8a3e-5a52fcbaeee1)

Setelah itu, silakan buat berkas actions baru bernama `cd.yml` pada folder `.github/workflows`.

![202108072223054e7cf9cf0c58ad9511f617a5259c6b92](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/11c76d88-b19a-41f2-a2b7-1c5c316a4f76)

Di dalamnya, tuliskan workflow dari CD pipeline berikut:

`cd.yml`
```yml
name: Continuous Deployment
 
on: 
  push:
    branches:
      - master
 
jobs:
  deploy:
    runs-on: ubuntu-latest
 
    steps:
    - name: SSH and deploy app
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SSH_HOST }}
        username: ${{ secrets.SSH_USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        port: ${{ secrets.SSH_PORT }}
        script: |
          cd ~/auth-api
          git pull origin master
          npm install
          npm run migrate up
          pm2 restart auth-api
```

Continuous Deployment merupakan proses deployment secara otomatis yang dilakukan bila proses pengujian lolos. Sehingga, pada workflow yang dituliskannya pun memiliki skenario layaknya melakukan deploying secara manual.

Pada GitHub Actions `ci.yml`, proses deployment-nya pun dilakukan melalui SSH (dengan memanfaatkan tools ssh-actions). Di sana kita memberikan nilai host, username, port, dan key yang dibutuhkan oleh SSH. Seluruh nilainya akan kita simpan pada repository secrets.

Silakan simpan berkas `cd.ym`l. Kemudian commit dan push perubahannya pada branch master dengan menggunakan perintah:

```
git add .
git commit -m "add cd action"
git push origin master
```

Hasilnya:

![2021080722280373c9f996be4ef8679717fa7f8e530fbe](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/32f32d86-beda-464b-b2f9-7ee2dd0efea9)

Sekarang CD actions akan ter-trigger setiap kali ada event push (termasuk merging) ke branch master. Sebelum kita merge pull request yang sudah dilakukan sebelumnya, jangan lupa untuk menambahkan dulu nilai secrets yang dibutuhkan oleh CD actions.

Buka GitHub Repository Auth API Anda, akses tab `Settings`, kemudian pilih menu `Secrets` pada panel samping kiri. Kemudian, tambahkan repository secrets berikut:

- SSH_HOST: `ec2-52-221-218-124.ap-southeast-1.compute.amazonaws.com` (sesuaikan dengan public DNS EC2 server Anda)
- SSH_PORT: `22`
- SSH_USERNAME: `ubuntu`
- SSH_KEY: (buka berkas .`pem` menggunakan Notepad/Text Editor, kemudian `copy seluruh teksnya` dan paste sebagai value).
  
Pastikan Anda menambahkan seluruh secrets variable yang dibutuhkan.

![20210807222955f625c447c0eb9db9aa3e2a95e5422489](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ef4c0404-ce28-484f-aee5-5cab6348dfab)

Setelah menambahkannya, kita bisa merge pull request sebelumnya. Silakan menuju halaman detail pull request (yang lolos proses CI).

![202108072229559e5520fe357f22f71a1dfd1d8b45daa7](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/33dc85ac-486b-4fdd-beed-a6e21d927fa9)

Klik tombol `Merge pull request` -> `Confirm merge` untuk mulai proses merging.

![20210807222955ced0121ea4654bdf248dd830c9af86d7](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/955068eb-a23f-4871-8f3f-d300115c485f)

Jika pesan seperti gambar di atas muncul, proses merging berhasil.

Sekarang seharusnya proses deployment sedang berjalan. Untuk memantau prosesnya, Anda bisa melihatnya pada tabs `Actions`.

![2021080722295575c48704bb39f203c7477af554118118](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/66b97b2d-39f6-4791-a2e1-7e764fe512c7)

Kemudian pilih Merge pull request actions yang sedang berjalan.

![2021080722295521ee62481aeee19f357458d9940a7f54](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ba32ea77-1cb7-4eab-8936-48ec059ffc85)

Di sini Anda bisa melihat detail dari proses yang berjalan. Gambar di atas menunjukkan proses deployment aplikasi berhasil dilakukan. *Yeay*!

Silakan akses endpoint GET / dari Auth API server productions. Seharusnya perubahan sudah bisa Anda lihat di sana.

![20210807222954f4b7ec2bfc1951d69a78096fa56d4435](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a87ac128-1d1f-489f-9f84-f86c847d7147)

Selamat! Kini Auth API berhasil menerapkan CI/CD dalam proses deployment aplikasi. Dengan begitu prosesnya dapat lebih aman, cepat, dan efektif.

Jika Anda mengembangkan fitur selanjutnya, berikut alur yang perlu diingat:

1. Checkout ke branch master lokal;
2. Update (pull) branch master lokal dari remote;
3. Buat branch lokal baru dari master, beri nama sesuai fitur yang hendak dikembangkan;
4. Bangun fitur di branch lokal baru;
5. Push branch lokal baru ke remote;
6. Buat Pull Request;
7. CI Actions akan berjalan;
8. Jika pengujian lulus lanjut proses review, jika tidak close pull request;
9. Setelah review selesai, lanjut merge pull request;
10. Proses deployment berjalan.


## **Security**

### **Pendahuluan Security**

*“Security comes first!”*

Kita sering mendengar ungkapan tersebut ketika membuat aplikasi apa pun. Terutama jika aplikasi Anda mengandung data sensitif, baik yang tersimpan dalam database maupun data yang hendak dikirim ke server. Tentu Anda tak ingin data sensitif tersebut dicuri orang lain, bukan? Ingat, kepercayaan dan integritas Anda sebagai developer sangat dipertaruhkan jika hal tersebut benar terjadi.

Dalam modul ini kita akan membahas mengenai security. Kita akan mengetahui apa saja serangan terhadap keamanan yang dapat terjadi pada aplikasi, khususnya RESTful API. Serta, Anda juga akan belajar bagaimana langkah preventif terhadap serangan-serangan tersebut.

Pada akhir modul ini, Anda diharapkan dapat:

- Mengenal serangan SQL injection dan cara pencegahannya.
- Mengenal Browser Security (CORS).
- Mengenal serangan DoS dan cara pencegahannya.
- Mengenal serangan Man In The Middle dan cara pencegahannya.

### **SQL Injection**

Salah satu serangan keamanan yang rentan terjadi pada database adalah SQL injection. SQL Injections merupakan serangan yang dilakukan melalui inputan atau payload dalam memanipulasi SQL untuk diproses oleh database secara ilegal. SQL Injection merupakan masalah serius dan berbahaya karena target utama dari serangan ini adalah data.

Melalui SQL injection, penyerang dapat melakukan aktifitas ilegal seperti:

- Bypass otentikasi
- Pencurian data
- Memanipulasi data (menambah, menghapus, atau mengubah data)


#### **SQL injection dalam bypass otentikasi**

Jika otentikasi aplikasi Anda mengandalkan query berdasarkan username dan password pada database, melalui SQL injection penyerang dapat melewati otentikasi tanpa memberikan kredensial yang benar.

Hal tersebut dapat terjadi jika kode SQL Anda untuk mendapatkan autentikasi terlihat seperti contoh di bawah ini:

```js
// main.js

const username = 'dicoding';
const password = 'supersecret';

const query = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}" LIMIT 1;`;

console.log(query);

/**
 * output
 * SELECT * FROM users WHERE username = "dicoding" AND password = "supersecret" LIMIT 1;
 */
```

Penyerang akan mudah memanipulasi SQL dengan memberikan nilai username dan password yang dapat mengubah sintaks SQL. Seperti “ OR “” =”. 

```js
// main.js

const username = '" or ""="';
const password = '" or ""="';

const query = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}" LIMIT 1;`;

console.log(query);

/**
* output
* SELECT * FROM users WHERE username = "" or ""="" AND password = "" or ""="" LIMIT 1;
*/
```

SQL tersebut valid. Jika database mengeksekusinya, ia akan mengembalikan data users karena `OR` “”=”” selalu menghasilkan kondisi `TRUE`.

Untuk lebih merasakan bagaimana SQL injection dapat melewati otentikasi, kami menyarankan Anda untuk mencoba demo yang diberikan oleh *hacksplaining* berikut: [SQL Injections Exercise](https://www.hacksplaining.com/exercises/sql-injection).

#### **Pencurian dan Manipulasi data**

SQL injection juga dapat dilakukan penyerang untuk mencuri data. Contohnya seperti berikut:

```js
// main.js

const category = 'food';

const query = `SELECT * FROM product WHERE category = "${category}";`;

console.log(query);

/**
* output
* SELECT * FROM product WHERE category = "food";
*/
```

Dengan mengubah nilai category seperti berikut:

```js
// main.js

  const category = 'food"; SELECT username, password FROM users; --';

  const query = `SELECT * FROM product WHERE category = "${category}";`;

  console.log(query);

  /**
  * output
  * SELECT * FROM product WHERE category = "food; SELECT username, password FROM users; --";
  */
```

**Catatan**: Sintaks `--` pada SQL digunakan untuk menghiraukan seluruh teks atau command yang dituliskan setelahnya.

Selain itu, cara tersebut dapat dilakukan untuk memanipulasi data sekalipun, contohnya seperti menghapus seluruh users pada database.

```js
// main.js

const category = 'food"; DELETE FROM users WHERE 1=1; --';

const query = `SELECT * FROM product WHERE category = "${category}";`;

console.log(query);

/**
* output
* SELECT * FROM product WHERE category = "food"; DELETE FROM users WHERE 1=1; --";
*/
```

Mengerikan, bukan?

#### **Langkah preventif**

Celah ini dapat terjadi karena input atau payload dari user dimanipulasi untuk mengubah struktur SQL. Dengan begitu langkah preventif yang perlu kita ambil adalah validasi input atau payload yang dikirimkan user sebelum diproses ke database. Validasi input dapat dilakukan secara manual (sanitizing atau escaping input) atau *best practice*-nya bisa menggunakan Parameterized Statements dan Object Relational Mapping (ORM) ketika membangun SQL untuk berinteraksi dengan database.

##### **Parameterized Query**

Bahasa pemrograman dapat berinteraksi dengan database menggunakan drivers. Driver membuat bahasa pemrograman seperti JavaScript dapat membangun dan menjalankan SQL statement pada database untuk mendapatkan atau memanipulasi data sesuai kebutuhan. Dalam membangun SQL statement, tak jarang kita melibatkan variabel agar SQL statement dapat dibangun sesuai kebutuhan. Saat itulah peluang untuk SQL injections dapat terjadi.

Teknik parameterized query merupakan teknik yang dapat mencegah terjadinya SQL injections. Karena melalui teknik tersebut, parameter atau variabel yang dilibatkan dalam membangun SQL akan diperlakukan secara aman.

Berikut adalah contoh teknik parameterized query bila Anda menggunakan `pg` sebagai driver
`PostgreSQL`.


```js
const { Pool } = require('pg');
 
(async () => {
  const pool = new Pool();
 
  const username = 'dicoding';
  const password = 'secret';
 
  // parameterized query
  const sql = {
    text: 'SELECT * from users WHERE username = $1 AND password = $2',
    values: [username, password],
  };
 
  const result = await pool.query(sql);
 
  if (!result.rowCount) {
    throw new Error('bad username or password');
  }
})();
```

Kontras dengan teknik *concatenating string* secara kasar yang `sangat berbahaya` ini.

```js
const { Pool } = require('pg');
 
(async () => {
  const pool = new Pool();
 
  const username = 'dicoding';
  const password = 'secret';
 
  // ini membuka peluang sql injection
  const sql = `SELECT * from users WHERE username = '${username}' AND password = '${password}'`;
 
  const result = await pool.query(sql);
 
  if (!result.rowCount) {
    throw new Error('bad username or password');
  }
})();
```

Perbedaan di antara keduanya adalah bagaimana kita memberikan nilai parameter atau variabel dalam membangun SQL yang akan dieksekusi oleh `pool.query`. Pada kode pertama, parameter username dan password tidak diberikan secara langsung tetapi dipisahkan menggunakan teknik parameterized query. Dengan begitu, pembuatan SQL statement akan diintervensi oleh driver (pg) dan nilai parameter akan diperlakukan secara benar dan aman. Lalu, pada kode yang kedua, kita membangun SQL statement secara penuh menggunakan template string. Tidak ada proses validasi atau sanitasi sehingga hal ini membuka peluang terjadinya SQL injection.

Ingat! Bagaimana pun keadaanya, bila terdapat variabel atau parameter yang dilibatkan dalam membangun SQL statement, selalu gunakan parameterized query agar terhindar dari serangan SQL injection.

##### **Object Relational Mapping (ORM)**

Pernah mendengar istilah Object Relational Mapping (ORM)? Object Relational Mapping atau ORM merupakan framework yang dapat menerjemahkan SQL dalam bentuk object (seperti JavaScript object) dalam bertransaksi kepada database. Beberapa developer menyukai ORM karena proses transaksi ke database dapat dilakukan lebih cepat. Dengan ORM transaksi database dapat dilakukan tanpa menuliskan SQL statement secara manual.

Karena penggunaan ORM developer jarang menuliskan SQL statement, secara tidak langsung penggunaan ORM juga dapat mencegah terjadinya SQL injection. ORM merupakan abstraksi yang menggunakan database driver seperti pg. Syukurlah ORM seperti sequelize--atau lainnya--ketika di balik layar ia menggunakan parameterized query dalam membangun SQL statement.

Berikut adalah contoh penggunaan ORM (sequelize).

```js
// index.js

const User = require('./User');
 
(async () => {
  const username = 'dicoding';
  const password = 'secret';
 
  const user = await User.findOne({
    where: {
      username,
      password,
    },
  }); // SELECT * FROM users WHERE username = 'dicoding' AND password = 'secret';
 
  if (!user) {
    throw new Error('bad username or password');
  }
})();
```

```js
// User.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connections');
 
class User extends Model {}
 
User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'users',
  modelName: 'User',
});
 
module.exports = User;
```

```js
// connections.js

const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
 
module.exports = sequelize;
```

### **Browser Security**

#### **Browser Security (CORS)**

Server dapat menampung sebuah website, aplikasi, gambar, video, dan masih banyak lagi. Ketika server menampung website, mungkin beberapa data gambar, video, stylesheet biasanya diambil dari alamat server lain atau origin yang berbeda. Contohnya stylesheet yang diambil dari Bootstrap CDN ataupun gambar yang diperoleh dari server Unsplash. Hal ini wajar dan biasa dilakukan.

Namun, apakah Anda tahu bahwa tidak semua data bisa diambil dari origin yang berbeda? Contohnya data JSON yang didapatkan melalui teknik *XMLHTTPRequest* atau *Fetch*. Jika website meminta sesuatu menggunakan teknik tersebut dari luar origin-nya, permintaan tersebut akan ditolak. Hal itu disebabkan oleh kebijakan same-origin. 

Ketahuilah bahwa origin terdiri dari tiga hal, antara lain:

- Protokol
- Host
- Port
![20210809003642815e469cfe3b29ea478160c5bf37f0e9](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4d571eaf-a388-4685-934b-59a79636986b)

Dengan adanya kebijakan tersebut, web yang diakses melalui origin [http://dicoding.com](http://dicoding.com/) tidak berhak mengakses resource yang berlokasi di luar originnya (cross-origin), contohnya [https://api.dicoding.net/](https://api.dicoding.com/). Jika web mencoba mengakses resource yang berada di luar dari origin-nya, ia akan menghasilkan eror.

![20210808205051bf43195cb83b4323cca95b0ab73c5f4d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a8c1df86-c1b9-49eb-a6c9-ad25f9492256)

Agar lebih jelas berikut adalah beberapa contoh URL yang merupakan same-origin ataupun cross-origin berdasarkan URL [http://dicoding.com](http://dicoding.com/):

| URL                              | Hasil        | Alasan                                                |
|----------------------------------|--------------|-------------------------------------------------------|
| http://dicoding.com/api           | same-origin  | Protokol, host, dan port (implisit) sama. Hanya berbeda path.  |
| https://dicoding.com/api          | cross-origin | Protokolnya berbeda.                                   |
| http://api.dicoding.com/          | cross-origin | Host-nya berbeda.                                      |
| http://dicoding.com:5000          | cross-origin | Port-nya berbeda.                                      |
| http://dicoding.com/api/courses   | same-origin  | Protokol, host, dan port (implisit) sama. Hanya berbeda path.  |

#### **Mengapa Perlu Kebijakan Same-Origin?**

Ingat kembali bahwa browser memaksa web untuk mengakses resource yang bersumber dari origin yang sama. Hal tersebut penting agar website tidak berinteraksi secara ilegal terhadap resource yang bukan haknya.

Andai kata kebijakan same-origin ditiadakan, website dapat mudah mengambil data atau berinteraksi dengan resource seperti RESTful API dari mana saja. Bahkan untuk melakukan hal yang jahat seperti mencuri uang Anda dari bank.

![20210825112750f4e58948b636c07026fd1bc6607a7e22](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c5cdcc6c-a7ca-43b9-95b2-21c9ea751e3a)

Lihat! Betapa ringkihnya keamanan tanpa adanya same-origin policy. Untungnya secara default, browser memiliki kebijakan same-origin yang harus dipatuhi agar terhindar dari transaksi ilegal seperti kasus di atas.

![202108251128098a49496fd05e2674280ae5bb1eef151c](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/420a6d56-29c4-4145-beab-331e5b394f92)


#### **Cross-Origin Resource Sharing (CORS)**

Lalu, bagaimana jika aplikasi web memang membutuhkan untuk mengakses resource di luar origin-nya, misalnya berinteraksi dengan back-end API untuk mendapatkan data? Apakah back-end API harus selalu memiliki origin yang sama seperti aplikasi web? Dalam kasus ini, kita bisa menerapkan mekanisme CORS untuk mengijinkan user agent (browser) mengakses resource di luar origin-nya.

CORS merupakan kepanjangan dari Cross-Origin Resource Sharing. Meskipun browser secara standar menolak transaksi dari luar origin, tetapi dengan adanya CORS kita dapat melakukannya. Hal tersebut karena mekanisme CORS dapat memastikan transaksi cross-origin dilakukan secara aman.

Pertanyaannya, bagaimana cara menerapkan CORS?

##### **CORS dari Sisi Client**

Ketika aplikasi web melakukan request (menggunakan [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) atau [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)) di luar dari origin-nya, secara otomatis browser akan menambahkan request header Origin.

![20210825112845d931c19d754d3aba9576f28748f70f5a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/8a2e9dcd-dc17-4224-a8f5-a51f28d94385)

Agar permintaan tersebut tidak terblokade oleh kebijakan same-origin policy, server harus mengembalikan response yang mengandung header Access-Control-Allow-Origin dengan nilai origin yang sama.

![2021082511292417b1a1c546f095b5025878bbe1a6151a](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a2d4c1a0-880d-4185-a486-d5bf355f1691)


##### **CORS dari Sisi Server**

Dari sisi server, kita sebagai Back-End Developer bisa membuka resource terhadap permintaan berdasarkan nilai origin. Caranya, tambahkan properti Access-Control-Allow-Origin dengan nilai origin yang diijinkan pada response header.

`Node.js http.ServerResponse`
```js
response.setHeader('Access-Control-Allow-Origin', 'https://dicoding.com');
```

Dengan begitu, response dapat dikonsumsi oleh origin https://dicoding.com.

Jika terdapat lebih dari satu origin yang ingin Anda izinkan, Anda bisa memanfaatkan properti Origin dari header request. Selain itu Anda juga dapat menspesifikasikan allowed origin lebih dari satu. Contohnya:

`Implementasi di Node.js native`
```js
const requestListener = (request, response) => {
  const allowedOrigins = [
    'https://dicoding.com',
    'https:/dicoding.net'
  ];
  const origin = request.getHeader('Origin');
  if(allowedOrigins.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }
 
  // ...
  response.end();
};
```

Atau jika Anda mengizinkan seluruh origin untuk mengakses resource, Anda bisa memberikan `Access-Control-Allow-Origin` langsung dengan nilai Origin yang diambil dari header request.

`Implementasi di Node.js native`
```js
const requestListener = (request, response) => {
  const origin = request.getHeader('Origin');
  response.setHeader('Access-Control-Allow-Origin', origin);
 
 
  // ...
  response.end();
};
```

##### **Implementasi CORS di Hapi**

Good news! Penerapannya akan jauh lebih mudah bila Anda menggunakan Hapi. Dengan Hapi, CORS dapat ditetapkan pada spesifik route dengan menambahkan properti options.cors di konfigurasi route. Contohnya seperti ini:

```js
{
  method: 'GET',
  path: '/courses,
  handler: getCoursesHandler,
  options: {
    cors: {
      origin: ['https://dicoding.com'],
    },
  },
}
```

Jika Anda ingin menerapkan CORS lebih dari satu origin, implementasinya pun sangat mudah. Cukup tambahkan nilai origin pada array.

```js
{
  method: 'GET',
  path: '/courses,
  handler: getCoursesHandler,
  options: {
    cors: {
      origin: ['https://dicoding.com', 'https://dicoding.net/'],
    },
  },
}
```

Untuk mengizinkan seluruh origin, cukup berikan nilai *.

```js
{
  method: 'GET',
  path: '/courses,
  handler: getCoursesHandler,
  options: {
    cors: {
      origin: ['*'],
    },
  },
}
```

Jika ingin cakupannya lebih luas alias CORS diaktifkan di seluruh route yang ada di server, tetapkan CORS pada konfigurasi ketika hendak membuat server dengan menambahkan properti routes.cors. Contohnya seperti ini:

```js
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});
```

### **Serangan Denial-of-Service (DoS)**

Sekarang kita masuk ke serangan yang dapat melumpuhkan infrastruktur Anda, yakni Denial-of-Service atau dikenal sebagai DoS attack. Untuk mengenal bagaimana serangan ini bekerja, mari kita ibaratkan server sebagai seorang kasir kedai kopi.

Anda sebagai pemilik kedai kopi mempunyai layanan pemesanan melalui telepon. Cara kerjanya, seorang kasir akan menulis pesanan dan memberikannya kepada barista. Setelah minuman tersaji, pelanggan bisa mengambilnya di kedai kopi.

Namun, ada orang iseng yang menelepon beberapa kali untuk memesan kopi, tetapi ia tak pernah mengambil minumannya. Karena terus-menerus menelepon, ia membuat kasir tak bisa menerima panggilan dari pelanggan lain.

Nah, tindakan orang iseng tersebut mirip dengan serangan Denial-of-Service (DoS). DoS adalah upaya yang dilakukan secara sengaja untuk membuat website atau aplikasi menjadi tidak bekerja optimal bagi pengguna.

![202108090039471a8cfe449ba184b63c2a4bdba7417d09](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/9abde87f-6d98-49f1-8235-dfd0ba831719)

Salah satu contohnya adalah ketika penyerang membanjiri aplikasi Anda dengan *traffic* jaringan yang masif sehingga membuatnya kewalahan dan tak lagi dapat merespons permintaan pengguna.

Lalu, bagaimana cara mengatasi masalah ini? Pada kasus kedai kopi solusi sederhananya adalah dengan memblokir nomor telepon tersebut. Jika dilihat dari sudut pandang IT, kita bisa memblokir request yang berasal dari IP orang iseng tersebut.

#### **Distributed Denial-of-Service (DDoS)**

Kita memang telah memblokir nomor tersebut. Namun, ternyata orang ini meminta bantuan teman-temannya. Mereka terus-menerus menghubungi kedai kopi dengan nomor telepon yang berbeda. Tentu ini akan membuat pelanggan lain semakin kesulitan untuk menelepon kedai kopi Anda.

Nah, bila itu terjadi, serangan DoS sudah berevolusi menjadi DDoS atau Distributed Denial-of-Service. Berbeda dengan DoS yang hanya berasal dari satu  sumber, serangan DDoS menggunakan beberapa sumber untuk melakukan serangan. Tujuannya untuk membuat aplikasi Anda kewalahan dan tak dapat beroperasi lagi. Di saat ini, memblokir nomor telepon atau IP satu per satu sudah tidak lagi menjadi solusi.

Serangan ini bisa berasal dari sekelompok orang atau bahkan individu. Cara kerjanya, penyerang menggunakan beberapa komputer yang terinfeksi (juga dikenal sebagai "bot") untuk mengirimkan traffic yang masif ke situs aplikasi Anda.

![20210809004008fae14498a2ad153c579bd96f9d969597](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d2c91633-8b82-49f2-8f42-9228ff8eff4e)


#### **Langkah Preventif terhadap Serangan DDoS**

Serangan ini menggunakan teknik membanjiri traffic aplikasi dengan permintaan yang dilakukan secara berulang. Sehingga, langkah preventif yang bisa dilakukan adalah melimitasi request yang masuk atau request rate limit. Masing-masing client hanya dapat melakukan sejumlah request saja selama kurun waktu tertentu.

Request rate limit dapat diterapkan dengan mudah pada web server seperti Nginx atau Apache. Mari kita ambil contoh implementasi di Nginx.

`Nginx rate limit`
```js
limit_req_zone $binary_remote_addr zone=one:10m rate=30r/m;
 
 
server {
    # ...
    location /authentications {
        limit_req zone=one;
    # ...
    }
}
```

Kode di atas merupakan contoh bila Anda ingin melimitasi akses pada web server Nginx. Berdasarkan kode di atas, Anda menginginkan pengguna yang mengakses resource `/authentications` hanya dapat membuat permintaan setiap 2 detik. Di sana Anda menetapkan `rate=30r/m` (30 request per menit) atau setara dengan 2 detik sekali.

Kami tidak akan menjelaskan secara rinci bagaimana cara menuliskan konfigurasi Nginx. Untuk mendalaminya, Anda bisa bereksplorasi pada dokumentasi yang diberikan oleh [Nginx: Nginx OpenSource Documentation](https://nginx.org/en/docs/).

#### **AWS Shield**

Kami memiliki kabar baik untuk Anda yang menggunakan AWS sebagai infrastruktur aplikasi. Secara default, infrastruktur Anda sudah terproteksi dari serangan DDoS dikarenakan terdapat AWS Shield. AWS Shield adalah layanan yang dapat melindungi aplikasi dari serangan DDoS. Layanan ini memberikan dua tingkat perlindungan: Standard dan Advanced. Mari kita uraikan keduanya.

- AWS Shield Standard
  
  AWS Shield Standard secara otomatis melindungi sumber daya AWS Anda dari jenis serangan DDoS yang paling umum tanpa biaya.

  Dengan menggunakan berbagai teknik analisis, AWS Shield Standard dapat mendeteksi dan memitigasi traffic berbahaya secara real time saat memasuki aplikasi Anda.

- AWS Shield Advanced

  AWS Shield Advanced adalah layanan berbayar yang menyediakan kemampuan untuk mendiagnostik, mendeteksi, dan memitigasi serangan DDoS yang canggih.

  AWS Shield Advanced terintegrasi dengan layanan lain seperti Amazon CloudFront, Amazon Route 53, dan Elastic Load Balancing.

Selain itu, Anda juga dapat mengintegrasikan AWS Shield dengan AWS WAF. AWS WAF merupakan web application firewall untuk melindungi aplikasi web atau API Anda dari eksploitasi web umum yang dapat memengaruhi ketersediaan, mengganggu keamanan, atau memakai sumber daya secara berlebihan.

### **Implementasi Limit Access menggunakan Nginx untuk Menghindari DDoS Attack**

Secara teori kita sudah mengetahui bagaimana langkah preventif untuk serangan DDoS yakni menerapkan limit access pada web server seperti Nginx. Namun, jika hanya sekedar teori, tentu ilmu baru yang Anda dapat tidak akan maksimal. Sebagian dari Anda juga mungkin masih asing dengan penggunaan Nginx sebagai web server. Untuk itu, mari kita praktikkan cara menerapkan limit access pada Nginx agar aplikasi Anda terhindar dari serangan DDoS.

Dalam praktik kali ini, kita akan melanjutkan apa yang sudah dibuat sebelumnya, yaitu menggunakan Auth API yang sudah ter-deploy di EC2 sebagai target aplikasinya. Jadi untuk mengikutinya, pastikan Anda sudah memiliki Auth API yang ter-deploy di EC2.

Peran Nginx di sini tidak akan mengubah peran Node.js (Hapi) sebagai HTTP server atau web server. Kita akan memanfaatkan Nginx untuk kemudahan dalam mengatur traffic HTTP, seperti menerapkan limit access dan menerapkan SSL kedepannya (ups, spoiler!). Dengan kata lain, kita akan menggunakan Nginx sebagai reverse proxy server.

Tunggu! Apa itu Reverse Proxy Server? Untuk menjelaskan hal ini, sebenarnya membutuhkan waktu yang panjang. Namun, supaya di modul ini kita tetap fokus terhadap security, jadi kami akan jelaskan secara singkat mengenai reverse proxy server.

#### **Reverse Proxy Server**

Reverse proxy server merupakan web server “spesial” yang digunakan sebagai perantara terhadap web server atau HTTP server lain. Web server bisa menerima permintaan masuk, tetapi permintaan tersebut langsung dikirimkan ke web server lain. Begitu juga dengan responnya, ia bisa menerima response dari web server lain, kemudian mengirimkannya ke client yang melakukan request.

![20210809004051dc535ca5efec9f827d9f119570065e20](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/d47596c1-2894-4803-a14e-eb966d886476)

Walaupun reverse proxy server terkesan hanya seperti web server perantara, tetapi sebenarnya ia boleh memodifikasi beberapa request yang masuk sebelum akhirnya dikirimkan ke web server asli. Contohnya ia dapat mengkompresi request masuk agar beban web server asli lebih ringan atau ia juga bisa menolak request bila request berasal dari alamat IP yang di-*blacklist*. Dengan begitu, request “jahat” tidak bisa menyentuh web server asli sama sekali.

Reverse proxy server dapat bermanfaat bagi banyak aspek. Tak hanya security, ia juga bisa meningkatkan kinerja, memudahkan scaling dan mengatur *traffic* masuk pada aplikasi. Jika Anda menggunakan Node.js sebagai web server di production, sangat disarankan untuk menggunakan teknik reverse proxy server. Cari tahu alasan kuatnya pada artikel berikut: [Why should I use a Reverse Proxy if Node.js is Production-Ready](https://medium.com/intrinsic-blog/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca)?

### **Memasang Nginx pada EC2 Instance**

Setelah Anda memahami fungsi Nginx sebagai reverse proxy server, sekarang kita mulai pasang Nginx pada EC2 instance. Silakan masuk ke EC2 Instance melalui SSH menggunakan perintah berikut:

```
ssh -i "<berkas.pem>" <public dns ec2 instance>
```

Kemudian pasang Nginx dengan menggunakan perintah:

```
sudo apt update
sudo apt-get install nginx -y
```

Setelah proses instalasi selesai, pastikan service nginx sudah berjalan pada EC2 instance dengan menggunakan perintah:


```
sudo systemctl status nginx
```

Hasilnya:

![20210808210847086621a21fc4287597c3e14563cc6ab2](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f52e5554-c2d9-42d0-ad92-a32436e14271)

*Good!*

Server nginx berjalan pada port 80 yakni port default untuk protokol HTTP. Namun, port tersebut belum bisa diakses secara publik karena kita belum membuka akses masuk (*inbound*) pada security group yang digunakan EC2 instance. Sekarang ayo tambahkan inbound rules-nya.

Silakan buka AWS Management Console, kemudian pilih service *VPC -> Security Groups* dan pilih security group yang digunakan oleh EC2 instance.

![20210808210920d028712adf581ce254fa84afb7f50dbb](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/6526d431-eedf-425a-bf54-7b18598f82b0)

Setelah diarahkan ke halaman detail security group terpilih, selanjutnya klik tombol `Edit inbound rules`.

![2021080821093651cf917c0f5ab7921f632ccaa9b7e85e](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/45e4204b-67a5-4e87-ac46-d88da582a2e3)

Tambahkan inbound rule baru dengan menekan tombol `Add rule`. Kemudian isi nilai inbound sesuai gambar berikut:

![202108082109537aa4c3f1c86042da1991bab5d9da9747](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4be9acce-4c51-450e-9c82-fb3441f8fbd6)

Tambahkan juga inbound untuk `HTTPS` karena kita akan menggunakannya untuk latihan menerapkan SSL. Kita melakukannya sekarang untuk menghindari proses yang berulang.

![20210808211013e1f77037abfa7abd247e743106b20fb7](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a4e336f2-e3a2-4dff-9373-25bfcf707684)

Setelah selesai menambahkan inbound HTTP dan HTTPS, silakan klik tombol Save rules untuk menyimpan perubahan inbound rules.

![2021080821102576ed091c5e8fda970d78698ff141637d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f832489f-7c46-4b2a-bf5c-c77a034be9a0)

Sekarang silakan akses IP publik dari EC2 instance melalui browser. Pastikan Anda mengaksesnya melalui protokol HTTP ya bukan HTTPS. Seharusnya Nginx sudah bisa merespons permintaan yang masuk.

![20210808211036dbbc9d5080326a363cfd08386854abe6](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/a08dddfe-38c0-4184-a76d-2699aa065905)

*Good!* Jika muncul halaman tersebut, maka nginx sudah terpasang dengan baik. Selanjutnya kita akan konfigurasi nginx sebagai reverse proxy server.

### **Mengonfigurasi Nginx sebagai Reverse Proxy Server**

Saat ini server Nginx sudah berjalan dengan baik. Namun, ketika diakses melalui browser, ia hanya menampilkan *welcome screen* sebagai petunjuk bahwa Nginx berhasil dipasang dan bekerja dengan baik. Untuk membuat Nginx bekerja sebagai reverse proxy server, kita perlu melakukan konfigurasi lainnya. 

Secara default, konfigurasi web server nginx berada pada berkas */etc/nginx/sites-available/default*. Di berkas tersebut kita bisa melihat konfigurasi dasar Nginx sebagai web server. Anda bisa melihatnya menggunakan perintah:

```
cat /etc/nginx/sites-available/default
```

`cat` merupakan perintah untuk melihat isi berkas dalam bentuk teks.

Hasilnya:

![2021080821123258cf2e118b607db11daae3faf65dd7c0](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c02cd267-8c1c-4e92-9eaa-e7aa04e6e95b)


Mari kita edit konfigurasinya menggunakan `vim` atau `nano` (pilih tools yang Anda suka) melalui sintaks berikut:

`vim`
```
sudo vim /etc/nginx/sites-available/default
```

`nano`
```
sudo nano /etc/nginx/sites-available/default
```

Kemudian tambahkan kode yang diberi tanda tebal berikut pada blok *server -> location /*.

```js
location / {
    proxy_pass http://localhost:5000; # your app's port
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
 
    # …
}
```

Kemudian hapus kode lain yang berada di dalam blok `location /`, seperti:

```js
# First attempt to serve request as file, then
# as directory, then fall back to displaying a 404.
try_files $uri $uri/ =404;
```

Sehingga kini blok location / tampak seperti ini:

![2021080821150994730c9d230406948bbf83aad3ae3cb0](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b179261e-0f3f-46bf-ae5c-ace49b0628ae)

Simpan perubahan berkasnya dan jalankan ulang server nginx menggunakan perintah berikut:

```
sudo systemctl restart nginx
```

Kemudian akses kembali IP publik server EC2 Anda. Seharusnya, sekarang nginx sudah merespons dengan Auth API.

![202108082115330f62014c6a241270b766c43a6e79bf17](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/bc5eda79-03f5-4d1d-835b-748a308cb6f7)


### **Menerapkan Limit Access pada Server Nginx**

Ingat kembali tujuan utama kita memasang Nginx adalah untuk menerapkan limit access agar aplikasi terhindar dari serangan DDoS. Untuk itu, langsung saja kita lakukan konfigurasi tambahan untuk menerapkan limit access pada aplikasi.

Silakan buka kembali berkas konfigurasi web server nginx menggunakan vim atau nano melalui perintah berikut:

`nano`
```
sudo vim /etc/nginx/sites-available/default
```

`vim`
```
sudo nano /etc/nginx/sites-available/default
```

Kemudian di baris awal berkas atau sebelum blok server, tuliskan kode berikut:

```
limit_req_zone $binary_remote_addr zone=one:10m rate=30r/m;
```

Hasilnya:

![20210808212002d99127998021e0eb8c8bc291c8e3a2e3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/eb14596b-cde7-49be-9c63-67528f515a10)

Lanjut tambahkan juga kode berikut di dalam blok *location /*.

```
limit_req zone=one;
```

Hasilnya:

![2021080821204912802f7e463e159ab270946fa642d47d](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/c3181467-cda1-482d-b4f1-4409f2156093)

Simpan perubahan berkas konfigurasi web server. Kemudian restart web server nginx menggunakan perintah:

```
sudo systemctl restart nginx
```

Selanjutnya silakan akses kembali IP publik EC2 instance pada browser dan reload secara cepat. Pastikan server hanya akan merespon permintaan dalam `dua detik sekali`. Jika dalam 2 detik Anda melakukan request lebih dari satu kali, ia akan menampilkan respons seperti ini:

![20210808212120b987e6f24a10d5c463f72794f3dbc801](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/63f8a111-6062-4bab-ad52-a6d512238e0b)


*Good job*! Anda berhasil menerapkan limit access pada aplikasi. Dengan begitu, aplikasi Anda bisa terhindar dari permintaan DDoS yang dilakukan secara massive. Penerapan 30 request dalam satu menit hanya sebagai contoh saja. Jika dirasa jumlah request per menitnya terlalu sedikit, Anda bisa menyesuaikannya sendiri. Contoh, 500 request per menit sudah cukup untuk memproteksi dari serangan DDoS. Lagi pula untuk apa mengirim request lebih dari 500 dalam satu menit kalau bukan untuk hal yang jahat?

Teknik limit access ini hanya berdampak pada client secara individual. Jika client A terkena limit, bukan berarti client B tidak dapat mengakses server juga.

Dalam praktik ini, kita menerapkan limit access pada seluruh cakupan path (/). Jika Anda ingin menerapkan limit access pada resource secara spesifik contohnya */authentications*, definisikan pada blok *location /authentications*.

Terakhir. Karena Anda sudah membuat reverse proxy server, hapus inbound traffic yang langsung mengarah ke aplikasi. Tujuannya supaya jalur untuk mengakses aplikasi hanya tersedia melalui reverse proxy server.

Untuk mengetahui penjelasan lebih detail mengenai limit access atau rate limit di Nginx. Silakan lihat artikel yang diberikan Nginx beriku: [NGINX Rate Limiting](https://www.nginx.com/blog/rate-limiting-nginx/).

### **Man In The Middle**

Serangan terakhir yang akan kita bahas adalah Man In The Middle (MITM). Serangan ini merupakan jenis serangan yang sangat berbahaya dan bisa terjadi pada bentuk komunikasi apa pun, baik di web, telepon seluler, maupun peralatan komunikasi tradisional seperti surat menyurat. Dari namanya, bisakah Anda menebak seperti apa teknis serangan ini?

Mudahnya kita bisa menganggap serangan MITM sama seperti menguping atau menyadap. Serangan ini dilakukan dengan menjadi orang yang berada di tengah komunikasi antara dua pihak. Penyerang bisa mengetahui pesan apa yang dikirim dan diterima oleh pihak yang menjadi target.

Namun, MITM bisa lebih berbahaya daripada menyadap. Menyadap merupakan bentuk serangan pasif karena penyerang hanya bisa memantau transaksi data yang lewat saja. Sedangkan MITM tak hanya memantau, serangan ini dapat mencegat dan mengubah pesan yang dikirim atau pesan yang diterima. Dengan begitu serangan MITM dapat disebut dengan serangan aktif.

Gambar di bawah ini merupakan contoh skenario yang bisa dilakukan penyerang dengan serangan MITM.

![2021080900415921c5219695de349bbedf366b10bce8df](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f20f3547-2591-4dbd-be03-c33b751875ad)
Contoh skenario dalam melakukan MITM


Dari gambar tersebut Anda bisa melihat betapa berbahayanya MITM ini. Budi alias penyerang bisa leluasa memata-matai (spying), mencegat (intercepting), hingga memalsukan (fabricating) dirinya menjadi Alisa dan Bobi. Pertanyaannya, mengapa bisa terjadi MITM? Bagaimana caranya Budi bisa berada di antara Alisa dan Bobi?

MITM paling banyak terjadi karena korban dan penyerang berada di dalam jaringan yang sama. Biasanya disebabkan oleh korban yang tidak hati-hati ketika menggunakan WiFi hotspot publik. Ketika sudah berada di jaringan yang sama, penyerang dapat secara mudah untuk menyadap komunikasi korban dengan server melalui teknik IP spoofing atau ARP spoofing.

Setelah korban berhasil tersadap, penyerang dapat membaca seluruh aktifitas transaksi HTTP request dan response. Penyerang bisa mencuri cookie, session, access token, bahkan kredensial yang hendak korban gunakan ketika login. Lebih parahnya bila penyerang sudah melakukan intercepting dan fabricating walaupun untuk sampai tahap ini perlu implementasi yang rumit.

Kelas ini tidak akan membahas detail teknis dari serangan MITM, tetapi fokus terhadap langkah preventifnya. Jika Anda ingin mendapatkan informasi lebih dalam mengenai penyerangan ini, silakan simak video menarik mengenai MITM pada tautan: [Live Demo: Man-in-the-middle Attack, Spying, Stealing Password, dan Cara Pencegahannya](https://www.youtube.com/watch?v=ncYJMUXDB4g).

#### **Langkah Preventif terhadap serangan MITM**

Dalam serangan MITM, penyerang sangat mengandalkan jaringan yang digunakan korban, sehingga langkah preventifnya adalah kita perlu berhati-hati ketika menggunakan jaringan publik. Langkah preventif terhadap penyerangan ini tak hanya dapat dilakukan oleh Anda sebagai developer aplikasi, tetapi juga berlaku untuk pengguna secara umum. Berikut detailnya:

- `Jangan gunakan WiFi publik yang tidak terproteksi`
Tak jarang kita menemukkan beberapa WiFi publik yang dapat diakses tanpa ada proteksi password sama sekali. Jangan pernah menggunakan WiFi tersebut karena Anda tidak akan pernah tahu siapa sebenarnya pemilik WiFi-nya. Bisa jadi, penyerang sedang memasang jebakan agar korban masuk ke dalam jaringan yang sama secara mudah.


- `Jangan pernah melakukan transaksi penting menggunakan WiFi publik`
Meskipun WiFi telah terproteksi dengan password, tetapi jangan pernah melakukan transaksi penting menggunakan WiFi publik, misalnya seperti kegiatan perbankan. Gunakan selalu koneksi pribadi seperti jaringan seluler agar terhindar dari penyerangan MITM.


- `Mengganti password WiFi secara berkala`
Anda tidak akan mengetahui apakah penyerang berada di sana atau tidak. Begitu pula dengan password WiFi yang digunakan, Anda tidak akan tahu apakah penyerang telah berhasil masuk ke WiFi dan melakukan aksi MITM.


- `Mengaktifkan Multi-Factor Authentication`
Jika aplikasi yang Anda gunakan memiliki fitur Multi-Factor Authentication (MFA), pastikan fitur tersebut selalu aktif. Karena bila penyerang berhasil memiliki kredensial Anda, ia tetap harus menghadapi proteksi dari MFA.

Langkah preventif terhadap serangan MITM juga dapat diterapkan pada sisi aplikasi, yakni selalu menggunakan protokol yang aman seperti HTTPS. Protokol HTTPS merupakan protokol gabungan antara HTTP dengan TLS atau SSL. Di mana transaksi data menggunakan protokol ini dilakukan secara aman karena terdapat proses enkripsi pada data yang ditransaksikan. Dengan begitu, penyerang tidak akan bisa membaca data pada transaksi HTTPS karena datanya telah terenkripsi.

![202108090042538124ef5ce6e690c3fdb649afb4ee414c](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/1c3f431b-2980-4d19-8bd1-30e80633463b)
HTTP vs HTTPS


### **Implementasi HTTPS pada Web Server**

Anda sudah mengetahui mengerikannya serangan MITM. Penyerang dapat menyadap hingga memanipulasi transaksi yang terjadi pada web terutama pada protokol HTTP. Transaksi web yang dilakukan menggunakan protokol HTTP tidaklah aman karena tidak adanya proses enkripsi terhadap data yang dikirimkan.

Sekarang mari berkaca apa yang sudah kita lakukan sejauh ini pada Auth API. Seluruh aspek keamanan yang sudah kita bahas sebelumnya, seharusnya sudah diimplementasikan pada Auth API. Hanya satu yang kurang yaitu, protokol yang digunakan masih HTTP bukan HTTPS. Mengingat Auth API seringkali digunakan untuk proses autentikasi, maka jelas protokol HTTPS harus segera diterapkan.

Saat ini, untuk mengakses Auth API kita masih menggunakan publik IP secara terbuka. Banyak website maupun RESTful API diakses menggunakan domain daripada publik IP secara langsung. Hal tersebut dilakukan bukan semata-mata untuk mempermudah cara mengaksesnya melainkan untuk meningkatkan keamanan juga.

Mengapa? Beberapa author sertifikat TLS atau SSL mengharuskan protokol HTTPS `melekat pada domain bukan IP address`. Itulah best practices untuk mengimplementasikan HTTPS. Jadi, mau tak mau untuk menggunakan HTTPS pada aplikasi Auth API, kita membutuhkan domain.

Namun jangan khawatir, kami tidak akan meminta Anda untuk membeli domain. Kami akan sediakan secara gratis subdomain dcdg.xyz untuk digunakan dalam praktik penerapan HTTPS. Jika sudah memiliki domain secara mandiri, tentu Anda bisa menggunakannya.

Sebelum memulai latihan kali ini, pastikan Auth API Anda sudah berjalan menggunakan reverse proxy server Nginx seperti yang dilakukan pada latihan [implementasi limit access](https://www.dicoding.com/academies/276/tutorials/19102). Jika sudah siap, yuk kita mulai.

### **Mendaftarkan (Sub)Domain pada Server Nginx**

Langkah pertama yaitu dapatkan subdomain dcdg.xyz yang terhubung dengan EC2 instance Anda dengan cara melakukan HTTP request berikut menggunakan cURL (bisa juga gunakan Postman). Pastikan Anda mengubah <`public IP EC2 instance`> dengan public IP EC2 instance yang dimiliki.

`cURL CMD/Terminal`
```cmd
curl -X POST -H "Content-type: application/json" -d "{ \"ip\": \"<public IP EC2 instance>\" }" "https://sub.dcdg.xyz/dns/records"
```

`contoh`
```
curl -X POST -H "Content-type: application/json" -d "{ \"ip\": \"52.221.218.124\" }" "https://sub.dcdg.xyz/dns/records"
```

Kemudian ambil dan simpan kedua nilai `hostname` muncul pada response. Nilai hostname merupakan nilai subdomain yang akan Anda gunakan dalam mengakses aplikasi. Nilai hostname pada gambar di bawah ini adalah `happy-liger-12.a276.dcdg.xyz` dan `www.happy-liger-12.a276.dcdg.xyz`.

![202108082133223f58deeeb9e0f247565c5848e02397a3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/f76d5e69-18ac-472b-8c51-42b74fbe9832)

Jika Anda menggunakan domain milik sendiri, silakan tambahkan DNS record tipe `A` dengan nilai target public IP EC2 instance. Contohnya seperti ini:

![20210808213340c6664870c1e73bcde2c6b7815f8bbf99](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/4df81fd4-75d9-4cc4-956a-27808b2cc263)

Jika menggunakan domain sendiri, Anda bisa menentukan nilai hostname. Gambar di atas adalah contoh bila IP target ingin ditetapkan pada domain secara langsung, contohnya example.com dan www.example.com.

Setelah mendapatkan/menetapkan hostname, selanjutnya kita daftarkan hostname tersebut sebagai domain server pada Nginx.

Caranya, silakan akses EC2 instance menggunakan SSH. Kemudian buka konfigurasi server Nginx menggunakan perintah:

`vim`
```
sudo vim /etc/nginx/sites-available/default
```

`nano`
```
sudo nano /etc/nginx/sites-available/default
```

Kemudian tulis hostname-nya pada properti `server_name` di dalam blok server. Contohnya seperti ini:

![20210808213454dce9216d4ad57fb403e0545a82c00906](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/2c88c2e1-f9e2-4872-b8e1-cc6747cb5114)


Simpan perubahan konfigurasi. Kemudian *restart* nginx dengan perintah:

```
sudo systemctl restart nginx
```

Sekarang, coba akses subdomain/domain yang Anda miliki. Seharusnya sudah bisa menampilkan Auth API.

![20210808213522387c999411a99dd9348fa56f33cf97d1](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/5907b9bf-2b9a-47fd-859f-d6af5b273aea)


Jika masih belum bisa, kemungkinan masih dalam proses propagation. Tunggu hingga 30 menit dan coba kembali akses domain/subdomainnya. Selain itu bila IP yang Anda masukkan salah, silakan ubah DNS record atau request ulang subdomain `dcdg.xyz` dengan menggunakan perintah yang sama.

Sekarang aplikasi Anda sudah bisa diakses melalui domain/subdomain. Namun, jika Anda perhatikan ia masih menggunakan protokol HTTP bukan HTTPS. Hal tersebut menandakan transaksi masih belum aman atau *not secure*. Pada materi selanjutnya kita akan memasang sertifikat TLS pada domain/subdomain Anda agar dapat diakses melalui HTTPS.

### **Memasang TLS Certificate pada (Sub)Domain**

Aplikasi Anda sudah berhasil diakses melalui domain/subdomain. Selanjutnya kita akan memasang sertifikat TLS pada domain/subdomain agar ia dapat diakses melalui protokol HTTPS. Dalam membuat sertifikat TLS kita akan menggunakan Let’s Encrypt sebagai TLS certificate authority. Tujuannya agar proses publikasi sertifikat dapat dilakukan dengan mudah dan gratis.

AWS sendiri menjadi salah satu sponsor dari layanan [Let’s Encrypt](https://letsencrypt.org/), tetapi AWS juga menyediakan *TLS/SSL certificate authority* yang dapat Anda gunakan secara gratis melalui layanan [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/). Jika sudah memiliki akses terhadap AWS, Anda bisa menggunakan layanan tersebut. Keuntungannya adalah sertifikat yang dipublikasikan memiliki jangka waktu yang lebih lama dibandingkan dengan Let’s Encrypt.

Buka kembali SSH. Pasang package certbot untuk nginx menggunakan perintah:

```
sudo apt-get update
sudo apt-get install python3-certbot-nginx -y
```

Setelah instalasi selesai, selanjutnya buat sertifikat TLS untuk domain/subdomain Anda dengan menggunakan perintah:

`struktur`
```
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

`contoh`
```
sudo certbot --nginx -d happy-liger-12.a276.dcdg.xyz -d www.happy-liger-12.a276.dcdg.xyz
```

Pada proses membuat sertifikat, Anda akan ditanya beberapa pertanyaan. Beri jawaban berikut:

- Enter email address: `beri alamat email Anda`. Anda akan dihubungi jika sertifikat sudah kedaluwarsa.
- Term of Service: `Agree`.
- Would you be willing to share your email address …. : `No`.
- Please choose whether or not to redirect HTTP traffic to HTTPS … : `2` (Redirect)

Setelah pertanyaan selesai dijawab, maka sertifikat seharusnya berhasil dipasang pada domain/subdomain Anda:

![20210808213927c54ce9fb18b904f26e300f3f407eda39](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/e2e1371f-93f7-4d43-b7fa-effee78d729f)


Anda juga bisa membaca catatan penting (*important notes*) yang diberikan oleh certbot. Di sana Anda bisa mengetahui kapan sertifikat kedaluwarsa dan cara memperbaruinya.

Sekarang silakan kembali akses domain/subdomain pada browser. Seharusnya browser akan secara otomatis menggunakan protokol HTTPS.

![20210808214001e558f0608a1400bb3b059eb81d4c7892](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/270f07f0-58d2-4150-bc2d-c4f71be66d47)

Selamat! Sekarang aplikasi Auth API sudah bisa diakses menggunakan protokol HTTPS. Dengan begitu transaksi dikirimkan oleh client dan server Auth API sudah sudah terproteksi oleh enkripsi.

## **Scalability**

### **Pendahuluan Scalability**

Mengembangkan dan menyajikan aplikasi dengan baik tanpa cacat merupakan tugas utama developer. Sepanjang kelas ini, Anda sudah belajar banyak hal untuk menjadi seorang Back-End Developer Expert dengan cara membangun RESTful API yang sangat baik dan teruji, serta menerapkan CI/CD untuk mempercepat proses *deliver* ke production. Namun, tidak sampai di situ, tantangan lain yang tak kalah menarik adalah bagaimana cara memastikan aplikasi dapat terus berkembang dan bertahan dari perkembangan jumlah pengguna.

Di modul scalability ini, kami akan bercerita bagaimana cara scaling aplikasi secara efektif dan efisien berdasarkan isu-isu yang hendak Anda hadapi nantinya pada produksi. Semoga modul ini bisa menjadi bekal Anda dalam membangun aplikasi lebih baik lagi.

Di modul ini Anda akan mempelajari:

- Langkah pencegahan untuk kehilangan data.
- Menganalisis kegagalan.
- Menghadapi permintaan yang global.
- Memastikan aplikasi selalu tersedia.
- Solusi Scaling secara otomatis dari AWS.
  
Modul ini tidak akan ada praktik ataupun ngoding. Sehingga, Anda bisa membacanya dengan santai, tetapi harus dipahami dengan saksama. Jangan lupa untuk menyiapkan camilan dan kopi sebelum lanjut ke materi berikutnya. Selamat belajar!.

#### **Studi Kasus**

Pada modul ini kita akan mengangkat studi kasus aplikasi yang hendak di-scaling ke depannya. Yakni, aplikasi catatan atau Notes Apps. Aplikasi ini cukup sederhana karena fungsinya sebatas CRUD (Create, Read, Update, dan Delete) resource catatan saja. Front-End dari aplikasi catatan merupakan web, Back-End service-nya adalah REST API Node.js, dan database-nya menggunakan PostgreSQL.

![20210825133253492202017f1853ff98fd0a78a1fb9fc8](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/36165d23-011c-403e-aadb-0f24dd9a3032)

Ceritanya, semua stack aplikasi catatan sudah berjalan dengan baik secara lokal. Sekarang saatnya untuk melakukan deployment aplikasi pertama kali.

### **Peluncuran Awal**

Karena ini adalah peluncuran awal aplikasi Notes Apps, Anda memutuskan untuk mendeploy-nya pada infrastruktur paling sederhana, yakni dalam satu EC2 instance saja. Infrastruktur seperti ini seharusnya cukup karena saat ini pengguna Notes Apps tidak banyak.

![2021082513332720c531622f3c1f950c8cedab79e9d1c3](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/ce9431f1-8d9d-4d01-be01-810fcc24c55e)

Seluruh stack aplikasi di jalankan pada satu EC2 instance. Masing-masing aplikasi dijalankan pada port yang berbeda. Notes Apps di port 80, Notes API di port 5000, dan Notes DB di port 5432.

Spesifikasi dari EC2 instance saat peluncuran awal adalah 2 Core CPU dan 4GB RAM. Namun, spesifikasinya terus ditingkatkan seiring perkembangan jumlah pelanggan nantinya. Perlu Anda ketahui, teknik scaling dengan meningkatkan spesifikasi server disebut dengan vertical scaling.

Aplikasi catatan dapat diakses melalui browser dan mulai digunakan oleh beberapa pengguna. Mereka mulai mengelola catatan dan merasa senang karena aplikasi berjalan dengan baik. Saat ini, aplikasi mampu menangani sekitar 100 pengguna setiap harinya.

### **Pencegahan Kehilangan Data**

Suatu hari, secara tiba-tiba aplikasi kita tidak dapat diakses. Setelah ditelaah, ternyata sesuatu terjadi pada data center AWS yang menyebabkan EC2 instance Anda rusak dan data yang ada di dalamnya hilang, termasuk database postgres. Akhirnya, Anda memutuskan untuk mendeploy ulang seluruh stack aplikasi pada EC2 instance baru dan aplikasi kembali berjalan dengan normal.

Walaupun Notes Apps sudah kembali berjalan, data catatan yang disimpan oleh pengguna hilang begitu saja. Tak ada cara untuk mengembalikan datanya karena Anda sama sekali tidak melakukan *back-up* data. 

Karena kejadian ini, banyak pengguna kecewa. Anda tidak bisa berbuat apa pun selain meminta maaf dan meminta para pengguna untuk kembali mendaftar dan menggunakan aplikasi catatan. Agar kejadian ini tidak terulang lagi, Anda memutuskan untuk melakukan `back-up data yang ada di dalam database`.

Agar data back-up tidak hilang, Anda tidak menyimpan datanya pada server. Melainkan Anda memanfaatkan service Amazon S3.

![2021082513341530138635158f253ca58218b5e703ff9f](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/b5eafc94-bdc5-460d-a18f-bef14afb1528)

Back-up data ke Amazon S3 dijalankan secara rutin. Untuk itu, Anda memanfaatkan *job scheduler* seperti CRON.

Seluruh aplikasi berjalan normal dan pengguna kembali menggunakan aplikasi catatan.


### **Menganalisis Kegagalan**

Saat ini kita sudah memiliki strategi agar data tidak hilang dengan melakukan back-up rutin. Pengguna senang aplikasi catatan dapat melayani dengan baik dan fiturnya terus dikembangkan. 

Masalah baru muncul. Anda menyadari semenjak hadirnya fitur baru, pengguna sering mendapat error 500 (server eror) secara acak. Hingga akhirnya aplikasi catatan tidak dapat digunakan sama sekali. Pengguna kembali kecewa dan melaporkan isu ini ke tim developer.

Ini bukan masalah yang sama seperti sebelumnya. EC2 instance masih berjalan dan tidak ada isu di data center AWS yang Anda gunakan. Kemudian Anda memutuskan untuk melihat apa yang sebenarnya terjadi pada aplikasi dengan masuk ke server EC2 menggunakan SSH.

Setelah dilihat, ternyata aplikasi Notes API Anda terhenti. Itulah yang menyebabkan aplikasi Notes API tidak dapat berkomunikasi dengan database. Anda belum mengetahui apa yang sebenarnya membuat Notes API bisa terhenti. Log error hanya tampil pada console dan ikut hilang karena aplikasinya terhenti. Karena log tidak dicatat secara baik, Anda sulit untuk menganalisis kegagalan.

Dari sana Anda menyadari bahwa `mencatat log error sangatlah penting`. Anda memutuskan untuk tidak sekadar menuliskan log pada console, `melainkan juga dicatat pada sebuah berkas supaya lognya tidak hilang`. Supaya proses analisis masalah menjadi lebih mudah, log harus ditulis lengkap dengan waktu, pesan eror, bahkan stack kode yang menyebabkan eror terjadi. 

Untuk memudahkan pengelolaan berkas log, Anda juga dapat memisahkan berkas log berdasarkan berdasarkan interval waktu, contohnya setiap satu hari. Kemudian, agar storage server tidak penuh dengan log, berkas log yang sudah usang atau berumur lebih dari 7 hari akan dihapus dari server.

![202108251335031120afe7cffc31aa3039301f8e1f51e9](https://github.com/ridopandiSinaga/Automation-testing/assets/89272004/478dc376-11ea-47c3-a448-d026cd158e83)

Selain *logging*, masalah ini juga menyadarkan Anda untuk menggunakan process manager seperti [PM2](https://pm2.keymetrics.io/) ketika menjalankan aplikasi Node.js. Tujuannya, jika aplikasi node terhenti, *process manager* akan menjalankan ulang aplikasi secara otomatis. Sehingga, aplikasi akan selalu tersedia tanpa harus menunggu dijalankan ulang secara manual.

Sekarang Anda sudah mengimplementasikan log dan menerapkan process manager dengan benar. Sehingga, kegagalan yang terjadi di masa mendatang akan lebih mudah dianalisis dan diperbaiki. Semenjak itu, aplikasi catatan semakin leluasa untuk dikembangkan dan minimum down time.



**Reference**
https://www.dicoding.com/academies/276-menjadi-back-end-developer-expert

Tidak sempat menyelesaikan submission, jadi sementara dibuat menjadi catatan supaya jika suatu saat kelas bisa kembali terbuka saya bisa menyelesaikan submission dengan belajar dari materi ini lalu melakukan take down materi ini.










