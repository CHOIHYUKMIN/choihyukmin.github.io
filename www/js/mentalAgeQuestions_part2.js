// mentalAgeQuestions_part2.js - 나머지 연령대 질문

// ============================================
// 20대 여성 (Twenties Female)
// ============================================
export const QUESTIONS_20_FEMALE = {
    twf_1: {
        id: 'twf_1',
        category: 'emotion',
        text: {
            ko: '직장에서 부당한 대우를 받았을 때 어떻게 하나요?',
            en: 'What do you do when treated unfairly at work?',
            zh: '在工作中受到不公平对待时你会怎么做？'
        },
        options: {
            1: { label: { ko: '참고 넘어감', en: 'Endure and move on', zh: '忍耐并继续' }, score: 1 },
            2: { label: { ko: '친구에게만 하소연', en: 'Only complain to friends', zh: '只向朋友抱怨' }, score: 2 },
            3: { label: { ko: 'SNS에 돌려 말함', en: 'Post indirectly on SNS', zh: '在社交媒体上间接表达' }, score: 3 },
            4: { label: { ko: '직접 대화로 해결', en: 'Resolve through direct talk', zh: '通过直接对话解决' }, score: 4 },
            5: { label: { ko: '적절한 절차를 통해 공식적으로 대응', en: 'Respond officially through proper channels', zh: '通过适当程序正式应对' }, score: 5 }
        }
    },
    twf_2: {
        id: 'twf_2',
        category: 'responsibility',
        text: {
            ko: '재테크나 저축을 하고 있나요?',
            en: 'Are you doing financial planning or saving?',
            zh: '你在进行理财或储蓄吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '남는 돈만 저축', en: 'Save only leftover money', zh: '只存剩余的钱' }, score: 2 },
            3: { label: { ko: '매달 일정 금액 저축', en: 'Save fixed amount monthly', zh: '每月存固定金额' }, score: 3 },
            4: { label: { ko: '저축과 투자를 병행', en: 'Both save and invest', zh: '储蓄和投资并行' }, score: 4 },
            5: { label: { ko: '체계적인 재무 계획 수립', en: 'Have systematic financial plan', zh: '有系统的财务计划' }, score: 5 }
        }
    },
    twf_3: {
        id: 'twf_3',
        category: 'relationship',
        text: {
            ko: '연인과의 관계에서 가장 중요하게 생각하는 것은?',
            en: 'What do you value most in a relationship?',
            zh: '在恋爱关系中你最重视什么？'
        },
        options: {
            1: { label: { ko: '외모와 경제력', en: 'Appearance and financial status', zh: '外貌和经济能力' }, score: 1 },
            2: { label: { ko: '로맨틱한 감정', en: 'Romantic feelings', zh: '浪漫的感觉' }, score: 2 },
            3: { label: { ko: '성격 맞음', en: 'Personality match', zh: '性格相配' }, score: 3 },
            4: { label: { ko: '신뢰와 소통', en: 'Trust and communication', zh: '信任和沟通' }, score: 4 },
            5: { label: { ko: '서로의 성장을 돕는 관계', en: 'Relationship that helps mutual growth', zh: '互相帮助成长的关系' }, score: 5 }
        }
    },
    twf_4: {
        id: 'twf_4',
        category: 'values',
        text: {
            ko: '커리어와 결혼/출산 중 어떤 것을 우선시하나요?',
            en: 'What do you prioritize between career and marriage/childbirth?',
            zh: '在事业和婚姻/生育之间你优先考虑什么？'
        },
        options: {
            1: { label: { ko: '아직 생각 안 함', en: "Haven't thought about it", zh: '还没想过' }, score: 1 },
            2: { label: { ko: '결혼/출산', en: 'Marriage/childbirth', zh: '婚姻/生育' }, score: 2 },
            3: { label: { ko: '커리어', en: 'Career', zh: '事业' }, score: 3 },
            4: { label: { ko: '둘 다 중요', en: 'Both important', zh: '两者都重要' }, score: 4 },
            5: { label: { ko: '상황에 따라 균형 있게', en: 'Balance according to situation', zh: '根据情况平衡' }, score: 5 }
        }
    },
    twf_5: {
        id: 'twf_5',
        category: 'emotion',
        text: {
            ko: '외모나 몸매에 대한 스트레스를 어떻게 관리하나요?',
            en: 'How do you manage stress about appearance or body?',
            zh: '你如何管理关于外貌或身材的压力？'
        },
        options: {
            1: { label: { ko: '극단적인 다이어트', en: 'Extreme dieting', zh: '极端节食' }, score: 1 },
            2: { label: { ko: '성형이나 시술 고려', en: 'Consider plastic surgery', zh: '考虑整形' }, score: 2 },
            3: { label: { ko: 'SNS와 비교하며 우울해짐', en: 'Compare with SNS and feel depressed', zh: '与社交媒体比较并沮丧' }, score: 3 },
            4: { label: { ko: '건강한 운동과 식단', en: 'Healthy exercise and diet', zh: '健康运动和饮食' }, score: 4 },
            5: { label: { ko: '내면의 가치를 더 중요하게 생각', en: 'Value inner qualities more', zh: '更重视内在价值' }, score: 5 }
        }
    },
    twf_6: {
        id: 'twf_6',
        category: 'responsibility',
        text: {
            ko: '건강 관리를 어떻게 하나요?',
            en: 'How do you manage your health?',
            zh: '你如何管理健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 안 씀', en: "Don't care at all", zh: '完全不在意' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only go to hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '가끔 운동', en: 'Exercise occasionally', zh: '偶尔运动' }, score: 3 },
            4: { label: { ko: '규칙적인 운동과 식단 관리', en: 'Regular exercise and diet', zh: '定期运动和饮食管理' }, score: 4 },
            5: { label: { ko: '정기 검진과 체계적 관리', en: 'Regular checkups and systematic care', zh: '定期检查和系统管理' }, score: 5 }
        }
    },
    twf_7: {
        id: 'twf_7',
        category: 'self',
        text: {
            ko: '자신만의 가치관이 확립되어 있나요?',
            en: 'Do you have established personal values?',
            zh: '你有确立的个人价值观吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'Not at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '다른 사람 의견을 따름', en: 'Follow others opinions', zh: '跟随他人意见' }, score: 2 },
            3: { label: { ko: '상황에 따라 바뀜', en: 'Changes by situation', zh: '根据情况改变' }, score: 3 },
            4: { label: { ko: '어느 정도 확립됨', en: 'Somewhat established', zh: '有一定确立' }, score: 4 },
            5: { label: { ko: '명확하고 흔들리지 않음', en: 'Clear and unwavering', zh: '清晰且坚定' }, score: 5 }
        }
    },
    twf_8: {
        id: 'twf_8',
        category: 'relationship',
        text: {
            ko: '친구 관계를 어떻게 유지하나요?',
            en: 'How do you maintain friendships?',
            zh: '你如何维持友谊？'
        },
        options: {
            1: { label: { ko: '연락이 끊김', en: 'Lose contact', zh: '失去联系' }, score: 1 },
            2: { label: { ko: '상대가 연락하면 응답', en: 'Respond when they contact', zh: '对方联系时回应' }, score: 2 },
            3: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 3 },
            4: { label: { ko: '정기적으로 만남', en: 'Meet regularly', zh: '定期见面' }, score: 4 },
            5: { label: { ko: '깊은 관계를 지속적으로 유지', en: 'Continuously maintain deep relationships', zh: '持续维持深厚关系' }, score: 5 }
        }
    },
    twf_9: {
        id: 'twf_9',
        category: 'emotion',
        text: {
            ko: '불안감을 느낄 때 어떻게 하나요?',
            en: 'What do you do when you feel anxious?',
            zh: '感到焦虑时你会怎么做？'
        },
        options: {
            1: { label: { ko: '쇼핑이나 과소비', en: 'Shopping or overspending', zh: '购物或过度消费' }, score: 1 },
            2: { label: { ko: '술이나 폭식', en: 'Drinking or binge eating', zh: '喝酒或暴饮暴食' }, score: 2 },
            3: { label: { ko: '그냥 참음', en: 'Just endure', zh: '只是忍耐' }, score: 3 },
            4: { label: { ko: '명상이나 심호흡', en: 'Meditation or deep breathing', zh: '冥想或深呼吸' }, score: 4 },
            5: { label: { ko: '원인을 파악하고 해결', en: 'Identify cause and resolve', zh: '找出原因并解决' }, score: 5 }
        }
    },
    twf_10: {
        id: 'twf_10',
        category: 'self',
        text: {
            ko: '자기계발을 위해 무엇을 하고 있나요?',
            en: 'What are you doing for self-development?',
            zh: '你在为自我发展做什么？'
        },
        options: {
            1: { label: { ko: '아무것도 안 함', en: 'Nothing', zh: '什么都不做' }, score: 1 },
            2: { label: { ko: '가끔 책 읽기', en: 'Read books occasionally', zh: '偶尔读书' }, score: 2 },
            3: { label: { ko: '온라인 강의 수강', en: 'Take online courses', zh: '上网课' }, score: 3 },
            4: { label: { ko: '자격증이나 학위 준비', en: 'Prepare for certification or degree', zh: '准备证书或学位' }, score: 4 },
            5: { label: { ko: '체계적인 커리어 개발 계획 실행', en: 'Execute systematic career development plan', zh: '执行系统的职业发展计划' }, score: 5 }
        }
    }
};

