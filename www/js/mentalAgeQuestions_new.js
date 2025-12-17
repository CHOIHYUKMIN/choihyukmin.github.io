// ==================== 가중치 ====================
export const WEIGHTS = {
    emotion: 0.30,
    responsibility: 0.20,
    relationship: 0.20,
    values: 0.15,
    self: 0.15,
};

// ==================== 10대 (청소년기) ====================
export const TEEN_QUESTIONS = {
    daily: [
        {
            id: 'teen_daily_1',
            category: 'responsibility',
            text: {
                ko: '용돈이 생기면?',
                en: 'When you get pocket money?',
                zh: '有零花钱时？'
            },
            options: [
                { score: 1, label: { ko: '무조건 다 쓴다', en: 'Spend it all', zh: '全部花掉' } },
                { score: 2, label: { ko: '사고 싶은 걸 산다', en: 'Buy what I want', zh: '买想要的东西' } },
                { score: 3, label: { ko: '반은 쓰고 반은 모음', en: 'Spend half, save half', zh: '花一半存一半' } },
                { score: 4, label: { ko: '사고 싶은 걸 참음', en: 'Resist buying', zh: '忍住不买' } },
                { score: 5, label: { ko: '미래를 위해 투자', en: 'Invest for future', zh: '为未来投资' } }
            ]
        },
        {
            id: 'teen_daily_2',
            category: 'self',
            text: {
                ko: '자기 전 스마트폰으로?',
                en: 'Before bed, on smartphone?',
                zh: '睡前用手机？'
            },
            options: [
                { score: 1, label: { ko: '숏폼 영상 시청', en: 'Watch short videos', zh: '看短视频' } },
                { score: 2, label: { ko: '게임/카톡', en: 'Games/Chat', zh: '游戏/聊天' } },
                { score: 3, label: { ko: '웹서핑', en: 'Web surfing', zh: '上网' } },
                { score: 4, label: { ko: '내일 스케줄 확인', en: 'Check tomorrow schedule', zh: '查看明天日程' } },
                { score: 5, label: { ko: '명상/일기 쓰기', en: 'Meditation/Diary', zh: '冥想/写日记' } }
            ]
        },
        {
            id: 'teen_daily_3',
            category: 'responsibility',
            text: {
                ko: '방 청소 상태는?',
                en: 'Room cleaning status?',
                zh: '房间清洁状态？'
            },
            options: [
                { score: 1, label: { ko: '발 디딜 틈 없음', en: 'No space to step', zh: '没地方下脚' } },
                { score: 2, label: { ko: '정리하라고 혼나야 함', en: 'Need to be told', zh: '需要被催促' } },
                { score: 3, label: { ko: '적당히 생활감 있음', en: 'Moderately lived-in', zh: '适度生活感' } },
                { score: 4, label: { ko: '직접 정리함', en: 'Clean myself', zh: '自己整理' } },
                { score: 5, label: { ko: '항상 각 잡혀 있음', en: 'Always organized', zh: '总是整洁' } }
            ]
        },
        {
            id: 'teen_daily_4',
            category: 'relationship',
            text: {
                ko: '주말에 부모님이 외식하자면?',
                en: 'When parents suggest eating out on weekend?',
                zh: '周末父母提议外出就餐？'
            },
            options: [
                { score: 1, label: { ko: '메뉴가 내 위주여야 함', en: 'Menu must be my choice', zh: '菜单必须以我为主' } },
                { score: 2, label: { ko: '귀찮지만 따라감', en: 'Reluctantly follow', zh: '勉强跟着' } },
                { score: 3, label: { ko: '부모님이 가자는 곳 감', en: 'Go where they want', zh: '去父母想去的地方' } },
                { score: 4, label: { ko: '부모님 기분 맞춰드림', en: 'Match parents mood', zh: '配合父母心情' } },
                { score: 5, label: { ko: '내가 부모님 대접하고 싶음', en: 'Want to treat parents', zh: '想请父母' } }
            ]
        },
        {
            id: 'teen_daily_5',
            category: 'values',
            text: {
                ko: '편의점에서 간식 고를 때?',
                en: 'When choosing snacks at convenience store?',
                zh: '在便利店选零食时？'
            },
            options: [
                { score: 1, label: { ko: '무조건 신제품 도전', en: 'Always try new products', zh: '总是尝试新品' } },
                { score: 2, label: { ko: '포장지 예쁜 것', en: 'Pretty packaging', zh: '包装好看的' } },
                { score: 3, label: { ko: '맛있어 보이는 것', en: 'Looks delicious', zh: '看起来好吃的' } },
                { score: 4, label: { ko: '가성비 좋은 것', en: 'Good value', zh: '性价比高的' } },
                { score: 5, label: { ko: '성분/칼로리 확인', en: 'Check ingredients/calories', zh: '查看成分/卡路里' } }
            ]
        },
        {
            id: 'teen_daily_6',
            category: 'self',
            text: {
                ko: '가장 어른이 되었다고 느낄 때?',
                en: 'When do you feel most grown-up?',
                zh: '什么时候最觉得自己长大了？'
            },
            options: [
                { score: 1, label: { ko: '혼자 대중교통 탈 때', en: 'Taking public transport alone', zh: '独自乘坐公共交通' } },
                { score: 2, label: { ko: '통장 잔고 볼 때', en: 'Checking bank balance', zh: '查看银行余额' } },
                { score: 3, label: { ko: '동생 챙길 때', en: 'Taking care of siblings', zh: '照顾弟妹' } },
                { score: 4, label: { ko: '부모님 힘든 거 보일 때', en: 'Seeing parents struggle', zh: '看到父母辛苦' } },
                { score: 5, label: { ko: '인생 고민할 때', en: 'Contemplating life', zh: '思考人生' } }
            ]
        },
        {
            id: 'teen_daily_7',
            category: 'emotion',
            text: {
                ko: '스트레스 해소법은?',
                en: 'How do you relieve stress?',
                zh: '如何缓解压力？'
            },
            options: [
                { score: 1, label: { ko: '소리 지르기/게임', en: 'Screaming/Gaming', zh: '大喊/游戏' } },
                { score: 2, label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' } },
                { score: 3, label: { ko: '잠자기', en: 'Sleep', zh: '睡觉' } },
                { score: 4, label: { ko: '운동하기', en: 'Exercise', zh: '运动' } },
                { score: 5, label: { ko: '혼자 조용히 생각하기', en: 'Quiet reflection alone', zh: '独自安静思考' } }
            ]
        },
        {
            id: 'teen_daily_8',
            category: 'relationship',
            text: {
                ko: 'SNS 게시물 올릴 때?',
                en: 'When posting on SNS?',
                zh: '在社交媒体发帖时？'
            },
            options: [
                { score: 1, label: { ko: '좋아요 수에 집착함', en: 'Obsessed with likes', zh: '执着于点赞数' } },
                { score: 2, label: { ko: '자주 올림', en: 'Post frequently', zh: '经常发布' } },
                { score: 3, label: { ko: '가끔 기록용', en: 'Occasionally for records', zh: '偶尔记录' } },
                { score: 4, label: { ko: '남들이 하는 만큼만', en: 'As much as others', zh: '和别人一样多' } },
                { score: 5, label: { ko: '거의 안 함', en: 'Rarely post', zh: '几乎不发' } }
            ]
        },
        {
            id: 'teen_daily_9',
            category: 'self',
            text: {
                ko: '새로운 취미를 시작하면?',
                en: 'When starting a new hobby?',
                zh: '开始新爱好时？'
            },
            options: [
                { score: 1, label: { ko: '장비부터 다 삼', en: 'Buy all equipment first', zh: '先买齐装备' } },
                { score: 2, label: { ko: '금방 질림', en: 'Lose interest quickly', zh: '很快厌倦' } },
                { score: 3, label: { ko: '꾸준히 해봄', en: 'Try consistently', zh: '坚持尝试' } },
                { score: 4, label: { ko: '깊게 파고듦', en: 'Dive deep', zh: '深入研究' } },
                { score: 5, label: { ko: '남에게 가르칠 정도', en: 'Can teach others', zh: '能教别人' } }
            ]
        },
        {
            id: 'teen_daily_10',
            category: 'values',
            text: {
                ko: '나에게 공부란?',
                en: 'What is studying to you?',
                zh: '学习对你来说是？'
            },
            options: [
                { score: 1, label: { ko: '하기 싫은 고역', en: 'Unwanted hardship', zh: '不想做的苦差事' } },
                { score: 2, label: { ko: '엄마가 시켜서 함', en: 'Do it because mom says', zh: '妈妈让做的' } },
                { score: 3, label: { ko: '남들 하니까 함', en: 'Do it because others do', zh: '别人都在做' } },
                { score: 4, label: { ko: '미래를 위한 수단', en: 'Means for future', zh: '为未来的手段' } },
                { score: 5, label: { ko: '자아 성장의 과정', en: 'Process of self-growth', zh: '自我成长的过程' } }
            ]
        }
    ],

    school: [
        {
            id: 'teen_school_1',
            category: 'responsibility',
            text: {
                ko: '수업 시간 나의 모습은?',
                en: 'How are you during class?',
                zh: '上课时的你？'
            },
            options: [
                { score: 1, label: { ko: '대놓고 딴짓/잠', en: 'Openly distracted/sleeping', zh: '公然走神/睡觉' } },
                { score: 2, label: { ko: '낙서하며 듣는 척', en: 'Doodling, pretending to listen', zh: '涂鸦，假装听' } },
                { score: 3, label: { ko: '시키면 대답함', en: 'Answer when asked', zh: '被叫到就回答' } },
                { score: 4, label: { ko: '열심히 경청/필기', en: 'Actively listening/taking notes', zh: '认真听讲/记笔记' } },
                { score: 5, label: { ko: '질문을 통해 깊게 탐구', en: 'Deep inquiry through questions', zh: '通过提问深入探究' } }
            ]
        },
        {
            id: 'teen_school_2',
            category: 'emotion',
            text: {
                ko: '선생님이 화내실 때?',
                en: 'When teacher gets angry?',
                zh: '老师生气时？'
            },
            options: [
                { score: 1, label: { ko: '속으로 욕함', en: 'Curse internally', zh: '心里骂' } },
                { score: 2, label: { ko: '왜 나만 갖구래', en: 'Why only me', zh: '为什么只说我' } },
                { score: 3, label: { ko: '반성함', en: 'Reflect', zh: '反省' } },
                { score: 4, label: { ko: '선생님 입장 이해', en: 'Understand teacher', zh: '理解老师立场' } },
                { score: 5, label: { ko: '상황을 객관적으로 분석', en: 'Analyze objectively', zh: '客观分析情况' } }
            ]
        },
        {
            id: 'teen_school_3',
            category: 'relationship',
            text: {
                ko: '짝꿍이 숙제 보여달라면?',
                en: 'If desk mate asks to see homework?',
                zh: '同桌要看作业？'
            },
            options: [
                { score: 1, label: { ko: '흔쾌히 보여줌', en: 'Gladly show', zh: '欣然给看' } },
                { score: 2, label: { ko: '사탕 하나 받고 보여줌', en: 'Show for a candy', zh: '换颗糖给看' } },
                { score: 3, label: { ko: '거절하고 직접 하라 함', en: 'Refuse, tell to do it', zh: '拒绝，让自己做' } },
                { score: 4, label: { ko: '설명하며 도와줌', en: 'Help with explanation', zh: '解释着帮忙' } },
                { score: 5, label: { ko: '선생님께 말씀드림', en: 'Tell the teacher', zh: '告诉老师' } }
            ]
        },
        {
            id: 'teen_school_4',
            category: 'responsibility',
            text: {
                ko: '급식 줄 설 때?',
                en: 'When lining up for lunch?',
                zh: '排队打饭时？'
            },
            options: [
                { score: 1, label: { ko: '1등으로 뛰어감', en: 'Rush to be first', zh: '冲到第一' } },
                { score: 2, label: { ko: '친구랑 장난치며 대기', en: 'Play with friends while waiting', zh: '和朋友玩着等' } },
                { score: 3, label: { ko: '그냥 서 있음', en: 'Just stand', zh: '就站着' } },
                { score: 4, label: { ko: '뒷사람 배려함', en: 'Consider those behind', zh: '照顾后面的人' } },
                { score: 5, label: { ko: '조용히 질서 지킴', en: 'Quietly keep order', zh: '安静守秩序' } }
            ]
        },
        {
            id: 'teen_school_5',
            category: 'self',
            text: {
                ko: '발표 수업을 할 때?',
                en: 'During presentation class?',
                zh: '做演讲时？'
            },
            options: [
                { score: 1, label: { ko: '주목받아 즐거움', en: 'Enjoy attention', zh: '享受关注' } },
                { score: 2, label: { ko: '긴장되지만 해냄', en: 'Nervous but do it', zh: '紧张但完成' } },
                { score: 3, label: { ko: '평범하게 함', en: 'Do it normally', zh: '平常地做' } },
                { score: 4, label: { ko: '청중 반응 살피며 함', en: 'Watch audience reaction', zh: '观察听众反应' } },
                { score: 5, label: { ko: '전문가처럼 전달함', en: 'Present like expert', zh: '像专家一样传达' } }
            ]
        },
        {
            id: 'teen_school_6',
            category: 'self',
            text: {
                ko: '쉬는 시간에 주로 하는 일?',
                en: 'What do you do during break?',
                zh: '课间主要做什么？'
            },
            options: [
                { score: 1, label: { ko: '복도 뛰어다님', en: 'Run in hallway', zh: '在走廊跑' } },
                { score: 2, label: { ko: '친구와 수다', en: 'Chat with friends', zh: '和朋友聊天' } },
                { score: 3, label: { ko: '간식 먹기', en: 'Eat snacks', zh: '吃零食' } },
                { score: 4, label: { ko: '책 보거나 다음 수업 준비', en: 'Read or prepare next class', zh: '看书或准备下节课' } },
                { score: 5, label: { ko: '쪽잠/휴식', en: 'Nap/Rest', zh: '小睡/休息' } }
            ]
        },
        {
            id: 'teen_school_7',
            category: 'emotion',
            text: {
                ko: '시험 성적이 낮게 나오면?',
                en: 'When test scores are low?',
                zh: '考试成绩不好时？'
            },
            options: [
                { score: 1, label: { ko: '내일이면 잊음', en: 'Forget by tomorrow', zh: '明天就忘' } },
                { score: 2, label: { ko: '속상해함', en: 'Feel upset', zh: '难过' } },
                { score: 3, label: { ko: '다음엔 잘하자 다짐', en: 'Resolve to do better', zh: '下次要做好' } },
                { score: 4, label: { ko: '부족한 부분 복습', en: 'Review weak areas', zh: '复习不足部分' } },
                { score: 5, label: { ko: '성적보다 배움에 집중', en: 'Focus on learning over grades', zh: '专注学习而非成绩' } }
            ]
        },
        {
            id: 'teen_school_8',
            category: 'values',
            text: {
                ko: '싫어하는 과목 시간은?',
                en: 'During disliked subject class?',
                zh: '不喜欢的科目课上？'
            },
            options: [
                { score: 1, label: { ko: '대놓고 잔다', en: 'Openly sleep', zh: '公然睡觉' } },
                { score: 2, label: { ko: '멍 때린다', en: 'Zone out', zh: '发呆' } },
                { score: 3, label: { ko: '참고 듣는다', en: 'Endure and listen', zh: '忍着听' } },
                { score: 4, label: { ko: '억지로라도 이해하려 함', en: 'Try to understand anyway', zh: '强迫自己理解' } },
                { score: 5, label: { ko: '모든 학문은 연결됨을 느낌', en: 'Feel all subjects connect', zh: '感受所有学科的联系' } }
            ]
        },
        {
            id: 'teen_school_9',
            category: 'self',
            text: {
                ko: '동아리를 고를 때?',
                en: 'When choosing club?',
                zh: '选社团时？'
            },
            options: [
                { score: 1, label: { ko: '제일 노는 곳', en: 'Most fun one', zh: '最好玩的' } },
                { score: 2, label: { ko: '친구 따라감', en: 'Follow friends', zh: '跟着朋友' } },
                { score: 3, label: { ko: '관심 있는 분야', en: 'Area of interest', zh: '感兴趣的领域' } },
                { score: 4, label: { ko: '입시에 도움 되는 곳', en: 'Helpful for college', zh: '对升学有帮助的' } },
                { score: 5, label: { ko: '내 적성 계발', en: 'Develop my aptitude', zh: '培养我的才能' } }
            ]
        },
        {
            id: 'teen_school_10',
            category: 'relationship',
            text: {
                ko: '학교 축제 참여도?',
                en: 'School festival participation?',
                zh: '学校节日参与度？'
            },
            options: [
                { score: 1, label: { ko: '무대 주인공', en: 'Stage protagonist', zh: '舞台主角' } },
                { score: 2, label: { ko: '열심히 참여/응원', en: 'Actively participate/cheer', zh: '积极参与/加油' } },
                { score: 3, label: { ko: '적당히 구경', en: 'Watch moderately', zh: '适度观看' } },
                { score: 4, label: { ko: '운영/스태프 조력', en: 'Help as staff', zh: '作为工作人员帮忙' } },
                { score: 5, label: { ko: '귀찮아서 쉬고 싶음', en: 'Want to rest, too bothersome', zh: '嫌麻烦想休息' } }
            ]
        }
    ],

    romance: [
        {
            id: 'teen_romance_1',
            category: 'relationship',
            text: {
                ko: '짝사랑 상대가 생기면?',
                en: 'When you have a crush?',
                zh: '有暗恋对象时？'
            },
            options: [
                { score: 1, label: { ko: '친구에게 다 소문냄', en: 'Tell all friends', zh: '告诉所有朋友' } },
                { score: 2, label: { ko: '장난치며 괴롭힘', en: 'Tease and bother', zh: '开玩笑捉弄' } },
                { score: 3, label: { ko: '주변을 맴돔', en: 'Hover around', zh: '在周围徘徊' } },
                { score: 4, label: { ko: '몰래 지켜보며 고심', en: 'Watch secretly and ponder', zh: '偷偷观察思考' } },
                { score: 5, label: { ko: '진심 담아 고백', en: 'Confess sincerely', zh: '真诚告白' } }
            ]
        },
        {
            id: 'teen_romance_2',
            category: 'values',
            text: {
                ko: '연애하면 가장 하고 싶은 것?',
                en: 'What do you want to do most when dating?',
                zh: '恋爱时最想做什么？'
            },
            options: [
                { score: 1, label: { ko: '커플 템 맞추기', en: 'Match couple items', zh: '配情侣装' } },
                { score: 2, label: { ko: '교복 데이트', en: 'Date in uniform', zh: '穿校服约会' } },
                { score: 3, label: { ko: 'PC방/노래방 가기', en: 'Go to PC cafe/karaoke', zh: '去网吧/卡拉OK' } },
                { score: 4, label: { ko: '도서관 데이트', en: 'Library date', zh: '图书馆约会' } },
                { score: 5, label: { ko: '미래 약속', en: 'Promise for future', zh: '未来约定' } }
            ]
        },
        {
            id: 'teen_romance_3',
            category: 'relationship',
            text: {
                ko: '고백받는다면 어디서?',
                en: 'Where would you like to be confessed to?',
                zh: '想在哪里被告白？'
            },
            options: [
                { score: 1, label: { ko: '사람 많은 공개 장소', en: 'Crowded public place', zh: '人多的公共场所' } },
                { score: 2, label: { ko: '둘만의 장소', en: 'Private place for two', zh: '两人的私密场所' } },
                { score: 3, label: { ko: '카톡/문자', en: 'KakaoTalk/Text', zh: '聊天软件/短信' } },
                { score: 4, label: { ko: '편지', en: 'Letter', zh: '信件' } },
                { score: 5, label: { ko: '자연스럽게 사귀게 됨', en: 'Naturally start dating', zh: '自然而然开始交往' } }
            ]
        },
        {
            id: 'teen_romance_4',
            category: 'emotion',
            text: {
                ko: '연인이 연락이 없다면?',
                en: 'If partner doesn\'t contact?',
                zh: '恋人不联系？'
            },
            options: [
                { score: 1, label: { ko: '화나서 폭풍 카톡', en: 'Angry, spam messages', zh: '生气狂发消息' } },
                { score: 2, label: { ko: '걱정돼서 계속 전화', en: 'Worried, keep calling', zh: '担心不停打电话' } },
                { score: 3, label: { ko: '기다리다 서운해함', en: 'Wait and feel hurt', zh: '等待后感到难过' } },
                { score: 4, label: { ko: '바쁜가 보다 이해', en: 'Understand they\'re busy', zh: '理解对方忙' } },
                { score: 5, label: { ko: '자기 할 일 하며 기다림', en: 'Do my thing while waiting', zh: '做自己的事等待' } }
            ]
        },
        {
            id: 'teen_romance_5',
            category: 'relationship',
            text: {
                ko: '기념일(100일) 챙기기?',
                en: 'Celebrating anniversary (100 days)?',
                zh: '庆祝纪念日(100天)？'
            },
            options: [
                { score: 1, label: { ko: '성대한 이벤트', en: 'Grand event', zh: '盛大活动' } },
                { score: 2, label: { ko: '작은 선물', en: 'Small gift', zh: '小礼物' } },
                { score: 3, label: { ko: '맛있는 것 먹기', en: 'Eat something delicious', zh: '吃好吃的' } },
                { score: 4, label: { ko: '서로 고마움 전달', en: 'Express gratitude', zh: '表达感谢' } },
                { score: 5, label: { ko: '넘어가도 상관없음', en: 'Okay to skip', zh: '不庆祝也没关系' } }
            ]
        },
        {
            id: 'teen_romance_6',
            category: 'values',
            text: {
                ko: '첫 키스에 대한 생각?',
                en: 'Thoughts on first kiss?',
                zh: '对初吻的想法？'
            },
            options: [
                { score: 1, label: { ko: '빨리 하고 싶음', en: 'Want to do it soon', zh: '想快点' } },
                { score: 2, label: { ko: '호기심 가득', en: 'Full of curiosity', zh: '充满好奇' } },
                { score: 3, label: { ko: '때가 되면 하겠지', en: 'Will do when time comes', zh: '时候到了就会' } },
                { score: 4, label: { ko: '소중하고 신중하게', en: 'Precious and careful', zh: '珍贵且谨慎' } },
                { score: 5, label: { ko: '사랑의 결실이라 믿음', en: 'Believe it\'s fruit of love', zh: '相信是爱的结晶' } }
            ]
        },
        {
            id: 'teen_romance_7',
            category: 'responsibility',
            text: {
                ko: '데이트 비용 부담은?',
                en: 'About date expenses?',
                zh: '约会费用？'
            },
            options: [
                { score: 1, label: { ko: '돈 없으면 안 만남', en: 'Don\'t meet without money', zh: '没钱就不见' } },
                { score: 2, label: { ko: '내가 다 내고 싶음', en: 'Want to pay all', zh: '想全部付' } },
                { score: 3, label: { ko: '더치페이', en: 'Dutch pay', zh: 'AA制' } },
                { score: 4, label: { ko: '여유 있는 사람이 냄', en: 'Who has more pays', zh: '有钱的人付' } },
                { score: 5, label: { ko: '부모님 도움 안 받고 해결', en: 'Solve without parents help', zh: '不靠父母解决' } }
            ]
        },
        {
            id: 'teen_romance_8',
            category: 'emotion',
            text: {
                ko: '헤어지고 나서 사진은?',
                en: 'Photos after breakup?',
                zh: '分手后的照片？'
            },
            options: [
                { score: 1, label: { ko: '바로 삭제', en: 'Delete immediately', zh: '立即删除' } },
                { score: 2, label: { ko: '보관함 이동', en: 'Move to archive', zh: '移到存档' } },
                { score: 3, label: { ko: '한참 뒤에 지움', en: 'Delete much later', zh: '很久后删除' } },
                { score: 4, label: { ko: '그냥 둠', en: 'Just leave it', zh: '就放着' } },
                { score: 5, label: { ko: '좋은 추억으로 간직', en: 'Keep as good memory', zh: '作为美好回忆保留' } }
            ]
        },
        {
            id: 'teen_romance_9',
            category: 'values',
            text: {
                ko: '이상형 1순위 조건?',
                en: 'Top priority in ideal type?',
                zh: '理想型首要条件？'
            },
            options: [
                { score: 1, label: { ko: '얼굴/키', en: 'Face/Height', zh: '脸/身高' } },
                { score: 2, label: { ko: '성격/재미', en: 'Personality/Fun', zh: '性格/有趣' } },
                { score: 3, label: { ko: '나만 사랑해주는 사람', en: 'Someone who loves only me', zh: '只爱我的人' } },
                { score: 4, label: { ko: '배울 점 있는 사람', en: 'Someone to learn from', zh: '能学习的人' } },
                { score: 5, label: { ko: '가치관이 맞는 사람', en: 'Matching values', zh: '价值观相符的人' } }
            ]
        },
        {
            id: 'teen_romance_10',
            category: 'relationship',
            text: {
                ko: '부모님께 연애 사실을?',
                en: 'Tell parents about dating?',
                zh: '告诉父母恋爱的事？'
            },
            options: [
                { score: 1, label: { ko: '절대 비밀', en: 'Absolute secret', zh: '绝对保密' } },
                { score: 2, label: { ko: '걸릴 때까지 숨김', en: 'Hide until caught', zh: '藏到被发现' } },
                { score: 3, label: { ko: '친한 친구처럼 공유', en: 'Share like close friend', zh: '像好朋友一样分享' } },
                { score: 4, label: { ko: '조언을 구함', en: 'Seek advice', zh: '寻求建议' } },
                { score: 5, label: { ko: '당당하게 허락받음', en: 'Confidently get permission', zh: '坦然获得许可' } }
            ]
        }
    ]
};

export default { WEIGHTS, TEEN_QUESTIONS };
