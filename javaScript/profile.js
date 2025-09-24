
        // //profile page
        //      // داده‌های نمونه
        // let userData = {
        //     username: "محمدرضا",
        //     email: "example@gmail.com",
        //     joinDate: "1402/05/10",
        //     profilePic: "https://via.placeholder.com/150",
        //     watchedMovies: 124,
        //     learnedWord: 1756,
        //     comments: 87
        // };

        // let subscriptionData = {
        //     type: "طلایی",
        //     totalDays: 30,
        //     remainingDays: 28,
        //     expiryDate: "1403/03/15"
        // };

        // // ایجاد ذرات متحرک
        // function createParticles() {
        //     const particlesContainer = document.getElementById('particles-2');
        //     const particleCount = 30;

        //     for (let i = 0; i < particleCount; i++) {
        //         const particle = document.createElement('div');
        //         particle.classList.add('particle-2');
                
        //         const size = Math.random() * 4 + 2;
        //         particle.style.width = `${size}px`;
        //         particle.style.height = `${size}px`;
                
        //         particle.style.left = `${Math.random() * 100}%`;
        //         particle.style.top = `${Math.random() * 100}%`;
                
        //         particle.style.animationDelay = `${Math.random() * 15}s`;
                
        //         const duration = Math.random() * 10 + 10;
        //         particle.style.animationDuration = `${duration}s`;
                
        //         particle.style.opacity = Math.random() * 0.5 + 0.1;
                
        //         particlesContainer.appendChild(particle);
        //     }
        // }

        // // آپدیت UI اشتراک
        // function updateSubscriptionUI() {
        //     const percent = Math.round((subscriptionData.remainingDays / subscriptionData.totalDays) * 100);
            
        //     const circle = document.querySelector('.progress-ring__circle-2');
        //     const radius = circle.r.baseVal.value;
        //     const circumference = 2 * Math.PI * radius;
        //     const offset = circumference - (percent / 100) * circumference;
            
        //     circle.style.strokeDasharray = `${circumference} ${circumference}`;
        //     circle.style.strokeDashoffset = offset;
            
        //     document.getElementById('remaining-days-2').textContent = subscriptionData.remainingDays;
        //     document.getElementById('subscription-type-2').textContent = subscriptionData.type;
        //     document.getElementById('progress-bar-2').style.width = `${percent}%`;
        // }

        // // تابع نمایش نوتیفیکیشن
        // function showNotification(type, title, message, duration = 3000) {
        //     const container = document.getElementById('notification-container-2');
            
        //     const notification = document.createElement('div');
        //     notification.className = `notification-2 ${type}-2`;
            
        //     let icon;
        //     switch(type) {
        //         case 'success':
        //             icon = 'fa-check-circle';
        //             break;
        //         case 'error':
        //             icon = 'fa-times-circle';
        //             break;
        //         case 'warning':
        //             icon = 'fa-exclamation-triangle';
        //             break;
        //         default:
        //             icon = 'fa-info-circle';
        //     }
            
        //     notification.innerHTML = `
        //         <i class="fas ${icon} notification-icon-2"></i>
        //         <div class="notification-content-2">
        //             <div class="notification-title-2">${title}</div>
        //             <div class="notification-message-2">${message}</div>
        //         </div>
        //         <button class="notification-close-2" onclick="this.parentElement.remove()">
        //             <i class="fas fa-times"></i>
        //         </button>
        //     `;
            
        //     container.appendChild(notification);
            
        //     // نمایش نوتیفیکیشن
        //     setTimeout(() => {
        //         notification.style.opacity = '1';
        //         notification.style.transform = 'translateY(0)';
        //     }, 10);
            
        //     // حذف خودکار پس از مدت مشخص
        //     if (duration > 0) {
        //         setTimeout(() => {
        //             notification.style.animation = 'fadeOut-2 0.5s ease forwards';
        //             setTimeout(() => {
        //                 notification.remove();
        //             }, 500);
        //         }, duration);
        //     }
            
        //     return notification;
        // }

        // // تابع نمایش تأییدیه زیبا
        // async function showConfirm(title, message, confirmText = "تأیید", cancelText = "انصراف") {
        //     return new Promise((resolve) => {
        //         const modal = document.createElement('div');
        //         modal.className = 'modal-2';
        //         modal.style.display = 'flex';
        //         modal.style.zIndex = '1000';
                
        //         modal.innerHTML = `
        //             <div class="modal-content-2">
        //                 <h3 class="modal-title-2">${title}</h3>
        //                 <p style="text-align: center; margin-bottom: 20px;">${message}</p>
        //                 <div class="modal-actions-2">
        //                     <button class="btn-2 btn-success-2" id="confirm-ok-2">${confirmText}</button>
        //                     <button class="btn-2 btn-danger-2" id="confirm-cancel-2">${cancelText}</button>
        //                 </div>
        //             </div>
        //         `;
                
        //         document.body.appendChild(modal);
                
        //         document.getElementById('confirm-ok-2').addEventListener('click', () => {
        //             modal.remove();
        //             resolve(true);
        //         });
                
        //         document.getElementById('confirm-cancel-2').addEventListener('click', () => {
        //             modal.remove();
        //             resolve(false);
        //         });
        //     });
        // }

        // // توابع مودال
        // function openEditModal(type) {
        //     if (type === 'username') {
        //         document.getElementById('new-username-2').value = userData.username;
        //         document.getElementById('username-modal-2').style.display = 'flex';
        //     } else if (type === 'password') {
        //         document.getElementById('password-modal-2').style.display = 'flex';
        //     }
        // }

        // function openSettingsModal() {
        //     document.getElementById('settings-modal-2').style.display = 'flex';
        // }

        // function openDeleteModal() {
        //     document.getElementById('delete-modal-2').style.display = 'flex';
        //     closeModal('settings-modal-2');
        // }

        // function closeModal(modalId) {
        //     document.getElementById(modalId).style.display = 'none';
        // }

        // // ذخیره نام کاربری
        // async function saveUsername() {
        //     const newUsername = document.getElementById('new-username-2').value.trim();
        //     if (newUsername) {
        //         userData.username = newUsername;
        //         document.getElementById('username-display-2').textContent = newUsername;
        //         closeModal('username-modal-2');
        //         showNotification('success', 'موفقیت', 'نام کاربری با موفقیت تغییر یافت');
        //     } else {
        //         showNotification('error', 'خطا', 'لطفاً نام کاربری معتبر وارد کنید');
        //     }
        // }

        // // ذخیره رمز عبور
        // async function savePassword() {
        //     const currentPass = document.getElementById('current-password-2').value;
        //     const newPass = document.getElementById('new-password-2').value;
        //     const confirmPass = document.getElementById('confirm-password-2').value;
            
        //     if (!currentPass || !newPass || !confirmPass) {
        //         showNotification('error', 'خطا', 'لطفاً تمام فیلدها را پر کنید');
        //         return;
        //     }
            
        //     if (newPass !== confirmPass) {
        //         showNotification('error', 'خطا', 'رمز عبور جدید با تکرار آن مطابقت ندارد');
        //         return;
        //     }
        //     if(newPass.length < 8){
        //         showNotification("error", "خطا ","رمز عبور باید بیشتر از 8 رقم باشد")
        //     }else{
        //         showNotification('success', 'موفقیت', 'رمز عبور با موفقیت تغییر یافت');
        //         closeModal('password-modal-2');

        //     }
            
            
        //     // پاک کردن فیلدها
        //     document.getElementById('current-password-2').value = '';
        //     document.getElementById('new-password-2').value = '';
        //     document.getElementById('confirm-password-2').value = '';
        // }

        // // خروج از حساب
        // async function logout() {
        //     const result = await showConfirm('خروج از حساب', 'آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟', 'خروج', 'انصراف');
        //     if (result) {
        //         showNotification('success', 'موفقیت', 'با موفقیت از حساب کاربری خارج شدید');
        //         closeModal('settings-modal-2');
        //         // در حالت واقعی کاربر به صفحه لاگین هدایت می‌شود
        //     }
        // }

        // // حذف حساب
        // async function deleteAccount() {
        //     const result = await showConfirm('حذف حساب کاربری', 'آیا مطمئن هستید که می‌خواهید حساب کاربری خود را حذف کنید؟ این عمل غیرقابل بازگشت است.', 'حذف حساب', 'انصراف');
        //     if (result) {
        //         showNotification('success', 'موفقیت', 'حساب کاربری با موفقیت حذف شد');
        //         closeModal('delete-modal-2');
        //         // در حالت واقعی کاربر به صفحه اصلی هدایت می‌شود
        //     }
        // }

        // // تغییر عکس پروفایل
        // document.getElementById('file-input-2').addEventListener('change', function(e) {
        //     const file = e.target.files[0];
        //     if (file) {
        //         if (!file.type.match('image.*')) {
        //             showNotification('error', 'خطا', 'لطفاً یک فایل تصویری انتخاب کنید');
        //             return;
        //         }
                
        //         const reader = new FileReader();
        //         reader.onload = function(event) {
        //             document.getElementById('profile-pic-2').src = event.target.result;
        //             userData.profilePic = event.target.result;
        //             showNotification('success', 'موفقیت', 'عکس پروفایل با موفقیت تغییر یافت');
        //         };
        //         reader.readAsDataURL(file);
        //     }
        // });

        // // شبیه‌سازی کاهش روزهای اشتراک (برای دمو)
        // function simulateDayPassing() {
        //     if (subscriptionData.remainingDays > 0) {
        //         subscriptionData.remainingDays--;
        //         updateSubscriptionUI();
                
        //         if (subscriptionData.remainingDays === 5) {
        //             showNotification('warning', 'توجه', '۵ روز تا پایان اشتراک شما باقی مانده است');
        //         }
                
        //         // برای تست: هر 3 ثانیه یک روز کم می‌شود
        //         setTimeout(simulateDayPassing, 3000);
        //     }
        // }

        // // مقداردهی اولیه
        // document.addEventListener('DOMContentLoaded', () => {
        //     createParticles();
            
        //     document.getElementById('username-display-2').textContent = userData.username;
        //     document.getElementById('profile-pic-2').src = userData.profilePic;
            
        //     // آپدیت آمار کاربر
        //     document.querySelectorAll('.stat-number-2')[0].textContent = userData.watchedMovies;
        //     document.querySelectorAll('.stat-number-2')[1].textContent = userData.learnedWord;
        //     document.querySelectorAll('.stat-number-2')[2].textContent = userData.comments;
            
        //     updateSubscriptionUI();
        //     simulateDayPassing();
        // });



















