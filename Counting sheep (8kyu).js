\\first way

function countSheeps(arrayOfSheep) {
  let amount = 0;
  for (let i = 0; i <= arrayOfSheep.length; i++){
    if(arrayOfSheep[i]) amount += 1
    }
  return amount;
}

\\second way

function countSheeps(arrayOfSheep) {
  var amount = 0;
    for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      amount++;
    return amount;
}
