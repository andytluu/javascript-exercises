const removeFromArray = function(array, ...args) {
    let len = array.length;

    for(let target of args){
        for(let i = 0; i < len; i++){
            let index = array.indexOf(target);
            if(index >= 0){
                array.splice(index,1);
            }
            
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
