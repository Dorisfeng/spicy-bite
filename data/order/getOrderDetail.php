<?php
require_once("../init.php");
// session_start();
// $user_id=$_SESSION['uid'];
$oid=$_REQUEST['oid'];
if($oid){
$sql="select od.count,ml.dish_name,ml.img,ml.price from sb_order_detail as od ,sb_menu_list as ml where did=dish_id and od.order_id=$oid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);
}