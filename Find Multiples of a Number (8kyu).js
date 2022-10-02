function findMultiples(integer, limit) {
  let a = [];
  for(let i = integer; i <= limit; i= i+integer){
    a.push(i);
  }
  return a;
}