//         // === داده‌های نمونه ===
// let userData = {
//     username: "محمدرضا",
//     email: "example@gmail.com",
//     joinDate: "1402/05/10",
//     profilePic: "https://via.placeholder.com/150",
//     watchedMovies: 124,
//     learnedWord: 1756,
//     comments: 87
// };

// let subscriptionData = {
//     type: "طلایی",
//     totalDays: 30,
//     remainingDays: 28,
//     expiryDate: "1403/03/15"
// };

// // === ذرات متحرک ===
// function createParticles() {
//     const container = document.getElementById('particles-2');
//     const count = 30;
//     for (let i = 0; i < count; i++) {
//         const particle = document.createElement('div');
//         particle.classList.add('particle-2');
//         const size = Math.random() * 4 + 2;
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
//         particle.style.left = `${Math.random() * 100}%`;
//         particle.style.top = `${Math.random() * 100}%`;
//         particle.style.animationDelay = `${Math.random() * 15}s`;
//         particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
//         particle.style.opacity = Math.random() * 0.5 + 0.1;
//         container.appendChild(particle);
//     }
// }

// // === آپدیت UI اشتراک ===
// function updateSubscriptionUI() {
//     const percent = Math.round((subscriptionData.remainingDays / subscriptionData.totalDays) * 100);
//     const circle = document.querySelector('.progress-ring__circle-2');
//     const radius = circle.r.baseVal.value;
//     const circumference = 2 * Math.PI * radius;
//     circle.style.strokeDasharray = `${circumference} ${circumference}`;
//     circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;

