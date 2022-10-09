function sumMul(n,m){
    let a = 0;
    for(let i = 1; i * n < m; i++){
      a += i * n
    }
    return a > 0 ? a : 'INVALID'
  }