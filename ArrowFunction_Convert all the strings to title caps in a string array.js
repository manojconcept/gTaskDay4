
// ----------------------Arrow;
const cApTitle = (paraValues) => {
    const capValues = [];
    for (const paraValue of paraValues) {
        const capParaValue = paraValue[0].toUpperCase() + paraValue.slice(1).toLowerCase();
        capValues.push(capParaValue);
    }
    console.log(capValues);
    return capValues;
};

const myArrayA = ["javascript","java","python","go","perl","c++","c"];

cApTitle(myArray);










