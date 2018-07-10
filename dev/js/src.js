 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  mobileFirst: true
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  focusOnSelect: true,
  centerPadding: 0,
  infinite: true,
  mobileFirst: true
});

 $('.search-box > .search-icon').on('click', function(){
  $(this).parent().addClass('active')
  $(this).parent().find('input').focus();
  })

  $(document).on('click', function(e){
    if(!$(e.target).parent('[data-close-missclick]').length){
     $('[data-close-missclick]').removeClass('active')
    }
  })

  $(function(){
    $('button.learn-more').click(function(event){ 
      event.preventDefault(); 
      $(this).parents().find('.learn-more__text').slideToggle("slow").toggleClass('active'); 
    });
});