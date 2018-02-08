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
           console.log(data);
           var html='';
             html+=`<li>人数： <span>${data[0].pNum}</span></li>
                    <li>时间： <span>${data[0].timer}</span></li>
                    <li>联系人： <span>${data[0].con_name}</span></li>
                    <li>联系电话： <span>${data[0].phone}</span></li>`;
            $('.contact_confirm>.contact_info').html(html);
        });
   


})