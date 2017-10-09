<?php
    include 'connect.php';
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $sql1 = "insert into username (username) values('$username')";
    $result1 = $conn->query($sql1);


    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>