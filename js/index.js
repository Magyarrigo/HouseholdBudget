"use strict";

//hamburger-menu managment
const navList = document.querySelector(".nav__buttons");
const hamburgerMenu = document.querySelector(".nav__hamburger");

hamburgerMenu.addEventListener("click", function () {
  navList.classList.toggle("nav__buttons--active");
  hamburgerMenu.classList.toggle("nav__hamburger--active");
});
//After click on hamburger-menu the mobil-menu opens
//and cross to close it.
//End of the hamburger-menu managment.

//construction and management of the income table

const incomesArrayValues = [123, 15, 26.12,543];
const incomesArrayDescriptions = ["pierwszy", "drugi", "trzeci"];
const expensesArrayValues = [254.12, 4,32,47, 7];
const expensesArrayDescriptions = ["pierwszywyd", "drugiwyd"];

//let incomesArrayValues = [];
//incomesArray.map((element) => {
// incomesArrayValues.push(element[1]);
//});
//let expensesArrayValues = [];
//expensesArray.map((element) => {
//  expensesArrayValues.push(element[1]);
//});

//let sumOfIncomes = 0;
//let sumOfExpenses = 0;
const sumOfIncomes = incomesArrayValues.reduce((acc, number) => {
  return acc + number;
}, 0);
const sumOfExpenses = expensesArrayValues.reduce((acc, number) => {
  return acc + number;
}, 0);
//end of construction and managment of the income table

//Creating the <h1> element with the balance rusults.
const balanceTableIncomesSummary = document.querySelector(
  ".balanceTable__incomes--container"
);
const balanceTableExpensesSummary = document.querySelector(
  ".balanceTable__expenses--container"
);
const balanceSheetResultField = document.querySelector("#balanceSheetResult");
const neutralBalanceText = "BILANS  WYNOSI  ZERO";
const positiveBalanceText = "BILANS DODATNI MOŻESZ JESZCZE WYDAĆ:";
const negativeBalanceText = "BILANS UJEMNY JESTEŚ NA MINUSIE:";
const currency = "zł";
//let sumOfIncomes = 0;
//const sumOfExpenses = 0;

let balanceSheetresult = sumOfIncomes - sumOfExpenses;
let balanceIndex = "";
if (balanceSheetresult == 0) {
  balanceIndex = "balance";
} else if (balanceSheetresult > 0) {
  balanceIndex = "positive";
} else {
  balanceIndex = "negative";
}

let summaryText = " ";
switch (balanceIndex) {
  case "balance":
    summaryText = `${neutralBalanceText}`;
    break;
  case "positive":
    summaryText = `${positiveBalanceText} ${balanceSheetresult} ${currency}`;
    break;
  case "negative":
    summaryText = `${negativeBalanceText} ${balanceSheetresult} ${currency}`;
    break;
  default:
    summaryText = "WPROWADŹ POPRAWNE DANE";
}

const balanceSheetResultH1 = document.createElement("h1");
balanceSheetResultH1.innerText = summaryText;
balanceSheetResultH1.classList.add("balanceSheetResult");
balanceSheetResultField.appendChild(balanceSheetResultH1);
//End of creation of the balanceSheetResult element.

//Creating the <h1> elements with sum of incomes & sum of expenses
const sumOfIncomesH1 = document.createElement("h1");
sumOfIncomesH1.innerText = `SUMA PRZYCHODÓW: ${sumOfIncomes} ${currency}`;
sumOfIncomesH1.classList.add("balanceTable__incomes--summary");
balanceTableIncomesSummary.appendChild(sumOfIncomesH1);

const sumOfExpensesH1 = document.createElement("h1");
sumOfExpensesH1.innerText = `SUMA WYDATKÓW: ${sumOfExpenses} ${currency}`;
sumOfExpensesH1.classList.add("balanceTable__expenses--summary");
balanceTableExpensesSummary.appendChild(sumOfExpensesH1);
//End of creation <h1> elements with sum of incomes & sum of expenses

/*var arrayOfParagrafs = [
  ...document.querySelectorAll(".balanceTable__incomes--item"),
];
incomesArrayDescriptions = [];
arrayOfParagrafs.map((e) => {
  console.log(e.innerHTML);
  incomesArrayDescriptions.push(e.innerHTML);
});
console.log(incomesArrayDescriptions);
*/