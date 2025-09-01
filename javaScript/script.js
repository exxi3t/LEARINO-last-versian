
// //footer fix
// const sFooter = document.querySelector('.fixed-footer1')
// //side bar dropdown
// const sideDrop = document.querySelectorAll('.side-bar-dropdown')
// const openLi = document.querySelectorAll('.open-li-link')
// //
// openLi.forEach((link, index) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault(); 
    
    
//     sideDrop.forEach((drop, dropIndex) => {
//       if (dropIndex !== index) {
//         drop.classList.add('none');
//       }
//     });
    

//     sideDrop[index].classList.toggle('none');
//   });
// });

// // nav
// const dropdownLink = document.querySelectorAll('.dropdown')
// const clickLi = document.querySelectorAll('.li-link')
// const arrowLi = document.querySelectorAll('.arrow-li')
// //
// clickLi[0].addEventListener("click", () => {
//   dropdownLink[0].classList.toggle("hidden");
//   dropdownLink[1].classList.add("hidden");
// });
// clickLi[1].addEventListener("click", () => {
//   dropdownLink[1].classList.toggle("hidden");
//   dropdownLink[0].classList.add("hidden");
// });

// dropdownLink.forEach((toggle, index) => {
//   toggle.addEventListener("click", (e) => {
//     // e.stopPropagation();      // برای جلوگیری از بستن منو هنگام کلیک روی خودش
//     dropdownLink[index].classList.toggle("hidden");
//   });
// });

// // menu
// const bar1 = document.querySelector('.bar1')
// const bar2 = document.querySelector('.bar2')
// const bar3 = document.querySelector('.bar3')
// const menu = document.querySelector('.menu-ham')
// const sideBar = document.querySelector('.side-menu')
// const closeIcon = document.querySelector('.close-icon')
// //
// menu.addEventListener("click", () => {
//   sideBar.style.transform = "translateX(0)";
//   document.body.classList.add("no-scroll")
// })
// closeIcon.addEventListener('click', () => {
//   sideBar.style.transform = "translateX(800px)";
//   document.body.classList.remove("no-scroll")

// })
// document.addEventListener('click', (e) => {
//   if (
//     !sideBar.contains(e.target) &&
//     !menu.contains(e.target) &&
//     !closeIcon.contains(e.target)
//   ) {
//     sideBar.style.transform = "translateX(800px)";
//     document.body.classList.remove("no-scroll")
//   }
// })



// // scroll nav
// const Nav = document.querySelector('nav')
// const scrollNav = document.querySelector('.nav-scroll')
// //
// document.addEventListener("scroll", () => {

//   if (document.documentElement.scrollTop > 70) {
//     Nav.classList.add("scroll-nav")
//     // sFooter.style.opacity = '1'
//   } else {
//     Nav.classList.remove("scroll-nav");
//     // sFooter.style.opacity = '0'
//   }
// })





// // این فانکشن برای بستن هر منوی بازی استفاده میشه
// document.addEventListener("click", (e) => {
//   // توی این خط کد میگه که وقتی کاربر روی صفحه کلیک کرد
//   clickLi.forEach((toggle, index) => {
//     // برای هر کلیکی که کاربر روی صفحه انجام داده
//     if (!toggle.contains(e.target) && !dropdownLink[index]) {
//       // اگر تارگت کلیک شده روی منو های باز شده نبود
//       dropdownLink[index].classList.add("hidden");
//     }
//   });
// });





// document.addEventListener('DOMContentLoaded', function() {
//     // تنظیمات اولیه
//     const pages = document.querySelectorAll('.page-wrapper');
//     const footerItems = document.querySelectorAll('.footer-item');
//     const navbar = document.querySelector('.navbar'); // انتخاب با کلاس
//     const pageScrollPositions = {};
//     let currentPage = null;

//     // تابع تغییر صفحه
//     function loadPage(pageId) {
//         // ذخیره موقعیت اسکرول فعلی
//         if (currentPage) {
//             pageScrollPositions[currentPage] = window.scrollY;
//         }

//         // مخفی کردن تمام صفحات
//         pages.forEach(page => {
//             page.style.display = 'none';
//             page.classList.remove('active');
//         });

//         // نمایش صفحه جدید
//         const newPage = document.getElementById(`${pageId}-page`);
//         if (newPage) {
//             newPage.style.display = 'block';
//             newPage.classList.add('active');
//             currentPage = pageId;
            
