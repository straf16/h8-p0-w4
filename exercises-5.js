function ubahHuruf(kata) {
    // you can only write your code here!
    var ubah = '';

    for (var i = 0; i < kata.length; i++) {
        var x = kata[i].charCodeAt() + 1;
        if (x > 122) {
            x = 97;
        }
        ubah += String.fromCharCode(x);
    }
    return ubah;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu