// 50대 질문 (일상/직장/연애 각 10문항)
export const FIFTIES_QUESTIONS = {
    daily: [
        {
            id: 'fifties_daily_1', category: 'self', text: { ko: '건강 관리 1순위?', en: 'Health priority?', zh: '健康管理首位？' }, options: [
                { score: 1, label: { ko: '등산/골프', en: 'Hiking/Golf', zh: '登山/高尔夫' } },
                { score: 2, label: { ko: '걷기', en: 'Walking', zh: '散步' } },
                { score: 3, label: { ko: '영양제', en: 'Supplements', zh: '营养品' } },
                { score: 4, label: { ko: '정기검진', en: 'Regular checkup', zh: '定期检查' } },
                { score: 5, label: { ko: '마음 다스리기', en: 'Mind control', zh: '调心' } }
            ]
        },
        {
            id: 'fifties_daily_2', category: 'emotion', text: { ko: '자녀의 독립에 대해?', en: 'About children independence?', zh: '关于子女独立？' }, options: [
                { score: 1, label: { ko: '시원섭섭함', en: 'Bittersweet', zh: '又爽又难过' } },
                { score: 2, label: { ko: '서운함', en: 'Sad', zh: '难过' } },
                { score: 3, label: { ko: '축하해줌', en: 'Congratulate', zh: '祝贺' } },
                { score: 4, label: { ko: '드디어 자유', en: 'Finally free', zh: '终于自由' } },
                { score: 5, label: { ko: '걱정만 앞섬', en: 'Only worry', zh: '只担心' } }
            ]
        },
        {
            id: 'fifties_daily_3', category: 'emotion', text: { ko: '갱년기 극복법?', en: 'Menopause coping?', zh: '更年期应对？' }, options: [
                { score: 1, label: { ko: '운동', en: 'Exercise', zh: '运动' } },
                { score: 2, label: { ko: '가족과 대화', en: 'Talk with family', zh: '和家人对话' } },
                { score: 3, label: { ko: '병원 치료', en: 'Hospital treatment', zh: '医院治疗' } },
                { score: 4, label: { ko: '혼자만의 시간', en: 'Alone time', zh: '独处时间' } },
                { score: 5, label: { ko: '취미 몰입', en: 'Hobby immersion', zh: '沉浸爱好' } }
            ]
        },
        {
            id: 'fifties_daily_4', category: 'values', text: { ko: '퇴직 후 로망?', en: 'Post-retirement dream?', zh: '退休后梦想？' }, options: [
                { score: 1, label: { ko: '세계 일주', en: 'World tour', zh: '环游世界' } },
                { score: 2, label: { ko: '전원주택', en: 'Country house', zh: '乡村别墅' } },
                { score: 3, label: { ko: '작은 사업', en: 'Small business', zh: '小生意' } },
                { score: 4, label: { ko: '자원봉사', en: 'Volunteer', zh: '志愿服务' } },
                { score: 5, label: { ko: '손주 보기', en: 'See grandchildren', zh: '看孙子' } }
            ]
        },
        {
            id: 'fifties_daily_5', category: 'self', text: { ko: '스마트폰 활용?', en: 'Smartphone use?', zh: '智能手机使用？' }, options: [
                { score: 1, label: { ko: '앱 개발/공부', en: 'App dev/study', zh: '应用开发/学习' } },
                { score: 2, label: { ko: '뱅킹/쇼핑', en: 'Banking/Shopping', zh: '银行/购物' } },
                { score: 3, label: { ko: '유튜브 시청', en: 'YouTube watch', zh: '看YouTube' } },
                { score: 4, label: { ko: '전화/문자', en: 'Call/Text', zh: '电话/短信' } },
                { score: 5, label: { ko: '기계가 무서움', en: 'Scared of tech', zh: '害怕机器' } }
            ]
        },
        {
            id: 'fifties_daily_6', category: 'relationship', text: { ko: '나에게 친구란?', en: 'What are friends?', zh: '朋友对我？' }, options: [
                { score: 1, label: { ko: '죽고 못 사는 사이', en: 'Can\'t live without', zh: '生死之交' } },
                { score: 2, label: { ko: '취미 같이 하는 사이', en: 'Hobby partners', zh: '爱好伙伴' } },
                { score: 3, label: { ko: '가끔 보는 사이', en: 'Occasionally meet', zh: '偶尔见面' } },
                { score: 4, label: { ko: '연락만 하는 사이', en: 'Just contact', zh: '只联系' } },
                { score: 5, label: { ko: '필요 없음', en: 'Not needed', zh: '不需要' } }
            ]
        },
        {
            id: 'fifties_daily_7', category: 'values', text: { ko: '인생에서 가장 중요한 것?', en: 'Most important in life?', zh: '人生最重要？' }, options: [
                { score: 1, label: { ko: '돈', en: 'Money', zh: '钱' } },
                { score: 2, label: { ko: '명예', en: 'Honor', zh: '名誉' } },
                { score: 3, label: { ko: '가족', en: 'Family', zh: '家人' } },
                { score: 4, label: { ko: '건강', en: 'Health', zh: '健康' } },
                { score: 5, label: { ko: '평화', en: 'Peace', zh: '和平' } }
            ]
        },
        {
            id: 'fifties_daily_8', category: 'self', text: { ko: '새로운 배움(악기 등)?', en: 'New learning?', zh: '新学习？' }, options: [
                { score: 1, label: { ko: '적극 참여', en: 'Active participation', zh: '积极参与' } },
                { score: 2, label: { ko: '생각만 함', en: 'Just think', zh: '只想' } },
                { score: 3, label: { ko: '남들 하니까', en: 'Because others do', zh: '因为别人做' } },
                { score: 4, label: { ko: '어려워서 포기', en: 'Give up, too hard', zh: '太难放弃' } },
                { score: 5, label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' } }
            ]
        },
        {
            id: 'fifties_daily_9', category: 'self', text: { ko: '거울 속 내 모습?', en: 'My reflection?', zh: '镜中的我？' }, options: [
                { score: 1, label: { ko: '아직 청춘', en: 'Still young', zh: '还年轻' } },
                { score: 2, label: { ko: '세월이 느껴짐', en: 'Feel the years', zh: '感觉岁月' } },
                { score: 3, label: { ko: '안쓰러움', en: 'Pitiful', zh: '可怜' } },
                { score: 4, label: { ko: '받아들임', en: 'Accept', zh: '接受' } },
                { score: 5, label: { ko: '보기 싫음', en: 'Don\'t want to see', zh: '不想看' } }
            ]
        },
        {
            id: 'fifties_daily_10', category: 'responsibility', text: { ko: '노후 자금 준비?', en: 'Retirement funds?', zh: '养老资金？' }, options: [
                { score: 1, label: { ko: '풍족함', en: 'Abundant', zh: '充足' } },
                { score: 2, label: { ko: '적당함', en: 'Adequate', zh: '适当' } },
                { score: 3, label: { ko: '부족함', en: 'Insufficient', zh: '不足' } },
                { score: 4, label: { ko: '막막함', en: 'Hopeless', zh: '茫然' } },
                { score: 5, label: { ko: '자식에게 기대야 함', en: 'Depend on children', zh: '要靠孩子' } }
            ]
        }
    ],
    work: [
        {
            id: 'fifties_work_1', category: 'self', text: { ko: '직장에서 나의 태도?', en: 'My attitude at work?', zh: '工作态度？' }, options: [
                { score: 1, label: { ko: '열정적인 리더', en: 'Passionate leader', zh: '热情领导' } },
                { score: 2, label: { ko: '경험 전수자', en: 'Experience transferor', zh: '经验传授者' } },
                { score: 3, label: { ko: '조용히 자리 지킴', en: 'Quietly keep position', zh: '安静守岗' } },
                { score: 4, label: { ko: '퇴직만 기다림', en: 'Just wait retirement', zh: '只等退休' } },
                { score: 5, label: { ko: '사회생활 회의감', en: 'Doubt work life', zh: '怀疑职场' } }
            ]
        },
        {
            id: 'fifties_work_2', category: 'relationship', text: { ko: '후배와의 세대 차이?', en: 'Generation gap with juniors?', zh: '和后辈代沟？' }, options: [
                { score: 1, label: { ko: '전혀 안 느낌', en: 'Don\'t feel at all', zh: '完全不觉得' } },
                { score: 2, label: { ko: '이해하려 노력', en: 'Try to understand', zh: '努力理解' } },
                { score: 3, label: { ko: '가끔 답답함', en: 'Sometimes frustrated', zh: '有时烦闷' } },
                { score: 4, label: { ko: '말 섞기 싫음', en: 'Don\'t want to talk', zh: '不想说话' } },
                { score: 5, label: { ko: '무시당하는 느낌', en: 'Feel ignored', zh: '感觉被忽视' } }
            ]
        },
        {
            id: 'fifties_work_3', category: 'relationship', text: { ko: '사회 활동 참여?', en: 'Social activity participation?', zh: '社会活动参与？' }, options: [
                { score: 1, label: { ko: '각종 모임 회장', en: 'President of groups', zh: '各种聚会会长' } },
                { score: 2, label: { ko: '적극 회원', en: 'Active member', zh: '积极会员' } },
                { score: 3, label: { ko: '가끔 참여', en: 'Occasional participation', zh: '偶尔参与' } },
                { score: 4, label: { ko: '안 함', en: 'Don\'t do', zh: '不参加' } },
                { score: 5, label: { ko: '사람이 싫음', en: 'Dislike people', zh: '讨厌人' } }
            ]
        },
        {
            id: 'fifties_work_4', category: 'values', text: { ko: '재취업에 대한 의지?', en: 'Will for re-employment?', zh: '再就业意愿？' }, options: [
                { score: 1, label: { ko: '언제든 가능', en: 'Anytime possible', zh: '随时可以' } },
                { score: 2, label: { ko: '조건 맞으면 함', en: 'If conditions match', zh: '条件合适就做' } },
                { score: 3, label: { ko: '자신 없음', en: 'Not confident', zh: '没信心' } },
                { score: 4, label: { ko: '쉬고 싶음', en: 'Want to rest', zh: '想休息' } },
                { score: 5, label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' } }
            ]
        },
        {
            id: 'fifties_work_5', category: 'emotion', text: { ko: '기술 발전에 대한 공포?', en: 'Fear of tech advancement?', zh: '对技术发展恐惧？' }, options: [
                { score: 1, label: { ko: '즐겁게 배움', en: 'Learn happily', zh: '快乐学习' } },
                { score: 2, label: { ko: '조금 두려움', en: 'A bit scared', zh: '有点害怕' } },
                { score: 3, label: { ko: '포기함', en: 'Give up', zh: '放弃' } },
                { score: 4, label: { ko: '무관심', en: 'Indifferent', zh: '无关心' } },
                { score: 5, label: { ko: '과거가 좋았음', en: 'Past was better', zh: '过去更好' } }
            ]
        },
        {
            id: 'fifties_work_6', category: 'relationship', text: { ko: '젊은 상사를 만난다면?', en: 'If meet young boss?', zh: '遇到年轻上司？' }, options: [
                { score: 1, label: { ko: '능력 있으면 존경', en: 'Respect if capable', zh: '有能力就尊敬' } },
                { score: 2, label: { ko: '불편하지만 따름', en: 'Uncomfortable but follow', zh: '不舒服但跟随' } },
                { score: 3, label: { ko: '무시함', en: 'Ignore', zh: '无视' } },
                { score: 4, label: { ko: '자괴감 느낌', en: 'Feel self-loathing', zh: '感到自卑' } },
                { score: 5, label: { ko: '당장 그만둠', en: 'Quit immediately', zh: '立即辞职' } }
            ]
        },
        {
            id: 'fifties_work_7', category: 'self', text: { ko: '내 노하우의 가치?', en: 'Value of my know-how?', zh: '我的经验价值？' }, options: [
                { score: 1, label: { ko: '매우 높음', en: 'Very high', zh: '非常高' } },
                { score: 2, label: { ko: '도움은 될 것', en: 'Will be helpful', zh: '会有帮助' } },
                { score: 3, label: { ko: '낡은 지식', en: 'Outdated knowledge', zh: '过时知识' } },
                { score: 4, label: { ko: '아무도 안 궁금해함', en: 'Nobody curious', zh: '没人好奇' } },
                { score: 5, label: { ko: '숨기고 싶음', en: 'Want to hide', zh: '想隐藏' } }
            ]
        },
        {
            id: 'fifties_work_8', category: 'values', text: { ko: '봉사 활동에 대해?', en: 'About volunteer work?', zh: '关于志愿活动？' }, options: [
                { score: 1, label: { ko: '정기적 참여', en: 'Regular participation', zh: '定期参与' } },
                { score: 2, label: { ko: '가끔 함', en: 'Occasionally do', zh: '偶尔做' } },
                { score: 3, label: { ko: '생각만 함', en: 'Just think', zh: '只想' } },
                { score: 4, label: { ko: '귀찮음', en: 'Bothersome', zh: '麻烦' } },
                { score: 5, label: { ko: '나 살기도 힘듦', en: 'Hard to live myself', zh: '自己都难活' } }
            ]
        },
        {
            id: 'fifties_work_9', category: 'values', text: { ko: '명예에 대한 욕심?', en: 'Desire for honor?', zh: '对名誉的欲望？' }, options: [
                { score: 1, label: { ko: '아직 높음', en: 'Still high', zh: '还很高' } },
                { score: 2, label: { ko: '적당함', en: 'Moderate', zh: '适度' } },
                { score: 3, label: { ko: '내려놓음', en: 'Let go', zh: '放下' } },
                { score: 4, label: { ko: '부질없음', en: 'Futile', zh: '无用' } },
                { score: 5, label: { ko: '돈이 최고', en: 'Money is best', zh: '钱最好' } }
            ]
        },
        {
            id: 'fifties_work_10', category: 'emotion', text: { ko: '퇴임식 때의 기분?', en: 'Feeling at retirement ceremony?', zh: '退休仪式心情？' }, options: [
                { score: 1, label: { ko: '새로운 시작', en: 'New start', zh: '新开始' } },
                { score: 2, label: { ko: '시원함', en: 'Refreshing', zh: '清爽' } },
                { score: 3, label: { ko: '섭섭함', en: 'Regretful', zh: '遗憾' } },
                { score: 4, label: { ko: '눈물 날 것 같음', en: 'Might cry', zh: '可能哭' } },
                { score: 5, label: { ko: '허무함', en: 'Empty', zh: '空虚' } }
            ]
        }
    ],
    romance: [
        {
            id: 'fifties_romance_1', category: 'relationship', text: { ko: '부부 사이의 호칭?', en: 'Couple\'s address?', zh: '夫妻称呼？' }, options: [
                { score: 1, label: { ko: '여보/자기', en: 'Honey/Darling', zh: '亲爱的' } },
                { score: 2, label: { ko: '누구 아빠/엄마', en: 'Someone\'s dad/mom', zh: '某某爸/妈' } },
                { score: 3, label: { ko: '이봐/저기', en: 'Hey/There', zh: '喂/那个' } },
                { score: 4, label: { ko: '호칭 없음', en: 'No address', zh: '没称呼' } },
                { score: 5, label: { ko: '야/너', en: 'Hey/You', zh: '喂/你' } }
            ]
        },
        {
            id: 'fifties_romance_2', category: 'relationship', text: { ko: '배우자가 "나 사랑해?"?', en: 'Spouse asks "Love me?"', zh: '配偶问"爱我吗？"' }, options: [
                { score: 1, label: { ko: '"당연하지"', en: '"Of course"', zh: '"当然"' } },
                { score: 2, label: { ko: '"갑자기 왜 그래?"', en: '"Why suddenly?"', zh: '"突然怎么了？"' } },
                { score: 3, label: { ko: '"그걸 꼭 말해야 해?"', en: '"Must I say?"', zh: '"必须说吗？"' } },
                { score: 4, label: { ko: '"허허 웃음"', en: '"Hehe laugh"', zh: '"呵呵笑"' } },
                { score: 5, label: { ko: '"살던 대로 살자"', en: '"Live as we lived"', zh: '"照常生活"' } }
            ]
        },
        {
            id: 'fifties_romance_3', category: 'values', text: { ko: '황혼 이혼/졸혼?', en: 'Twilight divorce?', zh: '黄昏离婚？' }, options: [
                { score: 1, label: { ko: '충분히 가능', en: 'Quite possible', zh: '完全可能' } },
                { score: 2, label: { ko: '이해는 함', en: 'Understand', zh: '理解' } },
                { score: 3, label: { ko: '절대 안 됨', en: 'Absolutely not', zh: '绝对不行' } },
                { score: 4, label: { ko: '생각해본 적 없음', en: 'Never thought', zh: '从未想过' } },
                { score: 5, label: { ko: '남 부끄러움', en: 'Shameful', zh: '丢脸' } }
            ]
        },
        {
            id: 'fifties_romance_4', category: 'relationship', text: { ko: '부부 공동 취미?', en: 'Couple\'s shared hobby?', zh: '夫妻共同爱好？' }, options: [
                { score: 1, label: { ko: '함께 즐김', en: 'Enjoy together', zh: '一起享受' } },
                { score: 2, label: { ko: '따로 또 같이', en: 'Separate yet together', zh: '分开又一起' } },
                { score: 3, label: { ko: '하고 싶지만 안 됨', en: 'Want but can\'t', zh: '想但不行' } },
                { score: 4, label: { ko: '각자 함', en: 'Each separately', zh: '各自做' } },
                { score: 5, label: { ko: '서로 취미 싫어함', en: 'Dislike each other\'s', zh: '讨厌对方的' } }
            ]
        },
        {
            id: 'fifties_romance_5', category: 'emotion', text: { ko: '연애 시절 추억?', en: 'Dating memories?', zh: '恋爱回忆？' }, options: [
                { score: 1, label: { ko: '어제처럼 생생', en: 'Vivid like yesterday', zh: '像昨天一样生动' } },
                { score: 2, label: { ko: '가끔 떠올림', en: 'Recall sometimes', zh: '偶尔想起' } },
                { score: 3, label: { ko: '기억 안 남', en: 'Don\'t remember', zh: '不记得' } },
                { score: 4, label: { ko: '남사스러움', en: 'Embarrassing', zh: '尴尬' } },
                { score: 5, label: { ko: '후회만 남음', en: 'Only regret', zh: '只有后悔' } }
            ]
        },
        {
            id: 'fifties_romance_6', category: 'emotion', text: { ko: '배우자에게 미안한 점?', en: 'Sorry to spouse?', zh: '对配偶抱歉？' }, options: [
                { score: 1, label: { ko: '고생시킨 것', en: 'Made them suffer', zh: '让他们受苦' } },
                { score: 2, label: { ko: '표현 못한 것', en: 'Couldn\'t express', zh: '没能表达' } },
                { score: 3, label: { ko: '없음', en: 'Nothing', zh: '没有' } },
                { score: 4, label: { ko: '나도 고생함', en: 'I suffered too', zh: '我也受苦' } },
                { score: 5, label: { ko: '서로 똑같음', en: 'Both same', zh: '彼此一样' } }
            ]
        },
        {
            id: 'fifties_romance_7', category: 'values', text: { ko: '다시 태어난다면?', en: 'If reborn?', zh: '重生的话？' }, options: [
                { score: 1, label: { ko: '지금 배우자와', en: 'With current spouse', zh: '和现在配偶' } },
                { score: 2, label: { ko: '다른 사람과', en: 'With someone else', zh: '和别人' } },
                { score: 3, label: { ko: '혼자서 자유롭게', en: 'Alone freely', zh: '独自自由' } },
                { score: 4, label: { ko: '안 태어남', en: 'Not be born', zh: '不出生' } },
                { score: 5, label: { ko: '모르겠음', en: 'Don\'t know', zh: '不知道' } }
            ]
        },
        {
            id: 'fifties_romance_8', category: 'relationship', text: { ko: '부부 싸움 횟수?', en: 'Couple fight frequency?', zh: '夫妻吵架频率？' }, options: [
                { score: 1, label: { ko: '자주 싸움', en: 'Fight often', zh: '经常吵' } },
                { score: 2, label: { ko: '가끔 싸움', en: 'Fight sometimes', zh: '偶尔吵' } },
                { score: 3, label: { ko: '안 싸움(포기)', en: 'Don\'t fight (gave up)', zh: '不吵(放弃)' } },
                { score: 4, label: { ko: '조용히 냉전', en: 'Quiet cold war', zh: '安静冷战' } },
                { score: 5, label: { ko: '대화가 없어 안 싸움', en: 'No talk so no fight', zh: '没对话所以不吵' } }
            ]
        },
        {
            id: 'fifties_romance_9', category: 'emotion', text: { ko: '배우자의 외모?', en: 'Spouse\'s appearance?', zh: '配偶外貌？' }, options: [
                { score: 1, label: { ko: '여전히 고움', en: 'Still beautiful', zh: '依然美丽' } },
                { score: 2, label: { ko: '안쓰러움', en: 'Pitiful', zh: '可怜' } },
                { score: 3, label: { ko: '곱게 늙었으면', en: 'Hope aged well', zh: '希望优雅老去' } },
                { score: 4, label: { ko: '무덤덤', en: 'Indifferent', zh: '无所谓' } },
                { score: 5, label: { ko: '보기 싫음', en: 'Don\'t want to see', zh: '不想看' } }
            ]
        },
        {
            id: 'fifties_romance_10', category: 'values', text: { ko: '사랑의 정의?', en: 'Definition of love?', zh: '爱的定义？' }, options: [
                { score: 1, label: { ko: '열정', en: 'Passion', zh: '热情' } },
                { score: 2, label: { ko: '의지', en: 'Will', zh: '意志' } },
                { score: 3, label: { ko: '의리/우정', en: 'Loyalty/Friendship', zh: '义气/友情' } },
                { score: 4, label: { ko: '희생', en: 'Sacrifice', zh: '牺牲' } },
                { score: 5, label: { ko: '동행', en: 'Companionship', zh: '同行' } }
            ]
        }
    ]
};

export default FIFTIES_QUESTIONS;
