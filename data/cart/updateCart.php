<?php
//data/cart/updateCart.php
require_once("../init.php");
@$sid=$_REQUEST["sid"];
@$num=$_REQUEST["num"];
if($sid){
  if($num>0){
    $sql="update sb_shoppingcart set num=$num where sid=$sid";
    mysqli_query($conn,$sql);
  }else{
    $sql="delete from sb_shoppingcart  where sid=$sid";
    mysqli_query($conn,$sql);
  }
}