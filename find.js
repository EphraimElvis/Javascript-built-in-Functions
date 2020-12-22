//Implementation of Array find
Array.prototype.myFind = function (callback) {
    const len = this.length;
    for (let i = 0; i < len; i++ ) {
        //callback(this[i], i, this)
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

const numbers = [5, 12, 8, 130, 44, ... 50];

const found = numbers.myFind(number => {number > 200});

console.log(found);

// var ages = [3, 10, 18, 20];

// function checkAdult(age, i, arr) {
//   console.log(age >= 18, i, arr);
//   return age >= 18;
// }

// let rt = ages.myFind(checkAdult)
// console.log(rt);

//refactor 