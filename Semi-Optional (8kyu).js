function wrap(value) {
    return {value};
  }

  \\ second way 
  function wrap(value) {
    return  {
      "value":value 
    };
  }