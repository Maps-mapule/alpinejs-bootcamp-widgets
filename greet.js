
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
      default:
        return 'Invalid shift';
    }
  }

  function updateShiftRate() {
    const shift = document.querySelector('input[name="shift"]:checked').value;
    const shiftElement = document.getElementById('shift-rate');
    if (shiftElement) {
      shiftElement.textContent = getShiftRate(shift);
    }
  }

  function totalPhoneBill(data) {
    var items = data.split(', ');
  
    var callCount = 0;
    var smsCount = 0;
  
    for (var i = 0; i < items.length; i++) {
      if (items[i] === 'call') {
        callCount++;
      } else if (items[i] === 'sms') {
        smsCount++;
      }
    }
  
    var totalCost = (callCount * 2.75) + (smsCount * 0.65);
  
    return 'R' + totalCost.toFixed(2);
  }

  function calculatePhoneBill() {
    const phoneData = document.getElementById('phone-data').value;
    const billElement = document.getElementById('total-bill');
    if (billElement) {
      billElement.textContent = totalPhoneBill(phoneData);
    }
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      greetingElement.textContent = greet('Bob');
    }
ge
    const shiftForm = document.getElementById('shift-form');
    if (shiftForm) {
      shiftForm.addEventListener('change', updateShiftRate);

      updateShiftRate();
    }

    const calculateButton = document.getElementById('calculate-bill');
    if (calculateButton) {
      calculateButton.addEventListener('click', calculatePhoneBill);
    }
  });
  
    const shiftForm = document.getElementById('shift-form');
    if (shiftForm) {
      shiftForm.addEventListener('change', updateShiftRate);
   
      updateShiftRate();
    };
  
  