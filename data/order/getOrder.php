<?php
require_once("../init.php");
session_start();
$user_id=$_SESSION['uid'];
$oid=$_REQUEST['oid'];
 $sql="select pNum,timer,con_name,phone from sb_order where user_id=$user_id and oid=$oid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);