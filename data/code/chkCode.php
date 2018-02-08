<?php
@$code=$_REQUEST["vali_code"];
session_start();
if(strtolower($code)==strtolower($_SESSION["captcha"])){
  echo "true";
}else{
  echo "false";
}