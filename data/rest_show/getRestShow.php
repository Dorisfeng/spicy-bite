<?php
require("../init.php");
$sql="select * from sb_restShow";
 echo json_encode(
    mysqli_fetch_all(
      mysqli_query($conn,$sql),1
    )
  );