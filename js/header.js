$(()=> {


    loadCartNum();
    /* $.ajax({
         type:"get",
         url:"header.html"
          }).then(html=> {
         $("#header").html(html);
        // console.log($("#header"));*/
    $("#header").load("header.html", data => {
        // console.log(data);
        var $loginAll = $('#login-all'),
            $form = $("#login-all>.login"),
            $uname = $('[name=uname]'), $upwd = $("[name=upwd]"),
            $msg = $("#login-all p.login_msg");
        // console.log($loginAll);
        $loginAll.dialog({
            autoOpen: false,//不自动打开
            modal: true,//自己定义窗口样式
            show: {effect: "blind", duration: 1000},//打开动画
            hide: {effect: "explode", duration: 1000},//关闭动画
            buttons: {
                '登陆': () => {
                    if ($uname.val().trim() === "")
                        $msg.show().html("用户名不能为空！");
                    else if ($upwd.val().trim() === '')
                        $msg.show().html("密码不能为空！");
                    else {
                        // console.log($form.serialize());
                        $.ajax({
                            type: "post",
                            url: "data/user/login.php",
                            data: `uname=${$uname.val()}&upwd=${$upwd.val()}`,
                            // dataType: "json";
                        }).then(data => {
                            if (data.ok == 1) {
                                $loginAll.dialog("close");
                                location.reload(true);
                                loadCartNum();
                            } else {
                                $msg.html(data.msg).show();
                            }
                        })
                    }
                },
                "返回": () => {
                    $loginAll.dialog("close")
                },
            },
            close() {//以任何手段关闭对话框时，自动触发！
                //清空表单:
                $form[0].reset();
                $msg.html("").hide();
            }
        });
        $.ajax({
            type: "get",
            url: "data/user/is_login.php",
            dataType: "json",
        }).then(data => {
            //console.log(data.uname);
            var $log_bef = $("ul.log-bef"),
                $log_aft = $("ul.log-aft"),
                $welName = $("#welName");
            if (data.ok == 0) {
                //未登录
                $log_bef.css("display", "block");
                $log_aft.css("display", "none");
            } else {//已登录
                $log_bef.css("display", "none");
                $log_aft.css("display", "block");
                $welName.html("Welcome " + data["uname"]);
            }
        });
        $('#loginBtn').click(e => {
            //console.log(e.target);
            e.preventDefault();
            $loginAll.dialog("open");
        });
        var $logout = $("#logout");
        $logout.click(e => {
            $.ajax({
                type: "get",
                url: "data/user/logout.php",
            }).then(location.reload(true));
        })

        //加载页面，当前标题变色
        var str=location.pathname;
        var arr=str.split("\/");
        var addstr=arr[arr.length-1];
        var alist= $("#tList>li>a");
        for(var i=0;i<alist.length;i++){
            if(addstr==$(alist[i]).attr("href")){
                // console.log($(alist[i]));
                $(alist[i]).addClass('active');
            }
        }














    })

    $("#footer").load("footer.html", data => {
    });

})
//购物车商品数量
function loadCartNum() {
    $.get("data/cart/getCart.php").then(data => {
        var num=0;
        for(var i of data){
            num+=parseInt(i.num);
        }
        $(".log-aft .badge").html(num);
    })
}