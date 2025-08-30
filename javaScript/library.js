    let words444 = [
            {
                id: 1,
                word: "تحقیق",
                example: "برای نوشتن مقاله باید تحقیقات زیادی انجام داد.",
                learned: false,
                details: {
                    persianDefinition: "جستجو و بررسی دقیق برای کشف حقایق یا حل مسئله‌ای",
                    englishDefinition: "Research: systematic investigation to establish facts",
                    examples: ["تحقیقات علمی پایه‌ای برای پیشرفت تکنولوژی هستند.", "وی سال‌ها روی این موضوع تحقیق کرد."],
                    synonyms: ["جستجو", "بررسی", "کاوش", "پژوهش"],
                    antonyms: ["بی‌توجهی", "غفلت"],
                    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                }
            },
            {
                id: 2,
                word: "ابتکار",
                example: "استفاده از انرژی خورشیدی نشانه ابتکار است.",
                learned: true,
                details: {
                    persianDefinition: "توانایی خلق ایده‌های جدید و نوآوری",
                    englishDefinition: "Initiative: the ability to assess and initiate things independently",
                    examples: ["مدیر این شرکت به خاطر ابتکاراتش معروف است.", "ابتکار عمل در کارها بسیار مهم است."],
                    synonyms: ["نوآوری", "خلاقیت", "اختراع"],
                    antonyms: ["تقلید", "پیروی"],
                    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
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
            persianDefinition444: document.getElementById('persianDefinition444'),
            englishDefinition444: document.getElementById('englishDefinition444'),
            examplesList444: document.getElementById('examplesList444'),
            synonymsList444: document.getElementById('synonymsList444'),
            antonymsList444: document.getElementById('antonymsList444'),
            wordAudio444: document.getElementById('wordAudio444'),
            pronounceEnglishBtn444: document.getElementById('pronounceEnglishBtn444'),
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
        const synth444 = window.speechSynthesis;

        function init444() {
            createParticles444();
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
            const total = words444.length;
            const learned = words444.filter(w => w.learned).length;
            dom444.wordsCount444.textContent = `تعداد واژه‌ها: ${total} (یادگرفته شده: ${learned} | یادگرفته نشده: ${total - learned})`;
        }

        function showNotification444(message, isSuccess = true) {
            dom444.notification444.className = `notification444 ${isSuccess ? 'notification-success444' : 'notification-warning444'} show444`;
            dom444.notificationIcon444.className = `notification-icon444 fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
            dom444.notificationMessage444.textContent = message;
            setTimeout(() => {
                dom444.notification444.classList.remove('show444');
                setTimeout(() => dom444.notification444.classList.remove('notification-success444', 'notification-warning444'), 300);
            }, 3000);
        }

        function pronounceEnglishWord444(text) {
            if (synth444.speaking) synth444.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            synth444.speak(utterance);
        }

        function showWordDetails444(word) {
            dom444.modalWordTitle444.textContent = word.word;
            dom444.persianDefinition444.textContent = word.details.persianDefinition;
            dom444.englishDefinition444.textContent = word.details.englishDefinition;
            dom444.examplesList444.innerHTML = word.details.examples.map(ex => `<li>${ex}</li>`).join('');
            dom444.synonymsList444.innerHTML = word.details.synonyms.map(syn => `<li>${syn}</li>`).join('');
            dom444.antonymsList444.innerHTML = word.details.antonyms.map(ant => `<li>${ant}</li>`).join('');
            dom444.wordAudio444.querySelector('source').src = word.details.audio;
            dom444.wordAudio444.load();
            dom444.wordModal444.style.display = 'block';
        }

        function showDeleteConfirmation444(wordId, wordText) {
            wordToDelete444 = wordId;
            dom444.confirmTitle444.textContent = `حذف واژه "${wordText}"`;
            dom444.confirmMessage444.textContent = `آیا مطمئن هستید که می‌خواهید واژه "${wordText}" را حذف کنید؟ این عمل قابل بازگشت نیست.`;
            dom444.confirmModal444.style.display = 'block';
        }

        function addWord444() {
            const wordText = dom444.wordInput444.value.trim();
            if (!wordText) return;

            const newWord = {
                id: Date.now(),
                word: wordText,
                example: `مثال: این یک مثال برای ${wordText} است.`,
                learned: false,
                details: {
                    persianDefinition: `تعریف فارسی برای ${wordText}`,
                    englishDefinition: `English definition for ${wordText}`,
                    examples: [`مثال ۱ برای ${wordText}`, `مثال ۲ برای ${wordText}`],
                    synonyms: ["هم‌معنی ۱", "هم‌معنی ۲"],
                    antonyms: ["مخالف ۱", "مخالف ۲"],
                    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                }
            };

            words444.unshift(newWord);
            renderWords444();
            updateWordsCount444();
            dom444.wordInput444.value = '';
            showNotification444(`واژه "${wordText}" با موفقیت اضافه شد!`);
        }

        function toggleLearned444(wordId) {
            const word = words444.find(w => w.id === wordId);
            if (!word) return;
            word.learned = !word.learned;
            renderWords444();
            updateWordsCount444();
            showNotification444(`واژه "${word.word}" ${word.learned ? 'یادگرفته شده' : 'یادگرفته نشده'}!`, word.learned);
        }

        function deleteWord444(wordId) {
            const word = words444.find(w => w.id === wordId);
            words444 = words444.filter(w => w.id !== wordId);
            renderWords444();
            updateWordsCount444();
            showNotification444(`واژه "${word.word}" حذف شد!`, false);
        }

        function pronounceWord444(word) {
            const audio = new Audio(word.details.audio);
            audio.play();
        }

        function setupEventListeners444() {
            dom444.addWordBtn444.addEventListener('click', addWord444);
            dom444.wordInput444.addEventListener('keypress', e => e.key === 'Enter' && addWord444());
            dom444.searchInput444.addEventListener('input', e => {
                currentSearchTerm444 = e.target.value;
                renderWords444();
            });
            dom444.filterButtons444.forEach(btn => btn.addEventListener('click', () => {
                dom444.filterButtons444.forEach(b => b.classList.remove('active444'));
                btn.classList.add('active444');
                currentFilter444 = btn.dataset.filter;
                renderWords444();
            }));
            dom444.closeModalBtn444.addEventListener('click', () => dom444.wordModal444.style.display = 'none');
            dom444.tabs444.forEach(tab => tab.addEventListener('click', () => {
                dom444.tabs444.forEach(t => t.classList.remove('active444'));
                dom444.tabContents444.forEach(c => c.classList.remove('active444'));
                tab.classList.add('active444');
                document.getElementById(tab.dataset.tab + 'Tab444').classList.add('active444');
            }));
            dom444.pronounceEnglishBtn444.addEventListener('click', () => pronounceEnglishWord444(dom444.englishDefinition444.textContent));
            dom444.confirmDeleteBtn444.addEventListener('click', () => {
                if (wordToDelete444) {
                    deleteWord444(wordToDelete444);
                    wordToDelete444 = null;
                    dom444.confirmModal444.style.display = 'none';
                }
            });
            dom444.cancelDeleteBtn444.addEventListener('click', () => {
                wordToDelete444 = null;
                dom444.confirmModal444.style.display = 'none';
            });
            dom444.wordsContainer444.addEventListener('click', e => {
                const card = e.target.closest('.word-card444');
                if (!card) return;
                const wordId = parseInt(card.dataset.id);
                const word = words444.find(w => w.id === wordId);
                if (e.target.closest('.action-btn-learn444')) toggleLearned444(wordId);
                else if (e.target.closest('.action-btn-delete444')) showDeleteConfirmation444(wordId, word.word);
                else if (e.target.closest('.action-btn-pronounce444')) pronounceWord444(word);
                else if (e.target.closest('.action-btn-details444')) showWordDetails444(word);
            });
        }

        init444();