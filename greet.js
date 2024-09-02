function greet(neighbourName) {
    return "Hello, " + neighbourName;
  }
   console.log(greet('Bob'));

function transportFee(shift) {
    switch(shift) {
        case 'morning':
            return 'R20';
        case 'afternoon':
            return 'R10';
        case 'nightshift':
            return 'free';
      }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      greetingElement.textContent = greet('Bob');
    }

    const shiftElement = document.getElementById('shift-rate');
    if (shiftElement) {
      shiftElement.textContent = getShiftRate('morning'); // Replace 'morning' with the shift you want to test
    }
  });
  