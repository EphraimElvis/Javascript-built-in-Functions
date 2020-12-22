//Implementation of Array reduce
Array.prototype.myReduce = function (callback, initial = 0) {
    //let acc = !initial ? 0 : initial;
    let acc = initial;
    for(let i = 0; i < this.length; i++) {
        //acc ? initial : this[i];
        let curV = this[i];     
        acc = callback(acc, curV, i, this);
    }
    return acc;
}

let newReduce = [1, 2, 3, 4].myReduce(function(accumulator, currentValue, currentIndex, arr, i) {
    //console.log('acc', accumulator, 'current Value ', currentValue, 'current index ', currentIndex, 'array ', arr)
    //()X
    return accumulator + currentValue
}, 15);

// let newReduce = [1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, arr) {
//     console.log('acc', accumulator, 'current Value ', currentValue, 'current index ', currentIndex, 'array ', arr)
//     return accumulator + currentValue
// }, 15);


console.log(newReduce)