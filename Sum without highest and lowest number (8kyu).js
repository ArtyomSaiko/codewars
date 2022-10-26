const sumNums = (acc, cur) => acc + cur

function sumArray(array) {
    return Array.isArray(array) && array.length > 1
            ? array.reduce(sumNums, 0) - Math.min(...array) - Math.max(...array)
            : 0
}

\\ second way 
function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var t = 0;
      for (var i = 1; i < array.length - 1; i++) {
        t += array[i];
      }
      return t;
    }
  }