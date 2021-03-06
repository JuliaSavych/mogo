$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('.header').addClass('header-background')
      }
      if ($(this).scrollTop() < 50) {
         $('.header').removeClass('header-background')
      }
   });
});

 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.slider',
  dots: false,
  focusOnSelect: true,
  centerPadding: 0,
  infinite: true,
  mobileFirst: true,
  customPaging: '30',
  mobileFirst: true,
    responsive: [
          {
            breakpoint: 320,
            settings: 
              { 
                slidesToShow: 1,
                slidesToScroll: 4,
                centerMode: true,
                arrows: false,
                centerPadding: '60px'
              }
          },
          {
            breakpoint: 768,
            settings: 
              { 
                slidesToShow: 4,
                slidesToScroll: 4,
                centerMode: false,
                arrows: false
              }
          }
    ]
});

$('.navigation-holder').on('click', function(){
  $(this).find('.fa-bars').toggleClass('fa-times');
  $('ul#menu').toggleClass('active');
});

$('.search-box>button').on('click', function(){
  $('.search-box').addClass('active');
});

$('.map-holder>button').on('click', function(){
  $('.map-wrap').removeClass('active');
});

$(document).ready(function() {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
});

$(document).mouseup(function(e) 
{
  var container = $('.search-box');
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $('.search-box').removeClass('active')
    }
});

$(function(){
  $('button.learn-more').click(function(event){ 
    event.preventDefault(); 
    $(this).parents().find('.learn-more__text').slideToggle("slow").toggleClass('active'); 
  });
});

var sliders = document.querySelectorAll('.sliderabout');
console.log(sliders)
function setActiveNextPrevClass(sliderabout){
  var index = sliderabout.currentSlideIndex;
  var s = sliderabout.querySelectorAll('.slideabout');
  s.forEach(function(slideabout){
    slideabout.classList.remove('active')
    slideabout.classList.remove('nextSlide')
    slideabout.classList.remove('prevSlide')
  })
  s[index].classList.add('active');
  if(s[index+1]){
    s[index+1].classList.add('nextSlide')
  }else{
    s[0].classList.add('nextSlide')
  }
  if(s[index-1]){
    s[index-1].classList.add('prevSlide')
  }else{
    s[s.length-1].classList.add('prevSlide')
  }
  sliderabout.style.height = s[index].clientHeight+'px';
}
sliders.forEach(function(sliderabout){
  var s = sliderabout.querySelectorAll('.slideabout');
  sliderabout.currentSlideIndex = 0;
  setActiveNextPrevClass(sliderabout);

  var nextBtn = document.createElement('div');
  nextBtn.classList.add('sliderabout__btn');
  nextBtn.classList.add('sliderabout__btn_next'); 
  console.log(nextBtn)
  nextBtn.onclick = function(){
    if(s[sliderabout.currentSlideIndex+1]){
      sliderabout.currentSlideIndex++
    }else{
      sliderabout.currentSlideIndex = 0;
    }
    setActiveNextPrevClass(sliderabout)
  }
  sliderabout.appendChild(nextBtn)

  var prevBtn = document.createElement('div');
  prevBtn.classList.add('sliderabout__btn');
  prevBtn.classList.add('sliderabout__btn_prev');
  prevBtn.onclick = function(){
    console.log(s[sliderabout.currentSlideIndex-1] == false)
  if(sliderabout.currentSlideIndex>0){
      sliderabout.currentSlideIndex--
    }else{
      console.dir(sliderabout)
      sliderabout.currentSlideIndex = sliderabout.childElementCount-3;
    }
    console.log(sliderabout.currentSlideIndex)
    setActiveNextPrevClass(sliderabout)
  }
  sliderabout.appendChild(prevBtn) 
  
});

var $work = $('.work-img').imagesLoaded(
  function() {
    $work.masonry({
      itemSelector: '.img-placeholder',
      columnWidth: '.img-placeholder__work'
    });
});


