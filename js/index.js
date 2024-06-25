"use strict";

const navList = document.querySelector(".navContainer__buttons");
const hamburgerMenu = document.querySelector(".navContainer__hamburger");

hamburgerMenu.addEventListener("click", function () {
  navList.classList.toggle("navContainer__buttons--active");
  hamburgerMenu.classList.toggle("navContainer__hamburger--active");
});

let incomesArray = [];

const inputIncomeName = document.querySelector("#inputIncomeText");
const inputIncomeAmount = document.querySelector("#inputIncomeSum");

const inputIncomeForm = document.querySelector(
  ".inputFields__incomes--inputArea"
);

const listOfIncomes = document.querySelector("#balanceTableIncomesList");

inputIncomeForm.addEventListener("submit", incomeButtonHandleClick);

function incomeButtonHandleClick(event) {
  event.preventDefault();
  if (inputIncomeAmount.value <= 0) {
    alert("wprowadź poprawną wartość: LICZBA DODATNIA");
    clearIncomeForm();
    return;
  }
  if (inputIncomeAmount.value.length === 0) {
    alert("wprowadź poprawną wartość: LICZBA DODATNIA");
    clearIncomeForm();
    return;
  }
  if (inputIncomeName.value.length === 0) {
    alert("wprowadź poprawną wartość: NAZWA PRZYCHODU");
    clearIncomeForm();
    return;
  }
  const incomeName = inputIncomeName.value;
  const incomeAmount = inputIncomeAmount.value;
  const incomeID = `incomeItem-${incomesArray.length}`;
  incomesArray.push({
    incomeName: incomeName,
    incomeAmount: incomeAmount,
    incomeID: incomeID,
  });
  updateListOfIncomes();
  updateBalanceSheetResult();
  createTotalIncomesLine();
  clearIncomeForm();
}

function updateSumOfIncomes() {
  const totalIncomes = incomesArray.reduce((acc, currentValue) => {
    return acc + parseFloat(currentValue.incomeAmount);
  }, 0);
  return totalIncomes;
}

