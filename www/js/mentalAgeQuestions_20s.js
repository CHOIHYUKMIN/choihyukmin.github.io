// ==================== 20대 (청년기) ====================
export const TWENTIES_QUESTIONS = {
    daily: [
        {
            id: 'twenties_daily_1',
            category: 'self',
            text: {
                ko: '주말 아침 나의 일상은?',
                en: 'My weekend morning routine?',
                zh: '周末早晨的日常？'
            },
            options: [
                { score: 1, label: { ko: '낮까지 늦잠', en: 'Sleep until noon', zh: '睡到中午' } },
                { score: 2, label: { ko: 'SNS 핫플 탐방', en: 'Explore SNS hotspots', zh: '探索社交媒体热点' } },
                { score: 3, label: { ko: '친구와 약속', en: 'Meet friends', zh: '和朋友约会' } },
                { score: 4, label: { ko: '밀린 집안일', en: 'Catch up on housework', zh: '做积压的家务' } },
                { score: 5, label: { ko: '자기계발/운동', en: 'Self-improvement/Exercise', zh: '自我提升/运动' } }
            ]
        },
        {
            id: 'twenties_daily_2',
            category: 'responsibility',
            text: {
                ko: '첫 취업비/알바비를 받으면?',
                en: 'When you get first salary/part-time pay?',
                zh: '拿到第一份工资/兼职费？'
            },
            options: [
                { score: 1, label: { ko: '나를 위한 명품 구매', en: 'Buy luxury for myself', zh: '给自己买奢侈品' } },
                { score: 2, label: { ko: '여행 자금 저축', en: 'Save for travel', zh: '存旅行基金' } },
                { score: 3, label: { ko: '부모님 용돈', en: 'Give parents allowance', zh: '给父母零花钱' } },
                { score: 4, label: { ko: '생활비 관리', en: 'Manage living expenses', zh: '管理生活费' } },
                { score: 5, label: { ko: '투자 공부 시작', en: 'Start studying investment', zh: '开始学习投资' } }
            ]
        },
        {
            id: 'twenties_daily_3',
            category: 'relationship',
            text: {
                ko: '술자리에서의 내 포지션?',
                en: 'My position at drinking gatherings?',
                zh: '酒局上的我？'
            },
            options: [
                { score: 1, label: { ko: '분위기 메이커', en: 'Mood maker', zh: '气氛制造者' } },
                { score: 2, label: { ko: '안주 킬러', en: 'Snack killer', zh: '下酒菜杀手' } },
                { score: 3, label: { ko: '상담가', en: 'Counselor', zh: '倾听者' } },
                { score: 4, label: { ko: '적당히 마시고 조절', en: 'Drink moderately and control', zh: '适度饮酒控制' } },
                { score: 5, label: { ko: '술보단 대화 집중', en: 'Focus on conversation over drinks', zh: '专注对话而非酒' } }
            ]
        },
        {
            id: 'twenties_daily_4',
            category: 'values',
            text: {
                ko: '운동을 시작한 목적?',
                en: 'Purpose of starting exercise?',
                zh: '开始运动的目的？'
            },
            options: [
                { score: 1, label: { ko: '바디프로필 촬영', en: 'Body profile photoshoot', zh: '拍身材照' } },
                { score: 2, label: { ko: '살 빼려고', en: 'To lose weight', zh: '为了减肥' } },
                { score: 3, label: { ko: '체력 기르려고', en: 'To build stamina', zh: '为了增强体力' } },
                { score: 4, label: { ko: '스트레스 해소', en: 'Stress relief', zh: '缓解压力' } },
                { score: 5, label: { ko: '건강이 삶의 기본이라서', en: 'Health is life foundation', zh: '健康是生活基础' } }
            ]
        },
        {
            id: 'twenties_daily_5',
            category: 'relationship',
            text: {
                ko: 'SNS 피드 구성 스타일?',
                en: 'SNS feed composition style?',
                zh: '社交媒体动态风格？'
            },
            options: [
                { score: 1, label: { ko: '자랑용/허세', en: 'Showing off/Flex', zh: '炫耀/装' } },
                { score: 2, label: { ko: '일상 기록', en: 'Daily records', zh: '日常记录' } },
                { score: 3, label: { ko: '정보 공유', en: 'Information sharing', zh: '信息分享' } },
                { score: 4, label: { ko: '소통 위주', en: 'Communication focused', zh: '以沟通为主' } },
                { score: 5, label: { ko: '계정만 있고 활동 안 함', en: 'Account only, no activity', zh: '只有账号不活动' } }
            ]
        },
        {
            id: 'twenties_daily_6',
            category: 'responsibility',
            text: {
                ko: '독립(자취)에 대한 생각?',
                en: 'Thoughts on living independently?',
                zh: '对独立生活的想法？'
            },
            options: [
                { score: 1, label: { ko: '자유로운 영혼 원함', en: 'Want free soul', zh: '想要自由灵魂' } },
                { score: 2, label: { ko: '언젠가는 해야지', en: 'Should do someday', zh: '总有一天要做' } },
                { score: 3, label: { ko: '자금 모이면 함', en: 'When I save enough', zh: '存够钱就做' } },
                { score: 4, label: { ko: '준비 철저히 해서 함', en: 'Do it with thorough preparation', zh: '充分准备后做' } },
                { score: 5, label: { ko: '부모님 곁이 경제적', en: 'Staying with parents is economical', zh: '和父母在一起更经济' } }
            ]
        },
        {
            id: 'twenties_daily_7',
            category: 'values',
            text: {
                ko: '새로운 전자기기가 나오면?',
                en: 'When new electronics come out?',
                zh: '新电子产品出来时？'
            },
            options: [
                { score: 1, label: { ko: '무조건 최신형 구매', en: 'Always buy latest', zh: '必买最新款' } },
                { score: 2, label: { ko: '남들 쓰는 거 보고 삼', en: 'Buy after seeing others use', zh: '看别人用后再买' } },
                { score: 3, label: { ko: '필요하면 삼', en: 'Buy if needed', zh: '需要就买' } },
                { score: 4, label: { ko: '고장 날 때까지 안 삼', en: 'Don\'t buy until broken', zh: '用到坏为止' } },
                { score: 5, label: { ko: '성능 비교 철저히 함', en: 'Thoroughly compare performance', zh: '彻底比较性能' } }
            ]
        },
        {
            id: 'twenties_daily_8',
            category: 'self',
            text: {
                ko: '나만의 소확행은?',
                en: 'My small but certain happiness?',
                zh: '我的小确幸？'
            },
            options: [
                { score: 1, label: { ko: '쇼핑', en: 'Shopping', zh: '购物' } },
                { score: 2, label: { ko: '맛있는 음식', en: 'Delicious food', zh: '美食' } },
                { score: 3, label: { ko: '영상 정주행', en: 'Binge-watching', zh: '追剧' } },
                { score: 4, label: { ko: '조용한 산책', en: 'Quiet walk', zh: '安静散步' } },
                { score: 5, label: { ko: '집 정리정돈', en: 'Organizing home', zh: '整理家' } }
            ]
        },
        {
            id: 'twenties_daily_9',
            category: 'values',
            text: {
                ko: '여행 갈 때 계획은?',
                en: 'Travel planning?',
                zh: '旅行计划？'
            },
            options: [
                { score: 1, label: { ko: '무계획 번개여행', en: 'Spontaneous trip', zh: '无计划说走就走' } },
                { score: 2, label: { ko: '가고 싶은 곳만 선정', en: 'Select only desired places', zh: '只选想去的地方' } },
                { score: 3, label: { ko: '적당한 일정표', en: 'Moderate itinerary', zh: '适度的行程表' } },
                { score: 4, label: { ko: '분 단위 계획', en: 'Minute-by-minute plan', zh: '分钟级计划' } },
                { score: 5, label: { ko: '여행의 의미 고찰', en: 'Contemplate meaning of travel', zh: '思考旅行的意义' } }
            ]
        },
        {
            id: 'twenties_daily_10',
            category: 'values',
            text: {
                ko: '성공이란 무엇인가?',
                en: 'What is success?',
                zh: '什么是成功？'
            },
            options: [
                { score: 1, label: { ko: '부자가 되는 것', en: 'Becoming rich', zh: '变富有' } },
                { score: 2, label: { ko: '유명해지는 것', en: 'Becoming famous', zh: '变出名' } },
                { score: 3, label: { ko: '하고 싶은 일 하는 것', en: 'Doing what I want', zh: '做想做的事' } },
                { score: 4, label: { ko: '남들만큼 사는 것', en: 'Living like others', zh: '和别人一样生活' } },
                { score: 5, label: { ko: '내면의 평화를 얻는 것', en: 'Achieving inner peace', zh: '获得内心平静' } }
            ]
        }
    ],

    work: [
        {
            id: 'twenties_work_1',
            category: 'responsibility',
            text: {
                ko: '업무/과제 기한이 임박하면?',
                en: 'When work/assignment deadline approaches?',
                zh: '工作/作业截止日期临近时？'
            },
            options: [
                { score: 1, label: { ko: '에라 모르겠다', en: 'Whatever happens', zh: '管他呢' } },
                { score: 2, label: { ko: '전날 벼락치기', en: 'Cram the night before', zh: '前一晚临时抱佛脚' } },
                { score: 3, label: { ko: '밤새서 끝냄', en: 'Pull all-nighter to finish', zh: '熬夜完成' } },
                { score: 4, label: { ko: '여유 있게 미리 함', en: 'Do it early with ease', zh: '提前从容完成' } },
                { score: 5, label: { ko: '퀄리티 높이려 수정 반복', en: 'Revise repeatedly for quality', zh: '反复修改提高质量' } }
            ]
        },
        {
            id: 'twenties_work_2',
            category: 'relationship',
            text: {
                ko: '회식 자리에 대한 생각?',
                en: 'Thoughts on company dinners?',
                zh: '对聚餐的想法？'
            },
            options: [
                { score: 1, label: { ko: '공짜 술/안주 좋아', en: 'Love free drinks/food', zh: '喜欢免费酒菜' } },
                { score: 2, label: { ko: '동료와 친해질 기회', en: 'Chance to bond with colleagues', zh: '和同事亲近的机会' } },
                { score: 3, label: { ko: '업무의 연장선', en: 'Extension of work', zh: '工作的延伸' } },
                { score: 4, label: { ko: '빨리 집 가고 싶음', en: 'Want to go home quickly', zh: '想快点回家' } },
                { score: 5, label: { ko: '필요한 네트워킹만 함', en: 'Only necessary networking', zh: '只做必要的社交' } }
            ]
        },
        {
            id: 'twenties_work_3',
            category: 'emotion',
            text: {
                ko: '상사의 지시가 부당하다면?',
                en: 'If boss\'s order is unfair?',
                zh: '上司的指示不公平？'
            },
            options: [
                { score: 1, label: { ko: '표정 관리 안 됨', en: 'Can\'t control expression', zh: '表情管理不住' } },
                { score: 2, label: { ko: '속으로 욕하며 따름', en: 'Curse internally but follow', zh: '心里骂但照做' } },
                { score: 3, label: { ko: '정중하게 의견 제시', en: 'Politely suggest opinion', zh: '礼貌地提出意见' } },
                { score: 4, label: { ko: '대안을 가지고 설득', en: 'Persuade with alternatives', zh: '带着替代方案说服' } },
                { score: 5, label: { ko: '사회 생활의 일부로 수용', en: 'Accept as part of work life', zh: '作为职场一部分接受' } }
            ]
        },
        {
            id: 'twenties_work_4',
            category: 'relationship',
            text: {
                ko: '회사/학교 동료와 사적 연락?',
                en: 'Private contact with colleagues/classmates?',
                zh: '和同事/同学私下联系？'
            },
            options: [
                { score: 1, label: { ko: '매일 단톡방 활발', en: 'Active in group chat daily', zh: '每天群聊活跃' } },
                { score: 2, label: { ko: '친한 사람끼리만', en: 'Only with close ones', zh: '只和亲近的人' } },
                { score: 3, label: { ko: '업무적인 것만', en: 'Only work-related', zh: '只谈工作' } },
                { score: 4, label: { ko: '거의 안 함', en: 'Rarely do', zh: '几乎不联系' } },
                { score: 5, label: { ko: '공사 구분 철저', en: 'Strictly separate work/personal', zh: '公私分明' } }
            ]
        },
        {
            id: 'twenties_work_5',
            category: 'values',
            text: {
                ko: '이직/전공 변경 고민할 때?',
                en: 'When considering job/major change?',
                zh: '考虑换工作/换专业时？'
            },
            options: [
                { score: 1, label: { ko: '가슴 뛰는 일 찾음', en: 'Find what excites me', zh: '找让我激动的事' } },
                { score: 2, label: { ko: '연봉 높으면 감', en: 'Go if salary is high', zh: '工资高就去' } },
                { score: 3, label: { ko: '현실과 타협', en: 'Compromise with reality', zh: '和现实妥协' } },
                { score: 4, label: { ko: '커리어 로드맵 따짐', en: 'Consider career roadmap', zh: '考虑职业路线图' } },
                { score: 5, label: { ko: '내 전문성 고민', en: 'Contemplate my expertise', zh: '思考我的专业性' } }
            ]
        },
        {
            id: 'twenties_work_6',
            category: 'responsibility',
            text: {
                ko: '출근/등교 시간 엄수?',
                en: 'Punctuality for work/school?',
                zh: '上班/上学守时？'
            },
            options: [
                { score: 1, label: { ko: '매일 아슬아슬', en: 'Barely on time daily', zh: '每天勉强' } },
                { score: 2, label: { ko: '가끔 지각', en: 'Occasionally late', zh: '偶尔迟到' } },
                { score: 3, label: { ko: '정시에 도착', en: 'Arrive on time', zh: '准时到达' } },
                { score: 4, label: { ko: '10분 전 도착', en: 'Arrive 10 min early', zh: '提前10分钟到' } },
                { score: 5, label: { ko: '여유 있게 미리 준비', en: 'Prepare early with ease', zh: '从容提前准备' } }
            ]
        },
        {
            id: 'twenties_work_7',
            category: 'self',
            text: {
                ko: '내 책상 위 풍경은?',
                en: 'My desk scenery?',
                zh: '我的桌面风景？'
            },
            options: [
                { score: 1, label: { ko: '덕질 용품 가득', en: 'Full of fandom items', zh: '满是粉丝用品' } },
                { score: 2, label: { ko: '어질러져 있음', en: 'Messy', zh: '凌乱' } },
                { score: 3, label: { ko: '필요한 것만 있음', en: 'Only necessities', zh: '只有必需品' } },
                { score: 4, label: { ko: '깔끔하게 정리', en: 'Neatly organized', zh: '整洁有序' } },
                { score: 5, label: { ko: '아무것도 없음', en: 'Nothing on it', zh: '什么都没有' } }
            ]
        },
        {
            id: 'twenties_work_8',
            category: 'values',
            text: {
                ko: '점심 메뉴 결정할 때?',
                en: 'When deciding lunch menu?',
                zh: '决定午餐菜单时？'
            },
            options: [
                { score: 1, label: { ko: '무조건 맛집', en: 'Always famous restaurant', zh: '必须是名店' } },
                { score: 2, label: { ko: '동료들이 가는 곳', en: 'Where colleagues go', zh: '同事去的地方' } },
                { score: 3, label: { ko: '가성비 좋은 곳', en: 'Good value place', zh: '性价比高的地方' } },
                { score: 4, label: { ko: '도시락/건강식', en: 'Lunchbox/Healthy food', zh: '便当/健康食品' } },
                { score: 5, label: { ko: '생각하기 귀찮음', en: 'Too lazy to think', zh: '懒得想' } }
            ]
        },
        {
            id: 'twenties_work_9',
            category: 'values',
            text: {
                ko: '승진/학점 욕심?',
                en: 'Ambition for promotion/grades?',
                zh: '对晋升/成绩的野心？'
            },
            options: [
                { score: 1, label: { ko: '내가 1등 해야 함', en: 'Must be #1', zh: '必须第一' } },
                { score: 2, label: { ko: '남들만큼만', en: 'Just as much as others', zh: '和别人一样就行' } },
                { score: 3, label: { ko: '적당히 중간', en: 'Moderately average', zh: '适度中等' } },
                { score: 4, label: { ko: '자기계발에 더 의미', en: 'More meaning in self-development', zh: '自我发展更有意义' } },
                { score: 5, label: { ko: '결과보단 과정 중시', en: 'Value process over results', zh: '重视过程而非结果' } }
            ]
        },
        {
            id: 'twenties_work_10',
            category: 'relationship',
            text: {
                ko: '직장 내 인간관계?',
                en: 'Workplace relationships?',
                zh: '职场人际关系？'
            },
            options: [
                { score: 1, label: { ko: '모두와 친구', en: 'Friends with everyone', zh: '和所有人做朋友' } },
                { score: 2, label: { ko: '잘 맞는 사람만', en: 'Only compatible people', zh: '只和合得来的人' } },
                { score: 3, label: { ko: '공적인 관계', en: 'Professional relationship', zh: '公事关系' } },
                { score: 4, label: { ko: '최대한 조용히 지냄', en: 'Stay as quiet as possible', zh: '尽量安静' } },
                { score: 5, label: { ko: '인맥은 자산이라 생각', en: 'Think connections are assets', zh: '认为人脉是资产' } }
            ]
        }
    ],

    romance: [
        {
            id: 'twenties_romance_1',
            category: 'relationship',
            text: {
                ko: '데이팅 앱 사용에 대해?',
                en: 'About using dating apps?',
                zh: '关于使用约会软件？'
            },
            options: [
                { score: 1, label: { ko: '만남의 기회라 좋음', en: 'Good opportunity to meet', zh: '好的见面机会' } },
                { score: 2, label: { ko: '궁금해서 해봄', en: 'Try out of curiosity', zh: '出于好奇试试' } },
                { score: 3, label: { ko: '신뢰 안 감', en: 'Don\'t trust it', zh: '不信任' } },
                { score: 4, label: { ko: '위험해 보임', en: 'Seems dangerous', zh: '看起来危险' } },
                { score: 5, label: { ko: '직접 만나는 게 최고', en: 'Meeting in person is best', zh: '直接见面最好' } }
            ]
        },
        {
            id: 'twenties_romance_2',
            category: 'emotion',
            text: {
                ko: '연락 문제로 싸운다면?',
                en: 'If fighting over contact issues?',
                zh: '因联系问题吵架？'
            },
            options: [
                { score: 1, label: { ko: '연락이 사랑의 척도', en: 'Contact is measure of love', zh: '联系是爱的标准' } },
                { score: 2, label: { ko: '답답해서 화냄', en: 'Frustrated and angry', zh: '憋屈生气' } },
                { score: 3, label: { ko: '상대 사정 물어봄', en: 'Ask about their situation', zh: '询问对方情况' } },
                { score: 4, label: { ko: '적절한 타협점 찾음', en: 'Find appropriate compromise', zh: '找到适当妥协点' } },
                { score: 5, label: { ko: '연락보다 신뢰 강조', en: 'Emphasize trust over contact', zh: '强调信任而非联系' } }
            ]
        },
        {
            id: 'twenties_romance_3',
            category: 'relationship',
            text: {
                ko: '썸 타는 적정 기간?',
                en: 'Appropriate "some" period?',
                zh: '暧昧的适当期间？'
            },
            options: [
                { score: 1, label: { ko: '2주면 충분', en: '2 weeks is enough', zh: '2周就够' } },
                { score: 2, label: { ko: '한 달', en: 'One month', zh: '一个月' } },
                { score: 3, label: { ko: '서로 알 때까지', en: 'Until we know each other', zh: '直到互相了解' } },
                { score: 4, label: { ko: '길게 지켜봄', en: 'Observe for long time', zh: '长期观察' } },
                { score: 5, label: { ko: '결혼 전제라면 신중히', en: 'Carefully if marriage premise', zh: '以结婚为前提则谨慎' } }
            ]
        },
        {
            id: 'twenties_romance_4',
            category: 'emotion',
            text: {
                ko: '군대/취업 중 이별한다면?',
                en: 'If breaking up during military/job?',
                zh: '服役/就业期间分手？'
            },
            options: [
                { score: 1, label: { ko: '세상 끝난 듯 슬픔', en: 'Sad as if world ended', zh: '悲伤如世界末日' } },
                { score: 2, label: { ko: '다른 인연 찾음', en: 'Find another connection', zh: '寻找其他缘分' } },
                { score: 3, label: { ko: '시간이 해결해줄 것', en: 'Time will solve it', zh: '时间会解决' } },
                { score: 4, label: { ko: '현실이라 인정', en: 'Accept as reality', zh: '接受现实' } },
                { score: 5, label: { ko: '성장의 밑거름', en: 'Foundation for growth', zh: '成长的基础' } }
            ]
        },
        {
            id: 'twenties_romance_5',
            category: 'relationship',
            text: {
                ko: '연인의 남사친/여사친?',
                en: 'Partner\'s opposite-sex friends?',
                zh: '恋人的异性朋友？'
            },
            options: [
                { score: 1, label: { ko: '절대 안 됨', en: 'Absolutely not', zh: '绝对不行' } },
                { score: 2, label: { ko: '연락만 허용', en: 'Only contact allowed', zh: '只允许联系' } },
                { score: 3, label: { ko: '믿으니까 상관없음', en: 'Trust so it\'s fine', zh: '信任所以没关系' } },
                { score: 4, label: { ko: '둘만 아니면 됨', en: 'Fine if not alone', zh: '不单独就行' } },
                { score: 5, label: { ko: '쿨하게 인정', en: 'Coolly accept', zh: '冷静接受' } }
            ]
        },
        {
            id: 'twenties_romance_6',
            category: 'values',
            text: {
                ko: '데이트 장소 정할 때?',
                en: 'When deciding date location?',
                zh: '决定约会地点时？'
            },
            options: [
                { score: 1, label: { ko: '인스타 핫플레이스', en: 'Instagram hotspot', zh: 'Instagram热门地点' } },
                { score: 2, label: { ko: '서로 가고 싶은 곳', en: 'Where both want to go', zh: '双方都想去的地方' } },
                { score: 3, label: { ko: '편안한 곳', en: 'Comfortable place', zh: '舒适的地方' } },
                { score: 4, label: { ko: '안 가본 곳 도전', en: 'Try new places', zh: '尝试新地方' } },
                { score: 5, label: { ko: '의미 있는 장소', en: 'Meaningful place', zh: '有意义的地方' } }
            ]
        },
        {
            id: 'twenties_romance_7',
            category: 'values',
            text: {
                ko: '결혼에 대한 가치관?',
                en: 'Values about marriage?',
                zh: '对婚姻的价值观？'
            },
            options: [
                { score: 1, label: { ko: '사랑하면 당장', en: 'Right away if in love', zh: '相爱就马上' } },
                { score: 2, label: { ko: '경제력 갖추고', en: 'After financial stability', zh: '有经济能力后' } },
                { score: 3, label: { ko: '때 되면 하겠지', en: 'Will do when time comes', zh: '时候到了就做' } },
                { score: 4, label: { ko: '비혼 선호', en: 'Prefer not marrying', zh: '偏好不婚' } },
                { score: 5, label: { ko: '인생의 파트너 찾는 과정', en: 'Process of finding life partner', zh: '寻找人生伴侣的过程' } }
            ]
        },
        {
            id: 'twenties_romance_8',
            category: 'relationship',
            text: {
                ko: '연인에게 애정 표현?',
                en: 'Expressing affection to partner?',
                zh: '向恋人表达爱意？'
            },
            options: [
                { score: 1, label: { ko: '매일 사랑한다 말함', en: 'Say I love you daily', zh: '每天说我爱你' } },
                { score: 2, label: { ko: '스킨십 좋아함', en: 'Like physical affection', zh: '喜欢肢体接触' } },
                { score: 3, label: { ko: '행동으로 보여줌', en: 'Show through actions', zh: '通过行动表现' } },
                { score: 4, label: { ko: '가끔 진심 전달', en: 'Convey sincerity occasionally', zh: '偶尔传达真心' } },
                { score: 5, label: { ko: '쑥스러워서 잘 못 함', en: 'Too shy to do well', zh: '太害羞做不好' } }
            ]
        },
        {
            id: 'twenties_romance_9',
            category: 'emotion',
            text: {
                ko: '권태기가 오면 대처법?',
                en: 'How to handle relationship slump?',
                zh: '倦怠期的应对方法？'
            },
            options: [
                { score: 1, label: { ko: '새로운 자극/이벤트', en: 'New stimulation/events', zh: '新刺激/活动' } },
                { score: 2, label: { ko: '대화로 풀기', en: 'Solve through conversation', zh: '通过对话解决' } },
                { score: 3, label: { ko: '시간을 갖기', en: 'Take time', zh: '给时间' } },
                { score: 4, label: { ko: '극복하려 노력', en: '努力克服', zh: 'Try to overcome' } },
                { score: 5, label: { ko: '자연스럽게 이별', en: 'Naturally break up', zh: '自然分手' } }
            ]
        },
        {
            id: 'twenties_romance_10',
            category: 'self',
            text: {
                ko: '연애할 때 나의 적극성?',
                en: 'My proactiveness in dating?',
                zh: '恋爱时的积极性？'
            },
            options: [
                { score: 1, label: { ko: '내가 먼저 대시', en: 'I approach first', zh: '我先追求' } },
                { score: 2, label: { ko: '적극적으로 표현', en: 'Actively express', zh: '积极表达' } },
                { score: 3, label: { ko: '상대 반응 보며', en: 'Watch partner\'s reaction', zh: '观察对方反应' } },
                { score: 4, label: { ko: '기다리는 편', en: 'Tend to wait', zh: '倾向等待' } },
                { score: 5, label: { ko: '신중하게 접근', en: 'Approach carefully', zh: '谨慎接近' } }
            ]
        }
    ]
};

export default TWENTIES_QUESTIONS;
