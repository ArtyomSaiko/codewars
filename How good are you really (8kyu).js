// first way
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length < yourPoints;
  }

// second way
function betterThanAverage(classPoints, yourPoints) {
  var A = 0;
  for (var i = 0; i < classPoints.length; i++){
    A += classPoints[i]; 
  }
  A = A/classPoints.length; 
  return yourPoints > A;
}
