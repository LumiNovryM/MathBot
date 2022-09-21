let ulangi = true;

// Salam
alert("Selamat Datang Di MathBot");


while(ulangi == true){
    
    // Menangkap pilihan user 
    let pilih = prompt("Pilih bangun datar yang ingin dihitung");


    // Menyesuaikan pilihan user 
    if(pilih == "Persegi" || pilih == "persegi"){
        // user menentukan jenis 
        let jenis = prompt("Apa yang ingin anda hitung? \nLuas atau Keliling?")
        if(jenis == "luas" || jenis == "Luas"){
            let sisi = prompt("Masukkan sisi persegi");
            hasil = sisi * sisi;
            alert("Hasil Luas dari perseginya adalah " + hasil)
        }else{
            let sisi = prompt("Masukkan sisi persegi");
            hasil = sisi * 4;
            alert("Hasil Keliling dari persegi adalah " + hasil)
        }
    }else if(pilih == "Segitiga" || pilih == "segitiga"){
        let jenis = prompt("Apa yang ingin anda hitung? \nLuas atau Keliling?")
        if(jenis == "Luas" || jenis == "luas"){
            let tinggi = prompt("Masukkan tinggi segitiga");
            let alas = prompt("Masukkan alas segitiga");
            hasil = tinggi * alas * 1/2;
            alert("Hasil Luas dari segitiga adalah " + hasil)
        }else{
            let sisi_a = prompt("Masukkan alas");
            let sisi_b = prompt("Masukkan tinggi");
            let sisi_c = prompt("Masukkan sisi miring");
            hasil = Number(sisi_a) + Number(sisi_b) + Number(sisi_c);
            alert("Hasil Keliling dari Segitiga adalah " + hasil)
        }
    }else if(pilih == "Persegi Panjang" || pilih == "persegi panjang"){
        let jenis = prompt("Apa yang ingin anda hitung? \nLuas atau Keliling?")
        if(jenis == "Luas" || jenis == "luas"){
            let luas = prompt("Masukkan luas");
            let panjang = prompt("Masukkan keliling");
            hasil = luas * panjang;
            alert("Hasil Luas dari persegi panjang adalah " + hasil)
        }else{
            let luas = prompt("Masukkan luas");
            let panjang = prompt("Masukkan keliling");
            hasil = 2 * (Number(luas) + Number(panjang));
            alert("Hasil Keliling dari persegi panjang adalah " + hasil)
        }
    }else if(pilih == "Lingkaran" || pilih == "lingkaran"){
        let jenis = prompt("Apa yang ingin anda hitung? \nLuas atau Keliling?")
        if(jenis == "Luas" || jenis == "luas"){
            let jari = prompt("Masukkan Jari-Jari")
            if(jari % 7 == 0){
                phi = 22/7
            }else{
                phi = 3,14
            }
            hasil = phi * Number(jari) * Number(jari)
            alert("Hasil Luas dari Lingkaran adalah " + hasil)
        }else{
            let jari = prompt("Masukkan Jari-Jari")
            if(jari % 7 == 0){
                phi = 22/7
            }else{
                phi = 3,14
            }
            hasil = 2 * phi * Number(jari)
            alert("Hasil Keliling dari Lingkaran adalah " + hasil)
        }
    }else if(pilih == "Jajar Genjang" || pilih == "jajar genjang" || pilih == "Jajar genjang" || pilih == "jajar Genjang"){
        let jenis = prompt("Apa yang ingin anda hitung? \nLuas atau Keliling?")
        if(jenis == "Luas" || jenis == "luas"){
            let alas = prompt("Masukkan Alas")
            let tinggi = prompt("Masukkan Tinggi")
            hasil  = Number(alas) * Number(tinggi)
            alert("Hasil Luas dari Jajar Genjang adalah " + hasil)
        }else{
            let alas = prompt("Masukkan Alas")
            let tinggi = prompt("Masukkan Tinggi")
            hasil = 2 * (Number(alas) + Number(tinggi))
            alert("Hasil Keliling dari Jajar Genjang adalah " + hasil) 
        }
    }else{
        alert("Bangun Ruang Tidak Tersedia")
    }

    ulangi = confirm("Ingin Menghitung Bangun Datar yang lain?")    

}

alert("Terima Kasih sudah mencoba! \nSalam Hangat Dari Developer :)")