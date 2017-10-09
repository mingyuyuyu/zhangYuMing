<?php
    include 'connect.php';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    $delall = isset($_REQUEST['delall']) ? $_REQUEST['delall'] : '';

    $sql = 'delete from car where id='.$id;
    if(isset($_REQUEST['delall'])){
        $sql = 'delete from car';
    }
    $result = $conn->query($sql);

    echo $sql;

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>