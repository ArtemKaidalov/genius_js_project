// const value = prompt("Enter item`s name").toLowerCase();
// let cost;

// switch (value) {
//   case "Apple":
//     alert(`${value} cost ${cost} euro`);
//     break;
//   case "Grape":
//     cost = 5;
//     alert(`${value} cost ${cost} euro`);
//     break;
//   case "Pineapple":
//     cost = 10;
//     alert(`${value} cost ${cost} euro`);
//     break;
//   case "Watermelon":
//     cost = 7;
//     alert(`${value} cost ${cost} euro`);
//     break;
//   case "Melon":
//     cost = 8;
//     alert(`${value} cost ${cost} euro`);
//     break;
//   case "Chery":
//     cost = 12;
//     alert(`${value} cost ${cost} euro`);
//     break;

//   default:
//     alert(`Sorry, we don't have ${value} now`);
// }

// console.log(document);
const addNumber = (number) => {
  let summ = Number(number) + 10;
  return console.log(summ);
};

const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", () => addNumber(numberRef.value));
