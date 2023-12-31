
//---------------------------------------------> IIFE
(() => {
    const findMedianSortedArrays = (arr1, arr2) => {
        const mergeSortedArrays = (arr1, arr2) => {
            const mergedArray = [];
            let i = 0;
            let j = 0;

            while (i < arr1.length && j < arr2.length) {
                if (arr1[i] < arr2[j]) {
                    mergedArray.push(arr1[i]);
                    i++;
                } else {
                    mergedArray.push(arr2[j]);
                    j++;
                }
            }

            while (i < arr1.length) {
                mergedArray.push(arr1[i]);
                i++;
            }

            while (j < arr2.length) {
                mergedArray.push(arr2[j]);
                j++;
            }

            return mergedArray;
        }

        const mergedArray = mergeSortedArrays(arr1, arr2);

        const length = mergedArray.length;
        const mid = Math.floor(length / 2);

        if (length % 2 === 0) {
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            return mergedArray[mid];
        }
    }

    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];

    const median = findMedianSortedArrays(arr1, arr2);
    console.log(median); // This will print 3.5
})();
