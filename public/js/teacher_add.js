define(['jquery', 'util', 'template','datepicker','language'], function ($, util, template) {
    //  解析数据，渲染页面
    var tcId = util.qs('tc_id');
    // 由id是否存在判断是编辑操作还是添加操作
    if (tcId) {
        // 编辑操作
        $.ajax({
            type: "post",
            url: "/api/teacher/edit",
            dataType: "json",
            data: {
                tc_id: tcId
            },
            success: function (data) {
                if (data.code == 200) {
                    // console.log("成功");
                    data.result.operate = "编辑讲师";
                    var html = template("teacherTpl", data.result);
                    $("#teacherInfo").html(html);
                    submitForm("/api/teacher/edit");
                }
            },
            error: function () {
                console.log("请求失败");
            }
        })
    } else {
        // 添加操作
        var html = template("teacherTpl", {operate: "添加讲师"});
        $("#teacherInfo").html(html);
        submitForm("/api/teacher/add");
    }

    // 提交表单
    function submitForm(url) {
        $("#btn_addTeacher").on("click", function () {
            $.ajax({
                url: url,
                type: "post",
                dataType: "json",
                data: $("#teacher-addForm").serialize(),
                success: function (data) {
//                    console.log(data);
                    if (data.code == 200) {
                        location.href = "/teacher/list";
                    }
                },
                error: function () {
                    console.log("请求失败");
                }
            });
        });
    }

});