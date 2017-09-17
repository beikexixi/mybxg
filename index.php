<?php
 // 后端路由(根据url的不同响应不同的页面)

 // 默认目录名称
 $dir = 'main';
 // 默认文件名称
 $filename = 'index';

 if(array_key_exists('PATH_INFO',$_SERVER)){
    // PATH_INFO属性存在
    // 获取请求路径
    $path = $_SERVER['PATH_INFO'];
    // 去掉第一个斜杠
    $str = substr($path,1);
    // 字符串分割，和js中split方法很像
    $ret = explode('/',$str);
//    var_dump($ret);
    if(count($ret)==2){
        $dir = $ret[0]; //覆盖目录
        $filename = $ret[1]; //覆盖文件名称
    }else{
    //其他情况全部跳转到登录页面
    $filename = 'login';
    }
 }

 include('./views/'.$dir.'/'.$filename.'.html');
?>
