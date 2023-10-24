function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

let myArray = [1, 2, 3, 4, 5];
let rotations = 2;
let rotatedArray = rotateArray(myArray, rotations);

console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
