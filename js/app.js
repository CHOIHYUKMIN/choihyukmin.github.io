// Import scenario and question data
import { SCENARIOS, SCENARIO_MAP, getAvailableScenarios } from './scenarios.js';
import {
    WEIGHTS,
    ALL_QUESTIONS,
    SCENARIO_MAP,
    getQuestions,
    getAgeGroup
} from './mentalAgeQuestions_final.js';

// Main Application Logic
const app = {
    // State
    currentSection: 'start',
    uploadedImage: null,
    physicalAge: null,
    mentalAge: null,
    mindAge: null,  // 시나리오 기반 마음의 나이
    gender: null,
    genderProbability: null,
    ageGroup: null,
    ageGroupObj: null,  // AGE_GROUPS 객체
    currentQuestionIndex: 0,
    answers: [],
    totalScore: 0,
    currentQuestionSet: [],
    archetype: null,

    // Scenario system
    currentScenario: null,  // SCENARIOS 객체
    currentScenarioQuestions: [],  // 현재 시나리오의 질문 ID 배열
    scenarioAnswers: {},  // { scenarioId: { questionId: answer } }
    emotion: null,
    emotionConfidence: null,
    expressions: null,
    faceShape: null,
    personalColor: null,

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
            previewImage.crossOrigin = 'anonymous'; // Allow canvas to read pixels
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

        // Progress elements
        const progressFill = document.getElementById('analysis-progress');
        const progressText = document.getElementById('analysis-progress-text');
        const analyzingText = document.getElementById('analyzing-text');

        // Helper function to update progress
        const updateProgress = (percent, message) => {
            progressFill.style.width = `${percent}%`;
            progressText.textContent = `${percent}%`;
            if (message) {
                const messages = {
                    ko: message.ko,
                    en: message.en,
                    zh: message.zh
                };
                analyzingText.textContent = messages[i18n.currentLang] || messages.ko;
            }
        };

        try {
            // Wait for image to load
            if (!imageElement.complete) {
                await new Promise(resolve => {
                    imageElement.onload = resolve;
                });
            }

            // Step 1: Age and Gender detection (0-33%)
            updateProgress(10, {
                ko: '얼굴을 감지하고 있어요...',
                en: 'Detecting face...',
                zh: '正在检测面部...'
            });

            // Estimate age, gender, emotion, and landmarks
            const result = await estimateAge(imageElement);
            this.physicalAge = result.age;
            this.gender = result.gender;
            this.genderProbability = result.genderProbability;
            this.ageGroup = this.getAgeGroup(this.physicalAge);

            updateProgress(33, {
                ko: '나이와 성별을 분석했어요!',
                en: 'Age and gender analyzed!',
                zh: '年龄和性别分析完成！'
            });

            // Step 2: Emotion analysis (33-66%)
            await new Promise(resolve => setTimeout(resolve, 300));
            updateProgress(50, {
                ko: '감정을 분석하고 있어요...',
                en: 'Analyzing emotions...',
                zh: '正在分析情绪...'
            });

            // Store emotion data
            this.emotion = result.dominantEmotion;
            this.emotionConfidence = result.emotionConfidence;
            this.expressions = result.expressions;

            updateProgress(66, {
                ko: '감정 분석 완료!',
                en: 'Emotion analysis complete!',
                zh: '情绪分析完成！'
            });

            // Step 3: Face shape and personal color (66-100%)
            await new Promise(resolve => setTimeout(resolve, 300));
            updateProgress(80, {
                ko: '얼굴형과 퍼스널 컬러를 분석하고 있어요...',
                en: 'Analyzing face shape and personal color...',
                zh: '正在分析脸型和个人色彩...'
            });

            // Analyze face shape from landmarks
            if (result.landmarks && typeof analyzeFaceShape === 'function') {
                this.faceShape = analyzeFaceShape(result.landmarks);
            }

            // Analyze personal color from skin tone
            if (typeof analyzePersonalColor === 'function') {
                this.personalColor = analyzePersonalColor(imageElement, result.landmarks, result.detection);
            }

            updateProgress(100, {
                ko: '모든 분석이 완료되었어요!',
                en: 'All analysis complete!',
                zh: '所有分析完成！'
            });

            console.log(`Age: ${this.physicalAge}, Gender: ${this.gender}, Emotion: ${this.emotion}, Age Group: ${this.ageGroup}`);
            if (this.faceShape) console.log(`Face Shape: ${this.faceShape.name.ko}`);
            if (this.personalColor) console.log(`Personal Color: ${this.personalColor.season} (${this.personalColor.name.ko})`);

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

                // Build additional info (face shape and personal color)
                let additionalInfo = '';

                if (this.faceShape) {
                    additionalInfo += `${this.faceShape.emoji} ${this.faceShape.name[i18n.currentLang]}`;
                }

                if (this.personalColor) {
                    if (additionalInfo) additionalInfo += ' | ';
                    additionalInfo += `${this.personalColor.emoji} ${this.personalColor.name[i18n.currentLang]}`;

                    // Add color chips (first 3 colors)
                    const colorChips = this.personalColor.colors.slice(0, 3).map(color =>
                        `<span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${color};margin-left:4px;vertical-align:middle;border:1px solid rgba(255,255,255,0.3);box-shadow:0 1px 3px rgba(0,0,0,0.2);"></span>`
                    ).join('');
                    additionalInfo += colorChips;
                }

                // Update result text to include gender, emotion, face shape, and personal color
                const resultValue = document.querySelector('.result-value');
                resultValue.innerHTML = `
                    <span data-i18n="resultText">${i18n.t('resultText')}</span>
                    <strong id="physical-age">${this.physicalAge}</strong>
                    <span data-i18n="resultTextAge">${i18n.t('resultTextAge')}</span>
                    <br>
                    <span style="font-size: 0.9em; opacity: 0.8;">${genderEmoji} ${genderText} (${genderConfidence}%) | ${emotionEmoji} ${currentEmotion}</span>
                    ${additionalInfo ? `<br><span style="font-size: 0.85em; opacity: 0.75;">${additionalInfo}</span>` : ''}
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

    // Start questions (now goes to scenario selection)
    startQuestions() {
        // 시나리오 선택 화면으로 이동 (하단의 goToScenario 함수 사용)
        // 연령대 자동 감지는 goToScenario에서 처리
        this.goToScenario();
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

        // Personal Color Analysis
        if (this.personalColor) {
            const colorTitle = {
                ko: '퍼스널 컬러 분석',
                en: 'Personal Color Analysis',
                zh: '个人色彩分析'
            }[i18n.currentLang] || '퍼스널 컬러 분석';

            analysisHTML += `
                <div class="analysis-card">
                    <div class="analysis-title">${colorTitle}</div>
                    <div class="analysis-content">
                        <div class="analysis-emoji">${this.personalColor.emoji}</div>
                        <div class="analysis-name">${this.personalColor.name[i18n.currentLang]}</div>
                        <div class="analysis-desc">${this.personalColor.description[i18n.currentLang]}</div>
                        <div class="color-swatches" style="margin-top: 1rem;">
                            ${this.personalColor.colors.map((color, index) =>
                `<div class="color-swatch" style="background-color: ${color}" title="${this.personalColor.colorNames[i18n.currentLang][index]}"></div>`
            ).join('')}
                        </div>
                        <div class="analysis-desc" style="margin-top: 1rem; font-size: 0.9rem;">
                            ${this.personalColor.recommendations[i18n.currentLang]}
                        </div>
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
    },

    // ============================================
    // Scenario System Functions
    // ============================================

    // 시나리오 선택 모달 표시
    goToScenario() {
        // 연령대 자동 감지 (물리적 나이 기반)
        if (typeof getAgeGroupByAge === 'function' && this.physicalAge) {
            this.ageGroupObj = getAgeGroupByAge(this.physicalAge);

            // 연령대 배지 표시
            const ageGroupText = document.getElementById('age-group-text');
            if (ageGroupText && this.ageGroupObj) {
                ageGroupText.textContent = this.ageGroupObj.label[i18n.currentLang] || this.ageGroupObj.label.ko;
            }
        }

        // 모달 표시
        const modal = document.getElementById('scenario-modal');
        if (modal) {
            modal.classList.add('active');
        }
    },

    // 연령·성별에 맞는 질문 세트 선택
    getQuestionSet() {
        const ageGroup = this.ageGroup;  // teen, twenties, thirties, forties, fifties, sixties
        const scenarioId = this.currentScenario?.id || 'daily';  // 현재 선택된 시나리오

        // 연령대를 대문자로 변환 (TEEN, TWENTIES, etc.)
        const ageGroupUpper = ageGroup.toUpperCase();

        // 새로운 질문 시스템에서 질문 가져오기
        const questions = getQuestions(ageGroupUpper, scenarioId);

        if (!questions || questions.length === 0) {
            console.error('No questions found for', ageGroupUpper, scenarioId);
            // 기본값으로 일상생활 질문 사용
            return getQuestions(ageGroupUpper, 'daily') || [];
        }

        return questions;
    },

    // 시나리오 선택
    selectScenario(scenarioId) {
        if (typeof SCENARIOS === 'undefined') {
            console.error('SCENARIOS not loaded');
            return;
        }

        this.currentScenario = SCENARIOS[scenarioId];

        if (!this.currentScenario) {
            console.error('Invalid scenario:', scenarioId);
            return;
        }

        // 연령·성별에 맞는 질문 세트 가져오기
        const questionSet = this.getQuestionSet();

        // 질문 ID 배열 생성 (10개)
        this.currentScenarioQuestions = Object.keys(questionSet);

        // 전체 질문 객체 저장 (나중에 참조용)
        this.currentQuestionSet = questionSet;

        console.log(`Selected scenario: ${scenarioId}, Age group: ${this.ageGroup}, Gender: ${this.gender}, Questions: ${this.currentScenarioQuestions.length}`);

        // 질문 인덱스 초기화
        this.currentQuestionIndex = 0;

        // 답변 저장 구조 초기화
        if (!this.scenarioAnswers[scenarioId]) {
            this.scenarioAnswers[scenarioId] = {};
        }

        // 모달 닫기
        const modal = document.getElementById('scenario-modal');
        if (modal) {
            modal.classList.remove('active');
        }

        // 질문 섹션으로 이동
        this.showSection('questions');
        this.renderScenarioQuestion();
    },

    // 시나리오 질문 렌더링
    renderScenarioQuestion() {
        if (!this.currentQuestionSet) {
            console.error('Question set not loaded');
            return;
        }

        const questionId = this.currentScenarioQuestions[this.currentQuestionIndex];
        const question = this.currentQuestionSet[questionId];

        if (!question) {
            console.error('Question not found:', questionId);
            return;
        }

        // 진행률 업데이트
        const progress = ((this.currentQuestionIndex + 1) / this.currentScenarioQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestionIndex + 1} / ${this.currentScenarioQuestions.length}`;

        // 질문 텍스트 표시
        const questionText = question.text[i18n.currentLang] || question.text.ko;
        const questionContent = document.getElementById('question-content');

        if (!questionContent) {
            console.error('question-content not found');
            return;
        }

        // Create or update question card
        questionContent.innerHTML = `
            <div class="question-card">
                <h2 class="question-title">${questionText}</h2>
                <div class="options" id="question-options"></div>
            </div>
        `;

        // 옵션 렌더링
        const optionsContainer = document.getElementById('question-options');
        if (optionsContainer && question.options) {
            optionsContainer.innerHTML = '';

            for (const [value, option] of Object.entries(question.options)) {
                const optionLabel = option.label[i18n.currentLang] || option.label.ko;
                const optionBtn = document.createElement('button');
                optionBtn.className = 'option-btn';
                optionBtn.textContent = optionLabel;
                optionBtn.onclick = () => this.selectScenarioAnswer(questionId, parseInt(value));

                // 이미 선택한 답변이 있으면 표시
                if (this.scenarioAnswers[this.currentScenario.id]?.[questionId] === parseInt(value)) {
                    optionBtn.classList.add('selected');
                }

                optionsContainer.appendChild(optionBtn);
            }
        }

        // 뒤로가기 버튼 업데이트
        this.updateBackButton();
    },

    // 시나리오 답변 선택
    selectScenarioAnswer(questionId, value) {
        // 답변 저장
        this.scenarioAnswers[this.currentScenario.id][questionId] = value;

        // 선택 표시
        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');

        // 바로 다음 질문으로
        if (this.currentQuestionIndex < this.currentScenarioQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.renderScenarioQuestion();
            this.updateBackButton();
        } else {
            // 모든 질문 완료 - 마음의 나이 계산
            this.calculateMindAge();
            this.goToResult();
        }
    },

    // 이전 질문으로 돌아가기
    goToPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderScenarioQuestion();
            this.updateBackButton();
        }
    },

    // 뒤로가기 버튼 표시 업데이트
    updateBackButton() {
        const backBtn = document.getElementById('btn-back');
        if (backBtn) {
            if (this.currentQuestionIndex > 0) {
                backBtn.style.display = 'block';
            } else {
                backBtn.style.display = 'none';
            }
        }
    },

    // 마음의 나이 계산
    calculateMindAge() {
        if (!this.currentQuestionSet) {
            console.error('Question set not loaded');
            return;
        }

        const base = this.physicalAge || 25;

        // 영역별 점수 누적
        const categoryScores = {
            emotion: [],
            responsibility: [],
            relationship: [],
            values: [],
            self: []
        };

        // 현재 시나리오의 답변 수집
        const scenarioId = this.currentScenario.id;
        const answers = this.scenarioAnswers[scenarioId] || {};

        // 각 답변의 점수를 카테고리별로 분류
        for (const [qid, answer] of Object.entries(answers)) {
            const question = this.currentQuestionSet[qid];
            if (question && question.options && question.options[answer]) {
                const score = question.options[answer].score || 0;
                const category = question.category;

                if (category && categoryScores[category]) {
                    categoryScores[category].push(score);
                }
            }
        }

        // 각 카테고리의 평균 점수 계산
        const categoryAverages = {};
        for (const [category, scores] of Object.entries(categoryScores)) {
            if (scores.length > 0) {
                categoryAverages[category] = scores.reduce((a, b) => a + b, 0) / scores.length;
            } else {
                categoryAverages[category] = 3; // 기본값 (중간값)
            }
        }

        // 가중치 적용하여 최종 점수 계산
        const weightedScore =
            (categoryAverages.emotion * WEIGHTS.emotion) +
            (categoryAverages.responsibility * WEIGHTS.responsibility) +
            (categoryAverages.relationship * WEIGHTS.relationship) +
            (categoryAverages.values * WEIGHTS.values) +
            (categoryAverages.self * WEIGHTS.self);

        // 마음의 나이 산출
        // weightedScore는 1~5 범위, 3이 중간값
        // 점수 차이 1당 약 5년 차이로 매핑
        const mindAge = Math.round(base + (weightedScore - 3) * 5);

        this.mindAge = Math.max(10, Math.min(99, mindAge));  // 10~99 범위로 제한
        this.mentalAge = this.mindAge;  // mentalAge도 설정 (결과 표시용)

        console.log(`Mind Age Calculation:`, {
            base,
            categoryAverages,
            weightedScore: weightedScore.toFixed(2),
            mindAge: this.mindAge
        });

        return this.mindAge;
    },

    // 결과 화면으로 이동
    goToResult() {
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

        // Display additional analysis results
        this.displayAdditionalAnalysis();

        // Store message for sharing
        this.resultMessage = message;

        // Add confetti effect
        this.createConfetti();
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
