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

    // Загрузка карт 
    var mapAct = false;
    $(window).on("scroll", function(){
    var top = $(".contacts").offset().top - $('.contacts').outerHeight() +120;
    if($(document).scrollTop() > top && !mapAct){
        $("#map1").append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fd926c889497accd84f23bd9b698f96948fde4bcbd6db2c2b3619504b2c1878&amp;source=constructor" height="298"></iframe>');
        $("#map2").append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fd926c889497accd84f23bd9b698f96948fde4bcbd6db2c2b3619504b2c1878&amp;source=constructor" height="298"></iframe>');
        $("#map3").append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fd926c889497accd84f23bd9b698f96948fde4bcbd6db2c2b3619504b2c1878&amp;source=constructor" height="298" ></iframe>');
        mapAct = true;
    }
    });
    
});