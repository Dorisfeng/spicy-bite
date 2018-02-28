/**加载已勾选的购物车条目**/
$(()=>{
    var canvas=document.getElementById("canvas_gray");
    var cxt=canvas.getContext("2d");
    var gray = cxt.createLinearGradient (0, 38, 10, 38);
    gray.addColorStop(0, '#ddd');
    gray.addColorStop(1, '#e6e6e5');
    cxt.beginPath();
    cxt.fillStyle = gray;
    cxt.moveTo(20,19);
    cxt.lineTo(0,38);
    cxt.lineTo(0,0);
    cxt.fill();
    cxt.closePath();
    var canvas=document.getElementById("canvas_blue");
    var cxt=canvas.getContext("2d");
    var color = cxt.createLinearGradient (0, 38, 10, 38);
    color.addColorStop(0, '#A51C21');
    color.addColorStop(1, '#BD2C31');
    cxt.beginPath();
    cxt.fillStyle = color;
    cxt.moveTo(20,19);
    cxt.lineTo(0,38);
    cxt.lineTo(0,0);
    cxt.fill();
    cxt.closePath();
//预订信息
var oid=location.search.substr(5);

$.get("data/order/getOrder.php",`oid=${oid}`)
        .then(data=>{
          // console.log(data);
           var html='';
             html+=`<li>人数： <span>${data[0].pNum}</span></li>
                    <li>时间： <span>${data[0].timer}</span></li>
                    <li>联系人： <span>${data[0].con_name}</span></li>
                    <li>联系电话： <span>${data[0].phone}</span></li>`;
            $('.contact_confirm>.contact_info').html(html);
        });
$.get("data/order/getOrderDetail.php",`oid=${oid}`).then(data=>{
    console.log(data);
    var html='';
    var total=0,count=0;
    for(var item of data){
         html+=`<ul class="item_content">
                    <li class="p_info"> 
                   <img src="${item.img}">
                <b class="product_name ">${item.dish_name}</b>
                </li>
                    <li class="p_price">${item.price}(元)</li>
                    <li class="p_count">${item.count}</li>
                    <li class="p_tPrice">${parseFloat(item.count)*parseFloat(item.price)}</li>
                </ul>`;

            total+=parseFloat(item.count)*parseFloat(item.price);
            count+=parseFloat(item.count);
    }
    $('.pcount').html(count);
            $('.zj').html(total);
            $('.product_list').html(html);
   
}) 
            
   $('.go_pay').click((e)=>{
    var address=$('.user_address').val();
    var total=$('.zj').html();
   var time=new Date().toUTCString();
   console.log(time);
        if(address){
             console.log(oid,address);
            $.post("data/order/updateOrder.php",`oid=${oid}&status=1&address=${address}&time=${time}`).then(
               location.href=`payment.html?total=${total}&oid=${oid}`
                )
        }else{
            alert('请选择用餐地址');
        }
   
    })      
   
  


})