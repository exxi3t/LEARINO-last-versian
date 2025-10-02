

// //   // Initialize the application
// //   function init() {
// //     createParticles();
// //   }
  
// //       // Create background particles
// //       function createParticles() {
// //         const particlesContainer = document.getElementById('particles');
// //         const particleCount = 30;
    
// //         for (let i = 0; i < particleCount; i++) {
// //           const particle = document.createElement('div');
// //           particle.classList.add('particle');
          
// //           const size = Math.random() * 4 + 2;
// //           particle.style.width = `${size}px`;
// //           particle.style.height = `${size}px`;
          
// //           particle.style.left = `${Math.random() * 100}%`;
// //           particle.style.top = `${Math.random() * 100}%`;
          
// //           particle.style.animationDelay = `${Math.random() * 15}s`;
          
// //           const duration = Math.random() * 10 + 10;
// //           particle.style.animationDuration = `${duration}s`;
          
// //           particle.style.opacity = Math.random() * 0.5 + 0.1;
          
// //           particlesContainer.appendChild(particle);
// //         }
// //       }



// //        // ایجاد ستاره‌های پس زمینه
// //         function createStars() {
// //             const starsContainer = document.getElementById('stars');
// //             const starsCount = 150;

// //             for (let i = 0; i < starsCount; i++) {
// //                 const star = document.createElement('div');
// //                 star.classList.add('star');

// //                 const size = Math.random() * 3;
// //                 const duration = Math.random() * 5 + 3;

// //                 star.style.width = `${size}px`;
// //                 star.style.height = `${size}px`;
// //                 star.style.left = `${Math.random() * 100}%`;
// //                 star.style.top = `${Math.random() * 100}%`;
// //                 star.style.opacity = Math.random();
// //                 star.style.setProperty('--duration', `${duration}s`);

// //                 starsContainer.appendChild(star);
// //             }
// //         }

// //         // ایجاد سیاره‌های پس زمینه
// //         function createPlanets() {
// //             const planet1 = document.getElementById('planet1');
// //             const planet2 = document.getElementById('planet2');

// //             planet1.style.width = '150px';
// //             planet1.style.height = '150px';
// //             planet1.style.top = '15%';
// //             planet1.style.left = '10%';
// //             planet1.style.background = 'radial-gradient(circle, #ff7675, #d63031)';
// //             planet1.style.boxShadow = '0 0 30px #ff7675';
// //             planet1.style.animation = 'float 8s ease-in-out infinite';

// //             planet2.style.width = '80px';
// //             planet2.style.height = '80px';
// //             planet2.style.bottom = '20%';
// //             planet2.style.right = '10%';
// //             planet2.style.background = 'radial-gradient(circle, #74b9ff, #0984e3)';
// //             planet2.style.boxShadow = '0 0 20px #74b9ff';
// //             planet2.style.animation = 'float 6s ease-in-out infinite 2s';
// //         }

// //         // متغیرهای جهانی
// //         let currentForm = 'login';
// //         let verificationCodeSent = '';
// //         let countdownInterval = null;
// //         let countdownTime = 120;

// //         // رویدادهای کلیک
// //         document.getElementById('showRegister').addEventListener('click', function(e) {
// //             e.preventDefault();
// //             showForm('register');
// //         });

// //         document.getElementById('showLogin').addEventListener('click', function(e) {
// //             e.preventDefault();
// //             showForm('login');
// //         });

// //         document.getElementById('showLoginFromForgot').addEventListener('click', function(e) {
// //             e.preventDefault();
// //             showForm('login');
// //         });

// //         document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
// //             e.preventDefault();
// //             showForm('forgot');
// //         });

// //         // نمایش/مخفی کردن رمز عبور
// //         document.querySelectorAll('.toggle-password').forEach(toggle => {
// //             toggle.addEventListener('click', function() {
// //                 const input = this.parentElement.querySelector('input');
// //                 const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
// //                 input.setAttribute('type', type);
// //                 this.classList.toggle('fa-eye');
// //                 this.classList.toggle('fa-eye-slash');
// //             });
// //         });

// //         // ثبت نام
// //         document.getElementById('registerBtn').addEventListener('click', function() {
// //             if (validateRegisterForm()) {
// //                 registerUser();
// //             }
// //         });

// //         // لاگین
// //         document.getElementById('loginBtn').addEventListener('click', function() {
// //             if (validateLoginForm()) {
// //                 loginUser();
// //             }
// //         });

// //         // فراموشی رمز عبور
// //         document.getElementById('forgotPasswordBtn').addEventListener('click', function() {
// //             if (validateForgotPasswordForm()) {
// //                 sendVerificationCode();
// //             }
// //         });

// //         // تایید کد
// //         document.getElementById('verifyCodeBtn').addEventListener('click', function() {
// //             if (validateVerificationCode()) {
// //                 verifyCode();
// //             }
// //         });

// //         // تغییر رمز عبور
// //         document.getElementById('resetPasswordBtn').addEventListener('click', function() {
// //             if (validateResetPasswordForm()) {
// //                 resetPassword();
// //             }
// //         });

// //         // ارسال مجدد کد
// //         document.getElementById('resendCodeLink').addEventListener('click', function(e) {
// //             e.preventDefault();
// //             if (!this.classList.contains('disabled')) {
// //                 sendVerificationCode(true);
// //             }
// //         });

