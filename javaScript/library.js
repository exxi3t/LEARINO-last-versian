//  let words444 = [
//             {
//                 id: 1,
//                 word: "make",
//                 example: "She will make a cake for the party.",
//                 learned: false,
//                 details: {
//                     meanings: ["ساختن", "به وجود آوردن", "تولید کردن", "انجام دادن"],
//                     examples: ["I will make dinner tonight.", "He makes furniture from wood.", "She made a mistake.", "They made a promise."],
//                     synonyms: ["create", "build", "construct", "produce"],
//                     antonyms: ["destroy", "break", "demolish", "ruin"]
//                 }
//             },
//             {
//                 id: 2,
//                 word: "research",
//                 example: "Scientists conduct research to find new discoveries.",
//                 learned: true,
//                 details: {
//                     meanings: ["تحقیق", "پژوهش", "جستجو", "بررسی"],
//                     examples: ["He is doing research on climate change.", "The research took five years to complete.", "Her research was published in a scientific journal."],
//                     synonyms: ["investigation", "study", "inquiry", "analysis"],
//                     antonyms: ["ignorance", "neglect", "disregard"]
//                 }
//             }
//         ];

//         const dom444 = {
//             wordInput444: document.getElementById('wordInput444'),
//             addWordBtn444: document.getElementById('addWordBtn444'),
//             searchInput444: document.getElementById('searchInput444'),
//             wordsContainer444: document.getElementById('wordsContainer444'),
//             notification444: document.getElementById('notification444'),
//             notificationIcon444: document.querySelector('.notification-icon444'),
//             notificationMessage444: document.querySelector('.notification-message444'),
//             wordModal444: document.getElementById('wordModal444'),
//             closeModalBtn444: document.getElementById('closeModalBtn444'),
//             modalWordTitle444: document.getElementById('modalWordTitle444'),
//             meaningsList444: document.getElementById('meaningsList444'),
//             examplesList444: document.getElementById('examplesList444'),
//             synonymsList444: document.getElementById('synonymsList444'),
//             antonymsList444: document.getElementById('antonymsList444'),
//             pronounceWordBtn444: document.getElementById('pronounceWordBtn444'),
//             tabs444: document.querySelectorAll('.tab444'),
//             tabContents444: document.querySelectorAll('.tab-content444'),
//             filterButtons444: document.querySelectorAll('.filter-btn444'),
//             wordsCount444: document.getElementById('wordsCount444'),
//             particlesContainer444: document.getElementById('particles444'),
//             confirmModal444: document.getElementById('confirmModal444'),
//             confirmTitle444: document.getElementById('confirmTitle444'),
//             confirmMessage444: document.getElementById('confirmMessage444'),
//             confirmDeleteBtn444: document.getElementById('confirmDeleteBtn444'),
//             cancelDeleteBtn444: document.getElementById('cancelDeleteBtn444')
//         };

//         let currentFilter444 = 'all';
//         let currentSearchTerm444 = '';
//         let wordToDelete444 = null;
//         let currentWord444 = null;
//         const synth444 = window.speechSynthesis;

//         function init444() {
//             createParticles444();
//             renderWords444();
//             setupEventListeners444();
//             updateWordsCount444();
//         }

//         function createParticles444() {
//             for (let i = 0; i < 30; i++) {
//                 const particle = document.createElement('div');
//                 particle.classList.add('particle444');
//                 particle.style.width = `${Math.random() * 4 + 2}px`;
//                 particle.style.height = particle.style.width;
//                 particle.style.left = `${Math.random() * 100}%`;
//                 particle.style.top = `${Math.random() * 100}%`;
//                 particle.style.animationDelay = `${Math.random() * 15}s`;
//                 particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
//                 particle.style.opacity = Math.random() * 0.5 + 0.1;
//                 dom444.particlesContainer444.appendChild(particle);
//             }
//         }

