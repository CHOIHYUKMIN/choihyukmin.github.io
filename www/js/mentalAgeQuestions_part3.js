// mentalAgeQuestions_part3.js - 30대 여성, 40대, 50대 질문

// ============================================
// 30대 여성 (Thirties Female)
// ============================================
export const QUESTIONS_30_FEMALE = {
    thf_1: {
        id: 'thf_1',
        category: 'emotion',
        text: {
            ko: '육아와 일을 병행하면서 느끼는 스트레스를 어떻게 관리하나요?',
            en: 'How do you manage stress from balancing childcare and work?',
            zh: '在平衡育儿和工作时如何管理压力？'
        },
        options: {
            1: { label: { ko: '폭발하거나 우울해짐', en: 'Explode or get depressed', zh: '爆发或抑郁' }, score: 1 },
            2: { label: { ko: '참다가 가족에게 풀음', en: 'Endure then take it out on family', zh: '忍耐后向家人发泄' }, score: 2 },
            3: { label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '나만의 시간 확보', en: 'Secure personal time', zh: '确保个人时间' }, score: 4 },
            5: { label: { ko: '배우자와 역할 분담 조정', en: 'Adjust role sharing with spouse', zh: '与配偶调整角色分担' }, score: 5 }
        }
    },
    thf_2: {
        id: 'thf_2',
        category: 'responsibility',
        text: {
            ko: '가계 재정 관리에 얼마나 참여하나요?',
            en: 'How much do you participate in household financial management?',
            zh: '你在家庭财务管理中参与多少？'
        },
        options: {
            1: { label: { ko: '배우자에게 맡김', en: 'Leave it to spouse', zh: '交给配偶' }, score: 1 },
            2: { label: { ko: '대충 파악', en: 'Roughly aware', zh: '大致了解' }, score: 2 },
            3: { label: { ko: '함께 관리', en: 'Manage together', zh: '共同管理' }, score: 3 },
            4: { label: { ko: '주도적으로 관리', en: 'Manage proactively', zh: '主动管理' }, score: 4 },
            5: { label: { ko: '장기 재무 계획 수립', en: 'Establish long-term financial plan', zh: '建立长期财务计划' }, score: 5 }
        }
    },
    thf_3: {
        id: 'thf_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계를 어떻게 유지하나요?',
            en: 'How do you maintain your relationship with your spouse?',
            zh: '你如何维持与配偶的关系？'
        },
        options: {
            1: { label: { ko: '거의 대화 안 함', en: 'Barely talk', zh: '几乎不交谈' }, score: 1 },
            2: { label: { ko: '필요한 말만', en: 'Only necessary words', zh: '只说必要的话' }, score: 2 },
            3: { label: { ko: '일상적인 대화', en: 'Daily conversations', zh: '日常对话' }, score: 3 },
            4: { label: { ko: '깊은 대화 시간 마련', en: 'Make time for deep talks', zh: '安排深入对话时间' }, score: 4 },
            5: { label: { ko: '정기적인 데이트와 소통', en: 'Regular dates and communication', zh: '定期约会和沟通' }, score: 5 }
        }
    },
    thf_4: {
        id: 'thf_4',
        category: 'values',
        text: {
            ko: '자녀 교육에서 가장 중요하게 생각하는 것은?',
            en: 'What do you value most in children\'s education?',
            zh: '在子女教育中你最重视什么？'
        },
        options: {
            1: { label: { ko: '성적과 명문대', en: 'Grades and prestigious university', zh: '成绩和名校' }, score: 1 },
            2: { label: { ko: '좋은 직업', en: 'Good career', zh: '好的职业' }, score: 2 },
            3: { label: { ko: '다양한 경험', en: 'Diverse experiences', zh: '多样的经验' }, score: 3 },
            4: { label: { ko: '인성과 가치관', en: 'Character and values', zh: '品格和价值观' }, score: 4 },
            5: { label: { ko: '자녀의 행복과 자아실현', en: 'Child\'s happiness and self-actualization', zh: '孩子的幸福和自我实现' }, score: 5 }
        }
    },
    thf_5: {
        id: 'thf_5',
        category: 'emotion',
        text: {
            ko: '자신의 커리어를 포기한 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about giving up your career?',
            zh: '你对放弃职业有什么看法？'
        },
        options: {
            1: { label: { ko: '매우 후회하고 우울함', en: 'Very regretful and depressed', zh: '非常后悔和抑郁' }, score: 1 },
            2: { label: { ko: '아쉽지만 어쩔 수 없음', en: 'Regretful but inevitable', zh: '遗憾但无奈' }, score: 2 },
            3: { label: { ko: '가족을 위한 선택', en: 'Choice for family', zh: '为家庭的选择' }, score: 3 },
            4: { label: { ko: '만족하고 새로운 목표 설정', en: 'Satisfied and set new goals', zh: '满意并设定新目标' }, score: 4 },
            5: { label: { ko: '커리어를 유지하거나 재개 계획', en: 'Maintain career or plan to resume', zh: '维持职业或计划重启' }, score: 5 }
        }
    },
    thf_6: {
        id: 'thf_6',
        category: 'responsibility',
        text: {
            ko: '자신의 건강 관리를 어떻게 하나요?',
            en: 'How do you manage your own health?',
            zh: '你如何管理自己的健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 못 씀', en: "Can't care at all", zh: '完全无法顾及' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '가끔 운동 시도', en: 'Try to exercise occasionally', zh: '偶尔尝试运动' }, score: 3 },
            4: { label: { ko: '규칙적인 운동과 식단', en: 'Regular exercise and diet', zh: '定期运动和饮食' }, score: 4 },
            5: { label: { ko: '정기 검진과 체계적 관리', en: 'Regular checkups and systematic care', zh: '定期检查和系统管理' }, score: 5 }
        }
    },
    thf_7: {
        id: 'thf_7',
        category: 'self',
        text: {
            ko: '자신만의 시간을 얼마나 확보하나요?',
            en: 'How much personal time do you secure?',
            zh: '你能确保多少个人时间？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '주 1-2회', en: '1-2 times per week', zh: '每周1-2次' }, score: 4 },
            5: { label: { ko: '매일 일정 시간 확보', en: 'Secure time daily', zh: '每天确保一定时间' }, score: 5 }
        }
    },
    thf_8: {
        id: 'thf_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '거의 끊김', en: 'Almost cut off', zh: '几乎断绝' }, score: 1 },
            2: { label: { ko: 'SNS로만 소통', en: 'Only communicate via SNS', zh: '只通过社交媒体沟通' }, score: 2 },
            3: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 3 },
            4: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 4 },
            5: { label: { ko: '깊은 관계 지속 유지', en: 'Continuously maintain deep relationships', zh: '持续维持深厚关系' }, score: 5 }
        }
    },
    thf_9: {
        id: 'thf_9',
        category: 'emotion',
        text: {
            ko: '엄마로서의 죄책감을 어떻게 다루나요?',
            en: 'How do you handle guilt as a mother?',
            zh: '作为母亲你如何处理内疚感？'
        },
        options: {
            1: { label: { ko: '항상 죄책감에 시달림', en: 'Always suffer from guilt', zh: '总是受内疚困扰' }, score: 1 },
            2: { label: { ko: '자주 느낌', en: 'Feel often', zh: '经常感受到' }, score: 2 },
            3: { label: { ko: '가끔 느낌', en: 'Feel occasionally', zh: '偶尔感受到' }, score: 3 },
            4: { label: { ko: '최선을 다한다고 생각', en: 'Think I do my best', zh: '认为已尽力' }, score: 4 },
            5: { label: { ko: '건강한 경계 설정', en: 'Set healthy boundaries', zh: '设定健康界限' }, score: 5 }
        }
    },
    thf_10: {
        id: 'thf_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 못 함', en: "Can't at all", zh: '完全不能' }, score: 1 },
            2: { label: { ko: '하고 싶지만 여유 없음', en: 'Want to but no time', zh: '想但没时间' }, score: 2 },
            3: { label: { ko: '틈틈이 노력', en: 'Try when possible', zh: '有空时努力' }, score: 3 },
            4: { label: { ko: '시간을 내서 함', en: 'Make time for it', zh: '抽时间做' }, score: 4 },
            5: { label: { ko: '적극적으로 투자', en: 'Actively invest', zh: '积极投资' }, score: 5 }
        }
    }
};

