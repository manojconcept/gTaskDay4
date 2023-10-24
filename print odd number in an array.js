let getOddnum = function(paraArra){
    let oddResult = [];
    for(arraVal of paraArra){
        let arraVals = arraVal%2;
        if(arraVals != 0){
            oddResult.push(arraVal);
        }
    }
    return oddResult;
}

getOddnum([1,2,3,4,5]);
