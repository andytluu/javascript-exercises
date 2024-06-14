const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
	const result = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((mult, num) => {
    return mult * num;
  });

  return result;
};

const power = function(num, exp) {
  let result = 1;
	for(let i = 0; i < exp; i++){
    result = result * num;
  }

  return result;
};

const factorial = function(num) {
  let result = 1;
  if(num === 0){
    return 1;
  }
  for(let i = 1; i <= num; i++){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