// ============================================
// 30대 남성 (Thirties Male)
// ============================================
export const QUESTIONS_30_MALE = {
    twm_1: {
        id: 'twm_1',
        category: 'emotion',
        text: {
            ko: '직장에서 스트레스를 받을 때 어떻게 대처하나요?',
            en: 'How do you cope with stress at work?',
            zh: '在工作时你如何应对压力？'
        },
        options: {
            1: { label: { ko: '술이나 게임으로 풀음', en: 'Drink or play games', zh: '喝酒或玩游戏' }, score: 1 },
            2: { label: { ko: '그냥 참음', en: 'Just endure', zh: '只是忍耐' }, score: 2 },
            3: { label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '운동이나 취미활동', en: 'Exercise or hobbies', zh: '运动或爱好' }, score: 4 },
            5: { label: { ko: '원인 분석 후 해결책 모색', en: 'Analyze and find solutions', zh: '分析并寻找解决方案' }, score: 5 }
        }
    },
    thm_2: {
        id: 'thm_2',
        category: 'responsibility',
        text: {
            ko: '가계 재정을 어떻게 관리하나요?',
            en: 'How do you manage household finances?',
            zh: '你如何管理家庭财务？'
        },
        options: {
            1: { label: { ko: '배우자에게 맡김', en: 'Leave it to spouse', zh: '交给配偶' }, score: 1 },
            2: { label: { ko: '대충 관리', en: 'Manage roughly', zh: '粗略管理' }, score: 2 },
            3: { label: { ko: '수입과 지출 파악', en: 'Track income and expenses', zh: '了解收入和支出' }, score: 3 },
            4: { label: { ko: '예산 수립하고 저축', en: 'Budget and save', zh: '制定预算并储蓄' }, score: 4 },
            5: { label: { ko: '장기 재무 계획 수립', en: 'Establish long-term financial plan', zh: '建立长期财务计划' }, score: 5 }
        }
    },
    thm_3: {
        id: 'thm_3',
        category: 'relationship',
        text: {
            ko: '배우자와의 갈등을 어떻게 해결하나요?',
            en: 'How do you resolve conflicts with your spouse?',
            zh: '你如何解决与配偶的冲突？'
        },
        options: {
            1: { label: { ko: '무시하거나 회피', en: 'Ignore or avoid', zh: '忽视或回避' }, score: 1 },
            2: { label: { ko: '자기 주장만 함', en: 'Only assert own opinion', zh: '只坚持己见' }, score: 2 },
            3: { label: { ko: '시간이 해결해주길 기다림', en: 'Wait for time to heal', zh: '等待时间解决' }, score: 3 },
            4: { label: { ko: '대화로 타협점 찾음', en: 'Find compromise through talk', zh: '通过对话寻找妥协' }, score: 4 },
            5: { label: { ko: '서로 이해하고 함께 해결책 모색', en: 'Understand each other and find solutions together', zh: '互相理解并共同寻找解决方案' }, score: 5 }
        }
    },
    thm_4: {
        id: 'thm_4',
        category: 'values',
        text: {
            ko: '일과 가정 중 무엇을 우선시하나요?',
            en: 'What do you prioritize between work and family?',
            zh: '在工作和家庭之间你优先考虑什么？'
        },
        options: {
            1: { label: { ko: '일만 중요', en: 'Only work matters', zh: '只有工作重要' }, score: 1 },
            2: { label: { ko: '일이 우선', en: 'Work first', zh: '工作优先' }, score: 2 },
            3: { label: { ko: '상황에 따라', en: 'Depends on situation', zh: '根据情况' }, score: 3 },
            4: { label: { ko: '가정이 우선', en: 'Family first', zh: '家庭优先' }, score: 4 },
            5: { label: { ko: '균형 있게 조화', en: 'Balance harmoniously', zh: '平衡协调' }, score: 5 }
        }
    },
    thm_5: {
        id: 'thm_5',
        category: 'emotion',
        text: {
            ko: '중년의 위기감을 느끼나요?',
            en: 'Do you feel a midlife crisis?',
            zh: '你感到中年危机吗？'
        },
        options: {
            1: { label: { ko: '매우 심각하게 느낌', en: 'Feel very seriously', zh: '非常严重地感受到' }, score: 1 },
            2: { label: { ko: '자주 느낌', en: 'Feel often', zh: '经常感受到' }, score: 2 },
            3: { label: { ko: '가끔 느낌', en: 'Feel occasionally', zh: '偶尔感受到' }, score: 3 },
            4: { label: { ko: '거의 안 느낌', en: 'Rarely feel', zh: '很少感受到' }, score: 4 },
            5: { label: { ko: '전혀 안 느끼고 긍정적', en: 'Not at all and positive', zh: '完全没有且积极' }, score: 5 }
        }
    },
    thm_6: {
        id: 'thm_6',
        category: 'responsibility',
        text: {
            ko: '자녀 교육에 얼마나 관여하나요?',
            en: 'How involved are you in your children\'s education?',
            zh: '你在子女教育中参与多少？'
        },
        options: {
            1: { label: { ko: '전혀 관여 안 함', en: 'Not involved at all', zh: '完全不参与' }, score: 1 },
            2: { label: { ko: '배우자에게 맡김', en: 'Leave it to spouse', zh: '交给配偶' }, score: 2 },
            3: { label: { ko: '가끔 관심', en: 'Occasionally interested', zh: '偶尔关心' }, score: 3 },
            4: { label: { ko: '적극적으로 참여', en: 'Actively participate', zh: '积极参与' }, score: 4 },
            5: { label: { ko: '함께 계획하고 실천', en: 'Plan and practice together', zh: '共同计划并实践' }, score: 5 }
        }
    },
    thm_7: {
        id: 'thm_7',
        category: 'self',
        text: {
            ko: '건강 관리를 어떻게 하나요?',
            en: 'How do you manage your health?',
            zh: '你如何管理健康？'
        },
        options: {
            1: { label: { ko: '전혀 신경 안 씀', en: "Don't care at all", zh: '完全不在意' }, score: 1 },
            2: { label: { ko: '아플 때만 병원', en: 'Only hospital when sick', zh: '只在生病时去医院' }, score: 2 },
            3: { label: { ko: '가끔 운동', en: 'Exercise occasionally', zh: '偶尔运动' }, score: 3 },
            4: { label: { ko: '규칙적인 운동과 식단', en: 'Regular exercise and diet', zh: '定期运动和饮食' }, score: 4 },
            5: { label: { ko: '정기 검진과 체계적 관리', en: 'Regular checkups and systematic care', zh: '定期检查和系统管理' }, score: 5 }
        }
    },
    thm_8: {
        id: 'thm_8',
        category: 'relationship',
        text: {
            ko: '부모님을 얼마나 자주 찾아뵙나요?',
            en: 'How often do you visit your parents?',
            zh: '你多久拜访一次父母？'
        },
        options: {
            1: { label: { ko: '거의 안 감', en: 'Rarely visit', zh: '很少拜访' }, score: 1 },
            2: { label: { ko: '명절에만', en: 'Only on holidays', zh: '只在节日' }, score: 2 },
            3: { label: { ko: '분기별 1회', en: 'Once per quarter', zh: '每季度一次' }, score: 3 },
            4: { label: { ko: '월 1-2회', en: '1-2 times per month', zh: '每月1-2次' }, score: 4 },
            5: { label: { ko: '주 1회 이상', en: 'Once a week or more', zh: '每周一次以上' }, score: 5 }
        }
    },
    thm_9: {
        id: 'thm_9',
        category: 'values',
        text: {
            ko: '노후 준비를 하고 있나요?',
            en: 'Are you preparing for retirement?',
            zh: '你在为退休做准备吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '생각만 함', en: 'Only thinking about it', zh: '只是想想' }, score: 2 },
            3: { label: { ko: '조금씩 저축', en: 'Save little by little', zh: '一点点储蓄' }, score: 3 },
            4: { label: { ko: '체계적으로 준비 중', en: 'Preparing systematically', zh: '系统地准备' }, score: 4 },
            5: { label: { ko: '구체적인 계획 실행 중', en: 'Executing specific plans', zh: '执行具体计划' }, score: 5 }
        }
    },
    thm_10: {
        id: 'thm_10',
        category: 'self',
        text: {
            ko: '자기계발을 계속하고 있나요?',
            en: 'Are you continuing self-development?',
            zh: '你在继续自我发展吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '꾸준히', en: 'Consistently', zh: '持续' }, score: 4 },
            5: { label: { ko: '적극적으로 투자', en: 'Actively invest', zh: '积极投资' }, score: 5 }
        }
    }
};

// 30대 여성, 40대, 50대는 다음 파일에 계속...
