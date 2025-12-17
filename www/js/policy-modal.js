// Policy Modal Control
function openPolicyModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Load default language content
    if (modalId === 'privacy-modal') {
        loadPrivacy('ko');
    } else if (modalId === 'terms-modal') {
        loadTerms('ko');
    }
}

function closePolicyModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('policy-modal')) {
        closePolicyModal(e.target.id);
    }
});

// Privacy Policy Content
const privacyContent = {
    ko: `
        <h2>1. 수집하는 개인정보</h2>
        <p>마음의 나이 계산기는 다음과 같은 정보를 수집합니다:</p>
        <ul>
            <li><strong>얼굴 사진:</strong> 나이 분석을 위해 사용자가 업로드한 사진</li>
            <li><strong>쿠키 및 사용 데이터:</strong> Google Analytics 및 Google AdSense를 통한 방문 통계</li>
        </ul>

        <h2>2. 개인정보의 이용 목적</h2>
        <ul>
            <li>AI 기반 얼굴 나이 분석 서비스 제공</li>
            <li>서비스 개선 및 통계 분석</li>
            <li>맞춤형 광고 제공 (Google AdSense)</li>
        </ul>

        <h2>3. 개인정보의 보관 및 파기</h2>
        <p><strong>업로드된 사진은 서버에 저장되지 않으며</strong>, 브라우저 내에서만 처리됩니다. 페이지를 새로고침하거나 닫으면 즉시 삭제됩니다.</p>
        <p>쿠키 데이터는 브라우저 설정에서 언제든지 삭제할 수 있습니다.</p>

        <h2>4. 제3자 제공</h2>
        <p>본 서비스는 다음 제3자 서비스를 사용합니다:</p>
        <ul>
            <li><strong>Google Analytics:</strong> 방문 통계 분석</li>
            <li><strong>Google AdSense:</strong> 광고 게재</li>
        </ul>
        <p>이들 서비스는 각자의 개인정보처리방침을 따릅니다.</p>

        <h2>5. 사용자의 권리</h2>
        <p>사용자는 다음과 같은 권리를 가집니다:</p>
        <ul>
            <li>개인정보 열람 및 삭제 요청</li>
            <li>쿠키 사용 거부 (브라우저 설정)</li>
            <li>서비스 이용 중단</li>
        </ul>

        <h2>6. 문의</h2>
        <p>개인정보 관련 문의사항은 아래 이메일로 연락주시기 바랍니다:</p>
        <p><strong>이메일:</strong> <a href="mailto:hyukchm@gmail.com">hyukchm@gmail.com</a></p>
    `,
    en: `
        <h2>1. Information Collected</h2>
        <p>The Mind Age Calculator collects:</p>
        <ul>
            <li><strong>Face photo:</strong> used for age analysis only.</li>
            <li><strong>Cookies & usage data:</strong> for Google Analytics and AdSense.</li>
        </ul>

        <h2>2. Purpose of Use</h2>
        <ul>
            <li>Provide AI-based age estimation service.</li>
            <li>Improve the service and gather statistics.</li>
            <li>Serve personalized ads (Google AdSense).</li>
        </ul>

        <h2>3. Retention & Deletion</h2>
        <p><strong>Uploaded photos are never stored on a server;</strong> they are processed locally in the browser and discarded when the page is refreshed or closed.</p>
        <p>Cookie data can be cleared at any time via browser settings.</p>

        <h2>4. Third-Party Services</h2>
        <p>We use:</p>
        <ul>
            <li><strong>Google Analytics:</strong> for traffic analysis.</li>
            <li><strong>Google AdSense:</strong> for ad delivery.</li>
        </ul>
        <p>These services follow their own privacy policies.</p>

        <h2>5. Your Rights</h2>
        <ul>
            <li>Request access or deletion of personal data.</li>
            <li>Reject cookies (browser settings).</li>
            <li>Stop using the service at any time.</li>
        </ul>

        <h2>6. Contact</h2>
        <p>Email: <a href="mailto:hyukchm@gmail.com">hyukchm@gmail.com</a></p>
    `,
    zh: `
        <h2>1. 收集的信息</h2>
        <p>心灵年龄计算器收集以下信息：</p>
        <ul>
            <li><strong>人脸照片：</strong>仅用于年龄分析。</li>
            <li><strong>Cookie 与使用数据：</strong>用于 Google Analytics 与 AdSense。</li>
        </ul>

        <h2>2. 使用目的</h2>
        <ul>
            <li>提供基于 AI 的年龄估算服务。</li>
            <li>改进服务并进行统计分析。</li>
            <li>投放个性化广告（Google AdSense）。</li>
        </ul>

        <h2>3. 保存与删除</h2>
        <p><strong>上传的照片不会存储在服务器上；</strong>仅在浏览器本地处理，刷新或关闭页面即删除。</p>
        <p>Cookie 数据可随时通过浏览器设置删除。</p>

        <h2>4. 第三方服务</h2>
        <p>我们使用以下第三方服务：</p>
        <ul>
            <li><strong>Google Analytics：</strong>流量分析。</li>
            <li><strong>Google AdSense：</strong>广告投放。</li>
        </ul>
        <p>这些服务遵循各自的隐私政策。</p>

        <h2>5. 您的权利</h2>
        <ul>
            <li>请求访问或删除个人数据。</li>
            <li>拒绝 Cookie（浏览器设置）。</li>
            <li>随时停止使用本服务。</li>
        </ul>

        <h2>6. 联系方式</h2>
        <p>电子邮件：<a href="mailto:hyukchm@gmail.com">hyukchm@gmail.com</a></p>
    `
};

