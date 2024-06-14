---
title: Database Design Notifications
date: 2024-06-14
tags: [backend, mysql]
category: mysql
layout: post
# youtubeId: FuEiBZwp4ZI
---
<!-- {% include youtubePlayer.html id=page.youtubeId %} -->

## Database Design: Notification

![image](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/2df596b5-be49-4477-8874-2d0f068772f8)


<!-- ### Features

#### Feature Inbox

Inbox berisi semua informasi notifikasi kepada pengguna.
Seperti judul sama deskripsi nya. Untuk detail diklik.

<img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250">


#### Feauture Kategory

Ada 2 jenis kategori yaitu Promod dan Info.
Promo berisi informasi yang akan diberikan kepada semua pengguna. Sedangkan info berisikan informasi kepada spesifik  hanya pengguna tertentu. Misalnya status pembayaran/pembelian. Jika kategori diklik, informasi yang ditampilkan sesuai kategorinya. 

<img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250">


#### Feature Read dan Unread

Warna hijau artinya belum diread dan warna putih artinya sudah diread.

<img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250">



#### Feature Jumlah notifikasi

Menampilkan jumlah notifikasi yang belum dibaca. Hal ini biasanya men-trigger pengguna untuk meng-klik  Inbox notifikasi.

<img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250"> -->

### Features

| Feature                 | Description                                                                                                                                                                           | Image                                                                                                                      |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Inbox**               | Inbox berisi semua informasi notifikasi kepada pengguna. Seperti judul sama deskripsi nya. Untuk detail diklik.                                                                        | <img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250"> |
| **Kategori**            | Ada 2 jenis kategori yaitu Promo dan Info. Promo berisi informasi yang akan diberikan kepada semua pengguna. Sedangkan Info berisikan informasi kepada spesifik hanya pengguna tertentu. Misalnya status pembayaran/pembelian. Jika kategori diklik, informasi yang ditampilkan sesuai kategorinya. | <img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250"> |
| **Read dan Unread**     | Warna hijau artinya belum diread dan warna putih artinya sudah diread.                                                                                                                 | <img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250"> |
| **Jumlah Notifikasi**   | Menampilkan jumlah notifikasi yang belum dibaca. Hal ini biasanya men-trigger pengguna untuk meng-klik Inbox notifikasi.                                                               | <img src="https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/8d9c1264-7736-494d-aa7d-5827d087ac66" alt="image" width="200" height="250"> |



### Persiapan

