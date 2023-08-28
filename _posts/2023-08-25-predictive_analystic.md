---
title: Studi Kasus Predictive Analytics
date: 2023-08-25
tags: [predictive analytic]
category: Machine Learning Terapan
layout: post
# image: https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg
---


## **Business Understanding**

Bayangkan Anda adalah pemilik perusahaan yang bergerak dibidang  jual-beli diamonds (berlian). Model bisnis Anda adalah distributor dan retail, perusahaan membeli diamonds  dari produsen kemudian menjualnya kepada konsumen. Untuk efisiensi, Anda ingin menerapkan  automasi pada sistem  dalam memprediksi harga diamonds  dengan teknik *predictive  modelling*.

Contoh kasus Anda ingin mengetahui bahwa harga sebuah diamonds dengan karakteristik tertentu bernilai $9000 di pasaran. Jika ingin  mendapatkan profit, tentu perusahaan harus mendapatkan harga beli diamondsyang lebih rendahdari $9000. Sebut saja misal, harga belinya $5000. Sudah pasti ini akan menjadi keuntungan besar bagi perusahaan . Sebaliknya, jika perusahaan membeli diamonds tersebut  dengan harga diatas $9000, maka perusahaan akan rugi.

Tentu saja semua bisnis mengejar profit. Oleh karena itu, penting bagi perusahaan untuk mengetahui dan dapat memprediksi harga diamonds di pasar. Prediksi akan digunakan untuk menentukan berapa harga beli yang pantas untuk diamonds dengan karateristik tertentu sehingga perusahaan  bisa mendapatkan profit sebesar mungkin.

Tidak seperti emas yang harga jual dan belinya mengacu pada harga perdagangan emas dunia, harga diamonds dipengaruhi  oleh beberapa fitur khusus. Fitur tersebut antara lain, karat, ukuran, bentuk potongan, warna, serta tingkat kejernihan diamonds. Tidak adanya acuan harga diamonds seperti acuan harga emas menyebabkan perusahaan  memerlukan sistem untuk memprediksi harganya.

### Problem Statements dan Goals

Berdasarkan kondisi yang telah diuraikan sebleumnya, perusahaan akan mengembangkan sebuah sistem prediksi harga diamonds untuk menjawab permasalahan berikut.
* Dari serangkaian fitur yang ada, fitur apa yang paling berpengaruh terhadap harga diamonds?
* Berpaa harga pasar diamonds dengan karakteristik  atau fitur tertentu?

Untuk menjawab pertanyaan tersebut, Anda akan membuatpredictive modelling dengan tujuan  atau goals sebagai berikut.

* Mengetahui fitur yang paling berkorelasi dengan diamonds.
* Membuat model machine learning yang dapat memprediksi harga  diamonds seakurat mungkin berdasarkan fitur-fitur yang ada.

### Metodologi
Prediksi harga adalah tujuan yang ingin dicapai. Seperti yang kita ketahui, harga merupakan variabel kontinu. Dalam predictive  analytic, saat memprediksi variabel kontinu artinya Anda sedang menyelesaikan regresi. Oleh karena itu, metodologi pada proyek ini adala: membangun model regresi dengan harga diamonds sebagai target.

### Metrik

Metrik digunakan untuk mengevaluasi seberapa baik model Anda  dalam meprediksi harga.  Untuk kasus regresi, beberapa metrik yang biasanya digunakan adalah Mean Squared Error (MSE). Secara umum, metrik ini mengukur seberapa jauh hasil prediksi dengan  nilai yang sebenarnya. Kita akan bahas lebih detail mengeai metrik ini  di tahap Evaluasi.

Pengembangan model akan menggunakan beberapa algoritma machine learning yaituK-Nearest Neighbour, Random Forest, dan Boosting Algorithm . Dari ketiga model ini, akan dipilih salah satu yang memiliki nilai kesalahan terkecil. Dengan kata lain, kita akan membuat model seakurat mungkin, yaitu model dengan nilai kesalahan sekecil mungkin.

Membuat model prediktif  dengan machine learning tentu memerlukan data. Berita baiknya adalah, perusahaan memiliki data yang dibutuhkan untuk membuat model prediksi. Dataset yang akan kita gunakan pada praktek kali ini adalah Diamonds Dataset. Ia merupakan *real worls*  dataset  yang menjadi data bawaan (build in)  dari [ggplot2 packages](https://ggplot2.tidyverse.org/reference/diamonds.html). Anda dapat mengunduhnya melalui [repository github ggplot](https://github.com/tidyverse/ggplot2/tree/main/data-raw)

## **Data Understanding**

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e8a8e2fed3b414d0503d2fad091b303120210910103958.png){: .shadow}

Untuk tahap latihan, Anda hanya menggunakan dataset ini sehingga tidak perlu menambhakan data lain atau melakukan penggabungan dataset lgi. Selain itu, dataset ini juga cukup bersih sehingga tidak terlalu banyak  memerlukan  proses data cleaning.

