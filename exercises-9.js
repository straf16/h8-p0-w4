function checkAB(str) {
    // you can only write your code here!
    var result = false;
    var arr = str.split('');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === 'b') {
                    if (Math.abs(i-j) == 4) {
                        result = true;
                    }
                }
            }
        }
    }
    return result;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false