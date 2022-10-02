var countSheep = function (num){
  let sheep = ''
  for (let i = 1; i<= num; i++){
    sheep += i.toString() + ' sheep...';
  } 
  return sheep;
  }