Dataset ini memiliki 53.940 jenis diamonds dengan berbagai karakteristik dan harga. Karakteristik yang dimaksud disini adalah fitur non-numerik  seperti cut, color, dan clarity, serta fitur numerik seperti carat, x, y, z, table, dan *depth*. Kesembilan fitur ini adalah fitur yang akan digunakan dalam menemukan pola dalam data, sedangkan harga merupakan fitur target.

Dalam membuat model prediktif dengan machine learning, Anda dapat menggunakan tools manapun yang biasa Anda gunakan, misalanya Google Collboratory, Jupyter Notenook, Python Anaconda. Jika ingin menggunakan Python IDE (Integrated Developement Tools) Anda bisa menggunakan tools seperti Pycharm atau Visual Studio.

Untuk kemudahan dalam menguraikan setiap tahapan kode, proyek ini menggunakan tools Google Collaboratory.

## **Data Loading**

Supaya isi dataset lebih mudah dipahami, kita perlu melakukan proses **loading data** terlebih dahulu. Jangan lupa import library pandas untuk dapat membaca file datanya. Disini kita akan membaca data langsung  dari url sumber data di [repository Github ggplot](https://github.com/tidyverse/ggplot2/tree/main/data-raw). Dataset yang akan kita gunakan bernama diamonds.csv.

Pertama import library yang dibutuhkan. Anda dapat melakukannya diawal, atau ditiap kode sel.

```python
import numpy as np
import matplotlib.pylot as plt
import pandas as pd
%matplotlib inline
import seaborn as sns
```

Kemudian tuliskan kode berikut.

```python
# load dataset
url = 'https://raw.githubusercontent.com/tidyverse/ggplot2/master/data-raw/diamonds.csv'
diamonds = pd.read_csv(url)
diamonds
```

Hasilnya sebagai berikut.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210727111426d1823aad06b9f6e65dd4ea6b4389a6fd.png){: .shadow}

Output kode diatas menunjukkan informasi sebagai berikut.

* Ada 53.940 barsi (records atau jumlah pengamatan) dalam dataset.
* Terdapat 10 kolom yaitu : carat, cut, color, clarity, depth, table, price, x, y, z.

## **Exploratory Data Analysis - Deskripsi Variabel**

Exploratory Data Analysis atau sering disingkat SDA merupakan proses investigasi awal pada data untuk menganalisis karakteristik, menemukan pola, anomali, dan memriksa asumsi pada data. Teknik ini biasanya menggunakan bantuan statistik dan representasi grafis atau visualisasi. Teknik ini awalnya dikembangkan oleh seorang matematikawan Amerika bernama John Tukey pada tahun 1970 [21](https://www.ibm.com/topics/exploratory-data-analysis). Teknik EDA kemudian semakin berkembang dan digunakan secara luas dalam proses analis data hingga saat ini. 

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:08e5332d607bc770dd7ff6e52913a5a320210910104612.png){: .shadow}

Cakupan proses SDA sangat luas. Namun secara umum, Anda dapat menggunakan roses SDA untuk menjawab pertanyaan berikut.

* Apa saja jenis variabel pada dataset?
* Bagaimana distribusi variabel dalam dataset?
* Apakah ada missing value?
* Apakah ada fitur yang tidak berguna (redudan)?
* Bagaimana korelasi antara fitur dan target?

Dalam menjawab pertanyaan diatas, kita perlu melakukan beberapa hal pada data seperti mengeliminasi fitur, membuat fitur baru, menggabungkan kategori pada fitur  non-numerik, melakukan transformasi pad fitur, dll.

Perlu diingat bahwa penerapan teknik EDA mana yang berguna untuk situasi tertentu, EDA adalah proses seni. Keterampilan yang diperoleh melalui latihan, pengamatan, proses belajar dan pengalaman yang mempengaruhi proses EDA yang kita lakukan. Selain itu, EDA tidak dibatasi oleh teknik tertentu sehingga kita kadang perlu menemukan cara baru atau melakukan improvisasi dalam melihat data.

Umumnya teknik EDA dibagi menjadi dua cara. Pertama setiap metode bersifat grafis atau nongrafis. Kedua, setiap  metode bersifat univariate(melibatkan satu variabel atau variabel) dan multivariate(melibatkan dua atau lebih variabel).

Univariate berasal dari kata uniyang artinya satu variate yang berarti validasi. Jadi, analisis univariate  adalah cara kita melakukan analisis terhadap  satu jenis (variasi) variabel saja. Dengan kata lain, multivariate analysis merupakan proses eksplorasi yang melibatkan  banyak (dua atau lebih) variabel pada data.

Untuk lebih jelasnya, yuk kita terapkan EDA pada dataset.

### Deskripsi Variabel

Berdasarkan informasi dari kaggle, variabel-variabel pada diamonds dataset sebagai berikut.

