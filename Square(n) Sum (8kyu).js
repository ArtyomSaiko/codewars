// first way
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}

// second way 
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }