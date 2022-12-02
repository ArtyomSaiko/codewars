// first way
const quarterOf = (month) => {
 if(month < 4) return 1;
 if(month < 7) return 2;
 if(month < 10) return 3;
 return 4;
}

// second way
const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}
