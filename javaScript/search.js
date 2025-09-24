
//         // // ایجاد ذرات متحرک
//         // const particlesContainer = document.getElementById('particles');
//         // const particleCount = 30;
        
//         // for (let i = 0; i < particleCount; i++) {
//         //     const particle = document.createElement('div');
//         //     particle.classList.add('particle');
            
//         //     // اندازه تصادفی بین 2 تا 6 پیکسل
//         //     const size = Math.random() * 4 + 2;
//         //     particle.style.width = `${size}px`;
//         //     particle.style.height = `${size}px`;
            
//         //     // موقعیت تصادفی
//         //     particle.style.left = `${Math.random() * 100}%`;
//         //     particle.style.top = `${Math.random() * 100}%`;
            
//         //     // تاخیر انیمیشن تصادفی
//         //     particle.style.animationDelay = `${Math.random() * 15}s`;
            
//         //     // مدت زمان انیمیشن تصادفی
//         //     const duration = Math.random() * 10 + 10;
//         //     particle.style.animationDuration = `${duration}s`;
            
//         //     // شفافیت تصادفی
//         //     particle.style.opacity = Math.random() * 0.5 + 0.1;
            
//         //     particlesContainer.appendChild(particle);
//         // }
        
//         // // اعتبار سنجی فرم جستجو
//         // const searchForm = document.querySelector('.search-box');
//         // const searchInput = document.querySelector('.search-input');
//         // const suggestionsBox = document.getElementById('suggestions');
        
//         // // نمونه داده‌های پیشنهادی
//         // const sampleSuggestions = [
//         //     "پدرخوانده",
//         //     "شبکه اجتماعی",
//         //     "بریکینگ بد",
//         //     "فرار از زندان",
//         //     "داستان اسباب‌بازی",
//         //     "اینتراستلار",
//         //     "جوکر",
//         //     "روح",
//         //     "مرد عنکبوتی",
//         //     "دزدان دریایی کارائیب",
//         //     "دکتر استرنج",
//         //     "بازی تاج و تخت"
//         // ];
        
//         // // نمایش پیشنهادات هنگام تایپ
//         // searchInput.addEventListener('input', function() {
//         //     const inputText = this.value.trim().toLowerCase();
//         //     suggestionsBox.innerHTML = '';
            
//         //     if (inputText.length > 0) {
//         //         const filtered = sampleSuggestions.filter(item => 
//         //             item.toLowerCase().includes(inputText)
//         //         );
                
//         //         if (filtered.length > 0) {
//         //             filtered.forEach(item => {
//         //                 const div = document.createElement('div');
//         //                 div.classList.add('suggestion-item');
//         //                 div.textContent = item;
//         //                 div.addEventListener('click', function() {
//         //                     searchInput.value = item;
//         //                     suggestionsBox.style.display = 'none';
//         //                     performSearch(item);
//         //                 });
//         //                 suggestionsBox.appendChild(div);
//         //             });
//         //             suggestionsBox.style.display = 'block';
//         //         } else {
//         //             suggestionsBox.style.display = 'none';
//         //         }
//         //     } else {
//         //         suggestionsBox.style.display = 'none';
//         //     }
//         // });
        
//         // // مخفی کردن پیشنهادات هنگام کلیک خارج
//         // document.addEventListener('click', function(e) {
//         //     if (!searchForm.contains(e.target)) {
//         //         suggestionsBox.style.display = 'none';
//         //     }
//         // });
        
//         // // تابع جستجو
//         // function performSearch(query) {
//         //     if (query.trim() === '') {
//         //         searchInput.focus();
//         //     } else {
//         //         // اینجا می‌توانید درخواست AJAX به سرور ارسال کنید
//         //         alert(`در حال جستجوی: "${query}"`);
//         //         // برای نمونه:
//         //         // fetch(`/search?q=${encodeURIComponent(query)}`)
//         //         //     .then(response => response.json())
//         //         //     .then(data => showResults(data));
//         //     }
//         // }
        
//         // // اضافه کردن رویداد کلیک برای دکمه جستجو
//         // document.querySelector('.search-btn').addEventListener('click', function() {
//         //     performSearch(searchInput.value);
//         // });
        
//         // // جستجو با اینتر
//         // searchInput.addEventListener('keypress', function(e) {
//         //     if (e.key === 'Enter') {
//         //         performSearch(this.value);
//         //     }
//         // });

//         // ایجاد ذرات متحرک
// const particlesContainer = document.getElementById('particles');
// const particleCount = 30;

// for (let i = 0; i < particleCount; i++) {
//     const particle = document.createElement('div');
//     particle.classList.add('particle');

