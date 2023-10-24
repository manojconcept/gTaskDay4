let capTitle = function(paraValues){
    let capValues = [];
for (paraValue of paraValues){
    let capParaValue = paraValue[0].toUpperCase() + paraValue.slice(1).toLowerCase();
    capValues.push(capParaValue);
}
console.log(capValues);
return capValues
}

let myArray = ["javascript","java","python","go","perl","c++","c"];

capTitle(myArray);
