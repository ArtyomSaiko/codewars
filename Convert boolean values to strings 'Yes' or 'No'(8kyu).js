\\first way
function boolToWord( bool ){
  if (bool == true){
    return "Yes";
  } else 
    return "No";
}

\\second way
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
