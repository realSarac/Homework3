<?php
session_start(); // لبدء جلسة للمستخدم
$con = mysqli_connect("localhost", "root", "", "Homework");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // البحث عن المستخدم
    $result = mysqli_query($con, "SELECT * FROM Users WHERE email = '$email'");
    if (mysqli_num_rows($result) == 1) {
        $user = mysqli_fetch_assoc($result);
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['firstname']; // حفظ اسم المستخدم مثلاً
            echo "تم تسجيل الدخول بنجاح!";
            // header("Location: home.php"); // إعادة توجيه لصفحة المستخدم
        } else {
            echo "كلمة المرور غير صحيحة.";
        }
    } else {
        echo "البريد الإلكتروني غير مسجل.";
    }
}
?>
