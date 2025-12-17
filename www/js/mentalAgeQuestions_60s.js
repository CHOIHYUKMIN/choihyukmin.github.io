// 60대 질문 (일상/사회/가족 각 10문항)
export const SIXTIES_QUESTIONS = {
    daily: [
        {
            id: 'sixties_daily_1', category: 'self', text: { ko: '하루 중 가장 즐거운 시간?', en: 'Happiest time of day?', zh: '一天最快乐时？' }, options: [
                { score: 1, label: { ko: '모임/외출', en: 'Meetings/Outings', zh: '聚会/外出' } },
                { score: 2, label: { ko: '운동', en: 'Exercise', zh: '运动' } },
                { score: 3, label: { ko: 'TV/유튜브', en: 'TV/YouTube', zh: '电视/YouTube' } },
                { score: 4, label: { ko: '손주 보기', en: 'See grandchildren', zh: '看孙子' } },
                { score: 5, label: { ko: '명상/기도', en: 'Meditation/Prayer', zh: '冥想/祈祷' } }
            ]
        },
        {
            id: 'sixties_daily_2', category: 'self', text: { ko: '건강 유지 비법?', en: 'Health maintenance secret?', zh: '保持健康秘诀？' }, options: [
                { score: 1, label: { ko: '등산/걷기', en: 'Hiking/Walking', zh: '登山/散步' } },
                { score: 2, label: { ko: '소식', en: 'Light eating', zh: '少食' } },
                { score: 3, label: { ko: '영양제', en: 'Supplements', zh: '营养品' } },
                { score: 4, label: { ko: '병원 정기 방문', en: 'Regular hospital visits', zh: '定期就医' } },
                { score: 5, label: { ko: '마음 비우기', en: 'Empty mind', zh: '放空心灵' } }
            ]
        },
        {
            id: 'sixties_daily_3', category: 'values', text: { ko: '제사/명절에 대한 생각?', en: 'Thoughts on ancestral rites/holidays?', zh: '对祭祀/节日想法？' }, options: [
                { score: 1, label: { ko: '꼭 지켜야 함', en: 'Must observe', zh: '必须遵守' } },
                { score: 2, label: { ko: '간소화해야 함', en: 'Should simplify', zh: '应该简化' } },
                { score: 3, label: { ko: '안 하고 싶음', en: 'Don\'t want to', zh: '不想做' } },
                { score: 4, label: { ko: '자식들 뜻대로', en: 'As children wish', zh: '按孩子意愿' } },
                { score: 5, label: { ko: '여행 가고 싶음', en: 'Want to travel', zh: '想去旅行' } }
            ]
        },
        {
            id: 'sixties_daily_4', category: 'self', text: { ko: '요즘 유행하는 문화?', en: 'Current trendy culture?', zh: '现在流行文化？' }, options: [
                { score: 1, label: { ko: '배우고 싶음', en: 'Want to learn', zh: '想学' } },
                { score: 2, label: { ko: '신기함', en: 'Fascinating', zh: '神奇' } },
                { score: 3, label: { ko: '어색함', en: 'Awkward', zh: '尴尬' } },
                { score: 4, label: { ko: '한심해 보임', en: 'Looks pathetic', zh: '看起来可悲' } },
                { score: 5, label: { ko: '관심 없음', en: 'Not interested', zh: '不感兴趣' } }
            ]
        },
        {
            id: 'sixties_daily_5', category: 'self', text: { ko: '옷차림의 기준?', en: 'Clothing standard?', zh: '穿衣标准？' }, options: [
                { score: 1, label: { ko: '젊고 세련되게', en: 'Young and stylish', zh: '年轻时尚' } },
                { score: 2, label: { ko: '깔끔하게', en: 'Neatly', zh: '整洁' } },
                { score: 3, label: { ko: '편하게', en: 'Comfortably', zh: '舒适' } },
                { score: 4, label: { ko: '남의 시선 의식', en: 'Conscious of others', zh: '在意他人' } },
                { score: 5, label: { ko: '아무거나', en: 'Anything', zh: '随便' } }
            ]
        },
        {
            id: 'sixties_daily_6', category: 'emotion', text: { ko: '가장 그리운 시절?', en: 'Most nostalgic period?', zh: '最怀念时期？' }, options: [
                { score: 1, label: { ko: '어린 시절', en: 'Childhood', zh: '童年' } },
                { score: 2, label: { ko: '청춘 시절', en: 'Youth', zh: '青春' } },
                { score: 3, label: { ko: '아이들 키울 때', en: 'Raising children', zh: '养育孩子时' } },
                { score: 4, label: { ko: '직장 다닐 때', en: 'Working days', zh: '工作时' } },
                { score: 5, label: { ko: '지금이 제일 좋음', en: 'Now is best', zh: '现在最好' } }
            ]
        },
        {
            id: 'sixties_daily_7', category: 'self', text: { ko: '죽음에 대한 준비?', en: 'Preparation for death?', zh: '对死亡准备？' }, options: [
                { score: 1, label: { ko: '자서전/정리', en: 'Autobiography/Organization', zh: '自传/整理' } },
                { score: 2, label: { ko: '유언/상속', en: 'Will/Inheritance', zh: '遗嘱/继承' } },
                { score: 3, label: { ko: '마음의 준비', en: 'Mental preparation', zh: '心理准备' } },
                { score: 4, label: { ko: '두려움', en: 'Fear', zh: '恐惧' } },
                { score: 5, label: { ko: '생각 안 함', en: 'Don\'t think about', zh: '不想' } }
            ]
        },
        {
            id: 'sixties_daily_8', category: 'values', text: { ko: '나에게 돈이란?', en: 'What is money to me?', zh: '钱对我？' }, options: [
                { score: 1, label: { ko: '즐길 수단', en: 'Means to enjoy', zh: '享受手段' } },
                { score: 2, label: { ko: '병원비/노후', en: 'Medical/Retirement', zh: '医疗/养老' } },
                { score: 3, label: { ko: '자식 줄 것', en: 'For children', zh: '给孩子' } },
                { score: 4, label: { ko: '없으면 비참한 것', en: 'Miserable without', zh: '没有就悲惨' } },
                { score: 5, label: { ko: '부질없는 것', en: 'Futile thing', zh: '无用之物' } }
            ]
        },
        {
            id: 'sixties_daily_9', category: 'values', text: { ko: '거주 환경 선호?', en: 'Preferred living environment?', zh: '居住环境偏好？' }, options: [
                { score: 1, label: { ko: '도시 아파트', en: 'City apartment', zh: '城市公寓' } },
                { score: 2, label: { ko: '전원주택', en: 'Country house', zh: '乡村房屋' } },
                { score: 3, label: { ko: '실버타운', en: 'Senior town', zh: '老年社区' } },
                { score: 4, label: { ko: '자식 집 근처', en: 'Near children', zh: '孩子家附近' } },
                { score: 5, label: { ko: '고향 집', en: 'Hometown', zh: '故乡' } }
            ]
        },
        {
            id: 'sixties_daily_10', category: 'values', text: { ko: '삶의 보람?', en: 'Life\'s reward?', zh: '生活的意义？' }, options: [
                { score: 1, label: { ko: '자식 성공', en: 'Children\'s success', zh: '孩子成功' } },
                { score: 2, label: { ko: '내 건강', en: 'My health', zh: '我的健康' } },
                { score: 3, label: { ko: '사회 봉사', en: 'Social service', zh: '社会服务' } },
                { score: 4, label: { ko: '배움의 즐거움', en: 'Joy of learning', zh: '学习乐趣' } },
                { score: 5, label: { ko: '무탈한 하루', en: 'Peaceful day', zh: '平安一天' } }
            ]
        }
    ],
    social: [
        {
            id: 'sixties_social_1', category: 'relationship', text: { ko: '젊은이들이 예의 없을 때?', en: 'When young people are rude?', zh: '年轻人无礼时？' }, options: [
                { score: 1, label: { ko: '타이름', en: 'Scold', zh: '责备' } },
                { score: 2, label: { ko: '속으로만 욕함', en: 'Curse internally', zh: '心里骂' } },
                { score: 3, label: { ko: '그러려니 함', en: 'Let it be', zh: '算了' } },
                { score: 4, label: { ko: '피함', en: 'Avoid', zh: '避开' } },
                { score: 5, label: { ko: '요즘 애들은 다 그래', en: 'Kids these days', zh: '现在孩子都这样' } }
            ]
        },
        {
            id: 'sixties_social_2', category: 'relationship', text: { ko: '모임에서 밥값 계산?', en: 'Paying at gatherings?', zh: '聚会付账？' }, options: [
                { score: 1, label: { ko: '내가 먼저 냄', en: 'I pay first', zh: '我先付' } },
                { score: 2, label: { ko: '엔분의 일', en: 'Split equally', zh: '平分' } },
                { score: 3, label: { ko: '얻어먹음', en: 'Get treated', zh: '被请' } },
                { score: 4, label: { ko: '회비로 처리', en: 'Handle with dues', zh: '用会费处理' } },
                { score: 5, label: { ko: '안 나감', en: 'Don\'t go', zh: '不参加' } }
            ]
        },
        {
            id: 'sixties_social_3', category: 'relationship', text: { ko: '새로운 친구 사귀기?', en: 'Making new friends?', zh: '交新朋友？' }, options: [
                { score: 1, label: { ko: '즐거움', en: 'Enjoyable', zh: '愉快' } },
                { score: 2, label: { ko: '필요성 느낌', en: 'Feel necessity', zh: '感到必要' } },
                { score: 3, label: { ko: '어려움', en: 'Difficult', zh: '困难' } },
                { score: 4, label: { ko: '귀찮음', en: 'Bothersome', zh: '麻烦' } },
                { score: 5, label: { ko: '친구 필요 없음', en: 'Don\'t need friends', zh: '不需要朋友' } }
            ]
        },
        {
            id: 'sixties_social_4', category: 'values', text: { ko: '내 인생 철학?', en: 'My life philosophy?', zh: '我的人生哲学？' }, options: [
                { score: 1, label: { ko: '도전과 열정', en: 'Challenge and passion', zh: '挑战和热情' } },
                { score: 2, label: { ko: '인내와 끈기', en: 'Patience and persistence', zh: '耐心和坚持' } },
                { score: 3, label: { ko: '안분지족', en: 'Contentment', zh: '知足常乐' } },
                { score: 4, label: { ko: '순리대로', en: 'Natural course', zh: '顺其自然' } },
                { score: 5, label: { ko: '운명론', en: 'Fatalism', zh: '宿命论' } }
            ]
        },
        {
            id: 'sixties_social_5', category: 'self', text: { ko: '지하철 노약자석?', en: 'Subway priority seat?', zh: '地铁老弱座？' }, options: [
                { score: 1, label: { ko: '안 앉음', en: 'Don\'t sit', zh: '不坐' } },
                { score: 2, label: { ko: '비어 있으면 앉음', en: 'Sit if empty', zh: '空着就坐' } },
                { score: 3, label: { ko: '당연히 내 자리', en: 'Naturally mine', zh: '当然是我的' } },
                { score: 4, label: { ko: '눈치 보며 앉음', en: 'Sit hesitantly', zh: '犹豫着坐' } },
                { score: 5, label: { ko: '대중교통 안 탐', en: 'Don\'t use transit', zh: '不坐公交' } }
            ]
        },
        {
            id: 'sixties_social_6', category: 'self', text: { ko: '디지털 기기(키오스크 등)?', en: 'Digital devices (kiosks)?', zh: '数字设备(自助机)？' }, options: [
                { score: 1, label: { ko: '혼자 잘함', en: 'Do well alone', zh: '自己做得好' } },
                { score: 2, label: { ko: '도움받아 함', en: 'Do with help', zh: '在帮助下做' } },
                { score: 3, label: { ko: '포기함', en: 'Give up', zh: '放弃' } },
                { score: 4, label: { ko: '자식과 동행', en: 'With children', zh: '和孩子一起' } },
                { score: 5, label: { ko: '욕하며 안 씀', en: 'Curse and don\'t use', zh: '骂着不用' } }
            ]
        },
        {
            id: 'sixties_social_7', category: 'relationship', text: { ko: '인생 상담을 해준다면?', en: 'If giving life advice?', zh: '如果给人生建议？' }, options: [
                { score: 1, label: { ko: '열정 강조', en: 'Emphasize passion', zh: '强调热情' } },
                { score: 2, label: { ko: '현실 조언', en: 'Realistic advice', zh: '现实建议' } },
                { score: 3, label: { ko: '위로와 공감', en: 'Comfort and empathy', zh: '安慰和共鸣' } },
                { score: 4, label: { ko: '참으라 함', en: 'Tell to endure', zh: '让忍耐' } },
                { score: 5, label: { ko: '해줄 말 없음', en: 'Nothing to say', zh: '没话说' } }
            ]
        },
        {
            id: 'sixties_social_8', category: 'values', text: { ko: '사회에 남기고 싶은 것?', en: 'What to leave to society?', zh: '想留给社会？' }, options: [
                { score: 1, label: { ko: '좋은 평판', en: 'Good reputation', zh: '好名声' } },
                { score: 2, label: { ko: '재산', en: 'Wealth', zh: '财富' } },
                { score: 3, label: { ko: '지혜', en: 'Wisdom', zh: '智慧' } },
                { score: 4, label: { ko: '자식', en: 'Children', zh: '孩子' } },
                { score: 5, label: { ko: '없음', en: 'Nothing', zh: '没有' } }
            ]
        },
        {
            id: 'sixties_social_9', category: 'self', text: { ko: '지난 삶의 평가?', en: 'Evaluation of past life?', zh: '对过去生活评价？' }, options: [
                { score: 1, label: { ko: '성공적', en: 'Successful', zh: '成功' } },
                { score: 2, label: { ko: '보통', en: 'Average', zh: '一般' } },
                { score: 3, label: { ko: '후회됨', en: 'Regretful', zh: '后悔' } },
                { score: 4, label: { ko: '고난의 연속', en: 'Series of hardships', zh: '连续苦难' } },
                { score: 5, label: { ko: '생각하기 싫음', en: 'Don\'t want to think', zh: '不想想' } }
            ]
        },
        {
            id: 'sixties_social_10', category: 'values', text: { ko: '앞으로의 목표?', en: 'Future goals?', zh: '未来目标？' }, options: [
                { score: 1, label: { ko: '새로운 도전', en: 'New challenges', zh: '新挑战' } },
                { score: 2, label: { ko: '건강 유지', en: 'Maintain health', zh: '保持健康' } },
                { score: 3, label: { ko: '가족 화목', en: 'Family harmony', zh: '家庭和睦' } },
                { score: 4, label: { ko: '주변 정리', en: 'Organize surroundings', zh: '整理周围' } },
                { score: 5, label: { ko: '조용히 살기', en: 'Live quietly', zh: '安静生活' } }
            ]
        }
    ],
    family: [
        {
            id: 'sixties_family_1', category: 'relationship', text: { ko: '자녀에게 바라는 것?', en: 'What to wish from children?', zh: '对子女期望？' }, options: [
                { score: 1, label: { ko: '효도', en: 'Filial piety', zh: '孝顺' } },
                { score: 2, label: { ko: '자주 연락', en: 'Frequent contact', zh: '经常联系' } },
                { score: 3, label: { ko: '본인들 행복', en: 'Their happiness', zh: '他们幸福' } },
                { score: 4, label: { ko: '경제적 도움', en: 'Financial help', zh: '经济帮助' } },
                { score: 5, label: { ko: '손주 건강', en: 'Grandchildren health', zh: '孙子健康' } }
            ]
        },
        {
            id: 'sixties_family_2', category: 'relationship', text: { ko: '배우자와의 관계?', en: 'Relationship with spouse?', zh: '和配偶关系？' }, options: [
                { score: 1, label: { ko: '연인 같음', en: 'Like lovers', zh: '像恋人' } },
                { score: 2, label: { ko: '친구 같음', en: 'Like friends', zh: '像朋友' } },
                { score: 3, label: { ko: '전우 같음', en: 'Like comrades', zh: '像战友' } },
                { score: 4, label: { ko: '무관심', en: 'Indifferent', zh: '冷漠' } },
                { score: 5, label: { ko: '원수 같음', en: 'Like enemies', zh: '像敌人' } }
            ]
        },
        {
            id: 'sixties_family_3', category: 'emotion', text: { ko: '손주 돌보기?', en: 'Taking care of grandchildren?', zh: '照顾孙子？' }, options: [
                { score: 1, label: { ko: '너무 행복', en: 'Very happy', zh: '非常幸福' } },
                { score: 2, label: { ko: '힘들지만 보람', en: 'Hard but rewarding', zh: '辛苦但有意义' } },
                { score: 3, label: { ko: '가끔 보면 좋음', en: 'Good to see occasionally', zh: '偶尔见面好' } },
                { score: 4, label: { ko: '힘들어서 싫음', en: 'Dislike, too hard', zh: '讨厌，太累' } },
                { score: 5, label: { ko: '의무감에 함', en: 'Do out of duty', zh: '出于义务' } }
            ]
        },
        {
            id: 'sixties_family_4', category: 'emotion', text: { ko: '배우자가 먼저 떠난다면?', en: 'If spouse passes first?', zh: '配偶先离世？' }, options: [
                { score: 1, label: { ko: '재혼 고려', en: 'Consider remarriage', zh: '考虑再婚' } },
                { score: 2, label: { ko: '혼자 삶', en: 'Live alone', zh: '独自生活' } },
                { score: 3, label: { ko: '자식과 삶', en: 'Live with children', zh: '和孩子生活' } },
                { score: 4, label: { ko: '실버타운', en: 'Senior town', zh: '老年社区' } },
                { score: 5, label: { ko: '따라가고 싶음', en: 'Want to follow', zh: '想跟着去' } }
            ]
        },
        {
            id: 'sixties_family_5', category: 'relationship', text: { ko: '부부 싸움의 주제?', en: 'Couple fight topics?', zh: '夫妻吵架主题？' }, options: [
                { score: 1, label: { ko: '건강', en: 'Health', zh: '健康' } },
                { score: 2, label: { ko: '돈', en: 'Money', zh: '钱' } },
                { score: 3, label: { ko: '자식', en: 'Children', zh: '孩子' } },
                { score: 4, label: { ko: '사소한 습관', en: 'Trivial habits', zh: '琐碎习惯' } },
                { score: 5, label: { ko: '과거 이야기', en: 'Past stories', zh: '过去的事' } }
            ]
        },
        {
            id: 'sixties_family_6', category: 'relationship', text: { ko: '가족 여행 시 나의 역할?', en: 'My role in family trips?', zh: '家庭旅行角色？' }, options: [
                { score: 1, label: { ko: '주도적 계획', en: 'Lead planning', zh: '主导计划' } },
                { score: 2, label: { ko: '돈 담당', en: 'Money handler', zh: '负责钱' } },
                { score: 3, label: { ko: '따라만 감', en: 'Just follow', zh: '只跟着' } },
                { score: 4, label: { ko: '짐꾼', en: 'Luggage carrier', zh: '搬运工' } },
                { score: 5, label: { ko: '안 감', en: 'Don\'t go', zh: '不去' } }
            ]
        },
        {
            id: 'sixties_family_7', category: 'relationship', text: { ko: '배우자에게 고맙다는 표현?', en: 'Expressing thanks to spouse?', zh: '向配偶表达感谢？' }, options: [
                { score: 1, label: { ko: '자주 함', en: 'Often do', zh: '经常做' } },
                { score: 2, label: { ko: '가끔 함', en: 'Sometimes do', zh: '偶尔做' } },
                { score: 3, label: { ko: '마음으로만', en: 'Only in heart', zh: '只在心里' } },
                { score: 4, label: { ko: '안 함', en: 'Don\'t do', zh: '不做' } },
                { score: 5, label: { ko: '할 일이 없음', en: 'Nothing to do', zh: '没什么可做' } }
            ]
        },
        {
            id: 'sixties_family_8', category: 'responsibility', text: { ko: '자녀의 재산 요구?', en: 'Children\'s property request?', zh: '子女要求财产？' }, options: [
                { score: 1, label: { ko: '다 줌', en: 'Give all', zh: '全给' } },
                { score: 2, label: { ko: '상황 봐서', en: 'Depending on situation', zh: '看情况' } },
                { score: 3, label: { ko: '절대 안 됨', en: 'Absolutely not', zh: '绝对不行' } },
                { score: 4, label: { ko: '빌려만 줌', en: 'Only lend', zh: '只借' } },
                { score: 5, label: { ko: '자식마다 다름', en: 'Different per child', zh: '每个孩子不同' } }
            ]
        },
        {
            id: 'sixties_family_9', category: 'emotion', text: { ko: '결혼 만족도?', en: 'Marriage satisfaction?', zh: '婚姻满意度？' }, options: [
                { score: 1, label: { ko: '매우 만족', en: 'Very satisfied', zh: '非常满意' } },
                { score: 2, label: { ko: '만족', en: 'Satisfied', zh: '满意' } },
                { score: 3, label: { ko: '보통', en: 'Average', zh: '一般' } },
                { score: 4, label: { ko: '불만족', en: 'Dissatisfied', zh: '不满意' } },
                { score: 5, label: { ko: '매우 불만족', en: 'Very dissatisfied', zh: '非常不满意' } }
            ]
        },
        {
            id: 'sixties_family_10', category: 'values', text: { ko: '사랑이란?', en: 'What is love?', zh: '什么是爱？' }, options: [
                { score: 1, label: { ko: '희생', en: 'Sacrifice', zh: '牺牲' } },
                { score: 2, label: { ko: '동행', en: 'Companionship', zh: '同行' } },
                { score: 3, label: { ko: '책임', en: 'Responsibility', zh: '责任' } },
                { score: 4, label: { ko: '인내', en: 'Patience', zh: '耐心' } },
                { score: 5, label: { ko: '그냥 사는 것', en: 'Just living', zh: '就是生活' } }
            ]
        }
    ]
};

export default SIXTIES_QUESTIONS;
