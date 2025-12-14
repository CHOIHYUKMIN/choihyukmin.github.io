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
    VERSION: '2.3.2',
    VERSION_NAME: 'Christmas Edition 🎄'
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
