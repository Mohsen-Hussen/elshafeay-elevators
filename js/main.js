$(document).ready(() => {
	// toggle nav link class
	// let ulNav = document.getElementById("navUl");
	let ulItems = $(".nav-item");
	for (let i = 0; i < ulItems.length; i++) {
		ulItems[i].addEventListener("click", function () {
			let current = document.getElementsByClassName("activNavLink");
			if (current.length > 0) {
				current[0].className = current[0].className.replace("activNavLink", "");
			}
			this.className += " activNavLink";
		});
	}
});
