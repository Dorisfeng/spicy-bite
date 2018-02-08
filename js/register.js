$(()=> {
    var $txtCode = $(".register_form>p.vali_code>label input.txtCode");

    var $imgCode = $(".vali_code .imgCode");
    var $btn = $(".register>.register_form>.sub_btn>.submit");
    var ureg = /^[a-z0-9]{3,8}$/i;
    var yreg = /^[a-z0-9]{4}$/i;
    var preg=/^(\+86|0086)?\s*1[34578]\d{9}$/;
    //用户名验证
    $.validator.addMethod("uname",(value)=>{
        if(ureg.test(value))
            return true;
        else return false;
    },'3到8位数组或字母')
    //手机号码验证
    $.validator.addMethod("mobile", (value)=>{
        //value:会自动获得将来要验证的元素内容
        if (preg.test(value))
            return true;
        else return false;
    }, "手机号格式不正确!");
    $.validator.addMethod("valid_code", (value)=>{
        //value:会自动获得将来要验证的元素内容
        if (yreg.test(value))
            return true;
        else return false;
    }, "验证码格式不正确");
    /*获取验证码*/
    $imgCode.click(e=>{
        $(e.target).attr("src","data/user/00_yzm.php");
    })
    $(".register>.register_form").validate({
        //表单提交时自动触发,首先屏蔽表单默认的提交行为
        submitHandler(form){
            var data=`${$(form).serialize()}`;
           // console.log(data);
            $.ajax({
            type:"post",
            url:"data/user/user_add.php",
            data:data,
                // `${$(form).serialize()}+ucode=${$txtCode}`
          }).then(data=>{
                form.reset();
          alert("注册成功! 去登录");
          location.href="index.html";
          })
        },
        rules:{
            uname:{
                uname:true,
                remote:"data/user/register.php",
            },
            upwd1:{
                required:true,
                minlength:6,
                maxlength:8,
                digits:true,
            },
            upwd2:{ required:true, equalTo:"[name=upwd1]" ,},
            email:{ required:true, email:true,  },
            mobile:{
                mobile:true,
            },
            vali_code:{
                valid_code:true,
                remote:"data/code/chkCode.php",
            }
        },
        messages:{
            uname:{
                remote: "用户名已被占用!"
            },
            upwd2:{
                equalTo:"两次输入的密码不匹配!"
            },
            vali_code:{
                remote:"验证码错误!"
            }
        }
    })
})
