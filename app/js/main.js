'use strict';

 window.addEventListener('load', function() {
      // Проверка ширины экрана при загрузке и изменении размера окна
      if (window.matchMedia('(max-width: 1024px)').matches) {
        initSwiper();
      }
    });
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
   
    centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
   
  loop:true,
 

    breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		768: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		1200: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		
	},


});
}

