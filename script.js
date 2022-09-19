let ulangi = true;

// Salam
alert("Selamat Datang Di MathBot");


while(ulangi == true){
    
    // Menangkap pilihan user 
    let pilih = prompt("Pilih bangun datar yang ingin dihitung");


    // Menyesuaikan pilihan user 
    if(pilih == "persegi" || pilih == "Persegi"){
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
    }else if(pilih == "segitiga" || pilih == "Segitiga"){
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
    }else{
        let jenis = prompt("Apa yang ingin anda hitung? \nLuas atau Keliling?")
        if(jenis == "Luas" || jenis == "luas"){
            let luas = prompt("Masukkan luas");
            let panjang = prompt("Masukkan keliling");
            hasil = luas * panjang;
            alert("Hasil Luas dari persegi adalah " + hasil)
        }else{
            let luas = prompt("Masukkan luas");
            let panjang = prompt("Masukkan keliling");
            hasil = 2 * (Number(luas) + Number(panjang));
            alert("Hasil Keliling dari persegi panjang adalah " + hasil)
        }
    }

    ulangi = confirm("Ingin Menghitung Bangun Datar yang lain?")    

}

alert("Terima Kasih sudah mencoba! \nSalam Hangat Dari Developer :)")