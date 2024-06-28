const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

destroyButton.addEventListener("click", destroyHandler);
createButton.addEventListener("click", createHandler);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	amount = Number(amount);
	destroyHandler();
	let size = 30;
	const boxesArray = [];
	for (let index = 0; index < amount; index++) {
		boxesArray.push(
			`<div style="height:${size}px;width:${size}px;background-color:${getRandomHexColor()}"></div>`,
		);
		size += 10;
	}
	boxes.insertAdjacentHTML("beforeend", boxesArray.join(""));
	input.value = null;
}

function destroyHandler() {
	boxes.innerHTML = "";
}

function createHandler() {
	if (input.value > 0 && input.value <= 100) {
		createBoxes(input.value);
	} else {
		alert(
			`Input value can not be ${input.value}. Set a number between 1 and 100`,
		);
	}
}
