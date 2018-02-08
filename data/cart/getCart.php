<?php
require_once("../init.php");
session_start();
@$user_id=$_SESSION["uid"];
//$uid=1;
if($user_id){
$sql="select sid,dish_id,dish_name,weight,price,num,is_checked,img,href from sb_shoppingcart inner join sb_menu_list on did=dish_id where user_id=$user_id";
$result=mysqli_query($conn,$sql);
if(mysqli_error($conn)) echo mysqli_error($conn);
$rows=mysqli_fetch_all($result,1);
echo json_encode($rows);
}