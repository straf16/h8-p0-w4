function changeMe(arr) {
    // you can only write your code here!
    
    if (arr.length != 0) {
        var result = {};
    }
    for (var i = 0; i < arr.length; i++) {
        result[arr[i][0] + ' ' + arr[i][1]] = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2]

        }
        if (!arr[i][3]) {
            result[arr[i][0] + ' ' + arr[i][1]].age = 'Invalid Birth Year';
        } else {
            result[arr[i][0] + ' ' + arr[i][1]].age = arr[i][3];
        }
    }
    if (result) {
        console.log(result);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""