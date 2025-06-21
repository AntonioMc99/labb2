
function formatFullName(Antonio, McBride) {
  if (!first || !last) {
    return "Invalid name input.";
  }

  let firstFormatted = first[0].toUpperCase() + first.slice(1).toLowerCase();
  let lastFormatted = last[0].toUpperCase() + last.slice(1).toLowerCase();

  return lastFormatted + ", " + firstFormatted;
}

function showFormattedName() {
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  document.getElementById("formattedName").textContent = formatFullName(first, last);
}


function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  price = parseFloat(price);
  quantity = parseInt(quantity);
  taxRate = parseFloat(taxRate);
  discount = parseFloat(discount) || 0;

  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    return "Invalid input.";
  }

  let subtotal = (price * quantity) - discount;
  let total = subtotal * (1 + taxRate);

  return "$" + total.toFixed(2);
}

function showTotalCost() {
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let taxRate = document.getElementById("taxRate").value;
  let discount = document.getElementById("discount").value;

  document.getElementById("totalCost").textContent =
    calculateTotalCost(price, quantity, taxRate, discount);
}

// Task 3: Check if user is eligible
function checkEligibility(age, isEmployed) {
  age = parseInt(age);
  if (age > 18 && isEmployed) {
    return "You are eligible.";
  } else if (age > 18 && !isEmployed) {
    return "You are conditionally eligible.";
  } else {
    return "You are not eligible.";
  }
}

function showEligibility() {
  let age = document.getElementById("age").value;
  let isEmployed = document.getElementById("employment").value === "true";

  document.getElementById("eligibilityResult").textContent =
    checkEligibility(age, isEmployed);
}
