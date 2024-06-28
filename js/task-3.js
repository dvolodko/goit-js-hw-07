const inputField = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

inputField.addEventListener("input", inputHandler);

function inputHandler(event) {
	nameOutput.textContent = event.currentTarget.value.trim() || "Anonymous";
}
