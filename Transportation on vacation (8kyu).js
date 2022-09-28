function rentalCarCost(d) {
  const arenda = d * 40;
  if (d >= 7) {
    return arenda - 50;
  } else if (d >= 3){
    return arenda - 20 ;
  } else{
    return arenda;
  }
}