//Implementation of Array forEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const array1 = ['a', 'b', 'c'];
array1.myForEach(element => console.log(element));

// [1,2,3,4].myForEach(function(val, i, arr){
//     console.log(val, i, arr)
// });