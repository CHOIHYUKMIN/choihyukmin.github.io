// Main Application Logic
const app = {
    // State
    currentSection: 'start',
    uploadedImage: null,
    physicalAge: null,
    mentalAge: null,
    gender: null,
    genderProbability: null,
    ageGroup: null,
    currentQuestionIndex: 0,
    answers: [],
    totalScore: 0,
    currentQuestionSet: [],

    // Helper: Get age group from physical age
    getAgeGroup(age) {
        if (age < 20) return 'teen';
        if (age < 30) return 'twenties';
        if (age < 40) return 'thirties';
        if (age < 50) return 'forties';
        if (age < 60) return 'fifties';
        return 'sixties';
    },

    // Initialize app
    init() {
        console.log('Initializing Mental Age Calculator...');

        // Check if this is a shared result link
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('shared') === 'true') {
            this.showSharedResult(urlParams);
            return;
        }

        // Set up upload area
        this.setupUploadArea();

        // Initialize age detection model
        initAgeDetection().then(success => {
            if (success) {
                console.log('Age detection ready');
            } else {
                console.error('Failed to initialize age detection');
            }
        });

        // Show start section
        this.showSection('start');
    },

    // Show shared result from URL parameters
    showSharedResult(urlParams) {
        const physicalAge = parseInt(urlParams.get('pa'));
        const mentalAge = parseInt(urlParams.get('ma'));
        const diff = parseInt(urlParams.get('diff'));

        if (isNaN(physicalAge) || isNaN(mentalAge)) {
            // Invalid parameters, show start section instead
            this.showSection('start');
            return;
        }

        // Populate shared result UI
        document.getElementById('shared-physical-age').textContent = physicalAge;
        document.getElementById('shared-mental-age').textContent = mentalAge;

        const ageUnit = i18n.t('ageUnit');
        const diffText = diff > 0 ? `+${diff}` : `${diff}`;
        document.getElementById('shared-diff-value').textContent = `${diffText}${ageUnit}`;

        // Set message based on difference (use i18n)
        let message;
        if (diff < -15) {
            message = i18n.t('resultVeryYoung');
        } else if (diff < -10) {
            message = i18n.t('resultYoung');
        } else if (diff < -5) {
            message = i18n.t('resultFresh');
        } else if (diff < -2) {
            message = i18n.t('resultCute');
        } else if (diff <= 2) {
            message = i18n.t('resultBalance');
        } else if (diff <= 5) {
            message = i18n.t('resultMature');
        } else if (diff <= 10) {
            message = i18n.t('resultWise');
        } else if (diff <= 15) {
            message = i18n.t('resultExpert');
        } else {
            message = i18n.t('resultMentor');
        }

        document.getElementById('shared-message-text').textContent = message;

        // Show shared section
        this.showSection('shared');

        // Set up upload area for when user decides to take test
        this.setupUploadArea();

        // Initialize age detection model in background
        initAgeDetection().then(success => {
            if (success) {
                console.log('Age detection ready');
            }
        });
    },

    // Section navigation
    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(`${sectionId}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
        }
    },

    goToStart() {
        this.showSection('start');
    },

    goToUpload() {
        this.showSection('upload');
    },

    // Upload area setup
    setupUploadArea() {
        const uploadArea = document.getElementById('upload-area');
        const photoInput = document.getElementById('photo-input');

        // Click to upload
        uploadArea.addEventListener('click', () => {
            photoInput.click();
        });

        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--accent-purple)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.2)';

            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.handleImageUpload(file);
            }
        });

        // File input change
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleImageUpload(file);
            }
        });
    },

    // Handle image upload
    handleImageUpload(file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            this.uploadedImage = e.target.result;

            // Show preview
            const previewImage = document.getElementById('preview-image');
            previewImage.src = this.uploadedImage;

            // Hide upload area, show preview
            document.getElementById('upload-area').classList.add('hidden');
            document.getElementById('preview-area').classList.remove('hidden');

            // Analyze the image
            this.analyzeImage(previewImage);
        };

        reader.readAsDataURL(file);
    },

    // Change photo
    changePhoto() {
        document.getElementById('upload-area').classList.remove('hidden');
        document.getElementById('preview-area').classList.add('hidden');
        document.getElementById('analyzing-area').classList.add('hidden');
        document.getElementById('age-result').classList.add('hidden');
        document.getElementById('btn-next').classList.add('hidden');

        // Reset
        this.uploadedImage = null;
        this.physicalAge = null;
        this.gender = null;
        this.genderProbability = null;
        this.ageGroup = null;
    },

    // Analyze image for age
    async analyzeImage(imageElement) {
        // Show analyzing
        document.getElementById('analyzing-area').classList.remove('hidden');
        document.getElementById('age-result').classList.add('hidden');
        document.getElementById('btn-next').classList.add('hidden');

        try {
            // Wait for image to load
            if (!imageElement.complete) {
                await new Promise(resolve => {
                    imageElement.onload = resolve;
                });
            }

            // Estimate age
            const result = await estimateAge(imageElement);
            this.physicalAge = result.age;
            this.gender = result.gender;  // Store gender
            this.genderProbability = result.genderProbability;
            this.ageGroup = this.getAgeGroup(this.physicalAge);  // Calculate age group

            console.log(`Age: ${this.physicalAge}, Gender: ${this.gender}, Age Group: ${this.ageGroup}`);

            // Show result
            setTimeout(() => {
                document.getElementById('analyzing-area').classList.add('hidden');
                document.getElementById('age-result').classList.remove('hidden');

                // Display age
                document.getElementById('physical-age').textContent = this.physicalAge;

                // Display gender if confidence is high enough
                const genderEmoji = result.gender === 'male' ? '👨' : '👩';
                const genderText = result.gender === 'male' ?
                    (i18n.currentLang === 'ko' ? '남성' : i18n.currentLang === 'zh' ? '男性' : 'Male') :
                    (i18n.currentLang === 'ko' ? '여성' : i18n.currentLang === 'zh' ? '女性' : 'Female');
                const genderConfidence = (result.genderProbability * 100).toFixed(0);

                // Update result text to include gender
                const resultValue = document.querySelector('.result-value');
                resultValue.innerHTML = `
                    <span data-i18n="resultText">${i18n.t('resultText')}</span>
                    <strong id="physical-age">${this.physicalAge}</strong>
                    <span data-i18n="resultTextAge">${i18n.t('resultTextAge')}</span>
                    <br>
                    <span style="font-size: 0.9em; opacity: 0.8;">${genderEmoji} ${genderText} (${genderConfidence}%)</span>
                `;

                document.getElementById('btn-next').classList.remove('hidden');
            }, 1500); // Simulate processing time

        } catch (error) {
            document.getElementById('analyzing-area').classList.add('hidden');
            alert(error.message || '얼굴 분석에 실패했습니다. 다른 사진을 시도해주세요.');
        }
    },

    // Start questions
    startQuestions() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.totalScore = 0;

        // Get customized questions based on age group and gender
        this.currentQuestionSet = i18n.getQuestions(this.ageGroup, this.gender);

        console.log(`Selected ${this.currentQuestionSet.length} questions for ${this.ageGroup} ${this.gender || 'any'}`);

        this.showSection('questions');
        this.renderQuestion();
    },

    // Render current question
    renderQuestion() {
        const questionIndex = this.currentQuestionIndex;
        const questions = this.currentQuestionSet;
        const questionData = questions[questionIndex];

        // Handle both old format (direct question object) and new format (with weight)
        const question = questionData.question || questionData.q || questionData;
        const options = questionData.options || questionData.o || [];

        // Update progress
        const progress = ((questionIndex + 1) / questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${questionIndex + 1} / ${questions.length}`;

        // Render question
        const questionContent = document.getElementById('question-content');
        questionContent.innerHTML = `
            <div class="question-card">
                <h2 class="question-title">${question}</h2>
                <div class="options">
                    ${options.map((option, index) => `
                        <button class="option-btn" onclick="app.selectOption(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Select option
    selectOption(optionIndex) {
        const questions = this.currentQuestionSet;
        const questionData = questions[this.currentQuestionIndex];

        // Get score from questionScores
        const baseScore = getQuestionScore(this.currentQuestionIndex, optionIndex);

        // Apply weight if available
        const weight = questionData.weight || 1.0;
        const score = Math.round(baseScore * weight);

        // Save answer
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            optionIndex: optionIndex,
            score: score,
            weight: weight
        });

        this.totalScore += score;

        // Move to next question or show result
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < questions.length) {
            // Next question
            setTimeout(() => {
                this.renderQuestion();
            }, 300);
        } else {
            // Calculate mental age and show result
            this.calculateAndShowResult();
        }
    },

    // Calculate mental age and show result
    calculateAndShowResult() {
        this.mentalAge = calculateMentalAge(this.totalScore, this.currentQuestionSet.length);

        // Show result section
        this.showSection('result');

        // Populate result
        document.getElementById('result-physical-age').textContent = this.physicalAge;
        document.getElementById('result-mental-age').textContent = this.mentalAge;

        // Calculate difference
        const diff = this.mentalAge - this.physicalAge;
        const ageUnit = i18n.t('ageUnit');
        const diffText = diff > 0 ? `+${diff}` : `${diff}`;
        document.getElementById('diff-value').textContent = `${diffText}${ageUnit}`;

        // Set message based on difference (use i18n)
        let emoji, message;

        if (diff < -15) {
            emoji = '👶';
            message = i18n.t('resultVeryYoung');
        } else if (diff < -10) {
            emoji = '🎈';
            message = i18n.t('resultYoung');
        } else if (diff < -5) {
            emoji = '🌸';
            message = i18n.t('resultFresh');
        } else if (diff < -2) {
            emoji = '😊';
            message = i18n.t('resultCute');
        } else if (diff <= 2) {
            emoji = '⚖️';
            message = i18n.t('resultBalance');
        } else if (diff <= 5) {
            emoji = '🎯';
            message = i18n.t('resultMature');
        } else if (diff <= 10) {
            emoji = '🧙';
            message = i18n.t('resultWise');
        } else if (diff <= 15) {
            emoji = '📚';
            message = i18n.t('resultExpert');
        } else {
            emoji = '🎓';
            message = i18n.t('resultMentor');
        }

        document.getElementById('message-emoji').textContent = emoji;
        document.getElementById('message-text').textContent = message;

        // Store message for sharing
        this.resultMessage = message;

        // Add confetti effect
        this.createConfetti();
    },

    // Create confetti animation
    createConfetti() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confetti.style.animationDelay = '0s';

                document.body.appendChild(confetti);

                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 30);
        }
    },

    // Download image
    async downloadImage() {
        await downloadResultImage();
    },

    // Copy link
    async copyLink() {
        await copyLinkToClipboard();
    },

    // Share to KakaoTalk
    shareKakao() {
        const diff = this.mentalAge - this.physicalAge;
        const diffText = diff > 0 ? `${diff}살 더 성숙해요!` : diff < 0 ? `${Math.abs(diff)}살 더 젊어요!` : '딱 맞아요!';
        const resultMessage = this.resultMessage || '재미있는 결과가 나왔어요!';
        shareToKakao(this.physicalAge, this.mentalAge, diffText, resultMessage);
    },

    // Share to X (Twitter)
    shareTwitter() {
        const diff = this.mentalAge - this.physicalAge;
        const diffText = diff > 0 ? `${diff}살 더 성숙해요!` : diff < 0 ? `${Math.abs(diff)}살 더 젊어요!` : '딱 맞아요!';
        shareToTwitter(this.physicalAge, this.mentalAge, diffText);
    },

    // Share to Instagram
    shareInstagram() {
        shareToInstagram();
    },

    // Restart
    restart() {
        this.uploadedImage = null;
        this.physicalAge = null;
        this.mentalAge = null;
        this.gender = null;
        this.genderProbability = null;
        this.ageGroup = null;
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.totalScore = 0;
        this.currentQuestionSet = [];

        // Reset UI
        document.getElementById('upload-area').classList.remove('hidden');
        document.getElementById('preview-area').classList.add('hidden');
        document.getElementById('analyzing-area').classList.add('hidden');
        document.getElementById('age-result').classList.add('hidden');
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('photo-input').value = '';

        this.showSection('start');
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