// //         // فعال کردن فوکس اینپوت با کلیک روی لیبل
// //         document.querySelectorAll('.input-label').forEach(label => {
// //             label.addEventListener('click', function() {
// //                 const inputId = this.getAttribute('for');
// //                 if (inputId) {
// //                     document.getElementById(inputId).focus();
// //                 }
// //             });
// //         });

// //         // توابع نمایش فرم‌ها
// //         function showForm(formName) {
// //             document.querySelectorAll('.form').forEach(form => {
// //                 form.classList.remove('active');
// //             });

// //             document.getElementById('successMessage').style.display = 'none';
// //             clearErrors();
// //             clearFormData();

// //             currentForm = formName;

// //             switch (formName) {
// //                 case 'login':
// //                     document.getElementById('loginForm').classList.add('active');
// //                     break;
// //                 case 'register':
// //                     document.getElementById('registerForm').classList.add('active');
// //                     break;
// //                 case 'forgot':
// //                     document.getElementById('forgotPasswordForm').classList.add('active');
// //                     break;
// //                 case 'verify':
// //                     document.getElementById('verifyCodeForm').classList.add('active');
// //                     startCountdown();
// //                     break;
// //                 case 'reset':
// //                     document.getElementById('resetPasswordForm').classList.add('active');
// //                     break;
// //             }
// //         }

// //         // اعتبارسنجی فرم ثبت نام
// //         function validateRegisterForm() {
// //             let isValid = true;
// //             const username = document.getElementById('registerUsername').value.trim();
// //             const phone = document.getElementById('registerPhone').value.trim();
// //             const email = document.getElementById('registerEmail').value.trim();
// //             const password = document.getElementById('registerPassword').value;
// //             const confirmPassword = document.getElementById('registerConfirmPassword').value;

// //             if (username === '') {
// //                 showError('registerUsername', 'registerUsernameError', 'لطفاً نام کاربری را وارد کنید');
// //                 isValid = false;
// //             } else if (username.length < 4) {
// //                 showError('registerUsername', 'registerUsernameError', 'نام کاربری باید حداقل 4 کاراکتر باشد');
// //                 isValid = false;
// //             } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
// //                 showError('registerUsername', 'registerUsernameError', 'نام کاربری فقط می‌تواند شامل حروف، اعداد و زیرخط باشد');
// //                 isValid = false;
// //             } else {
// //                 hideError('registerUsername', 'registerUsernameError');
// //             }

// //             if (phone === '') {
// //                 showError('registerPhone', 'registerPhoneError', 'لطفاً شماره تلفن را وارد کنید');
// //                 isValid = false;
// //             } else if (!/^09[0-9]{9}$/.test(phone)) {
// //                 showError('registerPhone', 'registerPhoneError', 'شماره تلفن معتبر نیست');
// //                 isValid = false;
// //             } else {
// //                 hideError('registerPhone', 'registerPhoneError');
// //             }

// //             if (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
// //                 showError('registerEmail', 'registerEmailError', 'ایمیل معتبر نیست');
// //                 isValid = false;
// //             } else {
// //                 hideError('registerEmail', 'registerEmailError');
// //             }

// //             if (password === '') {
// //                 showError('registerPassword', 'registerPasswordError', 'لطفاً رمز عبور را وارد کنید');
// //                 isValid = false;
// //             } else if (password.length < 8) {
// //                 showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل 8 کاراکتر باشد');
// //                 isValid = false;
// //             } else if (!/[A-Z]/.test(password[0])) {
// //                 showError('registerPassword', 'registerPasswordError', 'حرف اول رمز عبور باید بزرگ باشد');
// //                 isValid = false;
// //             } else if (!/[0-9]/.test(password)) {
// //                 showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل یک عدد داشته باشد');
// //                 isValid = false;
// //             } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
// //                 showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد');
// //                 isValid = false;
// //             } else {
// //                 hideError('registerPassword', 'registerPasswordError');
// //             }

// //             if (confirmPassword === '') {
// //                 showError('registerConfirmPassword', 'registerConfirmPasswordError', 'لطفاً تکرار رمز عبور را وارد کنید');
// //                 isValid = false;
// //             } else if (password !== confirmPassword) {
// //                 showError('registerConfirmPassword', 'registerConfirmPasswordError', 'رمز عبور و تکرار آن مطابقت ندارند');
// //                 isValid = false;
// //             } else {
// //                 hideError('registerConfirmPassword', 'registerConfirmPasswordError');
// //             }

// //             return isValid;
// //         }

// //         // اعتبارسنجی فرم لاگین
// //         function validateLoginForm() {
// //             let isValid = true;
// //             const username = document.getElementById('loginUsername').value.trim();
// //             const password = document.getElementById('loginPassword').value;

// //             if (username === '') {
// //                 showError('loginUsername', 'loginUsernameError', 'لطفاً نام کاربری یا ایمیل را وارد کنید');
// //                 isValid = false;
// //             } else {
// //                 hideError('loginUsername', 'loginUsernameError');
// //             }

// //             if (password === '') {
// //                 showError('loginPassword', 'loginPasswordError', 'لطفاً رمز عبور را وارد کنید');
// //                 isValid = false;
// //             } else {
// //                 hideError('loginPassword', 'loginPasswordError');
// //             }

// //             return isValid;
// //         }

