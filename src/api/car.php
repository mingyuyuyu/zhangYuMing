<?php
    include 'connect.php';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '00001';

    $sql = 'select imgurl,title,weight,price from goodslist where id='.$id;
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);

    $imgurl =  $row[0]['imgurl'];
    $title = $row[0]['title'];
    $weight = $row[0]['weight'];
    $price = $row[0]['price'];
    $sql1 = "insert into car (id,imgurl,title,weight,price) values('$id','$imgurl','$title','$weight','$price')";
    $result1 = $conn->query($sql1);

        if ($result1) {
            echo "ok";
        } else {
            echo "Error: " . $sql1 . "<br>" . $conn->error;
        }
?>