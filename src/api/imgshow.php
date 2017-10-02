<?php
    include 'connect.php';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';


    $sql = 'select * from goodsimg where id='.$id;
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE)
?>
