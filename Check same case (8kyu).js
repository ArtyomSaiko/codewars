function sameCase(a, b) {
    if (/[a-z]/i.test(a) && /[a-z]/i.test(b)) {
      return (a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase()) ? 1 : 0;
    } else {
       return -1;
    }
  }

  // second way 
  function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }