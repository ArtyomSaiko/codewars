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