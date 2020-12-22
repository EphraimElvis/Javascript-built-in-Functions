//Implementation of Array filter
Array.prototype.myFilter = function(callback) {
    result = [];
    
    for (let i = 0; i < this.length; i++) {
        let callbackValue = callback(this[i], i, this)
        if (callbackValue) {
            result.push(this[i]);
        } 
        //result.push(callback(this[i], i, this))
    }
    return result;
}

// const newFilter = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].myFilter(function(val, i, arr){
//     //console.log(val, i, arr)
//     return val.length > 6;
// })
//console.log(newFilter)

let ages = [32, 33, 16, 40].myFilter(checkAdult);


function checkAdult(age, i, arr) {
    //console.log(age, i, arr);
    //console.log(age >= 18, i, arr);
    return age >= 18;
}

console.log(ages)