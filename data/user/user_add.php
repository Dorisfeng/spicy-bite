<?php
@$n = $_REQUEST['uname.trim()'];
if($n===null || $n===""){ die("uname required");}
@$p = $_REQUEST['upwd1'];
if($p===null || $p===""){ die("upwd required"); }
@$e = $_REQUEST['email'];
@$h = $_REQUEST['mobile'];
if($h===null || $h===""){ die("phone required"); }
@$h = $_REQUEST['mobile'];
@$h = $_REQUEST['mobile'];
if($h===null || $h===""){ die("phone required"); }
require("../init.php");
$sql = "INSERT INTO sb_user VALUES('','$n','$p','$e','$h','','','')";
$result = mysqli_query($conn, $sql);
echo "true";
?>