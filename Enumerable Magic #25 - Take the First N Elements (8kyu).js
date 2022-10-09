\\ first way
function take(arr, n) {
    return arr.slice(0, n);
  }

  \\ second way
  function take(arr, n) {
    let res = [];
    for (let i in arr) {
      if (i < n && i < arr.length) {
        res.push(arr[i]);
      }
    } return res;
  }