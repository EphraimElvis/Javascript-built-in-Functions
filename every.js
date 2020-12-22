//Implementation of Array every
Array.prototype.myEvery = function(callback) {
    let result = false;
    for(let i = 0; i < this.length; i++) {   
        if (callback(this[i], i, this)) {
            result = true;
        } else {
            return false;
        }
    }
    return result;
}

const list = [1, 30, 39, 29, 10, 13].myEvery(function(val, i, arr) {
    return val < 40;
});

console.log(list);

//refactor line 7 to 12