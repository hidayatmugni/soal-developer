# soal-developer
# Soal Developer - Proyek Fullstack

Proyek ini adalah aplikasi web full-stack yang dikembangkan sebagai bagian dari uji keterampilan developer. Aplikasi ini memiliki frontend yang dibangun dengan React.js, Vite, dan Tailwind CSS, serta backend yang dibangun dengan Node.js, Express.js, dan MongoDB. Proyek ini dirancang untuk menunjukkan keterampilan Anda dalam pengembangan frontend dan backend, termasuk API, operasi CRUD, dan desain UI.

## Deskripsi Proyek

- **Frontend**: React.js (dengan Vite untuk pengaturan pengembangan yang cepat) dan Tailwind CSS (versi 3.4.17)
- **Backend**: Node.js, Express.js, dan MongoDB untuk manajemen basis data
- **Fungsi**:
  - Sistem Komisi Marketing
  - Sistem Pembayaran
  - Manajemen Transaksi Penjualan

## Fitur

### Frontend

- **React.js**: Frontend dibangun menggunakan React.js, sebuah pustaka JavaScript yang populer untuk membangun antarmuka pengguna.
- **Vite**: Alat pembangunan yang cepat dan ringan untuk menyajikan dan mengemas aplikasi React.
- **Tailwind CSS (v3.4.17)**: Kerangka kerja CSS berbasis utilitas yang digunakan untuk menata aplikasi dengan fokus pada kesederhanaan dan kustomisasi.

### Backend

- **Node.js**: Runtime JavaScript yang digunakan untuk menjalankan server backend.
- **Express.js**: Framework web untuk Node.js yang menyederhanakan proses pembuatan API dan routing.
- **MongoDB**: Basis data NoSQL yang digunakan untuk menyimpan data seperti komisi marketing, pembayaran, dan transaksi penjualan.

### API Endpoint

*Marketing Routes
-GET /api/marketing – Menampilkan semua marketing

*Payments Routes
-GET /api/payments – Menampilkan semua payments
-POST /api/payments – Menambah payments baru

*Penjualan Routes
-GET /api/penjualan – Menampilkan semua transaksi penjualan
-POST /api/penjualan – Menambah transaksi penjualan baru
-PUT /api/penjualan/:id – Mengedit transaksi penjualan 

*Komisi Routes
-GET /api/comission/komisi – Menampilkan semua komisi marketing perbulan nya masing-masing
## Instalasi

### Setup Backend

1. Clone repository:

   ```bash
   git clone https://github.com/hidayatmugni/soal-developer.git
   cd soal-developer

   cd backend
npm install

Buat file .env di direktori backend dan tambahkan MongoDB URI:
MONGO_URI=mongodb://your_mongo_uri

jalankan server
npm start

Pindah ke direktori frontend:
cd frontend

Instal dependensi frontend:
npm install

Jalankan aplikasi frontend:
npm run dev

Teknologi yang Digunakan
Frontend: React.js, Vite, Tailwind CSS (v3.4.17)
Backend: Node.js, Express.js, MongoDB
API: RESTful API untuk mengelola data marketing, penjualan, dan pembayaran.


