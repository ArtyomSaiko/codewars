function excludingVatPrice(price){
    if (price === null){
      return -1;
    } else {
      return +(price - (price / 115) * 15).toFixed(2);
    }
  }

  \\ second way 
  excludingVatPrice = price => price == null? -1: +(price/1.15).toFixed(2) 