* Harga dalam dolar Amerika Serikat ($) adalah fitur target. 
* carat: merepresentasikan bobot (weight) dari diamonds (0.2-5.01), digunakan sebagai ukuran dari batu permata dan perhiasan.
* cut: merepresentasikan kualitas pemotongan diamonds (Fair, Good, Very Good, Premium, and Ideal).
* color: merepresentasikan warna, dari J (paling buruk) ke D (yang terbaik).
* clarity: merepresentasikan seberapa jernih diamonds (I1 (paling buruk), SI2, SI1, VS2, VS1, VVS2, VVS1, IF (terbaik))
* x: merepresentasikan panjang diamonds dalam mm (0-10.74).
* y: merepresentasikan lebar diamonds dalam mm (0-58.9).
* z: merepresentasikan kedalaman diamonds dalam mm (0-31.8).
* depth: merepresentasikan z/mean(x, y) = 2 * z/(x + y) (43-79).
table: merepresentasikan lebar bagian atas berlian relatif terhadap titik terlebar 43-95).

Berikut adalah informasi mengenai fitur x, y, z, depth,  dan table.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:eba1d79b8ff358d29e7240bf7baa9aee20210910131412.png){: .shadow}

Setelah memahami deskripsi variabel pada data, langkah selanjutnya akan mengecek informasi pada dataset menggunakan methode 
`info()` berikut.

```python
diamonds.info()
```

output:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210727111830422497034e8a9d68cb70a40bc78c68f4.png){: .shadow}

Dari output terlihat bahwa:

* Terdapat 3 kolom dengan tipe object yaitu: cut, color, dan clarity. Kolom ini merupakan categorical  features ( fitur numerik).
* Terdapat 6 kolom numerik dengan tipe data float64 yaitu : carat, depth, x, y, dan z. Ini merupakan fitur numerik yang merupakan hasil pengukuran secara fisik.
* Terdapat 1 kolom numerik dengan tipedata int64, yaitu: price. Kolom ini merupakan tarfet fitur kita.

Uraian diatas menunjukkan  bahwa setiap kolom telah memilikitipa data yang sesuai. Selanjutnya, kita perlu mengecek deskripsi statistik data dengan fitur` describe()`.

```python
diamonds.describe()
```

Output:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210727111940c64bea509fae0a041f6a6e2772416e20.png){: .shadow}

Fungsi describe() memberikan inforasi statistil pada masing-masing kolom, antara lain:

* Count  adalah jumlah sampel pada data.
* Mean adalah nilai rata-rata.
* Std adalah standar deviasi.
* Min yaitu nilai minimum setiap kolom. 
* 25% adalah kuartil pertama. Kuartil adalah nilai yang menandai batas interval dalam empat bagian sebaran yang sama. 
* 50% adalah kuartil kedua, atau biasa juga disebut median (nilai tengah).
* 75% adalah kuartil ketiga.
* Max adalah nilai maksimum.

## **Menangani Missing Value**

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e384b3dcf6221e9d8e82c975796aef7820210910131514.png){: .shadow}

Dari hasil fungsi `describe()` nilai minimum x, y, dan z  adalah 0. Seperti kita tahu, x, y, dan z  adalah ukuran panjang, lebar, dan kedalaman diamonds sehingga tidak mungkin ada diamonds dengan dimensi x, y, atau z bernilai 0. Kita patut menduga bahwa hal ini merupakan data yang tidak valid atau sering disebut missing value. Mari kita cek ada berapa missing value pada kolom x, y, dan z.

```python
x = (diamonds.x == 0).sum()
y = (diamonds.y == 0).sum()
z = (diamonds.z == 0).sum()

print("Nilai 0 dikolom x ada: ", x)
print("Nili 0 dikolom y ada: ", y)
print("Nilai 0 dikolom z ada: ", z)
```

Output:

Nilai 0 di kolom x ada:  8

Nilai 0 di kolom y ada:  7

Nilai 0 di kolom z ada:  20

Selanjutnya, mari kita cek, apakah data bernilai 0  pada salah satu dimensi juga terdapat pada dimensi lain? Kita cek dari kolom  yang memiliki jumlah missing value terbanyak. 

```python
diamonds.loc[(diamonds['z']==0)]
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210716173017f1a19e66c36ac2f4fbb50e7fb439524d.jpeg){: .shadow}

Menarik, ternyata seluruh data bernilai 0  pada dimensi x dan y juga memiliki nilai 0  pada dimensi z. Sekarang, kita perlu memutuskan apa yang perlu kita lakukan  terhadap data yang hilang ini. Ada beberapa teknik untuk mengatasi  missing value, antara lain, menghapus atau melakukan drop terhadap data yang hilang, menggantinya dengan mean dan median, serta memprediksi dan mengganti nilainya dengan teknik regresi[22](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3668100/).

Setiap teknik tentu memiliki kelebihandna kekurangan. Selain itu, penangan missing value juga bersifat unik tergantung kasusnya. Pada kasus kita, 20 sampel missing value merupakan jumlah kecil jika dibandingkan  total sampel yaitu 53.940. Jika 20 sampel ini dihapus, tentu akan kehilangan beberapa informasi. Akan tetepai ini tidak menjadi masalah sebab kita masih memiliki 53.920 sampel lainnya. Oleh karena itu, mari kita hapus saja missing value ini.

```python
# drop baris dengan nilai 'x', 'y', dan 'z' == 0
diamonds = diamonds.loc[(diamonds[['x','y','z']]!=0).all(axis=1)]

