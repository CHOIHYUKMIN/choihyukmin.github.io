// Personal Color Analysis based on skin tone
// Analyzes face landmarks to determine seasonal color palette

const PERSONAL_COLORS = {
    spring: {
        name: { ko: '봄 웜톤', en: 'Spring Warm', zh: '春季暖色' },
        emoji: '🌸',
        description: {
            ko: '밝고 따뜻한 피부톤! 생기있고 화사한 느낌',
            en: 'Bright and warm skin tone! Vibrant and radiant',
            zh: '明亮温暖的肤色！充满活力'
        },
        colors: ['#FFB6C1', '#FFDAB9', '#FFE4B5', '#F0E68C', '#98FB98'],
        colorNames: {
            ko: ['복숭아 핑크', '코랄', '아이보리', '버터 옐로우', '민트'],
            en: ['Peach Pink', 'Coral', 'Ivory', 'Butter Yellow', 'Mint'],
            zh: ['桃粉色', '珊瑚色', '象牙色', '黄油黄', '薄荷色']
        },
        recommendations: {
            ko: '밝고 화사한 색상이 잘 어울려요. 골드 액세서리 추천!',
            en: 'Bright and cheerful colors suit you. Gold accessories recommended!',
            zh: '明亮欢快的颜色适合你。推荐金色配饰！'
        }
    },
    summer: {
        name: { ko: '여름 쿨톤', en: 'Summer Cool', zh: '夏季冷色' },
        emoji: '🌊',
        description: {
            ko: '밝고 차가운 피부톤! 우아하고 청순한 느낌',
            en: 'Bright and cool skin tone! Elegant and pure',
            zh: '明亮清凉的肤色！优雅纯净'
        },
        colors: ['#E6E6FA', '#B0E0E6', '#F0F8FF', '#FFB6D9', '#D8BFD8'],
        colorNames: {
            ko: ['라벤더', '파우더 블루', '베이비 블루', '로즈 핑크', '라일락'],
            en: ['Lavender', 'Powder Blue', 'Baby Blue', 'Rose Pink', 'Lilac'],
            zh: ['薰衣草', '粉蓝色', '婴儿蓝', '玫瑰粉', '丁香色']
        },
        recommendations: {
            ko: '부드럽고 시원한 색상이 잘 어울려요. 실버 액세서리 추천!',
            en: 'Soft and cool colors suit you. Silver accessories recommended!',
            zh: '柔和清凉的颜色适合你。推荐银色配饰！'
        }
    },
    autumn: {
        name: { ko: '가을 웜톤', en: 'Autumn Warm', zh: '秋季暖色' },
        emoji: '🍂',
        description: {
            ko: '깊고 따뜻한 피부톤! 성숙하고 세련된 느낌',
            en: 'Deep and warm skin tone! Mature and sophisticated',
            zh: '深沉温暖的肤色！成熟精致'
        },
        colors: ['#CD853F', '#D2691E', '#8B4513', '#A0522D', '#6B8E23'],
        colorNames: {
            ko: ['테라코타', '버건디', '초콜릿', '카키', '올리브'],
            en: ['Terracotta', 'Burgundy', 'Chocolate', 'Khaki', 'Olive'],
            zh: ['赤陶色', '勃艮第', '巧克力色', '卡其色', '橄榄色']
        },
        recommendations: {
            ko: '깊고 따뜻한 색상이 잘 어울려요. 골드 액세서리 추천!',
            en: 'Deep and warm colors suit you. Gold accessories recommended!',
            zh: '深沉温暖的颜色适合你。推荐金色配饰！'
        }
    },
    winter: {
        name: { ko: '겨울 쿨톤', en: 'Winter Cool', zh: '冬季冷色' },
        emoji: '❄️',
        description: {
            ko: '깊고 차가운 피부톤! 강렬하고 시크한 느낌',
            en: 'Deep and cool skin tone! Intense and chic',
            zh: '深沉清凉的肤色！强烈时尚'
        },
        colors: ['#000080', '#4B0082', '#8B008B', '#DC143C', '#FFFFFF'],
        colorNames: {
            ko: ['네이비', '로열 퍼플', '와인', '루비', '순백'],
            en: ['Navy', 'Royal Purple', 'Wine', 'Ruby', 'Pure White'],
            zh: ['海军蓝', '皇家紫', '酒红色', '红宝石', '纯白色']
        },
        recommendations: {
            ko: '선명하고 강렬한 색상이 잘 어울려요. 실버 액세서리 추천!',
            en: 'Vivid and intense colors suit you. Silver accessories recommended!',
            zh: '鲜艳强烈的颜色适合你。推荐银色配饰！'
        }
    }
};

// RGB to HSL conversion
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}

