function nthEven(n) {
    return n === 1 ? 0 : n * 2 - 2;
  }

  \\ secind way 
  const nthEven = n => (n-1)*2;