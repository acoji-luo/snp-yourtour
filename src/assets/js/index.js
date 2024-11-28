import "../styles/mixins.scss";
import "../styles/reset.scss";
import "../styles/styles.scss";
import "./validation";

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
	if (this.window.scrollY > 450) {
		header.classList.add("header--fixed");
	} else {
		header.classList.remove("header--fixed");
	}
});
