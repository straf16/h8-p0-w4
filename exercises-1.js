function angkaPrima(angka) {
    // you can only write your code here!
    var temp = angka;
    var bagi = 0;
    while (temp > 0) {
        if (angka % temp == 0) {
            bagi++;
        }
        temp--;
    }
    if (bagi > 2) {
        return false;
    } else {
        return true;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false