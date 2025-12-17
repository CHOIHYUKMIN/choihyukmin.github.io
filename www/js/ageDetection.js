// Age Detection using face-api.js with real age estimation
let faceApiLoaded = false;

// Initialize face-api.js models
async function initAgeDetection() {
    try {
        console.log('Loading face-api.js models...');

        // Load models from CDN
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';

        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
        ]);

        faceApiLoaded = true;
        console.log('face-api.js models loaded successfully');
        return true;
    } catch (error) {
        console.error('Error loading face-api.js models:', error);
        return false;
    }
}

// Estimate age from image using face-api.js
async function estimateAge(imageElement) {
    if (!faceApiLoaded) {
        const success = await initAgeDetection();
        if (!success) {
            throw new Error('Failed to load AI models');
        }
    }

    try {
        console.log('Analyzing face...');

        // Detect face with age/gender first
        const detectionWithAge = await faceapi
            .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions())
            .withAgeAndGender();

        if (!detectionWithAge) {
            throw new Error('얼굴을 찾을 수 없습니다. 정면 얼굴이 잘 보이는 사진을 올려주세요.');
        }

        // Get estimated age (round to nearest integer)
        const estimatedAge = Math.round(detectionWithAge.age);
        const confidence = detectionWithAge.detection.score;

        // Try to get expressions separately
        let expressions = null;
        let dominantEmotion = 'neutral';
        let emotionConfidence = 0;

        try {
            const detectionWithExpressions = await faceapi
                .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions())
                .withFaceExpressions();

            if (detectionWithExpressions && detectionWithExpressions.expressions) {
                expressions = detectionWithExpressions.expressions;
                dominantEmotion = Object.keys(expressions).reduce((a, b) =>
                    expressions[a] > expressions[b] ? a : b
                );
                emotionConfidence = expressions[dominantEmotion];
            }
        } catch (expError) {
            console.warn('Expression detection failed:', expError);
        }

        // Try to get landmarks separately
        let landmarks = null;
        try {
            const detectionWithLandmarks = await faceapi
                .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks();

            if (detectionWithLandmarks && detectionWithLandmarks.landmarks) {
                landmarks = detectionWithLandmarks.landmarks;
            }
        } catch (landmarkError) {
            console.warn('Landmark detection failed:', landmarkError);
        }

        console.log(`Age estimated: ${estimatedAge}, Confidence: ${(confidence * 100).toFixed(1)}%`);
        if (expressions) {
            console.log(`Dominant emotion: ${dominantEmotion} (${(emotionConfidence * 100).toFixed(1)}%)`);
        }

        return {
            age: estimatedAge,
            confidence: confidence,
            gender: detectionWithAge.gender,
            genderProbability: detectionWithAge.genderProbability,
            facesDetected: 1,
            expressions: expressions,
            dominantEmotion: dominantEmotion,
            emotionConfidence: emotionConfidence,
            landmarks: landmarks,
            detection: detectionWithAge.detection // Add detection box for personal color analysis
        };

    } catch (error) {
        console.error('Error estimating age:', error);
        throw error;
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAgeDetection, estimateAge };
}
