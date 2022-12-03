function getRealFloor(n) {
    if (n == 0){
      return 0;
    } else if (n > 0 && n < 13){
      return n-1;
    } else if (n<0) {
      return n;
    } else {
      return n-2;
    }
  }

  // second way 
  getRealFloor = n => n <= 0 ? n : n < 13 ? n - 1 : n - 2;
  