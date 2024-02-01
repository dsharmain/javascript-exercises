const removeFromArray = function(array, ...theArgs) {
    console.log(array.length);
    console.log(array);
    console.log(theArgs.length);
    for (let i=0; i<theArgs.length; i++) {
        console.log(array.indexOf(theArgs[i]));
        if (array.indexOf(theArgs[i]) === -1) {
            continue;
        }
        array.splice(array.indexOf(theArgs[i]), 1);
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
