/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", () => {


	/* =--------------------------------------= Categories Swiper =------------------= */
	var categoriesSwiper = new Swiper("#categories-wrapper", {
		loop: true,
		navigation: { prevEl: "#categories-swiper-button-prev", nextEl: "#categories-swiper-button-next", },
		breakpoints: {
			640: { slidesPerView: 2, spaceBetween: 20, },
			768: { slidesPerView: 4, spaceBetween: 40, },
			1400: { slidesPerView: 6, spaceBetween: 24, },
		},
	});


	/* =--------------------------------------= New Arrival Swiper =------------------= */
	var newArrivalSwiper = new Swiper("#new-arrivals-wrapper", {
		loop: true,
		navigation: { prevEl: "#new-arrivals-swiper-button-prev", nextEl: "#new-arrivals-swiper-button-next", },
		breakpoints: {
			640: { slidesPerView: 2, spaceBetween: 20, },
			768: { slidesPerView: 4, spaceBetween: 40, },
			1400: { slidesPerView: 4, spaceBetween: 24, },
		},
	});


	/* =--------------------------------------= Featured Products =------------------= */
	const tabsButtons = document.querySelectorAll("[data-target]");
	const tabsContents = document.querySelectorAll("[content]");
	tabsButtons.forEach( (tabButton) => {
		tabButton.addEventListener("click", () => {
			const tabButtonTarget = document.querySelector(tabButton.dataset.target);
			tabsContents.forEach( tabContent => {
				tabContent.classList.remove("tab__item__active");
			});
			tabButtonTarget.classList.add("tab__item__active");
			tabsButtons.forEach( tabButton => {
				tabButton.classList.remove("tab__button__active");
			});
			tabButton.classList.add("tab__button__active");
		});
	});
	

});
