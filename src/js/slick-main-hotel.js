$('.responsive-main-hotel').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  touchThreshold: 10,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: 'unslick',
    },
    {
      breakpoint: 374,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
