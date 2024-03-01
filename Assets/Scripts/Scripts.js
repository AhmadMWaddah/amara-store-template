/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", () => {


	/* =--------------------------------------= Categories Swiper =------------------= */
	var categoriesSwiper = new Swiper("#categories-wrapper", {
		loop: true,
		navigation: { prevEl: ".swiper__button__next", nextEl: ".swiper__button__prev", },
		breakpoints: {
			640: { slidesPerView: 2, spaceBetween: 20, },
			768: { slidesPerView: 4, spaceBetween: 40, },
			1400: { slidesPerView: 6, spaceBetween: 24, },
		},
	});


	/* =--------------------------------------= Categories Swiper =------------------= */
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
