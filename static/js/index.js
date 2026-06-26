window.addEventListener('load', () => {
  const carousels = document.querySelectorAll('.carousel');
  if (carousels.length > 0 && window.bulmaCarousel) {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }

  const sliders = document.querySelectorAll('input[type=range].slider');
  if (sliders.length > 0 && window.bulmaSlider) {
    bulmaSlider.attach();
  }
});
