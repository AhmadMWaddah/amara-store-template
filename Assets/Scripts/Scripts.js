/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", () => {


	/* =--------------------------------------= Toggle Mobile Menu =------------------= */
	const responsiveNavBar = document.getElementById("navbar-menu");
	const navBarToggle = document.getElementById("navbar-toggle");
	const navBarClose = document.getElementById("navbar-close");
	if (navBarToggle) {
		navBarToggle.addEventListener("click", function() {
			responsiveNavBar.classList.add("navbar__menu__opened");
		});
	};
	if (navBarClose) {
		navBarClose.addEventListener("click", function() {
			responsiveNavBar.classList.remove("navbar__menu__opened");
		});
	};


	/* =--------------------------------------= Categories Swiper =------------------= */
	var categoriesSwiper = new Swiper("#categories-wrapper", {
		loop: true,
		navigation: { prevEl: "#categories-swiper-button-prev", nextEl: "#categories-swiper-button-next", },
		breakpoints: {
			768: { slidesPerView: 2, spaceBetween: 24, },
			992: { slidesPerView: 3, spaceBetween: 24, },
			1400: { slidesPerView: 6, spaceBetween: 24, },
		},
	});


	/* =--------------------------------------= New Arrival Swiper =------------------= */
	var newArrivalSwiper = new Swiper("#new-arrivals-wrapper", {
		loop: true,
		navigation: { prevEl: "#new-arrivals-swiper-button-prev", nextEl: "#new-arrivals-swiper-button-next", },
		breakpoints: {
			350: { slidesPerView: 2, spaceBetween: 24, },
			768: { slidesPerView: 3, spaceBetween: 24, },
			992: { slidesPerView: 4, spaceBetween: 24, },
			1200: { slidesPerView: 5, spaceBetween: 24, },
			1400: { slidesPerView: 6, spaceBetween: 24, },
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


	/* =--------------------------------------= Details Images Gallery =------------------= */
	function detailsImageGallery() {
		const imageOne = document.querySelector("#image-one");
		const thumbnails = document.querySelectorAll(".details__thmbnail");
		thumbnails.forEach(thumbnail => {
			thumbnail.addEventListener("click", function() {
				console.log(this);
				imageOne.src = this.src;
			});
		});
	};
	detailsImageGallery();
	

});