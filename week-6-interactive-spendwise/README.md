# SpendWise – Week 6 Interactive Budget Tracker

A responsive budget dashboard built for the PLP Week 6 assignment, **Make SpendWise Interactive**.

## Improvements made this week
- Added a monthly budget form.
- Added a form for recording multiple expenses.
- Added live dashboard cards for budget, expenses and remaining balance.
- Added feedback when the user is within, at, or over budget.
- Added a clear-all expenses action.

## Files
- `index.html` – page structure and forms.
- `style.css` – responsive dashboard design.
- `script.js` – application logic and interactions.

## JavaScript concepts demonstrated

### Conditionals
The `if...else if...else` statements check whether the user has set a budget, exceeded it, used it all, or still has money remaining. Validation conditionals also reject empty names and invalid amounts.

### Arrays
The `expenses` array stores multiple expense objects. Each object contains an expense name and amount. The `push()` method adds new records.

### Loops
A `for` loop calculates the total expenses and another loop displays every expense record on the page.

### DOM manipulation
JavaScript selects HTML elements and updates their text using `textContent`. It also creates expense list items with `document.createElement()` and adds them to the page.

### Events
The `addEventListener()` method listens for budget form submissions, expense form submissions and clicks on the Clear all button. The forms use `preventDefault()` to stop the page from refreshing.

## How to run
1. Open this folder in Visual Studio Code.
2. Open `index.html` in a browser, or use the Live Server extension.
3. Enter a monthly budget and click **Save budget**.
4. Enter an expense name and amount, then click **Add expense**.
5. Try adding expenses that are below and above your budget.
6. Use **Clear all** to remove the expense records.

## Example test
- Monthly budget: KSh 40,000
- Transport: KSh 5,000
- Food: KSh 12,000
- Shopping: KSh 3,000
- Total expenses: KSh 20,000
- Remaining balance: KSh 20,000

## Challenges and solutions
- Invalid or empty inputs are checked before saving data.
- The dashboard is refreshed through one reusable function to keep the figures consistent.
- An empty-state message is displayed when there are no expense records.

## Author
PLP Software Engineering Learner