# cek ukuran data untuk memastikan baris sudah didrop
diamonds.shape
```

Output:

(53920, 10)

Setelah baris bernilai 0 dihapus, jumlah sampel atau baris data berubah menjadi 53.920. Mari kita cek lagi dengan fungsi `describe()` untuk memastikan tidak ada  nilai 0 lagi pada kolom x, y, dan z.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210716173017b32549358531ded0091612c0246d1516.jpeg){: .shadow}

Nilai minimum pada kolom x, y, dan z sudah bukan 0 lagi. Kita bisa lanjutkan ketahapan selanjutnya yaitu menangani outliers.

### Menangani Outliers

Beberapa pengamatan dalam satu set data kadang berada diluar lingkungan pengamatan lainnya. Pengamatan seperti ini disebut outlier. Menurut Kuhn dan Johnson dalam Applied Predictive Modelling [23](http://appliedpredictivemodeling.com/), outliers adalah sampel yang nilainya sangat jauh dari cakupan umum data utama. Ia adalah hasil pengamatan yang kemunculannya sangat jarang dan berbeda dari data hasil pengamatan lainnya.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:24acfc8c5cb6332437e45bf2b3e2ded220210910131644.png){: .shadow}

Ada beberapa teknik untuk menangani outliers, antara lain:

* Hypothesis Testing
* Z-score methode
* IQR Methode

Pada kasus ini, kita akan mendeteksi outliers dengan teknik visualisasi data (boxplot). Kemudian, kita akan menangani outliers dengan teknik IQR methode. IQR adalah singkatan dari Inter Quartile Range. Untuk memahami apa itu IQR, mari kita ingat lagi konsep kuartil. Kuartil dari suatu populasi  adalah tiga nilai yang membagi distribusi data menjadi empat sebaran.  Seperempat dari data barada dibawah kuratil pertama (Q1), setengah dari data berada dibawah kluratil kedua (Q2), dan tiga perempat dari data berada  dikuartil ketiga (Q3).  Dengan demikian interquartil range atau IQR = Q3 - Q1.

Sampai disini, mari kita simpan dulu metode IQR. Kita akan menggunakannya nanti jikalaumemang terbukti ada outliers  pada dataset kita. Untuk mengeceknya, kita akan menggunakan teknik visualisasi, yaitu teknik bloxplot.  Menurut Seltman dalam "Experimental Design and Analysis" [24](https://www.stat.cmu.edu/~hseltman/309/Book/Book.pdf), boxplot menunjukkan ukuran lokasi dan penyebaran, serta memberikan informasi tentang simetri dan outliers. Boxplot bisa digambarkan secara vertikal maupun horizontal. 

Berikut adalah ilustrasi dan penjelasan nilai statistikpada bloxplot.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:3be38c69ec4f1ee07ce8c24e42ce23fb20210910131731.png){: .shadow}

Sekarang mari kita visualisasikan data diamonds dengan bloxplot  untuk mendeteksi beberapa outliers pada data numerik. Anda dapat melakukan visualisasi pada fitur numerik sisanya.

1. Carat
   
   ```python
   sns.boxplot(x=diamonds['carat'])
   ```
   Output:
   ![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210716173713a7a3def4a5fb598bf6c9443489fc09e6.jpeg){: .shadow}

2. Fitur Table
   
    ```python
    sns.boxplot(x=diamonds['table'])
    ```
    Output:
    ![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2021071617380966ab972049944ecb51996a02441341eb.jpeg){: .shadow}

3. Fitur X
   
   ```python
   sns.bloxplot(x=diamonds['x'])
   ```

   Output:
   ![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/2021071617401453d2da2d564a4786cf6007e3c2f6c7c5.jpeg){: .shadow}


Jika kita perhatikan kembali, pada beberapa fitur numerikdiatas terdapat outliers. Tugas kita selanjutnya adalah mengatasi outliers tersebut dengan metode yang telah kita bahas sebelumnya yaitu metode IQR.  Kita akan menggunakan metode IQR untuk mengidentifikasi outlier yang berada diluar Q1 dan Q3. Nilai apapun yang diluar batas iniddianggap sebagai outlier.

Seltman dalam "Experimental Design dan Analysis" [[24]](https://www.stat.cmu.edu/~hseltman/309/Book/Book.pdf) menyatakan bahwa outliers yang diidentifikasi oleh boxplot (disebut juga “boxplot outliers”) didefinisikan sebagai data yang nilainya 1.5 QR di atas Q3 atau 1.5 QR di bawah Q1. Jangan bingung dulu ya, kita akan bahas lebih detail.

Hal pertama yang perlu Anda lakukan adalah membuat batas bawah dan batas atas. Untuk membuat batas bawah, kurangi Q1 dengan 1,5 * IQR. Kemudian, untuk membuat batas atas, tambahkan 1.5 * IQR dengan Q3. Mudah bukan

Berikut persamaanya:

```
Batas bawah = Q1 - 1.5 * IQR