//     document.getElementById('remaining-days-2').textContent = subscriptionData.remainingDays;
//     document.getElementById('subscription-type-2').textContent = subscriptionData.type;
//     document.getElementById('progress-bar-2').style.width = `${percent}%`;
// }

// // === نوتیفیکیشن ===
// function showNotification(type, title, message, duration = 3000) {
//     const container = document.getElementById('notification-container-2');
//     const notification = document.createElement('div');
//     notification.className = `notification-2 ${type}-2`;

//     const iconMap = {
//         success: 'fa-check-circle',
//         error: 'fa-times-circle',
//         warning: 'fa-exclamation-triangle',
//         info: 'fa-info-circle'
//     };
//     const icon = iconMap[type] || 'fa-info-circle';

//     notification.innerHTML = `
//         <i class="fas ${icon} notification-icon-2"></i>
//         <div class="notification-content-2">
//             <div class="notification-title-2">${title}</div>
//             <div class="notification-message-2">${message}</div>
//         </div>
//         <button class="notification-close-2" onclick="this.parentElement.remove()">
//             <i class="fas fa-times"></i>
//         </button>
//     `;
//     container.appendChild(notification);

//     setTimeout(() => {
//         notification.style.opacity = '1';
//         notification.style.transform = 'translateY(0)';
//     }, 10);

