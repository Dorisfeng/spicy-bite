<?php
require_once('../init.php');
$order_id=$_REQUEST['order_id'];
$did=$_REQUEST['did'];
$count=$_REQUEST['count'];
if($order_id&&$did&&$count){
	$sql="insert into sb_order_detail values(null,$order_id,$did,$count)";
	$result=mysqli_query($conn, $sql);
	$oid=mysqli_insert_id($conn);
	echo ($order_id+"..."+$oid);
	}