// //         // اعتبارسنجی فرم فراموشی رمز عبور
// //         function validateForgotPasswordForm() {
// //             let isValid = true;
// //             const phone = document.getElementById('forgotPhone').value.trim();

// //             if (phone === '') {
// //                 showError('forgotPhone', 'forgotPhoneError', 'لطفاً شماره تلفن را وارد کنید');
// //                 isValid = false;
// //             } else if (!/^09[0-9]{9}$/.test(phone)) {
// //                 showError('forgotPhone', 'forgotPhoneError', 'شماره تلفن معتبر نیست');
// //                 isValid = false;
// //             } else {
// //                 hideError('forgotPhone', 'forgotPhoneError');
// //             }

// //             return isValid;
// //         }

// //         // اعتبارسنجی کد تایید
// //         function validateVerificationCode() {
// //             let isValid = true;
// //             const code = document.getElementById('verificationCode').value.trim();

// //             if (code === '') {
// //                 showError('verificationCode', 'verificationCodeError', 'لطفاً کد تایید را وارد کنید');
// //                 isValid = false;
// //             } else if (!/^\d{6}$/.test(code)) {
// //                 showError('verificationCode', 'verificationCodeError', 'کد تایید باید 6 رقم باشد');
// //                 isValid = false;
// //             } else {
// //                 hideError('verificationCode', 'verificationCodeError');
// //             }

// //             return isValid;
// //         }

// //         // اعتبارسنجی فرم تغییر رمز عبور
// //         function validateResetPasswordForm() {
// //             let isValid = true;
// //             const newPassword = document.getElementById('newPassword').value;
// //             const confirmNewPassword = document.getElementById('confirmNewPassword').value;

// //             if (newPassword === '') {
// //                 showError('newPassword', 'newPasswordError', 'لطفاً رمز عبور جدید را وارد کنید');
// //                 isValid = false;
// //             } else if (newPassword.length < 8) {
// //                 showError('newPassword', 'newPasswordError', 'رمز عبور باید حداقل 8 کاراکتر باشد');
// //                 isValid = false;
// //             } else if (!/[A-Z]/.test(newPassword[0])) {
// //                 showError('newPassword', 'newPasswordError', 'حرف اول رمز عبور باید بزرگ باشد');
// //                 isValid = false;
// //             } else if (!/[0-9]/.test(newPassword)) {
// //                 showError('newPassword', 'newPasswordError', 'رمز عبور باید حداقل یک عدد داشته باشد');
// //                 isValid = false;
// //             } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
// //                 showError('newPassword', 'newPasswordError', 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد');
// //                 isValid = false;
// //             } else {
// //                 hideError('newPassword', 'newPasswordError');
// //             }

// //             if (confirmNewPassword === '') {
// //                 showError('confirmNewPassword', 'confirmNewPasswordError', 'لطفاً تکرار رمز عبور جدید را وارد کنید');
// //                 isValid = false;
// //             } else if (newPassword !== confirmNewPassword) {
// //                 showError('confirmNewPassword', 'confirmNewPasswordError', 'رمز عبور و تکرار آن مطابقت ندارند');
// //                 isValid = false;
// //             } else {
// //                 hideError('confirmNewPassword', 'confirmNewPasswordError');
// //             }

// //             return isValid;
// //         }

// //         // نمایش خطا
// //         function showError(inputId, errorElementId, message) {
// //             const input = document.getElementById(inputId);
// //             const errorElement = document.getElementById(errorElementId);

// //             input.classList.add('error');
// //             errorElement.textContent = message;
// //             errorElement.style.display = 'block';
// //         }

// //         // مخفی کردن خطا
// //         function hideError(inputId, errorElementId) {
// //             const input = document.getElementById(inputId);
// //             const errorElement = document.getElementById(errorElementId);

// //             input.classList.remove('error');
// //             errorElement.style.display = 'none';
// //         }

// //         // پاک کردن تمام خطاها
// //         function clearErrors() {
// //             document.querySelectorAll('.input-field').forEach(input => {
// //                 input.classList.remove('error');
// //             });

// //             document.querySelectorAll('.error-message').forEach(error => {
// //                 error.style.display = 'none';
// //             });
// //         }

// //         // پاک کردن داده‌های فرم
// //         function clearFormData() {
// //             document.querySelectorAll('.input-field').forEach(input => {
// //                 input.value = '';
// //             });
// //         }

// //         // ثبت کاربر
// //         function registerUser() {
// //             const registerData = {
// //                 username: document.getElementById('registerUsername').value.trim(),
// //                 phone: document.getElementById('registerPhone').value.trim(),
// //                 email: document.getElementById('registerEmail').value.trim(),
// //                 password: document.getElementById('registerPassword').value
// //             };

// //             const registerBtn = document.getElementById('registerBtn');
// //             const originalBtnText = registerBtn.innerHTML;
// //             registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ثبت نام...';
// //             registerBtn.disabled = true;

// //             setTimeout(() => {
// //                 document.getElementById('successMessage').style.display = 'block';
// //                 registerBtn.innerHTML = originalBtnText;
// //                 registerBtn.disabled = false;
// //                 clearFormData();
// //                 setTimeout(() => {
// //                     showForm('login');
// //                 }, 3000);
// //             }, 2000);
// //         }

// //         // ورود کاربر
// //         function loginUser() {
// //             const loginData = {
// //                 username: document.getElementById('loginUsername').value.trim(),
// //                 password: document.getElementById('loginPassword').value
// //             };

