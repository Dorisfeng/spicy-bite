<?php
require_once("../init.php");
session_start();
$user_id=$_SESSION['uid'];
//$uid=2;
$pNum=$_REQUEST['pNum'];
 $timer=$_REQUEST['timer'];
$con_name=$_REQUEST['con_name'];
$phone=$_REQUEST['phone'];
if($user_id&&$pNum&&$timer&&$con_name&&$phone){
 $sql="insert into sb_order values(null,'$user_id','$pNum','$timer','$con_name','$phone')";
$result=mysqli_query($conn,$sql);
$oid=mysqli_insert_id($conn);
echo $oid;
}
