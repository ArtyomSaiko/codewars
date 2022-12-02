function first(arr, n=1 ) {
    if (n == 0){
    return [];
    }else if(n>0){
      return arr.slice(0, n);
      }
    }

    // second way 
    function first(arr, n=1) {
        return arr.slice(0,n);
     }

     // third way
     function first(arr, n) {
        return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
      } 