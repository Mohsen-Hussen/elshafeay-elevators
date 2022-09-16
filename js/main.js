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

	// swiper slider
	let swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 50,
			},
		},
	});

	// copyright date
	const year = document.querySelector("#currentYear");
	year.innerHTML = new Date().getFullYear();
});