Batas atas = Q3 + 1.5 * IQR
```

Mari kita terapkan persamaan ini kedalam kode.

```python
Q1 = diamonds.quantile(0.25)
Q3 = diamonds.quantile(0.75)
IQR=Q3-Q1
diamonds=diamonds[~((diamonds<(Q1-1.5*IQR))|(diamonds>(Q3+1.5*IQR))).any(axis=1)]
 
# Cek ukuran dataset setelah kita drop outliers
diamonds.shape
```

Output:
(47524, 10)

Dataset Anda sekarang telah bersih dan memiliki 47.524 sampel.

## **Exploratory Data Analysis - Univariate Analyze**

### Univariate Analysis

Selanjutnya, kita akan melakukan proses analisis data dengan teknik Univariate EDA. Pertama, Anda bagi fitur pada dataset menjadi dua bagian, yaitu numerical features dan categorical features.

```pythonn
numerical_features = ['price', 'carat', 'depth', 'table', 'x', 'y', 'z']
categorical_features = ['cut', 'color', 'clarity']
```

Lakukan analisis terhadap fitur kategori terlebih dahulu.

### Categorical Features

**Fitur Cut**

```python
feature = categorical_features[0]
count = diamonds[feature].value_counts()
percent = 100*diamonds[feature].value_counts(normalize=True)
df = pd.DataFrame({'jumlah sampel':count, 'persentase':percent.round(1)})
print(df)
count.plot(kind='bar', title=feature);
```

Output:

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:bde663ca1aa81481d39d0fab24041a2820220209112903.jpeg){: .shadow}

Terdapat 5 kategori pada fitur Cut, secara berurutan dari jumlahnya yang paling banyak yaitu: Ideal, Premium, Very Good, Good, dan Fair. Dari data persentase dapat kita simpulkan bahwa lebih dari 60% sampel merupakan diamonds tipe grade tinggi, yaitu grade Ideal dan Premium.

**Fitur Color**

Selanjutnya, mari kita cek fitur ‘Color’.

```python
feature = categorical_features[1]
count = diamonds[feature].value_counts()
percent = 100*diamonds[feature].value_counts(normalize=True)
df = pd.DataFrame({'jumlah sampel':count, 'persentase':percent.round(1)})
print(df)
count.plot(kind='bar', title=feature);
```

Output:

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:869507f898753cadc31b331f550a26b920220209113035.jpeg){: .shadow}

Berdasarkan deskripsi variabel, urutan kategori warna dari yang paling buruk ke yang paling bagus adalah J, I, H, G, F, E, dan D. Dari grafik di atas, dapat kita simpulkan bahwa sebagian besar grade berada pada grade menengah, yaitu G, F, H.
   
**Fitur Clarity**

Dengan code yang sama untuk fitur clarity, hasil plotnya adalah sebagai berikut:

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:af306e12b7e9fef7a3474cacb21bf26f20220209113128.jpeg){: .shadow}

Berdasarkan informasi dari deskripsi variabel, fitur Clarity terdiri dari 8 kategori dari yang paling buruk ke yang paling baik, yaitu: I1, SI2, SI1, VS2, VS1, VVS2, VVS1, dan IF.

1. 'IF' - Internally Flawless 
2. 'VVS2' - Very Very Slight Inclusions 
3. 'VVS1' - Very Very Slight Inclusions 
4. 'VS1' - Very Slight Inclusions
5. 'VS2' - Very Slight Inclusions
6. 'SI2' - Slight Inclusions
7. 'SI1' - Slight Inclusions
8. 'I1' - Imperfect

Dari grafik kita bisa menyimpulkan bahwa sebagian besar fitur merupakan grade rendah, yaitu SI1, SI2, dan VS2.

### Numerical Features

Selanjutnya, untuk fitur numerik, kita akan melihat histogram masing-masing fiturnya menggunakan code berikut.

```python
diamonds.hist(bins=50, figsize=(20,15))
plt.show()
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202107161750350f07c665ce0f1aa51c66b81c178b2220.jpeg){: .shadow}

Mari amati histogram di atas, khususnya histogram untuk variabel "price" yang merupakan fitur target (label) pada data kita. Dari histogram "price", kita bisa memperoleh beberapa informasi, antara lain:
* Peningkatan harga diamonds sebanding dengan penurunan jumlah sampel. Hal ini dapat kita lihat jelas dari histogram "price" yang grafiknya mengalami penurunan seiring dengan semakin banyaknya jumlah sampel (sumbu x).
* Rentang harga diamonds cukup tinggi yaitu dari skala ratusan dolar Amerika hingga sekitar $11800.
* Setengah harga berlian bernilai di bawah $2500.
* Distribusi harga miring ke kanan (right-skewed). Hal ini akan berimplikasi pada model.


## **Exploratory Data Analysis - Multivariate Analysis**

