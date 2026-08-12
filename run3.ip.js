jobs:
  system-runner:
    runs-on: macos-latest  # <--- MENGGUNAKAN SERVER MAC (APPLE)
    
    # ... (izin dan persiapan tetap sama seperti awal)

    steps:
      # ... (step download dan setup node sama)

      - name: HANZ INSTALL FFPEG & IMAGEMAGICK
        run: |
          echo "[ HANZ ] Menginstal dependensi media di macOS..."
          # ---> PERINTAH DIBAWAH INI BERUBAH KHUSUS UNTUK MAC <---
          brew install ffmpeg imagemagick webp
          
      # ... (Langkah ke bawahnya sama persis dengan skrip asli Anda)
