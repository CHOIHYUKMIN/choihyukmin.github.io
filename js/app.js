// Main Application Logic
const app = {
    // State
    currentSection: 'start',
    uploadedImage: null,
    physicalAge: null,
    mentalAge: null,
    currentQuestionIndex: 0,
    answers: [],
    totalScore: 0,

    // Initialize app
    init() {
        console.log('Initializing Mental Age Calculator...');

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

            // Show result
            setTimeout(() => {
                document.getElementById('analyzing-area').classList.add('hidden');
                document.getElementById('age-result').classList.remove('hidden');
                document.getElementById('physical-age').textContent = this.physicalAge;
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
        this.showSection('questions');
        this.renderQuestion();
    },

    // Render current question
    renderQuestion() {
        const questionIndex = this.currentQuestionIndex;
        const questions = getQuestions(); // Get questions from i18n
        const question = questions[questionIndex];

        // Update progress
        const progress = ((questionIndex + 1) / questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${questionIndex + 1} / ${questions.length}`;

        // Render question
        const questionContent = document.getElementById('question-content');
        questionContent.innerHTML = `
            <div class="question-card">
                <h2 class="question-title">${question.question}</h2>
                <div class="options">
                    ${question.options.map((option, index) => `
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
        const questions = getQuestions();

        // Get score from questionScores
        const score = getQuestionScore(this.currentQuestionIndex, optionIndex);

        // Save answer
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            optionIndex: optionIndex,
            score: score
        });

        this.totalScore += score;

        // Move to next question or show result
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < getQuestions().length) {
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
        this.mentalAge = calculateMentalAge(this.totalScore, getQuestions().length);

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
        if (diff < -5) {
            emoji = '🎈';
            message = i18n.t('resultYoung');
        } else if (diff > 5) {
            emoji = '🧙';
            message = i18n.t('resultWise');
        } else {
            emoji = '⚖️';
            message = i18n.t('resultBalance');
        }

        document.getElementById('message-emoji').textContent = emoji;
        document.getElementById('message-text').textContent = message;

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
        shareToKakao(this.physicalAge, this.mentalAge, diffText);
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
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.totalScore = 0;

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