Multivariate EDA menunjukkan hubungan antara dua atau lebih variabel pada data. Multivariate EDA yang menunjukkan hubungan antara dua variabel biasa disebut sebagai bivariate EDA. Selanjutnya, kita akan melakukan analisis data pada fitur kategori dan numerik.

### Categorical Features

Pada tahap ini, kita akan mengecek rata-rata harga terhadap masing-masing fitur untuk mengetahui pengaruh fitur kategori terhadap harga.

```python
cat_features = diamonds.select_dtypes(include='object').columns.to_list()
 
for col in cat_features:
  sns.catplot(x=col, y="price", kind="bar", dodge=False, height = 4, aspect = 3,  data=diamonds, palette="Set3")
  plt.title("Rata-rata 'price' Relatif terhadap - {}".format(col))
```

Output:

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210716175509d3c34248cbfe28d5e1c26ebf9e4acb90.jpeg){: .shadow}

Dengan mengamati rata-rata harga relatif terhadap fitur kategori di atas, kita memperoleh insight sebagai berikut:
* Pada fitur ‘cut’, rata-rata harga cenderung mirip. Rentangnya berada antara 3500 hingga 4500. Grade tertinggi yaitu grade Ideal memiliki harga rata-rata terendah diantara grade lainnya. Sehingga, fitur cut memiliki pengaruh atau dampak yang kecil terhadap rata-rata harga.
* Pada fitur ‘color’, semakin rendah grade warna, harga diamonds justru semakin tinggi. Dari sini dapat disimpulkan bahwa warna memiliki pengaruh yang rendah terhadap harga.
* Pada fitur ‘clarity’, secara umum, diamond dengan grade lebih rendah memiliki harga yang lebih tinggi. Hal ini berarti bahwa fitur ‘clarity’ memiliki pengaruh yang rendah terhadap harga.
* Kesimpulan akhir, fitur kategori memiliki pengaruh yang rendah terhadap harga.

### Numerical Features

ntuk mengamati hubungan antara fitur numerik, kita akan menggunakan fungsi pairplot(). Kita juga akan mengobservasi korelasi antara fitur numerik dengan fitur target menggunakan fungsi corr(). Tidak perlu menunggu lama, mari kita langsung analisis datanya.

```python
# Mengamati hubungan antar fitur numerik dengan fungsi pairplot()
sns.pairplot(diamonds, diag_kind = 'kde')
```

Output: 
![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210727121002b2a8860f3449ea7e7a750c0b0c7a8450.png){: .shadow}

Fungsi pairplot dari library [seaborn](https://seaborn.pydata.org/generated/seaborn.pairplot.html) menunjukkan relasi pasangan dalam dataset. Misalnya, relasi antara fitur ‘x’ pada sumbu x dengan fitur ‘z’ pada sumbu y atau relasi antara fitur ‘carat’ pada sumbu x dengan ‘price’ pada sumbu y. Dari grafik, kita dapat melihat plot relasi masing-masing fitur numerik pada dataset.

Pada kasus ini, kita akan melihat relasi antara semua fitur numerik dengan fitur target kita yaitu ‘price’. Untuk membacanya, perhatikan fitur pada sumbu y, temukan fitur target ‘price’, dan lihatlah grafik relasi antara semua fitur pada sumbu x dengan fitur price pada sumbu y. Dalam hal ini, fitur ‘price’ berada pada baris keempat (dari atas) sumbu y (ditandai oleh kotak merah). Sehingga, kita cukup melihat relasi antar fitur numerik dengan fitur target ‘price’ pada baris tersebut saja. 

Sebelum memperhatikan pola sebaran data pada grafik pairplot di atas, mari kita pahami terlebih dahulu cara membaca korelasi pada sebaran data. Korelasi pada fitur tampak dari adanya pola pada sebaran data. Sebaran data acak merupakan indikasi korelasi yang lemah (atau tidak ada korelasi sama sekali). Sedangkan, sebaran yang memiliki pola (tidak acak) merupakan indikasi adanya korelasi. Perhatikan contoh gambar berikut.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:272ffaf6d32d76d6c46047c5c4f24a4720210920142549.png){: .shadow}

Dari pola sebaran data (titik-titik) pada gambar di atas, pola data grafik A memiliki korelasi positif. Hal ini ditandai dengan meningkatnya variabel pada sumbu y saat terjadi peningkatan variabel pada sumbu x. Sedangkan, pola data grafik B memiliki korelasi negatif yang ditandai dengan menurunnya variabel y saat terjadi kenaikan pada variabel x. Terakhir, sebaran pada data grafik C menunjukkan pola acak, artinya tidak ada korelasi data.

Pada pola sebaran data grafik pairplot sebelumnya, terlihat ‘carat’, ‘x’, ‘y’, dan ‘z’ memiliki korelasi yang tinggi dengan fitur "price". Sedangkan kedua fitur lainnya yaitu 'depth' dan 'table' terlihat memiliki korelasi yang lemah karena sebarannya tidak membentuk pola. Untuk mengevaluasi skor korelasinya, gunakan fungsi corr().


