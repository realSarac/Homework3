 <script>
function checkPasswordMatch() {
let password = document.getElementById('password').value;
let confirmPassword = document.getElementById('confirmPassword').value;
let errorMessage = document.getElementById('error-message');

errorMessage.textContent=password!== confirmPassword? 
"كلمة المرور غير متطابقتين";}

function validateEmail(email){
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);}

document.getElementById('signupForm').addEventListener('submit',function(event){
let email= document.getElementById('email').value;
let password = document.getElementById('password').value;
let confirmPassword =document.getElementById('confirmPassword').value;}

if(password !== confirmPassword)
{
alert("!كلمةالمرور غير متطابقتين");
event.preventDefault();
}
});
‏</script>
