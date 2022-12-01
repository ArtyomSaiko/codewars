function nearestSq(n) {
    return Math.pow(Math.round(Math.pow(n, 0.5)), 2);
  }

  // second way 
  function nearestSq(n){
    return Math.round(n**0.5)**2
}