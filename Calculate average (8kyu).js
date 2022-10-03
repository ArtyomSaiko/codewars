\\first way
const findAverage = array => 
  array.length > 0 ? array.reduce ((a, b) => a + b)/array.length : 0

\\second way
function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var a = 0;
  for (i=0; i<array.length; i++) {
    a +=array[i];
  }
  return a/array.length;
}

\\third option
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((a, b)=> a + b, 0)/array.length
}
