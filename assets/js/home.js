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