function seatsInTheater(nCols, nRows, col, row) {
    let a = nCols - col + 1;
    let b = nRows - row;
    return a * b;
    }