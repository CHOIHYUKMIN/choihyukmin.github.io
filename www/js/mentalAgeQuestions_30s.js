// ==================== 30대 (사회 정착기) ====================
export const THIRTIES_QUESTIONS = {
    daily: [
        {
            id: 'thirties_daily_1',
            category: 'emotion',
            text: { ko: '건강검진 결과를 받으면?', en: 'When receiving health checkup results?', zh: '收到体检结果时？' },
            options: [
                { score: 1, label: { ko: '무시하고 생활', en: 'Ignore and live', zh: '忽视继续生活' } },
                { score: 2, label: { ko: '조금 걱정됨', en: 'A bit worried', zh: '有点担心' } },
                { score: 3, label: { ko: '운동/식단 시작', en: 'Start exercise/diet', zh: '开始运动/饮食' } },
                { score: 4, label: { ko: '건강기능식품 구매', en: 'Buy health supplements', zh: '购买保健品' } },
                { score: 5, label: { ko: '삶을 되돌아보고 정돈', en: 'Reflect and organize life', zh: '反思整理生活' } }
            ]
        },
        {
            id: 'thirties_daily_2',
            category: 'values',
            text: { ko: '쇼핑할 때 기준은?', en: 'Shopping criteria?', zh: '购物标准？' },
            options: [
                { score: 1, label: { ko: '디자인이 예뻐야 함', en: 'Must be pretty design', zh: '设计必须漂亮' } },
                { score: 2, label: { ko: '유행하는 브랜드', en: 'Trendy brand', zh: '流行品牌' } },
                { score: 3, label: { ko: '가성비와 후기', en: 'Value and reviews', zh: '性价比和评价' } },
                { score: 4, label: { ko: '오래 쓸 수 있는 질', en: 'Quality for long use', zh: '能长期使用的质量' } },
                { score: 5, label: { ko: '필요한 것만 딱 삼', en: 'Only buy necessities', zh: '只买必需品' } }
            ]
        },
        {
            id: 'thirties_daily_3',
            category: 'responsibility',
            text: { ko: '재테크에 대한 관심?', en: 'Interest in financial management?', zh: '对理财的兴趣？' },
            options: [
                { score: 1, label: { ko: '일확천금 꿈꿈', en: 'Dream of getting rich quick', zh: '梦想一夜暴富' } },
                { score: 2, label: { ko: '남들 하는 거 따라 함', en: 'Follow what others do', zh: '跟着别人做' } },
                { score: 3, label: { ko: '주식/부동산 공부', en: 'Study stocks/real estate', zh: '学习股票/房地产' } },
                { score: 4, label: { ko: '안정적인 저축', en: 'Stable savings', zh: '稳定储蓄' } },
                { score: 5, label: { ko: '노후 포트폴리오 구성', en: 'Build retirement portfolio', zh: '构建退休投资组合' } }
            ]
        },
        {
            id: 'thirties_daily_4',
            category: 'values',
            text: { ko: '주말의 의미?', en: 'Meaning of weekend?', zh: '周末的意义？' },
            options: [
                { score: 1, label: { ko: '밀린 유흥/음주', en: 'Catch up on entertainment/drinking', zh: '补偿娱乐/喝酒' } },
                { score: 2, label: { ko: '가족과 시간', en: 'Time with family', zh: '和家人在一起' } },
                { score: 3, label: { ko: '취미 생활', en: 'Hobby activities', zh: '爱好活动' } },
                { score: 4, label: { ko: '완벽한 휴식/잠', en: 'Perfect rest/sleep', zh: '完美休息/睡觉' } },
                { score: 5, label: { ko: '자기계발/부업', en: 'Self-development/side job', zh: '自我提升/副业' } }
            ]
        },
        {
            id: 'thirties_daily_5',
            category: 'relationship',
            text: { ko: '친구 결혼식 축의금?', en: 'Friend\'s wedding gift money?', zh: '朋友婚礼礼金？' },
            options: [
                { score: 1, label: { ko: '친한 만큼 과하게', en: 'Excessively based on closeness', zh: '根据亲密度过多' } },
                { score: 2, label: { ko: '평균만큼', en: 'Average amount', zh: '平均金额' } },
                { score: 3, label: { ko: '받은 만큼', en: 'As much as received', zh: '收到多少给多少' } },
                { score: 4, label: { ko: '참석 여부에 따라', en: 'Based on attendance', zh: '根据是否参加' } },
                { score: 5, label: { ko: '내 주머니 사정 고려', en: 'Consider my budget', zh: '考虑我的预算' } }
            ]
        },
        {
            id: 'thirties_daily_6',
            category: 'self',
            text: { ko: '체력이 예전 같지 않다면?', en: 'If stamina isn\'t like before?', zh: '体力不如从前？' },
            options: [
                { score: 1, label: { ko: '영양제만 먹음', en: 'Only take supplements', zh: '只吃营养品' } },
                { score: 2, label: { ko: '홈트레이닝 시작', en: 'Start home training', zh: '开始家庭锻炼' } },
                { score: 3, label: { ko: 'PT/필라테스 등록', en: 'Register PT/Pilates', zh: '注册私教/普拉提' } },
                { score: 4, label: { ko: '수면 시간 늘림', en: 'Increase sleep time', zh: '增加睡眠时间' } },
                { score: 5, label: { ko: '식단과 절주 실천', en: 'Practice diet and moderation', zh: '实践饮食和节制' } }
            ]
        },
        {
            id: 'thirties_daily_7',
            category: 'self',
            text: { ko: '집에 있을 때 모습?', en: 'How are you at home?', zh: '在家时的样子？' },
            options: [
                { score: 1, label: { ko: '누워서 폰만 봄', en: 'Lie down and only look at phone', zh: '躺着只看手机' } },
                { score: 2, label: { ko: '맥주 한 잔', en: 'A glass of beer', zh: '一杯啤酒' } },
                { score: 3, label: { ko: '집안일/청소', en: 'Housework/cleaning', zh: '家务/打扫' } },
                { score: 4, label: { ko: '책 보거나 공부', en: 'Read or study', zh: '看书或学习' } },
                { score: 5, label: { ko: '명상/자기 성찰', en: 'Meditation/self-reflection', zh: '冥想/自我反思' } }
            ]
        },
        {
            id: 'thirties_daily_8',
            category: 'values',
            text: { ko: '나에게 자동차란?', en: 'What is a car to me?', zh: '汽车对我来说？' },
            options: [
                { score: 1, label: { ko: '부의 상징/허세', en: 'Symbol of wealth/show-off', zh: '财富象征/炫耀' } },
                { score: 2, label: { ko: '편리한 이동 수단', en: 'Convenient transportation', zh: '方便的交通工具' } },
                { score: 3, label: { ko: '내 공간/안식처', en: 'My space/sanctuary', zh: '我的空间/避风港' } },
                { score: 4, label: { ko: '안전이 제일', en: 'Safety first', zh: '安全第一' } },
                { score: 5, label: { ko: '단순 소모품', en: 'Just consumable', zh: '只是消耗品' } }
            ]
        },
        {
            id: 'thirties_daily_9',
            category: 'relationship',
            text: { ko: '부모님과의 관계?', en: 'Relationship with parents?', zh: '和父母的关系？' },
            options: [
                { score: 1, label: { ko: '아직 용돈 받음', en: 'Still receive allowance', zh: '还在拿零花钱' } },
                { score: 2, label: { ko: '자주 투덜댐', en: 'Often complain', zh: '经常抱怨' } },
                { score: 3, label: { ko: '안부 자주 전함', en: 'Check in often', zh: '经常问候' } },
                { score: 4, label: { ko: '경제적 도움 드림', en: 'Provide financial help', zh: '提供经济帮助' } },
                { score: 5, label: { ko: '정신적 지주로 모심', en: 'Serve as spiritual pillar', zh: '作为精神支柱侍奉' } }
            ]
        },
        {
            id: 'thirties_daily_10',
            category: 'values',
            text: { ko: '지금 가장 큰 고민?', en: 'Biggest concern now?', zh: '现在最大的烦恼？' },
            options: [
                { score: 1, label: { ko: '연애/결혼', en: 'Dating/Marriage', zh: '恋爱/婚姻' } },
                { score: 2, label: { ko: '이직/승진', en: 'Job change/Promotion', zh: '换工作/晋升' } },
                { score: 3, label: { ko: '자산 형성', en: 'Asset building', zh: '资产形成' } },
                { score: 4, label: { ko: '건강', en: 'Health', zh: '健康' } },
                { score: 5, label: { ko: '인생의 방향성', en: 'Life direction', zh: '人生方向' } }
            ]
        }
    ],

    work: [
        {
            id: 'thirties_work_1',
            category: 'relationship',
            text: { ko: '후배가 들어왔을 때?', en: 'When junior joins?', zh: '后辈进来时？' },
            options: [
                { score: 1, label: { ko: '친구처럼 편하게', en: 'Comfortably like friend', zh: '像朋友一样轻松' } },
                { score: 2, label: { ko: '업무만 엄격히', en: 'Strict only on work', zh: '只在工作上严格' } },
                { score: 3, label: { ko: '친절한 멘토', en: 'Kind mentor', zh: '亲切的导师' } },
                { score: 4, label: { ko: '적당히 거리 유지', en: 'Keep moderate distance', zh: '保持适当距离' } },
                { score: 5, label: { ko: '후배의 성장을 지원', en: 'Support junior\'s growth', zh: '支持后辈成长' } }
            ]
        },
        {
            id: 'thirties_work_2',
            category: 'emotion',
            text: { ko: '야근이 잦아진다면?', en: 'If overtime becomes frequent?', zh: '加班变频繁？' },
            options: [
                { score: 1, label: { ko: '당장 이직 준비', en: 'Prepare job change immediately', zh: '立即准备换工作' } },
                { score: 2, label: { ko: '성과급 바라고 참음', en: 'Endure hoping for bonus', zh: '忍耐期待奖金' } },
                { score: 3, label: { ko: '효율적 시간 관리', en: 'Efficient time management', zh: '高效时间管理' } },
                { score: 4, label: { ko: '상사에게 건의', en: 'Suggest to boss', zh: '向上司建议' } },
                { score: 5, label: { ko: '회사의 성장을 위해 헌신', en: 'Dedicate for company growth', zh: '为公司成长奉献' } }
            ]
        },
        {
            id: 'thirties_work_3',
            category: 'relationship',
            text: { ko: '회의 시간에 나의 태도?', en: 'My attitude in meetings?', zh: '会议时的态度？' },
            options: [
                { score: 1, label: { ko: '적극적인 아이디어', en: 'Active ideas', zh: '积极的想法' } },
                { score: 2, label: { ko: '적절한 피드백', en: 'Appropriate feedback', zh: '适当的反馈' } },
                { score: 3, label: { ko: '듣고 정리하기', en: 'Listen and organize', zh: '听并整理' } },
                { score: 4, label: { ko: '결론만 말하기', en: 'Only speak conclusions', zh: '只说结论' } },
                { score: 5, label: { ko: '비판적 검토 및 조율', en: 'Critical review and coordination', zh: '批判性审查和协调' } }
            ]
        },
        {
            id: 'thirties_work_4',
            category: 'values',
            text: { ko: '직장 내 사내 정치?', en: 'Office politics?', zh: '职场政治？' },
            options: [
                { score: 1, label: { ko: '적극 참여', en: 'Actively participate', zh: '积极参与' } },
                { score: 2, label: { ko: '줄 잘 서기', en: 'Pick sides well', zh: '站好队' } },
                { score: 3, label: { ko: '필요악이라 생각', en: 'Think it\'s necessary evil', zh: '认为是必要之恶' } },
                { score: 4, label: { ko: '극혐하고 멀리함', en: 'Hate and avoid', zh: '极度厌恶并远离' } },
                { score: 5, label: { ko: '관심 끄고 일만 함', en: 'Ignore and just work', zh: '不关心只工作' } }
            ]
        },
        {
            id: 'thirties_work_5',
            category: 'responsibility',
            text: { ko: '퇴사하고 싶을 때?', en: 'When wanting to quit?', zh: '想辞职时？' },
            options: [
                { score: 1, label: { ko: '충동적으로 사표', en: 'Impulsively resign', zh: '冲动辞职' } },
                { score: 2, label: { ko: '이직처 찾고 퇴사', en: 'Find new job then quit', zh: '找到新工作再辞' } },
                { score: 3, label: { ko: '자금 모일 때까지', en: 'Until save enough', zh: '存够钱为止' } },
                { score: 4, label: { ko: '더 나은 비전 찾을 때', en: 'When find better vision', zh: '找到更好愿景时' } },
                { score: 5, label: { ko: '인생 2막 설계 후', en: 'After planning life act 2', zh: '规划人生第二幕后' } }
            ]
        },
        {
            id: 'thirties_work_6',
            category: 'self',
            text: { ko: '업무 전문성 강화?', en: 'Enhancing work expertise?', zh: '增强工作专业性？' },
            options: [
                { score: 1, label: { ko: '유튜브로 대충', en: 'Roughly via YouTube', zh: '通过YouTube粗略学' } },
                { score: 2, label: { ko: '관련 도서 정독', en: 'Read related books', zh: '精读相关书籍' } },
                { score: 3, label: { ko: '강의/학원 등록', en: 'Register courses/academy', zh: '注册课程/学院' } },
                { score: 4, label: { ko: '실전 경험 축적', en: 'Accumulate practical experience', zh: '积累实战经验' } },
                { score: 5, label: { ko: '대학원 등 심화 과정', en: 'Graduate school advanced course', zh: '研究生等深化课程' } }
            ]
        },
        {
            id: 'thirties_work_7',
            category: 'relationship',
            text: { ko: '상사와의 관계?', en: 'Relationship with boss?', zh: '和上司的关系？' },
            options: [
                { score: 1, label: { ko: '형/언니처럼 친함', en: 'Close like sibling', zh: '像兄姐一样亲近' } },
                { score: 2, label: { ko: '비즈니스적 파트너', en: 'Business partner', zh: '商业伙伴' } },
                { score: 3, label: { ko: '어려운 존재', en: 'Difficult existence', zh: '难相处的存在' } },
                { score: 4, label: { ko: '적당히 예의 지킴', en: 'Keep moderate courtesy', zh: '保持适度礼貌' } },
                { score: 5, label: { ko: '배울 점만 취함', en: 'Only take what to learn', zh: '只取学习之处' } }
            ]
        },
        {
            id: 'thirties_work_8',
            category: 'values',
            text: { ko: '워라밸에 대한 생각?', en: 'Thoughts on work-life balance?', zh: '对工作生活平衡的想法？' },
            options: [
                { score: 1, label: { ko: '무조건 워라밸', en: 'Absolutely work-life balance', zh: '绝对工作生活平衡' } },
                { score: 2, label: { ko: '일이 우선', en: 'Work first', zh: '工作优先' } },
                { score: 3, label: { ko: '적절한 균형', en: 'Appropriate balance', zh: '适当平衡' } },
                { score: 4, label: { ko: '돈 많이 주면 야근', en: 'Overtime if paid well', zh: '钱多就加班' } },
                { score: 5, label: { ko: '워라밸은 스스로 만드는 것', en: 'Work-life balance is self-made', zh: '工作生活平衡是自己创造的' } }
            ]
        },
        {
            id: 'thirties_work_9',
            category: 'relationship',
            text: { ko: '사내 동호회 활동?', en: 'Company club activities?', zh: '公司社团活动？' },
            options: [
                { score: 1, label: { ko: '인맥 위해 가입', en: 'Join for networking', zh: '为人脉加入' } },
                { score: 2, label: { ko: '재미있어서 가입', en: 'Join for fun', zh: '为了有趣加入' } },
                { score: 3, label: { ko: '안 함', en: 'Don\'t do', zh: '不参加' } },
                { score: 4, label: { ko: '필요할 때만 참여', en: 'Participate only when needed', zh: '只在需要时参加' } },
                { score: 5, label: { ko: '운영진으로 활동', en: 'Active as organizer', zh: '作为组织者活动' } }
            ]
        },
        {
            id: 'thirties_work_10',
            category: 'values',
            text: { ko: '성공적인 커리어란?', en: 'What is successful career?', zh: '什么是成功的职业？' },
            options: [
                { score: 1, label: { ko: '높은 연봉', en: 'High salary', zh: '高薪' } },
                { score: 2, label: { ko: '빠른 승진', en: 'Fast promotion', zh: '快速晋升' } },
                { score: 3, label: { ko: '사회적 인정', en: 'Social recognition', zh: '社会认可' } },
                { score: 4, label: { ko: '전문가로 성장', en: 'Grow as expert', zh: '成长为专家' } },
                { score: 5, label: { ko: '내 삶과 일의 조화', en: 'Harmony of my life and work', zh: '我的生活和工作的和谐' } }
            ]
        }
    ],

    romance: [
        {
            id: 'thirties_romance_1',
            category: 'relationship',
            text: { ko: '소개팅 시 보는 것?', en: 'What to look at in blind date?', zh: '相亲时看什么？' },
            options: [
                { score: 1, label: { ko: '얼굴/몸매', en: 'Face/Body', zh: '脸/身材' } },
                { score: 2, label: { ko: '성격/유머', en: 'Personality/Humor', zh: '性格/幽默' } },
                { score: 3, label: { ko: '직업/연봉', en: 'Job/Salary', zh: '职业/薪水' } },
                { score: 4, label: { ko: '가치관/종교', en: 'Values/Religion', zh: '价值观/宗教' } },
                { score: 5, label: { ko: '가정환경', en: 'Family background', zh: '家庭背景' } }
            ]
        },
        {
            id: 'thirties_romance_2',
            category: 'emotion',
            text: { ko: '연인과의 다툼 원인?', en: 'Cause of fights with partner?', zh: '和恋人吵架的原因？' },
            options: [
                { score: 1, label: { ko: '자존심 싸움', en: 'Pride fight', zh: '自尊心之争' } },
                { score: 2, label: { ko: '질투/집착', en: 'Jealousy/Obsession', zh: '嫉妒/执着' } },
                { score: 3, label: { ko: '가치관 차이', en: 'Value differences', zh: '价值观差异' } },
                { score: 4, label: { ko: '경제적 문제', en: 'Financial issues', zh: '经济问题' } },
                { score: 5, label: { ko: '서로에 대한 무관심', en: 'Indifference to each other', zh: '对彼此的冷漠' } }
            ]
        },
        {
            id: 'thirties_romance_3',
            category: 'values',
            text: { ko: '비혼주의에 대한 생각?', en: 'Thoughts on non-marriage?', zh: '对不婚主义的想法？' },
            options: [
                { score: 1, label: { ko: '적극 찬성', en: 'Strongly agree', zh: '强烈赞成' } },
                { score: 2, label: { ko: '이해함', en: 'Understand', zh: '理解' } },
                { score: 3, label: { ko: '생각해본 적 없음', en: 'Never thought about', zh: '从未想过' } },
                { score: 4, label: { ko: '결혼은 해야 함', en: 'Should marry', zh: '应该结婚' } },
                { score: 5, label: { ko: '전통적 가치 중시', en: 'Value traditional values', zh: '重视传统价值' } }
            ]
        },
        {
            id: 'thirties_romance_4',
            category: 'responsibility',
            text: { ko: '연애 중 경제력 공유?', en: 'Sharing finances while dating?', zh: '恋爱中分享经济？' },
            options: [
                { score: 1, label: { ko: '각자 관리', en: 'Manage separately', zh: '各自管理' } },
                { score: 2, label: { ko: '공동 데이트 통장', en: 'Joint date account', zh: '共同约会账户' } },
                { score: 3, label: { ko: '상황 따라 다름', en: 'Depends on situation', zh: '视情况而定' } },
                { score: 4, label: { ko: '서로 다 공개', en: 'Fully disclose to each other', zh: '互相完全公开' } },
                { score: 5, label: { ko: '결혼 전엔 비밀', en: 'Secret before marriage', zh: '婚前保密' } }
            ]
        },
        {
            id: 'thirties_romance_5',
            category: 'relationship',
            text: { ko: '권태기 극복법?', en: 'How to overcome relationship slump?', zh: '克服倦怠期的方法？' },
            options: [
                { score: 1, label: { ko: '새로운 사람 찾음', en: 'Find new person', zh: '找新人' } },
                { score: 2, label: { ko: '여행/이벤트', en: 'Travel/Events', zh: '旅行/活动' } },
                { score: 3, label: { ko: '진솔한 대화', en: 'Honest conversation', zh: '真诚对话' } },
                { score: 4, label: { ko: '함께하는 취미', en: 'Shared hobbies', zh: '共同爱好' } },
                { score: 5, label: { ko: '서로의 소중함 재확인', en: 'Reconfirm each other\'s value', zh: '重新确认彼此的珍贵' } }
            ]
        },
        {
            id: 'thirties_romance_6',
            category: 'relationship',
            text: { ko: '연인의 과거 연애?', en: 'Partner\'s past relationships?', zh: '恋人的过去恋爱？' },
            options: [
                { score: 1, label: { ko: '매우 궁금함', en: 'Very curious', zh: '非常好奇' } },
                { score: 2, label: { ko: '말해주면 들음', en: 'Listen if told', zh: '说了就听' } },
                { score: 3, label: { ko: '알고 싶지 않음', en: 'Don\'t want to know', zh: '不想知道' } },
                { score: 4, label: { ko: '전혀 관심 없음', en: 'Not interested at all', zh: '完全不感兴趣' } },
                { score: 5, label: { ko: '과거는 과거일 뿐', en: 'Past is just past', zh: '过去只是过去' } }
            ]
        },
        {
            id: 'thirties_romance_7',
            category: 'emotion',
            text: { ko: '결혼 준비 시 갈등?', en: 'Conflicts during wedding prep?', zh: '准备婚礼时的冲突？' },
            options: [
                { score: 1, label: { ko: '무조건 내 주장', en: 'Unconditionally my way', zh: '无条件我的主张' } },
                { score: 2, label: { ko: '상대에게 맞춤', en: 'Adapt to partner', zh: '适应对方' } },
                { score: 3, label: { ko: '부모님 의견 따름', en: 'Follow parents\' opinion', zh: '听从父母意见' } },
                { score: 4, label: { ko: '합리적 조율', en: 'Rational coordination', zh: '合理协调' } },
                { score: 5, label: { ko: '결혼 자체를 재고', en: 'Reconsider marriage itself', zh: '重新考虑婚姻本身' } }
            ]
        },
        {
            id: 'thirties_romance_8',
            category: 'values',
            text: { ko: '연애 스타일의 변화?', en: 'Change in dating style?', zh: '恋爱风格的变化？' },
            options: [
                { score: 1, label: { ko: '뜨거운 사랑', en: 'Hot love', zh: '热烈的爱' } },
                { score: 2, label: { ko: '친구 같은 사랑', en: 'Friend-like love', zh: '像朋友的爱' } },
                { score: 3, label: { ko: '안정적인 사랑', en: 'Stable love', zh: '稳定的爱' } },
                { score: 4, label: { ko: '의지하는 사랑', en: 'Dependent love', zh: '依赖的爱' } },
                { score: 5, label: { ko: '성장하는 사랑', en: 'Growing love', zh: '成长的爱' } }
            ]
        },
        {
            id: 'thirties_romance_9',
            category: 'relationship',
            text: { ko: '기념일에 대한 태도?', en: 'Attitude toward anniversaries?', zh: '对纪念日的态度？' },
            options: [
                { score: 1, label: { ko: '꼭 챙겨야 함', en: 'Must celebrate', zh: '必须庆祝' } },
                { score: 2, label: { ko: '소소하게 보냄', en: 'Celebrate modestly', zh: '简单庆祝' } },
                { score: 3, label: { ko: '현금/선물 위주', en: 'Focus on cash/gifts', zh: '以现金/礼物为主' } },
                { score: 4, label: { ko: '말 한마디면 됨', en: 'Just a word is enough', zh: '一句话就够' } },
                { score: 5, label: { ko: '의미 없음', en: 'Meaningless', zh: '没意义' } }
            ]
        },
        {
            id: 'thirties_romance_10',
            category: 'values',
            text: { ko: '사랑이란 무엇인가?', en: 'What is love?', zh: '什么是爱？' },
            options: [
                { score: 1, label: { ko: '설레는 감정', en: 'Exciting emotion', zh: '激动的情感' } },
                { score: 2, label: { ko: '서로 채워주는 것', en: 'Filling each other', zh: '互相填补' } },
                { score: 3, label: { ko: '책임과 헌신', en: 'Responsibility and dedication', zh: '责任和奉献' } },
                { score: 4, label: { ko: '함께 늙어가는 것', en: 'Growing old together', zh: '一起变老' } },
                { score: 5, label: { ko: '삶의 일부', en: 'Part of life', zh: '生活的一部分' } }
            ]
        }
    ]
};

export default THIRTIES_QUESTIONS;
