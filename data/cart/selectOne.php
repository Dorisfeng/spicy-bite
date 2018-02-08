<?php
require_once("../init.php");
@$checked=$_REQUEST["checked"];
@$sid=$_REQUEST["sid"];
if($sid!=null&&$checked!=null){
  $sql="update sb_shoppingcart  set is_checked=$checked where sid=$sid";
  mysqli_query($conn,$sql);
}