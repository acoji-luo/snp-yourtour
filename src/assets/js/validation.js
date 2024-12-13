document.addEventListener("DOMContentLoaded", () => {
	const addInputFilter = (inputElement, regex) => {
		inputElement.addEventListener("input", () => {
			inputElement.value = inputElement.value.replace(regex, "");
		});
	};

	addInputFilter(document.getElementById("name"), /[^a-zA-Zа-яА-ЯёЁ0-9\s]/g);
	addInputFilter(document.getElementById("email"), /[а-яА-ЯёЁ]/g);
	addInputFilter(document.getElementById("phone"), /[^0-9+()\s-]/g);
});

document.querySelector("form").addEventListener("submit", event => {
	event.preventDefault();

	const dateFrom = document.getElementById("date-from").value;
	const dateTo = document.getElementById("date-to").value;

	let errorMessage = "";

	if (dateFrom === dateTo) {
		errorMessage = "Дата 'от' не должна быть равна дате 'до'.";
	} else if (dateFrom > dateTo) {
		errorMessage = "Дата 'от' не может быть позже даты 'до'.";
	} else {
		const dateFromObj = new Date(dateFrom);
		const dateToObj = new Date(dateTo);

		if (isNaN(dateFromObj.getTime()) || isNaN(dateToObj.getTime())) {
			errorMessage = "Пожалуйста, введите правильный формат даты.";
		}
	}

	if (errorMessage) {
		alert(errorMessage);
	} else {
		event.target.submit();
		event.target.reset();
	}
});
