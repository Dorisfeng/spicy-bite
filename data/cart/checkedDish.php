<?php
session_start();
$user_id=$_SESSION['uid'];
require_once('../init.php');
$sql="select sid,did,num from sb_shoppingcart where user_id='$user_id' and is_checked=1";
$result=mysqli_query($conn, $sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);