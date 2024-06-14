const palindromes = function (word) {
    let lower = word.toLowerCase();
    let clean = "";

    for(let i = 0; i < lower.length; i++){
        let charCode = lower.charCodeAt(i);

        if ((charCode < 32 || charCode > 47) &&
            (charCode < 58 || charCode > 64) &&
            (charCode < 91 || charCode > 96) &&
            (charCode < 123 || charCode > 126)) {
            clean += lower[i];
        }
    }
    
    let compare = "";

    for(let j = clean.length - 1; j >= 0; j--){
        compare += clean[j];
    }

    return compare == clean;
};

// Do not edit below this line
module.exports = palindromes;
