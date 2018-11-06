/**
 * Created by Administrator on 2018/10/31 0031.
 */
$(function(){
    $(".header-right .u1 li").click(function(){
        $(".header-right .u1 .dian").hide();
        $(this).find(".dian").show();
    });

    $(".header-right .u1 li").hover(function(){
        $(this).find(".st").stop().slideDown(600,"elasticOut");
    },function(){
        $(this).find(".st").stop().slideUp(600)
    });
    $(".header-right .u1 li div p").hover(function(){
        $(this).css({background:"#329ADC"});
        $(this).find("a").stop().animate({marginLeft:15},600);
        $(this).find("img").show();
    },function(){
        $(this).css({background:"#36264A"});
        $(this).find("a").stop().animate({marginLeft:0},600);
        $(this).find("img").hide();
    });



});