
// //first slidder set 
// var swiper = new Swiper(".mySwiper", {
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction:
//       false,
//   },
//   loop: true
// });


// //secend slider set 
// var swiper = new Swiper(".my ", {
//   slidesPerView: 1.6,
//   spaceBetween: 20,
//   freeMode: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },


//   //secend sliders breakpoint 
//   breakpoints: {
//     478: {
//       slidesPerView: 1.6,
//     },
//     650:{
//       slidesPerView: 2  ,
//     },
//     768: {
//       slidesPerView: 3  ,
//     },
//     968: {
//       slidesPerView: 3.5,
//     },
   
   
//     1300: {
//       slidesPerView: 5    ,
//     },
//     1650: {
//       slidesPerView: 6.5    ,
//     },
//   },
// });
//  // Logo animation
//         const logo = document.getElementById('logo');
//         document.addEventListener('mousemove', (e) => {
//             const x = e.clientX / window.innerWidth;
//             const y = e.clientY / window.innerHeight;
//             logo.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
//         });

//         // Swiper initialization with corrected settings
//         const footerSwiper = new Swiper('.footer-swiper', {
//             effect: 'coverflow',
//             grabCursor: true,
//             centeredSlides: true,
//             slidesPerView: 'auto',
//             coverflowEffect: {
//                 rotate: 100,
//                 stretch: 0,
//                 depth: 200,
//                 modifier: 1,
//                 slideShadows: true,
//             },
//             loop: true,
//             autoplay: {
//                 delay: 2500,
//                 disableOnInteraction: false,
//             },
//             // تنظیمات اضافه برای نمایش بهتر
//             spaceBetween: 20,
//             breakpoints: {
//                 640: {
//                     slidesPerView: 1,
//                 },
//                 768: {
//                     slidesPerView: 1,
//                 },
//                 1024: {
//                     slidesPerView: 1,
//                 },
//             }
//         });

//         // Modal functionality
//         const modal = document.getElementById("terms-modal");
//         const btn = document.getElementById("terms-link");
//         const span = document.getElementsByClassName("close-modal")[0];

//         btn.onclick = function () {
//             modal.style.display = "block";
//         }

//         span.onclick = function () {
//             modal.style.display = "none";
//         }

//         window.onclick = function (event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         }






// =========================
// FIRST SLIDER
// =========================
var firstSwiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// =========================
// SECOND SLIDER
// =========================
var secondSwiper = new Swiper(".my", {
    slidesPerView: 1.6,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        478: { slidesPerView: 1.6 },
        650: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        968: { slidesPerView: 3.5 },
        1300: { slidesPerView: 5 },
        1650: { slidesPerView: 6.5 },
    },
});

// =========================
// FOOTER SWIPER
// =========================
var footerSwiper = new Swiper('.footer-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 100,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
    },
});

// =========================
// LOGO MOUSE ANIMATION
// =========================
const logo = document.getElementById('logo');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    logo.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

// =========================
// MODAL TERMS
// =========================
const modal = document.getElementById("terms-modal");
const btn = document.getElementById("terms-link");
const closeBtn = document.querySelector(".close-modal");

btn?.addEventListener('click', () => {
    modal.style.display = "block";
});

closeBtn?.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
