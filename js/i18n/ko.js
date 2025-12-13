// Korean translations
const translations_ko = {
    // Start Screen
    title: "당신의 마음은<br>몇 살인가요?",
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

    // Questions
    progressText: "{current} / {total}",
    customQuestionNotice: "당신의 연령·성별에 맞춘 질문입니다",

    // Result Screen
    resultTitle: "결과 분석",
    physicalAgeLabel: "실물 나이",
    mentalAgeLabel: "마음의 나이",
    ageUnit: "세",

    // Result Messages (9 different cases based on age difference)
    resultVeryYoung: "완전 어린왕자/공주! 영원한 10대 감성이네요! 🌟",
    resultYoung: "발랄한 청춘! 젊음이 넘쳐흘러요! ✨",
    resultFresh: "생기발랄! 밝고 긍정적인 에너지가 느껴져요!",
    resultCute: "마음만은 소녀/소년! 귀여운 영혼이에요!",
    resultBalance: "완벽한 밸런스! 나이를 잘 먹고 계시네요!",
    resultMature: "안정적인 어른! 성숙한 매력이 있어요!",
    resultWise: "노련한 현자! 깊이 있는 영혼입니다!",
    resultExpert: "인생의 고수! 풍부한 경험이 묻어나요!",
    resultMentor: "살아있는 지혜! 당신은 인생의 멘토입니다!",

    // Share
    btnDownload: "이미지 저장",
    btnCopyLink: "링크 복사",
    btnRestart: "다시 테스트하기",
    btnMyTest: "나도 테스트하기 🎈",
    linkCopied: "✓ 링크가 복사되었습니다!",

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
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_ko;
}
