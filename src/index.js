// Задача 1/36
// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;

//console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

//Задача 2/36
// let productName = "Droid";
// let pricePerItem = 2000;

// Change code below this line
// pricePerItem = 3500;
// productName = "Repair droid";

//Задача 3/36
// Change code below this line
let topSpeed = 160;
let distance = 617.54;
let login = "mango935";
let isOnline = true;
let isAdmin = false;

//Задача 4/36
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

//Задача 5/36
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//Задача 6/36
// Change code below this line
let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//Задача 7/36
// Change code below this line
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();

//Задача 8/36
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//Задача 9/36
function add(a, b, c) {
  // Change code below this line
  return a + b + c;

  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//Задача 10/36
function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

//Задача 11/36
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

//Задача 12/36
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

//Задача 13/36
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

//Задача 14/36
function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

//Задача 15/36
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

//Задача 16/36
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available < ordered) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }
  // Change code above this line
  return message;
}

//Задача 17/36
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

//Задача 18/36
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
  if (customerCredits < totalPrice) {
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}

//Задача 19/36
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}

//Задача 20/36
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = `There are no products in the order!`;
  } else if (ordered > available) {
    message = `Your order is too large, there are not enough items in stock!`;
  } else {
    message = `The order is accepted, our manager will contact you`;
  }
  // Change code above this line
  return message;
}

//Задача 21/36
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

//Задача 22/36
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip";
  // Change this line

  return canAccessContent;
}

//Задача 23/36
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

//Задача 24/36
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
}

//Задача 25/36
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}

//Задача 26/36
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

//Задача 27/36
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case `starter`: // Change this line
      price = 0; // Change this line
      break;

    case `professional`: // Change this line
      price = 20; // Change this line
      break;

    case `organization`: // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

//Задача 28/36
function checkPassword(password) {
  const ADMIN_PASSWORD = `jqueryismyjam`;
  let message;
  // Change code below this line
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}

//Задача 29/36
function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case `China`:
      message = "Shipping to China will cost 100 credits";
      break;
    case `Chile`:
      message = "Shipping to Chile will cost 250 credits";
      break;
    case `Australia`:
      message = "Shipping to Australia will cost 170 credits";
      break;
    case `Jamaica`:
      message = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}

//Задача 30/36
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

//Задача 31/36
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

//Задача 32/36
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

//Задача 33/36
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result =
    message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

  /// Change code above this line
  return result;
}

//Задача 34/36
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

//Задача 35/36
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}

//Задача 36/36
function checkForSpam(message) {
  let result;
  // Change code below this line
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  // Change code above this line
  return result;
}
