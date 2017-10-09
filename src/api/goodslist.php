<?php
    include 'connect.php';



    $pageNo = isset($_REQUEST['pageNo']) ? $_REQUEST['pageNo'] : 1;
    $qty = isset($_REQUEST['qty']) ? $_REQUEST['qty'] : 3;
    
    if(isset($_REQUEST['up'])){
        $sql = 'select * from goodslist order by price ASC';
    }else if(isset($_REQUEST['xl']) || isset($_REQUEST['rq'])){
        $sql = 'select * from goodslist order by sele DESC';
    }else if(isset($_REQUEST['pj'])){
        $sql = 'select * from goodslist order by pingjia DESC';
    }else if(isset($_REQUEST['xp'])){
        $sql = 'select * from goodslist order by add_time DESC';
    }
    else if(isset($_REQUEST['gl'])){
        $sql = "select * from goodslist where global='true'";
    }
    else if(isset($_REQUEST['yh'])){
        $sql = "select * from goodslist where youhuo='you'";
    }
    else{
        $sql = 'select * from goodslist'; 
    }

    // // 编写查询sql语句
    // $sql = 'select * from goods';

    // 利用sql语句查询数据库
    $result = $conn->query($sql);

    // 使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    $res = array(
        'data' => array_slice($row,($pageNo-1)*$qty,$qty), 
        'total' => count($row),
        'pageNo' => $pageNo,
        'qty' => $qty
    );
    // var_dump ($res);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>