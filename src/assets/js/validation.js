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

document.addEventListener("DOMContentLoaded", () => {
	const dateFromInput = document.getElementById("date-from");

	const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;

	dateFromInput.addEventListener("input", () => {
		dateFromInput.value = dateFromInput.value.replace(/[^0-9.]/g, "");
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const dateFromInput = document.getElementById("date-to");

	const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;

	dateFromInput.addEventListener("input", () => {
		dateFromInput.value = dateFromInput.value.replace(/[^0-9.]/g, "");
	});
});