//     if (duration > 0) {
//         setTimeout(() => {
//             notification.style.animation = 'fadeOut-2 0.5s ease forwards';
//             setTimeout(() => notification.remove(), 500);
//         }, duration);
//     }
//     return notification;
// }

// // === تاییدیه مودال ===
// function showConfirm(title, message, confirmText = "تأیید", cancelText = "انصراف") {
//     return new Promise(resolve => {
//         const modal = document.createElement('div');
//         modal.className = 'modal-2';
//         modal.style.display = 'flex';
//         modal.style.zIndex = '1000';
//         modal.innerHTML = `
//             <div class="modal-content-2">
//                 <h3 class="modal-title-2">${title}</h3>
//                 <p style="text-align:center;margin-bottom:20px;">${message}</p>
//                 <div class="modal-actions-2">
//                     <button class="btn-2 btn-success-2" id="confirm-ok-2">${confirmText}</button>
//                     <button class="btn-2 btn-danger-2" id="confirm-cancel-2">${cancelText}</button>
//                 </div>
//             </div>
//         `;
//         document.body.appendChild(modal);

//         document.getElementById('confirm-ok-2').addEventListener('click', () => {
//             modal.remove();
//             resolve(true);
//         });
//         document.getElementById('confirm-cancel-2').addEventListener('click', () => {
//             modal.remove();
//             resolve(false);
//         });
//     });
// }

// // === مودال‌ها ===
// function openModal(id) { document.getElementById(id).style.display = 'flex'; }
// function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// function openEditModal(type) {
//     if (type === 'username') {
//         document.getElementById('new-username-2').value = userData.username;
//         openModal('username-modal-2');
//     } else if (type === 'password') {
//         openModal('password-modal-2');
//     }
// }
// function openSettingsModal() { openModal('settings-modal-2'); }
// function openDeleteModal() { openModal('delete-modal-2'); closeModal('settings-modal-2'); }

// // === ذخیره نام کاربری ===
// function saveUsername() {
//     const newUsername = document.getElementById('new-username-2').value.trim();
//     if (!newUsername) return showNotification('error', 'خطا', 'لطفاً نام کاربری معتبر وارد کنید');
//     userData.username = newUsername;
//     document.getElementById('username-display-2').textContent = newUsername;
//     closeModal('username-modal-2');
//     showNotification('success', 'موفقیت', 'نام کاربری با موفقیت تغییر یافت');
// }

// // === ذخیره رمز عبور ===
// function savePassword() {
//     const currentPass = document.getElementById('current-password-2').value;
//     const newPass = document.getElementById('new-password-2').value;
//     const confirmPass = document.getElementById('confirm-password-2').value;

//     if (!currentPass || !newPass || !confirmPass)
//         return showNotification('error', 'خطا', 'لطفاً تمام فیلدها را پر کنید');
//     if (newPass !== confirmPass)
//         return showNotification('error', 'خطا', 'رمز عبور جدید با تکرار آن مطابقت ندارد');
//     if (newPass.length < 8)
//         return showNotification('error', 'خطا', 'رمز عبور باید حداقل ۸ رقم باشد');

//     showNotification('success', 'موفقیت', 'رمز عبور با موفقیت تغییر یافت');
//     closeModal('password-modal-2');

//     document.getElementById('current-password-2').value = '';
//     document.getElementById('new-password-2').value = '';
//     document.getElementById('confirm-password-2').value = '';
// }

// // === خروج و حذف حساب ===
// async function logout() {
//     if (await showConfirm('خروج از حساب', 'آیا مطمئن هستید؟', 'خروج', 'انصراف')) {
//         showNotification('success', 'موفقیت', 'با موفقیت از حساب خارج شدید');
//         closeModal('settings-modal-2');
//     }
// }

// async function deleteAccount() {
//     if (await showConfirm('حذف حساب', 'این عمل غیرقابل بازگشت است.', 'حذف', 'انصراف')) {
//         showNotification('success', 'موفقیت', 'حساب کاربری حذف شد');
//         closeModal('delete-modal-2');
//     }
// }

// // === تغییر عکس پروفایل ===
// document.getElementById('file-input-2').addEventListener('change', e => {
//     const file = e.target.files[0];
//     if (!file || !file.type.match('image.*')) return showNotification('error', 'خطا', 'لطفاً یک فایل تصویری انتخاب کنید');
//     const reader = new FileReader();
//     reader.onload = event => {
//         document.getElementById('profile-pic-2').src = event.target.result;
//         userData.profilePic = event.target.result;
//         showNotification('success', 'موفقیت', 'عکس پروفایل با موفقیت تغییر یافت');
//     };
//     reader.readAsDataURL(file);
// });

