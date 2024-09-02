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

function greet(neighbourName) {
    return "Hello, " + neighbourName;
  }

  function getShiftRate(shift) {
    switch (shift) {
      case 'morning':
        return 'R20';
      case 'afternoon':
        return 'R10';
      case 'nightshift':
        return 'free';
    }
  }

  function updateShiftRate() {
    const shift = document.querySelector('input[name="shift"]:checked').value;
    const shiftElement = document.getElementById('shift-rate');
    if (shiftElement) {
      shiftElement.textContent = getShiftRate(shift);
    }
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      greetingElement.textContent = greet('Bob');
    }
 
    const shiftForm = document.getElementById('shift-form');
    if (shiftForm) {
      shiftForm.addEventListener('change', updateShiftRate);
   
      updateShiftRate();
    }
  });
  
  