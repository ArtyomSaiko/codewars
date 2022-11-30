// first way 
function bmi(weight, height) {
  let bmi2 = weight/Math.pow(height, 2);
  if (bmi2 <= 18.5){
    return "Underweight";
  } else if (bmi2 <= 25){
    return "Normal";
  } else if (bmi2 <= 30){
    return "Overweight";
  } else if (bmi2 > 30){
    return "Obese";
  }
}

// second way
function bmi(weight, height) {
  let bmi = (weight / Math.pow(height, 2));
  switch(true){
    case bmi <= 18.5:
      return "Underweight";
      break;
    case bmi <= 25.0:
      return "Normal";
      break;
    case bmi <= 30.0:
      return "Overweight";
      break;
    case bmi > 30:
      return "Obese";
      break;
   }
 }