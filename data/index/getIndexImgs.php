<?php
  require_once("../init.php");
  $sql="select * from sb_imgs limit 8";
  echo json_encode(
    mysqli_fetch_all(
      mysqli_query($conn,$sql),1
    )
  );