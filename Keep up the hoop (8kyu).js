// first way 
function hoopCount (n) {
    if (n >= 10){
      return "Great, now move on to tricks";
    } else return "Keep at it until you get it";
 }

 // second way 
 function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }