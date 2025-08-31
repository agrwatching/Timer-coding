# ⏱️ Sitetime Timer

Aplikasi **Sitetime Timer** berbasis [Electron](https://www.electronjs.org/) untuk membantu manajemen waktu.  
Mudah dijalankan di mode development dan dapat dibuild menjadi installer Windows (NSIS).

## 🚀 Fitur
- ⚡ Dibuat dengan **Electron**  
- 🖥️ Mode development langsung dengan `npm start`  
- 📦 Build otomatis ke installer Windows (NSIS) dengan `npm run build`  

## 📦 Persyaratan
Sebelum menjalankan project ini, pastikan sudah menginstall:
- [Node.js](https://nodejs.org/) — disarankan versi LTS terbaru (minimal v18+)  
- [npm](https://www.npmjs.com/) — sudah termasuk dalam Node.js  

## 🔧 Cara Menjalankan

1. **Install dependencies**
   ```bash
   npm install
   ```
   Perintah ini akan otomatis menginstall semua dependency, termasuk **electron** dan **electron-builder**.

2. **Jalankan aplikasi di mode development**
   ```bash
   npm start
   ```
   Perintah ini akan menjalankan Electron langsung dari source code.

## 🏗️ Build Aplikasi
Untuk membuat installer Windows (NSIS):
```bash
npm run build
```
Hasil build akan tersimpan di folder **dist/**.  
File installer `.exe` bisa langsung digunakan untuk menginstall aplikasi **Sitetime Timer** di Windows.  

## 📂 Struktur Project
- **main.js** → Entry point Electron  
- **dist/** → Folder output hasil build  
- **node_modules/** → Dependencies (tidak dipush ke GitHub, cukup `npm install`)  
- **package.json** & **package-lock.json** → Konfigurasi project & dependency  

---

## 🎉 Selamat Mencoba!
Silakan gunakan, modifikasi, dan kembangkan aplikasi ini sesuai kebutuhan Anda.  
Semoga bermanfaat 🚀  

## 📝 Lisensi
[ISC](https://opensource.org/licenses/ISC)
