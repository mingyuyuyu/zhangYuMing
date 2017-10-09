<?php
    include 'connect.php';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    $qty = isset($_REQUEST['qty']) ? $_REQUEST['qty'] : '';

    $sql = 'delete from car where id='.$id.' and qty='.$qty;
    $result = $conn->query($sql);

    echo $sql;


    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>