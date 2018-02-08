<?php
require_once("../init.php");
session_start();
$user_id=$_SESSION['uid'];
if($user_id){
	$sql="delete from sb_shoppingcart where user_id=$user_id and is_checked=1";
	mysqli_query($conn,$sql);
}