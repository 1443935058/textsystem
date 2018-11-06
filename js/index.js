/**
 * Created by Administrator on 2018/11/1 0001.
 */
//头部加载
$(function(){
    $("#header").load("header.html");
    //底部
    $("#fotter").load("footer.html");

    $(".banner .xiba .xia1").hover(function(){
        $(this).find("img").attr("src","images/prev_jiantou_hover.png")
    },function(){
        $(this).find("img").attr("src","images/prev_jiantou.png")
    });
    $(".banner .xiba .xia3").hover(function(){
        $(this).find("img").attr("src","images/next_jiantou_hover.png")
    },function(){
        $(this).find("img").attr("src","images/next_jiantou.png")
    });

    //轮播图
    (function(){
        var index=0;
        var len=$(".banner ul li").length;
        $(".banner .xiba .xia1").click(function(){
            index--;
            if(index<0){
                index=len-1;
            }
            $(".banner ul li").fadeOut(100).eq(index).fadeIn(100);
            $(".banner .center .ccen img").attr("src","images/next&prev_others.png").eq(index).attr("src","images/next&prev_now.png")
        });
        $(".banner .xiba .xia3").click(right);
        var xiaodian=$(".banner .xiba .center .ccen img");
        xiaodian.click(function(){
            index=$(this).index();
            xiaodian.attr("src","images/next&prev_others.png").eq(index).attr("src","images/next&prev_now.png");
            $(".banner ul li").fadeOut(100).eq(index).fadeIn(100);
        });
        function right(){
            index++;
            if(index>len-1){
                index=0;
            }
            $(".banner ul li").fadeOut(100).eq(index).fadeIn(100);
            $(".banner .center .ccen img").attr("src","images/next&prev_others.png").eq(index).attr("src","images/next&prev_now.png")
        }
        //var timer=setInterval(right,3000);
        //$(".banner").hover(function(){
        //    clearInterval(timer);
        //},function(){
        //    timer=setInterval(right,3000);
        //});
    })();
})

