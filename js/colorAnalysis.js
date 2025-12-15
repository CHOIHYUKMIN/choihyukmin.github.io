// Image Color Analysis using Color Thief

// Get color name from RGB
function getColorName(rgb) {
    const [r, g, b] = rgb;

    // Simple color categorization
    const brightness = (r + g + b) / 3;
    const isReddish = r > g && r > b;
    const isGreenish = g > r && g > b;
    const isBluish = b > r && b > g;

    if (brightness < 85) {
        return { ko: '어두운', en: 'Dark', zh: '深色' };
    } else if (brightness > 170) {
        return { ko: '밝은', en: 'Bright', zh: '明亮' };
    }

    if (isReddish) {
        return { ko: '따뜻한 레드', en: 'Warm Red', zh: '温暖的红色' };
    } else if (isGreenish) {
        return { ko: '자연스러운 그린', en: 'Natural Green', zh: '自然绿色' };
    } else if (isBluish) {
        return { ko: '차분한 블루', en: 'Calm Blue', zh: '平静蓝色' };
    }

    return { ko: '중성', en: 'Neutral', zh: '中性' };
}

// Convert RGB to Hex
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Analyze image colors using Color Thief
async function analyzeImageColors(imageElement) {
    try {
        // Check if ColorThief is available
        if (typeof ColorThief === 'undefined') {
            console.warn('ColorThief library not loaded');
            return null;
        }

        const colorThief = new ColorThief();

        // Wait for image to load if not already loaded
        if (!imageElement.complete) {
            await new Promise((resolve) => {
                imageElement.onload = resolve;
            });
        }

        // Get dominant color
        const dominantColor = colorThief.getColor(imageElement);

        // Get color palette (5 colors)
        const palette = colorThief.getPalette(imageElement, 5);

        return {
            dominant: {
                rgb: dominantColor,
                hex: rgbToHex(...dominantColor),
                name: getColorName(dominantColor)
            },
            palette: palette.map(color => ({
                rgb: color,
                hex: rgbToHex(...color),
                name: getColorName(color)
            }))
        };

    } catch (error) {
        console.error('Color analysis failed:', error);
        return null;
    }
}
