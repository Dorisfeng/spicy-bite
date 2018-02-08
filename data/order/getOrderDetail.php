<?php
require_once("../init.php");
session_start();
$user_id=$_SESSION['uid'];
$oid=$_REQUEST['oid'];
if($oid&&$user_id){

$sql="select od.count,ml.dish_name,ml.price from sb_order_detail as od where order_id=$oid inner join sb_menu_list as ml on did=dish_did ";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);
}