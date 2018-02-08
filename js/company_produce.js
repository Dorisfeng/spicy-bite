$(() => {
    var tabs = $("[data-toggle=tab]");
    tabs.each((i, elem) => {
        $(elem).click((e) => {
            e.preventDefault();
            var $tar = $(elem);
            if ($tar.attr('class') != 'active') {
                $('.tab>li>a').attr("class", '');
                $tar.attr('class', 'active');
            }
            var id = $tar.attr("href");
           // console.log(id);
            var div = $(`${id}`);
            //时间轴
            var $c = $('.timer-line>canvas');
            $c.css({'position': 'absolute', "left": 0, "top": 0});
            var ctx = $c[0].getContext('2d');
            ctx.clearRect(0,0,1000,800);
            var timer3=null,i=0;
            if($(div).is('#history')){
                timeLine(ctx);
                timer3=setInterval(()=>{
                   $($(".timer-line div.year")[i]).css('opacity',1);
                     i++;
                    //console.log(i);
                     if(i>5){
                         clearInterval(timer3);
                         timer3=null;
                     }
                    if($('.tab-container .active')[0]!=$("#history")[0]){
                        clearInterval(timer3);
                        timer3=null;
                        $(".timer-line div.year").css("opacity",0);
                        i=0;
                    }
                    },3300);
            }
            var h = div.innerHeight();
           // console.log(h);
            $(".tab-container").css("height", h);
            if (div.attr("class") != "active") {
                //Step4: 修改元素
                //找到#container下class为active的一个div,直接清除其class属性
                $(".tab-container>.active").attr("class", '');
                //将当前div的class改为active
                div.attr("class", "active");
            }

        })
        //希望与愿景手风琴
        $(".accordion:has([data-toggle=collapse])")
            .on("click","[data-toggle=collapse]",function(e){
                e.preventDefault();
                var $title=$(this);
                //如果$title旁边的div是张开的
                if($title.next().is(".in")){
                    //就将$title旁边的div上滑
                    $title.next().removeClass("in");
                }else{//否则
                    //将$title旁边的div下滑
                    $title.next().addClass("in")
                    //再将$title旁边的div的兄弟中的其它.content上滑
                        .siblings(".content").removeClass("in")
                }
            })
    function timeLine(ctx){
         //时间轴
        var timer=null,timer1=null;
        ctx.beginPath();
        ctx.arc(500, 30, 22, 90 * Math.PI / 180, -270 * Math.PI / 180);
        ctx.fillStyle = '#fff';
        ctx.lineWidth=1;
        ctx.strokeStyle = '#A51C21';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(500, 30, 15, 0, 2 * Math.PI);
        ctx.fillStyle = '#A51C21';
        ctx.fill();
        //空心圆
        ctx.save();
        for (var i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.arc(500, 144 + i * 108, 15, 0, 2 * Math.PI);
            ctx.strokeStyle = '#A51C21';
            ctx.stroke();
        }
        ctx.restore();
        //线
        ctx.save();
        for (var i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.moveTo(500, 55 + i * 108);
            ctx.lineTo(500, 55 + i * 108 + 70);
            ctx.lineCap = "round";
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 8;
            ctx.stroke();
            ctx.restore();
        }

        var j = 0, l = 0,w=0;
         timer = setInterval(() => {
            ctx.beginPath();
             ctx.save();
            ctx.moveTo(500, 55 + j * 108);
            ctx.lineTo(500, 55 + j * 108 + l);
            ctx.lineCap = "round";
            ctx.strokeStyle = '#A51C21';
            ctx.lineWidth = 8;
            ctx.stroke();
            ctx.restore();
             //console.log(j);
            //横线
            l+=5;
            if (l >= 72) {
                l = 0;
               timer1= setInterval(()=>{
                    w+=5;
                   // console.log(w);
                   //console.log(j);
                    ctx.beginPath();
                    ctx.save();
                    ctx.lineWidth = 2;
                    ctx.moveTo(500 + 16 * ((j) % 2 == 0 ? 1 : -1), 144 + (j-1) * 108);
                    ctx.lineTo(500 + 16 * ((j) % 2 == 0 ? 1 : -1) + w * ((j) % 2 == 0 ? 1 :-1), 144 + (j-1) * 108);
                    ctx.lineCap = "round";
                    ctx.strokeStyle = '#A51C21';
                    ctx.stroke();
                    ctx.restore();
                    if(w>=45){
                        clearInterval(timer1);
                        timer1=null;
                    }
                },100)
                j++;
                w=0;
                if (j >=6 ) {
                    clearInterval(timer);timer=null;
                }
            }
             if($('.tab-container .active')[0]!=$("#history")[0]){
                // console.log(1);
                 clearInterval(timer);
                 timer=null;
            }
         }, 200);

        //实心圆
        for (i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.arc(500, 144 + i * 108, 10, 0, 2 * Math.PI);
            ctx.fillStyle = '#A51C21';
            ctx.fill();
        }

  }






    })


})