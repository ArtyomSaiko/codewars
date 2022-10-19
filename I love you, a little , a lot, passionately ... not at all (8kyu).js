function howMuchILoveYou(nbPetals) {
    let words = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all'
    ];
    return words[(nbPetals - 1) % words.length];
  }