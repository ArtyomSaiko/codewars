// first way
_if = (bool, func1, func2) => bool ? func1(): func2()

// second way 
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
  }