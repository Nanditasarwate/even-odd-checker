const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const number = parseInt(numberInput.value);
  evenOdd(number);
});

function evenOdd(number) {
  if (isNaN(number)) {
    result.textContent = "Please enter a valid number"; 
  } else if (number % 2 === 0) {
    result.textContent = `${number} is an even number`; 
  } else {
    result.textContent = `${number} is an odd number`; 
  }
}
