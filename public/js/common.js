define(['jquery','cookie'],function ($) {

    // NProgress.start();
    //
    // NProgress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });


// 退出按钮,点击退出，跳转到登录页面
    $("#logoutBtn").on("click", function () {
        $.ajax({
            url: "/api/logout",
            type: "post",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                if (data.code == 200) {
                    location.href = "/main/login";
                }
            },
            error: function () {
                console.log("请求失败");
            }
        });
    });

// 如果用户打开页面，没有登录，跳转到登录页面
    if (!$.cookie("PHPSESSID") && location.pathname == "main/index") {
        location.href = "/main/login";
    }

// 设置用户头部信息
    console.log($.cookie("per_info"));
    var loginInfo = $.cookie("per_info");
    var infoObj = loginInfo && JSON.parse(loginInfo);
    $("#per_info img").attr("src",infoObj.tc_avatar);
    $("#per_info >h4").html(infoObj.tc_name);
});




