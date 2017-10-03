<?php
    include 'connect.php';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';


    $sql = 'delete from car where id='.$id;
    $result = $conn->query($sql);

    echo $sql;

?>