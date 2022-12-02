// first way

function removeEveryOther(arr){
let count = 0
for(let i=0; i<arr.length; i++ ){
  count +=1
if(count%1===0) {arr.splice(i+1,1)}
  else {null}
} 
  return arr
}

// second way

function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}
