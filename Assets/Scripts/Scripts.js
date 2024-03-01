/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", function() {

	/* =--------------------------------------= Categories Swiper =------------------= */
	var categoriesSwiper = new Swiper("#categories-wrapper", {
		loop: true,
		navigation: {
			prevEl: ".swiper__button__next",
			nextEl: ".swiper__button__prev",
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
			1400: {
				slidesPerView: 6,
				spaceBetween: 24,
			},
		},
	});

});