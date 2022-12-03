mouthSize = animal => /alligator/i.test(animal) ? 'small': 'wide'

// second Wway 
function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
  }