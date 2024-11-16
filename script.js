// Select elements
const incomeInput = document.getElementById("income");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseButton = document.getElementById("add-expense");
const totalIncomeDisplay = document.getElementById("total-income");
const totalExpensesDisplay = document.getElementById("total-expenses");
const balanceDisplay = document.getElementById("balance");
const expensesList = document.getElementById("expenses");

// Initialize variables 
let income = 0;
let expenses = [];

// Function to update the summary
function updateSummary() {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balance = income - totalExpenses;

    totalIncomeDisplay.textContent = income.toFixed(2);
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    balanceDisplay.textContent = balance.toFixed(2);
}

// Function to add an expense
function addExpense() {
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter valid expense details!");
        return;
    }

    expenses.push({ name: expenseName, amount: expenseAmount });

    const li = document.createElement("li");
    li.innerHTML = `<span>${expenseName}</span><span>$${expenseAmount.toFixed(2)}</span>`;
    expensesList.appendChild(li);

    expenseNameInput.value = "";
    expenseAmountInput.value = "";

    updateSummary();
}

// Event listeners
incomeInput.addEventListener("input", () => {
    income = parseFloat(incomeInput.value) || 0;
    updateSummary();
});

addExpenseButton.addEventListener("click", addExpense);