//             // مدیریت نمایش نوبار فقط در صفحه اصلی
//             if (pageId === 'home') {
//                 navbar.style.visibility = 'visible';
//                 navbar.style.position = 'fixed'; // یا 'static' بسته به نیاز شما
//             } else {
//                 navbar.style.visibility = 'hidden';
//                 navbar.style.position = 'absolute';
//             }
            
//             // تنظیم ارتفاع و اسکرول
//             // setTimeout(() => {
//             //     document.body.style.minHeight = `${newPage.scrollHeight}px`;
//             //     window.scrollTo({
//             //         top: pageScrollPositions[pageId] || 0,
//             //         behavior: 'instant'
//             //     });
//             // }, 10);
//         }

//         // به روزرسانی فوتر
//         updateFooter(pageId);
        
//         // تاریخچه مرورگر
//         history.pushState({page: pageId}, '', `#${pageId}`);
//     }

//     // به روزرسانی فوتر (بدون تغییر)
//     function updateFooter(activePage) {
//         footerItems.forEach(item => {
//             const isActive = item.dataset.page === activePage;
//             item.classList.toggle('active', isActive);
//             const indicator = item.querySelector('.indicator');
//             if (indicator) {
//                 indicator.style.width = isActive ? '80%' : '0';
//             }
//         });
//     }

//     // رویدادهای کلیک فوتر (بدون تغییر)
//     footerItems.forEach(item => {
//         item.addEventListener('click', () => loadPage(item.dataset.page));
//     });

//     // مدیریت دکمه بازگشت (بدون تغییر)
//     window.addEventListener('popstate', (e) => {
//         const page = e.state?.page || 'home';
//         loadPage(page);
//     });

//     // مقداردهی اولیه (بدون تغییر)
//     const initialPage = window.location.hash.replace('#', '') || 'home';
//     loadPage(initialPage);
// });









//     // متغیر global برای ذخیره موقعیت اسکرول
// let scrollPosition = 0;



// // استفاده در کدهای منو
// menu.addEventListener("click", () => {
//   sideBar.style.transform = "translateX(0)";
//   disableScroll();
// })

// closeIcon.addEventListener('click', () => {
//   sideBar.style.transform = "translateX(800px)";
//   enableScroll();
// })

// document.addEventListener('click', (e) => {
//   if (!sideBar.contains(e.target) && !menu.contains(e.target)) {
//     sideBar.style.transform = "translateX(800px)";
//     enableScroll();
//   }
// })










// =========================
// FOOTER FIX
// =========================
const sFooter = document.querySelector('.fixed-footer1');

// =========================
// SIDE BAR DROPDOWN
// =========================
const sideDrop = document.querySelectorAll('.side-bar-dropdown');
const openLi = document.querySelectorAll('.open-li-link');

openLi.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        sideDrop.forEach((drop, dropIndex) => {
            if (dropIndex !== index) drop.classList.add('none');
        });
        sideDrop[index].classList.toggle('none');
    });
});

// =========================
// NAV DROPDOWN
// =========================
const dropdownLink = document.querySelectorAll('.dropdown');
const clickLi = document.querySelectorAll('.li-link');
const arrowLi = document.querySelectorAll('.arrow-li');

clickLi[0]?.addEventListener("click", () => {
    dropdownLink[0]?.classList.toggle("hidden");
    dropdownLink[1]?.classList.add("hidden");
});
clickLi[1]?.addEventListener("click", () => {
    dropdownLink[1]?.classList.toggle("hidden");
    dropdownLink[0]?.classList.add("hidden");
});

dropdownLink.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
        dropdownLink[index].classList.toggle("hidden");
    });
});

// =========================
// MENU (HAMBURGER)
// =========================
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const menu = document.querySelector('.menu-ham');
const sideBar = document.querySelector('.side-menu');
const closeIcon = document.querySelector('.close-icon');

menu?.addEventListener("click", () => {
    sideBar.style.transform = "translateX(0)";
    document.body.classList.add("no-scroll");
});

closeIcon?.addEventListener('click', () => {
    sideBar.style.transform = "translateX(800px)";
    document.body.classList.remove("no-scroll");
});

