━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=PROJECT%20RAEHAN&fontSize=80&animation=fadeIn" />
</p>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<p align="center">
    <a href="https://github.com/RAEHAN-SP">
        <img
            src="https://readme-typing-svg.herokuapp.com?size=30&width=1000&lines=HALLO+SEMUA+NAMA+SAYA+RAEHAN;TERIMA+KASIH+SUDAH+MAMPIR+DAN+SAMPAI+JUMPA"
            alt="Typing SVG"/></p> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<table border="10">
  <tr>
    <td align="center">
      <img src="https://ar-hosting.pages.dev/1775655484023.jpg" width="200" alt="Foto 1"><br>
      <b> > Foto Th --> [5-8-2019] </b>
    <
    </td>
  </tr>
</table>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━        
</p>
<p align="center"><a href="https://github.com/RAEHAN-SP"><img src="https://github-readme-stats.vercel.app/api?username=RAEHAN-SP&show_icons=true&theme=radical"></a></p>
</div>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<table border="10">
  <tr>
    <td align="center">
  <a href="https://on.soundcloud.com/9jfpJXtryfoLQjAB04">
    <img src="https://ar-hosting.pages.dev/1776830313469.jpg" width="400" alt="SoundCloud Player" />
  </a>
  <br>
  <b>🎵 Klik Foto Untuk Membuka Music</b>
</p>

    
  </tr>
</table>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F7F7F7&center=true&vCenter=true&width=435&lines=---++BACA+DIBAWAH+++---;---++TERIMA+KASIH++---" alt="Typing SVG" />
</p>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
| APLIKASI | Tautan / Link |
| --- | --- |
| INSTAGRAM | [https://www.instagram.com/hanz_932?igsh=Ymp6dTNjYzhtODFq](https://www.instagram.com/hanz_932?igsh=Ymp6dTNjYzhtODFq) |


▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬

   
| HEROKU BUILD PACK |
| --- |
| PM2|
||
| https://github.com/ItsJimi/heroku-buildpack-pm2|
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| FFMPEG |
||
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| IMAGEMAGICK |
||
https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| WEBP |
||
https://github.com/clhuang/heroku-buildpack-webp-binaries



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


```bash

name: main.yml
on:
  push:
    branches: [ HANZ ]
  workflow_dispatch: # Tombol manual

jobs:
  system-runner:
    runs-on: ubuntu-latest
    
    # Izin mutlak agar bot bisa menghapus dan membuat workflow
    permissions:
      actions: write
      contents: write

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'


      - name: Running Bot (Anti-Error & Anti-Limit)
        # Batas waktu aman 5,5 jam (335 menit) sebelum ditutup paksa GitHub
        timeout-minutes: 335
        continue-on-error: true
        run: |
          # [ANTI-ERROR] Tambahan '|| true' memastikan sistem tidak ikut hancur jika index.js error
          while true; do
            echo "Menjalankan mesin bot..."
            npm start || true 
            echo "Terjadi kendala pada script bot. Melakukan restart otomatis dalam 1 detik..."
            sleep 1
          done

      - name: Sapu Bersih Riwayat & Centang Hijau (Zero Trace)
        if: always() # Wajib jalan walaupun bot error parah
        env:
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
        run: |
          echo "Membersihkan semua riwayat di tab Actions..."
          
          # 1. Hapus tuntas status "Completed" (Centang Hijau)
          gh run list --status completed --json databaseId -q '.[].databaseId' | xargs -I {} gh run delete {} || true
          
          # 2. Hapus tuntas status "Cancelled" (Abu-abu)
          gh run list --status cancelled --json databaseId -q '.[].databaseId' | xargs -I {} gh run delete {} || true
          
          # 3. Hapus tuntas status "Failure" (Silang Merah/Error)
          gh run list --status failure --json databaseId -q '.[].databaseId' | xargs -I {} gh run delete {} || true

      - name: Estafet Sesi Baru
        if: always()
        env:
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
        run: |
          echo "Memanggil mesin baru untuk mengambil alih tugas..."
          # Pastikan nama di bawah ini SAMA PERSIS dengan 'name:' paling atas
          gh workflow run "main.yml" --ref HANZ



