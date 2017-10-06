<?php
    include 'connect.php';
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $sql1 = "insert into username (username) values('$username')";
    $result1 = $conn->query($sql1);
?>