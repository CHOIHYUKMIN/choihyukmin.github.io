// Configuration for deployment
const CONFIG = {
    // 실제 배포 URL을 여기에 설정하세요
    // GitHub Pages 예시: 'https://yourusername.github.io/mindAge/'
    // Netlify 예시: 'https://your-app.netlify.app/'
    // Vercel 예시: 'https://your-app.vercel.app/'
    PRODUCTION_URL: 'https://choihyukmin.github.io/', // GitHub Pages URL

    // 카카오톡 JavaScript Key
    KAKAO_KEY: '2b78d22d6aa77c493c1ce9ada6aee71b',

    // Open Graph 이미지 URL (절대 경로)
    OG_IMAGE: 'https://choihyukmin.github.io/og-image.png',

    // 앱 정보
    APP_NAME: '마음의 나이 계산기',
    APP_TITLE: '🎯 마음의 나이 계산기',
    APP_DESCRIPTION: 'AI가 당신의 얼굴로 실물 나이를 추측하고, 10가지 질문으로 마음의 나이를 알려드려요',

    // 버전 관리 (한 곳에서 관리)
    VERSION: '4.0.0',

    // 시즌별 테마 설정
    SEASONAL_THEMES: {
        christmas: {
            name: 'Christmas Edition 🎄',
            emoji: { start: '🎄', end: '🎅' },
            particle: { type: 'snow', color: '#ffffff' },
            buttonColor: '#c41e3a', // 크리스마스 레드
            startDate: { month: 12, day: 1 },
            endDate: { month: 12, day: 25 }
        },
        newyear: {
            name: 'New Year Edition 🎆',
            emoji: { start: '🎆', end: '🌅' },
            particle: { type: 'firework', color: '#ffd700' },
            buttonColor: '#ffd700', // 골드
            startDate: { month: 12, day: 26 },
            endDate: { month: 1, day: 15 }
        },
        valentine: {
            name: 'Valentine Edition 💝',
            emoji: { start: '💝', end: '💕' },
            particle: { type: 'heart', color: '#ff69b4' },
            buttonColor: '#ff1493', // 딥 핑크
            startDate: { month: 2, day: 1 },
            endDate: { month: 2, day: 14 }
        },
        spring: {
            name: 'Spring Edition 🌸',
            emoji: { start: '🌸', end: '🌺' },
            particle: { type: 'sakura', color: '#ffb7c5' },
            buttonColor: '#ff69b4', // 파스텔 핑크
            startDate: { month: 3, day: 1 },
            endDate: { month: 5, day: 31 }
        },
        summer: {
            name: 'Summer Edition 🌊',
            emoji: { start: '🌊', end: '☀️' },
            particle: { type: 'bubble', color: '#00bfff' },
            buttonColor: '#1e90ff', // 도지 블루
            startDate: { month: 6, day: 1 },
            endDate: { month: 8, day: 31 }
        },
        autumn: {
            name: 'Autumn Edition 🍂',
            emoji: { start: '🍂', end: '🍁' },
            particle: { type: 'leaf', color: '#ff8c00' },
            buttonColor: '#ff8c00', // 다크 오렌지
            startDate: { month: 9, day: 1 },
            endDate: { month: 11, day: 30 }
        }
    },

    // 현재 시즌 자동 감지
    getCurrentSeason() {
        // 🎨 로컬 개발 모드: URL 파라미터로 테마 선택 가능
        // 사용법: http://localhost:8000/?theme=newyear
        // 가능한 테마: christmas, newyear, valentine, spring, summer, autumn
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const urlParams = new URLSearchParams(window.location.search);
            const themeParam = urlParams.get('theme');
            if (themeParam && this.SEASONAL_THEMES[themeParam]) {
                console.log(`🎨 Developer Mode: Using theme '${themeParam}'`);
                return this.SEASONAL_THEMES[themeParam];
            }
        }

        const now = new Date();
        const month = now.getMonth() + 1; // 0-11 → 1-12
        const day = now.getDate();

        for (const [key, theme] of Object.entries(this.SEASONAL_THEMES)) {
            const start = theme.startDate;
            const end = theme.endDate;

            // 연말-연초 처리 (12월 26일 ~ 1월 15일)
            if (start.month > end.month) {
                if ((month === start.month && day >= start.day) ||
                    (month === end.month && day <= end.day)) {
                    return theme;
                }
            } else {
                // 일반적인 경우
                if ((month > start.month || (month === start.month && day >= start.day)) &&
                    (month < end.month || (month === end.month && day <= end.day))) {
                    return theme;
                }
            }
        }

        // 기본 테마
        return {
            name: 'Standard Edition ✨',
            emoji: { start: '�', end: '✨' }
        };
    },

    // VERSION_NAME은 동적으로 설정
    get VERSION_NAME() {
        return this.getCurrentSeason().name;
    }
};

// Get the current URL based on environment
function getShareUrl() {
    if (window.location.protocol === 'file:') {
        // Running from file system - use production URL
        return CONFIG.PRODUCTION_URL;
    } else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Running on local server
        return window.location.origin + window.location.pathname;
    } else {
        // Running on production
        return window.location.origin + window.location.pathname;
    }
}

// Get the base URL for assets
function getBaseUrl() {
    if (window.location.protocol === 'file:') {
        return CONFIG.PRODUCTION_URL;
    } else {
        return window.location.origin + window.location.pathname.replace('index.html', '');
    }
}
