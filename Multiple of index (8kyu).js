function multipleOfIndex(arr) {
    let result = [arr[1]];
    
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] % i === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  // second way
  const multipleOfIndex = arr => arr.filter((x, i) => x % i === 0);