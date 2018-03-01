<?php
require_once("../init.php");
$dish_id=$_REQUEST['dish_id'];
$num=$_REQUEST['num'];
session_start();
$user_id=$_SESSION['uid'];
//$uid=2;
if($user_id&&$num&&$dish_id){
	$sql="select * from sb_shoppingCart where user_id=$user_id and did=$dish_id";
	$result=mysqli_query($conn,$sql);
	var_dump($result);
	if(!mysqli_fetch_row($result)){
		$sql="insert into sb_shoppingCart values(null,$user_id,$dish_id,$num,0)";
	}else{
		$sql="update sb_shoppingCart set num=num+$num where user_id=$user_id and did=$dish_id";
	}
	mysqli_query($conn,$sql);
}
