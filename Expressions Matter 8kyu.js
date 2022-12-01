// first way
function expressionMatter(a, b, c) {
    let output = [];
    output.push(a *(b + c));
    output.push(a * b * c);
    output.push(a + b * c);
    output.push((a + b) * c);
    output.push(a + b + c);
      return Math.max(...output);
  }

  // second way
  function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b)*c, a*(b + c));
  }