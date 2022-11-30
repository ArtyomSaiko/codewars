function closeCompare(a, b, margin) {
    if (!margin) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    } else {
      if (margin >= Math.abs(a - b) || a === b) return 0;
      if (a < b) return -1;
      if (a > b) return 1;
    }
  }
  
// second way 
function closeCompare(a, b, m = 0){
    return Math.abs(a - b) <= m? 0: Math.sign(a - b);
  }