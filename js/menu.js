$(()=>{
/*broad抖动图*/
    function shake(){
    var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    arr.sort((a,b)=>Math.random()<0.5?1:-1);
    arr.sort((a,b)=>Math.random()<0.5?1:-1);
    arr.sort((a,b)=>Math.random()<0.5?1:-1);
    //console.log(arr);
    var j=0;
    setInterval(()=>{
        $(`div.broad>div:eq(${arr[j++]})`).addClass("shake");
    },50);
      setTimeout(()=>{
        $("div.broad>div").removeClass("shake");
    },1500);
    }
    var timer=setInterval(shake,3000);
    $("div.broad").hover(
        ()=>{
          clearInterval(timer);
          timer=null;
        },
        ()=> {
          timer = setInterval(shake, 3000);
        }
    )
/*菜单标题*/
$.get("data/menu/getMenuVarity.php")
    .then(data=>{
        html="";
        for(var list of data){
            html+=`<li data-varity_id="${list.varity_id}">
                <a href="${list.href}" >${list.varity_name}</a></li>`;
        }
        //菜单种类翻牌效果
        $(".menu_main>.menu_title").html(html);
        $("ul.menu_title>li").hover(
            e=>{
                var $tar=$(e.target);
                $tar.addClass("change_img");
            },
            e=>{
                var $tar=$(e.target);
                $tar.removeClass("change_img");
            })
    })
$.get("data/menu/getMenuLists.php",'varity_id=1')
 .then(data=>{
     //首次加载
     loadMenuListPage(1,localStorage['pageSize']=4,1);
         //点击菜单类别查询对应的菜品
      $("div.menu_main>ul.menu_title").on("click","li a",function(e){
         e.preventDefault();
         var $tar = $(e.target);
         var varity_id = $tar.parent().data("varity_id");
         loadMenuListPage(1,localStorage['pageSize'],varity_id);
         $("ul.pages").on("click","li a",function(e){
             e.preventDefault();
             var pno=parseInt($(this).html());
             loadMenuListPage(pno,localStorage['pageSize'],varity_id)
         })
     });

      //分情况加载页面数据
     function loadMenuListPage(pno,pageSize,varity_id){
         $.get("data/menu/getMenuLists.php", 'pno=' + pno +"&pageSize="+pageSize+ "&varity_id=" + varity_id).then(output => {
                 html = '';
                 //黄牌菜销量前4
                 if (varity_id == 1) {
                     onloadList(output);
                   $("div.pages_list>ul.pages").html("");
                     $("div.pages_list>.form-group").html("");
                 } else {
                     //加载每个菜单信息
                     onloadList(output["data"]);
                     //不是黄牌菜的时候显示分页
                     var pageCount = parseInt(output["pageCount"]);
                     var pno = parseInt(output["pno"]);
                     html ="";
                     html+=`<label for="page-size">每页显示记录数：</label>
                            <select class="form-control" id="page-size">
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                        </select>`;
                     $(".form-group").html(html);
                     html ="";
                     if (pno - 2 > 0) html += `<li ><a href="#">${pno - 2}</a></li>`;
                     //上一页
                     if (pno - 1 > 0) html += `<li ><a href="#">${pno - 1}</a></li>`;
                     //当前页
                     html += `<li class="active"><a href="#">${pno}</a></li>`;
                     //下一页
                     if (pno + 1 <= pageCount) html += `<li><a href="#">${pno + 1}</a></li>`;
                     //下下页
                     if (pno + 2 <= pageCount) html += `<li><a href="#">${pno + 2}</a></li>`;
                     $("ul.pages").html(html);
                 }
                 if(!pageSize){
                     pageSize = 4;
                 }
                 var pageSize=localStorage['pageSize'];
                 $('#page-size').val(pageSize).change(function(){
                     localStorage['pageSize'] = $(this).val();
                     pageSize=$(this).val();
                     console.log()
                     loadMenuListPage(1,pageSize,varity_id)
                 })
             })
     }
     //菜单列表
     function onloadList(data) {
         for (var dish of data) {
             html += `<li data-dish_id=${dish.dish_id}>
                <div class="menu_pic">
                    <a href=""><img src="${dish.img}" alt="">
                    </a>
                     <span  class="fa fa-chevron-circle-up"  title="购物车" ></span>
                </div>
                <div class="menu_detail" data-dish_id="${dish.dish_id}">
                        <a href=""  class="dish_name">${dish.dish_name}</a>
                        <span class="price">¥${dish.price}</span>
                        <span class="reduce">-</span>
                        <input type="text" value="1" class="num">
                        <span class="add">+</span>
                        <button class="addCart">加入购物车</button>
                </div>
            </li>`;
         }
         /*购物车*/
         $("div.menu_main>ul.menu").html(html);
         var $toggle=$("div.menu_main>ul.menu>li>.menu_pic>span.fa");
         $toggle.click(e=>{
             if($(e.target).parent().next().css("visibility")=="hidden" ){
                 $(e.target).parent().next().css("visibility","visible");
                 $(e.target).css("bottom",50);
                 $(e.target).addClass(" fa-chevron-circle-down");
             }else{
                 $(e.target).parent().next().css("visibility","hidden");
                 $(e.target).css("bottom",0);
                 $(e.target).removeClass(" fa-chevron-circle-down");
             }
         })
         //加入购物车
        $(".menu_detail").click(e=>{
            var $tar = $(e.target);
            if ($tar.attr("class").match(/add|reduce|addCart/i)){
                if($tar.attr("class")!='addCart'){
                    if($tar.attr("class")=='add'){
                        var n = parseInt($tar.prev().val());
                        n++;
                        $tar.prev().val(n);
                    }else{
                        var n = parseInt($tar.next().val());
                        n = n > 1 ? n - 1 : 1;
                        $tar.next().val(n);
                    }

                }else {
                    $.get("data/user/is_login.php").then((data)=> {
                        if (data.ok == 0) {
                            alert("您还未登录，请登录");
                            $('#login-all').dialog("open");
                        }else{
                            var dish_id = $tar.parent().data("dish_id");
                           // console.log(dish_id);
                            var num=parseInt($(".num").val());
                            $.get("data/cart/addCart.php",`dish_id=${dish_id}&num=${num}`)
                                .then(loadCartNum())
                        }
                    })
                }
            }
        })
     }
 })



















})