```python
plt.figure(figsize=(10, 8))
correlation_matrix = diamonds.corr().round(2)
 
# Untuk menge-print nilai di dalam kotak, gunakan parameter anot=True
sns.heatmap(data=correlation_matrix, annot=True, cmap='coolwarm', linewidths=0.5, )
plt.title("Correlation Matrix untuk Fitur Numerik ", size=20)
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210727164756de8760639afa6e3d9d0f57c2bee37a5d.png){: .shadow}

Sebelum mengamati gambar di atas, mari kita simak penjelasan mengenai hubungan korelasi antar fitur. 

Koefisien korelasi berkisar antara -1 dan +1. Ia mengukur kekuatan hubungan antara dua variabel serta arahnya (positif atau negatif). Mengenai kekuatan hubungan antar variabel, semakin dekat nilainya ke 1 atau -1, korelasinya semakin kuat. Sedangkan, semakin dekat nilainya ke 0, korelasinya semakin lemah.  

Arah korelasi antara dua variabel bisa bernilai positif (nilai kedua variabel cenderung meningkat bersama-sama) maupun negatif (nilai salah satu variabel cenderung meningkat ketika nilai variabel lainnya menurun). 

Nah, kembali pada grafik korelasi di atas. Jika kita amati, fitur ‘carat’, ‘x, ‘y’, dan ‘z’ memiliki skor korelasi yang besar (di atas 0.9) dengan fitur target ‘price’. Artinya, fitur 'price' berkorelasi tinggi dengan keempat fitur tersebut. Sementara itu, fitur ‘depth’ memiliki korelasi yang sangat kecil (0.01). Sehingga, fitur tersebut dapat di-drop.

```python
diamonds.drop(['depth'], inplace=True, axis=1)
diamonds.head()
```

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210716175800cd295353a6038b68a14bb9a2d7dc76af.jpeg){: .shadow}

Sampai di sini kita telah melakukan analisis data dengan teknik EDA. Berikutnya, kita akan melakukan proses data preparation sebelum membuat model prediktif dengan machine learning. Tetap semangat ya!


## **Data Preparation**

Bayangkan Anda akan memasak. Sebelum memulai, tentunya Anda perlu melakukan persiapan terlebih dahulu. Tahap ini meliputi proses mencuci dan menakar bahan makanan, memotong-motong, serta membagi bahan mana yang akan dimasukkan terlebih dahulu dan bahan mana yang dimasukkan belakangan. Selain itu, kadang Anda juga melakukan pra-pemrosesan bahan makanan, misalnya merebus telur atau daging terlebih dahulu sebelum dimasak bersama bahan-bahan lainnya.

![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202107161758468456e6632a0d27ec66626b0223d1a64d.jpeg){: .shadow}

Demikian juga saat bekerja dengan data. Data preparation merupakan tahapan penting dalam proses pengembangan model machine learning. Ini adalah tahap di mana kita melakukan proses transformasi pada data sehingga menjadi bentuk yang cocok untuk proses pemodelan. Ada beberapa tahapan yang umum dilakukan pada data preparation, antara lain, seleksi fitur, transformasi data, feature engineering, dan dimensionality reduction. 

Pada bagian ini kita akan melakukan empat tahap persiapan data, yaitu:
* Encoding fitur kategori.
* Reduksi dimensi dengan Principal Component Analysis (PCA).
* Pembagian dataset dengan fungsi train_test_split dari library sklearn.
* Standarisasi.

Tanpa menunggu lama, yuk langsung kita terapkan proses ini pada dataset.

### Encoding Fitur Kategori

Untuk melakukan proses encoding fitur kategori, salah satu teknik yang umum dilakukan adalah teknik one-hot-encoding. [Library scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html) menyediakan fungsi ini untuk mendapatkan fitur baru yang sesuai sehingga dapat mewakili variabel kategori. Kita memiliki tiga variabel kategori dalam dataset kita, yaitu ‘cut’, ‘color’, dan ‘clarity. Mari kita lakukan proses encoding ini dengan fitur get_dummies.

```python
from sklearn.preprocessing import  OneHotEncoder
diamonds = pd.concat([diamonds, pd.get_dummies(diamonds['cut'], prefix='cut')],axis=1)
diamonds = pd.concat([diamonds, pd.get_dummies(diamonds['color'], prefix='color')],axis=1)
diamonds = pd.concat([diamonds, pd.get_dummies(diamonds['clarity'], prefix='clarity')],axis=1)
diamonds.drop(['cut','color','clarity'], axis=1, inplace=True)
diamonds.head()
```

Output:
![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:5032717ad0abadcaf5a498d470c305ca20220210154807.png){: .shadow}

Sekarang, variabel kategori kita telah berubah menjadi variabel numerik.

### Reduksi Dimensi dengan PCA

Teknik reduksi (pengurangan) dimensi adalah prosedur yang mengurangi jumlah fitur dengan tetap mempertahankan informasi pada data. Teknik pengurangan dimensi yang paling populer adalah Principal Component Analysis atau disingkat menjadi PCA. Ia adalah teknik untuk mereduksi dimensi, mengekstraksi fitur, dan mentransformasi data dari “n-dimensional space” ke dalam sistem berkoordinat baru dengan dimensi m, di mana m lebih kecil dari n.

PCA bekerja menggunakan metode aljabar linier. Ia mengasumsikan bahwa sekumpulan data pada arah dengan varians terbesar merupakan yang paling penting (utama). PCA umumnya digunakan ketika variabel dalam data memiliki korelasi yang tinggi. Korelasi tinggi ini menunjukkan data yang berulang atau redundant. 

Karena hal inilah, teknik PCA digunakan untuk mereduksi variabel asli menjadi sejumlah kecil variabel baru yang tidak berkorelasi linier, disebut komponen utama (PC). Komponen utama ini dapat menangkap sebagian besar varians dalam variabel asli. Sehingga, saat teknik PCA diterapkan pada data, ia hanya akan menggunakan komponen utama dan mengabaikan sisanya. 

Berikut penjelasan untuk masing-masing komponen utama (PC):
* PC pertama mewakili arah varians maksimum dalam data. Ia paling banyak menangkap informasi dari semua fitur dalam data. 
* PC kedua menangkap sebagian besar informasi yang tersisa setelah PC pertama. 
* PC ketiga menangkap sebagian besar informasi yang tersisa setelah PC pertama, PC kedua, dst.

![](https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a1b540517a0d04f8bc6a96f1d7a6677e20210912093416.png){: .shadow}

Jika kita cek menggunakan fungsi pairplot, ketiga fitur ukuran diamonds dalam kolom ‘x’, ‘y’, dan ‘z’ memiliki korelasi yang tinggi. Hal ini karena ketiga fitur ini memiliki informasi yang sama, yaitu ukuran diamonds. 

```python
sns.pairplot(diamonds[['x','y','z']], plot_kws={"s": 3});
```

Output:
![](https://d17ivq9b7rppb3.cloudfront.net/original/academy/202107161802056cf51a60da129a50af47b2aadfb75ac6.jpeg){: .shadow}

Selanjutnya, aplikasikan class [PCA](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html) dari library scikit learn dengan kode berikut.

```python
from sklearn.decomposition import PCA
 