document.addEventListener('click', (e) => {
    if (!sideBar.contains(e.target) && !menu.contains(e.target) && !closeIcon.contains(e.target)) {
        sideBar.style.transform = "translateX(800px)";
        document.body.classList.remove("no-scroll");
    }
});

// =========================
// SCROLL NAV
// =========================
const Nav = document.querySelector('nav');
document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 70) {
        Nav.classList.add("scroll-nav");
    } else {
        Nav.classList.remove("scroll-nav");
    }
});

// =========================
// CLOSE NAV DROPDOWNS ON CLICK OUTSIDE
// =========================
document.addEventListener("click", (e) => {
    clickLi.forEach((toggle, index) => {
        if (!toggle.contains(e.target) && dropdownLink[index]) {
            dropdownLink[index].classList.add("hidden");
        }
    });
});

// =========================
// PAGE NAVIGATION
// =========================
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page-wrapper');
    const footerItems = document.querySelectorAll('.footer-item');
    const navbar = document.querySelector('.navbar');
    const pageScrollPositions = {};
    let currentPage = null;

    // تابع تغییر صفحه
    window.loadPage = function(pageId) {
        if (currentPage) {
            pageScrollPositions[currentPage] = window.scrollY;
        }

        pages.forEach(page => {
            page.style.display = 'none';
            page.classList.remove('active');
        });

        const newPage = document.getElementById(`${pageId}-page`);
        if (newPage) {
            newPage.style.display = 'block';
            newPage.classList.add('active');
            currentPage = pageId;

            if (pageId === 'home') {
                navbar.style.visibility = 'visible';
                navbar.style.position = 'fixed';
            } else {
                navbar.style.visibility = 'hidden';
                navbar.style.position = 'absolute';
            }
        }

        updateFooter(pageId);
        history.pushState({page: pageId}, '', `#${pageId}`);
    };

    function updateFooter(activePage) {
        footerItems.forEach(item => {
            const isActive = item.dataset.page === activePage;
            item.classList.toggle('active', isActive);
            const indicator = item.querySelector('.indicator');
            if (indicator) {
                indicator.style.width = isActive ? '80%' : '0';
            }
        });
    }

    footerItems.forEach(item => {
        item.addEventListener('click', () => loadPage(item.dataset.page));
    });

    window.addEventListener('popstate', (e) => {
        const page = e.state?.page || 'home';
        loadPage(page);
    });

    const initialPage = window.location.hash.replace('#', '') || 'home';
    loadPage(initialPage);

    // =========================
    // GO TO LIBRARY BUTTON
    // =========================
    const libraryBtn = document.querySelector('#goLibraryBtn');
    if (libraryBtn) {
        libraryBtn.addEventListener('click', () => {
            loadPage('library');
        });
    }
    const searchBtn = document.querySelector('#goSearch');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            loadPage('search');
        });
    }
    const profileBtn = document.querySelector('#goProfile');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            loadPage('profile');
        });
    }
    const backBtn = document.querySelector('#goHome');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            loadPage('home');
        });
    }
   
    const backBtn2 = document.querySelector('#goHome2');
    if (backBtn2) {
        backBtn2.addEventListener('click', () => {
            loadPage('home');
        });
    }
    const backBtn3 = document.querySelector('#goHome3');
    if (backBtn3) {
        backBtn3.addEventListener('click', () => {
            loadPage('home');
        });
    }
   
});

        



// install new versian aalert for App
 window.addEventListener("DOMContentLoaded", () => {
    const ua = navigator.userAgent.toLowerCase();

     if (ua.includes("median")) {
    const btnDownload = document.querySelector("#download-but");
    if (btnDownload) btnDownload.style.display = "none"; // یا btn.remove();
     }
    if(ua.includes("median")){
        const menuH = document.querySelector("#ham-menu")
        if(menuH) menuH.style.display = "none";
    }

    // فقط اگر کاربر با نسخه قدیمی (GoNative) وارد شد
    if (ua.includes("gonative")) {
      document.getElementById("updateModal").style.display = "flex";
    }
  });




//  loading

  window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  // وقتی روی هر لینک کلیک شد → لودینگ رو نشون بده
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      // اگر لینک به صفحه‌ی جدید میره (نه # و نه جاوااسکریپت)
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
        loader.style.display = "flex";
      }
    });
  });

  // وقتی صفحه جدید کامل لود شد → مخفی کن
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });
});
