// mentalAgeQuestions_part4.js - 40대 여성, 50대 남성/여성 질문

// ============================================
// 40대 여성 (Forties Female)
// ============================================
export const QUESTIONS_40_FEMALE = {
    ff_1: {
        id: 'ff_1',
        category: 'emotion',
        text: {
            ko: '갱년기 증상을 어떻게 관리하고 있나요?',
            en: 'How are you managing menopause symptoms?',
            zh: '你如何管理更年期症状？'
        },
        options: {
            1: { label: { ko: '무시하고 참음', en: 'Ignore and endure', zh: '忽视并忍耐' }, score: 1 },
            2: { label: { ko: '주변에 짜증냄', en: 'Take it out on others', zh: '对周围人发脾气' }, score: 2 },
            3: { label: { ko: '민간요법 시도', en: 'Try folk remedies', zh: '尝试民间疗法' }, score: 3 },
            4: { label: { ko: '병원 치료', en: 'Medical treatment', zh: '医院治疗' }, score: 4 },
            5: { label: { ko: '체계적인 건강 관리', en: 'Systematic health management', zh: '系统的健康管理' }, score: 5 }
        }
    },
    ff_2: {
        id: 'ff_2',
        category: 'responsibility',
        text: {
            ko: '자녀의 독립을 어떻게 준비하고 있나요?',
            en: 'How are you preparing for your children\'s independence?',
            zh: '你如何为子女的独立做准备？'
        },
        options: {
            1: { label: { ko: '독립 못하게 붙잡음', en: 'Hold them back', zh: '阻止独立' }, score: 1 },
            2: { label: { ko: '불안해하며 걱정', en: 'Anxious and worried', zh: '焦虑并担心' }, score: 2 },
            3: { label: { ko: '어쩔 수 없이 받아들임', en: 'Accept reluctantly', zh: '勉强接受' }, score: 3 },
            4: { label: { ko: '적극적으로 지원', en: 'Actively support', zh: '积极支持' }, score: 4 },
            5: { label: { ko: '독립을 격려하고 자신의 삶 준비', en: 'Encourage independence and prepare own life', zh: '鼓励独立并准备自己的生活' }, score: 5 }
        }
    },
    ff_3: {
        id: 'ff_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 관계를 어떻게 재정립하고 있나요?',
            en: 'How are you redefining your relationship with your spouse?',
            zh: '你如何重新定义与配偶的关系？'
        },
        options: {
            1: { label: { ko: '관계가 소원해짐', en: 'Relationship becomes distant', zh: '关系变得疏远' }, score: 1 },
            2: { label: { ko: '그냥 익숙함으로 지냄', en: 'Just live with familiarity', zh: '只是习惯性地生活' }, score: 2 },
            3: { label: { ko: '필요한 대화만', en: 'Only necessary talks', zh: '只进行必要对话' }, score: 3 },
            4: { label: { ko: '새로운 관계 모색', en: 'Seek new relationship', zh: '寻找新关系' }, score: 4 },
            5: { label: { ko: '제2의 신혼처럼 친밀함', en: 'Intimate like second honeymoon', zh: '像第二次蜜月般亲密' }, score: 5 }
        }
    },
    ff_4: {
        id: 'ff_4',
        category: 'values',
        text: {
            ko: '이제 자신을 위한 시간을 어떻게 보내나요?',
            en: 'How do you spend time for yourself now?',
            zh: '现在你如何为自己花时间？'
        },
        options: {
            1: { label: { ko: '여전히 가족만 돌봄', en: 'Still only care for family', zh: '仍然只照顾家人' }, score: 1 },
            2: { label: { ko: 'TV나 스마트폰', en: 'TV or smartphone', zh: '电视或手机' }, score: 2 },
            3: { label: { ko: '친구들과 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '취미나 운동', en: 'Hobbies or exercise', zh: '爱好或运动' }, score: 4 },
            5: { label: { ko: '자기계발과 새로운 도전', en: 'Self-development and new challenges', zh: '自我发展和新挑战' }, score: 5 }
        }
    },
    ff_5: {
        id: 'ff_5',
        category: 'emotion',
        text: {
            ko: '빈둥지 증후군을 어떻게 극복하고 있나요?',
            en: 'How are you overcoming empty nest syndrome?',
            zh: '你如何克服空巢综合症？'
        },
        options: {
            1: { label: { ko: '우울하고 무기력함', en: 'Depressed and lethargic', zh: '抑郁且无力' }, score: 1 },
            2: { label: { ko: '자녀에게 자주 연락', en: 'Contact children often', zh: '经常联系子女' }, score: 2 },
            3: { label: { ko: '적응하려 노력', en: 'Try to adapt', zh: '努力适应' }, score: 3 },
            4: { label: { ko: '새로운 관계와 활동', en: 'New relationships and activities', zh: '新关系和活动' }, score: 4 },
            5: { label: { ko: '자유를 즐기고 새 인생 시작', en: 'Enjoy freedom and start new life', zh: '享受自由并开始新生活' }, score: 5 }
        }
    },
    ff_6: {
        id: 'ff_6',
        category: 'responsibility',
        text: {
            ko: '노후 준비를 어떻게 하고 있나요?',
            en: 'How are you preparing for retirement?',
            zh: '你如何为退休做准备？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '배우자에게 의존', en: 'Depend on spouse', zh: '依赖配偶' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비', en: 'Prepare systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '경제적·정서적 독립 준비', en: 'Prepare financial and emotional independence', zh: '准备经济和情感独立' }, score: 5 }
        }
    },
    ff_7: {
        id: 'ff_7',
        category: 'self',
        text: {
            ko: '자신의 정체성을 어떻게 찾고 있나요?',
            en: 'How are you finding your identity?',
            zh: '你如何寻找自己的身份？'
        },
        options: {
            1: { label: { ko: '여전히 엄마로만 생각', en: 'Still think only as a mother', zh: '仍然只认为是母亲' }, score: 1 },
            2: { label: { ko: '혼란스러움', en: 'Confused', zh: '困惑' }, score: 2 },
            3: { label: { ko: '서서히 찾아가는 중', en: 'Gradually finding', zh: '逐渐寻找' }, score: 3 },
            4: { label: { ko: '새로운 나를 발견', en: 'Discovering new self', zh: '发现新自我' }, score: 4 },
            5: { label: { ko: '명확한 정체성 확립', en: 'Establish clear identity', zh: '建立清晰身份' }, score: 5 }
        }
    },
    ff_8: {
        id: 'ff_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 1 },
            2: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 2 },
            3: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 3 },
            4: { label: { ko: '깊은 우정 유지', en: 'Maintain deep friendship', zh: '维持深厚友谊' }, score: 4 },
            5: { label: { ko: '새로운 친구도 사귐', en: 'Make new friends too', zh: '也结交新朋友' }, score: 5 }
        }
    },
    ff_9: {
        id: 'ff_9',
        category: 'values',
        text: {
            ko: '인생의 후반부를 어떻게 보내고 싶나요?',
            en: 'How do you want to spend the latter half of your life?',
            zh: '你想如何度过人生的后半段？'
        },
        options: {
            1: { label: { ko: '생각 안 함', en: "Don't think about it", zh: '不想' }, score: 1 },
            2: { label: { ko: '그냥 편하게', en: 'Just comfortably', zh: '只是舒适地' }, score: 2 },
            3: { label: { ko: '가족과 함께', en: 'With family', zh: '和家人一起' }, score: 3 },
            4: { label: { ko: '하고 싶은 일 하며', en: 'Doing what I want', zh: '做想做的事' }, score: 4 },
            5: { label: { ko: '의미 있는 일로 사회 기여', en: 'Contribute to society with meaningful work', zh: '通过有意义的工作贡献社会' }, score: 5 }
        }
    },
    ff_10: {
        id: 'ff_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '적극적으로', en: 'Actively', zh: '积极地' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    }
};

