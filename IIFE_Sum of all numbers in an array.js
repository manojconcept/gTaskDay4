
//-------------------------------------->IIFE 
let totalSum = ((paraMeter) => {
    let sum = 0;
    for (paraIndex in paraMeter) {
        sum += paraMeter[paraIndex];
    }
    console.log(sum);
    return sum;
})([1, 2, 3, 4]);