// // === شبیه‌سازی کاهش روزهای اشتراک ===
// function simulateDayPassing() {
//     if (subscriptionData.remainingDays <= 0) return;
//     subscriptionData.remainingDays--;
//     updateSubscriptionUI();
//     if (subscriptionData.remainingDays === 5)
//         showNotification('warning', 'توجه', '۵ روز تا پایان اشتراک باقی مانده است');
//     setTimeout(simulateDayPassing, 3000); // هر 3 ثانیه یک روز
// }

// // === مقداردهی اولیه ===
// document.addEventListener('DOMContentLoaded', () => {
//     createParticles();
//     document.getElementById('username-display-2').textContent = userData.username;
//     document.getElementById('profile-pic-2').src = userData.profilePic;
//     const stats = document.querySelectorAll('.stat-number-2');
//     stats[0].textContent = userData.watchedMovies;
//     stats[1].textContent = userData.learnedWord;
//     stats[2].textContent = userData.comments;
//     updateSubscriptionUI();
//     simulateDayPassing();
// });










// === داده‌های نمونه ===
let userData = {
    username: "محمدرضا",
    email: "example@gmail.com",
    joinDate: "1402/05/10",
    profilePic: "https://via.placeholder.com/150",
    watchedMovies: 124,
    learnedWord: 1756,
    comments: 87
};

let subscriptionData = {
    type: "طلایی",
    totalDays: 30,
    remainingDays: 28,
    expiryDate: "1403/03/15"
};

// === ذرات متحرک ===
function createParticles() {
    const container = document.getElementById('particles-2');
    if (!container) return;
    const count = 30;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle-2');
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(particle);
    }
}

// === آپدیت UI اشتراک ===
function updateSubscriptionUI() {
    const circle = document.querySelector('.progress-ring__circle-2');
    if (!circle) return;
    const percent = Math.round((subscriptionData.remainingDays / subscriptionData.totalDays) * 100);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;

    const remainingEl = document.getElementById('remaining-days-2');
    if (remainingEl) remainingEl.textContent = subscriptionData.remainingDays;
    const typeEl = document.getElementById('subscription-type-2');
    if (typeEl) typeEl.textContent = subscriptionData.type;
    const progressEl = document.getElementById('progress-bar-2');
    if (progressEl) progressEl.style.width = `${percent}%`;
}

// === نوتیفیکیشن ===
function showNotification(type, title, message, duration = 3000) {
    const container = document.getElementById('notification-container-2');
    if (!container) return;
    const notification = document.createElement('div');
    notification.className = `notification-2 ${type}-2`;

    const iconMap = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    const icon = iconMap[type] || 'fa-info-circle';

    notification.innerHTML = `
        <i class="fas ${icon} notification-icon-2"></i>
        <div class="notification-content-2">
            <div class="notification-title-2">${title}</div>
            <div class="notification-message-2">${message}</div>
        </div>
        <button class="notification-close-2" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    if (duration > 0) {
        setTimeout(() => {
            notification.style.animation = 'fadeOut-2 0.5s ease forwards';
            setTimeout(() => notification.remove(), 500);
        }, duration);
    }
    return notification;
}

// === تاییدیه مودال ===
function showConfirm(title, message, confirmText = "تأیید", cancelText = "انصراف") {
    return new Promise(resolve => {
        const modal = document.createElement('div');
        modal.className = 'modal-2';
        modal.style.display = 'flex';
        modal.style.zIndex = '1000';
        modal.innerHTML = `
            <div class="modal-content-2">
                <h3 class="modal-title-2">${title}</h3>
                <p style="text-align:center;margin-bottom:20px;">${message}</p>
                <div class="modal-actions-2">
                    <button class="btn-2 btn-success-2" id="confirm-ok-2">${confirmText}</button>
                    <button class="btn-2 btn-danger-2" id="confirm-cancel-2">${cancelText}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const okBtn = document.getElementById('confirm-ok-2');
        const cancelBtn = document.getElementById('confirm-cancel-2');
        if (okBtn) okBtn.addEventListener('click', () => { modal.remove(); resolve(true); });
        if (cancelBtn) cancelBtn.addEventListener('click', () => { modal.remove(); resolve(false); });
    });
}

