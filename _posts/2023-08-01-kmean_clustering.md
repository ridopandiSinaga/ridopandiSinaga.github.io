---
title: K-Means Clustering
date: 2023-08-02
tags: [machine learning, unsupervised, sklearn, clustering, k-means]
category: Supervised & unsupervised
layout: post
# image: https://miro.medium.com/v2/resize:fit:3840/format:webp/1*ff6FquwFWnrFeZJWfvsiag.jpeg
---


Pengklasteran K-Means adalah sebuah metode yang dikembangkan oleh Stuard Lloyd dari Bell Labs pada tahun  1957. Lloyd menggunakan metode ini  untuk mengubah sinyal analog menjadi digital. Proses pengubahan sinyal ini disebut juga sebagai  Pulse Code Modulation.

Pada awalnya metode K-Means hanya dipakai untuk internal perusahaan. Netode ini baru dipublikasikan sebagai jurnal ilmiah pada tahun 1982. Pada tahun 1965, Edwar W. Forgi mempublikasikan metode yang sama dengna K-Means sehingga K-Means juga dikenal sebagai metode Lloyd-Forgy.

Untuk melihat bagaimana K-Means bekerja, kita akan menggunakan ilustrasi dari [tulisan](https://www.astateofdata.com/machine-learning/k-means-cluster-k-means-clustering-how-it-works/) M. Benbihi. Perhatikan bahwa data yang kita gunakan terdapat 12 sampel dan data ini merupakan data 1 dimensi.

![](https://lh4.googleusercontent.com/be5__TLtf8KhUTKbLutm3t-fp3r6lo8VieRI626CpATV4Lrpd0bsCClFKwvzLdDWzGMeafxTJn2jCJdhu4KsRiYjbKZzekAVmWPVjjAi0DTXvXg0DTj0CKhFSVkEg7Z0iWGQvyAH){: .shadow}

Hal yang paling pertama K-Means lakukan dalah pemilihan sebuah sampel secara acak untuk dijadikan centroid. Centroid adalah sebuah sampel pada data yang menjadi pusat dari sebuah cluster. Kita bisa melihat pada gambar bahwa 3 sampel yang dijadikan centroid diberikan warna biru, hijau, dan kuning. 

![](https://lh4.googleusercontent.com/PcS-np0CdgCoeQCjenA7oS3endrLKXR0OzLmzU7VmfKLtn2viiyOnjD0S-ldq9eWvhFGPp0lLu6W7-4k_WDOIe7Dxir2VUzxSinjfNg4wj2jtr0Y2Vpw-JlJU2eTyzrkuv1c-2JZ){: .shadow}

Kedua, karena centroid adalah pusat dari sebuah cluster, setiap sampel akan masuk kedalam klaster. Ini bermula dari centroid terdekat dengan sampel tersebut. Pada contoh dibawah, sampel yang ditunjukkan anak panah memilki jarak terdekat dengan centroid warna hijau. Alhasil, sampel tersebut masuk kedalam cluster hijau. 

![](https://lh4.googleusercontent.com/iOfltf4GLLUsfu_RUn1x7uNB0BXBzyUmvxPsZgHBwpJVd-9NzFxC1WwmyHEVcK1rAk_oVY9-DTvJSoe7atTpB18CuExx_MliCZpDv4DTGl5yuoPPgxGna9ZbMzllxLDsqLzS29z3){: .shadow}

Berikut adalah hasil ketika tahap kedua selesai.

![](https://lh5.googleusercontent.com/zRSDWg4GPIzXowq8qkPagwOMleTFDBark9sJbngr1ggO-tE3fNUH2mT6cFDbopqPum1S1RdwTH_sRGV2ZWkOu9pSsp6fk1U8_wA-XcH0nykbmoqVv079fNdxIRV1fukLbkxglmpA){: .shadow}

Ketiga, setelah sampel dimasukkan pada klaster dari centroid terdekat, K-Means akan menghitung rata-rata dari setiap sampel dan menjadikan rata-rata tersebut menjadi centroid baru. Rata-rata disini adalah titik tengah dari setiap kluster pada sebuah klaster. Pada gambar dibawah, rata-rata yang menjadi centroid baru digambarkan oleh garis tegak lurus.

![](https://lh3.googleusercontent.com/xy0D6H_5uXhrIL0qTmDYRYLgtrEA4tlb5K-YK7mzJCJD2VShHE9CDV67iQylf606kj3mFWNk0aZ6sCVEfhK1DcJiUnNv2ikZAElvLu3ekpNmvgUlW29-cmS0Pa8n7h7PbI1xpk7r){: .shadow}

Keempat, langkah kedua diulangi kembali. Sampel akan dimasukkan kedalam klaster dari centroid baru yang paling dekat dengan sampel tersebut.

![](https://lh6.googleusercontent.com/rmpskvblSaDTYhL2cbRTWAmoo0MUyUWpeCgQDKegCu-kCtdm2oNMwJcYEezw0VFwRPntD-pIMNAut9aThkS-nqnDlDo5wksWSdHyKwUgwEQVybGNhyyFh_MFBQ-apt7PDBlhBekO){: .shadow}

Pada tahap ini Anda mengulangi tahapa ketiga, yaitu menemukan rata-rata dari kluster terbaru. Anda akan menmukan rata-rata tiap klaster pada tahap ke-empat akan sama dengan rata-rata tiap kluster pada tahap ketiga sehingga centroid nya tidak berubah. Ketika centroid baru tidak ditemukan, maka proses clustering berhenti.

Apakah prosesnya telah selesai? Seperti yang bisa kita lihat, hasil pengklasteran dari tahap sebelumnya belum terlihat optimal.

Untuk mengukur kualistas dari pengklasteran, K-Means anakan melakukan iterasi lagi dan mengulangi lagi tahap pertama yaitu memilih sampel secara acak untuk dijadikan centroid. Gambar dibawah menunjukkan K-Means pada iterasi kedua mengulangi kembali langkah pertama yaitu memilih centroid secara acak. 

![](https://lh3.googleusercontent.com/lA8YFNc0isWbiqeePo--qrZJ2E11OQBsNFeLyq0MoZUGHyKSBP15bc3V3lhd5cWN_ZI33q-dqCFMOTF7ClQRnHGIxSxen4HVITuhMqmqnpyOCaYiA72GDbJSGjIl6GuZ5yZYz1sz){: .shadow}

Untuk langkah kedua, Anda bisa mempraktekan langkah yang sudah dijelaskan sebelumnya untuk menguji pemahaman Anda. Hasil dari iterasi kedua adalah sebagai berikut.

![](https://lh3.googleusercontent.com/StQn_-TgNE9tXxD-lU8gMsFyElizpD1nTU9SWcPcn2_pkK05zYIVuJ27AwSPd-13Zn0ASW0aFfCgtxaDzDNSfoqBM1PemjVYIqx2_kzoTXEY11y09tzKZsjWn7HEI5dE90qD9-Js){: .shadow}

Hasil iterasi kedua terlihat lebih baik dibanding iterasi pertama. Untuk membandingkan klaster setiap iterasi, K-Means akan menghitung variance dari setiap iterasi. Variance adalah presentase jumlah sampel pada tiap kluster.  Ga,bar dibawah menunjukkan variance pada iterasi pertama.

![](https://lh5.googleusercontent.com/tkjoNeRqAWfOR9balYTfe5FCB0zz3ZfVFohzAR__ydSycYhI-UNMIGxUBPsWtV2ZQZ8OAfLb-WQ1rEvNRoHxdzWxqQ06VXnLeiflMk99aoG4ON3XHM8Y6Kg3A1ymAWawbYP11kuq){: .shadow}

![](https://lh4.googleusercontent.com/nZ90FcMDpBqLu-X47YLDV_w9QB4nGZAPgvlV7WMKQSEPIDCPSgiCTxi68UeedzmWhiqsyTWuj1Gp1T7or_4_oPwebjS1irb4M-kxbxyrX0k49dSRuoAnztCgE04TABuNRHnXl1L0){: .shadow}

Kita bisa melihat bahwa pada iterasi kedua, variace nya lebih seimbang dan tidak terlalu condong pada cluster tertentu. Sehingga hasil iterasi kedua lebih baik dibanding iterasi pertama. Jumlah iterasi pada K-Means ditentukan oleh programmer, dan K-means akan berhenti melakukan iterasi sampai batas yang telah ditentukan. 

Untuk data yang memiliki  2 dimensi atau lebih, k-means bekerja dengan sama yang menentukan centroid secara acak, lalu memindahkan centroid sampai keposisi cetroid tidak berubah. Animasi dibawah untuk membantu Anda melihat bagaimana K-Means bekerja pada data 2 dimensi.

![](https://lh3.googleusercontent.com/R7DC4KEuS9Lnv0457zCHYPxzDiR-IhFv6XlhEEl4kFtH7UpfOVEnefgpy_IsHoipW62I6idy_-8a1B0RA_fZ8oGcK_PQ470NgDC8FHc-_bPAn9tql8gh1pgbIFdaXi6_Vqz2moip){: .shadow}

## Metode Elbow

Cara palong mudah untuk menentukan jumlah K atau klaster pada K-Means adalah dengan melihat langsung persebaran data.  Otak kita bisa melihat data-data yang berdekatan dengan sangat cepat. Namun cara ini hnaya bekerja dengan baik pada data yang sangat sederhana.

Ketika masalah clustering  lebih kompleks seperti pada gambar dibawah dan kita bingung menentukan jumlah kluster yang pas, kita bisa menggunakan metode Elbow.

![](https://lh5.googleusercontent.com/oOwxbXRntmssOPNOK3JprmETX_CyjwIRF_BmsvfRn2wErNg57WchGgyqqfO1CZ-4Be-SLQFsTPJh5-YdUSRPLGO9iQir1YSi83zhY-sj1m9GZnNoT2h9yymaTtJ4u5wGKdwBhUx5){: .shadow}

Ide mendasar dari metode elbow adalah untuk menjalan K-Means pada dataset dengan nilai K pada jarak tertentu (1,2,3,..,N). Kemudian hitung inersia pada setiap nilai K. Inersia memberi tahu seberapa jauh jarak setiap sampel pada sebuah klaster. Semkain kecil inersia maka semkain baik, karena jarak setiap sampel pada  sebuah klaster lebih  berdekatan.

Metode elbow bertujuan untuk menentukan elbow, yaitu jumlah K yang optimal. Untuk menentukan elbow, kita perlu melakukannya secara manual, yaitu dengan melihat titik dimana penurunan inersia tidak lagi signifikan.

Pada contoh dibawah kita memiliki data yang dapat dibagi menjadi 4 klaster. Bagaimana metode elbow dapat menentukan jumlah klaster tersebut secara optimal?

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202101201401021fd247afd60d5456a02b536e99d3ebe7.png){: .shadow}

Kita akan mengaplikasikan metode elbow pada data diatas. Elbow berada dinilai K sama dengan 4, karena penurunan inersia pada K seterusnya tidak lagi signifikan(perubahan nilainya kecil). Sehingga jumlah klaster yang optimal adalah 4.

![](https://lh5.googleusercontent.com/tZ1X0vxm68a6CeMzStvAaekfpV1Vz91uD3OfeYcN6nvhNLztG3kVkvwtX1xPoy_6EmDOji-pHib52AkFm-UyMR6buWIs618TrKBIUy5jR6e91WAs2I4Z_eCHemdiKiH4WfImosF3){: .shadow}

Selamat Anda sudah paham bagaimana K-Means bekerja. Ditulisan berikutnya kita akan belajar menggunakan K-Means dengan library SKLearn.
