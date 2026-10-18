// 시즌 변경 시 이 파일을 수정하고 GitHub에 올리세요.
// id는 기존 파티의 선택을 연결하는 값입니다. 같은 회로를 수정할 때는 유지하세요.
// shortName: 파티 이미지 아래 표시 / name: 선택창 제목 / description: 버프 설명
// icon: status, damage, harmony, general 중 선택
// 설명은 제공된 인게임 이미지 기준입니다. 시즌 변경 시 내용을 갱신하세요.
window.MATRIX_CIRCUITS = [
    {
        id: "general", shortName: "공용", name: "공용 강화", icon: "general",
        description: "적군이 받는 피해가 최종적으로 20% 증가되고, 적군이 받는 일반 공격 피해가 최종적으로 20% 증가된다."
    },
    {
        id: "status", shortName: "이상", name: "이상 효과 강화", icon: "status",
        description: "캐릭터가 이상 효과를 추가할 시, 목표가 받는 최종 피해를 25% 증가시키고, 받는 전도 최종 피해를 추가로 30% 증가시키며, 30초간 지속된다."
    },
    {
        id: "damage", shortName: "기본피해", name: "기본 피해 강화", icon: "damage",
        description: "에코 어빌리티 피해가 최종적으로 40% 증가된다.\n캐릭터가 합일 대응 시, 입히는 피해가 최종적으로 55% 증가되고, 30초간 지속된다.\n캐릭터가 실드 획득 시, 입히는 최종 피해가 11% 증가되고, 최대 5스택 중첩이 가능하며, 2초간 지속되고, 캐릭터가 퇴장 시 제거된다."
    },
    {
        id: "harmony", shortName: "조화도", name: "조화도 파괴 강화", icon: "harmony",
        description: "캐릭터가 조화도 · 이탈 상태를 추가할 시, 파티 전체의 피해가 최종적으로 25% 증가되고 30초간 지속된다.\n캐릭터가 해킹 · 이탈 상태를 추가할 시, 입히는 피해가 최종적으로 30% 증가되고 30초간 지속된다."
    }
];
