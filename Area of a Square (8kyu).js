function squareArea(A){
  let a = A / (2 * Math.PI * (90 / 360));
  let areaThesQuare = Math.pow(a, 2);
  return Number(areaThesQuare.toFixed(2));
}