// first way 
function sumStr(a, b) {
    return String(+a + +b);
  }

  // second way
  function sumStr(a,b) {
    return String(Number(a)+ Number(b));
  }

  // third way
  function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
  } 