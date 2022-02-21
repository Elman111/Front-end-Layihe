$(document).on("click",".product-categories-plus",function () {
    $(this).parent().parent().children().last().toggleClass("d-none");
    $(this).toggleClass("fas fa-plus")
    $(this).toggleClass("fas fa-minus")
    if($(".product-categories-checkbox").css("height")>"255px"){
        $(".product-categories-checkbox").css("overflow-y","scroll")
    }
    else{
       
        $(".product-categories-checkbox").css("overflow-y","auto")
    }
})
