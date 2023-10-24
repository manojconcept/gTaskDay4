
// ----------------------IIFE 
(function() {
    let getOddnum = function(paraArra){
        let oddResult = [];
        for(let arraVal of paraArra){
            let arraVals = arraVal%2;
            if(arraVals !== 0){
                oddResult.push(arraVal);
            }
        }
        return oddResult;
    }

    let result = getOddnum([1,2,3,4,5]);
    console.log(result);
})();


