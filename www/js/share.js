// Share functionality using html2canvas

// Initialize Kakao SDK
function initKakao() {
    try {
        if (!window.Kakao) {
            console.error('Kakao SDK not loaded');
            return;
        }

        if (!window.Kakao.isInitialized()) {
            // Use CONFIG if available, otherwise fallback to hardcoded key
            const kakaoKey = (typeof CONFIG !== 'undefined' && CONFIG.KAKAO_KEY)
                ? CONFIG.KAKAO_KEY
                : '2b78d22d6aa77c493c1ce9ada6aee71b';
            window.Kakao.init(kakaoKey);
            console.log('Kakao SDK initialized successfully with key:', kakaoKey.substring(0, 10) + '...');
        } else {
            console.log('Kakao SDK already initialized');
        }
    } catch (error) {
        console.error('Failed to initialize Kakao SDK:', error);
    }
}

// Call init when DOM is loaded and after a small delay to ensure CONFIG is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initKakao, 100);
    });
} else {
    setTimeout(initKakao, 100);
}

// Share to KakaoTalk with result link only (no image download)
async function shareToKakao(physicalAge, mentalAge, diffText, resultMessage, archetype = null) {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
        alert('카카오톡 공유를 사용하려면 Kakao JavaScript Key를 설정해주세요.');
        return;
    }

    // Create share URL with result parameters
    const baseUrl = getShareUrl();
    const diff = mentalAge - physicalAge;
    const params = {
        shared: 'true',
        pa: physicalAge,
        ma: mentalAge,
        diff: diff
    };

    // Add archetype code if available
    /*
    if (archetype && archetype.code) {
        params.arc = archetype.code;
    }
    */

    const shareParams = new URLSearchParams(params);
    const shareUrl = `${baseUrl}?${shareParams.toString()}`;
    const imageUrl = CONFIG.OG_IMAGE; // Already an absolute URL

    // Title: Display detailed result message first with emoji
    let title = `✨ ${resultMessage || i18n.t('title')}`;

    // Description: Display age results and assessment
    let description = i18n.t('shareDesc')
        .replace('{pa}', physicalAge)
        .replace('{ma}', mentalAge);

    if (diffText) {
        description += ` (${diffText})`;
    }

    // Archetype logic removed for simplicity

    try {
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description: description,
                imageUrl: imageUrl,
                imageWidth: 800,
                imageHeight: 400,
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
            buttons: [
                {
                    title: i18n.t('resultTitle') || '결과 보기 👀',
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
                {
                    title: i18n.t('btnMyTest') || '나도 테스트하기 🎈',
                    link: {
                        mobileWebUrl: baseUrl,
                        webUrl: baseUrl,
                    },
                },
            ],
        });
    } catch (error) {
        console.error('Kakao share error:', error);
        alert('카카오톡 공유에 실패했습니다.');
    }
}

// Share to X (Twitter)
function shareToTwitter(physicalAge, mentalAge, diffText) {
    let text = i18n.t('shareDesc')
        .replace('{pa}', physicalAge)
        .replace('{ma}', mentalAge);
    text += ` ${diffText}\n\n${i18n.t('btnMyTest')} 👉`;

    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

// Share to Instagram (Download guide)
function shareToInstagram() {
    const message = `인스타그램에 공유하려면:\n\n1. 아래 '이미지 저장' 버튼을 눌러주세요\n2. 인스타그램 앱을 열어주세요\n3. 스토리나 게시물에 저장된 이미지를 업로드하세요\n\n💡 팁: 스토리에는 해시태그 #마음의나이 #심리테스트 를 추가해보세요!`;

    if (confirm(message)) {
        // Trigger image download
        downloadResultImage();
    }
}

// Download result as image
async function downloadResultImage() {
    try {
        const resultSection = document.getElementById('result-content');

        // Temporarily hide buttons for cleaner capture
        const shareButtons = resultSection.querySelector('.share-buttons');
        const restartBtn = resultSection.querySelector('.btn-restart');
        const adContainers = resultSection.querySelectorAll('.ad-container');

        const originalShareDisplay = shareButtons ? shareButtons.style.display : '';
        const originalRestartDisplay = restartBtn ? restartBtn.style.display : '';
        const originalAdDisplays = Array.from(adContainers).map(ad => ad.style.display);

        if (shareButtons) shareButtons.style.display = 'none';
        if (restartBtn) restartBtn.style.display = 'none';
        adContainers.forEach(ad => ad.style.display = 'none');

        // Add watermark
        const watermark = document.createElement('div');
        watermark.style.cssText = `
            text-align: center;
            padding: 1.5rem 0;
            margin-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9rem;
            color: rgba(255,255,255,0.7);
        `;
        watermark.innerHTML = `
            <div style="margin-bottom: 0.5rem; font-weight: 600; font-size: 1rem;">마음의 나이 계산기</div>
            <div>${window.location.origin}${window.location.pathname}</div>
        `;
        resultSection.appendChild(watermark);

        // Use html2canvas to capture the result section
        const canvas = await html2canvas(resultSection, {
            backgroundColor: '#0f0f23',
            scale: 3, // Higher quality for sharing
            logging: false,
            useCORS: true,
            allowTaint: true
        });

        // Remove watermark and restore buttons
        watermark.remove();
        if (shareButtons) shareButtons.style.display = originalShareDisplay;
        if (restartBtn) restartBtn.style.display = originalRestartDisplay;
        adContainers.forEach((ad, i) => ad.style.display = originalAdDisplays[i]);

        // Convert canvas to blob
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            const timestamp = new Date().toISOString().split('T')[0];
            link.download = `mental_age_result_${timestamp}.png`;
            link.href = url;
            link.click();

            // Clean up
            setTimeout(() => URL.revokeObjectURL(url), 100);
        }, 'image/png');

        return true;
    } catch (error) {
        console.error('Error downloading image:', error);
        alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
        return false;
    }
}

// Copy link to clipboard
async function copyLinkToClipboard() {
    try {
        const url = window.location.href;

        // Use Clipboard API if available
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(url);
            showCopyNotification();
            return true;
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = url;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            const success = document.execCommand('copy');
            document.body.removeChild(textarea);

            if (success) {
                showCopyNotification();
                return true;
            } else {
                throw new Error('Copy failed');
            }
        }
    } catch (error) {
        console.error('Error copying link:', error);
        alert('링크 복사에 실패했습니다.');
        return false;
    }
}

// Show notification when link is copied
function showCopyNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = i18n.t('linkCopied');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        animation: slideInDown 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Share via Web Share API (mobile)
async function shareResult(physicalAge, mentalAge, message) {
    if (navigator.share) {
        try {
            let shareText = i18n.t('shareDesc')
                .replace('{pa}', physicalAge)
                .replace('{ma}', mentalAge);
            shareText += `\n${message}\n\n${i18n.t('btnMyTest')} 👉`;

            await navigator.share({
                title: i18n.t('title').replace(/<br>/g, ' '),
                text: shareText,
                url: window.location.href
            });
            return true;
        } catch (error) {
            // User cancelled or error occurred
            console.log('Share cancelled or failed:', error);
            return false;
        }
    } else {
        // Web Share API not supported, use fallback
        return copyLinkToClipboard();
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        shareToKakao,
        shareToTwitter,
        shareToInstagram,
        downloadResultImage,
        copyLinkToClipboard,
        shareResult
    };
}
