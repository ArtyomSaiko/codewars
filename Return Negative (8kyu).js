\\sfirst way
function makeNegative(num) {
  if (num > 0) {
    return num * (-1);
  } else return num;
}

\\second way
function makeNegative(num) {
  return num < 0 ? num : -num;
}