// //             const loginBtn = document.getElementById('loginBtn');
// //             const originalBtnText = loginBtn.innerHTML;
// //             loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ورود...';
// //             loginBtn.disabled = true;

// //             setTimeout(() => {
// //                 loginBtn.innerHTML = originalBtnText;
// //                 loginBtn.disabled = false;
// //                 verificationCodeSent = Math.floor(100000 + Math.random() * 900000).toString();
// //                 console.log('کد تایید ارسال شده:', verificationCodeSent);
// //                 showForm('verify');
// //             }, 1500);
// //         }

// //         // ارسال کد تایید
// //         function sendVerificationCode(isResend = false) {
// //             const phone = document.getElementById(currentForm === 'login' ? 'loginUsername' : 'forgotPhone').value.trim();
// //             verificationCodeSent = Math.floor(100000 + Math.random() * 900000).toString();

// //             const btn = currentForm === 'login' ? document.getElementById('loginBtn') : document.getElementById('forgotPasswordBtn');
// //             const originalBtnText = btn.innerHTML;
// //             btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';
// //             btn.disabled = true;

// //             setTimeout(() => {
// //                 console.log('کد تایید ارسال شده به', phone, ':', verificationCodeSent);
// //                 btn.innerHTML = originalBtnText;
// //                 btn.disabled = false;

// //                 if (isResend) {
// //                     alert(`کد تایید جدید به شماره ${phone} ارسال شد`);
// //                     resetCountdown();
// //                 } else {
// //                     showForm('verify');
// //                 }
// //             }, 1500);
// //         }

// //         // تایید کد
// //         function verifyCode() {
// //             const code = document.getElementById('verificationCode').value.trim();

// //             const verifyBtn = document.getElementById('verifyCodeBtn');
// //             const originalBtnText = verifyBtn.innerHTML;
// //             verifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال بررسی...';
// //             verifyBtn.disabled = true;

// //             setTimeout(() => {
// //                 if (code === verificationCodeSent) {
// //                     if (currentForm === 'login') {
// //                         alert('ورود با موفقیت انجام شد');
// //                     } else {
// //                         showForm('reset');
// //                     }
// //                 } else {
// //                     showError('verificationCode', 'verificationCodeError', 'کد تایید نامعتبر است');
// //                 }

// //                 verifyBtn.innerHTML = originalBtnText;
// //                 verifyBtn.disabled = false;
// //             }, 1000);
// //         }

// //         // تغییر رمز عبور
// //         function resetPassword() {
// //             const newPassword = document.getElementById('newPassword').value;

// //             const resetBtn = document.getElementById('resetPasswordBtn');
// //             const originalBtnText = resetBtn.innerHTML;
// //             resetBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال تغییر...';
// //             resetBtn.disabled = true;

// //             setTimeout(() => {
// //                 alert('رمز عبور با موفقیت تغییر یافت');
// //                 resetBtn.innerHTML = originalBtnText;
// //                 resetBtn.disabled = false;
// //                 showForm('login');
// //             }, 1500);
// //         }

// //         // شروع شمارش معکوس برای کد تایید
// //         function startCountdown() {
// //             clearInterval(countdownInterval);
// //             countdownTime = 120;
// //             updateCountdownDisplay();

// //             const resendLink = document.getElementById('resendCodeLink');
// //             resendLink.classList.add('disabled');
// //             resendLink.innerHTML = '<i class="fas fa-redo"></i> ارسال مجدد کد (02:00)';

// //             countdownInterval = setInterval(() => {
// //                 countdownTime--;
// //                 updateCountdownDisplay();

// //                 if (countdownTime <= 0) {
// //                     clearInterval(countdownInterval);
// //                     resendLink.classList.remove('disabled');
// //                     resendLink.innerHTML = '<i class="fas fa-redo"></i> ارسال مجدد کد';
// //                 }
// //             }, 1000);
// //         }

// //         // بازنشانی شمارش معکوس
// //         function resetCountdown() {
// //             startCountdown();
// //         }

// //         // به‌روزرسانی نمایش شمارش معکوس
// //         function updateCountdownDisplay() {
// //             const minutes = Math.floor(countdownTime / 60);
// //             const seconds = countdownTime % 60;
// //             const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// //             const resendLink = document.getElementById('resendCodeLink');
// //             if (resendLink) {
// //                 resendLink.innerHTML = `<i class="fas fa-redo"></i> ارسال مجدد کد (${timeString})`;
// //             }
// //         }

// //         // مقداردهی اولیه
// //         window.addEventListener('DOMContentLoaded', () => {
// //             createStars();
// //             createPlanets();

// //             document.querySelectorAll('.input-field').forEach(input => {
// //                 input.setAttribute('placeholder', ' ');

// //                 input.addEventListener('input', function() {
// //                     const inputId = this.id;
// //                     const errorElementId = inputId + 'Error';

// //                     if (this.value.trim() !== '') {
// //                         hideError(inputId, errorElementId);
// //                     }
// //                 });
// //             });

// //             document.getElementById('registerEmail').addEventListener('blur', function() {
// //                 const email = this.value.trim();
// //                 if (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
// //                     showError('registerEmail', 'registerEmailError', 'ایمیل معتبر نیست');
// //                 } else {
// //                     hideError('registerEmail', 'registerEmailError');
// //                 }
// //             });

