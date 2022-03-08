//******************************** DOM Elements ******************************//

const	screen = document.querySelector("#screen");
const	numbers = document.querySelectorAll(".number");
const	clearBtn = document.querySelector(".clear-btn");
const	eraseBtn = document.querySelector(".erase-btn");
const	operationBtn = document.querySelectorAll(".operation-btn");
const	equalsBtn = document.querySelector(".equals-btn")

//****************************** Event Listeners *****************************//

numbers.forEach(function (number) {
	number.addEventListener("click", numberHook);
});

clearBtn.addEventListener("click", clearBtnHook);
eraseBtn.addEventListener("click", eraseBtnHook);

operationBtn.forEach(function (operationBtn) {
	operationBtn.addEventListener("click", operationBtnHook);
});

equalsBtn.addEventListener("click", equalsBtnHook);

//******************************** Event hooks *******************************//

function	numberHook(event) {
	console.log(`Number button was pressed`);
}

function	clearBtnHook(event) {
	console.log(`Clear button was pressed`);
}

function	eraseBtnHook(event) {
	console.log(`Erease button was pressed`);
}

function	operationBtnHook(event) {
	console.log(`Operation button was pressed`);
}

function	equalsBtnHook(event) {
	console.log(`Equals button was pressed`);
}

//********************************* Main Code ********************************//

console.log(`webCalculator is loading`);
