// SpendWise Budget Calculator - PLP Week 5

// Convert a prompt response into a valid non-negative number.
function getValidAmount(message) {
  while (true) {
    const answer = prompt(message);

    if (answer === null) {
      return null;
    }

    const amount = Number(answer);

    if (answer.trim() !== "" && Number.isFinite(amount) && amount >= 0) {
      return amount;
    }

    alert("Please enter a valid amount (zero or more).");
  }
}

// Calculate the total of all expenses.
function calculateTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => total + expense, 0);
}

// Calculate the money remaining after expenses.
function calculateBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

// Display clear, labelled results in the browser console.
function displayResults(budget, expenses, totalExpenses, balance) {
  console.log("===== SPENDWISE BUDGET SUMMARY =====");
  console.log("Monthly Budget: KSh " + budget.toLocaleString("en-KE"));
  console.log("Number of Expenses: " + expenses.length);
  console.log("Total Expenses: KSh " + totalExpenses.toLocaleString("en-KE"));
  console.log("Remaining Balance: KSh " + balance.toLocaleString("en-KE"));

  if (balance < 0) {
    console.log("Notice: You have exceeded your budget.");
  } else {
    console.log("Great! You are within your budget.");
  }

  console.log("====================================");
}

// Collect the budget and expenses, then perform the calculations.
function runBudgetCalculator() {
  const budget = getValidAmount("Enter your monthly budget (KSh):");

  if (budget === null) {
    console.log("Budget calculation cancelled.");
    return;
  }

  const expenseCount = getValidAmount("How many expenses do you want to enter?");

  if (expenseCount === null) {
    console.log("Budget calculation cancelled.");
    return;
  }

  if (!Number.isInteger(expenseCount) || expenseCount < 1) {
    alert("Please enter a whole number of at least 1 expense.");
    return;
  }

  const expenses = [];

  for (let i = 0; i < expenseCount; i++) {
    const expense = getValidAmount("Enter expense " + (i + 1) + " (KSh):");

    if (expense === null) {
      console.log("Budget calculation cancelled.");
      return;
    }

    expenses.push(expense);
  }

  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);

  displayResults(budget, expenses, totalExpenses, balance);
}

// Run the calculator when the button is clicked.
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate-button");

  calculateButton.addEventListener("click", runBudgetCalculator);
});
