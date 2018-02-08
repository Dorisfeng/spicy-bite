<?php
require_once("../init.php");
@$checked=$_REQUEST["checked"];
session_start();
@$user_id=$_SESSION["uid"];
if($checked!=null){
  $sql="update sb_shoppingcart set is_checked=$checked where user_id=$user_id";
  mysqli_query($conn,$sql);
}