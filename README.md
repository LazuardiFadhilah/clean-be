# Clean API (Backend)

Backend REST API untuk layanan booking jasa cleaning rumah.

## 🧰 Teknologi yang Digunakan

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Dotenv

## 🚀 Cara Menjalankan Project
```bash
git clone https://github.com/username/clean-backend.git
cd clean-backend
npm install
npm run dev
```

## 🔐 Konfigurasi Environment
Buat file .env di root folder dan isi seperti berikut:
- `PORT`=5000
- `MONGO_URI`=your_mongodb_url
- `JWT_SECRET`=your_jwt_secret



## 📦 API Endpoints

🧑 Users
- `POST` /api/auth/register
```json
{
  "name": "Ardi",
  "email": "ardi1@gmail.com",
  "password": "password"
}
```
- `POST` /api/auth/login
```json
{
  "email": "ardi1@gmail.com",
  "password": "password"
}
```
- `GET` /api/auth/me
```json
{
 "id": "683dc1582350c795d1703b2b",
 "email": "ardi1@gmail.com",
 "fullname": "Lazuardi Fadhilah",
 "phone_number": "123123123"
}
```

## 📚 Dokumentasi Tambahan
- Cocok untuk digunakan sebagai portofolio backend REST API.
- Semua response dalam format JSON.
- Sudah mendukung filter dan validasi basic.

## 👨‍💻 Author
- Lazuardi Fadhilah
- 📧 lazuardifadhillah@gmail.com
