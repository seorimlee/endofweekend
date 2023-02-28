$(function () {
    let header = $('header');
    let header2 = $('.header2');
    let page = $('.page-start'); 
    let window = $("main");
    let pageOffsetTop = page.offset().top;

    window.resize(function () {
        pageOffsetTop = page.offset().top;
    });

    //스크롤시
    window.on('scroll', function () { 
        let scrolled = window.scrollTop() >= pageOffsetTop;
        header.toggleClass('down', scrolled);
        header2.toggleClass('come', scrolled);
        
    })
    // ------클릭하면 나타나는 헤더-----------
    header2.on('click', function () {
        $(this).toggleClass('come')
        header.toggleClass('down')
    });

  // ------호버하면 반전되는 사진-----------    
    $(".photo").hover(function () {
        $(this).toggleClass("on")
    });

  // ------두가지 포스터-----------    
  $('.hide-poster').hover(function(){
        $(this).toggleClass("hide");
    });    

    let slides = $('.slide img'),
        slideCount = slides.length,
        currentIndex = 0;

        let timer = setInterval(showNextSlide,3500);
        function showNextSlide(){
            let nextIndex = (currentIndex+1) % slideCount;
            slides.eq(currentIndex).fadeOut();
            slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;

            console.log(currentIndex);
        }













});
