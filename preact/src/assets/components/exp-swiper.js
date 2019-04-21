window.onload = function() {
	let timelineSwiper = new Swiper('.timeline .swiper-container', {
		direction: 'vertical',
		loop: false,
		speed: 1600,
		pagination: '.swiper-pagination',
		paginationBulletRender(swiper, index, className) {
			let year = document
				.querySelectorAll('.swiper-slide')
				[index].getAttribute('data-year');
			return '<span class="' + className + '">' + year + '</span>';
		},
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			768: {
				direction: 'horizontal'
			}
		}
	});
};
