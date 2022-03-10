//******************************** DOM Elements ******************************//

const	screen = document.querySelector("#screen");
const	numbers = document.querySelectorAll(".number");
const	clearBtn = document.querySelector(".clear-btn");
const	eraseBtn = document.querySelector(".erase-btn");
const	operationBtn = document.querySelectorAll(".operation-btn");
const	equalsBtn = document.querySelector(".equals-btn")

//*************************** Global variables *******************************//

let		currentNum = 0;
let		operation = '+';
let		firstNum = 0;
let		secondNum = 0;

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
	currentNum = (currentNum * 10) + pressedNum;
	screen.textContent = currentNum.toString();
}

/**
 * Clear calculator screen hook.
 * Clear screen when C button is pressed.
 *
 * @param {object} event Event object
 */
function	clearBtnHook(event) {
	screen.textContent = "0";
	currentNum = 0;
	firstNum = 0;
	secondNum = 0;
	operation = '+';
}

/**
 * Erase button (Left arrow button) hook.
 * Erase last pressed number on calculator screen.
 *
 * @param {object} event Event object
 */
function	eraseBtnHook(event) {
	currentNum = parseInt(currentNum / 10);
	screen.textContent = currentNum.toString();
}

/**
 * Operation buttons hook.
 * Calculate operation.
 *
 * @param {object} event Event object
 */
function	operationBtnHook(event) {
	if (firstNum === 0 && secondNum === 0) {
		firstNum = currentNum;
	} else if (firstNum != 0 && secondNum === 0) {
		secondNum = currentNum;
	} else if (firstNum !== 0 && secondNum !== 0) {
		firstNum = eval(`${firstNum} ${operation} ${secondNum}`);
		secondNum = currentNum;
	}
	operation = event.target.textContent;
	currentNum = 0;
	console.log(firstNum, operation, secondNum);
}

/**
 * Equals button hook.
 *
 * @param {object} event Event object
 */
function	equalsBtnHook(event) {
	if (currentNum !== 0 && firstNum === 0 && currentNum !== 0) {
		firstNum = currentNum;
		secondNum = 0;
	} else if (firstNum !== 0 && secondNum === 0 && currentNum !== 0) {
		secondNum = currentNum;
	} else if (firstNum !== 0 && secondNum !== 0 && currentNum !== 0) {
		firstNum = eval(`${firstNum} ${operation} ${secondNum}`);
		secondNum = currentNum;
	}
	currentNum = eval(`${firstNum} ${operation} ${secondNum}`);
	screen.textContent = currentNum.toString();
	firstNum = 0;
	secondNum = 0;
	operation = '+';
}
