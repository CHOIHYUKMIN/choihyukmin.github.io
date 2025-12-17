// mentalAgeQuestions.js - 마음의 나이 측정을 위한 정교한 질문 세트
// 각 연령·성별별 10문항 (정서 30%, 책임 20%, 관계 20%, 가치 15%, 성찰 15%)

// 영역별 가중치
export const WEIGHTS = {
    emotion: 0.30,      // 정서적 성숙도
    responsibility: 0.20, // 책임감
    relationship: 0.20,   // 대인관계
    values: 0.15,        // 가치관
    self: 0.15          // 자기성찰
};

// ============================================
// 10대 남성 (Teen Male)
// ============================================
export const QUESTIONS_TEEN_MALE = {
    tm_1: {
        id: 'tm_1',
        category: 'emotion',
        text: {
            ko: '시험 성적이 안 좋게 나왔을 때 어떻게 반응하나요?',
            en: 'How do you react when you get a bad test score?',
            zh: '考试成绩不好时你会如何反应？'
        },
        options: {
            1: { label: { ko: '화내거나 포기함', en: 'Get angry or give up', zh: '生气或放弃' }, score: 1 },
            2: { label: { ko: '남 탓을 함', en: 'Blame others', zh: '责怪别人' }, score: 2 },
            3: { label: { ko: '잠시 실망하고 넘어감', en: 'Feel disappointed briefly', zh: '短暂失望后继续' }, score: 3 },
            4: { label: { ko: '원인을 분석함', en: 'Analyze the cause', zh: '分析原因' }, score: 4 },
            5: { label: { ko: '계획을 세워 개선함', en: 'Make a plan to improve', zh: '制定改进计划' }, score: 5 }
        }
    },
    tm_2: {
        id: 'tm_2',
        category: 'responsibility',
        text: {
            ko: '숙제나 과제를 언제 하나요?',
            en: 'When do you do homework or assignments?',
            zh: '你什么时候做作业？'
        },
        options: {
            1: { label: { ko: '안 하거나 베낌', en: "Don't do or copy", zh: '不做或抄袭' }, score: 1 },
            2: { label: { ko: '마감 직전', en: 'Right before deadline', zh: '截止前' }, score: 2 },
            3: { label: { ko: '마감 하루 전', en: 'Day before deadline', zh: '截止前一天' }, score: 3 },
            4: { label: { ko: '받은 당일이나 다음날', en: 'Same or next day', zh: '当天或次日' }, score: 4 },
            5: { label: { ko: '계획표에 따라 미리', en: 'According to schedule', zh: '按计划提前' }, score: 5 }
        }
    },
    tm_3: {
        id: 'tm_3',
        category: 'relationship',
        text: {
            ko: '연인과 다툴 때 어떻게 하나요?',
            en: 'What do you do when you fight with your partner?',
            zh: '和伴侣吵架时你会怎么做？'
        },
        options: {
            1: { label: { ko: '관계를 끊음', en: 'Cut off the relationship', zh: '断绝关系' }, score: 1 },
            2: { label: { ko: '상대가 사과할 때까지 기다림', en: 'Wait for them to apologize', zh: '等对方道歉' }, score: 2 },
            3: { label: { ko: '시간이 해결해주길 기다림', en: 'Wait for time to heal', zh: '等时间解决' }, score: 3 },
            4: { label: { ko: '먼저 대화를 시도함', en: 'Try to talk first', zh: '主动沟通' }, score: 4 },
            5: { label: { ko: '내 잘못을 인정하고 대화함', en: 'Admit my fault and talk', zh: '承认错误并沟通' }, score: 5 }
        }
    },
    tm_4: {
        id: 'tm_4',
        category: 'emotion',
        text: {
            ko: '스트레스를 받을 때 주로 어떻게 하나요?',
            en: 'How do you usually handle stress?',
            zh: '你通常如何应对压力？'
        },
        options: {
            1: { label: { ko: '게임이나 SNS에 몰두', en: 'Immerse in games or SNS', zh: '沉迷游戏或社交媒体' }, score: 1 },
            2: { label: { ko: '잠을 자거나 먹음', en: 'Sleep or eat', zh: '睡觉或吃东西' }, score: 2 },
            3: { label: { ko: '음악을 듣거나 영상 시청', en: 'Listen to music or watch videos', zh: '听音乐或看视频' }, score: 3 },
            4: { label: { ko: '친구와 대화', en: 'Talk with friends', zh: '和朋友聊天' }, score: 4 },
            5: { label: { ko: '운동이나 산책', en: 'Exercise or walk', zh: '运动或散步' }, score: 5 }
        }
    },
    tm_5: {
        id: 'tm_5',
        category: 'values',
        text: {
            ko: '장래 희망을 정할 때 가장 중요하게 생각하는 것은?',
            en: 'What matters most when choosing your future career?',
            zh: '选择未来职业时最重要的是什么？'
        },
        options: {
            1: { label: { ko: '아직 생각 안 함', en: "Haven't thought about it", zh: '还没想过' }, score: 1 },
            2: { label: { ko: '돈을 많이 버는 것', en: 'Making a lot of money', zh: '赚很多钱' }, score: 2 },
            3: { label: { ko: '유명해지는 것', en: 'Becoming famous', zh: '出名' }, score: 3 },
            4: { label: { ko: '안정적인 직업', en: 'Job stability', zh: '稳定的工作' }, score: 4 },
            5: { label: { ko: '내가 좋아하고 잘하는 것', en: 'What I like and do well', zh: '我喜欢并擅长的' }, score: 5 }
        }
    },
    tm_6: {
        id: 'tm_6',
        category: 'responsibility',
        text: {
            ko: '용돈을 어떻게 관리하나요?',
            en: 'How do you manage your allowance?',
            zh: '你如何管理零花钱？'
        },
        options: {
            1: { label: { ko: '받자마자 다 씀', en: 'Spend it all immediately', zh: '一拿到就花光' }, score: 1 },
            2: { label: { ko: '생각 없이 쓰다가 모자람', en: 'Spend carelessly and run out', zh: '随意花费后不够' }, score: 2 },
            3: { label: { ko: '필요한 것만 사려고 노력', en: 'Try to buy only necessities', zh: '尽量只买必需品' }, score: 3 },
            4: { label: { ko: '일부는 저축함', en: 'Save some of it', zh: '储蓄一部分' }, score: 4 },
            5: { label: { ko: '계획을 세워 쓰고 저축함', en: 'Plan spending and save', zh: '计划支出并储蓄' }, score: 5 }
        }
    },
    tm_7: {
        id: 'tm_7',
        category: 'self',
        text: {
            ko: '자신의 장단점을 얼마나 알고 있나요?',
            en: 'How well do you know your strengths and weaknesses?',
            zh: '你对自己的优缺点了解多少？'
        },
        options: {
            1: { label: { ko: '전혀 모름', en: "Don't know at all", zh: '完全不知道' }, score: 1 },
            2: { label: { ko: '잘 모름', en: "Don't know well", zh: '不太了解' }, score: 2 },
            3: { label: { ko: '어느 정도 알고 있음', en: 'Know somewhat', zh: '有一定了解' }, score: 3 },
            4: { label: { ko: '잘 알고 있음', en: 'Know well', zh: '很了解' }, score: 4 },
            5: { label: { ko: '명확히 알고 개선 중', en: 'Know clearly and improving', zh: '清楚了解并在改进' }, score: 5 }
        }
    },
    tm_8: {
        id: 'tm_8',
        category: 'relationship',
        text: {
            ko: '부모님과 대화를 얼마나 자주 하나요?',
            en: 'How often do you talk with your parents?',
            zh: '你多久和父母交谈一次？'
        },
        options: {
            1: { label: { ko: '거의 안 함', en: 'Rarely', zh: '很少' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Sometimes', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '자주', en: 'Often', zh: '经常' }, score: 4 },
            5: { label: { ko: '매일 깊은 대화', en: 'Deep talks daily', zh: '每天深入交谈' }, score: 5 }
        }
    },
    tm_9: {
        id: 'tm_9',
        category: 'emotion',
        text: {
            ko: '실수를 했을 때 어떻게 반응하나요?',
            en: 'How do you react when you make a mistake?',
            zh: '犯错时你会如何反应？'
        },
        options: {
            1: { label: { ko: '숨기거나 거짓말함', en: 'Hide it or lie', zh: '隐瞒或撒谎' }, score: 1 },
            2: { label: { ko: '변명을 함', en: 'Make excuses', zh: '找借口' }, score: 2 },
            3: { label: { ko: '인정은 하지만 속상해함', en: 'Admit but feel upset', zh: '承认但很难过' }, score: 3 },
            4: { label: { ko: '인정하고 사과함', en: 'Admit and apologize', zh: '承认并道歉' }, score: 4 },
            5: { label: { ko: '인정하고 개선 방법을 찾음', en: 'Admit and find ways to improve', zh: '承认并寻找改进方法' }, score: 5 }
        }
    },
    tm_10: {
        id: 'tm_10',
        category: 'self',
        text: {
            ko: '새로운 것을 배우는 것에 대해 어떻게 생각하나요?',
            en: 'How do you feel about learning new things?',
            zh: '你对学习新事物有什么看法？'
        },
        options: {
            1: { label: { ko: '귀찮고 싫음', en: 'Annoying and dislike it', zh: '麻烦且不喜欢' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '관심 있으면 함', en: 'Do it if interested', zh: '感兴趣就做' }, score: 3 },
            4: { label: { ko: '적극적으로 배움', en: 'Actively learn', zh: '积极学习' }, score: 4 },
            5: { label: { ko: '항상 새로운 것을 찾아 배움', en: 'Always seek and learn new things', zh: '总是寻找并学习新事物' }, score: 5 }
        }
    }
};

// ============================================
// 10대 여성 (Teen Female)
// ============================================
export const QUESTIONS_TEEN_FEMALE = {
    tf_1: {
        id: 'tf_1',
        category: 'emotion',
        text: {
            ko: '친구가 나를 오해했을 때 어떻게 하나요?',
            en: 'What do you do when a friend misunderstands you?',
            zh: '朋友误解你时你会怎么做？'
        },
        options: {
            1: { label: { ko: '화내고 관계를 끊음', en: 'Get angry and cut off', zh: '生气并断绝关系' }, score: 1 },
            2: { label: { ko: 'SNS에 돌려 말함', en: 'Post indirectly on SNS', zh: '在社交媒体上间接表达' }, score: 2 },
            3: { label: { ko: '속상하지만 참음', en: 'Feel hurt but endure', zh: '难过但忍耐' }, score: 3 },
            4: { label: { ko: '시간을 두고 설명함', en: 'Explain after some time', zh: '过段时间后解释' }, score: 4 },
            5: { label: { ko: '바로 대화로 풀어냄', en: 'Resolve through immediate talk', zh: '立即通过对话解决' }, score: 5 }
        }
    },
    tf_2: {
        id: 'tf_2',
        category: 'responsibility',
        text: {
            ko: '시험 준비를 어떻게 하나요?',
            en: 'How do you prepare for exams?',
            zh: '你如何准备考试？'
        },
        options: {
            1: { label: { ko: '거의 안 함', en: 'Barely study', zh: '几乎不学习' }, score: 1 },
            2: { label: { ko: '시험 전날 벼락치기', en: 'Cram the night before', zh: '考前一晚临时抱佛脚' }, score: 2 },
            3: { label: { ko: '며칠 전부터 준비', en: 'Start a few days before', zh: '提前几天准备' }, score: 3 },
            4: { label: { ko: '일주일 전부터 계획적으로', en: 'Plan from a week before', zh: '提前一周计划' }, score: 4 },
            5: { label: { ko: '평소에 꾸준히 공부', en: 'Study consistently', zh: '平时持续学习' }, score: 5 }
        }
    },
    tf_3: {
        id: 'tf_3',
        category: 'relationship',
        text: {
            ko: '친구가 힘들어할 때 어떻게 하나요?',
            en: 'What do you do when a friend is struggling?',
            zh: '朋友遇到困难时你会怎么做？'
        },
        options: {
            1: { label: { ko: '모른 척함', en: 'Pretend not to notice', zh: '假装不知道' }, score: 1 },
            2: { label: { ko: '다른 친구에게 말함', en: 'Tell other friends', zh: '告诉其他朋友' }, score: 2 },
            3: { label: { ko: '괜찮냐고 물어봄', en: 'Ask if they are okay', zh: '问是否还好' }, score: 3 },
            4: { label: { ko: '이야기를 들어줌', en: 'Listen to them', zh: '倾听他们' }, score: 4 },
            5: { label: { ko: '적극적으로 도와줌', en: 'Actively help', zh: '积极帮助' }, score: 5 }
        }
    },
    tf_4: {
        id: 'tf_4',
        category: 'emotion',
        text: {
            ko: '기분이 안 좋을 때 주로 어떻게 하나요?',
            en: 'What do you usually do when you feel down?',
            zh: '心情不好时你通常会做什么？'
        },
        options: {
            1: { label: { ko: '다른 사람에게 짜증냄', en: 'Take it out on others', zh: '对别人发脾气' }, score: 1 },
            2: { label: { ko: 'SNS에 올림', en: 'Post on SNS', zh: '发到社交媒体' }, score: 2 },
            3: { label: { ko: '혼자 있음', en: 'Be alone', zh: '独处' }, score: 3 },
            4: { label: { ko: '친구와 이야기함', en: 'Talk with friends', zh: '和朋友聊天' }, score: 4 },
            5: { label: { ko: '긍정적인 활동을 함', en: 'Do positive activities', zh: '做积极的活动' }, score: 5 }
        }
    },
    tf_5: {
        id: 'tf_5',
        category: 'values',
        text: {
            ko: '미래에 가장 중요하게 생각하는 것은?',
            en: 'What do you value most for your future?',
            zh: '你认为未来最重要的是什么？'
        },
        options: {
            1: { label: { ko: '외모와 인기', en: 'Appearance and popularity', zh: '外貌和人气' }, score: 1 },
            2: { label: { ko: '물질적 풍요', en: 'Material wealth', zh: '物质财富' }, score: 2 },
            3: { label: { ko: '좋은 배우자', en: 'Good spouse', zh: '好的配偶' }, score: 3 },
            4: { label: { ko: '자아실현', en: 'Self-actualization', zh: '自我实现' }, score: 4 },
            5: { label: { ko: '의미 있는 삶', en: 'Meaningful life', zh: '有意义的生活' }, score: 5 }
        }
    },
    tf_6: {
        id: 'tf_6',
        category: 'responsibility',
        text: {
            ko: '약속 시간을 지키나요?',
            en: 'Do you keep your appointments on time?',
            zh: '你会准时赴约吗？'
        },
        options: {
            1: { label: { ko: '자주 늦거나 안 감', en: 'Often late or no-show', zh: '经常迟到或不去' }, score: 1 },
            2: { label: { ko: '가끔 늦음', en: 'Sometimes late', zh: '有时迟到' }, score: 2 },
            3: { label: { ko: '대부분 지킴', en: 'Usually on time', zh: '通常准时' }, score: 3 },
            4: { label: { ko: '항상 지킴', en: 'Always on time', zh: '总是准时' }, score: 4 },
            5: { label: { ko: '미리 도착함', en: 'Arrive early', zh: '提前到达' }, score: 5 }
        }
    },
    tf_7: {
        id: 'tf_7',
        category: 'self',
        text: {
            ko: '자신에 대해 얼마나 만족하나요?',
            en: 'How satisfied are you with yourself?',
            zh: '你对自己有多满意？'
        },
        options: {
            1: { label: { ko: '매우 불만족', en: 'Very dissatisfied', zh: '非常不满意' }, score: 1 },
            2: { label: { ko: '불만족', en: 'Dissatisfied', zh: '不满意' }, score: 2 },
            3: { label: { ko: '보통', en: 'Neutral', zh: '一般' }, score: 3 },
            4: { label: { ko: '만족', en: 'Satisfied', zh: '满意' }, score: 4 },
            5: { label: { ko: '매우 만족', en: 'Very satisfied', zh: '非常满意' }, score: 5 }
        }
    },
    tf_8: {
        id: 'tf_8',
        category: 'relationship',
        text: {
            ko: 'SNS에서 다른 사람과 비교하나요?',
            en: 'Do you compare yourself with others on SNS?',
            zh: '你会在社交媒体上和别人比较吗？'
        },
        options: {
            1: { label: { ko: '항상 비교하고 우울해짐', en: 'Always compare and feel depressed', zh: '总是比较并感到沮丧' }, score: 1 },
            2: { label: { ko: '자주 비교함', en: 'Often compare', zh: '经常比较' }, score: 2 },
            3: { label: { ko: '가끔 비교함', en: 'Sometimes compare', zh: '有时比较' }, score: 3 },
            4: { label: { ko: '거의 안 함', en: 'Rarely compare', zh: '很少比较' }, score: 4 },
            5: { label: { ko: '전혀 안 함', en: 'Never compare', zh: '从不比较' }, score: 5 }
        }
    },
    tf_9: {
        id: 'tf_9',
        category: 'emotion',
        text: {
            ko: '비판을 받았을 때 어떻게 반응하나요?',
            en: 'How do you react when criticized?',
            zh: '受到批评时你会如何反应？'
        },
        options: {
            1: { label: { ko: '화내고 반박함', en: 'Get angry and argue back', zh: '生气并反驳' }, score: 1 },
            2: { label: { ko: '무시함', en: 'Ignore it', zh: '忽视' }, score: 2 },
            3: { label: { ko: '속상하지만 참음', en: 'Feel hurt but endure', zh: '难过但忍耐' }, score: 3 },
            4: { label: { ko: '생각해보고 받아들임', en: 'Think about it and accept', zh: '思考并接受' }, score: 4 },
            5: { label: { ko: '감사하고 개선함', en: 'Thank and improve', zh: '感谢并改进' }, score: 5 }
        }
    },
    tf_10: {
        id: 'tf_10',
        category: 'self',
        text: {
            ko: '자신의 감정을 얼마나 잘 표현하나요?',
            en: 'How well do you express your emotions?',
            zh: '你能多好地表达自己的情绪？'
        },
        options: {
            1: { label: { ko: '전혀 못함', en: 'Not at all', zh: '完全不能' }, score: 1 },
            2: { label: { ko: '잘 못함', en: 'Not well', zh: '不太好' }, score: 2 },
            3: { label: { ko: '보통', en: 'Moderately', zh: '一般' }, score: 3 },
            4: { label: { ko: '잘함', en: 'Well', zh: '很好' }, score: 4 },
            5: { label: { ko: '매우 잘함', en: 'Very well', zh: '非常好' }, score: 5 }
        }
    }
};

// ============================================
// 20대 남성 (Twenties Male)
// ============================================
export const QUESTIONS_20_MALE = {
    twm_1: {
        id: 'twm_1',
        category: 'emotion',
        text: {
            ko: '직장이나 학교에서 스트레스를 받을 때 어떻게 대처하나요?',
            en: 'How do you cope with stress at work or school?',
            zh: '在工作或学校感到压力时你如何应对？'
        },
        options: {
            1: { label: { ko: '술이나 게임으로 풀음', en: 'Drink or play games', zh: '喝酒或玩游戏' }, score: 1 },
            2: { label: { ko: '그냥 참음', en: 'Just endure', zh: '只是忍耐' }, score: 2 },
            3: { label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' }, score: 3 },
            4: { label: { ko: '운동이나 취미활동', en: 'Exercise or hobbies', zh: '运动或爱好' }, score: 4 },
            5: { label: { ko: '원인 분석 후 해결책 모색', en: 'Analyze and find solutions', zh: '分析并寻找解决方案' }, score: 5 }
        }
    },
    twm_2: {
        id: 'twm_2',
        category: 'responsibility',
        text: {
            ko: '한 달 생활비를 어떻게 관리하나요?',
            en: 'How do you manage your monthly expenses?',
            zh: '你如何管理每月开支？'
        },
        options: {
            1: { label: { ko: '계획 없이 쓰다가 빚냄', en: 'Spend carelessly and borrow', zh: '随意花费并借债' }, score: 1 },
            2: { label: { ko: '쓰다가 모자라면 빌림', en: 'Borrow when running out', zh: '不够时借钱' }, score: 2 },
            3: { label: { ko: '대충 계획하고 씀', en: 'Roughly plan', zh: '大致计划' }, score: 3 },
            4: { label: { ko: '예산을 세워 관리', en: 'Budget and manage', zh: '预算并管理' }, score: 4 },
            5: { label: { ko: '철저히 관리하고 저축', en: 'Strictly manage and save', zh: '严格管理并储蓄' }, score: 5 }
        }
    },
    twm_3: {
        id: 'twm_3',
        category: 'relationship',
        text: {
            ko: '연인과 갈등이 생겼을 때 어떻게 하나요?',
            en: 'What do you do when you have a conflict with your partner?',
            zh: '和伴侣发生冲突时你会怎么做？'
        },
        options: {
            1: { label: { ko: '연락을 끊음', en: 'Cut off contact', zh: '断绝联系' }, score: 1 },
            2: { label: { ko: '상대가 먼저 연락할 때까지 기다림', en: 'Wait for them to contact first', zh: '等对方先联系' }, score: 2 },
            3: { label: { ko: '시간이 지나면 괜찮아질 거라 생각', en: 'Think time will heal', zh: '认为时间会解决' }, score: 3 },
            4: { label: { ko: '대화로 풀려고 노력', en: 'Try to resolve through talk', zh: '尝试通过对话解决' }, score: 4 },
            5: { label: { ko: '내 잘못을 인정하고 진심으로 대화', en: 'Admit fault and talk sincerely', zh: '承认错误并真诚对话' }, score: 5 }
        }
    },
    twm_4: {
        id: 'twm_4',
        category: 'values',
        text: {
            ko: '직업을 선택할 때 가장 중요한 기준은?',
            en: 'What is the most important criterion when choosing a career?',
            zh: '选择职业时最重要的标准是什么？'
        },
        options: {
            1: { label: { ko: '일단 취업부터', en: 'Just get a job first', zh: '先就业再说' }, score: 1 },
            2: { label: { ko: '연봉', en: 'Salary', zh: '薪水' }, score: 2 },
            3: { label: { ko: '워라밸', en: 'Work-life balance', zh: '工作生活平衡' }, score: 3 },
            4: { label: { ko: '적성과 흥미', en: 'Aptitude and interest', zh: '适性和兴趣' }, score: 4 },
            5: { label: { ko: '사회적 의미와 성장 가능성', en: 'Social meaning and growth potential', zh: '社会意义和成长潜力' }, score: 5 }
        }
    },
    twm_5: {
        id: 'twm_5',
        category: 'emotion',
        text: {
            ko: '실패를 경험했을 때 어떻게 반응하나요?',
            en: 'How do you react when you experience failure?',
            zh: '经历失败时你会如何反应？'
        },
        options: {
            1: { label: { ko: '포기하고 다른 걸 찾음', en: 'Give up and find something else', zh: '放弃并寻找其他' }, score: 1 },
            2: { label: { ko: '운이 없었다고 생각', en: 'Think it was bad luck', zh: '认为运气不好' }, score: 2 },
            3: { label: { ko: '잠시 좌절하지만 다시 시도', en: 'Feel frustrated but try again', zh: '暂时沮丧但再次尝试' }, score: 3 },
            4: { label: { ko: '원인을 분석하고 개선', en: 'Analyze cause and improve', zh: '分析原因并改进' }, score: 4 },
            5: { label: { ko: '배움의 기회로 삼고 성장', en: 'See as learning opportunity and grow', zh: '视为学习机会并成长' }, score: 5 }
        }
    },
    twm_6: {
        id: 'twm_6',
        category: 'responsibility',
        text: {
            ko: '장기적인 목표(5년 이상)가 있나요?',
            en: 'Do you have long-term goals (5+ years)?',
            zh: '你有长期目标（5年以上）吗？'
        },
        options: {
            1: { label: { ko: '전혀 없음', en: 'None at all', zh: '完全没有' }, score: 1 },
            2: { label: { ko: '막연하게만 있음', en: 'Only vaguely', zh: '只是模糊地有' }, score: 2 },
            3: { label: { ko: '있지만 구체적이지 않음', en: 'Have but not specific', zh: '有但不具体' }, score: 3 },
            4: { label: { ko: '구체적인 목표가 있음', en: 'Have specific goals', zh: '有具体目标' }, score: 4 },
            5: { label: { ko: '구체적 목표와 실행 계획이 있음', en: 'Have specific goals and action plans', zh: '有具体目标和行动计划' }, score: 5 }
        }
    },
    twm_7: {
        id: 'twm_7',
        category: 'self',
        text: {
            ko: '자기계발에 시간과 돈을 투자하나요?',
            en: 'Do you invest time and money in self-development?',
            zh: '你会在自我发展上投资时间和金钱吗？'
        },
        options: {
            1: { label: { ko: '전혀 안 함', en: 'Not at all', zh: '完全不' }, score: 1 },
            2: { label: { ko: '필요할 때만', en: 'Only when necessary', zh: '只在必要时' }, score: 2 },
            3: { label: { ko: '가끔', en: 'Occasionally', zh: '偶尔' }, score: 3 },
            4: { label: { ko: '정기적으로', en: 'Regularly', zh: '定期' }, score: 4 },
            5: { label: { ko: '최우선 순위로 투자', en: 'Invest as top priority', zh: '作为首要优先投资' }, score: 5 }
        }
    },
    twm_8: {
        id: 'twm_8',
        category: 'relationship',
        text: {
            ko: '부모님과의 관계는 어떤가요?',
            en: 'How is your relationship with your parents?',
            zh: '你和父母的关系如何？'
        },
        options: {
            1: { label: { ko: '거의 연락 안 함', en: 'Rarely contact', zh: '很少联系' }, score: 1 },
            2: { label: { ko: '필요할 때만 연락', en: 'Contact only when needed', zh: '只在需要时联系' }, score: 2 },
            3: { label: { ko: '가끔 연락', en: 'Contact occasionally', zh: '偶尔联系' }, score: 3 },
            4: { label: { ko: '자주 연락하고 방문', en: 'Contact and visit often', zh: '经常联系和拜访' }, score: 4 },
            5: { label: { ko: '깊은 대화를 나누는 친밀한 관계', en: 'Close relationship with deep talks', zh: '有深入对话的亲密关系' }, score: 5 }
        }
    },
    twm_9: {
        id: 'twm_9',
        category: 'values',
        text: {
            ko: '결혼에 대해 어떻게 생각하나요?',
            en: 'What do you think about marriage?',
            zh: '你对婚姻有什么看法？'
        },
        options: {
            1: { label: { ko: '전혀 생각 없음', en: 'No thoughts at all', zh: '完全没想过' }, score: 1 },
            2: { label: { ko: '하고 싶지 않음', en: "Don't want to", zh: '不想' }, score: 2 },
            3: { label: { ko: '언젠가는 할 것 같음', en: 'Might do someday', zh: '总有一天会' }, score: 3 },
            4: { label: { ko: '준비하고 있음', en: 'Preparing for it', zh: '正在准备' }, score: 4 },
            5: { label: { ko: '구체적인 계획이 있음', en: 'Have specific plans', zh: '有具体计划' }, score: 5 }
        }
    },
    twm_10: {
        id: 'twm_10',
        category: 'self',
        text: {
            ko: '자신의 강점과 약점을 파악하고 있나요?',
            en: 'Do you understand your strengths and weaknesses?',
            zh: '你了解自己的优势和劣势吗？'
        },
        options: {
            1: { label: { ko: '전혀 모름', en: "Don't know at all", zh: '完全不知道' }, score: 1 },
            2: { label: { ko: '잘 모름', en: "Don't know well", zh: '不太了解' }, score: 2 },
            3: { label: { ko: '어느 정도 알고 있음', en: 'Know somewhat', zh: '有一定了解' }, score: 3 },
            4: { label: { ko: '잘 알고 활용 중', en: 'Know well and utilizing', zh: '很了解并在利用' }, score: 4 },
            5: { label: { ko: '명확히 파악하고 지속적으로 개선 중', en: 'Clearly understand and continuously improving', zh: '清楚了解并持续改进' }, score: 5 }
        }
    }
};

// 20대 여성, 30대 남성/여성, 40대 남성/여성, 50대 남성/여성도 같은 형식으로 계속...
// 파일이 너무 길어지므로 나머지는 다음 파일에 작성하겠습니다.
