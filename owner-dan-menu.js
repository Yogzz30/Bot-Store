const fs = require('fs')

global.namabot = "ChinoBotz"
global.namaowner = "YogzzDevX"
global.footer_text = "© ChinoBotz" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285852129763','6285852129763']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `*⫹⫺ PAYMENT:*
• *Qris All Payment*
• *Dana*
• *Gopay*
• *Ovo*
`
module.exports.helpMenu = (pushname) =>{
  return `*Halo Dek* ${pushname}

『 *𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓* 』

➻ *Owner* (khusus owner bot)
➻ *Addsewa* (khusus owner bot)
➻ *Delsewa* (khusus owner bot)
➻ *Ceksewa* 
➻ *Listsewa*
➻ *Pay* (payment storemu)
➻ *Setpay* (seting payment storemu)
➻ *List*
➻ *Addlist* (addlist nama|isi)
➻ *Updatelist*
➻ *Dellist* (hapus list)
➻ *Tambah* (penjumlahan)
➻ *Kurang* (penjumlahan)
➻ *Kali* (penjumlahan)
➻ *Bagi* (penjumlahan)
➻ *Setproses* (seting kata kata proses)
➻ *Changeproses* (ganti kata kata proses)
➻ *Delproses* (hapus setingan proses)
➻ *Setdone* (seting kata kata done)
➻ *Changedone* (ganti kata kata done)
➻ *Delsetdone* (hapus setingan done)
➻ *Proses* (reply pesanan proses)
➻ *Done* (reply pesanan done)
➻ *Welcome* (on/off)
➻ *Goodbye* (on/off) 
➻ *Setwelcome* (seting kata kata welcome)
➻ *Changewelcome* (ganti kata kata welcome)
➻ *Delsetwelcome* (hapus set welcome)
➻ *Setleft* (seting* kata kata left)
➻ *Changeleft* (ganti kata kata left)
➻ *Delsetleft* (hapus setingan left)
➻ *Antiwame* (autokick)
➻ *Antiwame2* (autodelete)
➻ *Antilink* (autokick)
➻ *Antilink2* (autodelete)
➻ *Open* (buka grup)
➻ *Close* (tutup grup)
➻ *Hidetag*
➻ *Add*
➻ *Kick* 
➻ *Sticker*

📝 *Note*:
_GAUSAH SPAM YA DIK_
_Kamu bisa ketik langsung tanpa harus memakai prefix,_
_contoh: owner._

*⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕*

`
}