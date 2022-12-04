TempleStrings = (obj, feature) => `${obj} are ${feature}`

// second way
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
  }