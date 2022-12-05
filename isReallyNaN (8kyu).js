// first way
isReallyNaN = val => Number.isNaN(val)

// second way 
function isReallyNaN(val) {
    return val != val;
  };