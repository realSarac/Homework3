<?php
$con = mysqli_connect("localhost", "root", "", "Homework");
if (!$con) {
    die("فشل الاتصال بقاعدة البيانات: " . mysqli_connect_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    if (empty($firstname) || empty($lastname) || empty($email) || empty($password)) {
        echo "جميع الحقول مطلوبة.";
    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $result = mysqli_query($con, "SELECT * FROM Users WHERE email = '$email'");
        if (mysqli_num_rows($result)) {
            echo "البريد الإلكتروني هذا مسجل بالفعل.";
        } else {
            if (mysqli_query($con, "INSERT INTO Users (firstname, lastname, email, password) VALUES ('$firstname', '$lastname', '$email', '$hashed_password')")) {
                echo "تم إنشاء الحساب بنجاح!";
            } else {
                echo "خطأ: " . mysqli_error($con);
            }
        }
    }
}
mysqli_close($con);
?>
