// first way
const sum = (...arr) => arr.filter(Number).reduce((a, b) => a + b, 0);

// second way 

function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }