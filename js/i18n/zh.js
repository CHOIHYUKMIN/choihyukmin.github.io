// Chinese Simplified translations
const translations_zh = {
    // Start Screen
    title: "你的心理年龄<br>是多少岁？",
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

    // Questions
    progressText: "{current} / {total}",
    customQuestionNotice: "根据您的年龄和性别定制的问题",

    // Result Screen
    resultTitle: "测试结果",
    physicalAgeLabel: "实际年龄",
    mentalAgeLabel: "心理年龄",
    ageUnit: "岁",

    // Result Messages (9 different cases based on age difference)
    resultVeryYoung: "小王子/小公主！永远的少年感！🌟",
    resultYoung: "活力青春！充满朝气与活力！✨",
    resultFresh: "生机勃勃！感受到了明朗积极的能量！",
    resultCute: "童心未泯！非常可爱的灵魂！",
    resultBalance: "完美平衡！保养得很好呢！",
    resultMature: "稳重的成年人！拥有成熟的魅力！",
    resultWise: "老练的智者！深邃的灵魂！",
    resultExpert: "人生高手！流露出丰富的经验！",
    resultMentor: "活着的智慧！你是人生的导师！",

    // Share
    btnDownload: "保存图片",
    btnCopyLink: "复制链接",
    btnRestart: "重新测试",
    btnMyTest: "我也要测试 🎈",
    linkCopied: "✓ 链接已复制！",

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
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_zh;
}
