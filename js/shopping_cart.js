$(()=>{
    loadCart();

    //日期时间
    // var nowDate=new Date();
   // console.log(nowDate);
    $('#datetimerpicker').datetimepicker({
         maxTime:'22:00',
         minTime:'10:00',
         validateOnBlur: true,  
         minDate:3,
         stepMinute:15,
         todayButton: false, 

         });
//svg浅色背景图片
    var c=$('#canvas-bg')[0];
    var ctx=c.getContext('2d');
    ctx.fillStyle="#BD2C31"
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(400,110);
    ctx.lineTo(400,390);
    ctx.lineTo(0,390);
    ctx.closePath();
    ctx.fill();

    var content=$(".sc-content-body");
    var chbAll=$(".check-top>img");
  // console.log(chbAll.attr('src'));
    chbAll.click(e=>{
        var checked=0;
        if($(e.target).attr('src').endsWith("normal.png")){
            checked=1;
        }
        $.get("data/cart/selectAll.php", "checked="+checked
        ).then(loadCart());
    })
    content.click(e=>{
        var $tar=$(e.target);
        if($tar.attr('class')=="chk"){
            var checked=0;
            if($tar.attr('src').endsWith("normal.png"))
                checked=1;
            $.ajax({
                type:"get",
                url:"data/cart/selectOne.php",
                data:"sid="+$tar.data('sid')+"&checked="+checked
            }).then(loadCart());
        }
    })

    function loadCart() {
        $.get("data/cart/getCart.php").then(data => {
     //  console.log(data);
        //     $(".log-aft .badge").html(data.length);
        //     console.log($(".log-aft .badge"));
            var html = '', total = 0, selected = 0, selectAll = true;
            for (var i = 0; i < data.length; i++) {
                html += `<div class="imfor">
                                <div class="check">
                                    <img class="chk" data-sid=${data[i].sid} src="${
                    data[i].is_checked=="1"?
                        "images/cart/product_true.png":
                        "images/cart/product_normal.png"
                    }" alt="">
                                </div>
                                <div class="product">
                                    <a href="#">
                                        <img src="${data[i].img}" alt="">
                                    </a>
                                    <span class="dish_name">
                                      <a href="#">${data[i].dish_name}</a>
                                    </span>
                                    <p ><span>份量：</span><span class="weight">${data[i].weight}</span>/份</p>
                                </div>
                                <div class="price">
                                        <b>￥</b>${data[i].price}
                                </div>
                                <div class="num">
                                    <span class="reduce">&nbsp;-&nbsp;</span>
                                    <input type="text" value="${data[i].num}" >
                                    <span class="add">&nbsp;+&nbsp;</span>
                                </div>
                                <div class="total-price">
                                    <span>￥</span>
                                    <span>${(data[i].price * data[i].num).toFixed(2)}</span>
                                </div>
                                   <div class="del">
                                    <a href="${data[i].sid}">删除</a>
                                </div>
                            </div>`;
                data[i].is_checked == "1" && (
                    selected++,
                    total=total+data[i].price * data[i].num );
                data[i].is_checked == "0" && (selectAll = false);
            }
            total = "¥" + total.toFixed(2);
            $(".sc-content-body").html(html);
            $(".totalPrices").html(total);
            $(".foot-price").html(total);
            $(".total").html(selected);
            $(".totalOne").html(selected);
         chbAll.attr("src",selectAll ? "images/cart/product_true.png" : "images/cart/product_normal.png");
            //数量变化+-
            $("div.num").click(e=>{
                e.preventDefault();
                var $tar=$(e.target);
                var sid=$tar.parent().parent().find(".chk").data("sid");
                var n = parseInt($tar.parent().children('input').val());
                if ($tar.attr("class") == "reduce") {
                    n--;
                }
                else if ($tar.attr("class") == "add") {
                    n++;
                }
                if(n>=1)
                    $.get("data/cart/updateCart.php",`sid=${sid}&num=${n}`)
                        .then(loadCart(),loadCartNum()  )
                else{
                    $.get("data/cart/deleteOne.php", `sid=${sid}`)
                        .then(loadCart(),loadCartNum() );
                }
            })


        })
    }
    $.get("data/user/is_login.php").then(data=>{
        if(data.ok==1) loadCart();
        else{
            alert("您还未登陆，请登录");
            $('#login-all').dialog("open");
        }

    });
    //删除当前列
    $(".sc-content-body").on("click","div.del>a",function(e){
        e.preventDefault();
        var $tar=$(e.target);
        var sid=$tar.attr('href');
        $.ajax({
            type:"get",
            url:"data/cart/deleteOne.php",
            data:`sid=${sid}`})
            .then(loadCart(),loadCartNum());
    });
//删除选中
    $("div.base>a").click(e=>{
        e.preventDefault();
    $.get("data/cart/deleteChecked.php").then(loadCart(),loadCartNum());
    });
    //去预订
var  totalPrice=0;
$('.toOrder').click((e)=>{
    e.preventDefault();
    totalPrice=parseFloat($('.foot-price').html().slice(1));
    // console.log($('.foot-price').html().slice(1));
 var pNum=$('.pNum').val(),
     timer=$('#datetimerpicker').val(),
     con_name=$('.con_name').val(),
    phone=$('.tel').val();
    if(pNum==''||timer==''||con_name==''||phone==''){
        alert('预订信息需要全部填写!');
    }else if(totalPrice<=0){
        alert('请选择预订的菜品！');
    }else{
        $.post("data/order/addOrder.php",`pNum=${pNum}&timer=${timer}&con_name=${con_name}&phone=${phone}`)
        .then(data=>{
            // console.log(data);
             var oid=data;
             $.get('data/cart/checkedDish.php').then(
                data=>{
                   for(var i in data){
            //将已选的菜单信息添加到订单详情
                    var did=data[i].did,count=data[i].num,sid=data[i].sid;
                  console.log('did'+did+',count'+count+',oid'+oid)
                    $.post('data/order/addOrderDetail.php',`order_id=${oid}&did=${did}&count=${count}`).then();
                       //加入订单的同时删除购物车
                    //   console.log('sid:'+sid);
                       console.log(oid);
                       $.post('data/cart/deleteOne.php',`sid=${sid}`).then(data=>{});
                    };
                   console.log(1);
                    location.href='orderConfirm.html?oid='+oid;
                })


        });
       
    




        
    }






})





})