// Terms of Service Content
const termsContent = {
    ko: `
        <h2>1. 서비스 소개</h2>
        <p>마음의 나이 계산기는 AI 기술을 활용하여 사용자의 얼굴 사진으로 실물 나이를 추정하고, 심리 테스트를 통해 마음의 나이를 계산하는 무료 엔터테인먼트 서비스입니다.</p>

        <h2>2. 서비스 이용</h2>
        <ul>
            <li>본 서비스는 만 13세 이상 누구나 이용할 수 있습니다.</li>
            <li>서비스는 무료로 제공되며, 광고가 포함될 수 있습니다.</li>
            <li>결과는 엔터테인먼트 목적이며, 의학적 진단이 아닙니다.</li>
        </ul>

        <h2>3. 사용자의 의무</h2>
        <ul>
            <li>타인의 사진을 무단으로 업로드하지 않을 것</li>
            <li>부적절한 이미지를 업로드하지 않을 것</li>
            <li>서비스를 불법적인 목적으로 사용하지 않을 것</li>
        </ul>

        <h2>4. 면책 조항</h2>
        <p>본 서비스의 결과는 참고용이며, 실제 나이나 심리 상태를 정확히 반영하지 않을 수 있습니다. 서비스 이용으로 인한 어떠한 손해에 대해서도 책임지지 않습니다.</p>

        <h2>5. 지적 재산권</h2>
        <p>본 서비스의 모든 콘텐츠, 디자인, 코드는 저작권법의 보호를 받습니다.</p>

        <h2>6. 약관 변경</h2>
        <p>본 약관은 사전 고지 없이 변경될 수 있으며, 변경된 약관은 게시와 동시에 효력이 발생합니다.</p>

        <h2>7. 문의</h2>
        <p>서비스 관련 문의사항은 아래 이메일로 연락주시기 바랍니다:</p>
        <p><strong>이메일:</strong> <a href="mailto:hyukchm@gmail.com">hyukchm@gmail.com</a></p>
    `,
    en: `
        <h2>1. Service Overview</h2>
        <p>Mind Age Calculator is a free entertainment service that uses AI to estimate your physical age from a photo and calculates your mental age through psychological questions.</p>

        <h2>2. Service Usage</h2>
        <ul>
            <li>Available to anyone 13 years or older.</li>
            <li>The service is free and may include advertisements.</li>
            <li>Results are for entertainment purposes only, not medical diagnosis.</li>
        </ul>

        <h2>3. User Obligations</h2>
        <ul>
            <li>Do not upload photos of others without permission.</li>
            <li>Do not upload inappropriate images.</li>
            <li>Do not use the service for illegal purposes.</li>
        </ul>

        <h2>4. Disclaimer</h2>
        <p>Results are for reference only and may not accurately reflect actual age or psychological state. We are not responsible for any damages arising from use of the service.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content, design, and code of this service are protected by copyright law.</p>

        <h2>6. Changes to Terms</h2>
        <p>These terms may be changed without prior notice, and updated terms take effect upon posting.</p>

        <h2>7. Contact</h2>
        <p>Email: <a href="mailto:hyukchm@gmail.com">hyukchm@gmail.com</a></p>
    `,
    zh: `
        <h2>1. 服务简介</h2>
        <p>心灵年龄计算器是一项免费娱乐服务，使用 AI 技术从照片估算您的实际年龄，并通过心理问题计算您的心理年龄。</p>

        <h2>2. 服务使用</h2>
        <ul>
            <li>13 岁及以上任何人均可使用。</li>
            <li>服务免费提供，可能包含广告。</li>
            <li>结果仅供娱乐，非医学诊断。</li>
        </ul>

        <h2>3. 用户义务</h2>
        <ul>
            <li>未经许可不得上传他人照片。</li>
            <li>不得上传不当图片。</li>
            <li>不得将服务用于非法目的。</li>
        </ul>

        <h2>4. 免责声明</h2>
        <p>结果仅供参考，可能无法准确反映实际年龄或心理状态。我们对因使用本服务而产生的任何损害概不负责。</p>

        <h2>5. 知识产权</h2>
        <p>本服务的所有内容、设计和代码均受版权法保护。</p>

        <h2>6. 条款变更</h2>
        <p>本条款可能在不事先通知的情况下更改，更新后的条款在发布时生效。</p>

        <h2>7. 联系方式</h2>
        <p>电子邮件：<a href="mailto:hyukchm@gmail.com">hyukchm@gmail.com</a></p>
    `
};

function loadPrivacy(lang) {
    const titles = {
        ko: '개인정보처리방침',
        en: 'Privacy Policy',
        zh: '隐私政策'
    };
    const dates = {
        ko: '<strong>최종 수정일:</strong> 2025년 12월 14일',
        en: '<strong>Last updated:</strong> December 14, 2025',
        zh: '<strong>最后更新：</strong>2025年12月14日'
    };

    document.querySelector('#privacy-modal h1').textContent = titles[lang] || titles.ko;
    document.querySelector('#privacy-modal h1 + p').innerHTML = dates[lang] || dates.ko;
    document.getElementById('privacy-text').innerHTML = privacyContent[lang] || privacyContent.ko;
}

function loadTerms(lang) {
    const titles = {
        ko: '이용약관',
        en: 'Terms of Service',
        zh: '服务条款'
    };
    const dates = {
        ko: '<strong>최종 수정일:</strong> 2025년 12월 14일',
        en: '<strong>Last updated:</strong> December 14, 2025',
        zh: '<strong>最后更新：</strong>2025年12월14日'
    };

    document.querySelector('#terms-modal h1').textContent = titles[lang] || titles.ko;
    document.querySelector('#terms-modal h1 + p').innerHTML = dates[lang] || dates.ko;
    document.getElementById('terms-text').innerHTML = termsContent[lang] || termsContent.ko;
}

