document.addEventListener("DOMContentLoaded", () => {
	const nameInput = document.getElementById("name");

	nameInput.addEventListener("input", () => {
		nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9\s]/g, "");
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const emailInput = document.getElementById("email");

	emailInput.addEventListener("input", () => {
		emailInput.value = emailInput.value.replace(/[а-яА-ЯёЁ]/g, "");
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const phoneInput = document.getElementById("phone");

	phoneInput.addEventListener("input", () => {
		phoneInput.value = phoneInput.value.replace(/[^0-9+()\s-]/g, "");
	});
});

const dateFrom = document.getElementById("date-from");
const dateTo = document.getElementById("date-to");

dateFrom.addEventListener("change", () => {
	if (dateTo.value && dateFrom.value > dateTo.value) {
		alert("Дата от не может быть позже, чем Дата до");
		dateFrom.value = "";
	}
});

dateTo.addEventListener("change", () => {
	if (dateFrom.value && dateTo.value < dateFrom.value) {
		alert("Дата до не может быть раньше, чем Дата от");
		dateTo.value = "";
	}
});
