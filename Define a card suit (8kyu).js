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