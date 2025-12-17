// ageGroups.js - 연령대 정의
export const AGE_GROUPS = {
    teen: {
        id: 'teen',
        label: { ko: '10대', en: 'Teens', zh: '青少年' },
        range: [10, 19],
        weight: 0.9  // 젊은 연령대는 심리 나이 변동폭이 작음
    },
    twenties: {
        id: 'twenties',
        label: { ko: '20대', en: '20s', zh: '二十多岁' },
        range: [20, 29],
        weight: 1.0  // 기본 가중치
    },
    thirties: {
        id: 'thirties',
        label: { ko: '30대', en: '30s', zh: '三十多岁' },
        range: [30, 39],
        weight: 1.0
    },
    forties: {
        id: 'forties',
        label: { ko: '40대', en: '40s', zh: '四十多岁' },
        range: [40, 49],
        weight: 1.1  // 중년 이후 심리적 성숙도 반영
    },
    fifties: {
        id: 'fifties',
        label: { ko: '50대', en: '50s', zh: '五十多岁' },
        range: [50, 59],
        weight: 1.2  // 높은 연령대는 심리 나이 변동폭이 큼
    }
};

// 물리적 나이로 연령대 자동 판별
export function getAgeGroupByAge(age) {
    for (const [key, group] of Object.entries(AGE_GROUPS)) {
        if (age >= group.range[0] && age <= group.range[1]) {
            return group;
        }
    }
    // 범위 밖이면 가장 가까운 그룹 반환
    if (age < 10) return AGE_GROUPS.teen;
    if (age >= 60) return AGE_GROUPS.fifties;
    return AGE_GROUPS.twenties; // 기본값
}
