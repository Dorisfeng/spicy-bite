<?php
//session_start();
require_once("../init.php");
//@$ucode=$_REQUEST['ucode'];
@$uname=$_REQUEST["uname"];
//if(strtolower($ucode)==strtolower($_SESSION["captcha"])){
//  echo  'true';
//}else{
// echo  'false';
//}
if($uname){
  $sql="select * from sb_user where uname='$uname'";
  $result=mysqli_query($conn,$sql);
  $rows=mysqli_fetch_row($result);
  if($rows)
    echo "false";
  else
    echo "true";
}