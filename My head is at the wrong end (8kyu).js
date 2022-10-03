\\first way
function fixTheMeerkat(arr) {
 return arr.reverse();
}

\\second way
function fixTheMeerkat(arr) {
  var end = arr.shift();
  var begin = arr.pop();
arr.push(end);
arr.unshift(begin);
  return arr; 
}
