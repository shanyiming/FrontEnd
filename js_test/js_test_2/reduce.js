//implement js array reduce function

Array.prototype.myReduce = function(fn, accumulator){
    for (let i = 0; i < this.length; i++) {
        accumulator = fn(accumulator, this[i]);
    }
    return accumulator;
};

let testArray = [0, 1, 2, 3, 4, 5, 6];
console.log(testArray.myReduce((accumulator, currentValue) => accumulator + currentValue, 0));
console.log(testArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
