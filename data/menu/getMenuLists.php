<?php
   require_once("../init.php");
   @$varity_id=$_REQUEST['varity_id'];
   @$pageSize=$_REQUEST['pageSize'];
   @$pno=$_REQUEST["pno"];//当前页码
   if(!$pno) $pno=1;
   if(!$pageSize) $pageSize=4;//当前页显示的记录数
   $offset=($pno-1)*$pageSize;//当前页的第一行，偏移量
   $sql="select count(*) AS c from sb_menu_list  WHERE varity_id=$varity_id";
   $result=(mysqli_query($conn,$sql));
   $totalRecode=mysqli_fetch_assoc($result)["c"];
   $pageCount=ceil( $totalRecode/$pageSize);
   if($varity_id==1){
       $sql="SELECT dish_id,img,dish_name,price FROM sb_menu_list ORDER BY sold_count DESC LIMIT 4";
       echo json_encode(mysqli_fetch_all(mysqli_query($conn,$sql),1));
   }else{
    $sql=" SELECT dish_id,img,dish_name,price from sb_menu_list WHERE varity_id=$varity_id limit $offset,$pageSize";
    $result=mysqli_query($conn,$sql);
    if(mysqli_error($conn)) echo mysqli_error($conn);
    $rows=mysqli_fetch_all($result,1);
    $output=['pno'=>$pno,
            'totalRecode'=>$totalRecode,
             'pageSize'=>$pageSize,
             'pageCount'=>$pageCount,
             'data'=>$rows];
     echo json_encode($output);
   }