// first way

function distinct(a) {
 var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }  return newArr;
}

// second way

function distinct(a) {
  return Array.from(new Set(a));
}
