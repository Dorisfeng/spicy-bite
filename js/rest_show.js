$(()=>{
    $.get('data/rest_show/getRestShow.php').then((data)=>{
        //console.log(data);
        var html='';
        for(var i=0;i<data.length;i++){
            html+=`<div class="${data[i].shape}">
            <svg class="desc"></svg>
            <a href="${data[i].href}"><img  src="${data[i].img}" alt="" class="grid_img"></a>
            <p>${data[i].title}</p>
        </div>`
        }
      html+=`<div class="black_overlay"></div>
        <div class="big_show">
        </div>`;
        $('.grid').html(html);
        var $grid=$('.grid'),
            gridItem=$(".grid-item");
        $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth:190,
            isAnimated: true,
            gutter: 10,
            fitWidth: true
        });
        $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });
        //页面加载出现时的效果
        gridItem.each((i,elem)=> {
            // setTimeout(
            function show_grid() {
                var $elem = $(elem);
                var w = $elem.width() - 1;
                var h = $elem.height() - 1;
                var path = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path");
                path.setAttribute("fill-opacity", 0);
                path.setAttribute("stroke-width", 2);
                path.setAttribute("stroke", "#666");
                path.setAttribute("stroke-linecap", "round");
                path.setAttribute("d", `M 2 2 L${w} 2 L${w} ${h} L2 ${h} Z`);
                path.setAttribute("position", "absolute");
                $elem.children("svg.desc").append(path);
                setTimeout(
                    function () {
                        $(elem).find(".grid_img").animate({
                                width: $(elem).width(),
                                height: $(elem).height(),
                                top: 0,
                                left: 0,
                            }, 1000,
                            function () {
                                //动画完成后 文字描述
                                $elem.find("path").remove();
                                gridItem.hover(
                                    function () {
                                        $(this).children("p").css("opacity", 1)
                                    },
                                    function () {
                                        $(this).children("p").css("opacity", 0)
                                    },
                                )
                            }
                        )
                    },i*100+500)
            }
            setInterval(show_grid(),i*1800);
        })
//图片的点击事件
        $(".grid-item>a").on("click",(e)=>{
            $tar=$(e.target);
            if($tar.is("a")){
                e.preventDefault();
            }else if($tar.is("img")){
                e.preventDefault();
                var src=$tar.attr("src");
                var next=$tar.parent().parent().next().find(".grid_img").attr("src");
                $(".grid .big_show").css("top",20);
                $(".grid>.black_overlay").css('display','block');
                $(".big_show").css("background",` #eee url(${src}) center center no-repeat `);
                //  //旋转效果
                //  $(".big_show>div").css("background-image",`url(${src})`);
                //  // $(".big_show>div").css("transform",`rotateX(180deg)`);
                //  //setTimeout(()=>{
                //      $(".grid .big_show>img").css("display","none");
                //      $(".big_show>div").each(function(i,elem){
                //          if(i<5) {
                //              $(elem).addClass('rot_l');
                //              $(elem).css({"animation-delay":`${i%5*0.1}s`,
                //              });
                //          }
                //          else {
                //              $(elem).addClass('rot_r');
                //              $(elem).css({"animation-delay":`${i%5*0.1}s`,
                //
                //              });
                //          }
                //        // setTimeout(()=>{
                //           //  $(".big_show>div").css("background-position",``);
                //              //$(".big_show>div").css("transform",`rotateZ(180deg)`);
                //         $(".big_show>div").css("background-image",`url(${next})`);
                //
                //        // },2300)
                //      })
                //
                // // },2000)
                var   container=$('.big_show ');
                var containerHeight	= parseInt(container.height())/100;
                var containerWidth	= parseInt(container.width())/100;
                var blockCount			= (containerHeight * containerWidth);
                for(var x = 1; x <= blockCount; x++) {
                    container.append('<div class="block1"></div>');
                }
                $('.big_show>div').addClass('black');
                var stack = {
                    'delay': 250,
                    'actions': [],
                    'run': function() {
                        if (stack.actions.length) {
                            stack.actions.shift()();
                            setTimeout(stack.run, stack.delay)
                        }
                    }
                };

                $('.big_show div').each(function(i,elem){
                    var arr=["tb","bt","lr","rl"];
                    var t=arr[Math.round(Math.random()*4)];
                    var that = elem;
                    stack.actions.push(function(){
                        $(that).flip({
                            color: '#ffffff',
                            speed: 170,
                            direction:t,
                            onBefore:function(){

                            },
                            onAnimation:function(){

                            },
                            onEnd: function() {
                                $(that).removeClass('black');
                            }
                        });
                    });
                });
                stack.run();


            }
            //点击空白区域关闭弹框
            if( $(".grid>.black_overlay").css('display')=="block"){
                $(document).mouseup(function(e){
                    var _con = $(' .grid .big_show ');   // 设置目标区域
                    if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                        $(".grid .big_show").css("top",-650);
                        $(".grid>.black_overlay").css('display',"none");
                        $('.big_show').children().remove();//去掉翻页动画
                    }
                })
            }
        })
  })
})