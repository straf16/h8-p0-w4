function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = [];
    var kali = [];
    var digitMinimum = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            faktor.push(i);
        }
    }
    for (var i = 0; i < faktor.length/2; i++) {
        kali.push(faktor[i] + '*' + faktor[faktor.length-1-i]);
    }
    for (var i = 0; i < kali.length; i++) {
        if ((kali[i].length - 1) < digitMinimum) {
            digitMinimum = kali[i].length - 1;
        }
    }
    return digitMinimum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2