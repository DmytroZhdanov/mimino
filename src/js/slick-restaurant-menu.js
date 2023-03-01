$('.responsive-restaurant-menu').slick({
  mobileFirst: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 1440,
      settings: 'unslick',
    },
    
  ],
});