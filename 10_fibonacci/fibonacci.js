const fibonacci = function(len) {
    let sum = 1;
    let prev = 0;
    let temp = prev;

    if(len == 0){
        return 0;
    }

    if(len < 0){
        return "OOPS";
    }
    for(let i = 1; i < len; i++){
        temp = sum;
        sum = sum + prev;
        prev = temp;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
