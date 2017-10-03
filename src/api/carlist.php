<?php
    include 'connect.php';



    $sql = 'select id,count(0) from car group by id';
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);


    $len = count($row);

    $arr = array();
    for($i=0;$i<$len;$i++){
        $id =  $row[$i]['id'];
        $sql1= 'select id,imgurl,title,weight,price from goodslist where id='.$id;
        $result1= $conn->query($sql1);
        $qty = $row[$i]['count(0)'];

        $row1 = $result1->fetch_all(MYSQLI_ASSOC)[0];
        $total = $qty*$row1['price'];
        $row1['qty']=$qty;
        $row1['total']=$total;
        $arr[]=$row1;

    };

        echo json_encode($arr,JSON_UNESCAPED_UNICODE);





?>