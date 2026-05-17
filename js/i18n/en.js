// English translations
const translations_en = {
    // Start Screen - Dynamic title (seasonal emoji auto-change)
    get title() {
        const season = CONFIG.getCurrentSeason();
        return `<span class='emoji-icon'>${season.emoji.start}</span> How Old is<br>Your Mind? <span class='emoji-icon'>${season.emoji.end}</span>`;
    },
    subtitle: "AI estimates your physical age from your photo,<br>and 10 questions reveal your mental age",
    btnStart: "Start Test",

    // Upload Screen
    uploadTitle: "Upload Photo",
    uploadDesc: "Please upload a photo with your face clearly visible",
    uploadText: "Click or drag an image here",
    btnChange: "Change Photo",
    btnNext: "Next Step",

    // Analyzing
    analyzing: "AI is analyzing your face...",
    resultLabel: "Analysis Complete!",
    resultText: "Your physical age is",
    resultTextAge: "years old",

    // Scenario Selection
    scenarioTitle: "Which aspect of your mental age would you like to know?",
    scenarioDesc: "Analyzed with questions tailored to your age group",
    scenarioDaily: "Daily Life",
    scenarioDailyDesc: "Your daily habits and routine choices",
    scenarioWork: "Work Life",
    scenarioWorkDesc: "Your attitude and work style at the office",
    scenarioSchool: "School Life",
    scenarioSchoolDesc: "Your attitude and learning style at school",
    scenarioRomance: "Romance Life",
    scenarioRomanceDesc: "Your attitude towards romance and relationships",
    scenarioSocial: "Social Life",
    scenarioSocialDesc: "Your social activities and relationships",
    scenarioFamily: "Family Life",
    scenarioFamilyDesc: "Your family and couple relationships",
    btnStartQuestions: "Start Questions",
    btnCancelScenario: "Cancel",
    btnPrevQuestion: "← Back",

    // Result Chart
    chartTitle: "Mind Age Analysis",
    chartEmotion: "Emotion",
    chartResponsibility: "Responsibility",
    chartRelationship: "Relationship",
    chartValues: "Values",
    chartSelf: "Self-Awareness",

    // Result personalized context (ageGroup_gender)
    ctx_teen_male: "A truly unique mind age among teenage guys! 🎮",
    ctx_teen_female: "You have a special sensitivity as a teenage girl! 💜",
    ctx_twenties_male: "A remarkable depth of mind among men in your 20s! 💼",
    ctx_twenties_female: "A rich emotional world for a woman in her 20s! 🌸",
    ctx_thirties_male: "A balanced perspective from a man in his 30s! 🏋️",
    ctx_thirties_female: "The wisdom of a woman in her 30s shines through! 🌿",
    ctx_forties_male: "Experience and youthful energy coexist in a man in his 40s! 🎯",
    ctx_forties_female: "The deep strength of a woman in her 40s is remarkable! 💎",
    ctx_fifties_male: "The seasoned charm of a man in his 50s! 🏔️",
    ctx_fifties_female: "The elegant depth of a woman in her 50s stands out! 🌺",
    ctx_sixties_male: "The wisdom and experience of a man in his 60s shines! 🌟",
    ctx_sixties_female: "The life depth of a woman in her 60s is felt here! 🌙",
    ctx_seventies_male: "The lifelong wisdom of a man in his 70s is present! 🌿",
    ctx_seventies_female: "A result that reflects the journey of a woman in her 70s! 🕊️",

    // Questions
    progressText: "{current} / {total}",
    customQuestionNotice: "Questions customized for your age and gender",

    // Result Screen
    resultTitle: "Results",
    physicalAgeLabel: "Physical Age",
    mentalAgeLabel: "Mental Age",
    ageUnit: "yrs",
    archetypeTitle: "Your Character Type",

    // Result Messages (50 different cases based on age difference)
    // Very Young (-25 to -20)
    result_m25: "Forever a teen! Time seems to have stopped! 🌈",
    result_m24: "Little Prince/Princess! Eternal teenage spirit! 🌟",
    result_m23: "Full of innocence! The world sparkles for you! ✨",
    result_m22: "Pure as can be! Crystal clear soul! 💫",
    result_m21: "Innocent and charming! Cuteness overload! 🎈",

    // Young (-20 to -15)
    result_m20: "Youth in full bloom! Energy overflowing! 🌸",
    result_m19: "Cheerful Youth! Overflowing with energy! ✨",
    result_m18: "Vibrant soul! Full of life! 🎉",
    result_m17: "Fresh as spring! New beginnings await! 🌱",
    result_m16: "Refreshing energy! Cool and crisp! 💚",

    // Fresh (-15 to -10)
    result_m15: "Vibrant & Lively! Bright and positive energy! 🌞",
    result_m14: "Full of vitality! Icon of positivity! ⚡",
    result_m13: "Energetic soul! You brighten everything! 💛",
    result_m12: "Bursting with life! Every day is exciting! 🌺",
    result_m11: "Youthful vibe! Trendy mindset! 🎨",

    // Youthful (-10 to -5)
    result_m10: "Young at Heart! You have a cute soul! 🎀",
    result_m9: "Pure heart! Adult with childlike wonder! 🧸",
    result_m8: "Young spirit! Full of curiosity! 🎪",
    result_m7: "Fresh perspective! Trendy soul! 🎭",
    result_m6: "Cheerful mind! Full of joy! 🎵",

    // Slightly Young (-5 to -2)
    result_m5: "Youthful sensibility! Vibrant energy! 🌈",
    result_m4: "Bright soul! Positive energy! ☀️",
    result_m3: "Light-hearted! Carefree steps! 🦋",
    result_m2: "Fresh vibes! Cool mindset! 🍃",
    result_m1: "Young at heart! Full of vitality! 💪",

    // Perfect Balance (0 to 2)
    result_0: "Perfect Balance! Aging gracefully! ⚖️",
    result_p1: "Harmonious soul! Balanced mind! 🎯",
    result_p2: "Stable mindset! Comfortable energy! 🌿",

    // Slightly Mature (3 to 5)
    result_p3: "Calm charm! Stable presence! 🍂",
    result_p4: "Mature sensibility! Deep thoughts! 📚",
    result_p5: "Stable Adult! You have a mature charm! 🎓",

    // Mature (6 to 10)
    result_p6: "Grown-up appeal! Careful judgment! 🧭",
    result_p7: "Composed soul! Reliable presence! 🏔️",
    result_p8: "Deep thinking! Great insight! 🔍",
    result_p9: "Seasoned wisdom! Experience shines! 💎",
    result_p10: "Experienced Sage! A deep and thoughtful soul! 🧙",

    // Wise (11 to 15)
    result_p11: "Wise soul! Perfect insight! 🦉",
    result_p12: "Wise judgment! Deep thinker! 📖",
    result_p13: "Life Expert! Rich experience shows! 🎖️",
    result_p14: "Treasury of wisdom! Valuable advisor! 💫",
    result_p15: "Living Wisdom! You are a mentor of life! 🌟",

    // Very Wise (16 to 20)
    result_p16: "Grand sage aura! Deep insight! 🔮",
    result_p17: "Life master! Experience radiates! 🏆",
    result_p18: "Embodiment of wisdom! Teacher of all! 📜",
    result_p19: "Peak maturity! Life senior! 🎭",
    result_p20: "Treasure of experience! Truly admirable! 👑",

    // Master (21+)
    result_p21: "Life Master! You know everything! 🌌",
    result_p22: "Transcendent wisdom! Enlightened state! ✨",
    result_p23: "Fully matured soul! Essence of life! 🍷",
    result_p24: "Supreme sage! Wisdom shines bright! 💠",
    result_p25: "Legendary mentor! You are living history! 📿",

    // Share
    btnDownload: "Save Image",
    btnCopyLink: "Copy Link",
    btnRestart: "Take Test Again",
    btnMyTest: "Are you looking old? 🤫 Try this! 🤣",
    linkCopied: "✓ Link copied to clipboard!",
    shareDesc: "📸 Physical Age: {pa}\n🧠 Mental Age: {ma}",
    // shareTitleArchetype: "My Character Type: {name} ✨",

    // History
    historyTitle: "Mental Age History",
    historyEmpty: "No history yet.\nStart your first test!",
    historyStats: "Statistics",
    historyTotalTests: "Total Tests",
    historyAvgMentalAge: "Avg Mental Age",
    historyAvgDiff: "Avg Difference",
    historyYoungest: "Youngest Mind",
    historyPhysicalAge: "Physical",
    historyMentalAge: "Mental",
    historyRecords: "Records",
    historyClearAll: "Clear All",
    historyClose: "Close",
    historyClearConfirm: "Are you sure you want to clear all history?",
    historyDeleteConfirm: "Are you sure you want to delete this record?",
    historyLabelScenario: "Scenario",
    historyLabelDate: "Date",
    historyLabelGender: "Gender",
    historyLabelEmotion: "Emotion",
    historyLabelFaceShape: "Face Shape",
    historyLabelPersonalColor: "Personal Color",
    historyGenderMale: "Male",
    historyGenderFemale: "Female",

    // Emotions
    emotion_happy: "Happy 😊",
    emotion_sad: "Sad 😢",
    emotion_angry: "Angry 😠",
    emotion_surprised: "Surprised 😮",
    emotion_neutral: "Neutral 😐",
    emotion_fearful: "Fearful 😨",
    emotion_disgusted: "Disgusted 😖",

    // Footer
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contact: "Contact",

    // Errors
    errorNoFace: "No face detected. Please upload a photo with a clear frontal face.",
    errorDownload: "Failed to save image. Please try again.",
    errorCopyLink: "Failed to copy link.",

    // Age-Gender Customized Questions
    questions: {
        // Teens (10-19)
        teen: {
            common: [
                {
                    question: "What would you most like to do on the weekend?",
                    options: [
                        "🎉 Hang out with friends",
                        "📚 Study/read at café",
                        "🎮 Game/YouTube at home",
                        "🏃 Sports or hobbies"
                    ],
                    weight: 1.0
                },
                {
                    question: "How do you mainly use social media?",
                    options: [
                        "📱 Endless scrolling of Reels/Shorts",
                        "👥 Check friends' posts",
                        "📸 Share my daily life",
                        "🚫 Barely use it"
                    ],
                    weight: 1.0
                },
                {
                    question: "During exam period, you usually?",
                    options: [
                        "😅 Cram at last minute",
                        "📖 Study systematically",
                        "👥 Study group with friends",
                        "🧘 Review leisurely"
                    ],
                    weight: 1.2
                }
            ],
            male: [
                {
                    question: "How often do you play games?",
                    options: [
                        "🎮 3+ hours daily",
                        "🕹️ Only on weekends",
                        "📱 Occasional mobile games",
                        "🚫 Rarely play"
                    ],
                    weight: 1.1
                },
                {
                    question: "How often do you exercise?",
                    options: [
                        "⚽ Almost daily",
                        "🏀 2-3 times a week",
                        "🏃 Occasionally",
                        "😴 Rarely"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "How much do you care about fashion/beauty?",
                    options: [
                        "💄 Daily attention",
                        "👗 Only special occasions",
                        "👕 Comfort is best",
                        "🤷 Not much interest"
                    ],
                    weight: 1.1
                },
                {
                    question: "What do you mainly do with friends?",
                    options: [
                        "🛍️ Shopping/café",
                        "🎬 Movies/shows",
                        "💬 Just chatting",
                        "🎨 Hobby activities"
                    ],
                    weight: 1.0
                }
            ]
        },

        // Twenties (20-29)
        twenties: {
            common: [
                {
                    question: "What would you most like to do on the weekend?",
                    options: [
                        "🎉 Go to clubs/festivals with friends",
                        "📚 Read at a café",
                        "🎬 Watch Netflix at home",
                        "⛰️ Hiking or golf"
                    ],
                    weight: 1.0
                },
                {
                    question: "When you have a conflict with a friend?",
                    options: [
                        "😤 Express feelings immediately",
                        "⏰ Take time to think",
                        "💬 Resolve calmly through dialogue",
                        "🤝 I compromise"
                    ],
                    weight: 1.0
                },
                {
                    question: "When you want to buy something?",
                    options: [
                        "💳 Impulse buy immediately!",
                        "🔍 Check reviews on SNS",
                        "🤔 Think about it for a few days",
                        "💰 Compare prices and wait for sale"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "How do you handle work/school stress?",
                    options: [
                        "🍺 Drinks with friends",
                        "🎮 Gaming",
                        "🏋️ Exercise",
                        "🧘 Quiet rest alone"
                    ],
                    weight: 1.1
                },
                {
                    question: "About future plans?",
                    options: [
                        "🎯 Have specific goals",
                        "💭 Vaguely thinking",
                        "🤷 Living day by day",
                        "😰 Just worrying"
                    ],
                    weight: 1.2
                }
            ],
            female: [
                {
                    question: "How do you manage self-care?",
                    options: [
                        "💆 Regular maintenance",
                        "💄 Just the basics",
                        "🏃 Focus on exercise",
                        "😅 When I have time"
                    ],
                    weight: 1.1
                },
                {
                    question: "Your view on relationships?",
                    options: [
                        "💕 Seeking romantic love",
                        "🤝 Prefer comfortable relationship",
                        "💼 Career comes first",
                        "🤔 Not sure yet"
                    ],
                    weight: 1.2
                }
            ]
        },

        // Thirties (30-39)
        thirties: {
            common: [
                {
                    question: "What would you most like to do on the weekend?",
                    options: [
                        "👨‍👩‍👧 Spend time with family",
                        "📚 Self-development/reading",
                        "🏠 Rest at home",
                        "⛳ Golf/hiking"
                    ],
                    weight: 1.0
                },
                {
                    question: "Main topics of conversation with friends?",
                    options: [
                        "💼 Work, career",
                        "💪 Health, finance",
                        "👶 Parenting, family",
                        "🎮 Hobbies, interests"
                    ],
                    weight: 1.0
                },
                {
                    question: "When you're stressed?",
                    options: [
                        "🍷 Wine/beer",
                        "🏃 Exercise/walk",
                        "🧘 Meditation/rest",
                        "💬 Talk with family/friends"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "Interest in financial management?",
                    options: [
                        "📈 Active investing",
                        "💰 Stable savings",
                        "🏠 Real estate interest",
                        "🤷 Not much interest"
                    ],
                    weight: 1.2
                },
                {
                    question: "Health management?",
                    options: [
                        "🏋️ Regular exercise",
                        "🥗 Diet management",
                        "💊 Just health checkups",
                        "😅 Don't care much"
                    ],
                    weight: 1.1
                }
            ],
            female: [
                {
                    question: "Work-life balance?",
                    options: [
                        "💼 Career-focused",
                        "👨‍👩‍👧 Family-focused",
                        "⚖️ Seeking balance",
                        "🤔 Still figuring out"
                    ],
                    weight: 1.2
                },
                {
                    question: "Self-development?",
                    options: [
                        "📚 Continuous learning",
                        "💪 Health management",
                        "🎨 Hobby development",
                        "😴 No time"
                    ],
                    weight: 1.1
                }
            ]
        },

        // Forties and above (40+)
        forties: {
            common: [
                {
                    question: "How do you spend your leisure time?",
                    options: [
                        "👨‍👩‍👧 With family",
                        "⛳ Golf/hiking",
                        "📚 Reading/culture",
                        "🏠 Rest at home"
                    ],
                    weight: 1.0
                },
                {
                    question: "Interest in health?",
                    options: [
                        "🏥 Regular checkups essential",
                        "🏃 Consistent exercise",
                        "🥗 Diet management",
                        "💊 Only when needed"
                    ],
                    weight: 1.0
                },
                {
                    question: "What's most important in life?",
                    options: [
                        "👨‍👩‍👧 Family happiness",
                        "💪 Health",
                        "💰 Financial stability",
                        "🧘 Peace of mind"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "Retirement preparation?",
                    options: [
                        "📊 Specifically preparing",
                        "💰 Saving/investing",
                        "🤔 Vaguely thinking",
                        "😅 Think it's far away"
                    ],
                    weight: 1.2
                },
                {
                    question: "Hobbies?",
                    options: [
                        "⛳ Golf",
                        "🎣 Fishing/hiking",
                        "📚 Reading/studying",
                        "🎵 Music/arts"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "About children's education?",
                    options: [
                        "📚 Actively involved",
                        "🤝 Respect autonomy",
                        "⚖️ Seeking balance",
                        "👶 Still young"
                    ],
                    weight: 1.2
                },
                {
                    question: "Personal time management?",
                    options: [
                        "💆 Regular self-care",
                        "🎨 Hobby activities",
                        "👥 Friend gatherings",
                        "😅 No time"
                    ],
                    weight: 1.1
                }
            ]
        },

        // Fifties (50-59)
        fifties: {
            common: [
                {
                    question: "How do you spend your leisure time?",
                    options: [
                        "👨‍👩‍👧 With family/grandchildren",
                        "⛳ Golf/hiking/exercise",
                        "📚 Reading/culture",
                        "🧘 Meditation/rest"
                    ],
                    weight: 1.0
                },
                {
                    question: "Health management?",
                    options: [
                        "🏥 Regular checkups thoroughly",
                        "💊 Medication/supplements",
                        "🏃 Consistent exercise",
                        "🥗 Strict diet management"
                    ],
                    weight: 1.1
                },
                {
                    question: "Post-retirement plans?",
                    options: [
                        "💼 Continue working",
                        "🌍 Travel/hobbies",
                        "👨‍👩‍👧 Time with family",
                        "🤔 Still thinking"
                    ],
                    weight: 1.2
                }
            ],
            male: [
                {
                    question: "Retirement preparation status?",
                    options: [
                        "✅ Well prepared",
                        "📊 Preparing",
                        "😰 Insufficient",
                        "🤷 Haven't thought about it"
                    ],
                    weight: 1.2
                },
                {
                    question: "Main activities?",
                    options: [
                        "⛳ Golf",
                        "🎣 Fishing/hiking",
                        "📖 Reading/studying",
                        "🏠 Rest at home"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "About caring for grandchildren?",
                    options: [
                        "👶 Actively involved",
                        "🤝 Occasional help",
                        "🚫 Living independently",
                        "😅 No grandchildren yet"
                    ],
                    weight: 1.1
                },
                {
                    question: "Personal time usage?",
                    options: [
                        "🎨 Hobbies/volunteering",
                        "👥 Friend gatherings",
                        "💆 Self-care",
                        "📺 TV/rest"
                    ],
                    weight: 1.0
                }
            ]
        },

        // Sixties and above (60+)
        sixties: {
            common: [
                {
                    question: "Daily routine?",
                    options: [
                        "🌅 Regular lifestyle",
                        "🏃 Exercise-focused",
                        "👥 Active social life",
                        "🏠 Comfortable at home"
                    ],
                    weight: 1.0
                },
                {
                    question: "Health management priority?",
                    options: [
                        "🏥 Regular hospital checkups",
                        "💊 Medication management",
                        "🥗 Diet management",
                        "🧘 Stress management"
                    ],
                    weight: 1.1
                },
                {
                    question: "What's most important in life?",
                    options: [
                        "💪 Health",
                        "👨‍👩‍👧 Family",
                        "🧘 Peace of mind",
                        "🌟 Meaning of life"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "Retirement life?",
                    options: [
                        "💼 Still working",
                        "🎯 Focused on hobbies",
                        "👨‍👩‍👧 Family-centered",
                        "🧘 Leisurely"
                    ],
                    weight: 1.1
                },
                {
                    question: "Social activities?",
                    options: [
                        "👥 Actively participate",
                        "🤝 Occasional meetings",
                        "📚 Personal activities",
                        "🏠 Mostly at home"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "Relationship with grandchildren?",
                    options: [
                        "👶 Frequent care",
                        "💕 Occasional visits",
                        "🤝 Appropriate distance",
                        "😅 No grandchildren"
                    ],
                    weight: 1.1
                },
                {
                    question: "Leisure activities?",
                    options: [
                        "🎨 Culture/hobby activities",
                        "👥 Friend gatherings",
                        "🧘 Meditation/yoga",
                        "📺 TV/rest"
                    ],
                    weight: 1.0
                }
            ]
        },

        // Universal questions (age/gender independent)
        universal: [
            {
                question: "What music genre do you mainly listen to?",
                options: [
                    "🎵 Latest Hip-hop/EDM/K-POP",
                    "🎸 Indie/Pop",
                    "🎹 Ballad/Jazz",
                    "🎼 Classical/Traditional"
                ],
                weight: 1.0
            },
            {
                question: "What's your morning routine?",
                options: [
                    "😴 Snooze alarm 5 times",
                    "📱 Check phone immediately",
                    "🧘 Light stretching",
                    "🏃 Wake up early for walk/exercise"
                ],
                weight: 1.0
            },
            {
                question: "When planning a trip?",
                options: [
                    "✈️ Spontaneous without plans",
                    "🏨 Just book accommodation",
                    "📝 Plan main itinerary",
                    "📋 Create detailed hourly schedule"
                ],
                weight: 1.0
            }
        ]
    },

    // Archetypes
    archetypes: {
        male: {
            Y_E: [
                { code: "Y_E_M1", name: "Flame Warrior", desc: "Burning passion and adventurous spirit" },
                { code: "Y_E_M2", name: "Thunder Hunter", desc: "Bold hunter chasing lightning" },
                { code: "Y_E_M3", name: "Starlight Knight", desc: "Knight of light cutting through the night sky" },
                { code: "Y_E_M4", name: "Wind Rogue", desc: "Rogue riding the free wind" },
                { code: "Y_E_M5", name: "Lava Mage", desc: "Mage wielding hot lava" },
                { code: "Y_E_M6", name: "Galaxy Wanderer", desc: "Wanderer traversing the galaxy" },
                { code: "Y_E_M7", name: "Storm Knight", desc: "Warrior wielding storms" },
                { code: "Y_E_M8", name: "Light Guardian", desc: "Guardian protecting the light" }
            ],
            Y_S: [
                { code: "Y_S_M1", name: "Wind Hunter", desc: "Adventurer hunting on the wind" },
                { code: "Y_S_M2", name: "Ocean Explorer", desc: "Explorer cutting through waves" },
                { code: "Y_S_M3", name: "Mountain Conqueror", desc: "Hero conquering high mountains" },
                { code: "Y_S_M4", name: "Flame Dancer", desc: "Dancer handling flames gracefully" },
                { code: "Y_S_M5", name: "Electric Knight", desc: "Knight wielding electricity" },
                { code: "Y_S_M6", name: "Teal Priest", desc: "Priest of the blue sea" },
                { code: "Y_S_M7", name: "Galaxy Musician", desc: "Musician playing starlight" },
                { code: "Y_S_M8", name: "Solar Shield", desc: "Warrior with sunlight shield" }
            ],
            Y_M: [
                { code: "Y_M_M1", name: "Adventurer", desc: "Explorer seeking new paths" },
                { code: "Y_M_M2", name: "Dreaming Star", desc: "One who dreams while gazing at stars" },
                { code: "Y_M_M3", name: "Wanderer", desc: "Peaceful soul walking through nature" },
                { code: "Y_M_M4", name: "Youth Explorer", desc: "Explorer filled with youthful curiosity" },
                { code: "Y_M_M5", name: "Ocean Wave", desc: "One flowing with the waves" },
                { code: "Y_M_M6", name: "Forest Spirit", desc: "Spirit loving the forest" },
                { code: "Y_M_M7", name: "Silver Hunter", desc: "Hunter with silver bow" },
                { code: "Y_M_M8", name: "Sky Pilot", desc: "Pilot flying freely in the sky" }
            ],
            B: [
                { code: "B_M1", name: "Mediator", desc: "One who balances and resolves conflicts" },
                { code: "B_M2", name: "Harmonizer", desc: "One who weaves everything harmoniously" },
                { code: "B_M3", name: "Peace Guardian", desc: "Guardian protecting peace" },
                { code: "B_M4", name: "Sage of Balance", desc: "Sage with balance and wisdom" },
                { code: "B_M5", name: "Time Traveler", desc: "Traveler understanding the flow of time" },
                { code: "B_M6", name: "Light and Shadow", desc: "Being embracing both light and darkness" },
                { code: "B_M7", name: "Abyss Explorer", desc: "One exploring inner depths" },
                { code: "B_M8", name: "Earth Guardian", desc: "Guardian protecting the earth" }
            ],
            M_M: [
                { code: "M_M_M1", name: "Iron Knight", desc: "Knight with strong defense and conviction" },
                { code: "M_M_M2", name: "Gale Warrior", desc: "Calm yet powerful warrior" },
                { code: "M_M_M3", name: "Silent Shield", desc: "Strong shield in silence" },
                { code: "M_M_M4", name: "Mountain Guardian", desc: "Guardian solid as mountains" },
                { code: "M_M_M5", name: "Obsidian Sage", desc: "Wisdom deep as black stone" },
                { code: "M_M_M6", name: "Ocean Lighthouse", desc: "Lighthouse illuminating the sea" },
                { code: "M_M_M7", name: "Moonlight Knight", desc: "Knight embracing moonlight" },
                { code: "M_M_M8", name: "Mystic Priest", desc: "Combining strength and mystery" }
            ],
            M_S: [
                { code: "M_S_M1", name: "Commander", desc: "Leader guiding organizations" },
                { code: "M_S_M2", name: "Blacksmith", desc: "Blacksmith forging strength" },
                { code: "M_S_M3", name: "Strategist", desc: "Tactician planning strategies" },
                { code: "M_S_M4", name: "Protector", desc: "Guardian protecting surroundings" },
                { code: "M_S_M5", name: "War Sage", desc: "Sage knowing war and peace" },
                { code: "M_S_M6", name: "Immortal Knight", desc: "Knight fighting eternally" },
                { code: "M_S_M7", name: "Obsidian Shield", desc: "Warrior with black shield" },
                { code: "M_S_M8", name: "Wind General", desc: "General commanding the wind" }
            ],
            M_E: [
                { code: "M_E_M1", name: "Grand Sage", desc: "Sage holding all knowledge" },
                { code: "M_E_M2", name: "Time Master", desc: "Being controlling time" },
                { code: "M_E_M3", name: "Cosmic Priest", desc: "Priest communing with the universe" },
                { code: "M_E_M4", name: "Immortal King", desc: "King ruling eternally" },
                { code: "M_E_M5", name: "Sky Sentinel", desc: "Sentinel guarding the heavens" },
                { code: "M_E_M6", name: "Abyss Sage", desc: "Sage seeing into deep abyss" },
                { code: "M_E_M7", name: "Starlight Lord", desc: "Lord ruling the starlight" },
                { code: "M_E_M8", name: "Eternal Flame", desc: "Flame burning eternally" }
            ]
        },
        female: {
            Y_E: [
                { code: "Y_E_F1", name: "Sunshine Fairy", desc: "Fairy embracing bright sunlight" },
                { code: "Y_E_F2", name: "Storm Warrior", desc: "Warrior wielding storms" },
                { code: "Y_E_F3", name: "Moonlight Dancer", desc: "Dancer under moonlight" },
                { code: "Y_E_F4", name: "Ocean Queen", desc: "Queen ruling the seas" },
                { code: "Y_E_F5", name: "Galaxy Spirit", desc: "Spirit embracing the galaxy" },
                { code: "Y_E_F6", name: "Flame Sorceress", desc: "Sorceress wielding flames" },
                { code: "Y_E_F7", name: "Thunder Goddess", desc: "Goddess calling thunder" },
                { code: "Y_E_F8", name: "Light Guardian", desc: "Guardian protecting light" }
            ],
            Y_S: [
                { code: "Y_S_F1", name: "Sea Fairy", desc: "Fairy playing with waves" },
                { code: "Y_S_F2", name: "Mountain Warrior", desc: "Warrior climbing mountains" },
                { code: "Y_S_F3", name: "Solar Priestess", desc: "Priestess with solar power" },
                { code: "Y_S_F4", name: "Silver Dancer", desc: "Dancer wielding silver light" },
                { code: "Y_S_F5", name: "Wind Maiden", desc: "Maiden riding the wind" },
                { code: "Y_S_F6", name: "Starlight Musician", desc: "Musician playing starlight" },
                { code: "Y_S_F7", name: "Teal Queen", desc: "Queen of the blue sea" },
                { code: "Y_S_F8", name: "Golden Knight", desc: "Knight in golden armor" }
            ],
            Y_M: [
                { code: "Y_M_F1", name: "Dreaming Star", desc: "One dreaming while gazing at stars" },
                { code: "Y_M_F2", name: "Forest Fairy", desc: "Fairy wandering the forest" },
                { code: "Y_M_F3", name: "Flower Path Explorer", desc: "Explorer on flower paths" },
                { code: "Y_M_F4", name: "Wind Dancer", desc: "Dancer riding the wind" },
                { code: "Y_M_F5", name: "Galaxy Wanderer", desc: "Wanderer drifting through galaxy" },
                { code: "Y_M_F6", name: "Beach Poet", desc: "Poet writing by the beach" },
                { code: "Y_M_F7", name: "Moonlight Spirit", desc: "Spirit embracing moonlight" },
                { code: "Y_M_F8", name: "Clear Sky Explorer", desc: "Explorer of clear skies" }
            ],
            B: [
                { code: "B_F1", name: "Harmonizer", desc: "One weaving everything harmoniously" },
                { code: "B_F2", name: "Peace Guardian", desc: "Guardian protecting peace" },
                { code: "B_F3", name: "Time Traveler", desc: "Traveler understanding time's flow" },
                { code: "B_F4", name: "Light and Shadow", desc: "Being embracing light and darkness" },
                { code: "B_F5", name: "Earth Guardian", desc: "Guardian protecting the earth" },
                { code: "B_F6", name: "Abyss Explorer", desc: "Explorer of inner depths" },
                { code: "B_F7", name: "Galaxy Sage", desc: "Sage gazing at the galaxy" },
                { code: "B_F8", name: "Wind Sage", desc: "Sage reading the wind" }
            ],
            M_M: [
                { code: "M_M_F1", name: "Silver Priestess", desc: "Priestess in silver" },
                { code: "M_M_F2", name: "Gale Warrior", desc: "Calm yet powerful warrior" },
                { code: "M_M_F3", name: "Silent Shield", desc: "Strong shield in silence" },
                { code: "M_M_F4", name: "Mountain Guardian", desc: "Guardian solid as mountains" },
                { code: "M_M_F5", name: "Obsidian Sage", desc: "Wisdom deep as black stone" },
                { code: "M_M_F6", name: "Ocean Lighthouse", desc: "Lighthouse illuminating the sea" },
                { code: "M_M_F7", name: "Moonlight Knight", desc: "Knight embracing moonlight" },
                { code: "M_M_F8", name: "Mystic Priest", desc: "Combining strength and mystery" }
            ],
            M_S: [
                { code: "M_S_F1", name: "Sage Queen", desc: "Queen with wisdom and power" },
                { code: "M_S_F2", name: "Protector", desc: "Guardian protecting surroundings" },
                { code: "M_S_F3", name: "Strategist", desc: "Tactician planning strategies" },
                { code: "M_S_F4", name: "Blacksmith", desc: "Blacksmith forging strength" }
            ],
            M_E: []
        }
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_en;
}