//         function renderWords444() {
//             const filteredWords = words444.filter(word => {
//                 if (currentFilter444 === 'learned' && !word.learned) return false;
//                 if (currentFilter444 === 'not-learned' && word.learned) return false;
//                 if (currentSearchTerm444 && !word.word.includes(currentSearchTerm444)) return false;
//                 return true;
//             });

//             dom444.wordsContainer444.innerHTML = filteredWords.length === 0
//                 ? '<div class="no-words444">هیچ واژه‌ای مطابق با جستجوی شما یافت نشد.</div>'
//                 : filteredWords.map(word => createWordCard444(word)).join('');
//         }

//         function createWordCard444(word) {
//             return `
//                 <div class="word-card444 ${word.learned ? 'learned444' : ''}" data-id="${word.id}">
//                     <div class="word-header444">
//                         <h3 class="word-title444">${word.word}</h3>
//                         <div class="word-actions444">
//                             <button class="action-btn444 action-btn-learn444" title="یاد گرفته شده">${word.learned ? '✓' : '○'}</button>
//                             <button class="action-btn444 action-btn-pronounce444" title="تلفظ"><i class="fas fa-volume-up"></i></button>
//                             <button class="action-btn444 action-btn-details444" title="نمایش جزئیات"><i class="fas fa-info"></i></button>
//                             <button class="action-btn444 action-btn-delete444" title="حذف"><i class="fas fa-trash"></i></button>
//                         </div>
//                     </div>
//                     <div class="word-example444">${word.example}</div>
//                 </div>
//             `;
//         }

//         function updateWordsCount444() {
//             const total = words444.length;
//             const learned = words444.filter(w => w.learned).length;
//             dom444.wordsCount444.textContent = `تعداد واژه‌ها: ${total} (یادگرفته شده: ${learned} | یادگرفته نشده: ${total - learned})`;
//         }

//         function showNotification444(message, isSuccess = true) {
//             dom444.notification444.className = `notification444 ${isSuccess ? 'notification-success444' : 'notification-warning444'} show444`;
//             dom444.notificationIcon444.className = `notification-icon444 fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
//             dom444.notificationMessage444.textContent = message;
//             setTimeout(() => {
//                 dom444.notification444.classList.remove('show444');
//                 setTimeout(() => dom444.notification444.classList.remove('notification-success444', 'notification-warning444'), 300);
//             }, 3000);
//         }

//         function pronounceWord444(word) {
//             if (synth444.speaking) synth444.cancel();
//             const utterance = new SpeechSynthesisUtterance(word);
//             utterance.lang = 'en-US';
//             utterance.rate = 0.9;
//             synth444.speak(utterance);
//         }

//         function showWordDetails444(word) {
//             currentWord444 = word;
//             dom444.modalWordTitle444.textContent = word.word;
            
//             // معانی
//             dom444.meaningsList444.innerHTML = word.details.meanings.map(meaning => `<li>${meaning}</li>`).join('');
            
//             // مثال‌ها
//             dom444.examplesList444.innerHTML = word.details.examples.map(ex => `<li>${ex}</li>`).join('');
            
//             // هم‌معنی‌ها
//             dom444.synonymsList444.innerHTML = word.details.synonyms.map(syn => `<li>${syn}</li>`).join('');
            
//             // مخالف‌ها
//             dom444.antonymsList444.innerHTML = word.details.antonyms.map(ant => `<li>${ant}</li>`).join('');
            
//             dom444.wordModal444.style.display = 'block';
//         }

//         function showDeleteConfirmation444(wordId, wordText) {
//             wordToDelete444 = wordId;
//             dom444.confirmTitle444.textContent = `حذف واژه "${wordText}"`;
//             dom444.confirmMessage444.textContent = `آیا مطمئن هستید که می‌خواهید واژه "${wordText}" را حذف کنید؟ این عمل قابل بازگشت نیست.`;
//             dom444.confirmModal444.style.display = 'block';
//         }

//         function addWord444() {
//             const wordText = dom444.wordInput444.value.trim();
//             if (!wordText) return;

