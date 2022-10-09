\\first way
function multiTable(number) {
  let res = '';
  for(let i = 1; i <= 10; i++){
    res += `${i} * ${number} = ${i * number}`;
    if(i < 10)  res +='\n';
  } return res;
}

\\second way
function multiTable(number) {
  let table = '';
  for(let i = 1; i <= 10; i++){
    table += `${i} * ${number} = ${i*number}\n`;
  } return table.slice(0, -1);
}
