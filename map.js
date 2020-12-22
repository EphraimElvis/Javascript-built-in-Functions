//implementation of Javascript Map
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

let testMyArray = [1, 2, 3, 4, 5].myMap(function(val, i, arr) {
    //console.log(val, i, arr)
    return val * 2;
});

console.log(testMyArray)


// const myNewArray = newMap(myArray,multiPlyBytwo);
//console.log(myNewArray);

//Array.prototype.newMap;