//             const newWord = {
//                 id: Date.now(),
//                 word: wordText,
//                 example: `مثال: این یک مثال برای ${wordText} است.`,
//                 learned: false,
//                 details: {
//                     meanings: ["معنی اول", "معنی دوم", "معنی سوم"],
//                     examples: [`مثال ۱ برای ${wordText}`, `مثال ۲ برای ${wordText}`],
//                     synonyms: ["هم‌معنی ۱", "هم‌معنی ۲"],
//                     antonyms: ["مخالف ۱", "مخالف ۲"]
//                 }
//             };

//             words444.unshift(newWord);
//             renderWords444();
//             updateWordsCount444();
//             dom444.wordInput444.value = '';
//             showNotification444(`واژه "${wordText}" با موفقیت اضافه شد!`);
//         }

//         function toggleLearned444(wordId) {
//             const word = words444.find(w => w.id === wordId);
//             if (!word) return;
//             word.learned = !word.learned;
//             renderWords444();
//             updateWordsCount444();
//             showNotification444(`واژه "${word.word}" ${word.learned ? 'یادگرفته شده' : 'یادگرفته نشده'}!`, word.learned);
//         }

//         function deleteWord444(wordId) {
//             const word = words444.find(w => w.id === wordId);
//             words444 = words444.filter(w => w.id !== wordId);
//             renderWords444();
//             updateWordsCount444();
//             showNotification444(`واژه "${word.word}" حذف شد!`, false);
//         }

//         function setupEventListeners444() {
//             dom444.addWordBtn444.addEventListener('click', addWord444);
//             dom444.wordInput444.addEventListener('keypress', e => e.key === 'Enter' && addWord444());
//             dom444.searchInput444.addEventListener('input', e => {
//                 currentSearchTerm444 = e.target.value;
//                 renderWords444();
//             });
//             dom444.filterButtons444.forEach(btn => btn.addEventListener('click', () => {
//                 dom444.filterButtons444.forEach(b => b.classList.remove('active444'));
//                 btn.classList.add('active444');
//                 currentFilter444 = btn.dataset.filter;
//                 renderWords444();
//             }));
//             dom444.closeModalBtn444.addEventListener('click', () => dom444.wordModal444.style.display = 'none');
//             dom444.tabs444.forEach(tab => tab.addEventListener('click', () => {
//                 dom444.tabs444.forEach(t => t.classList.remove('active444'));
//                 dom444.tabContents444.forEach(c => c.classList.remove('active444'));
//                 tab.classList.add('active444');
//                 document.getElementById(tab.dataset.tab + 'Tab444').classList.add('active444');
//             }));
//             dom444.pronounceWordBtn444.addEventListener('click', () => {
//                 if (currentWord444) {
//                     pronounceWord444(currentWord444.word);
//                 }
//             });
//             dom444.confirmDeleteBtn444.addEventListener('click', () => {
//                 if (wordToDelete444) {
//                     deleteWord444(wordToDelete444);
//                     wordToDelete444 = null;
//                     dom444.confirmModal444.style.display = 'none';
//                 }
//             });
//             dom444.cancelDeleteBtn444.addEventListener('click', () => {
//                 wordToDelete444 = null;
//                 dom444.confirmModal444.style.display = 'none';
//             });
            
//             // بستن مودال با کلیک خارج از آن
//             window.addEventListener('click', (e) => {
//                 if (e.target === dom444.wordModal444) {
//                     dom444.wordModal444.style.display = 'none';
//                 }
//                 if (e.target === dom444.confirmModal444) {
//                     dom444.confirmModal444.style.display = 'none';
//                     wordToDelete444 = null;
//                 }
//             });
            
