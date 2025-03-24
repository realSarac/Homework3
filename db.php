<?php
$servername = "localhost";
$username = "root";  // اسم المستخدم لقاعدة البيانات
$password = "";  // كلمة مرور قاعدة البيانات 
$dbname = "Homework";  // اسم قاعدة البيانات
$conn = mysqli_connect ($servername , $username,$password ,$dbname) ;
if (!$conn){
die ("not connected-غير متصل" .mysqli_error());
}
?>
