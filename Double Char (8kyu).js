\\first way
function doubleChar(str) {
  return str.replace(/./g, '$&$&');
}

\\second way
function doubleChar(str) {
  var a = '';
  for (var i = 0; i < str.length; i++){
    a = a + str[i] + str[i];
  };
  return a;
};