// //             document.getElementById('registerPhone').addEventListener('blur', function() {
// //                 const phone = this.value.trim();
// //                 if (phone !== '' && !/^09[0-9]{9}$/.test(phone)) {
// //                     showError('registerPhone', 'registerPhoneError', 'شماره تلفن معتبر نیست');
// //                 } else {
// //                     hideError('registerPhone', 'registerPhoneError');
// //                 }
// //             });

// //             document.getElementById('registerPassword').addEventListener('blur', function() {
// //                 const password = this.value;
// //                 if (password !== '' && password.length < 8) {
// //                     showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل 8 کاراکتر باشد');
// //                 } else if (password !== '' && !/[A-Z]/.test(password[0])) {
// //                     showError('registerPassword', 'registerPasswordError', 'حرف اول رمز عبور باید بزرگ باشد');
// //                 } else if (password !== '' && !/[0-9]/.test(password)) {
// //                     showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل یک عدد داشته باشد');
// //                 } else if (password !== '' && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
// //                     showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد');
// //                 } else {
// //                     hideError('registerPassword', 'registerPasswordError');
// //                 }
// //             });
// //         });
  















// // ---------------------------
// // Initialize Application
// // ---------------------------
// function init() {
//     createParticles();
//     createStars();
//     createPlanets();
// }

// // ---------------------------
// // Create Background Particles
// // ---------------------------
// function createParticles() {
//     const particlesContainer = document.getElementById('particles');
//     const particleCount = 30;

//     for (let i = 0; i < particleCount; i++) {
//         const particle = document.createElement('div');
//         particle.classList.add('particle');

//         const size = Math.random() * 4 + 2;
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
//         particle.style.left = `${Math.random() * 100}%`;
//         particle.style.top = `${Math.random() * 100}%`;
//         particle.style.animationDelay = `${Math.random() * 15}s`;
//         particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
//         particle.style.opacity = Math.random() * 0.5 + 0.1;

//         particlesContainer.appendChild(particle);
//     }
// }

// // ---------------------------
// // Create Background Stars
// // ---------------------------
// function createStars() {
//     const starsContainer = document.getElementById('stars');
//     const starsCount = 150;

//     for (let i = 0; i < starsCount; i++) {
//         const star = document.createElement('div');
//         star.classList.add('star');

//         const size = Math.random() * 3;
//         const duration = Math.random() * 5 + 3;

//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.opacity = Math.random();
//         star.style.setProperty('--duration', `${duration}s`);

//         starsContainer.appendChild(star);
//     }
// }

// // ---------------------------
// // Create Planets
// // ---------------------------
// function createPlanets() {
//     const planet1 = document.getElementById('planet1');
//     const planet2 = document.getElementById('planet2');

//     if (planet1) {
//         planet1.style.width = '150px';
//         planet1.style.height = '150px';
//         planet1.style.top = '15%';
//         planet1.style.left = '10%';
//         planet1.style.background = 'radial-gradient(circle, #ff7675, #d63031)';
//         planet1.style.boxShadow = '0 0 30px #ff7675';
//         planet1.style.animation = 'float 8s ease-in-out infinite';
//     }

//     if (planet2) {
//         planet2.style.width = '80px';
//         planet2.style.height = '80px';
//         planet2.style.bottom = '20%';
//         planet2.style.right = '10%';
//         planet2.style.background = 'radial-gradient(circle, #74b9ff, #0984e3)';
//         planet2.style.boxShadow = '0 0 20px #74b9ff';
//         planet2.style.animation = 'float 6s ease-in-out infinite 2s';
//     }
// }

// // ---------------------------
// // Global Variables
// // ---------------------------
// let currentForm = 'login';
// let verificationCodeSent = '';
// let countdownInterval = null;
// let countdownTime = 120;

// // ---------------------------
// // Event Listeners
// // ---------------------------
// document.addEventListener('DOMContentLoaded', () => {
//     init();

//     // Form Switch Links
//     const links = [
//         {id: 'showRegister', form: 'register'},
//         {id: 'showLogin', form: 'login'},
//         {id: 'showLoginFromForgot', form: 'login'},
//         {id: 'forgotPasswordLink', form: 'forgot'}
//     ];

//     links.forEach(link => {
//         const element = document.getElementById(link.id);
//         if (element) {
//             element.addEventListener('click', e => {
//                 e.preventDefault();
//                 showForm(link.form);
//             });
//         }
//     });

//     // Toggle Password Visibility
//     document.querySelectorAll('.toggle-password').forEach(toggle => {
//         toggle.addEventListener('click', function() {
//             const input = this.parentElement.querySelector('input');
//             if (input) {
//                 const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
//                 input.setAttribute('type', type);
//                 this.classList.toggle('fa-eye');
//                 this.classList.toggle('fa-eye-slash');
//             }
//         });
//     });

//     // Form Submit Buttons
//     const btnMapping = [
//         {id: 'registerBtn', validator: validateRegisterForm, handler: registerUser},
//         {id: 'loginBtn', validator: validateLoginForm, handler: loginUser},
//         {id: 'forgotPasswordBtn', validator: validateForgotPasswordForm, handler: sendVerificationCode},
//         {id: 'verifyCodeBtn', validator: validateVerificationCode, handler: verifyCode},
//         {id: 'resetPasswordBtn', validator: validateResetPasswordForm, handler: resetPassword}
//     ];

