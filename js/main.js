$(document).ready(function(){
   $('.icon').click(function(){
      $('.icon').toggleClass('active');
   });
   $('.header-search').click(function(){
      $('.search-form').toggleClass('search-open');
   });
   $(".testimonial-wrp").owlCarousel({
    items: 3,
    slideSpeed: 500,
    autoPlay: 5000,
    stopOnHover: true,
    pagination:false,
    margin: 20,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 480 up
      640 : {
        items: 1
      },
      // breakpoint from 768 up
      768 : {
        items: 1
      }
  }
  });
});
