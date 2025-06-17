const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};
const handleIncrement = () => {
  count++;
  updateText();
};

const handleDecrement = () => {
  count--;
  updateText();
};

increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);