// === مودال‌ها ===
function openModal(id) { const el = document.getElementById(id); if (el) el.style.display = 'flex'; }
function closeModal(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }

function openEditModal(type) {
    if (type === 'username') {
        const input = document.getElementById('new-username-2');
        if (input) input.value = userData.username;
        openModal('username-modal-2');
    } else if (type === 'password') {
        openModal('password-modal-2');
    }
}
function openSettingsModal() { openModal('settings-modal-2'); }
function openDeleteModal() { openModal('delete-modal-2'); closeModal('settings-modal-2'); }

// === ذخیره نام کاربری ===
function saveUsername() {
    const input = document.getElementById('new-username-2');
    if (!input) return;
    const newUsername = input.value.trim();
    if (!newUsername) return showNotification('error', 'خطا', 'لطفاً نام کاربری معتبر وارد کنید');
    userData.username = newUsername;
    const display = document.getElementById('username-display-2');
    if (display) display.textContent = newUsername;
    closeModal('username-modal-2');
    showNotification('success', 'موفقیت', 'نام کاربری با موفقیت تغییر یافت');
}

// === ذخیره رمز عبور ===
function savePassword() {
    const currentPass = document.getElementById('current-password-2')?.value;
    const newPass = document.getElementById('new-password-2')?.value;
    const confirmPass = document.getElementById('confirm-password-2')?.value;

    if (!currentPass || !newPass || !confirmPass)
        return showNotification('error', 'خطا', 'لطفاً تمام فیلدها را پر کنید');
    if (newPass !== confirmPass)
        return showNotification('error', 'خطا', 'رمز عبور جدید با تکرار آن مطابقت ندارد');
    if (newPass.length < 8)
        return showNotification('error', 'خطا', 'رمز عبور باید حداقل ۸ رقم باشد');

    showNotification('success', 'موفقیت', 'رمز عبور با موفقیت تغییر یافت');
    closeModal('password-modal-2');

    if (document.getElementById('current-password-2')) document.getElementById('current-password-2').value = '';
    if (document.getElementById('new-password-2')) document.getElementById('new-password-2').value = '';
    if (document.getElementById('confirm-password-2')) document.getElementById('confirm-password-2').value = '';
}

// === خروج و حذف حساب ===
async function logout() {
    if (await showConfirm('خروج از حساب', 'آیا مطمئن هستید؟', 'خروج', 'انصراف')) {
        showNotification('success', 'موفقیت', 'با موفقیت از حساب خارج شدید');
        closeModal('settings-modal-2');
    }
}

async function deleteAccount() {
    if (await showConfirm('حذف حساب', 'این عمل غیرقابل بازگشت است.', 'حذف', 'انصراف')) {
        showNotification('success', 'موفقیت', 'حساب کاربری حذف شد');
        closeModal('delete-modal-2');
    }
}

// === تغییر عکس پروفایل ===
const fileInput = document.getElementById('file-input-2');
if (fileInput) {
    fileInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file || !file.type.match('image.*')) return showNotification('error', 'خطا', 'لطفاً یک فایل تصویری انتخاب کنید');
        const reader = new FileReader();
        reader.onload = event => {
            const profilePic = document.getElementById('profile-pic-2');
            if (profilePic) profilePic.src = event.target.result;
            userData.profilePic = event.target.result;
            showNotification('success', 'موفقیت', 'عکس پروفایل با موفقیت تغییر یافت');
        };
        reader.readAsDataURL(file);
    });
}

// === شبیه‌سازی کاهش روزهای اشتراک ===
function simulateDayPassing() {
    if (subscriptionData.remainingDays <= 0) return;
    subscriptionData.remainingDays--;
    updateSubscriptionUI();
    if (subscriptionData.remainingDays === 5)
        showNotification('warning', 'توجه', '۵ روز تا پایان اشتراک باقی مانده است');
    setTimeout(simulateDayPassing, 3000);
}

// === مقداردهی اولیه ===
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    const usernameDisplay = document.getElementById('username-display-2');
    if (usernameDisplay) usernameDisplay.textContent = userData.username;

    const profilePicEl = document.getElementById('profile-pic-2');
    if (profilePicEl) profilePicEl.src = userData.profilePic;

    const stats = document.querySelectorAll('.stat-number-2');
    if (stats.length >= 3) {
        stats[0].textContent = userData.watchedMovies;
        stats[1].textContent = userData.learnedWord;
        stats[2].textContent = userData.comments;
    }

    updateSubscriptionUI();
    simulateDayPassing();
});

