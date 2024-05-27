const reverseString = function(string) {
    let rString = "";
    let len = string.length;
    console.log(len);
    for (let i = len - 1; i >= 0; i--){
        rString += string[i];
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;
