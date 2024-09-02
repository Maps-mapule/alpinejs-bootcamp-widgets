function greet(neighbourName) {
    return "Hello, " + neighbourName;
  }
   console.log(greet('Bob'));


   document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      greetingElement.textContent = greet('Bob');
    }
  });