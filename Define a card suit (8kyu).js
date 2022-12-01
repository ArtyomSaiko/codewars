function defineSuit(card) {
    var x = card.substr(-1);
    if (x === '♣' ){
      return 'clubs';
    } else if (x === '♦' ){
      return 'diamonds';
    } else if (x === '♥' ){
      return 'hearts';
    } else {
      return 'spades';
    }
  }

  // second way 
  function defineSuit(card) {
    var suit = card.substr(-1);
    switch(suit){
       case '♣': return 'clubs';
       case '♦': return 'diamonds';
       case '♥': return 'hearts';
       default: return 'spades';
    }
  }