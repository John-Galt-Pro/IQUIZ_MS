'use strict';

initSwiper();

const modalTrigger = document.querySelectorAll("[data-modal]"),
	  modal = document.querySelector(".modal");

modalTrigger.forEach(trigger => {
	trigger.addEventListener('click', () => {
		modal.classList.add('modal__open');
		document.body.style.overflow = 'hidden';
	});
});

modal.addEventListener('click', (event) => {
	if (event.target === modal || event.target.getAttribute('data-close') == '') {
		modal.classList.remove('modal__open');
		document.body.style.overflow = '';
	}
});

document.addEventListener('keydown', (event) => {
	if (event.code === 'Escape' && modal.classList.contains('modal__open')) {
		modal.classList.remove('modal__open');
		document.body.style.overflow = '';
	}
})

function initSwiper () {
const swiper = new Swiper('.swiper-container', {
   loop:true,
    centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
 

    breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		},

		1720: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},


});
}

