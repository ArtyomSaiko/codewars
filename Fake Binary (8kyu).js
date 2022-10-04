function fakeBin(x){
  let str = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? str += 0 : str += 1;
  } return str;
}