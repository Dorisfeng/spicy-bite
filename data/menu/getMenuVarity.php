<?php
require_once("../init.php");
$sql="SELECT * FROM sb_menu_varity" ;
echo json_encode(
     mysqli_fetch_all(
    mysqli_query($conn,$sql),1));
?>
