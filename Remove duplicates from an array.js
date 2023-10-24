let removeDuplicates = function(arr) {
    let uniqueArray = [];
    
    for (let element of arr) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}

let myArray = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(myArray);
