\\ first way 
function seatsInTheater(nCols, nRows, col, row) {
    let a = nCols - col + 1;
    let b = nRows - row;
    return a * b;
    }

    \\ second way 
    function seatsInTheater(nCols, nRows, col, row) {
        return (nCols-col+1) * (nRows - row);  
      }