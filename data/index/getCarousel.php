<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  $sql="select * from sb_index_nav";
  echo json_encode(
    mysqli_fetch_all(
      mysqli_query($conn,$sql),1
    )
  );