// ============================================
// 50대 남성 (Fifties Male)
// ============================================
export const QUESTIONS_50_MALE = {
    fim_1: {
        id: 'fim_1',
        category: 'emotion',
        text: {
            ko: '은퇴에 대한 두려움을 어떻게 다루나요?',
            en: 'How do you handle fear of retirement?',
            zh: '你如何处理对退休的恐惧？'
        },
        options: {
            1: { label: { ko: '매우 불안하고 우울함', en: 'Very anxious and depressed', zh: '非常焦虑和抑郁' }, score: 1 },
            2: { label: { ko: '부정하고 회피', en: 'Deny and avoid', zh: '否认并回避' }, score: 2 },
            3: { label: { ko: '걱정은 하지만 준비 안 함', en: 'Worry but don\'t prepare', zh: '担心但不准备' }, score: 3 },
            4: { label: { ko: '적극적으로 준비', en: 'Actively prepare', zh: '积极准备' }, score: 4 },
            5: { label: { ko: '새로운 시작으로 긍정적 수용', en: 'Accept positively as new beginning', zh: '积极接受为新开始' }, score: 5 }
        }
    },
    fim_2: {
        id: 'fim_2',
        category: 'responsibility',
        text: {
            ko: '노후 자금은 충분히 준비되어 있나요?',
            en: 'Do you have sufficient retirement funds prepared?',
            zh: '你准备了足够的退休资金吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '매우 부족', en: 'Very insufficient', zh: '非常不足' }, score: 2 },
            3: { label: { ko: '어느 정도 준비', en: 'Somewhat prepared', zh: '有一定准备' }, score: 3 },
            4: { label: { ko: '충분히 준비', en: 'Well prepared', zh: '充分准备' }, score: 4 },
            5: { label: { ko: '여유 있게 준비', en: 'Comfortably prepared', zh: '宽裕地准备' }, score: 5 }
        }
    },
    fim_3: {
        id: 'fim_3',
        category: 'relationship',
        text: {
            ko: '배우자와 은퇴 후 생활을 어떻게 준비하나요?',
            en: 'How do you prepare for post-retirement life with your spouse?',
            zh: '你如何与配偶准备退休后的生活？'
        },
        options: {
            1: { label: { ko: '전혀 대화 안 함', en: 'No discussion at all', zh: '完全不讨论' }, score: 1 },
            2: { label: { ko: '각자 알아서', en: 'Each on their own', zh: '各自为政' }, score: 2 },
            3: { label: { ko: '가끔 이야기', en: 'Talk occasionally', zh: '偶尔谈论' }, score: 3 },
            4: { label: { ko: '함께 계획', en: 'Plan together', zh: '共同计划' }, score: 4 },
            5: { label: { ko: '구체적인 계획 수립', en: 'Establish specific plans', zh: '建立具体计划' }, score: 5 }
        }
    },
    fim_4: {
        id: 'fim_4',
        category: 'values',
        text: {
            ko: '은퇴 후 무엇을 하고 싶나요?',
            en: 'What do you want to do after retirement?',
            zh: '退休后你想做什么？'
        },
        options: {
            1: { label: { ko: '아무 생각 없음', en: 'No thoughts', zh: '没想法' }, score: 1 },
            2: { label: { ko: '그냥 쉬고 싶음', en: 'Just want to rest', zh: '只想休息' }, score: 2 },
            3: { label: { ko: '취미 생활', en: 'Hobbies', zh: '爱好' }, score: 3 },
            4: { label: { ko: '새로운 일 시작', en: 'Start new work', zh: '开始新工作' }, score: 4 },
            5: { label: { ko: '사회 기여 활동', en: 'Social contribution', zh: '社会贡献' }, score: 5 }
        }
    },
    fim_5: {
        id: 'fim_5',
        category: 'emotion',
        text: {
            ko: '건강 문제를 어떻게 관리하나요?',
            en: 'How do you manage health issues?',
            zh: '你如何管理健康问题？'
        },
        options: {
            1: { label: { ko: '무시하고 방치', en: 'Ignore and neglect', zh: '忽视并放任' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '정기 검진', en: 'Regular checkups', zh: '定期检查' }, score: 3 },
            4: { label: { ko: '운동과 식단 관리', en: 'Exercise and diet management', zh: '运动和饮食管理' }, score: 4 },
            5: { label: { ko: '체계적인 건강 관리', en: 'Systematic health management', zh: '系统的健康管理' }, score: 5 }
        }
    },
    fim_6: {
        id: 'fim_6',
        category: 'responsibility',
        text: {
            ko: '자녀들의 독립을 어떻게 지원하나요?',
            en: 'How do you support your children\'s independence?',
            zh: '你如何支持子女的独立？'
        },
        options: {
            1: { label: { ko: '계속 의존하게 함', en: 'Keep them dependent', zh: '让他们继续依赖' }, score: 1 },
            2: { label: { ko: '경제적으로만 지원', en: 'Only financial support', zh: '只提供经济支持' }, score: 2 },
            3: { label: { ko: '필요할 때 도움', en: 'Help when needed', zh: '需要时帮助' }, score: 3 },
            4: { label: { ko: '독립을 격려', en: 'Encourage independence', zh: '鼓励独立' }, score: 4 },
            5: { label: { ko: '완전한 독립 지원', en: 'Support complete independence', zh: '支持完全独立' }, score: 5 }
        }
    },
    fim_7: {
        id: 'fim_7',
        category: 'self',
        text: {
            ko: '인생을 돌아볼 때 어떤 생각이 드나요?',
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
    },
    fim_8: {
        id: 'fim_8',
        category: 'relationship',
        text: {
            ko: '손주들과의 관계는 어떤가요?',
            en: 'How is your relationship with grandchildren?',
            zh: '你和孙辈的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 안 봄', en: 'Rarely see them', zh: '很少见' }, score: 1 },
            2: { label: { ko: '가끔 봄', en: 'See occasionally', zh: '偶尔见' }, score: 2 },
            3: { label: { ko: '자주 봄', en: 'See often', zh: '经常见' }, score: 3 },
            4: { label: { ko: '친밀하게 지냄', en: 'Close relationship', zh: '亲密相处' }, score: 4 },
            5: { label: { ko: '적극적으로 돌봄', en: 'Actively care for them', zh: '积极照顾' }, score: 5 }
        }
    },
    fim_9: {
        id: 'fim_9',
        category: 'values',
        text: {
            ko: '남은 인생에서 가장 중요한 것은?',
            en: 'What is most important in your remaining life?',
            zh: '在余生中最重要的是什么？'
        },
        options: {
            1: { label: { ko: '돈', en: 'Money', zh: '金钱' }, score: 1 },
            2: { label: { ko: '편안함', en: 'Comfort', zh: '舒适' }, score: 2 },
            3: { label: { ko: '가족', en: 'Family', zh: '家庭' }, score: 3 },
            4: { label: { ko: '건강과 행복', en: 'Health and happiness', zh: '健康和幸福' }, score: 4 },
            5: { label: { ko: '삶의 의미와 유산', en: 'Life meaning and legacy', zh: '生活意义和遗产' }, score: 5 }
        }
    },
    fim_10: {
        id: 'fim_10',
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
    }
};

