// 70대 질문 (일상/사회/가족 각 10문항)
export const SEVENTIES_QUESTIONS = {
    daily: [
        {
            id: 'seventies_daily_1', category: 'self', text: { ko: '눈뜨고 가장 먼저 하는 일?', en: 'First thing after waking?', zh: '醒来第一件事？' }, options: [
                { score: 1, label: { ko: '체조', en: 'Exercise', zh: '体操' } },
                { score: 2, label: { ko: '기도/명상', en: 'Prayer/Meditation', zh: '祈祷/冥想' } },
                { score: 3, label: { ko: '물 마시기', en: 'Drink water', zh: '喝水' } },
                { score: 4, label: { ko: '약 먹기', en: 'Take medicine', zh: '吃药' } },
                { score: 5, label: { ko: '한숨', en: 'Sigh', zh: '叹气' } }
            ]
        },
        {
            id: 'seventies_daily_2', category: 'self', text: { ko: '건강 유지 비법?', en: 'Health secret?', zh: '保健秘诀？' }, options: [
                { score: 1, label: { ko: '소식', en: 'Light eating', zh: '少食' } },
                { score: 2, label: { ko: '산책', en: 'Walking', zh: '散步' } },
                { score: 3, label: { ko: '긍정적 마음', en: 'Positive mind', zh: '积极心态' } },
                { score: 4, label: { ko: '병원 치료', en: 'Hospital treatment', zh: '医院治疗' } },
                { score: 5, label: { ko: '잠', en: 'Sleep', zh: '睡觉' } }
            ]
        },
        {
            id: 'seventies_daily_3', category: 'emotion', text: { ko: '하루 중 가장 행복할 때?', en: 'Happiest moment of day?', zh: '一天最幸福时？' }, options: [
                { score: 1, label: { ko: '사람 만날 때', en: 'Meeting people', zh: '见人时' } },
                { score: 2, label: { ko: '자식 전화', en: 'Children\'s call', zh: '孩子电话' } },
                { score: 3, label: { ko: '식사 시간', en: 'Meal time', zh: '用餐时间' } },
                { score: 4, label: { ko: 'TV 시청', en: 'Watching TV', zh: '看电视' } },
                { score: 5, label: { ko: '잘 때', en: 'Sleeping', zh: '睡觉时' } }
            ]
        },
        {
            id: 'seventies_daily_4', category: 'emotion', text: { ko: '병원에 갈 때 마음?', en: 'Feeling when going to hospital?', zh: '去医院心情？' }, options: [
                { score: 1, label: { ko: '고쳐서 더 살자', en: 'Fix and live more', zh: '治好多活' } },
                { score: 2, label: { ko: '관리만 하자', en: 'Just manage', zh: '只管理' } },
                { score: 3, label: { ko: '무덤덤', en: 'Indifferent', zh: '无所谓' } },
                { score: 4, label: { ko: '무섭다', en: 'Scared', zh: '害怕' } },
                { score: 5, label: { ko: '귀찮다', en: 'Bothersome', zh: '麻烦' } }
            ]
        },
        {
            id: 'seventies_daily_5', category: 'self', text: { ko: '요리/집안일?', en: 'Cooking/Housework?', zh: '做饭/家务？' }, options: [
                { score: 1, label: { ko: '즐겁게 함', en: 'Do happily', zh: '快乐做' } },
                { score: 2, label: { ko: '운동 삼아 함', en: 'Do as exercise', zh: '当运动做' } },
                { score: 3, label: { ko: '힘들어도 함', en: 'Do though hard', zh: '虽难也做' } },
                { score: 4, label: { ko: '자식이 해줌', en: 'Children do', zh: '孩子做' } },
                { score: 5, label: { ko: '안 함', en: 'Don\'t do', zh: '不做' } }
            ]
        },
        {
            id: 'seventies_daily_6', category: 'self', text: { ko: '옷장 정리할 때?', en: 'When organizing closet?', zh: '整理衣柜时？' }, options: [
                { score: 1, label: { ko: '아직 화려한 옷', en: 'Still fancy clothes', zh: '还有华丽衣服' } },
                { score: 2, label: { ko: '깔끔한 정장', en: 'Neat suits', zh: '整洁西装' } },
                { score: 3, label: { ko: '편한 옷', en: 'Comfortable clothes', zh: '舒适衣服' } },
                { score: 4, label: { ko: '다 버림', en: 'Throw all away', zh: '全扔掉' } },
                { score: 5, label: { ko: '관심 없음', en: 'Not interested', zh: '不关心' } }
            ]
        },
        {
            id: 'seventies_daily_7', category: 'emotion', text: { ko: '기억력이 예전 같지 않으면?', en: 'If memory not like before?', zh: '记忆力不如从前？' }, options: [
                { score: 1, label: { ko: '메모함', en: 'Take notes', zh: '记笔记' } },
                { score: 2, label: { ko: '자연스럽게 수용', en: 'Accept naturally', zh: '自然接受' } },
                { score: 3, label: { ko: '짜증 남', en: 'Annoyed', zh: '烦躁' } },
                { score: 4, label: { ko: '치매 걱정', en: 'Worry about dementia', zh: '担心痴呆' } },
                { score: 5, label: { ko: '포기', en: 'Give up', zh: '放弃' } }
            ]
        },
        {
            id: 'seventies_daily_8', category: 'values', text: { ko: '좌우명?', en: 'Motto?', zh: '座右铭？' }, options: [
                { score: 1, label: { ko: '청춘은 마음부터', en: 'Youth starts from mind', zh: '青春从心开始' } },
                { score: 2, label: { ko: '순리대로', en: 'Natural course', zh: '顺其自然' } },
                { score: 3, label: { ko: '안분지족', en: 'Contentment', zh: '知足常乐' } },
                { score: 4, label: { ko: '허허허', en: 'Hehe', zh: '呵呵呵' } },
                { score: 5, label: { ko: '죽지 못해 산다', en: 'Live because can\'t die', zh: '活着因为死不了' } }
            ]
        },
        {
            id: 'seventies_daily_9', category: 'relationship', text: { ko: '반려동물?', en: 'Pets?', zh: '宠物？' }, options: [
                { score: 1, label: { ko: '키우고 싶음', en: 'Want to raise', zh: '想养' } },
                { score: 2, label: { ko: '키우는 중', en: 'Currently raising', zh: '正在养' } },
                { score: 3, label: { ko: '반대', en: 'Against', zh: '反对' } },
                { score: 4, label: { ko: '자식이 키우는 것만 봄', en: 'Only see children\'s', zh: '只看孩子养的' } },
                { score: 5, label: { ko: '싫음', en: 'Dislike', zh: '不喜欢' } }
            ]
        },
        {
            id: 'seventies_daily_10', category: 'emotion', text: { ko: '지금 가장 먹고 싶은 것?', en: 'Most want to eat now?', zh: '现在最想吃？' }, options: [
                { score: 1, label: { ko: '맛있는 별미', en: 'Delicious delicacy', zh: '美味佳肴' } },
                { score: 2, label: { ko: '고향 음식', en: 'Hometown food', zh: '家乡菜' } },
                { score: 3, label: { ko: '건강식', en: 'Healthy food', zh: '健康食品' } },
                { score: 4, label: { ko: '죽/부드러운 것', en: 'Porridge/Soft food', zh: '粥/软食' } },
                { score: 5, label: { ko: '없음', en: 'Nothing', zh: '没有' } }
            ]
        }
    ],
    social: [
        {
            id: 'seventies_social_1', category: 'relationship', text: { ko: '인생 상담 요청 시?', en: 'When asked for life advice?', zh: '被要求人生建议？' }, options: [
                { score: 1, label: { ko: '꿈을 가져라', en: 'Have dreams', zh: '要有梦想' } },
                { score: 2, label: { ko: '현실에 충실해라', en: 'Be faithful to reality', zh: '忠于现实' } },
                { score: 3, label: { ko: '다 지나간다', en: 'All will pass', zh: '都会过去' } },
                { score: 4, label: { ko: '착하게 살아라', en: 'Live kindly', zh: '善良生活' } },
                { score: 5, label: { ko: '나도 모른다', en: 'I don\'t know either', zh: '我也不知道' } }
            ]
        },
        {
            id: 'seventies_social_2', category: 'relationship', text: { ko: '노인정/경로당?', en: 'Senior center?', zh: '老年活动中心？' }, options: [
                { score: 1, label: { ko: '절대 안 감(내가 벌써?)', en: 'Never go (Am I already?)', zh: '绝不去(我已经?)' } },
                { score: 2, label: { ko: '가끔 감', en: 'Go sometimes', zh: '偶尔去' } },
                { score: 3, label: { ko: '매일 감', en: 'Go daily', zh: '每天去' } },
                { score: 4, label: { ko: '친구 보러 감', en: 'Go to see friends', zh: '去见朋友' } },
                { score: 5, label: { ko: '싫음', en: 'Dislike', zh: '不喜欢' } }
            ]
        },
        {
            id: 'seventies_social_3', category: 'values', text: { ko: '뉴스 시청 태도?', en: 'News watching attitude?', zh: '看新闻态度？' }, options: [
                { score: 1, label: { ko: '비판하며 봄', en: 'Watch critically', zh: '批判地看' } },
                { score: 2, label: { ko: '꼼꼼히 봄', en: 'Watch carefully', zh: '仔细看' } },
                { score: 3, label: { ko: '세상 참... 하며 봄', en: 'Watch saying "world..."', zh: '看着说"世界..."' } },
                { score: 4, label: { ko: '자식에게 물어봄', en: 'Ask children', zh: '问孩子' } },
                { score: 5, label: { ko: '안 봄', en: 'Don\'t watch', zh: '不看' } }
            ]
        },
        {
            id: 'seventies_social_4', category: 'relationship', text: { ko: '가장 친한 친구와 하는 일?', en: 'What to do with closest friend?', zh: '和最好朋友做什么？' }, options: [
                { score: 1, label: { ko: '여행', en: 'Travel', zh: '旅行' } },
                { score: 2, label: { ko: '수다', en: 'Chat', zh: '聊天' } },
                { score: 3, label: { ko: '산책', en: 'Walk', zh: '散步' } },
                { score: 4, label: { ko: '병원 동행', en: 'Hospital companion', zh: '陪同就医' } },
                { score: 5, label: { ko: '연락만 함', en: 'Only contact', zh: '只联系' } }
            ]
        },
        {
            id: 'seventies_social_5', category: 'relationship', text: { ko: '젊은이들에게 한마디?', en: 'A word to young people?', zh: '对年轻人一句话？' }, options: [
                { score: 1, label: { ko: '즐겨라', en: 'Enjoy', zh: '享受' } },
                { score: 2, label: { ko: '참아라', en: 'Endure', zh: '忍耐' } },
                { score: 3, label: { ko: '사랑해라', en: 'Love', zh: '爱' } },
                { score: 4, label: { ko: '아껴라', en: 'Cherish', zh: '珍惜' } },
                { score: 5, label: { ko: '할 말 없다', en: 'Nothing to say', zh: '没话说' } }
            ]
        },
        {
            id: 'seventies_social_6', category: 'self', text: { ko: '장례식에 대한 생각?', en: 'Thoughts on funeral?', zh: '对葬礼想法？' }, options: [
                { score: 1, label: { ko: '축제처럼', en: 'Like festival', zh: '像节日' } },
                { score: 2, label: { ko: '조용히 가족장', en: 'Quiet family funeral', zh: '安静家庭葬' } },
                { score: 3, label: { ko: '준비 다 해둠', en: 'All prepared', zh: '都准备好' } },
                { score: 4, label: { ko: '생각하기 싫음', en: 'Don\'t want to think', zh: '不想想' } },
                { score: 5, label: { ko: '모르겠다', en: 'Don\'t know', zh: '不知道' } }
            ]
        },
        {
            id: 'seventies_social_7', category: 'self', text: { ko: '나의 마지막 모습?', en: 'My final appearance?', zh: '我的最后样子？' }, options: [
                { score: 1, label: { ko: '자고 있듯 편안히', en: 'Peaceful like sleeping', zh: '像睡觉般安详' } },
                { score: 2, label: { ko: '가족들 사이에서', en: 'Among family', zh: '在家人中' } },
                { score: 3, label: { ko: '자랑스럽게', en: 'Proudly', zh: '自豪地' } },
                { score: 4, label: { ko: '홀가분하게', en: 'Lightly', zh: '轻松地' } },
                { score: 5, label: { ko: '슬프게', en: 'Sadly', zh: '悲伤地' } }
            ]
        },
        {
            id: 'seventies_social_8', category: 'values', text: { ko: '남기고 싶은 유산?', en: 'Legacy to leave?', zh: '想留下遗产？' }, options: [
                { score: 1, label: { ko: '돈', en: 'Money', zh: '钱' } },
                { score: 2, label: { ko: '지혜', en: 'Wisdom', zh: '智慧' } },
                { score: 3, label: { ko: '사랑', en: 'Love', zh: '爱' } },
                { score: 4, label: { ko: '이름', en: 'Name', zh: '名字' } },
                { score: 5, label: { ko: '없음', en: 'Nothing', zh: '没有' } }
            ]
        },
        {
            id: 'seventies_social_9', category: 'emotion', text: { ko: '삶의 무게?', en: 'Weight of life?', zh: '生命的重量？' }, options: [
                { score: 1, label: { ko: '여전히 무거움', en: 'Still heavy', zh: '依然沉重' } },
                { score: 2, label: { ko: '적당함', en: 'Moderate', zh: '适度' } },
                { score: 3, label: { ko: '가벼워짐', en: 'Becoming light', zh: '变轻' } },
                { score: 4, label: { ko: '다 내려놓음', en: 'Let all go', zh: '全放下' } },
                { score: 5, label: { ko: '무거웠지...', en: 'Was heavy...', zh: '曾经沉重...' } }
            ]
        },
        {
            id: 'seventies_social_10', category: 'self', text: { ko: '당신은 성공한 인생인가요?', en: 'Are you a successful life?', zh: '你是成功的人生吗？' }, options: [
                { score: 1, label: { ko: '매우 그렇다', en: 'Very much so', zh: '非常是' } },
                { score: 2, label: { ko: '그렇다', en: 'Yes', zh: '是' } },
                { score: 3, label: { ko: '보통이다', en: 'Average', zh: '一般' } },
                { score: 4, label: { ko: '아니다', en: 'No', zh: '不是' } },
                { score: 5, label: { ko: '실패했다', en: 'Failed', zh: '失败了' } }
            ]
        }
    ],
    family: [
        {
            id: 'seventies_family_1', category: 'relationship', text: { ko: '배우자에게 마지막 인사?', en: 'Last words to spouse?', zh: '对配偶最后的话？' }, options: [
                { score: 1, label: { ko: '사랑해', en: 'I love you', zh: '我爱你' } },
                { score: 2, label: { ko: '고마워', en: 'Thank you', zh: '谢谢' } },
                { score: 3, label: { ko: '미안해', en: 'I\'m sorry', zh: '对不起' } },
                { score: 4, label: { ko: '다음 생에도', en: 'In next life too', zh: '下辈子也' } },
                { score: 5, label: { ko: '잘 있어', en: 'Take care', zh: '保重' } }
            ]
        },
        {
            id: 'seventies_family_2', category: 'emotion', text: { ko: '자녀들이 찾아오면?', en: 'When children visit?', zh: '孩子来访？' }, options: [
                { score: 1, label: { ko: '오래 있길 바람', en: 'Hope they stay long', zh: '希望久留' } },
                { score: 2, label: { ko: '음식 싸줌', en: 'Pack food', zh: '打包食物' } },
                { score: 3, label: { ko: '용돈 줌', en: 'Give money', zh: '给钱' } },
                { score: 4, label: { ko: '빨리 가길 바람(피곤)', en: 'Hope leave soon (tired)', zh: '希望快走(累)' } },
                { score: 5, label: { ko: '무덤덤', en: 'Indifferent', zh: '无所谓' } }
            ]
        },
        {
            id: 'seventies_family_3', category: 'emotion', text: { ko: '첫사랑의 기억?', en: 'First love memory?', zh: '初恋记忆？' }, options: [
                { score: 1, label: { ko: '어제처럼 생생', en: 'Vivid like yesterday', zh: '像昨天般生动' } },
                { score: 2, label: { ko: '가끔 생각남', en: 'Think sometimes', zh: '偶尔想起' } },
                { score: 3, label: { ko: '가물가물', en: 'Vague', zh: '模糊' } },
                { score: 4, label: { ko: '잊었음', en: 'Forgot', zh: '忘了' } },
                { score: 5, label: { ko: '부질없음', en: 'Futile', zh: '无用' } }
            ]
        },
        {
            id: 'seventies_family_4', category: 'emotion', text: { ko: '손주들이 부를 때?', en: 'When grandchildren call?', zh: '孙子叫时？' }, options: [
                { score: 1, label: { ko: '세상에서 제일 행복', en: 'Happiest in world', zh: '世界最幸福' } },
                { score: 2, label: { ko: '기특함', en: 'Proud', zh: '自豪' } },
                { score: 3, label: { ko: '정신없음', en: 'Chaotic', zh: '混乱' } },
                { score: 4, label: { ko: '힘듦', en: 'Tiring', zh: '累' } },
                { score: 5, label: { ko: '그냥 좋음', en: 'Just good', zh: '就是好' } }
            ]
        },
        {
            id: 'seventies_family_5', category: 'relationship', text: { ko: '부부끼리 손잡고 걷기?', en: 'Walking hand in hand?', zh: '夫妻牵手走？' }, options: [
                { score: 1, label: { ko: '자주 함', en: 'Often do', zh: '经常做' } },
                { score: 2, label: { ko: '가끔 함', en: 'Sometimes do', zh: '偶尔做' } },
                { score: 3, label: { ko: '창피함', en: 'Embarrassing', zh: '尴尬' } },
                { score: 4, label: { ko: '지팡이 대신 잡음', en: 'Hold instead of cane', zh: '代替拐杖握' } },
                { score: 5, label: { ko: '안 걸음', en: 'Don\'t walk', zh: '不走' } }
            ]
        },
        {
            id: 'seventies_family_6', category: 'emotion', text: { ko: '자녀에 대한 마음?', en: 'Feelings toward children?', zh: '对子女心情？' }, options: [
                { score: 1, label: { ko: '다 주고 싶음', en: 'Want to give all', zh: '想全给' } },
                { score: 2, label: { ko: '기대고 싶음', en: 'Want to lean on', zh: '想依靠' } },
                { score: 3, label: { ko: '미안함', en: 'Sorry', zh: '抱歉' } },
                { score: 4, label: { ko: '자랑스러움', en: 'Proud', zh: '自豪' } },
                { score: 5, label: { ko: '걱정뿐', en: 'Only worry', zh: '只担心' } }
            ]
        },
        {
            id: 'seventies_family_7', category: 'relationship', text: { ko: '사위/며느리에 대한 생각?', en: 'Thoughts on son/daughter-in-law?', zh: '对女婿/儿媳想法？' }, options: [
                { score: 1, label: { ko: '내 자식', en: 'My child', zh: '我的孩子' } },
                { score: 2, label: { ko: '손님', en: 'Guest', zh: '客人' } },
                { score: 3, label: { ko: '어려운 사람', en: 'Difficult person', zh: '难相处的人' } },
                { score: 4, label: { ko: '남', en: 'Stranger', zh: '外人' } },
                { score: 5, label: { ko: '밉다', en: 'Dislike', zh: '讨厌' } }
            ]
        },
        {
            id: 'seventies_family_8', category: 'relationship', text: { ko: '배우자와의 대화?', en: 'Conversation with spouse?', zh: '和配偶对话？' }, options: [
                { score: 1, label: { ko: '끝이 없음', en: 'Endless', zh: '无尽' } },
                { score: 2, label: { ko: '필요한 것만', en: 'Only necessary', zh: '只必要的' } },
                { score: 3, label: { ko: '거의 안 함', en: 'Rarely do', zh: '几乎不' } },
                { score: 4, label: { ko: '다툼', en: 'Arguing', zh: '争吵' } },
                { score: 5, label: { ko: '서로 쳐다만 봄', en: 'Just look at each other', zh: '只互相看' } }
            ]
        },
        {
            id: 'seventies_family_9', category: 'values', text: { ko: '사랑이란 무엇인가?', en: 'What is love?', zh: '什么是爱？' }, options: [
                { score: 1, label: { ko: '영혼의 결합', en: 'Union of souls', zh: '灵魂结合' } },
                { score: 2, label: { ko: '삶의 지탱', en: 'Life support', zh: '生命支撑' } },
                { score: 3, label: { ko: '공기 같은 것', en: 'Like air', zh: '像空气' } },
                { score: 4, label: { ko: '아픔', en: 'Pain', zh: '痛苦' } },
                { score: 5, label: { ko: '몰라', en: 'Don\'t know', zh: '不知道' } }
            ]
        },
        {
            id: 'seventies_family_10', category: 'emotion', text: { ko: '지금 곁에 누가 있나요?', en: 'Who is beside you now?', zh: '现在谁在身边？' }, options: [
                { score: 1, label: { ko: '사랑하는 이', en: 'Loved one', zh: '爱人' } },
                { score: 2, label: { ko: '가족', en: 'Family', zh: '家人' } },
                { score: 3, label: { ko: '친구', en: 'Friend', zh: '朋友' } },
                { score: 4, label: { ko: '간병인', en: 'Caregiver', zh: '护理员' } },
                { score: 5, label: { ko: '나 혼자', en: 'Alone', zh: '我一个人' } }
            ]
        }
    ]
};

export default SEVENTIES_QUESTIONS;
