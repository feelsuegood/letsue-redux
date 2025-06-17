import { legacy_createStore as createStore } from "redux";

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const number = document.querySelector("span");

/**
 * old way
 */
// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };
// const handleIncrement = () => {
//   count++;
//   updateText();
// };

// const handleDecrement = () => {
//   count--;
//   updateText();
// };

// increment.addEventListener("click", handleIncrement);
// decrement.addEventListener("click", handleDecrement);

number.innerText = 0;
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const countModifier = (count = 0, action) => {
  // console.log(count, action);
  // if (action.type === "INCREMENT") {
  //   return count + 1;
  // } else if (action.type === "DECREMENT") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

// countStore.dispatch({ type: "INCREMENT" });
// countStore.dispatch({ type: "INCREMENT" });
// countStore.dispatch({ type: "INCREMENT" });
// countStore.dispatch({ type: "INCREMENT" });
// countStore.dispatch({ type: "INCREMENT" });
// countStore.dispatch({ type: "DECREMENT" });

// console.log(countStore);
// console.log(countStore.getState());

increment.addEventListener("click", () => {
  countStore.dispatch({ type: INCREMENT });
});
decrement.addEventListener("click", () => {
  countStore.dispatch({ type: DECREMENT });
});
