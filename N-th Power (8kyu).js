// first way
function index(array, n){
  if (array[n] == undefined) { 
    return -1;
  }  else {
    return Math.pow(array[n], n);
  }
}

// second way
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;
