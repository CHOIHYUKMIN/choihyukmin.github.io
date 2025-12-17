// Face Shape Analysis using face-api.js landmarks

const FACE_SHAPES = {
    oval: {
        name: { ko: '계란형', en: 'Oval', zh: '鹅蛋脸' },
        emoji: '🥚',
        description: {
            ko: '이상적인 얼굴형! 어떤 스타일도 잘 어울려요',
            en: 'Ideal face shape! Any style suits you',
            zh: '理想的脸型！任何风格都适合你'
        }
    },
    round: {
        name: { ko: '둥근형', en: 'Round', zh: '圆脸' },
        emoji: '⭕',
        description: {
            ko: '귀엽고 친근한 인상이에요',
            en: 'Cute and friendly impression',
            zh: '可爱友好的印象'
        }
    },
    square: {
        name: { ko: '사각형', en: 'Square', zh: '方脸' },
        emoji: '⬜',
        description: {
            ko: '강인하고 카리스마 있는 인상',
            en: 'Strong and charismatic impression',
            zh: '强壮有魅力的印象'
        }
    },
    heart: {
        name: { ko: '하트형', en: 'Heart', zh: '心形脸' },
        emoji: '💗',
        description: {
            ko: '세련되고 우아한 느낌이에요',
            en: 'Sophisticated and elegant feeling',
            zh: '精致优雅的感觉'
        }
    },
    oblong: {
        name: { ko: '긴 얼굴형', en: 'Oblong', zh: '长脸' },
        emoji: '📏',
        description: {
            ko: '지적이고 성숙한 인상',
            en: 'Intelligent and mature impression',
            zh: '聪明成熟的印象'
        }
    },
    diamond: {
        name: { ko: '다이아몬드형', en: 'Diamond', zh: '钻石脸' },
        emoji: '💎',
        description: {
            ko: '독특하고 개성 있는 매력',
            en: 'Unique and distinctive charm',
            zh: '独特有个性的魅力'
        }
    }
};

// Calculate face shape from landmarks
function analyzeFaceShape(landmarks) {
    if (!landmarks || !landmarks.positions) {
        return null;
    }

    const points = landmarks.positions;

    // Key landmark indices (68-point model)
    // Jawline: 0-16
    // Eyebrows: 17-26
    // Nose: 27-35
    // Eyes: 36-47
    // Mouth: 48-67

    try {
        // Calculate face dimensions
        const jawLeft = points[0];
        const jawRight = points[16];
        const jawCenter = points[8];
        const foreheadLeft = points[17];
        const foreheadRight = points[26];
        const chinTip = points[8];
        const noseTop = points[27];

        // Face width at different levels
        const jawWidth = distance(jawLeft, jawRight);
        const cheekWidth = distance(points[2], points[14]);
        const foreheadWidth = distance(foreheadLeft, foreheadRight);

        // Face height
        const faceHeight = distance(noseTop, chinTip);

        // Calculate ratios
        const faceRatio = faceHeight / jawWidth;
        const jawToForeheadRatio = jawWidth / foreheadWidth;
        const cheekToJawRatio = cheekWidth / jawWidth;

        // Determine face shape based on ratios
        let shape = 'oval'; // default

        if (faceRatio > 1.5) {
            shape = 'oblong'; // Long face
        } else if (faceRatio < 1.2) {
            if (jawToForeheadRatio > 0.95) {
                shape = 'round'; // Round face
            } else if (jawToForeheadRatio < 0.85) {
                shape = 'heart'; // Heart-shaped (narrow jaw)
            } else {
                shape = 'square'; // Square face
            }
        } else {
            // Medium length face
            if (cheekToJawRatio > 1.05) {
                shape = 'diamond'; // Wider cheeks
            } else if (jawToForeheadRatio > 0.9 && jawToForeheadRatio < 1.1) {
                shape = 'oval'; // Balanced proportions
            } else if (jawToForeheadRatio < 0.85) {
                shape = 'heart';
            } else {
                shape = 'square';
            }
        }

        return FACE_SHAPES[shape];

    } catch (error) {
        console.error('Face shape analysis error:', error);
        return FACE_SHAPES.oval; // Default fallback
    }
}

// Calculate Euclidean distance between two points
function distance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Get face shape recommendations
function getFaceShapeRecommendations(faceShape) {
    const recommendations = {
        oval: {
            hairstyle: {
                ko: '어떤 헤어스타일도 잘 어울려요!',
                en: 'Any hairstyle suits you!',
                zh: '任何发型都适合你！'
            },
            accessories: {
                ko: '모든 스타일의 안경과 귀걸이',
                en: 'All styles of glasses and earrings',
                zh: '所有款式的眼镜和耳环'
            }
        },
        round: {
            hairstyle: {
                ko: '레이어드 컷, 긴 생머리',
                en: 'Layered cut, long straight hair',
                zh: '层次剪裁，长直发'
            },
            accessories: {
                ko: '긴 귀걸이, 각진 안경',
                en: 'Long earrings, angular glasses',
                zh: '长耳环，棱角眼镜'
            }
        },
        square: {
            hairstyle: {
                ko: '웨이브 헤어, 부드러운 레이어',
                en: 'Wavy hair, soft layers',
                zh: '波浪发，柔和层次'
            },
            accessories: {
                ko: '둥근 안경, 부드러운 귀걸이',
                en: 'Round glasses, soft earrings',
                zh: '圆形眼镜，柔和耳环'
            }
        },
        heart: {
            hairstyle: {
                ko: '턱선 강조 단발, 사이드 파트',
                en: 'Chin-length bob, side part',
                zh: '齐下巴短发，侧分'
            },
            accessories: {
                ko: '작은 귀걸이, 캣아이 안경',
                en: 'Small earrings, cat-eye glasses',
                zh: '小耳环，猫眼眼镜'
            }
        },
        oblong: {
            hairstyle: {
                ko: '볼륨감 있는 웨이브, 앞머리',
                en: 'Voluminous waves, bangs',
                zh: '蓬松波浪，刘海'
            },
            accessories: {
                ko: '큰 귀걸이, 넓은 안경',
                en: 'Large earrings, wide glasses',
                zh: '大耳环，宽眼镜'
            }
        },
        diamond: {
            hairstyle: {
                ko: '사이드 볼륨, 부드러운 웨이브',
                en: 'Side volume, soft waves',
                zh: '侧面蓬松，柔和波浪'
            },
            accessories: {
                ko: '중간 크기 귀걸이, 둥근 안경',
                en: 'Medium earrings, round glasses',
                zh: '中等耳环，圆形眼镜'
            }
        }
    };

    return recommendations[faceShape] || recommendations.oval;
}
