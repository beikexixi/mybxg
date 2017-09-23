define(['jquery','template'],function ($,template) {

    $.ajax({
        type: "get",
        url: '/api/teacher/profile',
        success: function (data) {
            if(data.code == 200){
                var html = template("settingTpl",data.result);
                $(".settings").html(html);
            }
        },
        error: function () {
            console.log("请求失败");
        }
    })
});