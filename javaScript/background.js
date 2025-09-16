//بک گراند متحرک بادی
   // ایجاد ذرات متحرک
        const particlesContainer333 = document.getElementById('particlesbody333');
        const particleCount333 = 15; // تعداد ذرات
        
        // رنگ‌های مختلف برای ذرات (تم لرینو - آبی/بنفش)
        const colors333 = [
            'rgba(88, 101, 242, 0.7)',   // آبی لرینو
            'rgba(114, 137, 218, 0.7)',  // آبی روشن لرینو
            'rgba(153, 170, 181, 0.7)',  // آبی خاکستری
            'rgba(185, 187, 190, 0.7)',  // خاکستری روشن
            'rgba(170, 142, 214, 0.7)'    // بنفش لرینو
        ];
        
        // ایجاد ذرات
        for (let i333 = 0; i333 < particleCount333; i333++) {
            const particle333 = document.createElement('div');
            particle333.classList.add('particle333');
            
            // اندازه تصادفی بین 2 تا 8 پیکسل
            const size333 = Math.random() * 6 + 2;
            particle333.style.width = `${size333}px`;
            particle333.style.height = `${size333}px`;
            
            // موقعیت تصادفی در صفحه
            particle333.style.left = `${Math.random() * 100}%`;
            particle333.style.top = `${Math.random() * 100}%`;
            
            // تاخیر انیمیشن تصادفی
            particle333.style.animationDelay = `${Math.random() * 15}s`;
            
            // مدت زمان انیمیشن تصادفی
            const duration333 = Math.random() * 10 + 10;
            particle333.style.animationDuration = `${duration333}s`;
            
            // انتخاب رنگ تصادفی
            const randomColor333 = colors333[Math.floor(Math.random() * colors333.length)];
            particle333.style.background = randomColor333;
            
            // شفافیت تصادفی
            particle333.style.opacity = Math.random() * 0.7 + 0.3;
            
            // افزودن ذره به کانتینر
            particlesContainer333.appendChild(particle333);
        }
        
        // تغییر اندازه ذرات هنگام تغییر سایز پنجره
        window.addEventListener('resize', function() {
            const particles333 = document.querySelectorAll('.particle333');
            particles333.forEach(particle333 => {
                // تنظیم مجدد موقعیت ذرات
                particle333.style.left = `${Math.random() * 100}%`;
                particle333.style.top = `${Math.random() * 100}%`;
            });
        });







        