//             dom444.wordsContainer444.addEventListener('click', e => {
//                 const card = e.target.closest('.word-card444');
//                 if (!card) return;
//                 const wordId = parseInt(card.dataset.id);
//                 const word = words444.find(w => w.id === wordId);
//                 if (e.target.closest('.action-btn-learn444')) toggleLearned444(wordId);
//                 else if (e.target.closest('.action-btn-delete444')) showDeleteConfirmation444(wordId, word.word);
//                 else if (e.target.closest('.action-btn-pronounce444')) pronounceWord444(word.word);
//                 else if (e.target.closest('.action-btn-details444')) showWordDetails444(word);
//             });
//         }
//          const backBtn3 = document.querySelector('#goHome3');
//     if (backBtn3) {
//         backBtn3.addEventListener('click', () => {
//             loadPage('home');
//         });
//     }
//         init444();
























let words444 = [
    {
        id: 1,
        word: "make",
        example: "She will make a cake for the party.",
        learned: false,
        details: {
            meanings: ["ساختن", "به وجود آوردن", "تولید کردن", "انجام دادن"],
            examples: ["I will make dinner tonight.", "He makes furniture from wood.", "She made a mistake.", "They made a promise."],
            synonyms: ["create", "build", "construct", "produce"],
            antonyms: ["destroy", "break", "demolish", "ruin"]
        }
    },
    {
        id: 2,
        word: "research",
        example: "Scientists conduct research to find new discoveries.",
        learned: true,
        details: {
            meanings: ["تحقیق", "پژوهش", "جستجو", "بررسی"],
            examples: ["He is doing research on climate change.", "The research took five years to complete.", "Her research was published in a scientific journal."],
            synonyms: ["investigation", "study", "inquiry", "analysis"],
            antonyms: ["ignorance", "neglect", "disregard"]
        }
    }
];

const dom444 = {
    wordInput444: document.getElementById('wordInput444'),
    addWordBtn444: document.getElementById('addWordBtn444'),
    searchInput444: document.getElementById('searchInput444'),
    wordsContainer444: document.getElementById('wordsContainer444'),
    notification444: document.getElementById('notification444'),
    notificationIcon444: document.querySelector('.notification-icon444'),
    notificationMessage444: document.querySelector('.notification-message444'),
    wordModal444: document.getElementById('wordModal444'),
    closeModalBtn444: document.getElementById('closeModalBtn444'),
    modalWordTitle444: document.getElementById('modalWordTitle444'),
    meaningsList444: document.getElementById('meaningsList444'),
    examplesList444: document.getElementById('examplesList444'),
    synonymsList444: document.getElementById('synonymsList444'),
    antonymsList444: document.getElementById('antonymsList444'),
    pronounceWordBtn444: document.getElementById('pronounceWordBtn444'),
    tabs444: document.querySelectorAll('.tab444'),
    tabContents444: document.querySelectorAll('.tab-content444'),
    filterButtons444: document.querySelectorAll('.filter-btn444'),
    wordsCount444: document.getElementById('wordsCount444'),
    particlesContainer444: document.getElementById('particles444'),
    confirmModal444: document.getElementById('confirmModal444'),
    confirmTitle444: document.getElementById('confirmTitle444'),
    confirmMessage444: document.getElementById('confirmMessage444'),
    confirmDeleteBtn444: document.getElementById('confirmDeleteBtn444'),
    cancelDeleteBtn444: document.getElementById('cancelDeleteBtn444')
};

let currentFilter444 = 'all';
let currentSearchTerm444 = '';
let wordToDelete444 = null;
let currentWord444 = null;
const synth444 = window.speechSynthesis;

function init444() {
    if (dom444.particlesContainer444) createParticles444();
    renderWords444();
    setupEventListeners444();
    updateWordsCount444();
}

function createParticles444() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle444');
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        dom444.particlesContainer444.appendChild(particle);
    }
}

function renderWords444() {
    if (!dom444.wordsContainer444) return;

    const filteredWords = words444.filter(word => {
        if (currentFilter444 === 'learned' && !word.learned) return false;
        if (currentFilter444 === 'not-learned' && word.learned) return false;
        if (currentSearchTerm444 && !word.word.includes(currentSearchTerm444)) return false;
        return true;
    });

    dom444.wordsContainer444.innerHTML = filteredWords.length === 0
        ? '<div class="no-words444">هیچ واژه‌ای مطابق با جستجوی شما یافت نشد.</div>'
        : filteredWords.map(word => createWordCard444(word)).join('');
}

