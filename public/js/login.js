define(['jquery','cookie'],function ($) {

    $("#btn_login").on("click",function () {
        $.ajax({
            type: "post",
            url: "/api/login",
            data: $("#loginForm").serialize(),
            dataType: "json",
            success: function (data) {
                console.log(data);
                if(data.code == 200){
                    // 登录成功
                    // 保存用户信息
                    $.cookie("per_info",JSON.stringify(data.result),{
                        // expires: 1,
                        path: "/"
                    });
                    location.href = "/main/index";
                }
            },
            error: function () {
//                    location.href = "/main/index";
                console.log("请求错误");
            }

        });
        return false;
    });
});