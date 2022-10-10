\\ first way 
function setAlarm(employed, vacation){
    if (employed == true && vacation== false){
      return true;
    } else return false;
  }

  \\ second way 
  function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
    }