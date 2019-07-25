//implement js array map function

Array.prototype.myMap = function(fn){
    let mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(fn(this[i]));
    }
    return mappedArray;
};

let testArray = [0, 1, 2, 3, 4, 5, 6];
console.log(testArray.myMap(num => num * num));
console.log(testArray.map(num => num * num));