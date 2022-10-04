\\first way
function solution(a, b){
  let short = a.length < b.length ? a : b;
  let long = a.length > b.length ? a : b;
  return short + long + short;
}

\\second way
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}
