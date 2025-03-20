 <script>
        // دالة للتحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
        function checkPasswordMatch() {
            let password = document.getElementById('password').value; // الحصول على قيمة كلمة المرور
            let confirmPassword = document.getElementById('confirmPassword').value; // الحصول على قيمة تأكيد كلمة المرور
            let errorMessage = document.getElementById('error-message'); // الحصول على عنصر الرسالة لعرض الخطأ
          
		  // إذا كانت كلمةالمرور وتأكيد كلمة المرور غير متطابقتين وكان حقل تأكيد كلمة المرور غير فارغ
            if (password !== confirmPassword && confirmPassword.length > 0) {
                errorMessage.textContent = "كلمتا المرور غير متطابقتين"; // عرض رسالة الخطأ
                errorMessage.style.color = "red"; // تغيير لون الخط إلى الأحمر
            } else {
                errorMessage.textContent = ""; // مسح رسالة الخطأ في حال كانت كلمتا المرور متطابقتين
            }
        }
        
        // إضافة مستمع لحدث الإدخال في حقل كلمة المرور لتشغيل دالة التحقق عند ادخال نص
        document.getElementById('password').addEventListener('input', checkPasswordMatch);
        
        // إضافة مستمع لحدث الإدخال في حقل تأكيد كلمة المرور لتشغيل دالة التحقق عند ادخال نص
        document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);
    </script>
</body>
</html>

 <script>
         // دالة للتحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
         function checkPasswordMatch() {
             let password = document.getElementById('password').value; // الحصول على قيمة كلمة المرور
             let confirmPassword = document.getElementById('confirmPassword').value; // الحصول على قيمة تأكيد كلمة المرور
             let errorMessage = document.getElementById('error-message'); // الحصول على عنصر الرسالة لعرض الخطأ
 
 		  // إذا كانت كلمةالمرور وتأكيد كلمة المرور غير متطابقتين وكان حقل تأكيد كلمة المرور غير فارغ
             if (password !== confirmPassword && confirmPassword.length > 0) {
                 errorMessage.textContent = "كلمتا المرور غير متطابقتين"; // عرض رسالة الخطأ
                 errorMessage.style.color = "red"; // تغيير لون الخط إلى الأحمر
             } else {
                 errorMessage.textContent = ""; // مسح رسالة الخطأ في حال كانت كلمتا المرور متطابقتين
             }
         }
 
         // إضافة مستمع لحدث الإدخال في حقل كلمة المرور لتشغيل دالة التحقق عند ادخال نص
         document.getElementById('password').addEventListener('input', checkPasswordMatch);
 
         // إضافة مستمع لحدث الإدخال في حقل تأكيد كلمة المرور لتشغيل دالة التحقق عند ادخال نص
         document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);
     </script>
 </body>
 </html>

<script>

    // دالة للتحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
‏    function checkPasswordMatch() {
‏        let password = document.getElementById('password').value; // الحصول على قيمة كلمة المرور
‏        let confirmPassword = document.getElementById('confirmPassword').value; // الحصول على قيمة تأكيد كلمة المرور
‏        let errorMessage = document.getElementById('error-message'); // الحصول على عنصر الرسالة لعرض الخطأ

        // إذا كانت كلمة المرور وتأكيد كلمة المرور غير متطابقتين وكان حقل تأكيد كلمة المرور غير فارغ
‏        if (password !== confirmPassword && confirmPassword.length > 0) {
‏            errorMessage.textContent = "كلمتا المرور غير متطابقتين"; // عرض رسالة الخطأ
‏            errorMessage.style.color = "red"; // تغيير لون الخط إلى الأحمر
‏        } else {
‏            errorMessage.textContent = ""; // مسح رسالة الخطأ في حال كانت كلمتا المرور متطابقتين
        }
    }

    // دالة للتحقق من صحة البريد الإلكتروني باستخدام تعبير منتظم
‏    function validateEmail(email) {
‏        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // تعبير منتظم للتحقق من البريد الإلكتروني
‏        return emailPattern.test(email); // إرجاع true إذا كان البريد الإلكتروني صحيحًا
    }

    // دالة للتحقق من جميع المدخلات قبل إرسال النموذج
‏    function validateForm(event) {
‏        let isValid = true; // متغير للتحقق من صحة المدخلات

        // التحقق من أن جميع الحقول مطلوبة
‏        const firstName = document.getElementById('firstName').value;
‏        const lastName = document.getElementById('lastName').value;
‏        const email = document.getElementById('email').value;
‏        const password = document.getElementById('password').value;
‏        const confirmPassword = document.getElementById('confirmPassword').value;

‏        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
‏            alert("جميع الحقول مطلوبة!");
‏            isValid = false;
        }

        // التحقق من تطابق كلمة المرور
‏        if (password !== confirmPassword) {
‏            document.getElementById('error-message').textContent = "كلمتا المرور غير متطابقتين";
‏            document.getElementById('error-message').style.color = "red";
‏            isValid = false;
‏        } else {
‏            document.getElementById('error-message').textContent = "";
        }

        // التحقق من صحة البريد الإلكتروني
‏        if (!validateEmail(email)) {
‏            alert("البريد الإلكتروني غير صحيح!");
‏            isValid = false;
        }

        // منع إرسال النموذج إذا كان هناك خطأ
‏        if (!isValid) {
‏            event.preventDefault(); // منع إرسال النموذج
        }
    }

    // إضافة مستمع لحدث الإدخال في حقل كلمة المرور لتشغيل دالة التحقق عند ادخال نص
‏    document.getElementById('password').addEventListener('input', checkPasswordMatch);

    // إضافة مستمع لحدث الإدخال في حقل تأكيد كلمة المرور لتشغيل دالة التحقق عند ادخال نص
‏    document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);

    // إضافة مستمع لحدث الإرسال للنموذج
‏    document.getElementById('signupForm').addEventListener('submit', validateForm);
‏</script>
