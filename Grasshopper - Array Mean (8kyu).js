\\ first way 
const findAverage = (nums) => nums.reduce((a, c) => a + c) / nums.length;

\\second way
var findAverage = function (nums){
    var sum = nums.reduce(function(a, b) {
        return a + b;
    });
    var avarage = sum / nums.length;
    return avarage ;
    
}