function createWordCard444(word) {
    return `
        <div class="word-card444 ${word.learned ? 'learned444' : ''}" data-id="${word.id}">
            <div class="word-header444">
                <h3 class="word-title444">${word.word}</h3>
                <div class="word-actions444">
                    <button class="action-btn444 action-btn-learn444" title="یاد گرفته شده">${word.learned ? '✓' : '○'}</button>
                    <button class="action-btn444 action-btn-pronounce444" title="تلفظ"><i class="fas fa-volume-up"></i></button>
                    <button class="action-btn444 action-btn-details444" title="نمایش جزئیات"><i class="fas fa-info"></i></button>
                    <button class="action-btn444 action-btn-delete444" title="حذف"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="word-example444">${word.example}</div>
        </div>
    `;
}

function updateWordsCount444() {
    if (!dom444.wordsCount444) return;
    const total = words444.length;
    const learned = words444.filter(w => w.learned).length;
    dom444.wordsCount444.textContent = `تعداد واژه‌ها: ${total} (یادگرفته شده: ${learned} | یادگرفته نشده: ${total - learned})`;
}

function showNotification444(message, isSuccess = true) {
    if (!dom444.notification444 || !dom444.notificationIcon444 || !dom444.notificationMessage444) return;
    dom444.notification444.className = `notification444 ${isSuccess ? 'notification-success444' : 'notification-warning444'} show444`;
    dom444.notificationIcon444.className = `notification-icon444 fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
    dom444.notificationMessage444.textContent = message;
    setTimeout(() => {
        dom444.notification444.classList.remove('show444');
        setTimeout(() => dom444.notification444.classList.remove('notification-success444', 'notification-warning444'), 300);
    }, 3000);
}

function pronounceWord444(word) {
    if (synth444.speaking) synth444.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    synth444.speak(utterance);
}

function showWordDetails444(word) {
    if (!dom444.wordModal444) return;
    currentWord444 = word;
    if (dom444.modalWordTitle444) dom444.modalWordTitle444.textContent = word.word;
    if (dom444.meaningsList444) dom444.meaningsList444.innerHTML = word.details.meanings.map(m => `<li>${m}</li>`).join('');
    if (dom444.examplesList444) dom444.examplesList444.innerHTML = word.details.examples.map(e => `<li>${e}</li>`).join('');
    if (dom444.synonymsList444) dom444.synonymsList444.innerHTML = word.details.synonyms.map(s => `<li>${s}</li>`).join('');
    if (dom444.antonymsList444) dom444.antonymsList444.innerHTML = word.details.antonyms.map(a => `<li>${a}</li>`).join('');
    dom444.wordModal444.style.display = 'block';
}

function showDeleteConfirmation444(wordId, wordText) {
    if (!dom444.confirmModal444 || !dom444.confirmTitle444 || !dom444.confirmMessage444) return;
    wordToDelete444 = wordId;
    dom444.confirmTitle444.textContent = `حذف واژه "${wordText}"`;
    dom444.confirmMessage444.textContent = `آیا مطمئن هستید که می‌خواهید واژه "${wordText}" را حذف کنید؟`;
    dom444.confirmModal444.style.display = 'block';
}

function addWord444() {
    if (!dom444.wordInput444) return;
    const wordText = dom444.wordInput444.value.trim();
    if (!wordText) return;

    const newWord = {
        id: Date.now(),
        word: wordText,
        example: `مثال: این یک مثال برای ${wordText} است.`,
        learned: false,
        details: {
            meanings: ["معنی اول", "معنی دوم", "معنی سوم"],
            examples: [`مثال ۱ برای ${wordText}`, `مثال ۲ برای ${wordText}`],
            synonyms: ["هم‌معنی ۱", "هم‌معنی ۲"],
            antonyms: ["مخالف ۱", "مخالف ۲"]
        }
    };

    words444.unshift(newWord);
    renderWords444();
    updateWordsCount444();
    dom444.wordInput444.value = '';
    showNotification444(`واژه "${wordText}" اضافه شد!`);
}

function toggleLearned444(wordId) {
    const word = words444.find(w => w.id === wordId);
    if (!word) return;
    word.learned = !word.learned;
    renderWords444();
    updateWordsCount444();
    showNotification444(`واژه "${word.word}" ${word.learned ? 'یادگرفته شد' : 'یادگرفته نشده'}!`, word.learned);
}

function deleteWord444(wordId) {
    const word = words444.find(w => w.id === wordId);
    words444 = words444.filter(w => w.id !== wordId);
    renderWords444();
    updateWordsCount444();
    if (word) showNotification444(`واژه "${word.word}" حذف شد!`, false);
}

function setupEventListeners444() {
    if (dom444.addWordBtn444) dom444.addWordBtn444.addEventListener('click', addWord444);
    if (dom444.wordInput444) dom444.wordInput444.addEventListener('keypress', e => e.key === 'Enter' && addWord444());
    if (dom444.searchInput444) dom444.searchInput444.addEventListener('input', e => {
        currentSearchTerm444 = e.target.value;
        renderWords444();
    });
    if (dom444.filterButtons444.length) {
        dom444.filterButtons444.forEach(btn => btn.addEventListener('click', () => {
            dom444.filterButtons444.forEach(b => b.classList.remove('active444'));
            btn.classList.add('active444');
            currentFilter444 = btn.dataset.filter;
            renderWords444();
        }));
    }
    if (dom444.closeModalBtn444) dom444.closeModalBtn444.addEventListener('click', () => dom444.wordModal444.style.display = 'none');
    if (dom444.tabs444.length) {
        dom444.tabs444.forEach(tab => tab.addEventListener('click', () => {
            dom444.tabs444.forEach(t => t.classList.remove('active444'));
            dom444.tabContents444.forEach(c => c.classList.remove('active444'));
            tab.classList.add('active444');
            const content = document.getElementById(tab.dataset.tab + 'Tab444');
            if (content) content.classList.add('active444');
        }));
    }
    if (dom444.pronounceWordBtn444) dom444.pronounceWordBtn444.addEventListener('click', () => {
        if (currentWord444) pronounceWord444(currentWord444.word);
    });
    if (dom444.confirmDeleteBtn444) dom444.confirmDeleteBtn444.addEventListener('click', () => {
        if (wordToDelete444) {
            deleteWord444(wordToDelete444);
            wordToDelete444 = null;
            if (dom444.confirmModal444) dom444.confirmModal444.style.display = 'none';
        }
    });
    if (dom444.cancelDeleteBtn444) dom444.cancelDeleteBtn444.addEventListener('click', () => {
        wordToDelete444 = null;
        if (dom444.confirmModal444) dom444.confirmModal444.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === dom444.wordModal444) dom444.wordModal444.style.display = 'none';
        if (e.target === dom444.confirmModal444) {
            dom444.confirmModal444.style.display = 'none';
            wordToDelete444 = null;
        }
    });

    if (dom444.wordsContainer444) {
        dom444.wordsContainer444.addEventListener('click', e => {
            const card = e.target.closest('.word-card444');
            if (!card) return;
            const wordId = parseInt(card.dataset.id);
            const word = words444.find(w => w.id === wordId);
            if (!word) return;
            if (e.target.closest('.action-btn-learn444')) toggleLearned444(wordId);
            else if (e.target.closest('.action-btn-delete444')) showDeleteConfirmation444(wordId, word.word);
            else if (e.target.closest('.action-btn-pronounce444')) pronounceWord444(word.word);
            else if (e.target.closest('.action-btn-details444')) showWordDetails444(word);
        });
    }
}

const backBtn3 = document.querySelector('#goHome3');
if (backBtn3) {
    backBtn3.addEventListener('click', () => {
        if (typeof loadPage === 'function') loadPage('home');
    });
}

init444();
