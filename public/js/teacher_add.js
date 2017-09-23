define(['jquery', 'util', 'template','validate','form','datepicker','language'], function ($, util, template,validate,form) {
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

    // 提交表单,采用表单验证和提交插件
    function submitForm(url) {
        $("#teacherAddForm").validate({
            sendForm: false,
            valid: function () {
                // console.log("success");
                $(this).ajaxSubmit({
                    type: "post",
                    url: url,
                    dataType: "json",
                    success: function (data) {
                        if(data.code == 200){
                            location.href = "/teacher/list";
                        }
                    }
                })
            },
            description: {
                tcName: {
                    required: "用户名不能为空"
                },
                tcPass: {
                    required: "密码不能为空",
                    pattern: "密码必须为6位数字"
                },
                tcJoinDate: {
                    required: "日期不能为空"
                }
            }
        })

       /* $("#btn_addTeacher").on("click", function () {
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
        });*/
    }

});