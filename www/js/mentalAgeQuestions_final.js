// ==================== 통합 질문 파일 ====================
// 모든 연령대 질문을 하나로 통합

import { TEEN_QUESTIONS } from './mentalAgeQuestions_new.js';
import { TWENTIES_QUESTIONS } from './mentalAgeQuestions_20s.js';
import { THIRTIES_QUESTIONS } from './mentalAgeQuestions_30s.js';
import { FORTIES_QUESTIONS } from './mentalAgeQuestions_40s.js';
import { FIFTIES_QUESTIONS } from './mentalAgeQuestions_50s.js';
import { SIXTIES_QUESTIONS } from './mentalAgeQuestions_60s.js';
import { SEVENTIES_QUESTIONS } from './mentalAgeQuestions_70s.js';

// 가중치
export const WEIGHTS = {
    emotion: 0.30,
    responsibility: 0.20,
    relationship: 0.20,
    values: 0.15,
    self: 0.15,
};

// 전체 질문 통합
export const ALL_QUESTIONS = {
    TEEN: TEEN_QUESTIONS,
    TWENTIES: TWENTIES_QUESTIONS,
    THIRTIES: THIRTIES_QUESTIONS,
    FORTIES: FORTIES_QUESTIONS,
    FIFTIES: FIFTIES_QUESTIONS,
    SIXTIES: SIXTIES_QUESTIONS,
    SEVENTIES: SEVENTIES_QUESTIONS
};

// 연령대별 시나리오 매핑
export const SCENARIO_MAP = {
    TEEN: ['daily', 'school', 'romance'],
    TWENTIES: ['daily', 'work', 'romance'],
    THIRTIES: ['daily', 'work', 'romance'],
    FORTIES: ['daily', 'work', 'romance'],
    FIFTIES: ['daily', 'work', 'romance'],
    SIXTIES: ['daily', 'social', 'family'],
    SEVENTIES: ['daily', 'social', 'family']
};

// 질문 가져오기 헬퍼 함수
export function getQuestions(ageGroup, scenario) {
    const questions = ALL_QUESTIONS[ageGroup];
    if (!questions) {
        console.error(`Age group not found: ${ageGroup}`);
        return [];
    }

    const scenarioQuestions = questions[scenario];
    if (!scenarioQuestions) {
        console.error(`Scenario not found: ${scenario} for age group: ${ageGroup}`);
        return [];
    }

    return scenarioQuestions;
}

// 연령을 연령대로 변환
export function getAgeGroup(age) {
    if (age < 20) return 'TEEN';
    if (age < 30) return 'TWENTIES';
    if (age < 40) return 'THIRTIES';
    if (age < 50) return 'FORTIES';
    if (age < 60) return 'FIFTIES';
    if (age < 70) return 'SIXTIES';
    return 'SEVENTIES';
}

export default {
    WEIGHTS,
    ALL_QUESTIONS,
    SCENARIO_MAP,
    getQuestions,
    getAgeGroup
};
