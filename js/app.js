// Removed ARCHETYPES import - now using i18n

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
    archetype: null,

    // Helper: Get age group from physical age
    getAgeGroup(age) {
        if (age < 20) return 'teen';
        if (age < 30) return 'twenties';
        if (age < 40) return 'thirties';
        if (age < 50) return 'forties';
        if (age < 60) return 'fifties';
        return 'sixties';
    },
    // Map age difference to level code
    mapDiffToLevel(diff) {
        if (diff >= 10) return 'Y_E';
        if (diff >= 5) return 'Y_S';
        if (diff >= 1) return 'Y_M';
        if (diff === 0) return 'B';
        if (diff >= -4) return 'M_M';
        if (diff >= -9) return 'M_S';
        return 'M_E';
    },
    // Pick a random archetype based on gender and diff
    getArchetype(gender, diff) {
        const level = this.mapDiffToLevel(diff);
        const archetypes = i18n.t('archetypes');
        if (!archetypes || !archetypes[gender] || !archetypes[gender][level]) return null;
        const pool = archetypes[gender][level] || [];
        if (!pool.length) return null;
        const idx = Math.floor(Math.random() * pool.length);
        return pool[idx]; // {code, name, desc}
    },

    // Get message key and emoji based on age difference
    getMessageKey(diff) {
        if (diff <= -25) return 'result_m25';
        if (diff <= -24) return 'result_m24';
        if (diff <= -23) return 'result_m23';
        if (diff <= -22) return 'result_m22';
        if (diff <= -21) return 'result_m21';
        if (diff <= -20) return 'result_m20';
        if (diff <= -19) return 'result_m19';
        if (diff <= -18) return 'result_m18';
        if (diff <= -17) return 'result_m17';
        if (diff <= -16) return 'result_m16';
        if (diff <= -15) return 'result_m15';
        if (diff <= -14) return 'result_m14';
        if (diff <= -13) return 'result_m13';
        if (diff <= -12) return 'result_m12';
        if (diff <= -11) return 'result_m11';
        if (diff <= -10) return 'result_m10';
        if (diff <= -9) return 'result_m9';
        if (diff <= -8) return 'result_m8';
        if (diff <= -7) return 'result_m7';
        if (diff <= -6) return 'result_m6';
        if (diff <= -5) return 'result_m5';
        if (diff <= -4) return 'result_m4';
        if (diff <= -3) return 'result_m3';
        if (diff <= -2) return 'result_m2';
        if (diff <= -1) return 'result_m1';
        if (diff === 0) return 'result_0';
        if (diff <= 1) return 'result_p1';
        if (diff <= 2) return 'result_p2';
        if (diff <= 3) return 'result_p3';
        if (diff <= 4) return 'result_p4';
        if (diff <= 5) return 'result_p5';
        if (diff <= 6) return 'result_p6';
        if (diff <= 7) return 'result_p7';
        if (diff <= 8) return 'result_p8';
        if (diff <= 9) return 'result_p9';
        if (diff <= 10) return 'result_p10';
        if (diff <= 11) return 'result_p11';
        if (diff <= 12) return 'result_p12';
        if (diff <= 13) return 'result_p13';
        if (diff <= 14) return 'result_p14';
        if (diff <= 15) return 'result_p15';
        if (diff <= 16) return 'result_p16';
        if (diff <= 17) return 'result_p17';
        if (diff <= 18) return 'result_p18';
        if (diff <= 19) return 'result_p19';
        if (diff <= 20) return 'result_p20';
        if (diff <= 21) return 'result_p21';
        if (diff <= 22) return 'result_p22';
        if (diff <= 23) return 'result_p23';
        if (diff <= 24) return 'result_p24';
        return 'result_p25';
    },

    // Get emoji based on message key
    getEmoji(messageKey) {
        const emojiMap = {
            result_m25: '🌈', result_m24: '🌟', result_m23: '✨', result_m22: '💫', result_m21: '🎈',
            result_m20: '🌸', result_m19: '✨', result_m18: '🎉', result_m17: '🌱', result_m16: '💚',
            result_m15: '🌞', result_m14: '⚡', result_m13: '💛', result_m12: '🌺', result_m11: '🎨',
            result_m10: '🎀', result_m9: '🧸', result_m8: '🎪', result_m7: '🎭', result_m6: '🎵',
            result_m5: '🌈', result_m4: '☀️', result_m3: '🦋', result_m2: '🍃', result_m1: '💪',
            result_0: '⚖️', result_p1: '🎯', result_p2: '🌿', result_p3: '🍂', result_p4: '📚',
            result_p5: '🎓', result_p6: '🧭', result_p7: '🏔️', result_p8: '🔍', result_p9: '💎',
            result_p10: '🧙', result_p11: '🦉', result_p12: '📖', result_p13: '🎖️', result_p14: '💫',
            result_p15: '🌟', result_p16: '🔮', result_p17: '🏆', result_p18: '📜', result_p19: '🎭',
            result_p20: '👑', result_p21: '🌌', result_p22: '✨', result_p23: '🍷', result_p24: '💠',
            result_p25: '📿'
        };
        return emojiMap[messageKey] || '⚖️';
    },

    // Get archetype by code
    getArchetypeByCode(code) {
        const archetypes = i18n.t('archetypes');
        if (!archetypes) return null;

        // Search in male archetypes
        for (const level in archetypes.male) {
            const found = archetypes.male[level].find(a => a.code === code);
            if (found) return found;
        }

        // Search in female archetypes
        for (const level in archetypes.female) {
            const found = archetypes.female[level].find(a => a.code === code);
            if (found) return found;
        }

        return null;
    },


    // Get archetype image path based on code
    getArchetypeImage(code) {
        if (!code) return null;

        let gender = 'male';
        let group = '';

        // Code format: Group_GenderNumber (e.g., Y_E_M1, B_F1)
        if (code.includes('_M')) {
            gender = 'male';
            group = code.split('_M')[0].toLowerCase();
        } else if (code.includes('_F')) {
            gender = 'female';
            group = code.split('_F')[0].toLowerCase();
        } else {
            return null;
        }

        return `img/archetypes/${gender}_${group}.png`;
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

        // Set up event listeners for iOS compatibility
        const btnNext = document.getElementById('btn-next');
        if (btnNext) {
            btnNext.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuestions();
            }, { passive: false });
        }

        // Show start section
        this.showSection('start');
    },

    // Show shared result from URL parameters
    showSharedResult(urlParams) {
        const physicalAge = parseInt(urlParams.get('pa'));
        const mentalAge = parseInt(urlParams.get('ma'));
        const diff = parseInt(urlParams.get('diff'));
        const archetypeCode = urlParams.get('arc');

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

        // Set message based on difference (use i18n with 50 granular levels)
        const messageKey = this.getMessageKey(diff);
        const message = i18n.t(messageKey);

        document.getElementById('shared-message-text').textContent = message;

        // Display shared archetype if available
        // Display shared archetype if available
        /*
        if (archetypeCode) {
            const archetype = this.getArchetypeByCode(archetypeCode);
            if (archetype) {
                const archetypeContainer = document.getElementById('shared-archetype-info');
                if (archetypeContainer) {
                    const archetypeTitle = i18n.t('archetypeTitle');
                    const imagePath = this.getArchetypeImage(archetype.code);
                    const imageHtml = imagePath ? `<img src="${imagePath}" class="archetype-image" alt="${archetype.name}">` : '';

                    archetypeContainer.innerHTML = `
                        <div class="archetype-badge">
                            <div class="archetype-title">${archetypeTitle}</div>
                            <!-- ${imageHtml} -->
                            <div class="archetype-name">✨ ${archetype.name}</div>
                            <div class="archetype-desc">${archetype.desc}</div>
                        </div>
                    `;
                    archetypeContainer.classList.remove('hidden');
                }
            }
        }
        */

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

            // Reload AdSense ads for the new section
            // Wait a bit for the section to be visible before loading ads
            setTimeout(() => {
                try {
                    const ads = targetSection.querySelectorAll('.adsbygoogle');
                    ads.forEach(ad => {
                        // Only push if not already loaded
                        if (!ad.dataset.adsbygoogleStatus) {
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        }
                    });
                } catch (e) {
                    console.log('AdSense reload error:', e);
                }
            }, 100);
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

            // Estimate age, gender, emotion, and landmarks
            const result = await estimateAge(imageElement);
            this.physicalAge = result.age;
            this.gender = result.gender;
            this.genderProbability = result.genderProbability;
            this.ageGroup = this.getAgeGroup(this.physicalAge);

            // Store emotion data
            this.emotion = result.dominantEmotion;
            this.emotionConfidence = result.emotionConfidence;
            this.expressions = result.expressions;

            // Analyze face shape from landmarks
            if (result.landmarks && typeof analyzeFaceShape === 'function') {
                this.faceShape = analyzeFaceShape(result.landmarks);
            }

            // Analyze image colors
            if (typeof analyzeImageColors === 'function') {
                this.imageColors = await analyzeImageColors(imageElement);
            }

            console.log(`Age: ${this.physicalAge}, Gender: ${this.gender}, Emotion: ${this.emotion}, Age Group: ${this.ageGroup}`);
            if (this.faceShape) console.log(`Face Shape: ${this.faceShape.name.ko}`);
            if (this.imageColors) console.log(`Dominant Color: ${this.imageColors.dominant.hex}`);

            // Show result
            setTimeout(() => {
                document.getElementById('analyzing-area').classList.add('hidden');
                document.getElementById('age-result').classList.remove('hidden');

                // Display age
                document.getElementById('physical-age').textContent = this.physicalAge;

                // Get emotion emoji
                const emotionEmojis = {
                    happy: '😊',
                    sad: '😢',
                    angry: '😠',
                    surprised: '😮',
                    neutral: '😐',
                    fearful: '😨',
                    disgusted: '😖'
                };
                const emotionEmoji = emotionEmojis[this.emotion] || '😊';

                // Display gender and emotion
                const genderEmoji = result.gender === 'male' ? '👨' : '👩';
                const genderText = result.gender === 'male' ?
                    (i18n.currentLang === 'ko' ? '남성' : i18n.currentLang === 'zh' ? '男性' : 'Male') :
                    (i18n.currentLang === 'ko' ? '여성' : i18n.currentLang === 'zh' ? '女性' : 'Female');
                const genderConfidence = (result.genderProbability * 100).toFixed(0);

                const emotionText = {
                    happy: { ko: '행복', en: 'Happy', zh: '快乐' },
                    sad: { ko: '슬픔', en: 'Sad', zh: '悲伤' },
                    angry: { ko: '화남', en: 'Angry', zh: '生气' },
                    surprised: { ko: '놀람', en: 'Surprised', zh: '惊讶' },
                    neutral: { ko: '평온', en: 'Neutral', zh: '平静' },
                    fearful: { ko: '두려움', en: 'Fearful', zh: '恐惧' },
                    disgusted: { ko: '불쾌', en: 'Disgusted', zh: '厌恶' }
                };
                const currentEmotion = emotionText[this.emotion][i18n.currentLang] || emotionText[this.emotion].ko;

                // Update result text to include gender and emotion
                const resultValue = document.querySelector('.result-value');
                resultValue.innerHTML = `
                    <span data-i18n="resultText">${i18n.t('resultText')}</span>
                    <strong id="physical-age">${this.physicalAge}</strong>
                    <span data-i18n="resultTextAge">${i18n.t('resultTextAge')}</span>
                    <br>
                    <span style="font-size: 0.9em; opacity: 0.8;">${genderEmoji} ${genderText} (${genderConfidence}%) | ${emotionEmoji} ${currentEmotion}</span>
                `;

                // Show next button with iOS Safari compatibility
                const btnNext = document.getElementById('btn-next');
                btnNext.classList.remove('hidden');
                btnNext.style.display = 'inline-block';
                void btnNext.offsetHeight;
            }, 1500);

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

        // Get archetype based on gender and age difference
        const diff = this.mentalAge - this.physicalAge;
        this.archetype = this.getArchetype(this.gender, diff);
        console.log('Selected archetype:', this.archetype);

        // Show result section
        this.showSection('result');

        // Populate result
        document.getElementById('result-physical-age').textContent = this.physicalAge;
        document.getElementById('result-mental-age').textContent = this.mentalAge;

        // Calculate difference
        const ageUnit = i18n.t('ageUnit');
        const diffText = diff > 0 ? `+${diff}` : `${diff}`;
        document.getElementById('diff-value').textContent = `${diffText}${ageUnit}`;

        // Set message based on difference (use i18n with 50 granular levels)
        const messageKey = this.getMessageKey(diff);
        const emoji = this.getEmoji(messageKey);
        const message = i18n.t(messageKey);

        document.getElementById('message-emoji').textContent = emoji;
        document.getElementById('message-text').textContent = message;

        // Display archetype if available
        /*
        if (this.archetype) {
            const archetypeContainer = document.getElementById('archetype-info');
            if (archetypeContainer) {
                const archetypeTitle = i18n.t('archetypeTitle');
                const imagePath = this.getArchetypeImage(this.archetype.code);
                const imageHtml = imagePath ? `<img src="${imagePath}" class="archetype-image" alt="${this.archetype.name}">` : '';

                archetypeContainer.innerHTML = `
                    <div class="archetype-badge">
                        <div class="archetype-title">${archetypeTitle}</div>
                        <!-- ${imageHtml} -->
                        <div class="archetype-name">✨ ${this.archetype.name}</div>
                        <div class="archetype-desc">${this.archetype.desc}</div>
                    </div>
                `;
                archetypeContainer.classList.remove('hidden');
            }
        }
        */

        // Display additional analysis results
        this.displayAdditionalAnalysis();

        // Store message for sharing
        this.resultMessage = message;

        // Add confetti effect
        this.createConfetti();
    },

    // Display face shape, colors, and weather recommendations
    displayAdditionalAnalysis() {
        const archetypeContainer = document.getElementById('archetype-info');
        if (!archetypeContainer) return;

        let analysisHTML = '<div class="additional-analysis">';

        // Face Shape
        if (this.faceShape) {
            const faceShapeTitle = {
                ko: '얼굴형 분석',
                en: 'Face Shape Analysis',
                zh: '脸型分析'
            }[i18n.currentLang] || '얼굴형 분석';

            analysisHTML += `
                <div class="analysis-card">
                    <div class="analysis-title">${faceShapeTitle}</div>
                    <div class="analysis-content">
                        <div class="analysis-emoji">${this.faceShape.emoji}</div>
                        <div class="analysis-name">${this.faceShape.name[i18n.currentLang]}</div>
                        <div class="analysis-desc">${this.faceShape.description[i18n.currentLang]}</div>
                    </div>
                </div>
            `;
        }

        // Image Colors
        if (this.imageColors && this.imageColors.dominant) {
            const colorTitle = {
                ko: '당신의 대표 색상',
                en: 'Your Signature Color',
                zh: '你的代表色'
            }[i18n.currentLang] || '당신의 대표 색상';

            const colorName = this.imageColors.dominant.name[i18n.currentLang];

            analysisHTML += `
                <div class="analysis-card">
                    <div class="analysis-title">${colorTitle}</div>
                    <div class="analysis-content">
                        <div class="color-palette">
                            <div class="color-main" style="background-color: ${this.imageColors.dominant.hex}"></div>
                            <div class="color-swatches">
                                ${this.imageColors.palette.slice(0, 4).map(color =>
                `<div class="color-swatch" style="background-color: ${color.hex}"></div>`
            ).join('')}
                            </div>
                        </div>
                        <div class="analysis-name">${colorName}</div>
                    </div>
                </div>
            `;
        }

        analysisHTML += '</div>';

        archetypeContainer.innerHTML = analysisHTML;
        archetypeContainer.classList.remove('hidden');
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
        shareToKakao(this.physicalAge, this.mentalAge, diffText, resultMessage, this.archetype);
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
        this.archetype = null;

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

// Expose app to global scope for HTML onclick handlers
window.app = app;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
