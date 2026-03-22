const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
const counterElement = document.getElementById('counter0')
let action = null
let counter = 0

function updateCounterDisplay() {
	counterElement.textContent = counter
}

plus.onclick = function () {
	action = '+'
	counter += 1
	updateCounterDisplay()
}

minus.onclick = function () {
	action = '-'
	counter += 1
	updateCounterDisplay()
}

divide.onclick = function () {
	action = '/'
	counter += 1
	updateCounterDisplay()
}

multiply.onclick = function () {
	action = '*'
	counter += 1
	updateCounterDisplay()
}

function greenOrRed(answer) {
	if (typeof answer === 'string') {
		result.style.color = 'black'
	} else if (answer > 0) {
		result.style.color = 'green'
	} else if (answer === 0) {
		result.style.color = 'black'
	} else if (answer < 0) {
		result.style.color = 'red'
	}
}

function counter0() {
	counter = 0
}

function number(ipt1, ipt2, action1) {
	const num1 = Number(ipt1.value)
	const num2 = Number(ipt2.value)

	if (counter == 7) {
		return 'Hello world'
	}
	if (action == '+') {
		return num1 + num2
	} else if (action == '-') {
		return num1 - num2
	} else if (action == '/') {
		return num1 / num2
	} else {
		return num1 * num2
	}
}

submit.onclick = function () {
	result.textContent = number(input1, input2, action)
	greenOrRed(result.textContent)
	counter0()
	updateCounterDisplay()
}
