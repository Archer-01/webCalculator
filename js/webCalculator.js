//******************************** DOM Elements ******************************//

const	screen = document.querySelector("#screen");
const	numbers = document.querySelectorAll(".number");
const	clearBtn = document.querySelector(".clear-btn");
const	eraseBtn = document.querySelector(".erase-btn");
const	operationBtn = document.querySelectorAll(".operation-btn");
const	equalsBtn = document.querySelector(".equals-btn")

//*************************** Global variables *******************************//

let		result = 0;

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

/**
 * Number buttons hook.
 * Update calculator screen when number is pressed.
 *
 * @param {object} event Event object
 */
function	numberHook(event) {
	let	pressedNum;

	pressedNum = parseInt(event.target.textContent);
	result = (result * 10) + pressedNum;
	screen.textContent = result.toString();
}

/**
 * Clear calculator screen hook.
 * Clear screen when C button is pressed.
 *
 * @param {object} event Event object
 */
function	clearBtnHook(event) {
	screen.textContent = "0";
	result = 0;
}

/**
 * Erase button (Left arrow button) hook.
 * Erase last pressed number on calculator screen.
 *
 * @param {object} event Event object
 */
function	eraseBtnHook(event) {
	result = parseInt(result / 10);
	screen.textContent = result.toString();
}

function	operationBtnHook(event) {
	console.log(`Operation button was pressed`);
}

function	equalsBtnHook(event) {
	console.log(`Equals button was pressed`);
}

//********************************* Main Code ********************************//

console.log(`webCalculator is loading`);
