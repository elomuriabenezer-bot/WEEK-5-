// SpendWise Week 6: conditionals, arrays, loops, DOM and events.
let monthlyBudget = 0;
const expenses = [];

const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const budgetTotal = document.getElementById("budget-total");
const expenseTotal = document.getElementById("expense-total");
const balanceTotal = document.getElementById("balance-total");
const budgetMessage = document.getElementById("budget-message");
const expenseList = document.getElementById("expense-list");
const clearExpensesButton = document.getElementById("clear-expenses");

function formatMoney(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES"
  }).format(amount);
}

function calculateTotalExpenses() {
  let total = 0;

  // A loop processes every expense record stored in the array.
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return total;
}

function updateDashboard() {
  const total = calculateTotalExpenses();
  const balance = monthlyBudget - total;

  // DOM manipulation updates the figures shown on the webpage.
  budgetTotal.textContent = formatMoney(monthlyBudget);
  expenseTotal.textContent = formatMoney(total);
  balanceTotal.textContent = formatMoney(balance);

  // Conditional statements give feedback based on the budget situation.
  budgetMessage.className = "message";
  if (monthlyBudget <= 0) {
    budgetMessage.textContent = "Set a budget to get started.";
  } else if (balance < 0) {
    budgetMessage.textContent = "You are over budget by " + formatMoney(Math.abs(balance)) + ". Review your spending.";
    budgetMessage.classList.add("warning");
  } else if (balance === 0) {
    budgetMessage.textContent = "You have used your full budget.";
    budgetMessage.classList.add("warning");
  } else {
    budgetMessage.textContent = "Good work! You have " + formatMoney(balance) + " left to spend.";
    budgetMessage.classList.add("success");
  }

  displayExpenses();
}

function displayExpenses() {
  expenseList.textContent = "";

  if (expenses.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "No expenses added yet.";
    expenseList.appendChild(emptyItem);
    return;
  }

  // The loop creates a visible list item for every saved expense.
  for (let i = 0; i < expenses.length; i++) {
    const item = document.createElement("li");
    item.className = "expense-item";

    const name = document.createElement("span");
    name.textContent = expenses[i].name;

    const amount = document.createElement("span");
    amount.textContent = formatMoney(expenses[i].amount);

    item.append(name, amount);
    expenseList.appendChild(item);
  }
}

// Event listener handles the budget form submission.
budgetForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = Number(budgetInput.value);

  if (!Number.isFinite(value) || value <= 0) {
    alert("Please enter a budget greater than zero.");
    return;
  }

  monthlyBudget = value;
  updateDashboard();
});

// Event listener handles adding new expense records.
expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);

  if (name === "") {
    alert("Please enter an expense name.");
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter an expense amount greater than zero.");
    return;
  }

  // Store each expense as an object inside the expenses array.
  expenses.push({ name: name, amount: amount });

  expenseForm.reset();
  expenseNameInput.focus();
  updateDashboard();
});

// Event listener clears all expense records.
clearExpensesButton.addEventListener("click", function () {
  if (expenses.length === 0) {
    alert("There are no expenses to clear.");
    return;
  }

  const confirmed = confirm("Are you sure you want to clear all expenses?");
  if (confirmed) {
    expenses.length = 0;
    updateDashboard();
  }
});

updateDashboard();