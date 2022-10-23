function dutyFree(normPrice, discount, hol){
    return Math.trunc(hol/(normPrice * (discount / 100))) ;
  }

  \\ second way 
  function dutyFree(normPrice, discount, hol){
    return(Math.floor(hol / normPrice / discount * 100))
  }