//     const size = Math.random() * 4 + 2;
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;

//     particle.style.left = `${Math.random() * 100}%`;
//     particle.style.top = `${Math.random() * 100}%`;

//     particle.style.animationDelay = `${Math.random() * 15}s`;
//     const duration = Math.random() * 10 + 10;
//     particle.style.animationDuration = `${duration}s`;

//     particle.style.opacity = Math.random() * 0.5 + 0.1;

//     particlesContainer.appendChild(particle);
// }

// // اجزای جستجو
// const searchForm = document.querySelector('.search-box');
// const searchInput = document.querySelector('.search-input');
// const suggestionsBox = document.getElementById('suggestions');

// // فیلتر کردن آیتم‌های HTML هنگام تایپ
// // searchInput.addEventListener('input', function () {
// //     const inputText = this.value.trim().toLowerCase();
// //     const items = suggestionsBox.querySelectorAll('.suggestion-item');

// //     let hasMatch = false;
// //     items.forEach(item => {
// //         if (item.textContent.toLowerCase().includes(inputText) && inputText.length > 0) {
// //             item.style.display = 'block';
// //             hasMatch = true;
// //         } else {
// //             item.style.display = 'none';
// //         }
// //     });

// //     suggestionsBox.style.display = hasMatch ? 'block' : 'none';
// // });

// // انتخاب آیتم
// suggestionsBox.addEventListener('click', function (e) {
//     if (e.target.classList.contains('suggestion-item')) {
//         searchInput.value = e.target.textContent;
//         suggestionsBox.style.display = 'none';
//         performSearch(e.target.textContent);
//     }
// });

// // بستن لیست هنگام کلیک بیرون
// document.addEventListener('click', function (e) {
//     if (!searchForm.contains(e.target)) {
//         suggestionsBox.style.display = 'none';
//     }
// });

// // تابع جستجو
// function performSearch(query) {
//     if (query.trim() === '') {
//         searchInput.focus();
//     } else {
//         alert(`در حال جستجوی: "${query}"`);
//         // اینجا بک‌اند رو صدا بزن
//     }
// }

// // کلیک روی دکمه جستجو
// document.querySelector('.search-btn').addEventListener('click', function () {
//     performSearch(searchInput.value);
// });

// // جستجو با اینتر
// searchInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         performSearch(this.value);
//     }
// });














// =========================
// PARTICLES
// =========================
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
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;

    particlesContainer.appendChild(particle);
}

// =========================
// SEARCH WITH SUGGESTIONS
// =========================
const searchForm = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const suggestionsBox = document.getElementById('suggestions');

// نمونه داده‌ها برای پیشنهادات (می‌تونی از سرور هم بگیری)
// const sampleSuggestions = [
//     "پدرخوانده","شبکه اجتماعی","بریکینگ بد","فرار از زندان",
//     "داستان اسباب‌بازی","اینتراستلار","جوکر","روح",
//     "مرد عنکبوتی","دزدان دریایی کارائیب","دکتر استرنج","بازی تاج و تخت"
// ];

// نمایش پیشنهادات هنگام تایپ
searchInput.addEventListener('input', function() {
    const inputText = this.value.trim().toLowerCase();
    suggestionsBox.innerHTML = '';

    if(inputText.length > 0){
        const filtered = sampleSuggestions.filter(item => item.toLowerCase().includes(inputText));
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = item;
            suggestionsBox.appendChild(div);
        });
        suggestionsBox.style.display = filtered.length > 0 ? 'block' : 'none';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// انتخاب آیتم
suggestionsBox.addEventListener('click', function(e) {
    if(e.target.classList.contains('suggestion-item')){
        searchInput.value = e.target.textContent;
        suggestionsBox.style.display = 'none';
        performSearch(e.target.textContent);
    }
});

// بستن لیست پیشنهادات هنگام کلیک خارج
document.addEventListener('click', function(e){
    if(!searchForm.contains(e.target)){
        suggestionsBox.style.display = 'none';
    }
});

// دکمه جستجو
document.querySelector('.search-btn')?.addEventListener('click', () => {
    performSearch(searchInput.value);
});

// جستجو با اینتر
searchInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        performSearch(this.value);
    }
});

// تابع جستجو (می‌تونی با Livewire یا fetch سرور جایگزین کنی)
function performSearch(query){
    if(query.trim() === ''){
        searchInput.focus();
    } else {
        alert(`در حال جستجوی: "${query}"`);
        // مثال Livewire: window.livewire.emit('search', query);
    }
}
