// first way
function typeOfSum(a, b) {
  return typeof (a + b);
}

// second way
const typeOfSum = (a, b) => typeof(a + b);

\\third way
function typeOfSum(a, b) {
    let res = a + b;
    return typeof res;
}
