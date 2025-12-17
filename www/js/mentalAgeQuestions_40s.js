// ==================== 40대 (중년기) ====================
export const FORTIES_QUESTIONS = {
    daily: [
        {
            id: 'forties_daily_1', category: 'emotion', text: { ko: '아침에 눈떴을 때?', en: 'When you wake up?', zh: '早上醒来时？' }, options: [
                { score: 1, label: { ko: '더 자고 싶다', en: 'Want to sleep more', zh: '想再睡' } },
                { score: 2, label: { ko: '오늘도 파이팅', en: 'Fighting today too', zh: '今天也加油' } },
                { score: 3, label: { ko: '일어나기 힘들다', en: 'Hard to get up', zh: '难起床' } },
                { score: 4, label: { ko: '건강 생각하며 스트레칭', en: 'Stretch thinking of health', zh: '想着健康做伸展' } },
                { score: 5, label: { ko: '명상으로 하루 시작', en: 'Start day with meditation', zh: '以冥想开始一天' } }
            ]
        },
        {
            id: 'forties_daily_2', category: 'values', text: { ko: '자녀 교육에 대해?', en: 'About children\'s education?', zh: '关于子女教育？' }, options: [
                { score: 1, label: { ko: '최고의 학원 지원', en: 'Support best academy', zh: '支持最好的学院' } },
                { score: 2, label: { ko: '하고 싶은 거 시킴', en: 'Let them do what they want', zh: '让他们做想做的' } },
                { score: 3, label: { ko: '기본만 함', en: 'Just basics', zh: '只做基本的' } },
                { score: 4, label: { ko: '건강하게만 자라라', en: 'Just grow healthy', zh: '只要健康成长' } },
                { score: 5, label: { ko: '자녀의 인성 교육 집중', en: 'Focus on character education', zh: '专注品格教育' } }
            ]
        },
        {
            id: 'forties_daily_3', category: 'self', text: { ko: '노화 방지를 위해?', en: 'To prevent aging?', zh: '为了防止衰老？' }, options: [
                { score: 1, label: { ko: '시술/성형', en: 'Procedures/Plastic surgery', zh: '医美/整形' } },
                { score: 2, label: { ko: '비싼 화장품', en: 'Expensive cosmetics', zh: '昂贵化妆品' } },
                { score: 3, label: { ko: '규칙적 운동', en: 'Regular exercise', zh: '规律运动' } },
                { score: 4, label: { ko: '충분한 휴식/영양', en: 'Sufficient rest/nutrition', zh: '充足休息/营养' } },
                { score: 5, label: { ko: '내면의 평온 유지', en: 'Maintain inner peace', zh: '保持内心平静' } }
            ]
        },
        {
            id: 'forties_daily_4', category: 'relationship', text: { ko: '동창회 모임 성격?', en: 'Alumni gathering nature?', zh: '同学会性质？' }, options: [
                { score: 1, label: { ko: '누가 잘나갔나 확인', en: 'Check who succeeded', zh: '看谁成功了' } },
                { score: 2, label: { ko: '옛 친구와 수다', en: 'Chat with old friends', zh: '和老朋友聊天' } },
                { score: 3, label: { ko: '인맥 확보', en: 'Secure connections', zh: '确保人脉' } },
                { score: 4, label: { ko: '의무적 참석', en: 'Obligatory attendance', zh: '义务出席' } },
                { score: 5, label: { ko: '안 나감', en: 'Don\'t attend', zh: '不参加' } }
            ]
        },
        {
            id: 'forties_daily_5', category: 'emotion', text: { ko: '나만의 스트레스 해소?', en: 'My stress relief?', zh: '我的压力缓解？' }, options: [
                { score: 1, label: { ko: '음주/가무', en: 'Drinking/Dancing', zh: '喝酒/歌舞' } },
                { score: 2, label: { ko: '쇼핑', en: 'Shopping', zh: '购物' } },
                { score: 3, label: { ko: '운동', en: 'Exercise', zh: '运动' } },
                { score: 4, label: { ko: '조용한 여행', en: 'Quiet travel', zh: '安静旅行' } },
                { score: 5, label: { ko: '독서/글쓰기', en: 'Reading/Writing', zh: '阅读/写作' } }
            ]
        },
        {
            id: 'forties_daily_6', category: 'self', text: { ko: '전자기기 사용 능력?', en: 'Electronic device skills?', zh: '电子设备使用能力？' }, options: [
                { score: 1, label: { ko: '젊은이만큼 잘함', en: 'As good as young people', zh: '和年轻人一样好' } },
                { score: 2, label: { ko: '필요한 건 배움', en: 'Learn what\'s needed', zh: '学习需要的' } },
                { score: 3, label: { ko: '자식에게 물어봄', en: 'Ask children', zh: '问孩子' } },
                { score: 4, label: { ko: '쓰던 것만 씀', en: 'Only use familiar ones', zh: '只用熟悉的' } },
                { score: 5, label: { ko: '기계가 싫음', en: 'Dislike machines', zh: '讨厌机器' } }
            ]
        },
        {
            id: 'forties_daily_7', category: 'values', text: { ko: '정치/사회 뉴스?', en: 'Politics/Social news?', zh: '政治/社会新闻？' }, options: [
                { score: 1, label: { ko: '적극적 참여/토론', en: 'Active participation/debate', zh: '积极参与/讨论' } },
                { score: 2, label: { ko: '관심 있게 시청', en: 'Watch with interest', zh: '有兴趣观看' } },
                { score: 3, label: { ko: '내 생각 확고', en: 'My opinion is firm', zh: '我的想法坚定' } },
                { score: 4, label: { ko: '답답해서 안 봄', en: 'Don\'t watch, frustrating', zh: '不看，太烦' } },
                { score: 5, label: { ko: '객관적 관망', en: 'Objective observation', zh: '客观观察' } }
            ]
        },
        {
            id: 'forties_daily_8', category: 'responsibility', text: { ko: '가계부 쓰시나요?', en: 'Do you keep household accounts?', zh: '记账吗？' }, options: [
                { score: 1, label: { ko: '안 씀', en: 'Don\'t keep', zh: '不记' } },
                { score: 2, label: { ko: '머릿속으로 계산', en: 'Calculate in head', zh: '心算' } },
                { score: 3, label: { ko: '앱으로 대충 기록', en: 'Roughly record with app', zh: '用应用粗略记录' } },
                { score: 4, label: { ko: '꼼꼼히 기록', en: 'Record meticulously', zh: '仔细记录' } },
                { score: 5, label: { ko: '자산 전문가에게 상담', en: 'Consult asset expert', zh: '咨询资产专家' } }
            ]
        },
        {
            id: 'forties_daily_9', category: 'relationship', text: { ko: '부모님에 대한 마음?', en: 'Feelings toward parents?', zh: '对父母的心情？' }, options: [
                { score: 1, label: { ko: '죄송함 가득', en: 'Full of sorry', zh: '充满歉意' } },
                { score: 2, label: { ko: '효도하려 노력', en: 'Try to be filial', zh: '努力尽孝' } },
                { score: 3, label: { ko: '자주 찾아뵘', en: 'Visit often', zh: '经常拜访' } },
                { score: 4, label: { ko: '건강이 제일 걱정', en: 'Health is biggest worry', zh: '健康最担心' } },
                { score: 5, label: { ko: '내 미래 모습 같음', en: 'Like my future self', zh: '像我的未来' } }
            ]
        },
        {
            id: 'forties_daily_10', category: 'responsibility', text: { ko: '노후 준비 상태?', en: 'Retirement preparation status?', zh: '养老准备状态？' }, options: [
                { score: 1, label: { ko: '이제 생각 중', en: 'Just thinking now', zh: '现在才想' } },
                { score: 2, label: { ko: '저축 위주', en: 'Focus on savings', zh: '以储蓄为主' } },
                { score: 3, label: { ko: '연금/부동산 확보', en: 'Secure pension/real estate', zh: '确保养老金/房产' } },
                { score: 4, label: { ko: '준비 완료', en: 'Preparation complete', zh: '准备完成' } },
                { score: 5, label: { ko: '삶을 정리하는 중', en: 'Organizing life', zh: '整理生活中' } }
            ]
        }
    ],

    work: [
        {
            id: 'forties_work_1', category: 'relationship', text: { ko: '후배들과의 대화?', en: 'Conversation with juniors?', zh: '和后辈的对话？' }, options: [
                { score: 1, label: { ko: '내가 주도함', en: 'I lead', zh: '我主导' } },
                { score: 2, label: { ko: '공통점 찾으려 노력', en: 'Try to find common ground', zh: '努力找共同点' } },
                { score: 3, label: { ko: '듣기만 함', en: 'Just listen', zh: '只听' } },
                { score: 4, label: { ko: '조심스러움', en: 'Cautious', zh: '谨慎' } },
                { score: 5, label: { ko: '가르치려 듦(꼰대)', en: 'Try to teach (old-fashioned)', zh: '试图教导(老派)' } }
            ]
        },
        {
            id: 'forties_work_2', category: 'responsibility', text: { ko: '직급에 따른 책임감?', en: 'Responsibility by position?', zh: '职位的责任感？' }, options: [
                { score: 1, label: { ko: '권력이 즐거움', en: 'Power is enjoyable', zh: '权力令人愉快' } },
                { score: 2, label: { ko: '책임이 무거움', en: 'Responsibility is heavy', zh: '责任沉重' } },
                { score: 3, label: { ko: '그냥 하던 대로', en: 'Just as before', zh: '照常做' } },
                { score: 4, label: { ko: '번아웃 옴', en: 'Burnout comes', zh: '精疲力竭' } },
                { score: 5, label: { ko: '후배 양성에 보람', en: 'Rewarding to nurture juniors', zh: '培养后辈有成就感' } }
            ]
        },
        {
            id: 'forties_work_3', category: 'values', text: { ko: '은퇴 시점 고려?', en: 'Considering retirement timing?', zh: '考虑退休时间？' }, options: [
                { score: 1, label: { ko: '최대한 늦게', en: 'As late as possible', zh: '尽可能晚' } },
                { score: 2, label: { ko: '정년까지', en: 'Until retirement age', zh: '到退休年龄' } },
                { score: 3, label: { ko: '준비되면 바로', en: 'Right when ready', zh: '准备好就' } },
                { score: 4, label: { ko: '이미 준비함', en: 'Already prepared', zh: '已经准备' } },
                { score: 5, label: { ko: '사회 공헌으로 전환', en: 'Transition to social contribution', zh: '转向社会贡献' } }
            ]
        },
        {
            id: 'forties_work_4', category: 'self', text: { ko: '업무 효율성?', en: 'Work efficiency?', zh: '工作效率？' }, options: [
                { score: 1, label: { ko: '경험으로 빠르게', en: 'Fast with experience', zh: '凭经验快速' } },
                { score: 2, label: { ko: '새로운 툴 도입', en: 'Introduce new tools', zh: '引入新工具' } },
                { score: 3, label: { ko: '천천히 꼼꼼히', en: 'Slowly and meticulously', zh: '慢慢仔细' } },
                { score: 4, label: { ko: '남에게 시키기', en: 'Delegate to others', zh: '让别人做' } },
                { score: 5, label: { ko: '선택과 집중', en: 'Select and focus', zh: '选择和集中' } }
            ]
        },
        {
            id: 'forties_work_5', category: 'relationship', text: { ko: '회사 내 평판?', en: 'Reputation in company?', zh: '公司内声誉？' }, options: [
                { score: 1, label: { ko: '열정적인 선배', en: 'Passionate senior', zh: '热情的前辈' } },
                { score: 2, label: { ko: '까칠하지만 일 잘함', en: 'Picky but works well', zh: '挑剔但工作好' } },
                { score: 3, label: { ko: '무난한 선배', en: 'Decent senior', zh: '平稳的前辈' } },
                { score: 4, label: { ko: '존경받는 멘토', en: 'Respected mentor', zh: '受尊敬的导师' } },
                { score: 5, label: { ko: '존재감 없음', en: 'No presence', zh: '没存在感' } }
            ]
        },
        {
            id: 'forties_work_6', category: 'relationship', text: { ko: '회의 주재 스타일?', en: 'Meeting hosting style?', zh: '主持会议风格？' }, options: [
                { score: 1, label: { ko: '답정너', en: 'Answer already decided', zh: '答案已定' } },
                { score: 2, label: { ko: '민주적 의견 수렴', en: 'Democratic opinion gathering', zh: '民主意见收集' } },
                { score: 3, label: { ko: '효율적 결론', en: 'Efficient conclusion', zh: '高效结论' } },
                { score: 4, label: { ko: '조용히 경청', en: 'Quietly listen', zh: '安静倾听' } },
                { score: 5, label: { ko: '지시 위주', en: 'Instruction-focused', zh: '以指示为主' } }
            ]
        },
        {
            id: 'forties_work_7', category: 'values', text: { ko: '이직 제안이 온다면?', en: 'If job offer comes?', zh: '如果有工作邀请？' }, options: [
                { score: 1, label: { ko: '모험하고 싶음', en: 'Want to adventure', zh: '想冒险' } },
                { score: 2, label: { ko: '조건 좋으면 감', en: 'Go if conditions good', zh: '条件好就去' } },
                { score: 3, label: { ko: '안정성 따짐', en: 'Consider stability', zh: '考虑稳定性' } },
                { score: 4, label: { ko: '가족과 상의', en: 'Consult with family', zh: '和家人商量' } },
                { score: 5, label: { ko: '절대 안 감', en: 'Absolutely won\'t go', zh: '绝对不去' } }
            ]
        },
        {
            id: 'forties_work_8', category: 'values', text: { ko: '직장 생활의 의미?', en: 'Meaning of work life?', zh: '职场生活的意义？' }, options: [
                { score: 1, label: { ko: '자아실현', en: 'Self-actualization', zh: '自我实现' } },
                { score: 2, label: { ko: '가족 부양', en: 'Family support', zh: '养家' } },
                { score: 3, label: { ko: '사회적 신분', en: 'Social status', zh: '社会地位' } },
                { score: 4, label: { ko: '돈 버는 곳', en: 'Place to earn money', zh: '赚钱的地方' } },
                { score: 5, label: { ko: '인생의 터전', en: 'Life foundation', zh: '人生基础' } }
            ]
        },
        {
            id: 'forties_work_9', category: 'self', text: { ko: '새로운 업무 도전?', en: 'New work challenge?', zh: '新工作挑战？' }, options: [
                { score: 1, label: { ko: '자신 있음', en: 'Confident', zh: '有信心' } },
                { score: 2, label: { ko: '두렵지만 도전', en: 'Scared but challenge', zh: '害怕但挑战' } },
                { score: 3, label: { ko: '남 시키고 싶음', en: 'Want others to do', zh: '想让别人做' } },
                { score: 4, label: { ko: '하던 것만 하고 싶음', en: 'Want to do only familiar', zh: '只想做熟悉的' } },
                { score: 5, label: { ko: '필요성 못 느낌', en: 'Don\'t feel necessity', zh: '感觉不到必要性' } }
            ]
        },
        {
            id: 'forties_work_10', category: 'responsibility', text: { ko: '야근에 대한 태도?', en: 'Attitude toward overtime?', zh: '对加班的态度？' }, options: [
                { score: 1, label: { ko: '필요하면 기꺼이', en: 'Willingly if needed', zh: '需要就愿意' } },
                { score: 2, label: { ko: '억지로 함', en: 'Do it reluctantly', zh: '勉强做' } },
                { score: 3, label: { ko: '절대 사절', en: 'Absolutely refuse', zh: '绝对拒绝' } },
                { score: 4, label: { ko: '효율적 시간 활용', en: 'Efficient time use', zh: '高效利用时间' } },
                { score: 5, label: { ko: '관리 감독만 함', en: 'Only supervise', zh: '只监督' } }
            ]
        }
    ],

    romance: [
        {
            id: 'forties_romance_1', category: 'relationship', text: { ko: '배우자와의 대화 주제?', en: 'Conversation topics with spouse?', zh: '和配偶的对话主题？' }, options: [
                { score: 1, label: { ko: '자녀 이야기', en: 'Children stories', zh: '孩子的事' } },
                { score: 2, label: { ko: '돈/재테크', en: 'Money/Finance', zh: '钱/理财' } },
                { score: 3, label: { ko: '어제 본 TV', en: 'TV watched yesterday', zh: '昨天看的电视' } },
                { score: 4, label: { ko: '깊은 속마음', en: 'Deep inner thoughts', zh: '深层内心' } },
                { score: 5, label: { ko: '거의 안 함', en: 'Rarely talk', zh: '几乎不谈' } }
            ]
        },
        {
            id: 'forties_romance_2', category: 'relationship', text: { ko: '스킨십에 대해?', en: 'About physical affection?', zh: '关于肢体接触？' }, options: [
                { score: 1, label: { ko: '여전히 뜨거움', en: 'Still hot', zh: '依然热烈' } },
                { score: 2, label: { ko: '가끔 표현', en: 'Express occasionally', zh: '偶尔表达' } },
                { score: 3, label: { ko: '손잡는 정도', en: 'Just holding hands', zh: '只牵手' } },
                { score: 4, label: { ko: '쑥스러움', en: 'Shy', zh: '害羞' } },
                { score: 5, label: { ko: '의리로 삶', en: 'Live by duty', zh: '靠义气生活' } }
            ]
        },
        {
            id: 'forties_romance_3', category: 'emotion', text: { ko: '배우자의 단점이 보일 때?', en: 'When seeing spouse\'s flaws?', zh: '看到配偶缺点时？' }, options: [
                { score: 1, label: { ko: '대놓고 지적', en: 'Point out openly', zh: '公开指出' } },
                { score: 2, label: { ko: '참고 넘김', en: 'Endure and pass', zh: '忍耐过去' } },
                { score: 3, label: { ko: '우회적으로 표현', en: 'Express indirectly', zh: '间接表达' } },
                { score: 4, label: { ko: '나도 똑같겠지 이해', en: 'Understand I\'m same', zh: '理解我也一样' } },
                { score: 5, label: { ko: '해탈함', en: 'Enlightened', zh: '超脱' } }
            ]
        },
        {
            id: 'forties_romance_4', category: 'values', text: { ko: '다시 태어나면 배우자와?', en: 'If reborn, with spouse?', zh: '重生的话和配偶？' }, options: [
                { score: 1, label: { ko: '무조건 다시', en: 'Definitely again', zh: '绝对再来' } },
                { score: 2, label: { ko: '한 번쯤 고민', en: 'Think about it once', zh: '考虑一下' } },
                { score: 3, label: { ko: '다른 사람과', en: 'With someone else', zh: '和别人' } },
                { score: 4, label: { ko: '혼자 살고 싶음', en: 'Want to live alone', zh: '想独自生活' } },
                { score: 5, label: { ko: '생각해본 적 없음', en: 'Never thought about', zh: '从未想过' } }
            ]
        },
        {
            id: 'forties_romance_5', category: 'relationship', text: { ko: '부부 싸움 후 화해?', en: 'Reconciliation after fight?', zh: '吵架后和解？' }, options: [
                { score: 1, label: { ko: '선물로 공세', en: 'Gift offensive', zh: '礼物攻势' } },
                { score: 2, label: { ko: '먼저 말 걸기', en: 'Talk first', zh: '先说话' } },
                { score: 3, label: { ko: '자연스럽게 해결', en: 'Naturally resolve', zh: '自然解决' } },
                { score: 4, label: { ko: '대화로 풀기', en: 'Solve through talk', zh: '通过对话解决' } },
                { score: 5, label: { ko: '냉전 지속', en: 'Continue cold war', zh: '持续冷战' } }
            ]
        },
        {
            id: 'forties_romance_6', category: 'self', text: { ko: '배우자 없는 자유 시간?', en: 'Free time without spouse?', zh: '没有配偶的自由时间？' }, options: [
                { score: 1, label: { ko: '너무 좋아', en: 'Love it', zh: '太好了' } },
                { score: 2, label: { ko: '불안하고 허전', en: 'Anxious and empty', zh: '不安和空虚' } },
                { score: 3, label: { ko: '그냥 평소와 같음', en: 'Just like usual', zh: '和平时一样' } },
                { score: 4, label: { ko: '친구들 만남', en: 'Meet friends', zh: '见朋友' } },
                { score: 5, label: { ko: '취미에 몰두', en: 'Immerse in hobbies', zh: '沉浸于爱好' } }
            ]
        },
        {
            id: 'forties_romance_7', category: 'values', text: { ko: '졸혼에 대한 생각?', en: 'Thoughts on grad-divorce?', zh: '对毕业离婚的想法？' }, options: [
                { score: 1, label: { ko: '적극 공감', en: 'Strongly empathize', zh: '强烈共鸣' } },
                { score: 2, label: { ko: '상황 따라 가능', en: 'Possible depending on situation', zh: '视情况可能' } },
                { score: 3, label: { ko: '이해 안 됨', en: 'Don\'t understand', zh: '不理解' } },
                { score: 4, label: { ko: '배우자랑 상의해봄', en: 'Discuss with spouse', zh: '和配偶商量' } },
                { score: 5, label: { ko: '부정적', en: 'Negative', zh: '负面' } }
            ]
        },
        {
            id: 'forties_romance_8', category: 'relationship', text: { ko: '결혼 만족도 점수?', en: 'Marriage satisfaction score?', zh: '婚姻满意度分数？' }, options: [
                { score: 1, label: { ko: '100점', en: '100 points', zh: '100分' } },
                { score: 2, label: { ko: '80점', en: '80 points', zh: '80分' } },
                { score: 3, label: { ko: '50점', en: '50 points', zh: '50分' } },
                { score: 4, label: { ko: '30점', en: '30 points', zh: '30分' } },
                { score: 5, label: { ko: '0점', en: '0 points', zh: '0分' } }
            ]
        },
        {
            id: 'forties_romance_9', category: 'relationship', text: { ko: '배우자의 취미 생활?', en: 'Spouse\'s hobby activities?', zh: '配偶的爱好活动？' }, options: [
                { score: 1, label: { ko: '함께 함', en: 'Do together', zh: '一起做' } },
                { score: 2, label: { ko: '지원해줌', en: 'Support', zh: '支持' } },
                { score: 3, label: { ko: '상관 안 함', en: 'Don\'t care', zh: '不关心' } },
                { score: 4, label: { ko: '돈 쓴다고 잔소리', en: 'Nag about spending', zh: '唠叨花钱' } },
                { score: 5, label: { ko: '나도 내 거 함', en: 'I do mine too', zh: '我也做我的' } }
            ]
        },
        {
            id: 'forties_romance_10', category: 'values', text: { ko: '사랑의 유효기간?', en: 'Love\'s expiration date?', zh: '爱的有效期？' }, options: [
                { score: 1, label: { ko: '영원함', en: 'Forever', zh: '永远' } },
                { score: 2, label: { ko: '3년', en: '3 years', zh: '3年' } },
                { score: 3, label: { ko: '10년', en: '10 years', zh: '10年' } },
                { score: 4, label: { ko: '아이 낳을 때까지', en: 'Until having children', zh: '到生孩子为止' } },
                { score: 5, label: { ko: '정으로 사는 것', en: 'Living by affection', zh: '靠感情生活' } }
            ]
        }
    ]
};

export default FORTIES_QUESTIONS;
