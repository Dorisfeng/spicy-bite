
$(()=>{

    //加载轮播图片
    setTimeout(()=> {
        var $logo=$("#banner>.logo");
        $logo.css({height:0,});
        const LIWIDTH = 1000;
        $.get("data/index/getCarousel.php")
            .then(data => {
                    var html = "";
                    for (var img of data) {
                        html += `<li>
                          <a href="${img.href}" title="${img.title}">
                            <img src="${img.img}">
                          </a>
                        </li>`;
                }
                html += `<li>
                    <a href="${data[0].href}" title="${data[0].title}">
                      <img src="${data[0].img}">
                    </a>
                     </li>`;
                var $ul = $(".banner-img");
                $ul.html(html)
                    .css("width", LIWIDTH * (data.length + 1));
                var $ids = $(".indicators");
                $ids.html("<li></li>".repeat(data.length))
                    .children().first().addClass("hover");
                const WAIT = 4000, DURA = 800;
                var moved = 0, timer = null;
                function move(dir = 1) {
                    moved += dir;
                    $ul.animate({
                        left: -LIWIDTH * moved
                    }, DURA, () => {
                        if (moved == data.length) {
                            $ul.css("left", 0);
                            moved = 0;
                        }
                       // console.log( moved);
                        $ids.children(":eq(" + moved + ")")
                            .addClass("hover")
                            .siblings().removeClass("hover")
                    })
                }
                var timer = setInterval(move, WAIT);
                $("#banner").hover(
                    () => {
                        clearInterval(timer);
                        timer = null;
                    },
                    () => {
                        timer = setInterval(move, WAIT);
                    }
                );
                $("[data-move=right]").click(() => {
                    if (!$ul.is(":animated"))
                        move();
                });
                $("[data-move=left]").click(() => {
                    if (!$ul.is(":animated")) {
                        if (moved == 0) {
                            $ul.css("left", -LIWIDTH * data.length);
                            moved = data.length;
                        }
                        move(-1);
                    }
                })
                $ids.on("mouseover", "li", function () {
                    var $li = $(this);
                    var i = $li.index();
                    moved = i;
                    $ul.stop(true).animate({
                        left: -LIWIDTH * moved
                    }, DURA, () => {
                        $ids.children(":eq(" + i + ")")
                            .addClass("hover")
                            .siblings().removeClass("hover");
                    })
                });
            })
    },4000)

//logo圆环
    //创建圆形
    var logo_cir=document.getElementById("logo_cir");
  var ctx=logo_cir.getContext("2d");
    ctx.lineWidth = 5;
    var start = -90;  //启始角度
    var end = -90;    //结束角度
    var timer = setInterval(function(){
        ctx.beginPath();//开始新路径
        ctx.arc(75,75,70,start*Math.PI/180,end*Math.PI/180);       //画圆
        end += 5;       //修改结束角度
        ctx.strokeStyle = "#A51C21";
        ctx.stroke();
        if(end>270){clearInterval(timer)}
    },50);

    //图片替换.
   $.get("data/index/getIndexImgs.php")
        .then(data=>{
            //console.log(data);
            //欢迎
            html="";
            html+=`<div class="wel_msg">
                <h1>欢迎来到Spicy Bite</h1>
                <h3>吃出艺术，品味人生</h3>
                <p>Spicy Bite提供烤海鲜、烤鸡肉、烤猪肉及汉堡等多种主题选择，
                同时搭配免费赠送多达50多种选择的汤品、新鲜水果、意大利面及混合沙拉,给您带来与众不同的“尽情享用、自由选择”的体验。</p>
                <button >查看更多</button>
             </div>
              <!--弹窗-->
            <div class=" img_fixed">
                <button>x</button>
                <img src="${data[0].img}" alt="">
                <h1>Spicy Bite</h1>
                <img src="${data[2].img}" alt="">
                <h3>	每一口都是美味体验</h3>
                <p> Spicy Bite以热情微笑的服务及洁净舒适的环境接待广大顾客，在美国、澳大利亚、日本、泰国和中国拥有300余家餐厅，口碑享誉全球</p>
            </div>
            <div class="black_overlay"></div>
        </div>`;
        $(".wel_sb").html(html);
        /*欢迎查看更多弹窗*/
        var $show_btn=$(" div.wel_msg button:last-child");
        var $hid_btn=$(" div.img_fixed button");
        $show_btn.click(e=>{
            $tar=$(e.target);
            $tar.parent().next().css("top",40);
            $tar.parent().next().next().css('display','block');

        })
        $hid_btn.click(e=>{
            //  console.log(hid_btn);
            $tar=$(e.target);
            $tar.parent().css("top",-550);
            $tar.parent().next().css('display','none');
        })
        // <!--热门推荐-->
        html=`<img src="${data[3].img}" alt="">
            <div class="hot-nav">
            <div class="dish">
            <div><img src="${data[4].img}" alt=""></div>
            <div>
            <img src="${data[6].img}" alt="">
            <p>时时乐选用优质澳洲进口谷饲牛肉为食材原料谷饲牛用谷物饲养达到一定天数，其肉质比草饲牛肉更鲜嫩多汁。 时时乐牛排均未经腌制，最大限度保留了牛肉的原始风味，采用高温瞬间锁水的烤制方法，最大程度 保留牛肉水分的同时去掉多余的油脂，保留了牛肉鲜嫩多汁的口感，是牛肉爱好者不容错过的选择！
            </p>
         </div>
        </div>
        <div class="dish ">
            <div>
            <img src="${data[5].img}" alt=""></div>
            <div>
            <img src="${data[7].img}" alt="">
            <p>从天然深海中捕获后即刻配送
        每咬一口、每次品尝，海鲜系列菜品都会为您带来
        时时乐的经典味道。不论是新鲜的三文鱼、烤鱼排、
                    还是多汁的整只大虾，总有一款海鲜主菜适合您
        </p></div></div></div>`;
        $("#hot-dishes").html(html);
        /*推荐动画*/
        window.onscroll=function() {
            var scrollTop =
                document.documentElement.scrollTop
                || document.body.scrollTop;
            ////回到顶部
            if(scrollTop>=100)
                $(".totop").css("display",'block');
            else
                $(".totop").css("display",'none');
            var $hots = $("#hot-dishes>.hot-nav");
            //console.log($hots[0]);
            if (scrollTop >= 500) {
                $hots.children(":eq(0)").css('left',0);//style.left = "0px";
                $hots.children(":eq(1)").css('right',0);//style.right = "0px";
            }
            else{
                $hots.children(":eq(0)").css('left',-1000);//style.left = "-1000px";
                $hots.children(":eq(1)").css('right',-1000);//style.right = "-1000px";
            }
        }

//楼层滚动
       var $lift=$(".lift");
        $(window).scroll(()=> {
            var scrollTop = $('html,body').scrollTop();
            var $f1 = $(".wel_sb");
            var offsetTop=$f1.offset().top;
            if (offsetTop< scrollTop + innerHeight / 2)
                $lift.fadeIn(500);
            else
                $lift.fadeOut(500);
            var $floors = $(".floors").children();
            $floors.each((i, elem) => {
                var $f = $(elem);
                if ($f.offset().top < scrollTop + innerHeight / 2)
                    $lift.find(".lift_item:eq(" + i + ")")
                        .addClass("hover")
                        .siblings().removeClass("hover");
            })
        })
                //楼层滚动点击事件
                $lift.children("ul").on("click","li",function(){
                    var $li = $(this);
                    var i = $li.index();
                    var $fi = $(".floor:eq(" +i+ ")");
                    var offsetTop = $fi.offset().top;
                    $("html").animate({
                        scrollTop: offsetTop-10
                    }, 500)
                })


        })
//加入我们
    $(".js_btn").click(function(e){
        e.preventDefault();
        $(this).parent().parent().next().css({'width':1000,'left':0});
        $(".contact_main").animate({"opacity":1},3000);
    var s3 = document.getElementById("can_circle");
        //1:动态创建30个圆
        function circle(){
                for(var i=0;i<50;i++) {
                        //2:创建圆形
                        var c = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "circle");
                        c.setAttribute("r", rn(10, 80));
                        c.setAttribute("cx", rn(0, 1000));
                        c.setAttribute("cy", rn(0, 420));
                        c.setAttribute("fill", rc(0, 255));
                        c.setAttribute("fill-opacity", 0.3)
                        //9:将圆形追加为画布最后一个子元素
                        s3.appendChild(c);
                    }
        //启动定时器，让圆慢慢变大，变淡
        $("#can_circle>circle").each(function(){
          var that=this;
              var t1 = setInterval(function (){
                    var r = that.getAttribute("r");//获取当前圆半径
                    r *= 1.15;//变大
                    that.setAttribute("r", r);
                    var p = that.getAttribute("fill-opacity");
                    p *= 0.8;//变淡
                    that.setAttribute("fill-opacity", p);
                    if (p < 0.01) {
                        clearInterval(t1);
                        t1=null;
                        s3.removeChild(that);//删除指定图形
                    }
              },100)
        })
        }
       var t2= setInterval(circle,2500);
        $("div.join_us>div.contact button").click(function(){
            var that=this;
            $(".contact").css({'width':0,'left':500});
            $(".contact_main").stop();
            $(".contact_main").css("opacity",0);
            clearInterval(t2);
            t2=null;

        })
    })

    function rn(min,max){
        var r = Math.random()*(max-min)+min;
        return Math.floor(r);
    } //返回随机数值
    function rc(min,max){
        var r = rn(min,max);
        var g = rn(min,max);
        var b = rn(min,max);
        return `rgb(${r},${g},${b})`;
    } //返回随机颜色
})