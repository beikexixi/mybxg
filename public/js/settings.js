define(['jquery','template','uploadify','region'],function ($,template) {

    $.ajax({
        type: "get",
        url: '/api/teacher/profile',
        success: function (data) {
            if(data.code == 200){
                var html = template("settingTpl",data.result);
                $(".settings").html(html);
                // 处理头像上传
                $("#upfile").uploadify({
                    width: 120,
                    height: 120,
                    // buttonText: '',
                    // itemTemplate: '<span></span>',  // 进度条
                    swf : '/public/assets/uploadify/uploadify.swf', //  swf 为 uploadify.swf 文件的路径
                    uploader : '/api/uploader/avatar', // uploader 为 后台处理程序的路径
                    fileObjName : 'tc_avatar',
                    onUploadSuccess : function(a,b){
                        console.log(b);
                        var obj = JSON.parse(b);
                        $('.preview img').attr('src',obj.result.path);
                    }
                })
                // 处理省市县三级联动
                $("#pcd").region({
                    url: '/public/assets/jquery-region/region.json',
                })
            }
        },
        error: function () {
            console.log("请求失败");
        }
    })
});