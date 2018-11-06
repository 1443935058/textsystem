/**
 * Created by Administrator on 2018/11/3 0003.
 */
$(function(){

    //滑轮滚动
    (function(){
        var hei=$(window).height()-50,
            vv=$(window).height(),
            index=0,
            lis=$(".header ul li"),
            len=$(".content_wrap .contents .content").length;

        $(".content_wrap .contents .content").css({height:hei});
        $(".content_wrap").css({height:hei});
        $(".welcome_wrap").css({height:vv});

        $(window).resize(function(){
            vv=$(window).height();
            hei=$(window).height()-50;
            hh=$(window).height()-50;
            $(".welcome_wrap").css({height:vv});
            $(".content_wrap .contents .content").css({height:hei});
            $(".content_wrap").css({height:hei});
        });
        //下面小圆点击事件
        $(".content_wrap .contents .welcome1 .donext").click(function(){
            index=1;
            $(".content_wrap .contents").animate({top:-index*hh})
        });
        lis.click(function(){
            index=$(this).index()+1;
            if(index==5){
                index=4
            }
            if(index<6){
                right()
            }
        });

        var right=function(){
            $(".content_wrap .contents").animate({top:-index*hei},function(){
                fa=1
            });
            if(index==0){

            }else if(index==4){
                lis.removeClass("now").eq(index-1).addClass("now");
                lis.eq(index).addClass("now")
            }else {
                lis.removeClass("now").eq(index-1).addClass("now");
            }
        };

        var fa=1;
        function scrDown(){
            if(fa==1){
                fa=0;
                index++;
                if(index>len-1){
                    index=len-1;
                }
                right();
            }
        }
        var fa=1;
        function scrUp(){
            if(fa==1){
                fa=0;
                index--;
                if(index<0){
                    index=0;
                }
                right();
            }
        }

        var scrol=function(e){
            e=e||window.event;
            if(e.wheelDelta){
                //alert(e.wheelDelta);
                //wheelDelta是谷歌和ie的
                if(e.wheelDelta>0){
                    scrUp();
                    //alert("向上滑动")
                }else{
                    //if(gg==1){
                    scrDown();
                    //}
                    // alert("向下滑动")
                }
                //向上120
                //向下-120
                /*ie的低版本把滚动对象放在了window.event
                 * 里面而不是形参e 里面
                 * 我们先判断 ，当前是否有形参e
                 * 如果有就直接用
                 * 没有就用window.event 代替它
                 */
            }else{
                //alert(e.detail);
                if(e.detail>0){
                    //if(gg==1){
                    scrDown();
                    //}
                    //alert("向下滑动")
                }else{
                    scrUp();
                    //alert("向上滑动")
                }
                //向上-3
                //向下3
            }
        };

        function addEvent(ele, type, listener) {
            if (ele.addEventListener) {
                ele.addEventListener(type, listener);
            } else {
                ele.attachEvent("on" + type, listener);
            }
        }

        // chrome   ie
        addEvent(window, "mousewheel", scrol);
// ff
        addEvent(window, "DOMMouseScroll", scrol);

    })();


    //头部蓝色小鸟消失事件
    (function(){
        $(".welcome_wrap").delay(4000).slideUp(function(){});
        setTimeout(function(){
            $(".welcome_wrap .welcome_content").animate({top:"40%"},400,function(){
                $(".welcome_wrap .pp").each(function(i){
                    setTimeout(function(){
                        $(".welcome_wrap .pp").eq(i).show().addClass("animated fadeInUp")
                    },i*200)
                })
            })
        },2000);
    })();

    //main3呼吸灯
    (function(){
        setInterval(function(){
            $(".content_wrap .contents .content3 .jia .ji").fadeIn(800).delay(600).fadeOut(600);
        },1600)
    })();

    //横向轮播图
    (function(){
        var width=$(".content_wrap .contents .content2 .gaisu").width();
        var len=$(".content_wrap .contents .content2 .gaisu").length;
        var hei=$(window).width();
        console.log(hei);
        console.log(width);
        var index=0;
        $(".content_wrap .gaishu_goright").click(function(){
            index++;
            if(index>len-1){
                index=len-1;
            }
            $(".content_wrap .content2 .welcome2").animate({left:-index*width})
        });
        $(".content_wrap .gaishu_goleft").click(function(){
            index--;
            if(index<0){
                index=0;
            }
            $(".content_wrap .content2 .welcome2").animate({left:-index*width})
        })
    })();

    //content4 点击事件来回换下面点击的颜色
    (function(){
        var width=$(".content_wrap .contents .content4 .yun_slidebox").width();
        console.log(width);
        var index=0;
        var left=$(".content_wrap .contents .content4 .btn_box .yunmove_btn_left"),
            right=$(".content_wrap .contents .content4 .btn_box .yunmove_btn_right"),
            len=$(".content_wrap .contents .content4 .yun_slidebox .yun_slider > div"),
            move=$(".content_wrap .contents .content4 .yun_slidebox .yun_slider");
        right.click(function(){
            index++;
            if(index>len-1){
                index=len-1;
            }
            var that=$(this);
            move.animate({left:-index*width});
            $(this).siblings().find("span").removeClass("now").animate({left:78},function(){
                that.find("span").addClass("now").animate({left:0});
            })
        });
        left.click(function(){
            index--;
            if(index<0){
                index=0;
            }
            var that=$(this);
            move.animate({left:-index*width});
            $(this).siblings().find("span").removeClass("now").animate({left:-78},function(){
                that.find("span").addClass("now").animate({left:0});
            })
        })
    })();
});