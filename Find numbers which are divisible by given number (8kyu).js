//first way

function divisibleBy(numbers, divisor){
  return numbers.filter((number2) => number2 % divisor === 0)
  }

//second way

function divisibleBy(numbers, divisor) {
  var arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      arr.push(numbers[i]);
    } 
  }
return arr;
}
