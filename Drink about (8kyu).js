// first way 
function peopleWithAgeDrink(old) {
    if (old < 14){
      return "drink toddy";
    } else if (old < 18){
      return "drink coke";
    } else if (old < 21){
      return "drink beer";
    } else if (old >= 21){
      return "drink whisky";
    }
  }

  // second way
  const peopleWithAgeDrink = (age) => {
    switch (true) {
      case (age >= 21): return 'drink whisky';
        break;
      case (age >= 18): return 'drink beer';
        break;
      case (age >= 14): return 'drink coke';
        break;
      default: return 'drink toddy';
        break;
    }
  };