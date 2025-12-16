// Chinese Simplified translations
const translations_zh = {
    // Start Screen - 动态标题（季节性表情符号自动更改）
    get title() {
        const season = CONFIG.getCurrentSeason();
        return `<span class='emoji-icon'>${season.emoji.start}</span> 你的心理年龄<br>是多少岁？ <span class='emoji-icon'>${season.emoji.end}</span>`;
    },
    subtitle: "AI通过你的照片估算实际年龄，<br>10个问题揭示你的心理年龄",
    btnStart: "开始测试",

    // Upload Screen
    uploadTitle: "上传照片",
    uploadDesc: "请上传正面清晰的照片",
    uploadText: "点击或拖动图片到这里",
    btnChange: "更换照片",
    btnNext: "下一步",

    // Analyzing
    analyzing: "AI正在分析你的面部...",
    resultLabel: "分析完成！",
    resultText: "你的实际年龄是",
    resultTextAge: "岁",

    // Scenario Selection
    scenarioTitle: "您想了解哪方面的心理年龄？",
    scenarioDesc: "根据您的年龄段定制的问题进行分析",
    scenarioDaily: "日常生活",
    scenarioDailyDesc: "平时的生活习惯和日常选择",
    scenarioWork: "职场生活",
    scenarioWorkDesc: "在职场的态度和工作风格",
    scenarioSchool: "学校生活",
    scenarioSchoolDesc: "在学校的态度和学习风格",
    scenarioRomance: "恋爱生活",
    scenarioRomanceDesc: "对恋爱和关系的态度",
    scenarioSocial: "社会生活",
    scenarioSocialDesc: "社会活动和人际关系",
    scenarioFamily: "家庭生活",
    scenarioFamilyDesc: "家庭关系和夫妻生活",
    btnStartQuestions: "开始问题",

    // Questions
    progressText: "{current} / {total}",
    customQuestionNotice: "根据您的年龄和性别定制的问题",

    // Result Screen
    resultTitle: "测试结果",
    physicalAgeLabel: "实际年龄",
    mentalAgeLabel: "心理年龄",
    ageUnit: "岁",
    archetypeTitle: "您的角色类型",

    // Result Messages (50 different cases based on age difference)
    // Very Young (-25 to -20)
    result_m25: "永远的少年！时间仿佛停止了！🌈",
    result_m24: "小王子/小公主！永远的少年感！🌟",
    result_m23: "童心满满！世界在你眼中闪闪发光！✨",
    result_m22: "纯洁无瑕！清澈的灵魂！💫",
    result_m21: "天真烂漫！可爱爆表！🎈",

    // Young (-20 to -15)
    result_m20: "青春盛开！活力四射！🌸",
    result_m19: "活力青春！充满朝气与活力！✨",
    result_m18: "充满活力的灵魂！生机勃勃！🎉",
    result_m17: "清新如春！新的开始！🌱",
    result_m16: "清爽满分！凉爽清新！💚",

    // Fresh (-15 to -10)
    result_m15: "生机勃勃！感受到了明朗积极的能量！🌞",
    result_m14: "活力充沛！积极的象征！⚡",
    result_m13: "充满能量的灵魂！照亮周围！💛",
    result_m12: "生机盎然！每天都很精彩！🌺",
    result_m11: "年轻感性！时尚思维！🎨",

    // Youthful (-10 to -5)
    result_m10: "童心未泯！非常可爱的灵魂！🎀",
    result_m9: "纯真的心！保持童心的大人！🧸",
    result_m8: "年轻的心！充满好奇！🎪",
    result_m7: "新鲜视角！时尚灵魂！🎭",
    result_m6: "愉快的心态！充满欢乐！🎵",

    // Slightly Young (-5 to -2)
    result_m5: "年轻感性！充满活力！🌈",
    result_m4: "明亮的灵魂！正能量！☀️",
    result_m3: "轻快的心！轻松的步伐！🦋",
    result_m2: "清新氛围！酷炫思维！🍃",
    result_m1: "年轻的心！充满活力！💪",

    // Perfect Balance (0 to 2)
    result_0: "完美平衡！保养得很好呢！⚖️",
    result_p1: "和谐的灵魂！平衡的心态！🎯",
    result_p2: "稳定的心态！舒适的能量！🌿",

    // Slightly Mature (3 to 5)
    result_p3: "沉着的魅力！稳定的存在感！🍂",
    result_p4: "成熟的感性！深刻的思想！📚",
    result_p5: "稳重的成年人！拥有成熟的魅力！🎓",

    // Mature (6 to 10)
    result_p6: "成熟的魅力！谨慎的判断力！🧭",
    result_p7: "沉着的灵魂！可靠的存在！🏔️",
    result_p8: "深刻的思考！洞察力强！🔍",
    result_p9: "老练的智慧！经验闪耀！💎",
    result_p10: "老练的智者！深邃的灵魂！🧙",

    // Wise (11 to 15)
    result_p11: "智慧的灵魂！洞察力满分！🦉",
    result_p12: "明智的判断！深刻的思想家！📖",
    result_p13: "人生高手！流露出丰富的经验！🎖️",
    result_p14: "智慧的宝库！宝贵的顾问！💫",
    result_p15: "活着的智慧！你是人生的导师！🌟",

    // Very Wise (16 to 20)
    result_p16: "大贤者的风范！深刻的洞察力！🔮",
    result_p17: "人生大师！经验辐射！🏆",
    result_p18: "智慧的化身！众人的老师！📜",
    result_p19: "成熟度巅峰！人生前辈！🎭",
    result_p20: "经验的宝库！令人钦佩！👑",

    // Master (21+)
    result_p21: "人生大师！你无所不知！🌌",
    result_p22: "超越的智慧！开悟的境界！✨",
    result_p23: "完全成熟的灵魂！人生的精髓！🍷",
    result_p24: "至高的贤者！智慧闪耀！💠",
    result_p25: "传奇导师！你是活着的历史！📿",

    // Share
    btnDownload: "保存图片",
    btnCopyLink: "复制链接",
    btnRestart: "重新测试",
    btnMyTest: "你也是“老颜”吗？快来测测！🤣",
    linkCopied: "✓ 链接已复制！",
    shareDesc: "📸 实际年龄: {pa}岁\n🧠 心理年龄: {ma}岁",
    // shareTitleArchetype: "我的角色类型: {name} ✨",

    // History
    historyTitle: "心理年龄记录",
    historyEmpty: "暂无记录。\n请开始您的第一次测试！",
    historyStats: "统计",
    historyTotalTests: "总测试",
    historyAvgMentalAge: "平均心理年龄",
    historyAvgDiff: "平均差异",
    historyYoungest: "最年轻心态",
    historyPhysicalAge: "实际",
    historyMentalAge: "心理",
    historyRecords: "记录",
    historyClearAll: "全部删除",
    historyClose: "关闭",
    historyClearConfirm: "确定要删除所有记录吗？",
    historyDeleteConfirm: "确定要删除这条记录吗？",

    // Emotions
    emotion_happy: "快乐 😊",
    emotion_sad: "悲伤 😢",
    emotion_angry: "愤怒 😠",
    emotion_surprised: "惊讶 😮",
    emotion_neutral: "平淡 😐",
    emotion_fearful: "恐惧 😨",
    emotion_disgusted: "厌恶 😖",

    // Footer
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    contact: "联系我们",

    // Errors
    errorNoFace: "未检测到面部。请上传正面清晰的照片。",
    errorDownload: "保存图片失败，请重试。",
    errorCopyLink: "复制链接失败。",

    // Age-Gender Customized Questions
    questions: {
        // 青少年 (10-19)
        teen: {
            common: [
                {
                    question: "周末最想做什么活动？",
                    options: [
                        "🎉 和朋友出去玩",
                        "📚 在咖啡厅学习/看书",
                        "🎮 在家玩游戏/看视频",
                        "🏃 运动或兴趣爱好"
                    ],
                    weight: 1.0
                },
                {
                    question: "主要如何使用社交媒体？",
                    options: [
                        "📱 无限刷短视频",
                        "👥 浏览朋友动态",
                        "📸 分享我的日常",
                        "🚫 几乎不用"
                    ],
                    weight: 1.0
                },
                {
                    question: "考试期间通常？",
                    options: [
                        "😅 临时抱佛脚",
                        "📖 有计划地学习",
                        "👥 和朋友一起学习",
                        "🧘 从容复习"
                    ],
                    weight: 1.2
                }
            ],
            male: [
                {
                    question: "多久玩一次游戏？",
                    options: [
                        "🎮 每天3小时以上",
                        "🕹️ 只在周末",
                        "📱 偶尔玩手游",
                        "🚫 很少玩"
                    ],
                    weight: 1.1
                },
                {
                    question: "多久运动一次？",
                    options: [
                        "⚽ 几乎每天",
                        "🏀 每周2-3次",
                        "🏃 偶尔",
                        "😴 很少"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "对时尚/美容的关注程度？",
                    options: [
                        "💄 每天都关注",
                        "👗 只在特殊场合",
                        "👕 舒适最重要",
                        "🤷 不太关心"
                    ],
                    weight: 1.1
                },
                {
                    question: "和朋友主要做什么？",
                    options: [
                        "🛍️ 购物/咖啡厅",
                        "🎬 看电影/演出",
                        "💬 聊天",
                        "🎨 兴趣活动"
                    ],
                    weight: 1.0
                }
            ]
        },

        // 20多岁 (20-29)
        twenties: {
            common: [
                {
                    question: "周末最想做什么活动？",
                    options: [
                        "🎉 和朋友去俱乐部/音乐节",
                        "📚 在咖啡厅看书",
                        "🎬 在家看Netflix",
                        "⛰️ 登山或打高尔夫"
                    ],
                    weight: 1.0
                },
                {
                    question: "和朋友产生分歧时？",
                    options: [
                        "😤 情绪化地立即表达",
                        "⏰ 先冷静思考",
                        "💬 通过对话平静解决",
                        "🤝 我会让步"
                    ],
                    weight: 1.0
                },
                {
                    question: "想买东西时？",
                    options: [
                        "💳 立即冲动购买！",
                        "🔍 在社交媒体上查看评价",
                        "🤔 考虑几天是否需要",
                        "💰 比价后等待促销"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "如何处理工作/学业压力？",
                    options: [
                        "🍺 和朋友喝酒",
                        "🎮 玩游戏",
                        "🏋️ 运动",
                        "🧘 独自安静休息"
                    ],
                    weight: 1.1
                },
                {
                    question: "关于未来计划？",
                    options: [
                        "🎯 有具体目标",
                        "💭 模糊地思考",
                        "🤷 过一天算一天",
                        "😰 只是担心"
                    ],
                    weight: 1.2
                }
            ],
            female: [
                {
                    question: "如何管理自我护理？",
                    options: [
                        "💆 定期保养",
                        "💄 只做基本护理",
                        "🏃 专注运动",
                        "😅 有时间再说"
                    ],
                    weight: 1.1
                },
                {
                    question: "对恋爱的看法？",
                    options: [
                        "💕 追求浪漫爱情",
                        "🤝 喜欢舒适的关系",
                        "💼 事业优先",
                        "🤔 还不确定"
                    ],
                    weight: 1.2
                }
            ]
        },

        // 30多岁 (30-39)
        thirties: {
            common: [
                {
                    question: "周末最想做什么活动？",
                    options: [
                        "👨‍👩‍👧 和家人在一起",
                        "📚 自我提升/阅读",
                        "🏠 在家休息",
                        "⛳ 高尔夫/登山"
                    ],
                    weight: 1.0
                },
                {
                    question: "和朋友主要聊什么话题？",
                    options: [
                        "💼 工作、职业",
                        "💪 健康、理财",
                        "👶 育儿、家庭",
                        "🎮 爱好、兴趣"
                    ],
                    weight: 1.0
                },
                {
                    question: "压力大时主要？",
                    options: [
                        "🍷 喝点酒",
                        "🏃 运动/散步",
                        "🧘 冥想/休息",
                        "💬 和家人/朋友聊天"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "对理财的兴趣？",
                    options: [
                        "📈 积极投资",
                        "💰 稳定储蓄",
                        "🏠 关注房地产",
                        "🤷 不太关心"
                    ],
                    weight: 1.2
                },
                {
                    question: "健康管理？",
                    options: [
                        "🏋️ 定期运动",
                        "🥗 饮食管理",
                        "💊 只做体检",
                        "😅 不太关心"
                    ],
                    weight: 1.1
                }
            ],
            female: [
                {
                    question: "工作与生活的平衡？",
                    options: [
                        "💼 以事业为重",
                        "👨‍👩‍👧 以家庭为重",
                        "⚖️ 追求平衡",
                        "🤔 还在摸索"
                    ],
                    weight: 1.2
                },
                {
                    question: "自我提升？",
                    options: [
                        "📚 持续学习",
                        "💪 健康管理",
                        "🎨 发展兴趣",
                        "😴 没有时间"
                    ],
                    weight: 1.1
                }
            ]
        },

        // 40岁以上 (40+)
        forties: {
            common: [
                {
                    question: "如何度过闲暇时间？",
                    options: [
                        "👨‍👩‍👧 和家人在一起",
                        "⛳ 高尔夫/登山",
                        "📚 阅读/文化活动",
                        "🏠 在家休息"
                    ],
                    weight: 1.0
                },
                {
                    question: "对健康的关注？",
                    options: [
                        "🏥 定期体检必不可少",
                        "🏃 坚持运动",
                        "🥗 饮食管理",
                        "💊 需要时才关注"
                    ],
                    weight: 1.0
                },
                {
                    question: "人生中最重要的是？",
                    options: [
                        "👨‍👩‍👧 家庭幸福",
                        "💪 健康",
                        "💰 经济稳定",
                        "🧘 内心平静"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "退休准备？",
                    options: [
                        "📊 具体准备中",
                        "💰 储蓄/投资中",
                        "🤔 模糊地考虑",
                        "😅 觉得还早"
                    ],
                    weight: 1.2
                },
                {
                    question: "兴趣爱好？",
                    options: [
                        "⛳ 高尔夫",
                        "🎣 钓鱼/登山",
                        "📚 阅读/学习",
                        "🎵 音乐/艺术"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "关于子女教育？",
                    options: [
                        "📚 积极参与",
                        "🤝 尊重自主性",
                        "⚖️ 追求平衡",
                        "👶 还小"
                    ],
                    weight: 1.2
                },
                {
                    question: "个人时间管理？",
                    options: [
                        "💆 定期自我护理",
                        "🎨 兴趣活动",
                        "👥 朋友聚会",
                        "😅 没有时间"
                    ],
                    weight: 1.1
                }
            ]
        },

        // 50多岁 (50-59)
        fifties: {
            common: [
                {
                    question: "如何度过闲暇时间？",
                    options: [
                        "👨‍👩‍👧 和家人/孙子在一起",
                        "⛳ 高尔夫/登山/运动",
                        "📚 阅读/文化活动",
                        "🧘 冥想/休息"
                    ],
                    weight: 1.0
                },
                {
                    question: "健康管理？",
                    options: [
                        "🏥 定期体检彻底",
                        "💊 药物/营养品管理",
                        "🏃 坚持运动",
                        "🥗 严格饮食管理"
                    ],
                    weight: 1.1
                },
                {
                    question: "退休后计划？",
                    options: [
                        "💼 继续工作",
                        "🌍 旅行/兴趣爱好",
                        "👨‍👩‍👧 和家人在一起",
                        "🤔 还在考虑"
                    ],
                    weight: 1.2
                }
            ],
            male: [
                {
                    question: "养老准备状态？",
                    options: [
                        "✅ 准备充分",
                        "📊 准备中",
                        "😰 不足",
                        "🤷 没想过"
                    ],
                    weight: 1.2
                },
                {
                    question: "主要活动？",
                    options: [
                        "⛳ 高尔夫",
                        "🎣 钓鱼/登山",
                        "📖 阅读/学习",
                        "🏠 在家休息"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "关于照顾孙子？",
                    options: [
                        "👶 积极参与",
                        "🤝 偶尔帮忙",
                        "🚫 独立生活",
                        "😅 还没有孙子"
                    ],
                    weight: 1.1
                },
                {
                    question: "个人时间利用？",
                    options: [
                        "🎨 兴趣/志愿活动",
                        "👥 朋友聚会",
                        "💆 自我护理",
                        "📺 看电视/休息"
                    ],
                    weight: 1.0
                }
            ]
        },

        // 60岁以上 (60+)
        sixties: {
            common: [
                {
                    question: "日常作息？",
                    options: [
                        "🌅 规律生活",
                        "🏃 以运动为主",
                        "👥 社交活动活跃",
                        "🏠 在家舒适"
                    ],
                    weight: 1.0
                },
                {
                    question: "健康管理优先级？",
                    options: [
                        "🏥 定期医院体检",
                        "💊 药物管理",
                        "🥗 饮食管理",
                        "🧘 压力管理"
                    ],
                    weight: 1.1
                },
                {
                    question: "人生中最重要的是？",
                    options: [
                        "💪 健康",
                        "👨‍👩‍👧 家庭",
                        "🧘 内心平静",
                        "🌟 生命的意义"
                    ],
                    weight: 1.0
                }
            ],
            male: [
                {
                    question: "退休生活？",
                    options: [
                        "💼 还在工作",
                        "🎯 专注兴趣",
                        "👨‍👩‍👧 以家庭为中心",
                        "🧘 悠闲自在"
                    ],
                    weight: 1.1
                },
                {
                    question: "社交活动？",
                    options: [
                        "👥 积极参与",
                        "🤝 偶尔聚会",
                        "📚 个人活动",
                        "🏠 主要在家"
                    ],
                    weight: 1.0
                }
            ],
            female: [
                {
                    question: "与孙子的关系？",
                    options: [
                        "👶 经常照顾",
                        "💕 偶尔见面",
                        "🤝 保持适当距离",
                        "😅 没有孙子"
                    ],
                    weight: 1.1
                },
                {
                    question: "休闲活动？",
                    options: [
                        "🎨 文化/兴趣活动",
                        "👥 朋友聚会",
                        "🧘 冥想/瑜伽",
                        "📺 看电视/休息"
                    ],
                    weight: 1.0
                }
            ]
        },

        // 通用问题（不分年龄性别）
        universal: [
            {
                question: "主要听什么音乐类型？",
                options: [
                    "🎵 最新嘻哈/电音/K-POP",
                    "🎸 独立/流行",
                    "🎹 情歌/爵士",
                    "🎼 古典/传统"
                ],
                weight: 1.0
            },
            {
                question: "你的晨间习惯是？",
                options: [
                    "😴 闹钟贪睡5次",
                    "📱 起床立即看手机",
                    "🧘 轻松拉伸",
                    "🏃 早起散步/运动"
                ],
                weight: 1.0
            },
            {
                question: "计划旅行时？",
                options: [
                    "✈️ 无计划随兴而行",
                    "🏨 只预订住宿",
                    "📝 整理主要行程",
                    "📋 制作详细时间表"
                ],
                weight: 1.0
            }
        ]
    },

    // Archetypes
    archetypes: {
        male: {
            Y_E: [
                { code: "Y_E_M1", name: "烈焰战士", desc: "如火焰般炽热的热情与冒险精神" },
                { code: "Y_E_M2", name: "雷霆猎人", desc: "追逐闪电的大胆猎人" },
                { code: "Y_E_M3", name: "星光骑士", desc: "划破夜空的光之骑士" },
                { code: "Y_E_M4", name: "风之盗贼", desc: "乘着自由之风的盗贼" },
                { code: "Y_E_M5", name: "熔岩法师", desc: "操控炽热熔岩的法师" },
                { code: "Y_E_M6", name: "银河流浪者", desc: "穿越银河的流浪者" },
                { code: "Y_E_M7", name: "风暴骑士", desc: "挥舞风暴的战士" },
                { code: "Y_E_M8", name: "光之守卫", desc: "守护光明的守卫者" }
            ],
            Y_S: [
                { code: "Y_S_M1", name: "风之猎人", desc: "乘风狩猎的冒险家" },
                { code: "Y_S_M2", name: "海洋探险家", desc: "劈波斩浪的探险家" },
                { code: "Y_S_M3", name: "山岳征服者", desc: "征服高山的勇士" },
                { code: "Y_S_M4", name: "火焰舞者", desc: "如舞蹈般操控火焰的舞者" },
                { code: "Y_S_M5", name: "电光骑士", desc: "挥舞电光的骑士" },
                { code: "Y_S_M6", name: "青绿祭司", desc: "蓝色海洋的祭司" },
                { code: "Y_S_M7", name: "银河演奏家", desc: "演奏星光的音乐家" },
                { code: "Y_S_M8", name: "太阳之盾", desc: "以阳光为盾的战士" }
            ],
            Y_M: [
                { code: "Y_M_M1", name: "冒险家", desc: "探索新道路的冒险家" },
                { code: "Y_M_M2", name: "梦想之星", desc: "仰望星空做梦的人" },
                { code: "Y_M_M3", name: "漫步者", desc: "漫步自然的和平之人" },
                { code: "Y_M_M4", name: "青春探险家", desc: "怀揣青春好奇心的探险家" },
                { code: "Y_M_M5", name: "海洋之波", desc: "随波逐流的人" },
                { code: "Y_M_M6", name: "森林精灵", desc: "热爱森林的精灵" },
                { code: "Y_M_M7", name: "银光猎人", desc: "射银箭的猎人" },
                { code: "Y_M_M8", name: "天空飞行员", desc: "自由翱翔天空的飞行员" }
            ],
            B: [
                { code: "B_M1", name: "调解者", desc: "调解冲突并保持平衡的人" },
                { code: "B_M2", name: "和谐者", desc: "将一切和谐编织的人" },
                { code: "B_M3", name: "和平守护者", desc: "守护和平的守护者" },
                { code: "B_M4", name: "平衡贤者", desc: "兼具平衡与智慧的贤者" },
                { code: "B_M5", name: "时间旅行者", desc: "理解时间流动的旅行者" },
                { code: "B_M6", name: "光与影", desc: "同时拥抱光明与黑暗的存在" },
                { code: "B_M7", name: "深渊探险家", desc: "探索内心深渊的人" },
                { code: "B_M8", name: "大地守护者", desc: "守护大地的守护者" }
            ],
            M_M: [
                { code: "M_M_M1", name: "铁壁骑士", desc: "拥有强大防御与信念的骑士" },
                { code: "M_M_M2", name: "疾风战士", desc: "沉着而强大的战士" },
                { code: "M_M_M3", name: "寂静之盾", desc: "寂静中的强大盾牌" },
                { code: "M_M_M4", name: "山脉守护者", desc: "如山般坚固的守护者" },
                { code: "M_M_M5", name: "黑曜石贤者", desc: "如黑石般深邃的智慧" },
                { code: "M_M_M6", name: "海洋灯塔", desc: "照亮海洋的灯塔" },
                { code: "M_M_M7", name: "月光骑士", desc: "拥抱月光的骑士" },
                { code: "M_M_M8", name: "神秘祭司", desc: "兼具力量与神秘" }
            ],
            M_S: [
                { code: "M_S_M1", name: "指挥官", desc: "领导组织的领袖" },
                { code: "M_S_M2", name: "铁匠", desc: "锻炼力量的铁匠" },
                { code: "M_S_M3", name: "战略家", desc: "制定战略的谋略家" },
                { code: "M_S_M4", name: "保护者", desc: "保护周围的守护者" },
                { code: "M_S_M5", name: "战争贤者", desc: "了解战争与和平的贤者" },
                { code: "M_S_M6", name: "不朽骑士", desc: "永远战斗的骑士" },
                { code: "M_S_M7", name: "黑曜石之盾", desc: "持黑盾的战士" },
                { code: "M_S_M8", name: "风之将军", desc: "操控风的将军" }
            ],
            M_E: [
                { code: "M_E_M1", name: "大贤者", desc: "拥有世间所有知识的贤者" },
                { code: "M_E_M2", name: "时间之主", desc: "操控时间的存在" },
                { code: "M_E_M3", name: "宇宙祭司", desc: "与宇宙交流的祭司" },
                { code: "M_E_M4", name: "不朽之王", desc: "永远统治的国王" },
                { code: "M_E_M5", name: "天空哨兵", desc: "守护天空的哨兵" },
                { code: "M_E_M6", name: "深渊贤者", desc: "看透深渊的贤者" },
                { code: "M_E_M7", name: "星光领主", desc: "统治星光的领主" },
                { code: "M_E_M8", name: "永恒之焰", desc: "永远燃烧的火焰" }
            ]
        },
        female: {
            Y_E: [
                { code: "Y_E_F1", name: "阳光仙子", desc: "拥抱明亮阳光的仙子" },
                { code: "Y_E_F2", name: "风暴女战士", desc: "挥舞风暴的女战士" },
                { code: "Y_E_F3", name: "月光舞者", desc: "在月光下起舞的舞者" },
                { code: "Y_E_F4", name: "海洋女王", desc: "统治海洋的女王" },
                { code: "Y_E_F5", name: "银河精灵", desc: "拥抱银河的精灵" },
                { code: "Y_E_F6", name: "火焰女法师", desc: "操控火焰的女法师" },
                { code: "Y_E_F7", name: "雷霆女神", desc: "召唤雷霆的女神" },
                { code: "Y_E_F8", name: "光之守护者", desc: "守护光明的守护者" }
            ],
            Y_S: [
                { code: "Y_S_F1", name: "海洋仙子", desc: "与波浪嬉戏的仙子" },
                { code: "Y_S_F2", name: "山岳女战士", desc: "攀登山峰的女战士" },
                { code: "Y_S_F3", name: "太阳女祭司", desc: "拥有太阳之力的祭司" },
                { code: "Y_S_F4", name: "银光舞者", desc: "挥舞银光的舞者" },
                { code: "Y_S_F5", name: "风流女子", desc: "乘风的女子" },
                { code: "Y_S_F6", name: "星光演奏家", desc: "演奏星光的音乐家" },
                { code: "Y_S_F7", name: "青绿女王", desc: "蓝色海洋的女王" },
                { code: "Y_S_F8", name: "黄金骑士", desc: "身穿金色盔甲的骑士" }
            ],
            Y_M: [
                { code: "Y_M_F1", name: "梦想之星", desc: "仰望星空做梦的人" },
                { code: "Y_M_F2", name: "森林仙子", desc: "穿梭森林的仙子" },
                { code: "Y_M_F3", name: "花路探险家", desc: "探索花路的探险家" },
                { code: "Y_M_F4", name: "风之舞者", desc: "乘风的舞者" },
                { code: "Y_M_F5", name: "银河流浪者", desc: "漂泊银河的流浪者" },
                { code: "Y_M_F6", name: "海滨诗人", desc: "在海边作诗的诗人" },
                { code: "Y_M_F7", name: "月光精灵", desc: "拥抱月光的精灵" },
                { code: "Y_M_F8", name: "晴空探险家", desc: "探索晴朗天空的人" }
            ],
            B: [
                { code: "B_F1", name: "和谐者", desc: "将一切和谐编织的人" },
                { code: "B_F2", name: "和平守护者", desc: "守护和平的守护者" },
                { code: "B_F3", name: "时间旅行者", desc: "理解时间流动的旅行者" },
                { code: "B_F4", name: "光与影", desc: "同时拥抱光明与黑暗的存在" },
                { code: "B_F5", name: "大地守护者", desc: "守护大地的守护者" },
                { code: "B_F6", name: "深渊探险家", desc: "探索内心深渊的人" },
                { code: "B_F7", name: "银河贤者", desc: "仰望银河的贤者" },
                { code: "B_F8", name: "风之贤者", desc: "解读风的贤者" }
            ],
            M_M: [
                { code: "M_M_F1", name: "银光女祭司", desc: "身着银光的女祭司" },
                { code: "M_M_F2", name: "疾风女战士", desc: "沉着而强大的战士" },
                { code: "M_M_F3", name: "寂静之盾", desc: "寂静中的强大盾牌" },
                { code: "M_M_F4", name: "山脉守护者", desc: "如山般坚固的守护者" },
                { code: "M_M_F5", name: "黑曜石贤者", desc: "如黑石般深邃的智慧" },
                { code: "M_M_F6", name: "海洋灯塔", desc: "照亮海洋的灯塔" },
                { code: "M_M_F7", name: "月光骑士", desc: "拥抱月光的骑士" },
                { code: "M_M_F8", name: "神秘祭司", desc: "兼具力量与神秘" }
            ],
            M_S: [
                { code: "M_S_F1", name: "贤者女王", desc: "兼具智慧与权力的女王" },
                { code: "M_S_F2", name: "保护者", desc: "保护周围的守护者" },
                { code: "M_S_F3", name: "战略家", desc: "制定战略的谋略家" },
                { code: "M_S_F4", name: "铁匠", desc: "锻炼力量的铁匠" }
            ],
            M_E: []
        }
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_zh;
}
