let leftIcon = document.querySelector(".left");
let rightIcon = document.querySelector(".right");



rightIcon.addEventListener("click",function(){
    let activeImg = document.querySelector(".active");
    if(activeImg.nextElementSibling != null){
        activeImg.classList.remove("active");
        activeImg.nextElementSibling.classList.add("active");
    }else{
        let firstImg = document.querySelector(".img").firstElementChild;
        activeImg.classList.remove("active");
        firstImg.classList.add("active");
    }
})

leftIcon.addEventListener("click",function(){
    let activeImg = document.querySelector(".active");
    if(activeImg.previousElementSibling != null){
        activeImg.classList.remove("active");
        activeImg.previousElementSibling.classList.add("active");
    }else{
        let firstImg = document.querySelector(".img").lastElementChild;
        activeImg.classList.remove("active");
        firstImg.classList.add("active");
    }
})

var clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    autoStart: false,
    callbacks: {
      stop: function() {
        $('.message').html('The clock has stopped!')
      }
    }
});

clock.setTime(220880);

clock.setCountdown(true);

clock.start();

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,

    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    responsive:{

        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
