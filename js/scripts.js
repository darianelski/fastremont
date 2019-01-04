$(document).ready(function() {

    // Плавный скролл
    $(".menu-item").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    // прайс
    var tabIPhone = $("#tabIPhone"),
        tabIPad = $("#tabIPad");

    $(tabIPhone).on("click", function(){
        $(this).addClass('active');
        $(tabIPad).removeClass('active');
        $(".price-ipad").hide();
        $(".price-iphone").show();
    });
    $(tabIPad).on("click", function(){
        $(this).addClass('active');
        $(tabIPhone).removeClass('active');
        $(".price-ipad").show();
        $(".price-iphone").hide();
    });

    $(".price-iphone-btn").on("click", function(){
        $(".price-iphone-btn").removeClass("active");
        $(this).addClass("active");

        $(".price-iphone-table").hide();
        $(".price-iphone-table").eq($(this).index()).show();
    });

    $(".price-ipad-btn").on("click", function(){
        $(".price-ipad-btn").removeClass("active");
        $(this).addClass("active");

        $(".price-ipad-table").hide();
        $(".price-ipad-table").eq($(this).index()).show();
    });
    
});