function clearIncomeForm() {
  inputIncomeName.value = "";
  inputIncomeAmount.value = "";
}
function updateListOfIncomes() {
  listOfIncomes.innerHTML = "";
  incomesArray.forEach((income, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<div class = "balanceTable__incomes--list"><p></p><button class = "button--edit">EDYTUJ</button><button class = "button--warrning">USUŃ</button></div>`;
    listOfIncomes.appendChild(item);

    const incomeItem = listOfIncomes.querySelectorAll("p");

    incomeItem[index].textContent = `${income.incomeName} - ${parseFloat(
      income.incomeAmount
    ).toFixed(2)} ${currency}`;
    incomeItem[index].id = `${income.incomeID}`;

    const buttonEdit = listOfIncomes.querySelectorAll(".button--edit");
    buttonEdit[index].id = "incomeButtonEdit-" + index;
    const buttonDelete = listOfIncomes.querySelectorAll(".button--warrning");
    buttonDelete[index].id = "incomeButtonDelete-" + index;

    buttonDelete[index].addEventListener("click", () => {
      item.remove();
      incomesArray = incomesArray.filter((item) => {
        if (item.incomeID !== income.incomeID) {
          return item;
        }
      });
      createTotalIncomesLine();
      updateBalanceSheetResult();
    });

    buttonEdit[index].addEventListener("click", () => {
      const newIncomeName = window.prompt("Popraw nazwę", income.incomeName);
      const newIncomeAmount = window.prompt(
        "Popraw kwotę",
        parseFloat(income.incomeAmount).toFixed(2)
      );

      const current = incomesArray.find(
        (item) => item.incomeID === income.incomeID
      );

      current.incomeName = newIncomeName;
      current.incomeAmount = newIncomeAmount;

      incomeItem[
        index
      ].textContent = `${income.incomeName} - ${income.incomeAmount} ${currency}`;

      createTotalIncomesLine();
      updateBalanceSheetResult();
    });
  });
}
function createTotalIncomesLine() {
  const sumOfIncomes = updateSumOfIncomes().toFixed(2);
  balanceTableIncomesSummary.innerHTML = "";
  const sumOfIncomesP = document.createElement("p");
  sumOfIncomesP.innerText = `SUMA PRZYCHODÓW: ${sumOfIncomes} ${currency}`;
  sumOfIncomesP.classList.add("balanceTable__incomes--summary");
  sumOfIncomesP.id = "incomesSummary";
  balanceTableIncomesSummary.appendChild(sumOfIncomesP);
}
//
let expensesArray = [];

const inputExpenseName = document.querySelector("#inputExpenseText");
const inputExpenseAmount = document.querySelector("#inputExpenseSum");

const inputExpenseForm = document.querySelector(
  ".inputFields__expenses--inputArea"
);

const listOfExpenses = document.querySelector("#balanceTableExpensesList");

inputExpenseForm.addEventListener("submit", expenseButtonHandleClick);

function expenseButtonHandleClick(event) {
  event.preventDefault();
  if (inputExpenseAmount.value <= 0) {
    alert("wprowadź poprawną wartość: LICZBA DODATNIA");
    clearExpenseForm();
    return;
  }
  if (inputExpenseAmount.value.length === 0) {
    alert("wprowadź poprawną wartość: LICZBA DODATNIA");
    clearExpenseForm();
    return;
  }
  if (inputExpenseName.value.length === 0) {
    alert("wprowadź poprawną wartość: NAZWA WYDATKU");
    clearExpenseForm();
    return;
  }
  const expenseName = inputExpenseName.value;
  const expenseAmount = inputExpenseAmount.value;
  const expenseID = `expenseItem-${expensesArray.length}`;
  expensesArray.push({
    expenseName: expenseName,
    expenseAmount: expenseAmount,
    expenseID: expenseID,
  });
  updateListOfExpenses();
  createTotalExpensesLine();
  updateBalanceSheetResult();
  clearExpenseForm();
}

function updateSumOfExpenses() {
  const totalExpenses = expensesArray.reduce((acc, currentValue) => {
    return acc + parseFloat(currentValue.expenseAmount);
  }, 0);
  return totalExpenses;
}

function clearExpenseForm() {
  inputExpenseName.value = "";
  inputExpenseAmount.value = "";
}
function updateListOfExpenses() {
  listOfExpenses.innerHTML = "";
  expensesArray.forEach((expense, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<div class = "balanceTable__expenses--list"><p></p><button class = "button--edit">EDYTUJ</button><button class = "button--warrning">USUŃ</button></div>`;
    listOfExpenses.appendChild(item);

    const expenseItem = listOfExpenses.querySelectorAll("p");
    expenseItem[index].textContent = `${expense.expenseName} - ${parseFloat(
      expense.expenseAmount
    ).toFixed(2)} ${currency}`;
    expenseItem[index].id = `${expense.expenseID}`;

    const buttonEdit = listOfExpenses.querySelectorAll(".button--edit");
    buttonEdit[index].id = "expenseButtonEdit-" + index;

    const buttonDelete = listOfExpenses.querySelectorAll(".button--warrning");
    buttonDelete[index].id = "expenseButtonDelete-" + index;

    buttonDelete[index].addEventListener("click", () => {
      item.remove();
      expensesArray = expensesArray.filter((item) => {
        if (item.expenseID !== expense.expenseID) {
          return item;
        }
      });
      createTotalExpensesLine();
      updateBalanceSheetResult();
    });

    buttonEdit[index].addEventListener("click", () => {
      const newExpenseName = window.prompt("Popraw nazwę", expense.expenseName);
      const newExpenseAmount = window.prompt(
        "Popraw kwotę",
        parseFloat(expense.expenseAmount).toFixed(2)
      );

      const current = expensesArray.find(
        (item) => item.expenseID === expense.expenseID
      );

      current.expenseName = newExpenseName;
      current.expenseAmount = newExpenseAmount;

      expenseItem[
        index
      ].textContent = `${expense.expenseName} - ${expense.expenseAmount} ${currency}`;

      createTotalExpensesLine();
      updateBalanceSheetResult();
    });
  });
}

function createTotalExpensesLine() {
  const sumOfExpenses = updateSumOfExpenses().toFixed(2);
  balanceTableExpensesSummary.innerHTML = "";
  const sumOfExpensesH1 = document.createElement("h1");
  sumOfExpensesH1.innerText = `SUMA WYDATKÓW: ${sumOfExpenses} ${currency}`;
  sumOfExpensesH1.classList.add("balanceTable__expenses--summary");
  sumOfExpensesH1.id = "expensesSummary";
  balanceTableExpensesSummary.appendChild(sumOfExpensesH1);
}

const balanceTableIncomesSummary = document.querySelector("#incomesSummary");
const balanceTableExpensesSummary = document.querySelector("#expensesSummary");
const balanceSheetResultField = document.querySelector("#balanceSheetResult");
const neutralBalanceText = "BILANS  WYNOSI  ZERO";
const positiveBalanceText = "BILANS DODATNI MOŻESZ JESZCZE WYDAĆ:";
const negativeBalanceText = "BILANS UJEMNY JESTEŚ NA MINUSIE:";
const currency = "zł";

function updateBalanceSheetResult() {
  const sumOfIncomes = updateSumOfIncomes();
  const sumOfExpenses = updateSumOfExpenses();
  const balanceSheetResult = (sumOfIncomes - sumOfExpenses).toFixed(2);
  balanceSheetResultField.innerHTML = "";

  let summaryText = " ";
  if (balanceSheetResult == 0) {
    summaryText = `${neutralBalanceText}`;
  } else if (balanceSheetResult > 0) {
    summaryText = `${positiveBalanceText} ${balanceSheetResult} ${currency}`;
  } else {
    summaryText = `${negativeBalanceText} ${balanceSheetResult} ${currency}`;
  }

  const balanceSheetResultH1 = document.createElement("h1");
  balanceSheetResultH1.innerText = summaryText;
  balanceSheetResultH1.classList.add("balanceSheetResult");
  balanceSheetResultField.appendChild(balanceSheetResultH1);
}
