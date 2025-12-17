// Internationalization (i18n) Manager
const i18n = {
    currentLang: 'ko',
    translations: {
        ko: translations_ko,
        en: translations_en,
        zh: translations_zh
    },

    // Initialize i18n
    init() {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('mentalAge_lang');

        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('zh')) {
                this.currentLang = 'zh';
            } else if (browserLang.startsWith('en')) {
                this.currentLang = 'en';
            } else {
                this.currentLang = 'ko'; // Default to Korean
            }
        }

        console.log(`Language initialized: ${this.currentLang}`);
        this.updateUI();
        this.updateLanguageButtons();
    },

    // Set language
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not supported`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('mentalAge_lang', lang);
        console.log(`Language changed to: ${lang}`);

        this.updateUI();
        this.updateLanguageButtons();

        // Re-render current question if in questions section and app is available
        if (window.app && app.currentSection === 'questions' && app.currentQuestionIndex < this.getQuestions().length) {
            app.renderQuestion();
        }
    },

    // Get translation by key
    t(key) {
        const translation = this.translations[this.currentLang][key];
        return translation !== undefined ? translation : key;
    },

    // Get questions for current language with age/gender customization
    getQuestions(ageGroup = null, gender = null) {
        const questionsData = this.translations[this.currentLang].questions;

        // If questions is an array (old format), return it directly
        if (Array.isArray(questionsData)) {
            return questionsData;
        }

        // New format: age-gender customized questions
        const selectedQuestions = [];

        // Determine age group
        let group = ageGroup || 'twenties'; // Default to twenties

        // Ensure the group exists, fallback to twenties
        if (!questionsData[group]) {
            group = 'twenties';
        }

        const groupData = questionsData[group];

        // Add common questions for this age group
        if (groupData.common && Array.isArray(groupData.common)) {
            selectedQuestions.push(...groupData.common);
        }

        // Add gender-specific questions if available
        if (gender && groupData[gender] && Array.isArray(groupData[gender])) {
            selectedQuestions.push(...groupData[gender]);
        }

        // Add universal questions
        if (questionsData.universal && Array.isArray(questionsData.universal)) {
            selectedQuestions.push(...questionsData.universal);
        }

        // If we don't have enough questions, add more from common
        if (selectedQuestions.length < 10 && groupData.common) {
            const needed = 10 - selectedQuestions.length;
            const additional = groupData.common.slice(0, needed);
            selectedQuestions.push(...additional);
        }

        // Limit to 10 questions
        return selectedQuestions.slice(0, 10);
    },

    // Update all UI text elements
    updateUI() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            // Handle HTML content (like <br> tags)
            if (translation.includes('<br>') || translation.includes('<strong>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update meta tags for SEO
        document.querySelector('meta[name="description"]').setAttribute('content', this.t('subtitle').replace(/<br>/g, ' '));
        document.title = this.t('title').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() + ' | Mental Age Calculator';
    },

    // Update language selector (dropdown)
    updateLanguageButtons() {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = this.currentLang;
        }
    }
};

// Expose to global scope
window.i18n = i18n;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}