//     btnMapping.forEach(btn => {
//         const el = document.getElementById(btn.id);
//         if (el) {
//             el.addEventListener('click', () => {
//                 if (btn.validator()) btn.handler();
//             });
//         }
//     });

//     // Resend Code Link
//     const resendLink = document.getElementById('resendCodeLink');
//     if (resendLink) {
//         resendLink.addEventListener('click', e => {
//             e.preventDefault();
//             if (!resendLink.classList.contains('disabled')) {
//                 sendVerificationCode(true);
//             }
//         });
//     }

//     // Label click focuses input
//     document.querySelectorAll('.input-label').forEach(label => {
//         label.addEventListener('click', function() {
//             const inputId = this.getAttribute('for');
//             if (inputId) {
//                 const input = document.getElementById(inputId);
//                 if (input) input.focus();
//             }
//         });
//     });

//     // Input Blur Validations
//     const inputs = ['registerEmail', 'registerPhone', 'registerPassword'];
//     inputs.forEach(id => {
//         const input = document.getElementById(id);
//         if (input) {
//             input.addEventListener('blur', () => validateSingleInput(input));
//             input.addEventListener('input', () => hideError(id, id + 'Error'));
//         }
//     });
// });

// // ---------------------------
// // Form Display
// // ---------------------------
// function showForm(formName) {
//     document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));
//     const successMsg = document.getElementById('successMessage');
//     if (successMsg) successMsg.style.display = 'none';
//     clearErrors();
//     clearFormData();

//     currentForm = formName;
//     const mapping = {
//         login: 'loginForm',
//         register: 'registerForm',
//         forgot: 'forgotPasswordForm',
//         verify: 'verifyCodeForm',
//         reset: 'resetPasswordForm'
//     };

//     const formId = mapping[formName];
//     if (formId) {
//         const form = document.getElementById(formId);
//         if (form) form.classList.add('active');
//     }

//     if (formName === 'verify') startCountdown();
// }

// // ---------------------------
// // Input Validation Helpers
// // ---------------------------
// function validateSingleInput(input) {
//     const id = input.id;
//     const value = input.value.trim();

//     if (id === 'registerEmail') {
//         if (value !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//             showError(id, id + 'Error', 'ایمیل معتبر نیست');
//         else hideError(id, id + 'Error');
//     }

//     if (id === 'registerPhone') {
//         if (value !== '' && !/^09[0-9]{9}$/.test(value))
//             showError(id, id + 'Error', 'شماره تلفن معتبر نیست');
//         else hideError(id, id + 'Error');
//     }

//     if (id === 'registerPassword') {
//         if (value !== '' && value.length < 8)
//             showError(id, id + 'Error', 'رمز عبور باید حداقل 8 کاراکتر باشد');
//         else if (value !== '' && !/[A-Z]/.test(value[0]))
//             showError(id, id + 'Error', 'حرف اول رمز عبور باید بزرگ باشد');
//         else if (value !== '' && !/[0-9]/.test(value))
//             showError(id, id + 'Error', 'رمز عبور باید حداقل یک عدد داشته باشد');
//         else if (value !== '' && !/[!@#$%^&*(),.?":{}|<>]/.test(value))
//             showError(id, id + 'Error', 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد');
//         else hideError(id, id + 'Error');
//     }
// }

// // ---------------------------
// // Validation Functions
// // ---------------------------
// function validateRegisterForm() {
//     let isValid = true;
//     const username = document.getElementById('registerUsername').value.trim();
//     const phone = document.getElementById('registerPhone').value.trim();
//     const email = document.getElementById('registerEmail').value.trim();
//     const password = document.getElementById('registerPassword').value;
//     const confirmPassword = document.getElementById('registerConfirmPassword').value;

//     if (username === '') { showError('registerUsername', 'registerUsernameError', 'لطفاً نام کاربری را وارد کنید'); isValid = false; }
//     else if (username.length < 4) { showError('registerUsername', 'registerUsernameError', 'نام کاربری باید حداقل 4 کاراکتر باشد'); isValid = false; }
//     else if (!/^[a-zA-Z0-9_]+$/.test(username)) { showError('registerUsername', 'registerUsernameError', 'نام کاربری فقط می‌تواند شامل حروف، اعداد و زیرخط باشد'); isValid = false; }
//     else hideError('registerUsername', 'registerUsernameError');

//     if (phone === '') { showError('registerPhone', 'registerPhoneError', 'لطفاً شماره تلفن را وارد کنید'); isValid = false; }
//     else if (!/^09[0-9]{9}$/.test(phone)) { showError('registerPhone', 'registerPhoneError', 'شماره تلفن معتبر نیست'); isValid = false; }
//     else hideError('registerPhone', 'registerPhoneError');

//     if (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('registerEmail', 'registerEmailError', 'ایمیل معتبر نیست'); isValid = false; }
//     else hideError('registerEmail', 'registerEmailError');

//     if (password === '') { showError('registerPassword', 'registerPasswordError', 'لطفاً رمز عبور را وارد کنید'); isValid = false; }
//     else if (password.length < 8) { showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل 8 کاراکتر باشد'); isValid = false; }
//     else if (!/[A-Z]/.test(password[0])) { showError('registerPassword', 'registerPasswordError', 'حرف اول رمز عبور باید بزرگ باشد'); isValid = false; }
//     else if (!/[0-9]/.test(password)) { showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل یک عدد داشته باشد'); isValid = false; }
//     else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) { showError('registerPassword', 'registerPasswordError', 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد'); isValid = false; }
//     else hideError('registerPassword', 'registerPasswordError');

