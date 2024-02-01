const reverseString = function(str) {
    let splitArray = str.split('');
    let reverse = '';
    for(let i =0; i < splitArray.length; i++) {
        //console.log(splitArray[splitArray.length - i - 1]);
        reverse += splitArray[splitArray.length - i - 1];
    }
    //console.log(splitArray);
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
