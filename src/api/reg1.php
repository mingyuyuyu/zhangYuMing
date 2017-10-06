<?php
    include 'connect.php';

    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $nickname = isset($_GET['nickname']) ? $_GET['nickname'] : '';

    //查看手机号是否已经存在
    if(isset($_GET['phone'])&&isset($_GET['nickname'])==false){
        $sql = "select phone from user where phone='$phone'";
        $result = $conn->query($sql);
        if($result->num_rows>0){
            echo "fail";
        }
    }
    else if(isset($_GET['nickname'])&&isset($_GET['phone'])==false){
        $sql = "select nickname from user where nickname='$nickname'";
        $result = $conn->query($sql);
        if($result->num_rows>0){
            echo "fail";
        }
    }





    $conn->close();
?>