function points(games) {
 let result = 0
  for(let i = 0; i < games.length ; i++){
    let gamesStr = games[i]
    let x = gamesStr[0]
    let y = gamesStr[2]
    if (x > y){
      result += 3
    }else if (x == y){
      result += 1
    }else if (x < y){
      result += 0
    }
  } return result
}