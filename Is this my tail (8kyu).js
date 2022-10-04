\\first way
correctTail = (bod, tail) =>bod[bod.length-1] == tail

\\second way
function correctTail(body, tail) {
   var sub = body.substr(body.length-(tail.length));
   if (sub === tail) {
   return true;
  }
  else {
    return false;
  }
}
