function cekAngka() {
    let angka = [1, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16, 'saddam'];

    for (let i = 0; i < (angka.length); i++) {
        if (isFinite(angka[i])) {
            console.log(`Angka ${angka[i]} NOT Infinity.`);
        } else {
            console.log(`Angka ${angka[i]} Infinity.`);
        }
    }
}

cekAngka();
