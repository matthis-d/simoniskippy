const fibonacci = [1, 2, 3, 5, 8, 13];
function generateNumber() {
  const index = Math.floor(Math.random() * fibonacci.length);

  const number = fibonacci[index];

  document.getElementById("chiffrage").textContent = number;
}

window.generateNumber = generateNumber;
