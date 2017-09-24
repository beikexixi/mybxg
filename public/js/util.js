
define(['jquery'],function ($) {
    return {
        qs: function (key) {
            // 获取Url中指定的参数值
            var param = location.search.substr(1);
            var result = null;
            if(param) {
                // 最好先判断一下是否存在param，更严谨
                var arr = param.split("&");
                $.each(arr, function (i, item) {
                    var kv = item.split("=");
                    if (kv[0] == key) {
                        result = kv[1];
                        return false;
                    }
                });
            }
            return result;
        }
    }
});