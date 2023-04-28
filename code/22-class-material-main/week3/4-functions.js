// built in functions
console.log(window.Math.max(3, 4));
console.log(Math.max(3, 4));

Math.random();

document.getElementsByClassName("description");

Array.isArray([1, 2, 3]);

Array.isArray({});

// // Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myBill = calculateBill();

const myBill1 = calculateBill(500, 0.3);

const myBill2 = calculateBill(100, undefined, 0.2);
console.log(myBill2)
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo("Cris");
console.log(greeting);

// // Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// // arrow function
const doctorizeArrow = (firstName) => {
  return `Dr. ${firstName}`;
};

// // arrow function one line
const doctorizeArrowOneLine = (firstName) => `Dr. ${firstName}`;

// // IIFE - Immediately Invoked Function Expression
(function (age) {
  return `My age is ${age}`;
})(35);

// // passing function as parameter
function calculateReports(amount, calcBillFunc) {
  return `Summary - ${calcBillFunc(amount)}`;
}

console.log(calculateReports(500, calculateBill));

// // Callback Functions
// // Click Callback
const button = document.querySelector(".clickMe");

function handleClick() {
  console.log("Great Clicking!!");
}

button.addEventListener("click", function () {
  console.log("NIce Job!!!");
});
button.addEventListener("click", handleClick);

// // Timer Callback
setTimeout(() => {
  console.log("Hello, 1 second passed");
}, 5000);


// // More info on this
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions