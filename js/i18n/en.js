// English translations
const translations_en = {
    // Start Screen
    title: "How Old is<br>Your Mind?",
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

    // Questions
    progressText: "{current} / {total}",
    customQuestionNotice: "Questions customized for your age and gender",

    // Result Screen
    resultTitle: "Results",
    physicalAgeLabel: "Physical Age",
    mentalAgeLabel: "Mental Age",
    ageUnit: "yrs",

    // Result Messages (9 different cases based on age difference)
    resultVeryYoung: "Little Prince/Princess! Eternal teenage spirit! 🌟",
    resultYoung: "Cheerful Youth! Overflowing with energy! ✨",
    resultFresh: "Vibrant & Lively! Bright and positive energy!",
    resultCute: "Young at Heart! You have a cute soul!",
    resultBalance: "Perfect Balance! Aging gracefully!",
    resultMature: "Stable Adult! You have a mature charm!",
    resultWise: "Experienced Sage! A deep and thoughtful soul!",
    resultExpert: "Life Expert! Rich experience shows!",
    resultMentor: "Living Wisdom! You are a mentor of life!",

    // Share
    btnDownload: "Save Image",
    btnCopyLink: "Copy Link",
    btnRestart: "Take Test Again",
    btnMyTest: "Take My Test 🎈",
    linkCopied: "✓ Link copied to clipboard!",

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
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_en;
}