//     if (confirmPassword === '') { showError('registerConfirmPassword', 'registerConfirmPasswordError', 'لطفاً تکرار رمز عبور را وارد کنید'); isValid = false; }
//     else if (password !== confirmPassword) { showError('registerConfirmPassword', 'registerConfirmPasswordError', 'رمز عبور و تکرار آن مطابقت ندارند'); isValid = false; }
//     else hideError('registerConfirmPassword', 'registerConfirmPasswordError');

//     return isValid;
// }

// function validateLoginForm() {
//     let isValid = true;
//     const username = document.getElementById('loginUsername').value.trim();
//     const password = document.getElementById('loginPassword').value;

//     if (username === '') { showError('loginUsername', 'loginUsernameError', 'لطفاً نام کاربری یا ایمیل را وارد کنید'); isValid = false; }
//     else hideError('loginUsername', 'loginUsernameError');

//     if (password === '') { showError('loginPassword', 'loginPasswordError', 'لطفاً رمز عبور را وارد کنید'); isValid = false; }
//     else hideError('loginPassword', 'loginPasswordError');

//     return isValid;
// }

// function validateForgotPasswordForm() {
//     let isValid = true;
//     const phone = document.getElementById('forgotPhone').value.trim();
//     if (phone === '') { showError('forgotPhone', 'forgotPhoneError', 'لطفاً شماره تلفن را وارد کنید'); isValid = false; }
//     else if (!/^09[0-9]{9}$/.test(phone)) { showError('forgotPhone', 'forgotPhoneError', 'شماره تلفن معتبر نیست'); isValid = false; }
//     else hideError('forgotPhone', 'forgotPhoneError');
//     return isValid;
// }

// function validateVerificationCode() {
//     let isValid = true;
//     const code = document.getElementById('verificationCode').value.trim();
//     if (code === '') { showError('verificationCode', 'verificationCodeError', 'لطفاً کد تایید را وارد کنید'); isValid = false; }
//     else if (!/^\d{6}$/.test(code)) { showError('verificationCode', 'verificationCodeError', 'کد تایید باید 6 رقم باشد'); isValid = false; }
//     else hideError('verificationCode', 'verificationCodeError');
//     return isValid;
// }

// function validateResetPasswordForm() {
//     let isValid = true;
//     const newPassword = document.getElementById('newPassword').value;
//     const confirmNewPassword = document.getElementById('confirmNewPassword').value;

//     if (newPassword === '') { showError('newPassword', 'newPasswordError', 'لطفاً رمز عبور جدید را وارد کنید'); isValid = false; }
//     else if (newPassword.length < 8) { showError('newPassword', 'newPasswordError', 'رمز عبور باید حداقل 8 کاراکتر باشد'); isValid = false; }
//     else if (!/[A-Z]/.test(newPassword[0])) { showError('newPassword', 'newPasswordError', 'حرف اول رمز عبور باید بزرگ باشد'); isValid = false; }
//     else if (!/[0-9]/.test(newPassword)) { showError('newPassword', 'newPasswordError', 'رمز عبور باید حداقل یک عدد داشته باشد'); isValid = false; }
//     else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) { showError('newPassword', 'newPasswordError', 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد'); isValid = false; }
//     else hideError('newPassword', 'newPasswordError');

//     if (confirmNewPassword === '') { showError('confirmNewPassword', 'confirmNewPasswordError', 'لطفاً تکرار رمز عبور جدید را وارد کنید'); isValid = false; }
//     else if (newPassword !== confirmNewPassword) { showError('confirmNewPassword', 'confirmNewPasswordError', 'رمز عبور و تکرار آن مطابقت ندارند'); isValid = false; }
//     else hideError('confirmNewPassword', 'confirmNewPasswordError');

//     return isValid;
// }

// // ---------------------------
// // Error Handling
// // ---------------------------
// function showError(inputId, errorElementId, message) {
//     const input = document.getElementById(inputId);
//     const errorElement = document.getElementById(errorElementId);
//     if (input) input.classList.add('error');
//     if (errorElement) { errorElement.textContent = message; errorElement.style.display = 'block'; }
// }

// function hideError(inputId, errorElementId) {
//     const input = document.getElementById(inputId);
//     const errorElement = document.getElementById(errorElementId);
//     if (input) input.classList.remove('error');
//     if (errorElement) errorElement.style.display = 'none';
// }

// function clearErrors() {
//     document.querySelectorAll('.input-field').forEach(input => input.classList.remove('error'));
//     document.querySelectorAll('.error-message').forEach(err => err.style.display = 'none');
// }

// function clearFormData() {
//     document.querySelectorAll('.input-field').forEach(input => input.value = '');
// }

// // ---------------------------
// // Registration
// // ---------------------------
// function registerUser() {
//     const registerBtn = document.getElementById('registerBtn');
//     if (!registerBtn) return;
//     const originalText = registerBtn.innerHTML;
//     registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ثبت نام...';
//     registerBtn.disabled = true;

