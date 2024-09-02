
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
  
  function totalPhoneBill(data) {
    var items = data.split(', ').map(item => item.trim());
  
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
      console.log('Phone data:', phoneData); 
      billElement.textContent = totalPhoneBill(phoneData);
    }
  }
  
  function updateShiftRate() {
    const shift = document.querySelector('input[name="shift"]:checked').value;
    const shiftElement = document.getElementById('shift-rate');
    if (shiftElement) {
      shiftElement.textContent = getShiftRate(shift);
    }
  }

  function enoughAirtime(projectedUsage, availableAirtime) {
    const callCost = 1.88;
    const dataCost = 12;
    const smsCost = 0.75;
  
    const items = projectedUsage.split(',').map(item => item.trim());
  
    let totalCost = 0;
  
    items.forEach(item => {
      if (item === 'call') {
        totalCost += callCost;
      } else if (item === 'data') {
        totalCost += dataCost;
      } else if (item === 'sms') {
        totalCost += smsCost;
      }
    });
  
    const airtimeLeft = availableAirtime - totalCost;
  
    return airtimeLeft >= 0 ? 'R' + airtimeLeft.toFixed(2) : 'R0.00';
  }
 
  function calculateAirtime() {
    const projectedUsage = document.getElementById('projected-usage').value;
    const availableAirtime = parseFloat(document.getElementById('available-airtime').value);
    const airtimeElement = document.getElementById('airtime-left');
    if (airtimeElement) {
      console.log('Projected usage:', projectedUsage); 
      console.log('Available airtime:', availableAirtime); 
      airtimeElement.textContent = enoughAirtime(projectedUsage, availableAirtime);
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
 
    const calculateButton = document.getElementById('calculate-bill');
    if (calculateButton) {
      calculateButton.addEventListener('click', calculatePhoneBill);
    }

    const calculateAirtimeButton = document.getElementById('calculate-airtime');
    if (calculateAirtimeButton) {
      calculateAirtimeButton.addEventListener('click', calculateAirtime);
    }
  });
  
  