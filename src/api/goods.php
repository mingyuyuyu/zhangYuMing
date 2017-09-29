<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'mysql';


    $conn = new mysqli($servername,$username,$password,$database);

    // 检测连接
    if($conn->connect_errno){
        die('连接失败:'.$conn->connect_error);
    }

    // 设置字符集
    $conn->set_charset('utf8');

    // 编写查询sql语句
    $sql = 'select * from goods';

    // 利用sql语句查询数据库
    $result = $conn->query($sql);

    // 使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    

    echo json_encode($row,JSON_UNESCAPED_UNICODE)
?>