// Extract skin tone from face region
function extractSkinTone(imageElement, landmarks) {
    if (!landmarks || !landmarks.positions) {
        console.warn('No landmarks provided for skin tone extraction');
        return null;
    }

    try {
        // Create canvas to analyze pixels
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Use natural dimensions of the image
        const width = imageElement.naturalWidth || imageElement.width;
        const height = imageElement.naturalHeight || imageElement.height;

        if (!width || !height) {
            console.error('Invalid image dimensions:', width, height);
            return null;
        }

        canvas.width = width;
        canvas.height = height;

        console.log(`Canvas size: ${width}x${height}`);

        // Draw image on canvas
        ctx.drawImage(imageElement, 0, 0, width, height);

        const points = landmarks.positions;

        // Sample points from cheek and forehead areas
        const samplePoints = [
            points[1],  // Left cheek
            points[15], // Right cheek
            points[27], // Nose bridge (forehead area)
            points[28], // Nose
            points[33]  // Nose tip
        ];

        console.log('Sample points:', samplePoints.map(p => `(${Math.floor(p.x)}, ${Math.floor(p.y)})`));

        let totalR = 0, totalG = 0, totalB = 0;
        let validSamples = 0;

        samplePoints.forEach(point => {
            const x = Math.floor(point.x);
            const y = Math.floor(point.y);

            // Sample a small area around each point
            for (let dx = -2; dx <= 2; dx++) {
                for (let dy = -2; dy <= 2; dy++) {
                    const px = x + dx;
                    const py = y + dy;

                    if (px >= 0 && px < canvas.width && py >= 0 && py < canvas.height) {
                        try {
                            const pixel = ctx.getImageData(px, py, 1, 1).data;
                            totalR += pixel[0];
                            totalG += pixel[1];
                            totalB += pixel[2];
                            validSamples++;
                        } catch (e) {
                            console.error('Error reading pixel:', e);
                        }
                    }
                }
            }
        });

        if (validSamples === 0) {
            console.error('No valid samples extracted');
            return null;
        }

        const avgR = Math.round(totalR / validSamples);
        const avgG = Math.round(totalG / validSamples);
        const avgB = Math.round(totalB / validSamples);

        console.log(`Extracted skin tone from ${validSamples} samples: RGB(${avgR}, ${avgG}, ${avgB})`);

        return { r: avgR, g: avgG, b: avgB };

    } catch (error) {
        console.error('Skin tone extraction error:', error);
        return null;
    }
}

// Determine personal color season based on skin tone
function analyzePersonalColor(imageElement, landmarks, faceDetection) {
    let skinTone = null;

    // Try to extract from landmarks first
    if (landmarks && landmarks.positions) {
        skinTone = extractSkinTone(imageElement, landmarks);
    }

    // Fallback: use face detection box if landmarks failed
    if (!skinTone && faceDetection && faceDetection.box) {
        console.log('Landmarks not available, using face detection box');
        skinTone = extractSkinToneFromBox(imageElement, faceDetection.box);
    }

    if (!skinTone) {
        console.warn('Could not extract skin tone - no landmarks or face box');
        return null;
    }

    const { r, g, b } = skinTone;
    const hsl = rgbToHsl(r, g, b);

    console.log(`Skin tone RGB: (${r}, ${g}, ${b})`);
    console.log(`Skin tone HSL: (${hsl.h.toFixed(1)}°, ${hsl.s.toFixed(1)}%, ${hsl.l.toFixed(1)}%)`);

    // Determine warm vs cool (based on hue)
    // Warm: yellow/orange undertones (30-60°)
    // Cool: pink/blue undertones (0-30° or 300-360°)
    const isWarm = (hsl.h >= 30 && hsl.h <= 60) || (r > b + 10);

    // Determine light vs deep (based on lightness)
    const isLight = hsl.l > 55;

    // Classify into 4 seasons
    let season;
    if (isWarm && isLight) {
        season = 'spring';
    } else if (!isWarm && isLight) {
        season = 'summer';
    } else if (isWarm && !isLight) {
        season = 'autumn';
    } else {
        season = 'winter';
    }

    const result = PERSONAL_COLORS[season];

    console.log(`Personal Color: ${season} (Warm: ${isWarm}, Light: ${isLight})`);

    return {
        season: season,
        skinTone: { r, g, b, hsl },
        isWarm: isWarm,
        isLight: isLight,
        ...result
    };
}

// Extract skin tone from face detection box (fallback method)
function extractSkinToneFromBox(imageElement, box) {
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const width = imageElement.naturalWidth || imageElement.width;
        const height = imageElement.naturalHeight || imageElement.height;

        if (!width || !height) {
            console.error('Invalid image dimensions');
            return null;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(imageElement, 0, 0, width, height);

        // Sample from center of face box (likely to be skin)
        const centerX = Math.floor(box.x + box.width / 2);
        const centerY = Math.floor(box.y + box.height / 2);

        // Sample multiple points around center
        const sampleRadius = Math.min(box.width, box.height) / 6;
        let totalR = 0, totalG = 0, totalB = 0;
        let validSamples = 0;

        for (let angle = 0; angle < 360; angle += 45) {
            const rad = (angle * Math.PI) / 180;
            const x = Math.floor(centerX + Math.cos(rad) * sampleRadius);
            const y = Math.floor(centerY + Math.sin(rad) * sampleRadius);

            if (x >= 0 && x < width && y >= 0 && y < height) {
                try {
                    const pixel = ctx.getImageData(x, y, 1, 1).data;
                    totalR += pixel[0];
                    totalG += pixel[1];
                    totalB += pixel[2];
                    validSamples++;
                } catch (e) {
                    console.error('Error reading pixel:', e);
                }
            }
        }

        if (validSamples === 0) {
            console.error('No valid samples from face box');
            return null;
        }

        const avgR = Math.round(totalR / validSamples);
        const avgG = Math.round(totalG / validSamples);
        const avgB = Math.round(totalB / validSamples);

        console.log(`Extracted skin tone from face box (${validSamples} samples): RGB(${avgR}, ${avgG}, ${avgB})`);

        return { r: avgR, g: avgG, b: avgB };

    } catch (error) {
        console.error('Skin tone extraction from box error:', error);
        return null;
    }
}