// ============================================
// 50대 여성 (Fifties Female)
// ============================================
export const QUESTIONS_50_FEMALE = {
    fif_1: {
        id: 'fif_1',
        category: 'emotion',
        text: {
            ko: '갱년기 이후 자신의 변화를 어떻게 받아들이나요?',
            en: 'How do you accept changes after menopause?',
            zh: '你如何接受更年期后的变化？'
        },
        options: {
            1: { label: { ko: '부정하고 우울함', en: 'Deny and depressed', zh: '否认并抑郁' }, score: 1 },
            2: { label: { ko: '받아들이기 힘듦', en: 'Hard to accept', zh: '难以接受' }, score: 2 },
            3: { label: { ko: '어쩔 수 없이 수용', en: 'Accept reluctantly', zh: '勉强接受' }, score: 3 },
            4: { label: { ko: '자연스럽게 받아들임', en: 'Accept naturally', zh: '自然接受' }, score: 4 },
            5: { label: { ko: '긍정적으로 새 출발', en: 'Positive new start', zh: '积极的新开始' }, score: 5 }
        }
    },
    fif_2: {
        id: 'fif_2',
        category: 'responsibility',
        text: {
            ko: '노후 준비를 어떻게 하고 있나요?',
            en: 'How are you preparing for retirement?',
            zh: '你如何为退休做准备？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '배우자에게 의존', en: 'Depend on spouse', zh: '依赖配偶' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비', en: 'Prepare systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '독립적으로 충분히 준비', en: 'Independently well prepared', zh: '独立地充分准备' }, score: 5 }
        }
    },
    fif_3: {
        id: 'fif_3',
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
            5: { label: { ko: '최고의 동반자', en: 'Best companion', zh: '最好的伴侣' }, score: 5 }
        }
    },
    fif_4: {
        id: 'fif_4',
        category: 'values',
        text: {
            ko: '남은 인생을 어떻게 보내고 싶나요?',
            en: 'How do you want to spend your remaining life?',
            zh: '你想如何度过余生？'
        },
        options: {
            1: { label: { ko: '생각 안 함', en: "Don't think about it", zh: '不想' }, score: 1 },
            2: { label: { ko: '그냥 편하게', en: 'Just comfortably', zh: '只是舒适地' }, score: 2 },
            3: { label: { ko: '가족과 함께', en: 'With family', zh: '和家人一起' }, score: 3 },
            4: { label: { ko: '하고 싶은 일 하며', en: 'Doing what I want', zh: '做想做的事' }, score: 4 },
            5: { label: { ko: '의미 있는 일로 기여', en: 'Contribute with meaningful work', zh: '通过有意义的工作贡献' }, score: 5 }
        }
    },
    fif_5: {
        id: 'fif_5',
        category: 'emotion',
        text: {
            ko: '손주 돌봄에 대해 어떻게 생각하나요?',
            en: 'What do you think about caring for grandchildren?',
            zh: '你对照顾孙辈有什么看法？'
        },
        options: {
            1: { label: { ko: '부담스럽고 싫음', en: 'Burdensome and dislike', zh: '负担且不喜欢' }, score: 1 },
            2: { label: { ko: '어쩔 수 없이 함', en: 'Do it reluctantly', zh: '勉强做' }, score: 2 },
            3: { label: { ko: '가끔은 좋음', en: 'Good occasionally', zh: '偶尔还好' }, score: 3 },
            4: { label: { ko: '기쁘게 도움', en: 'Happily help', zh: '高兴地帮助' }, score: 4 },
            5: { label: { ko: '적절한 경계 유지하며 즐김', en: 'Enjoy while maintaining boundaries', zh: '保持适当界限并享受' }, score: 5 }
        }
    },
    fif_6: {
        id: 'fif_6',
        category: 'responsibility',
        text: {
            ko: '건강 관리를 어떻게 하나요?',
            en: 'How do you manage your health?',
            zh: '你如何管理健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 안 씀', en: "Don't care at all", zh: '完全不在意' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '정기 검진', en: 'Regular checkups', zh: '定期检查' }, score: 3 },
            4: { label: { ko: '운동과 식단 관리', en: 'Exercise and diet management', zh: '运动和饮食管理' }, score: 4 },
            5: { label: { ko: '체계적인 건강 관리', en: 'Systematic health management', zh: '系统的健康管理' }, score: 5 }
        }
    },
    fif_7: {
        id: 'fif_7',
        category: 'self',
        text: {
            ko: '자신만의 정체성을 찾았나요?',
            en: 'Have you found your own identity?',
            zh: '你找到了自己的身份吗？'
        },
        options: {
            1: { label: { ko: '여전히 혼란스러움', en: 'Still confused', zh: '仍然困惑' }, score: 1 },
            2: { label: { ko: '찾고 있는 중', en: 'Still searching', zh: '正在寻找' }, score: 2 },
            3: { label: { ko: '어느 정도 찾음', en: 'Found somewhat', zh: '找到了一些' }, score: 3 },
            4: { label: { ko: '명확히 찾음', en: 'Clearly found', zh: '清楚地找到' }, score: 4 },
            5: { label: { ko: '확립하고 실천 중', en: 'Established and practicing', zh: '确立并实践中' }, score: 5 }
        }
    },
    fif_8: {
        id: 'fif_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '거의 없음', en: 'Almost none', zh: '几乎没有' }, score: 1 },
            2: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 2 },
            3: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 3 },
            4: { label: { ko: '깊은 우정 유지', en: 'Maintain deep friendship', zh: '维持深厚友谊' }, score: 4 },
            5: { label: { ko: '새로운 친구도 사귐', en: 'Make new friends too', zh: '也结交新朋友' }, score: 5 }
        }
    },
    fif_9: {
        id: 'fif_9',
        category: 'values',
        text: {
            ko: '사회 활동이나 봉사를 하고 있나요?',
            en: 'Are you doing social activities or volunteering?',
            zh: '你在进行社会活动或志愿服务吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '정기적으로', en: 'Regularly', zh: '定期' }, score: 4 },
            5: { label: { ko: '적극적으로 참여', en: 'Actively participate', zh: '积极参与' }, score: 5 }
        }
    },
    fif_10: {
        id: 'fif_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '적극적으로', en: 'Actively', zh: '积极地' }, score: 4 },
            5: { label: { ko: '평생 학습 실천', en: 'Practice lifelong learning', zh: '实践终身学习' }, score: 5 }
        }
    }
};
