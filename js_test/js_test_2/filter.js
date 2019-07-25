//implement js array filter function

Array.prototype.myFilter = function (fn) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
          filteredArray.push(this[i]);
        }
    }
    return filteredArray;
  };

let testArray = [0, 1, 2, 3, 4, 5, 6];
console.log(testArray.myFilter(num => num > 4));
console.log(testArray.filter(num => num > 4));