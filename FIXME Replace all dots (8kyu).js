// first way
let replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

  // second way 
  var replaceDots = s=>s.split('.').join('-')