// Archetype definitions for MindAge project
// Structure: { gender: { levelCode: [{code, name, desc}, ...] } }
// levelCode: Y_E, Y_S, Y_M, B, M_M, M_S, M_E
// gender: "male" | "female"

const ARCHETYPES = {
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
        M_E: [] // (Optional) can be filled later if needed
    }
};

export default ARCHETYPES;
