// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 28; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2100; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

if ((tahun % 400 == 0 || tahun % 4 == 0) || tahun % 100 == 0) {
    switch (bulan) {
        case 1:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Februari ${tahun}`);
            }
            break
        case 2:
            if (tanggal >= 1 && tanggal <= 29) {
                console.log(`${tanggal} Februari ${tahun}`);
            }
            break
        case 3:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Maret ${tahun}`);
            }
            break
        case 4:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} April ${tahun}`);
            }
            break
        case 5:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Mei ${tahun}`);
            }
            break
        case 6:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} Juni ${tahun}`);
            }
            break
        case 7:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Juli ${tahun}`);
            }
            break    
        case 8:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Agustus ${tahun}`);
            }
            break
        case 9:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} September ${tahun}`);
            }
            break
        case 10:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Oktober ${tahun}`);
            }
            break
        case 11:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} November ${tahun}`);
            }
            break
        case 12:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Desember ${tahun}`);
            }
            break
    }
} else if ((tahun % 400 != 0 && tahun % 4 != 0) || tahun % 100 == 0 ) {
    switch (bulan) {
        case 1:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Januari ${tahun}`);
            }
            break
        case 2:
            if (tanggal >= 1 && tanggal <= 28) {
                console.log(`${tanggal} Februari ${tahun}`);
            }
            break
        case 3:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Maret ${tahun}`);
            }
            break
        case 4:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} April ${tahun}`);
            }
            break
        case 5:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Mai ${tahun}`);
            }
            break
        case 6:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} Juni ${tahun}`);
            }
            break
        case 7:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Juli ${tahun}`);
            }
            break    
        case 8:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Agustus ${tahun}`);
            }
            break
        case 9:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} September ${tahun}`);
            }
            break
        case 10:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Oktober ${tahun}`);
            }
            break
        case 11:
            if (tanggal >= 1 && tanggal <= 30) {
                console.log(`${tanggal} November ${tahun}`);
            }
            break
        case 12:
            if (tanggal >= 1 && tanggal <= 31) {
                console.log(`${tanggal} Desember ${tahun}`);
            }
            break
    }
}