pca = PCA(n_components=3, random_state=123)
pca.fit(diamonds[['x','y','z']])
princ_comp = pca.transform(diamonds[['x','y','z']])
```

Kode di atas memanggil class PCA() dari library scikit-learn. Paremeter yang kita masukkan ke dalam class adalah n_components dan random_state. Parameter n_components merupakan jumlah komponen atau dimensi, dalam kasus kita jumlahnya ada 3, yaitu 'x', 'y', dan 'z'. 

Sedangkan, parameter [random_state](https://scikit-learn.org/stable/glossary.html#term-random_state) berfungsi untuk mengontrol random number generator yang digunakan. Parameter ini berupa bilangan integer dan nilainya bebas. Pada kasus ini, kita menerapkan random_state = 123. Berapa pun nilai integer yang kita tentukan --selama itu bilangan integer, ia akan memberikan hasil yang sama setiap kali dilakukan pemanggilan fungsi (dalam kasus kita, class PCA). 

Menentukan parameter random_state bertujuan untuk dapat memastikan bahwa hasil pembagian dataset konsisten dan memberikan data yang sama setiap kali model dijalankan. Jika tidak ditentukan, maka tiap kali melakukan split, kita akan mendapatkan data train dan tes berbeda. Hal ini berpengaruh terhadap akurasi model ML yang menjadi berbeda tiap kali di-run. 

Nah, setelah menerapkan class PCA, kita bisa mengetahui proporsi informasi dari ketiga komponen tadi.

```python
pca.explained_variance_ratio_.round(3)
```

Output:
array([0.998, 0.002, 0.001])


Arti dari output di atas adalah, 99.8% informasi pada ketiga fitur ‘x’, ‘y’, ‘z’ terdapat pada PC pertama. Sedangkan sisanya, sebesar 0.2% dan 0.1% terdapat pada PC kedua dan ketiga. Perhatikanlah, jumlahnya jadi > 100%. Hal ini disebabkan oleh proses pembulatan (round) dalam 3 desimal ya, jadi tidak perlu khawatir. 

Berdasarkan hasil ini, kita akan mereduksi fitur (dimensi) dan hanya mempertahankan PC (komponen) pertama saja. PC pertama ini akan menjadi fitur dimensi atau ukuran berlian menggantikan ketiga fitur lainnya ('x', 'y', 'z'). Kita beri nama fitur ini 'dimension'.

Sekarang Anda akan membuat fitur baru bernama 'dimension' untuk menggantikan fitur 'x', 'y', dan'z' . Oleh karena itu, mari jalankan kode di atas dengan beberapa perubahan berikut:




## **CUKUP DISINI DULU YA SOALNYA ADA KERJAAN LAIN**