// ============================================
// 40대 남성 (Forties Male)
// ============================================
export const QUESTIONS_40_MALE = {
    fm_1: {
        id: 'fm_1',
        category: 'emotion',
        text: {
            ko: '중년의 위기를 어떻게 극복하고 있나요?',
            en: 'How are you overcoming midlife crisis?',
            zh: '你如何克服中年危机？'
        },
        options: {
            1: { label: { ko: '부정하거나 회피', en: 'Deny or avoid', zh: '否认或回避' }, score: 1 },
            2: { label: { ko: '술이나 외도', en: 'Alcohol or affair', zh: '酒精或外遇' }, score: 2 },
            3: { label: { ko: '그냥 참고 살아감', en: 'Just endure and live', zh: '只是忍耐并生活' }, score: 3 },
            4: { label: { ko: '새로운 취미나 목표 설정', en: 'Set new hobbies or goals', zh: '设定新爱好或目标' }, score: 4 },
            5: { label: { ko: '성찰하고 의미 있는 변화 추구', en: 'Reflect and pursue meaningful change', zh: '反思并追求有意义的改变' }, score: 5 }
        }
    },
    fm_2: {
        id: 'fm_2',
        category: 'responsibility',
        text: {
            ko: '노후 준비를 얼마나 하고 있나요?',
            en: 'How much are you preparing for retirement?',
            zh: '你在为退休做多少准备？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '막연하게 생각만', en: 'Only vaguely thinking', zh: '只是模糊地想' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비', en: 'Prepare systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '구체적인 계획 실행 중', en: 'Executing specific plans', zh: '执行具体计划' }, score: 5 }
        }
    },
    fm_3: {
        id: 'fm_3',
        category: 'relationship',
        text: {
            ko: '자녀와의 관계는 어떤가요?',
            en: 'How is your relationship with your children?',
            zh: '你和子女的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 대화 안 함', en: 'Barely talk', zh: '几乎不交谈' }, score: 1 },
            2: { label: { ko: '훈계만 함', en: 'Only lecture', zh: '只是训诫' }, score: 2 },
            3: { label: { ko: '필요한 대화만', en: 'Only necessary talks', zh: '只进行必要对话' }, score: 3 },
            4: { label: { ko: '자주 대화하고 관심', en: 'Talk often and show interest', zh: '经常交谈并关心' }, score: 4 },
            5: { label: { ko: '친구처럼 깊은 소통', en: 'Deep communication like friends', zh: '像朋友一样深入沟通' }, score: 5 }
        }
    },
    fm_4: {
        id: 'fm_4',
        category: 'values',
        text: {
            ko: '인생에서 가장 중요한 가치는?',
            en: 'What is the most important value in life?',
            zh: '人生中最重要的价值是什么？'
        },
        options: {
            1: { label: { ko: '돈과 권력', en: 'Money and power', zh: '金钱和权力' }, score: 1 },
            2: { label: { ko: '사회적 성공', en: 'Social success', zh: '社会成功' }, score: 2 },
            3: { label: { ko: '가족의 안정', en: 'Family stability', zh: '家庭稳定' }, score: 3 },
            4: { label: { ko: '건강과 행복', en: 'Health and happiness', zh: '健康和幸福' }, score: 4 },
            5: { label: { ko: '삶의 의미와 기여', en: 'Life meaning and contribution', zh: '生活意义和贡献' }, score: 5 }
        }
    },
    fm_5: {
        id: 'fm_5',
        category: 'emotion',
        text: {
            ko: '건강 문제에 대한 불안을 어떻게 다루나요?',
            en: 'How do you handle anxiety about health issues?',
            zh: '你如何处理对健康问题的焦虑？'
        },
        options: {
            1: { label: { ko: '무시하고 방치', en: 'Ignore and neglect', zh: '忽视并放任' }, score: 1 },
            2: { label: { ko: '걱정만 함', en: 'Only worry', zh: '只是担心' }, score: 2 },
            3: { label: { ko: '가끔 검진', en: 'Occasional checkups', zh: '偶尔检查' }, score: 3 },
            4: { label: { ko: '정기 검진과 관리', en: 'Regular checkups and care', zh: '定期检查和管理' }, score: 4 },
            5: { label: { ko: '적극적인 건강 관리', en: 'Active health management', zh: '积极的健康管理' }, score: 5 }
        }
    },
    fm_6: {
        id: 'fm_6',
        category: 'responsibility',
        text: {
            ko: '부모님 부양에 대해 어떻게 생각하나요?',
            en: 'What do you think about supporting your parents?',
            zh: '你对赡养父母有什么看法？'
        },
        options: {
            1: { label: { ko: '생각 안 함', en: "Don't think about it", zh: '不想' }, score: 1 },
            2: { label: { ko: '형제들과 나눔', en: 'Share with siblings', zh: '与兄弟姐妹分担' }, score: 2 },
            3: { label: { ko: '경제적으로만 지원', en: 'Only financial support', zh: '只提供经济支持' }, score: 3 },
            4: { label: { ko: '정기적으로 방문하고 지원', en: 'Visit and support regularly', zh: '定期拜访并支持' }, score: 4 },
            5: { label: { ko: '적극적으로 모시고 돌봄', en: 'Actively care for them', zh: '积极照顾' }, score: 5 }
        }
    },
    fm_7: {
        id: 'fm_7',
        category: 'self',
        text: {
            ko: '새로운 것을 배우는 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about learning new things?',
            zh: '你对学习新事物有什么看法？'
        },
        options: {
            1: { label: { ko: '너무 늦었다고 생각', en: 'Think it\'s too late', zh: '认为太晚了' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '필요하면 배움', en: 'Learn if necessary', zh: '必要时学习' }, score: 3 },
            4: { label: { ko: '적극적으로 배움', en: 'Actively learn', zh: '积极学习' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    },
    fm_8: {
        id: 'fm_8',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계는 어떤가요?',
            en: 'How is your relationship with your spouse?',
            zh: '你和配偶的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 대화 없음', en: 'Almost no conversation', zh: '几乎没有对话' }, score: 1 },
            2: { label: { ko: '필요한 말만', en: 'Only necessary words', zh: '只说必要的话' }, score: 2 },
            3: { label: { ko: '일상적인 대화', en: 'Daily conversations', zh: '日常对话' }, score: 3 },
            4: { label: { ko: '친밀하고 깊은 대화', en: 'Intimate and deep talks', zh: '亲密而深入的对话' }, score: 4 },
            5: { label: { ko: '최고의 친구이자 동반자', en: 'Best friend and partner', zh: '最好的朋友和伴侣' }, score: 5 }
        }
    },
    fm_9: {
        id: 'fm_9',
        category: 'values',
        text: {
            ko: '은퇴 후 계획이 있나요?',
            en: 'Do you have plans after retirement?',
            zh: '你有退休后的计划吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '그냥 쉬고 싶음', en: 'Just want to rest', zh: '只想休息' }, score: 2 },
            3: { label: { ko: '취미 생활', en: 'Hobbies', zh: '爱好' }, score: 3 },
            4: { label: { ko: '새로운 일 시작', en: 'Start new work', zh: '开始新工作' }, score: 4 },
            5: { label: { ko: '사회 기여 활동', en: 'Social contribution activities', zh: '社会贡献活动' }, score: 5 }
        }
    },
    fm_10: {
        id: 'fm_10',
        category: 'self',
        text: {
            ko: '자신의 인생을 돌아볼 때 어떤 생각이 드나요?',
            en: 'What do you think when you look back on your life?',
            zh: '回顾人生时你有什么想法？'
        },
        options: {
            1: { label: { ko: '후회만 가득', en: 'Full of regrets', zh: '充满遗憾' }, score: 1 },
            2: { label: { ko: '아쉬움이 많음', en: 'Many regrets', zh: '很多遗憾' }, score: 2 },
            3: { label: { ko: '그럭저럭 살았음', en: 'Lived so-so', zh: '勉强过来了' }, score: 3 },
            4: { label: { ko: '만족스러움', en: 'Satisfactory', zh: '满意' }, score: 4 },
            5: { label: { ko: '의미 있고 감사함', en: 'Meaningful and grateful', zh: '有意义且感恩' }, score: 5 }
        }
    }
};

// 40대 여성, 50대는 다음 파일에...
