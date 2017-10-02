<?php
    include 'connect.php';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    $qty = isset($_REQUEST['qty']) ? $_REQUEST['qty'] : '';

    $sql = 'delete from car where id=$id and qty=$qty';
    $result = $conn->query($sql);
    echo $result;

?>