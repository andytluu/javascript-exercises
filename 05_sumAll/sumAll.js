const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    let start = firstNum;
    let end = secondNum;

    if(firstNum > secondNum){
        start = secondNum;
        end = firstNum;
    }

    if(firstNum < 0 || secondNum < 0){
        return "ERROR";
    }

    if(typeof firstNum != "number" || typeof secondNum != "number"){
        return "ERROR";
    }
    
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
