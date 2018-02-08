<?php
require_once("../init.php");
session_start();
$user_id=$_SESSION['uid'];
$sid=$_REQUEST['sid'];
if($user_id&&$sid){
	$sql="delete from sb_shoppingcart where user_id=$user_id and sid=$sid";
	mysqli_query($conn,$sql);
}