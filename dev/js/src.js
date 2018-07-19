 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
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
            breakpoint: 768,
            settings: 
              { 
                slidesToShow: 4,
                slidesToScroll: 4
              }
          }
    ]
});

$('.navigation-holder').on('click', function(){
  $(this).find('.fa-bars').toggleClass('fa-times');
  $('ul#menu').toggleClass('active');
})

$('.fas.fa-search').on('click', function(){
  $(this).parent().toggleClass('active')
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
  sliderabout.style.height = s[0].clientHeight+'px';
}
sliders.forEach(function(sliderabout){
  console.dir(sliderabout)
  var s = sliderabout.querySelectorAll('.slideabout');
  console.log(s)
  sliderabout.currentSlideIndex = 0;
  setActiveNextPrevClass(sliderabout);

  var nextBtn = document.createElement('div');
  // nextBtn.innerText = 'next';
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
  if(s[sliderabout.currentSlideIndex-1]){
      sliderabout.currentSlideIndex--
    }else{
      sliderabout.currentSlideIndex = sliderabout.length-1;
    }
    setActiveNextPrevClass(sliderabout)
  }
  sliderabout.appendChild(prevBtn) 
  
})