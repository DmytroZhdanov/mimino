$('.responsive').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
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
