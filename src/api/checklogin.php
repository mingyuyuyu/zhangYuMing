<?php
    include 'connect.php';
    $out = isset($_REQUEST['out']) ? $_REQUEST['out'] : '';
    if(isset($_REQUEST['out'])){
        $sql = "delete from username";
        $result = $conn->query($sql);
    }else{
        $sql = "select * from username";
        $result = $conn->query($sql);
        $row = $result->fetch_row();

        if($row[0]){
            echo $row[0];
        }else{
            echo 'fail';
        }
    }


    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>