![image](https://github.com/ridopandiSinaga/ridopandiSinaga.github.io/assets/89272004/7e9cb03a-485e-4118-ab87-907e02cfc64c)


```sql
CREATE DATABASE belajar_mysql_notification;

USE belajar_mysql_notification;
```

#### User

Kolom user pada fitur aplikasi biasanya ada banyak seperti email, nomor, JK dan sebagainya. Namun pada kasus ini tentang notification maka kolom user dibuat sederhana saja. Yang penting ada kolom nama user dan id-nya.

```sql
CREATE TABLE user
(
    id   VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;
```

Okey, lanjut kita input data dummy.

```sql
INSERT INTO user(id, name)
VALUES ('rido', 'ridopandi sinaga');
INSERT INTO user(id, name)
VALUES ('elf', 'elfrida sitorus');
```

#### Notifikasi

Dibuat sesederahana tampilannya saja, title lalu detail dan tanggalnya. Juga ada kategorinya namun ini kita bahas nanti di part kategori.

Pertama pasti selalu ada id, buat int auto increment, title varchar, detail text, waktu timestamp dan ketiganya tidak boleh kosong.

Lalu di Notifikasi ini pasti punya si user ya, sehingga kita tambahkan foreign key user_id varchar. Boleh null atau tidak ini menjadi hal tricky.

Kita tahu ada fitur yang global yaitu Promo. artinya jika ada promo, notifikasi dikirim ke semua user. Jika user masih terhitung jari misalnya 10 masih gampang. Kita insert 10 kali ya, tinggal user_id nya dibedakan. Kita insert pake title sama, detail sama tapi  user_id nya mungkin user1, user2, user3 dst nya.

Nah, gimana kalau usernya sudah ada jutaan?
Bisa insert sejuta kali setiap ada promo?

Bisa, tapi mati --.

Berarti ga bisa?

Bisa tapi mati --.

Nah, trick nya khusus untuk Promo user_id nya kita null kan saja. Jadi kita tidak perlu jadikan mandatory/not null. Artinya kalau ternyata dia ada, berarti milik si user itu. Kalau usernya tidak ada alias null, berarti kita tahu kalau ini untuk global jadi semuanya bisa lihat si notifikasi ini.

Kemudian relasinya satu user bisa dapat kosong atau banyak notification (1 to n relation).

```sql
CREATE TABLE notification
(
    id        INT          NOT NULL AUTO_INCREMENT,
    title     VARCHAR(255) NOT NULL,
    detail    TEXT         NOT NULL,
    create_at TIMESTAMP    NOT NULL,
    user_id   VARCHAR(100),
    PRIMARY KEY (id)
) ENGINE = InnoDB;
```

```sql
ALTER TABLE notification
    ADD CONSTRAINT fk_notification_user
        FOREIGN KEY (user_id) REFERENCES user (id);
```

Oke, lanjut insert data dummy untuk user spesifik dan general.

```sql
INSERT INTO notification(title, detail, create_at, user_id)
VALUES ('Contoh Pesanan', 'Detail Pesanan', CURRENT_TIMESTAMP(), 'rido');
INSERT INTO notification(title, detail, create_at, user_id)
VALUES ('Contoh Promo', 'Detail Promo', CURRENT_TIMESTAMP(), null);
INSERT INTO notification(title, detail, create_at, user_id)
VALUES ('Contoh Pembayaran', 'Detail Pembayaran', CURRENT_TIMESTAMP(), 'elf');
```

Lanjut, membuat query untuk menampilkan notifikasi baik spefik user dan global.

```sql
SELECT *
FROM notification
WHERE (user_id = 'rido' OR user_id IS NULL)
ORDER BY create_at DESC;

SELECT *
FROM notification
WHERE (user_id = 'elf' OR user_id IS NULL)
ORDER BY create_at DESC;
```

#### Feature kategori

```sql
CREATE TABLE category
(
    id   VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;
```

Selanjutnya setiap notifikasi pasti punya kategori berarti kita tambahkan foreign key pada tabel notifikasi.

```sql
ALTER TABLE notification
    ADD COLUMN category_id VARCHAR(100);

ALTER TABLE notification
    ADD CONSTRAINT fk_notification_category
        FOREIGN KEY (category_id) REFERENCES category (id);
```

Kemudian kita insert data dummy kategori.

```sql
INSERT INTO category(id, name)
VALUES ('INFO', 'Info');
INSERT INTO category(id, name)
VALUES ('PROMO', 'Promo');
```

Okey, tadi barusan menambahkan baris baru category_id pada notification guna foreign key artinya row tersebut masih null. 

Ayo kita isi. Keep in mind, sesuaikan categori nya based user_id nya. Tadi user_id yg null untuk global atau Promo dan yg memiliki user_id bebas apa aja masuk ke kategori Info.
Kebetulan pada table notification id yang user_id nya berisi adalah 1 dan 2 dan yang tidak berisi adalah 2.

Kita bisa cek:

```sql
SELECT *
FROM category;
```

```sql
UPDATE notification
SET category_id = 'INFO'
WHERE id = 1;

UPDATE notification
SET category_id = 'PROMO'
WHERE id = 2;

UPDATE notification
SET category_id = 'INFO'
WHERE id = 3;
```

Okey, lanjut membuat query untuk menampilkan informasi ketika promo atau info diklik.

Contoh query klik Promo

```sql
SELECT *
FROM notification n
         JOIN category c ON (n.category_id = c.id)
WHERE (n.user_id = 'elf' OR n.user_id IS NULL)
  AND c.id = 'INFO'
ORDER BY n.create_at DESC;
```

Contoh query untuk Info
```sql
SELECT *
FROM notification n
         JOIN category c ON (n.category_id = c.id)
WHERE (n.user_id = 'elf' OR n.user_id IS NULL)
  AND c.id = 'PROMO'
ORDER BY n.create_at DESC;
```

#### Read  dan Unread.

Untuk fitur read/unread mungkin kepikiran, tambahkan saja boolean seperti is_read di tabel notification.

Mungkin kita bisa buat seperti itu, jika semua notifikasinya ada user_id nya. Gimana, kalau user_id nya yang null atau yg global artinya yang promo seperti yang sudah kita diskusikan tadi.

Untuk yang promo, ga mungkin diread sama satu orang otomatis semua orang ter-read ya. Jadi kita harus ke-spesifik pengguna yang ngeread juga.

Sehingga mau tidak mau dibuat tabel baru lagi.
Sebut tabel notification read, isinya nanti id id notifikasi yang sudah diread.

Membuat id untuk primary key nya kita gunakan id tabel notification saja?

Tidak bisa ya, karena jika gunakan id notification yang promo tadi kan bisa dibaca oleh banyak user ya artinya bisa duplikat. jadi kita tidak bisa pakai id notification. untuk primay key. Kita pakai auto increment saja.

Lanjut, is_read boolean, notification_id dan user_id keduanya uniqe .

Selanjutnya relasi, satu notification bisa di baca oleh beberapa user.

Juga nanti relasi antara tabel user dan tabel NotificationRead, satu user bisa punya banyak NotificationRead.

```sql
CREATE TABLE notification_read
(
    id              INT          NOT NULL AUTO_INCREMENT,
    is_read         BOOLEAN      NOT NULL,
    notification_id INT          NOT NULL,
    user_id         VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;
```

```sql
ALTER TABLE notification_read
    ADD CONSTRAINT fk_notification_read_notification
        FOREIGN KEY (notification_id) REFERENCES notification (id);

ALTER TABLE notification_read
    ADD CONSTRAINT fk_notification_read_user
        FOREIGN KEY (user_id) REFERENCES user (id);
```

Lanjut, kita simulasikan yang sudah diread. Mulai dari yang Promo dulu.

```sql
INSERT INTO notification_read(is_read, notification_id, user_id)
VALUES (true, 2, 'rido');
INSERT INTO notification_read(is_read, notification_id, user_id)
VALUES (true, 2, 'elf');
```
Berarti yang lainnnya yang belum diinsert berarti false.

Sekarang, coba cara menampilkannya. Kita pilih menampilkan khusu bagi user rido.

```sql
SELECT *
FROM notification n
         JOIN category c ON (n.category_id = c.id)
         LEFT JOIN notification_read nr ON (nr.notification_id = n.id)
WHERE (n.user_id = 'rido' OR n.user_id IS NULL)
  AND (nr.user_id = 'rido' OR nr.user_id IS NULL)
ORDER BY n.create_at DESC;

INSERT INTO notification(title, detail, category_id, user_id, create_at)
VALUES ('Contoh Pesanan Lagi', 'Detail Pesanan lagi', 'INFO', 'rido', CURRENT_TIMESTAMP());
INSERT INTO notification(title, detail, category_id, user_id, create_at)
VALUES ('Contoh Promo Lagi', 'Detail Promo lagi', 'PROMO', null, CURRENT_TIMESTAMP());
```

Jadi, user_id true artinya sudah dibaca, jika null artinya belum dibaca.

#### Counter

Hampir sama dengan query sebelumnya, cuma kita pilih user_id yang null saja.

```sql
SELECT COUNT(*)
FROM notification n
         JOIN category c ON (n.category_id = c.id)
         LEFT JOIN notification_read nr ON (nr.notification_id = n.id)
WHERE (n.user_id = 'rido' OR n.user_id IS NULL)
  AND (nr.user_id IS NULL)
ORDER BY n.create_at DESC;
```

Oke, selesai.


References: Eko kurniawan


