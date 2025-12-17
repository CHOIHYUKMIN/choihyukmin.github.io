// scenarios.js - 시나리오 정의 (연령대별 질문 매핑)
export const SCENARIOS = {
    daily: {
        id: 'daily',
        name: { ko: '일상생활', en: 'Daily Life', zh: '日常生活' },
        icon: '🏠',
        weight: 1.0,
        description: {
            ko: '평소 생활 습관과 일상적인 선택을 통해 마음의 나이를 분석합니다',
            en: 'Analyze your mind age through daily habits and routine choices',
            zh: '通过日常习惯和日常选择分析您的心理年龄'
        }
    },

    school: {
        id: 'school',
        name: { ko: '학교생활', en: 'School Life', zh: '学校生活' },
        icon: '🎓',
        weight: 1.0,
        description: {
            ko: '학교에서의 태도와 학습 스타일로 마음의 나이를 분석합니다',
            en: 'Analyze your mind age through school attitude and learning style',
            zh: '通过学校态度和学习方式分析您的心理年龄'
        }
    },

    work: {
        id: 'work',
        name: { ko: '직장생활', en: 'Work Life', zh: '职场生活' },
        icon: '💼',
        weight: 1.2,
        description: {
            ko: '직장에서의 태도와 업무 스타일로 마음의 나이를 분석합니다',
            en: 'Analyze your mind age through work attitude and style',
            zh: '通过工作态度和工作方式分析您的心理年龄'
        }
    },

    romance: {
        id: 'romance',
        name: { ko: '연애생활', en: 'Romance Life', zh: '恋爱生活' },
        icon: '💕',
        weight: 1.1,
        description: {
            ko: '연애와 관계에 대한 태도로 마음의 나이를 분석합니다',
            en: 'Analyze your mind age through romance and relationship attitudes',
            zh: '通过恋爱和关系态度分析您的心理年龄'
        }
    },

    social: {
        id: 'social',
        name: { ko: '사회생활', en: 'Social Life', zh: '社会生活' },
        icon: '👥',
        weight: 1.0,
        description: {
            ko: '사회 활동과 대인 관계로 마음의 나이를 분석합니다',
            en: 'Analyze your mind age through social activities and relationships',
            zh: '通过社会活动和人际关系分析您的心理年龄'
        }
    },

    family: {
        id: 'family',
        name: { ko: '가족생활', en: 'Family Life', zh: '家庭生活' },
        icon: '👨‍👩‍👧‍👦',
        weight: 1.1,
        description: {
            ko: '가족 관계와 부부 생활로 마음의 나이를 분석합니다',
            en: 'Analyze your mind age through family and couple relationships',
            zh: '通过家庭和夫妻关系分析您的心理年龄'
        }
    }
};

// 연령대별 사용 가능한 시나리오 매핑
export const SCENARIO_MAP = {
    TEEN: ['daily', 'school', 'romance'],
    TWENTIES: ['daily', 'work', 'romance'],
    THIRTIES: ['daily', 'work', 'romance'],
    FORTIES: ['daily', 'work', 'romance'],
    FIFTIES: ['daily', 'work', 'romance'],
    SIXTIES: ['daily', 'social', 'family'],
    SEVENTIES: ['daily', 'social', 'family']
};

// 연령대별 사용 가능한 시나리오 가져오기
export function getAvailableScenarios(ageGroup) {
    const scenarios = SCENARIO_MAP[ageGroup] || ['daily'];
    return scenarios.map(id => SCENARIOS[id]).filter(Boolean);
}
