define(['jquery', 'template','bootstrap'], function ($, template) {
    $(function () {

        // 渲染列表
        init();
        // 启用注销功能
        enableToggle();
        // 查看讲师
        getTeacherInfo();

        // 根据后台数据，得到其年龄
        template.defaults.imports.get = function () {
            return {
                $: jQuery,
                Math: window.Math,
                Date: window.Date,
                String: window.String
            }
        }
        /* template.helper("get",function () {
             return {
                 $: jQuery,
                 Math: window.Math,
                 Date: window.Date,
                 String: window.String
             }
         });*/

    });

    // 渲染列表
    function init() {
        // 调用接口获取所有的讲师数据
        $.ajax({
            url: "/api/teacher",
            type: "get",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                var html = template("teacher_info", data);
                $(".teacher-list").find("tbody").html(html);
            },
            error: function () {
                console.log("请求失败");
            }
        });
    }

    // 启用注销功能
    function enableToggle() {
        $(".teacher-list").find("tbody").on("click", ".eor", function () {
            var that = this;
            // console.log(that);
            var id = $(that).prev().attr("id");
            var status = $(that).parent().attr("data-status");
            $.ajax({
                type: "post",
                url: "/api/teacher/handle",
                data: {
                    tc_id: id,
                    tc_status: status
                },
                success: function (data) {
                    if(data.code == 200){
                        $(that).parent().attr("data-status",data.result.tc_status);
                        var html = data.result.tc_status ==0?"注销":"启用";
                        $(that).html(html);
                    }
                },
                error: function () {
                    console.log("请求错误");
                }
            })
        })
    }

    // 查看讲师
    function getTeacherInfo() {
        $(".teacher-list").find("tbody").on("click", ".preview", function () {
            var that = this;
            console.log(that);
            var teacherId = $(that).parent().attr("data-teacherId");
            $.ajax({
               type: "get",
                url: "/api/teacher/view",
                data: {
                   tc_id: teacherId
                },
                success: function (data) {
                    // console.log("成功");
                    var html = template("teacherTpl",data.result);
                    $("#modalInfo").html(html);
                    $("#teacherModal").modal();
                },
                error: function () {
                    console.log("请求失败");
                }
            });
        });
    }
});