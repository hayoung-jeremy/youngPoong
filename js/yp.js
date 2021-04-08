$(function () {
    
    // var
    var steady_num = 0;
    var today_num = 0;
    var ebook_num = 0;

    // ---------- visual
    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 60,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
        }
    });

    // ---------- contents
    // steady
    function steady_fade (){
        $(".steady .bnr_steady>li").eq(steady_num).stop().fadeIn(400).siblings("li").stop().fadeOut(400);
        $(".steady .pagination>span").eq(0).text(steady_num+1);
    }
    $(".steady .prev").click(function(){
        if(steady_num<=0){
            steady_num=4;
        }
        else{
            steady_num--;
        }
        console.log(steady_num);
        steady_fade();
    })
    $(".steady .next").click(function(){
        if(steady_num<4){
            steady_num++;
        }
        else{
            steady_num=0;
        }
        console.log(steady_num);
        steady_fade();
    })

    // top 10
    $(".btn_top10>.prev").click(function(){
        
    })
    $(".btn_top10>.next").click(function(){
        
    })

    
    
    // today
    function today_fade (){
        $("#today .list>li").eq(today_num).stop().fadeIn(400).siblings().stop().fadeOut(400);
        $("#today .pagination>span").eq(0).text(today_num+1);
    }
    $("#today .prev").click(function(){
        if(today_num<=0){
            today_num=3;
        }
        else{
            today_num--;
        }
        today_fade();
    })
    $("#today .next").click(function(){
        if(today_num<3){
            today_num++;
        }
        else{
            today_num=0;
        }
        today_fade();
    })

    // theme
    $(".theme_list>li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).children(".theme_sub").stop().fadeIn(400);
        $(this).siblings().children(".theme_sub").stop().fadeOut(400);
    })
    $(".theme_sub>.sub_list").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).children(".books").stop().fadeIn(400);
        $(this).siblings().children(".books").stop().fadeOut(400);
    })

    // ebook
    function ebook_fade (){
        $("#ebook .list>li").eq(ebook_num).stop().fadeIn(400).siblings("li").stop().fadeOut(400);
        $("#ebook .pagination>span").eq(0).text(ebook_num+1);
    }
    $("#ebook .prev").click(function(){
        if(ebook_num<=0){
            ebook_num=3;
        }
        else{
            ebook_num--;
        }
        ebook_fade();
    })
    $("#ebook .next").click(function(){
        if(ebook_num<3){
            ebook_num++;
        }
        else{
            ebook_num=0;
        }
        ebook_fade();
    })

})
