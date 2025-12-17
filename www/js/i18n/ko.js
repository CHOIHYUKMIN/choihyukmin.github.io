// Korean translations
const translations_ko = {
    // Start Screen - 동적 타이틀 (시즌별 이모지 자동 변경)
    get title() {
        const season = CONFIG.getCurrentSeason();
        return `<span class='emoji-icon'>${season.emoji.start}</span> 당신의 마음은<br>몇 살인가요? <span class='emoji-icon'>${season.emoji.end}</span>`;
    },
    subtitle: "AI가 당신의 얼굴로 실물 나이를 추측하고,<br>10가지 질문으로 마음의 나이를 알려드려요",
    btnStart: "테스트 시작하기",

    // Upload Screen
    uploadTitle: "사진 업로드",
    uploadDesc: "정면 얼굴이 잘 보이는 사진을 올려주세요",
    uploadText: "클릭하거나 이미지를 드래그하세요",
    btnChange: "사진 변경",
    btnNext: "다음 단계",

    // Analyzing
    analyzing: "AI가 당신의 얼굴을 분석하고 있어요...",
    resultLabel: "분석 완료!",
    resultText: "당신의 실물 나이는",
    resultTextAge: "세입니다",

    // Scenario Selection
    scenarioTitle: "어떤 상황의 마음 나이를 알고 싶으신가요?",
    scenarioDesc: "당신의 연령대에 맞는 질문으로 분석합니다",
    scenarioDaily: "일상생활",
    scenarioDailyDesc: "평소 생활 습관과 일상적인 선택",
    scenarioWork: "직장생활",
    scenarioWorkDesc: "직장에서의 태도와 업무 스타일",
    scenarioSchool: "학교생활",
    scenarioSchoolDesc: "학교에서의 태도와 학습 스타일",
    scenarioRomance: "연애생활",
    scenarioRomanceDesc: "연애와 관계에 대한 태도",
    scenarioSocial: "사회생활",
    scenarioSocialDesc: "사회 활동과 대인 관계",
    scenarioFamily: "가족생활",
    scenarioFamilyDesc: "가족 관계와 부부 생활",
    btnStartQuestions: "질문 시작하기",

    // Questions
    progressText: "{current} / {total}",
    customQuestionNotice: "당신의 연령·성별에 맞춘 질문입니다",

    // Result Screen
    resultTitle: "결과 분석",
    physicalAgeLabel: "실물 나이",
    mentalAgeLabel: "마음의 나이",
    ageUnit: "세",
    archetypeTitle: "당신의 캐릭터 유형",

    // Result Messages (50 different cases based on age difference)
    // Very Young (-25 to -20)
    result_m25: "영원한 10대! 시간이 멈춘 것 같아요! 🌈",
    result_m24: "완전 어린왕자/공주! 영원한 10대 감성이네요! 🌟",
    result_m23: "동심 가득! 세상이 반짝반짝 빛나 보이죠? ✨",
    result_m22: "순수 그 자체! 맑은 영혼의 소유자! 💫",
    result_m21: "천진난만! 귀여움이 폭발해요! 🎈",

    // Young (-20 to -15)
    result_m20: "청춘 만개! 에너지가 넘쳐흘러요! 🌸",
    result_m19: "발랄한 청춘! 젊음이 넘쳐흘러요! ✨",
    result_m18: "활기찬 영혼! 생동감이 느껴져요! 🎉",
    result_m17: "싱그러운 봄날! 새로운 시작의 기운! 🌱",
    result_m16: "청량감 만점! 상쾌한 에너지! 💚",

    // Fresh (-15 to -10)
    result_m15: "생기발랄! 밝고 긍정적인 에너지가 느껴져요! 🌞",
    result_m14: "활력 충만! 긍정의 아이콘! ⚡",
    result_m13: "에너지 넘치는 영혼! 주변을 밝혀요! 💛",
    result_m12: "생동감 가득! 활기찬 하루하루! 🌺",
    result_m11: "젊은 감성! 트렌디한 마인드! 🎨",

    // Youthful (-10 to -5)
    result_m10: "마음만은 소녀/소년! 귀여운 영혼이에요! 🎀",
    result_m9: "순수한 마음! 동심을 간직한 어른! 🧸",
    result_m8: "젊은 마음! 호기심 가득! 🎪",
    result_m7: "신선한 감각! 트렌디한 영혼! 🎭",
    result_m6: "유쾌한 마인드! 즐거움이 가득! 🎵",

    // Slightly Young (-5 to -2)
    result_m5: "젊은 감성! 활기찬 에너지! 🌈",
    result_m4: "밝은 영혼! 긍정 에너지! ☀️",
    result_m3: "경쾌한 마음! 가벼운 발걸음! 🦋",
    result_m2: "상큼한 감성! 신선한 마인드! 🍃",
    result_m1: "젊은 마음! 활력 넘쳐요! 💪",

    // Perfect Balance (0 to 2)
    result_0: "완벽한 밸런스! 나이를 잘 먹고 계시네요! ⚖️",
    result_p1: "조화로운 영혼! 균형잡힌 마음! 🎯",
    result_p2: "안정적인 마인드! 편안한 에너지! 🌿",

    // Slightly Mature (3 to 5)
    result_p3: "차분한 매력! 안정감 있어요! 🍂",
    result_p4: "성숙한 감성! 깊이 있는 마음! 📚",
    result_p5: "안정적인 어른! 성숙한 매력이 있어요! 🎓",

    // Mature (6 to 10)
    result_p6: "어른스러운 매력! 신중한 판단력! 🧭",
    result_p7: "침착한 영혼! 든든한 존재감! 🏔️",
    result_p8: "깊이 있는 사고! 통찰력 있어요! 🔍",
    result_p9: "노련한 지혜! 경험이 빛나요! 💎",
    result_p10: "노련한 현자! 깊이 있는 영혼입니다! 🧙",

    // Wise (11 to 15)
    result_p11: "지혜로운 영혼! 통찰력 만점! 🦉",
    result_p12: "현명한 판단! 깊은 사색가! 📖",
    result_p13: "인생의 고수! 풍부한 경험이 묻어나요! 🎖️",
    result_p14: "지혜의 보고! 귀한 조언자! 💫",
    result_p15: "살아있는 지혜! 당신은 인생의 멘토입니다! 🌟",

    // Very Wise (16 to 20)
    result_p16: "대현자의 풍모! 깊은 통찰력! 🔮",
    result_p17: "인생의 달인! 경륜이 느껴져요! 🏆",
    result_p18: "지혜의 화신! 모두의 스승! 📜",
    result_p19: "노련미 최고! 인생 선배! 🎭",
    result_p20: "경험의 보물창고! 존경스러워요! 👑",

    // Master (21+)
    result_p21: "인생의 마스터! 모든 것을 아시는군요! 🌌",
    result_p22: "초월적 지혜! 깨달음의 경지! ✨",
    result_p23: "완숙한 영혼! 인생의 정수! 🍷",
    result_p24: "최고의 현자! 지혜가 빛나요! 💠",
    result_p25: "전설의 멘토! 당신은 살아있는 역사! 📿",

    // Share
    btnDownload: "이미지 저장",
    btnCopyLink: "링크 복사",
    btnRestart: "다시 테스트하기",
    btnMyTest: "너도 혹시... 노안 🤫? 테스트해봐!",
    btnHistory: "📊 내 기록 보기",
    linkCopied: "✓ 링크가 복사되었습니다!",
    shareDesc: "📸 실물 나이: {pa}세\n🧠 마음의 나이: {ma}세",
    // shareTitleArchetype: "나는: {name} ✨",

    // History
    historyTitle: "내 마음 나이 기록",
    historyEmpty: "아직 기록이 없습니다.\n첫 테스트를 시작해보세요!",
    historyStats: "통계",
    historyTotalTests: "총 테스트",
    historyAvgMentalAge: "평균 마음 나이",
    historyAvgDiff: "평균 차이",
    historyYoungest: "최소 마음 나이",
    historyOldest: "최대 마음 나이",
    historyRecords: "기록",
    historyDate: "날짜",
    historyPhysicalAge: "실물",
    historyMentalAge: "마음",
    historyDifference: "차이",
    historyDelete: "삭제",
    historyClearAll: "전체 삭제",
    historyClearConfirm: "모든 기록을 삭제하시겠습니까?",
    historyDeleteConfirm: "삭제하시겠습니까?",
    historyClose: "닫기",

    // Emotions
    emotion_happy: "행복 😊",
    emotion_sad: "슬픔 😢",
    emotion_angry: "화남 😠",
    emotion_surprised: "놀람 😮",
    emotion_neutral: "무표정 😐",
    emotion_fearful: "두려움 😨",
    emotion_disgusted: "혐오 😖",

    // Footer
    privacyPolicy: "개인정보처리방침",
    termsOfService: "이용약관",
    contact: "문의하기",

    // Errors
    errorNoFace: "얼굴을 찾을 수 없습니다. 정면 얼굴이 잘 보이는 사진을 올려주세요.",
    errorDownload: "이미지 저장에 실패했습니다. 다시 시도해주세요.",
    errorCopyLink: "링크 복사에 실패했습니다.",

    // Age-Gender Customized Questions
    questions: {
        // 10대 (10-19세)
        teen: {
            common: [
                {
                    question: "주말에 가장 하고 싶은 활동은?",
                    options: [
                        "🎉 친구들과 놀러가기",
                        "📚 카페에서 공부/독서",
                        "🎮 집에서 게임/유튜브",
                        "🏃 운동이나 취미활동"
                    ],
                    weight: 1.0
                },
                {
                    question: "SNS를 주로 어떻게 사용하시나요?",
                    options: [
                        "📱 릴스/쇼츠 무한 스크롤",
                        "👥 친구들 게시물 구경",
                        "📸 내 일상 공유",
                        "🚫 거의 사용 안 함"
                    ],
                    weight: 1.0
                },
                {
                    question: "시험 기간에 주로?",
                    options: [
                        "😅 벼락치기",
                        "📖 계획적으로 공부",
                        "👥 친구들과 스터디",
                        "🧘 여유롭게 복습"
                    ],
                    weight: 1.2
                }
            ],
            male: [
                {
                    question: "게임을 얼마나 자주 하나요?",
                    options: [
                        "🎮 매일 3시간 이상",
                        "🕹️ 주말에만",
                        "📱 가끔 모바일 게임",
                        "🚫 거의 안 함"
                    ],
                    weight: 1.1
                },
                {
                    question: "운동을 얼마나 자주 하나요?",
                    options: [
                        "⚽ 거의 매일",
                        "🏀 주 2-3회",
                        "🏃 가끔",
                        "😴 거의 안 함"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "패션/뷰티에 얼마나 신경 쓰나요?",
                    options: [
                        "💄 매일 신경 씀",
                        "👗 특별한 날만",
                        "👕 편한 게 최고",
                        "🤷 별로 관심 없음"
                    ],
                    weight: 1.1
                },
                {
                    question: "친구들과 주로 무엇을 하나요?",
                    options: [
                        "🛍️ 쇼핑/카페",
                        "🎬 영화/공연",
                        "💬 수다 떨기",
                        "🎨 취미 활동"
                    ],
                    weight: 1.0
                }
            ]
        },

        // 20대 (20-29세)
        twenties: {
            common: [
                {
                    question: "주말에 가장 하고 싶은 활동은?",
                    options: [
                        "🎉 친구들과 클럽/페스티벌 가기",
                        "📚 카페에서 책 읽기",
                        "🎬 집에서 Netflix 보기",
                        "⛰️ 등산이나 골프"
                    ],
                    weight: 1.0
                },
                {
                    question: "친구와 의견 충돌이 생기면?",
                    options: [
                        "😤 감정적으로 바로 말한다",
                        "⏰ 일단 시간을 두고 생각한다",
                        "💬 대화로 차분히 해결한다",
                        "🤝 내가 양보한다"
                    ],
                    weight: 1.0
                },
                {
                    question: "갖고 싶은 물건이 생겼을 때?",
                    options: [
                        "💳 바로 충동구매!",
                        "🔍 SNS에서 후기 찾아보기",
                        "🤔 필요한지 며칠 고민",
                        "💰 가격 비교 후 세일 기다리기"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "직장/학교 스트레스를 어떻게 푸나요?",
                    options: [
                        "🍺 친구들과 술자리",
                        "🎮 게임으로 해소",
                        "🏋️ 운동으로 해소",
                        "🧘 혼자 조용히 쉼"
                    ],
                    weight: 1.1
                },
                {
                    question: "미래 계획에 대해?",
                    options: [
                        "🎯 구체적인 목표 있음",
                        "💭 막연하게 생각 중",
                        "🤷 그때그때 살아감",
                        "😰 고민만 많음"
                    ],
                    weight: 1.2
                }
            ],
            female: [
                {
                    question: "자기관리는 어떻게 하나요?",
                    options: [
                        "💆 정기적으로 관리",
                        "💄 기본만 챙김",
                        "🏃 운동 위주",
                        "😅 시간 나면"
                    ],
                    weight: 1.1
                },
                {
                    question: "연애관은?",
                    options: [
                        "💕 로맨틱한 사랑 추구",
                        "🤝 편한 관계가 좋음",
                        "💼 커리어가 우선",
                        "🤔 아직 잘 모르겠음"
                    ],
                    weight: 1.2
                }
            ]
        },

        // 30대 (30-39세)
        thirties: {
            common: [
                {
                    question: "주말에 가장 하고 싶은 활동은?",
                    options: [
                        "👨‍👩‍👧 가족과 시간 보내기",
                        "📚 자기계발/독서",
                        "🏠 집에서 휴식",
                        "⛳ 골프/등산"
                    ],
                    weight: 1.0
                },
                {
                    question: "친구들과 주로 하는 대화 주제는?",
                    options: [
                        "💼 업무, 커리어",
                        "💪 건강, 재테크",
                        "👶 육아, 가족",
                        "🎮 취미, 관심사"
                    ],
                    weight: 1.0
                },
                {
                    question: "스트레스 받을 때 주로?",
                    options: [
                        "🍷 와인/맥주 한 잔",
                        "🏃 운동/산책",
                        "🧘 명상/휴식",
                        "💬 가족/친구와 대화"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "재테크에 대한 관심은?",
                    options: [
                        "📈 적극적으로 투자",
                        "💰 안정적으로 저축",
                        "🏠 부동산 관심",
                        "🤷 별로 관심 없음"
                    ],
                    weight: 1.2
                },
                {
                    question: "건강관리는?",
                    options: [
                        "🏋️ 정기적으로 운동",
                        "🥗 식단 관리",
                        "💊 건강검진만",
                        "😅 신경 안 씀"
                    ],
                    weight: 1.1
                }
            ],
            female: [
                {
                    question: "일과 가정의 균형은?",
                    options: [
                        "💼 커리어 중심",
                        "👨‍👩‍👧 가정 중심",
                        "⚖️ 균형 추구",
                        "🤔 고민 중"
                    ],
                    weight: 1.2
                },
                {
                    question: "자기계발은?",
                    options: [
                        "📚 꾸준히 공부",
                        "💪 건강 관리",
                        "🎨 취미 개발",
                        "😴 여유가 없음"
                    ],
                    weight: 1.1
                }
            ]
        },

        // 40대 이상 (40+)
        forties: {
            common: [
                {
                    question: "여가 시간을 주로 어떻게 보내나요?",
                    options: [
                        "👨‍👩‍👧 가족과 함께",
                        "⛳ 골프/등산",
                        "📚 독서/문화생활",
                        "🏠 집에서 휴식"
                    ],
                    weight: 1.0
                },
                {
                    question: "건강에 대한 관심은?",
                    options: [
                        "🏥 정기검진 필수",
                        "🏃 꾸준한 운동",
                        "🥗 식단 관리",
                        "💊 필요할 때만"
                    ],
                    weight: 1.0
                },
                {
                    question: "인생에서 가장 중요한 것은?",
                    options: [
                        "👨‍👩‍👧 가족의 행복",
                        "💪 건강",
                        "💰 경제적 안정",
                        "🧘 마음의 평화"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "은퇴 준비는?",
                    options: [
                        "📊 구체적으로 준비 중",
                        "💰 저축/투자 중",
                        "🤔 막연하게 생각 중",
                        "😅 아직 멀었다고 생각"
                    ],
                    weight: 1.2
                },
                {
                    question: "취미생활은?",
                    options: [
                        "⛳ 골프",
                        "🎣 낚시/등산",
                        "📚 독서/공부",
                        "🎵 음악/예술"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "자녀 교육에 대해?",
                    options: [
                        "📚 적극적으로 관여",
                        "🤝 자율성 존중",
                        "⚖️ 균형 추구",
                        "👶 아직 어림"
                    ],
                    weight: 1.2
                },
                {
                    question: "자기 시간 관리는?",
                    options: [
                        "💆 정기적으로 챙김",
                        "🎨 취미 활동",
                        "👥 친구 모임",
                        "😅 시간이 없음"
                    ],
                    weight: 1.1
                }
            ]
        },

        // 50대 (50-59세)
        fifties: {
            common: [
                {
                    question: "여가 시간을 주로 어떻게 보내나요?",
                    options: [
                        "👨‍👩‍👧 가족/손주와 함께",
                        "⛳ 골프/등산/운동",
                        "📚 독서/문화생활",
                        "🧘 명상/휴식"
                    ],
                    weight: 1.0
                },
                {
                    question: "건강 관리는?",
                    options: [
                        "🏥 정기검진 철저히",
                        "💊 약물/영양제 관리",
                        "🏃 꾸준한 운동",
                        "🥗 식단 엄격히 관리"
                    ],
                    weight: 1.1
                },
                {
                    question: "은퇴 후 계획은?",
                    options: [
                        "💼 계속 일할 예정",
                        "🌍 여행/취미 생활",
                        "👨‍👩‍👧 가족과 시간",
                        "🤔 아직 고민 중"
                    ],
                    weight: 1.2
                }
            ],
            male: [
                {
                    question: "노후 준비 상태는?",
                    options: [
                        "✅ 충분히 준비됨",
                        "📊 준비 중",
                        "😰 부족함",
                        "🤷 생각 안 함"
                    ],
                    weight: 1.2
                },
                {
                    question: "주로 하는 활동은?",
                    options: [
                        "⛳ 골프",
                        "🎣 낚시/등산",
                        "📖 독서/공부",
                        "🏠 집에서 휴식"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "손주 돌봄에 대해?",
                    options: [
                        "👶 적극적으로 참여",
                        "🤝 가끔 도움",
                        "🚫 독립적으로 살기",
                        "😅 아직 손주 없음"
                    ],
                    weight: 1.1
                },
                {
                    question: "자기 시간 활용은?",
                    options: [
                        "🎨 취미/봉사활동",
                        "👥 친구 모임",
                        "💆 자기관리",
                        "📺 TV/휴식"
                    ],
                    weight: 1.0
                }
            ]
        },

        // 60대 이상 (60+)
        sixties: {
            common: [
                {
                    question: "하루 일과는?",
                    options: [
                        "🌅 규칙적인 생활",
                        "🏃 운동 중심",
                        "👥 사회활동 활발",
                        "🏠 집에서 편안히"
                    ],
                    weight: 1.0
                },
                {
                    question: "건강 관리 우선순위는?",
                    options: [
                        "🏥 병원 정기검진",
                        "💊 약물 복용 관리",
                        "🥗 식단 관리",
                        "🧘 스트레스 관리"
                    ],
                    weight: 1.1
                },
                {
                    question: "인생에서 가장 중요한 것은?",
                    options: [
                        "💪 건강",
                        "👨‍👩‍👧 가족",
                        "🧘 마음의 평화",
                        "🌟 삶의 의미"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "은퇴 생활은?",
                    options: [
                        "💼 아직 일함",
                        "🎯 취미에 몰두",
                        "👨‍👩‍👧 가족 중심",
                        "🧘 여유롭게"
                    ],
                    weight: 1.1
                },
                {
                    question: "사회활동은?",
                    options: [
                        "👥 적극적으로 참여",
                        "🤝 가끔 모임",
                        "📚 개인 활동",
                        "🏠 집에서 주로"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "손주와의 관계는?",
                    options: [
                        "👶 자주 돌봄",
                        "💕 가끔 만남",
                        "🤝 적당한 거리",
                        "😅 손주 없음"
                    ],
                    weight: 1.1
                },
                {
                    question: "여가 활동은?",
                    options: [
                        "🎨 문화/취미 활동",
                        "👥 친구 모임",
                        "🧘 명상/요가",
                        "📺 TV/휴식"
                    ],
                    weight: 1.0
                }
            ]
        },

        // 공통 질문 (연령·성별 무관)
        universal: [
            {
                question: "주로 듣는 음악 장르는?",
                options: [
                    "🎵 최신 힙합/EDM/K-POP",
                    "🎸 인디/팝",
                    "🎹 발라드/재즈",
                    "🎼 클래식/트로트"
                ],
                weight: 1.0
            },
            {
                question: "당신의 아침 루틴은?",
                options: [
                    "😴 알람 5번 미루고 일어남",
                    "📱 일어나자마자 폰 확인",
                    "🧘 가볍게 스트레칭",
                    "🏃 일찍 일어나 산책/운동"
                ],
                weight: 1.0
            },
            {
                question: "여행을 계획할 때?",
                options: [
                    "✈️ 계획 없이 즉흥적으로",
                    "🏨 대충 숙소만 예약",
                    "📝 주요 일정 정리",
                    "📋 시간대별 상세 계획표 작성"
                ],
                weight: 1.0
            }
        ]
    },

    // Archetypes
    archetypes: {
        male: {
            Y_E: [
                { code: "Y_E_M1", name: "불꽃 전사", desc: "불꽃처럼 뜨거운 열정과 모험심" },
                { code: "Y_E_M2", name: "천둥 사냥꾼", desc: "번개를 쫓는 대담한 사냥꾼" },
                { code: "Y_E_M3", name: "별빛 기사", desc: "밤하늘을 가르는 빛의 기사" },
                { code: "Y_E_M4", name: "바람의 도적", desc: "자유로운 바람을 타는 도적" },
                { code: "Y_E_M5", name: "용암 마법사", desc: "뜨거운 용암을 다루는 마법사" },
                { code: "Y_E_M6", name: "은하 방랑자", desc: "은하를 누비는 방랑자" },
                { code: "Y_E_M7", name: "폭풍 기사", desc: "폭풍을 휘두르는 전사" },
                { code: "Y_E_M8", name: "빛의 파수꾼", desc: "빛을 지키는 수호자" }
            ],
            Y_S: [
                { code: "Y_S_M1", name: "바람 사냥꾼", desc: "바람을 타고 사냥하는 모험가" },
                { code: "Y_S_M2", name: "해양 탐험가", desc: "파도를 가르는 탐험가" },
                { code: "Y_S_M3", name: "산악 정복자", desc: "높은 산을 정복하는 용사" },
                { code: "Y_S_M4", name: "불꽃 무희", desc: "불꽃을 춤추듯 다루는 무희" },
                { code: "Y_S_M5", name: "전기 기사", desc: "전기를 휘두르는 기사" },
                { code: "Y_S_M6", name: "청록 사제", desc: "푸른 바다의 사제" },
                { code: "Y_S_M7", name: "은하 연주가", desc: "별빛을 연주하는 음악가" },
                { code: "Y_S_M8", name: "태양 방패", desc: "태양빛을 방패로 만든 전사" }
            ],
            Y_M: [
                { code: "Y_M_M1", name: "모험가", desc: "새로운 길을 탐험하는 모험가" },
                { code: "Y_M_M2", name: "꿈꾸는 별", desc: "별을 바라보며 꿈을 꾸는 이" },
                { code: "Y_M_M3", name: "산책자", desc: "자연을 산책하는 평화로운 인물" },
                { code: "Y_M_M4", name: "청춘 탐험가", desc: "젊음의 호기심을 품은 탐험가" },
                { code: "Y_M_M5", name: "바다의 파도", desc: "파도와 함께 흐르는 사람" },
                { code: "Y_M_M6", name: "숲의 정령", desc: "숲을 사랑하는 정령" },
                { code: "Y_M_M7", name: "은빛 사냥꾼", desc: "은빛 활을 쏘는 사냥꾼" },
                { code: "Y_M_M8", name: "하늘의 비행사", desc: "하늘을 자유롭게 나는 비행사" }
            ],
            B: [
                { code: "B_M1", name: "중재자", desc: "갈등을 조정하고 균형을 잡는 사람" },
                { code: "B_M2", name: "조화자", desc: "모든 것을 조화롭게 엮는 인물" },
                { code: "B_M3", name: "평화의 수호자", desc: "평화를 지키는 수호자" },
                { code: "B_M4", name: "균형의 현자", desc: "균형과 지혜를 겸비한 현자" },
                { code: "B_M5", name: "시간의 여행자", desc: "시간의 흐름을 이해하는 여행자" },
                { code: "B_M6", name: "빛과 그림자", desc: "빛과 어둠을 동시에 품은 존재" },
                { code: "B_M7", name: "심연 탐험가", desc: "내면의 심연을 탐험하는 사람" },
                { code: "B_M8", name: "대지의 수호자", desc: "대지를 지키는 수호자" }
            ],
            M_M: [
                { code: "M_M_M1", name: "철벽 기사", desc: "강인한 방어와 신념을 가진 기사" },
                { code: "M_M_M2", name: "돌풍 전사", desc: "차분하지만 강력한 전사" },
                { code: "M_M_M3", name: "고요한 방패", desc: "고요함 속에 강한 방패" },
                { code: "M_M_M4", name: "산맥 수호자", desc: "산처럼 굳건한 수호자" },
                { code: "M_M_M5", name: "흑요석 현자", desc: "검은 돌처럼 깊은 지혜" },
                { code: "M_M_M6", name: "바다의 등대", desc: "바다를 비추는 등대" },
                { code: "M_M_M7", name: "달빛 기사", desc: "달빛을 품은 기사" },
                { code: "M_M_M8", name: "돌연변이 사제", desc: "강인함과 신비를 겸비" }
            ],
            M_S: [
                { code: "M_S_M1", name: "지휘관", desc: "조직을 이끄는 리더" },
                { code: "M_S_M2", name: "대장장이", desc: "강인함을 단련하는 대장장이" },
                { code: "M_S_M3", name: "전략가", desc: "전략을 세우는 지략가" },
                { code: "M_S_M4", name: "보호자", desc: "주변을 보호하는 수호자" },
                { code: "M_S_M5", name: "전쟁의 현자", desc: "전쟁과 평화를 아는 현자" },
                { code: "M_S_M6", name: "불멸의 기사", desc: "영원히 싸우는 기사" },
                { code: "M_S_M7", name: "흑요석 방패", desc: "검은 방패를 든 전사" },
                { code: "M_S_M8", name: "바람의 장군", desc: "바람을 다루는 장군" }
            ],
            M_E: [
                { code: "M_E_M1", name: "대현자", desc: "세상의 모든 지식을 품은 현자" },
                { code: "M_E_M2", name: "시간의 주인", desc: "시간을 조종하는 존재" },
                { code: "M_E_M3", name: "우주의 사제", desc: "우주와 교감하는 사제" },
                { code: "M_E_M4", name: "불멸의 왕", desc: "영원히 통치하는 왕" },
                { code: "M_E_M5", name: "천공의 파수꾼", desc: "하늘을 지키는 파수꾼" },
                { code: "M_E_M6", name: "심연의 현자", desc: "깊은 심연을 보는 현자" },
                { code: "M_E_M7", name: "별빛 군주", desc: "별빛을 다스리는 군주" },
                { code: "M_E_M8", name: "영원한 불꽃", desc: "영원히 타오르는 불꽃" }
            ]
        },
        female: {
            Y_E: [
                { code: "Y_E_F1", name: "햇살 요정", desc: "밝은 햇살을 품은 요정" },
                { code: "Y_E_F2", name: "폭풍 여전사", desc: "폭풍을 휘두르는 여전사" },
                { code: "Y_E_F3", name: "달빛 무희", desc: "달빛 아래 춤추는 무희" },
                { code: "Y_E_F4", name: "바다의 여왕", desc: "바다를 다스리는 여왕" },
                { code: "Y_E_F5", name: "은하 정령", desc: "은하를 품은 정령" },
                { code: "Y_E_F6", name: "불꽃 여마법사", desc: "불꽃을 다루는 마법사" },
                { code: "Y_E_F7", name: "천둥 여신", desc: "천둥을 부르는 여신" },
                { code: "Y_E_F8", name: "빛의 수호자", desc: "빛을 지키는 수호자" }
            ],
            Y_S: [
                { code: "Y_S_F1", name: "바다 요정", desc: "파도와 함께 노는 요정" },
                { code: "Y_S_F2", name: "산악 여전사", desc: "산을 오르는 여전사" },
                { code: "Y_S_F3", name: "태양 여사제", desc: "태양의 힘을 지닌 사제" },
                { code: "Y_S_F4", name: "은빛 무희", desc: "은빛을 휘두르는 무희" },
                { code: "Y_S_F5", name: "풍류 여인", desc: "바람을 타는 여인" },
                { code: "Y_S_F6", name: "별빛 연주가", desc: "별빛을 연주하는 음악가" },
                { code: "Y_S_F7", name: "청록 여왕", desc: "푸른 바다의 여왕" },
                { code: "Y_S_F8", name: "황금 기사", desc: "황금빛 갑옷을 입은 기사" }
            ],
            Y_M: [
                { code: "Y_M_F1", name: "꿈꾸는 별", desc: "별을 바라보며 꿈을 꾸는 이" },
                { code: "Y_M_F2", name: "숲의 요정", desc: "숲속을 누비는 요정" },
                { code: "Y_M_F3", name: "꽃길 탐험가", desc: "꽃길을 탐험하는 탐험가" },
                { code: "Y_M_F4", name: "바람의 무희", desc: "바람을 타는 무희" },
                { code: "Y_M_F5", name: "은하 방랑자", desc: "은하를 떠도는 방랑자" },
                { code: "Y_M_F6", name: "해변의 시인", desc: "해변에서 시를 짓는 시인" },
                { code: "Y_M_F7", name: "달빛 정령", desc: "달빛을 품은 정령" },
                { code: "Y_M_F8", name: "청명 탐험가", desc: "맑은 하늘을 탐험하는 사람" }
            ],
            B: [
                { code: "B_F1", name: "조화자", desc: "모든 것을 조화롭게 엮는 인물" },
                { code: "B_F2", name: "평화의 수호자", desc: "평화를 지키는 수호자" },
                { code: "B_F3", name: "시간의 여행자", desc: "시간의 흐름을 이해하는 여행자" },
                { code: "B_F4", name: "빛과 그림자", desc: "빛과 어둠을 동시에 품은 존재" },
                { code: "B_F5", name: "대지의 수호자", desc: "대지를 지키는 수호자" },
                { code: "B_F6", name: "심연 탐험가", desc: "내면의 심연을 탐험하는 사람" },
                { code: "B_F7", name: "은하 현자", desc: "은하를 바라보는 현자" },
                { code: "B_F8", name: "바람의 현자", desc: "바람을 읽는 현자" }
            ],
            M_M: [
                { code: "M_M_F1", name: "은빛 여사제", desc: "은빛을 입은 여사제" },
                { code: "M_M_F2", name: "돌풍 여전사", desc: "차분하지만 강력한 전사" },
                { code: "M_M_F3", name: "고요한 방패", desc: "고요함 속에 강한 방패" },
                { code: "M_M_F4", name: "산맥 수호자", desc: "산처럼 굳건한 수호자" },
                { code: "M_M_F5", name: "흑요석 현자", desc: "검은 돌처럼 깊은 지혜" },
                { code: "M_M_F6", name: "바다의 등대", desc: "바다를 비추는 등대" },
                { code: "M_M_F7", name: "달빛 기사", desc: "달빛을 품은 기사" },
                { code: "M_M_F8", name: "돌연변이 사제", desc: "강인함과 신비를 겸비" }
            ],
            M_S: [
                { code: "M_S_F1", name: "현자 여왕", desc: "지혜와 권력을 겸비한 여왕" },
                { code: "M_S_F2", name: "보호자", desc: "주변을 보호하는 수호자" },
                { code: "M_S_F3", name: "전략가", desc: "전략을 세우는 지략가" },
                { code: "M_S_F4", name: "대장장이", desc: "강인함을 단련하는 대장장이" }
            ],
            M_E: []
        }
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_ko;
}
