$('.responsive-main-restaurant').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