//     setTimeout(() => {
//         const successMsg = document.getElementById('successMessage');
//         if (successMsg) successMsg.style.display = 'block';
//         registerBtn.innerHTML = originalText;
//         registerBtn.disabled = false;
//         clearFormData();
//         setTimeout(() => showForm('login'), 3000);
//     }, 2000);
// }

// // ---------------------------
// // Login
// // ---------------------------
// function loginUser() {
//     const loginBtn = document.getElementById('loginBtn');
//     if (!loginBtn) return;
//     const originalText = loginBtn.innerHTML;
//     loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ورود...';
//     loginBtn.disabled = true;

//     setTimeout(() => {
//         verificationCodeSent = Math.floor(100000 + Math.random() * 900000).toString();
//         console.log('کد تایید ارسال شده:', verificationCodeSent);
//         loginBtn.innerHTML = originalText;
//         loginBtn.disabled = false;
//         showForm('verify');
//     }, 1500);
// }

// // ---------------------------
// // Send Verification Code
// // ---------------------------
// function sendVerificationCode(isResend = false) {
//     const phoneInputId = currentForm === 'login' ? 'loginUsername' : 'forgotPhone';
//     const phone = document.getElementById(phoneInputId)?.value.trim() || '';
//     verificationCodeSent = Math.floor(100000 + Math.random() * 900000).toString();

//     const btn = currentForm === 'login' ? document.getElementById('loginBtn') : document.getElementById('forgotPasswordBtn');
//     if (!btn) return;
//     const originalText = btn.innerHTML;
//     btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';
//     btn.disabled = true;

//     setTimeout(() => {
//         console.log('کد تایید ارسال شده به', phone, ':', verificationCodeSent);
//         btn.innerHTML = originalText;
//         btn.disabled = false;
//         if (isResend) {
//             alert(`کد تایید جدید به شماره ${phone} ارسال شد`);
//             resetCountdown();
//         } else {
//             showForm('verify');
//         }
//     }, 1500);
// }

// // ---------------------------
// // Verify Code
// // ---------------------------
// function verifyCode() {
//     const code = document.getElementById('verificationCode')?.value.trim() || '';
//     const verifyBtn = document.getElementById('verifyCodeBtn');
//     if (!verifyBtn) return;
//     const originalText = verifyBtn.innerHTML;
//     verifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال بررسی...';
//     verifyBtn.disabled = true;

//     setTimeout(() => {
//         if (code === verificationCodeSent) {
//             if (currentForm === 'login') alert('ورود با موفقیت انجام شد');
//             else showForm('reset');
//         } else showError('verificationCode', 'verificationCodeError', 'کد تایید نامعتبر است');

//         verifyBtn.innerHTML = originalText;
//         verifyBtn.disabled = false;
//     }, 1000);
// }

// // ---------------------------
// // Reset Password
// // ---------------------------
// function resetPassword() {
//     const resetBtn = document.getElementById('resetPasswordBtn');
//     if (!resetBtn) return;
//     const originalText = resetBtn.innerHTML;
//     resetBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال تغییر...';
//     resetBtn.disabled = true;

//     setTimeout(() => {
//         alert('رمز عبور با موفقیت تغییر یافت');
//         resetBtn.innerHTML = originalText;
//         resetBtn.disabled = false;
//         showForm('login');
//     }, 1500);
// }

// // ---------------------------
// // Countdown Timer
// // ---------------------------
// function startCountdown() {
//     clearInterval(countdownInterval);
//     countdownTime = 120;
//     updateCountdownDisplay();

//     const resendLink = document.getElementById('resendCodeLink');
//     if (resendLink) {
//         resendLink.classList.add('disabled');
//         resendLink.innerHTML = `<i class="fas fa-redo"></i> ارسال مجدد کد (02:00)`;
//     }

//     countdownInterval = setInterval(() => {
//         countdownTime--;
//         updateCountdownDisplay();

//         if (countdownTime <= 0) {
//             clearInterval(countdownInterval);
//             if (resendLink) {
//                 resendLink.classList.remove('disabled');
//                 resendLink.innerHTML = '<i class="fas fa-redo"></i> ارسال مجدد کد';
//             }
//         }
//     }, 1000);
// }

// function resetCountdown() {
//     startCountdown();
// }

// function updateCountdownDisplay() {
//     const minutes = Math.floor(countdownTime / 60);
//     const seconds = countdownTime % 60;
//     const timeString = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

//     const resendLink = document.getElementById('resendCodeLink');
//     if (resendLink) resendLink.innerHTML = `<i class="fas fa-redo"></i> ارسال مجدد کد (${timeString})`;
// }








  // ایجاد ستاره‌های پس زمینه
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 150;

            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');

                const size = Math.random() * 3;
                const duration = Math.random() * 5 + 3;

                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.opacity = Math.random();
                star.style.setProperty('--duration', `${duration}s`);

                starsContainer.appendChild(star);
            }
        }

        // ایجاد ذرات معلق
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                particle.style.animationDelay = `${Math.random() * 15}s`;
                
                const duration = Math.random() * 10 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                particlesContainer.appendChild(particle);
            }
        }
          window.addEventListener('DOMContentLoaded', () => {
            createStars();
            createParticles();
            
            // تنظیم placeholder خالی برای برچسب‌های شناور
            document.querySelectorAll('.input-field').forEach(input => {
                input.setAttribute('placeholder', ' ');
            });
        });