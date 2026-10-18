// 케릭터 리스트
const characters = [
    { id: "suoming", name: "쇄명", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "hsin", name: "여우의 별자리", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "jingran", name: "경연", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "qingxiao", name: "청초", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "suisui", name: "수수", el: "glacio", elList: ["glacio"], maxUse: 2},
    { id: "yangyang_xuanling", name: "양양·현령", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "lucila", name: "루실라", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "lucy", name: "루시", el: "spectro", elList: ["spectro"], maxUse: 1},
    { id: "rebecca", name: "레베카", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "denia", name: "데니아", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "hiyuki", name: "히유키", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "sigrika", name: "시그리카", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "luke_hersen", name: "루크·헤르센", el: "spectro", elList: ["spectro"], maxUse: 1},
    { id: "eimes", name: "에이메스", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "monie", name: "모니에", el: "fusion", elList: ["fusion"], maxUse: 2},
    { id: "linne", name: "린네", el: "spectro", elList: ["spectro"], maxUse: 2},
    { id: "chisa", name: "치사", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "ciaccona", name: "구원", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "galbrena", name: "갈브레나", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "yuno", name: "유노", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "augusta", name: "아우구스타", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "floro", name: "플로로", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "lupa", name: "루파", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "cartethyia", name: "카르티시아", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "chaconne", name: "샤콘", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "zani", name: "젠니", el: "spectro", elList: ["spectro"], maxUse: 1},
    { id: "cantarella", name: "칸타렐라", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "brant", name: "브렌트", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "phoebe", name: "페비", el: "spectro", elList: ["spectro"], maxUse: 1},
    { id: "roccia", name: "로코코", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "carlotta", name: "카를로타", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "camellya", name: "카멜리아", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "shorekeeper", name: "파수인", el: "spectro", elList: ["spectro"], maxUse: 2},
    { id: "zhezhi", name: "절지", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "xiangli_yao", name: "상리요", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "changli", name: "장리", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "jinhsi", name: "금희", el: "spectro", elList: ["spectro"], maxUse: 1},
    { id: "yinlin", name: "음림", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "jiyan", name: "기염", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "rover", name: "방랑자", el: "aero", elList: ["havoc", "spectro", "aero", "electro"], maxUse: 1},
    { id: "jianxin", name: "감심", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "verina", name: "벨리나", el: "spectro", elList: ["spectro"], maxUse: 2},
    { id: "lingyang", name: "능양", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "encore", name: "앙코", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "calcharo", name: "카카루", el: "electro", elList: ["electro"], maxUse: 1},

    // 4성 리스트
    { id: "buling", name: "복링", el: "electro", elList: ["electro"], maxUse: 2},
    { id: "lumi", name: "루미", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "youhu", name: "유호", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "yangyang", name: "양양", el: "aero", elList: ["aero"], maxUse: 1},
    { id: "sanhua", name: "산화", el: "glacio", elList: ["glacio"], maxUse: 1},
    { id: "baizhi", name: "설지", el: "glacio", elList: ["glacio"], maxUse: 2},
    { id: "yuanwu", name: "연무", el: "electro", elList: ["electro"], maxUse: 1},
    { id: "mortefi", name: "모르테피", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "taoqi", name: "도기", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "chixia", name: "치샤", el: "fusion", elList: ["fusion"], maxUse: 1},
    { id: "danjin", name: "단근", el: "havoc", elList: ["havoc"], maxUse: 1},
    { id: "aalto", name: "알토", el: "aero", elList: ["aero"], maxUse: 1},
];

const STORAGE_KEY = "matrixPartySimulator";
const DEFAULT_OWNED = true;
let popupFilter = "all";

let parties = [
    [null, null, null]
];

let partyUsed = [false];
let partyCircuits = [null];
const circuits = structuredClone(window.MATRIX_CIRCUITS);

let dragData = null;
let currentFilter = "all";
let showOwnedOnly = false;
let ownedMap = {};
let tempOwnedMap = {};

function initOwnedMap() {
    characters.forEach(character => {
        if (ownedMap[character.id] === undefined) {
            ownedMap[character.id] = DEFAULT_OWNED;
        }
    });
}

function saveLocalData() {
    const data = {
        parties,
        partyUsed,
        partyCircuits,
        ownedMap,
        currentFilter,
        showOwnedOnly
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadLocalData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
        initOwnedMap();
        return;
    }

    try {
        const data = JSON.parse(savedData);

        if (Array.isArray(data.parties) && data.parties.length > 0) {
            parties = data.parties;
        }
 
        if (Array.isArray(data.partyUsed)) {
            partyUsed = data.partyUsed;
        }
        if (Array.isArray(data.partyCircuits)) partyCircuits = data.partyCircuits;

        if (data.ownedMap) {
            ownedMap = data.ownedMap;
        }

        if (data.currentFilter) {
            currentFilter = data.currentFilter;
        }

        if (typeof data.showOwnedOnly === "boolean") {
            showOwnedOnly = data.showOwnedOnly;
        }
    } catch (e) {
        parties = [[null, null, null]];
        ownedMap = {};
    }

    while (partyUsed.length < parties.length) {
        partyUsed.push(false);
    }
    partyCircuits = parties.map((_, i) => partyCircuits[i] || null);
    initOwnedMap();
}

function getUsedCount(characterId) {
    return parties.flat().filter(id => id === characterId).length;
}

function getRemainUse(characterId) {
    const character = characters.find(c => c.id === characterId);
    return character.maxUse - getUsedCount(characterId);
}

function isOwned(characterId) {
    return ownedMap[characterId] !== false;
}

function isVisibleCharacter(character) {
    const filterMatch = currentFilter === "all" || character.elList.includes(currentFilter);
    const ownedMatch = !showOwnedOnly || isOwned(character.id);

    return filterMatch && ownedMatch;
}

function renderFilters() {
    document.querySelectorAll("#mainFilter li").forEach(li => {
        li.classList.toggle("active", li.dataset.filter === currentFilter);
    });

    document.querySelector("#ownedFilterBtn").classList.toggle("active", showOwnedOnly);
}

function renderPopupFilters() {
    document
        .querySelectorAll("#ownedPopup .main_filter li")
        .forEach(li => {
            li.classList.toggle(
                "active",
                li.dataset.filter === popupFilter
            );
        });
}

function renderCharacters() {
    const characterList = document.querySelector("#characterList");
    characterList.innerHTML = "";

    characters
        .filter(character => isVisibleCharacter(character))
        .forEach(character => {
            const remainUse = getRemainUse(character.id);
            const owned = isOwned(character.id);

            const li = document.createElement("li");
            li.className = `char_item el_${character.el}`;
            li.draggable = remainUse > 0 && owned;
            li.dataset.id = character.id;

            if (remainUse === 0 || !owned) {
                li.classList.add("disabled");
            }

            if (!owned) {
                li.classList.add("not_owned");
            }

            li.innerHTML = `   
                <div class="char_img"><img src="images/${character.id}.png" alt="${character.name}"></div>
                <p>${character.name}</p>
            `;

            li.addEventListener("dragstart", e => {
                const remainUse = getRemainUse(character.id);

                if (remainUse <= 0 || !isOwned(character.id)) {
                    e.preventDefault();
                    dragData = null;
                    return;
                }

                dragData = {
                    type: "character",
                    characterId: character.id
                };

                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/plain", character.id);
                e.dataTransfer.setDragImage(li.querySelector("img"), 40, 40);
            });

            characterList.appendChild(li);
        });
}

function renderParties() {
    const partyArea = document.querySelector("#partyArea");
    partyArea.innerHTML = "";

    parties.forEach((party, partyIndex) => {
        const partyCont = document.createElement("div");
        partyCont.className = "party_cont";

        partyCont.innerHTML = `
            <div class="party_order">
                <strong class="party_number">${String(partyIndex + 1).padStart(2, "0")}</strong>
                <button type="button" class="party_handle" draggable="true" aria-label="${partyIndex + 1}번 파티 순서 이동" title="드래그하여 순서 이동">☰</button>
            </div>
            <div class="cont_body"></div>
            <button type="button" class="circuit_slot" aria-label="${partyIndex + 1}번 파티 회로 선택"></button>
            <div class="cont_opt">
                <button type="button" class="party_btn used_btn" aria-pressed="${!!partyUsed[partyIndex]}">${partyUsed[partyIndex] ? "✓ 사용완료" : "사용완료"}</button>
                <button type="button" class="party_btn del">삭제</button>
            </div>
        `;

        const contBody = partyCont.querySelector(".cont_body");
        partyCont.querySelector(".used_btn").addEventListener("click", () => {
            partyUsed[partyIndex] = !partyUsed[partyIndex];
            render();
        });
        const circuit = circuits.find(c => c.id === partyCircuits[partyIndex]);
        const circuitSlot = partyCont.querySelector(".circuit_slot");
        circuitSlot.innerHTML = circuit
            ? circuitIcon(circuit.icon) + '<span></span>'
            : `<svg viewBox="0 0 24 24" class="circuit_icon" aria-hidden="true"
                    fill="none" stroke="currentColor" stroke-width="1.6"
                    stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14 M5 12h14"></path>
            </svg><span></span>`;
        circuitSlot.querySelector("span").textContent = circuit?.shortName || "회로 선택";
        circuitSlot.title = circuit ? `${circuit.name}\n${circuit.description}` : "회로 선택";
        circuitSlot.addEventListener("click", () => openCircuitPicker(partyIndex));
        partyCont.querySelector(".party_handle").addEventListener("dragstart", e => {
            dragData = { type: "party", fromPartyIndex: partyIndex };
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", `party:${partyIndex}`);
            e.dataTransfer.setDragImage(partyCont, 30, 30);
            partyCont.classList.add("dragging");
        });
        partyCont.addEventListener("dragover", e => {
            if (dragData?.type !== "party") return;
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            partyCont.classList.add("drop_target");
        });
        partyCont.addEventListener("dragleave", e => {
            if (!partyCont.contains(e.relatedTarget)) partyCont.classList.remove("drop_target");
        });
        partyCont.addEventListener("drop", e => {
            if (dragData?.type !== "party") return;
            e.preventDefault();
            const from = dragData.fromPartyIndex;
            dragData = null;
            moveParty(from, partyIndex);
        });

        if (partyUsed[partyIndex]) {
            partyCont.classList.add("used");
        }

        party.forEach((characterId, slotIndex) => {
            const slot = document.createElement("div");
            slot.className = "slot";
            slot.dataset.party = partyIndex;
            slot.dataset.slot = slotIndex;

            slot.addEventListener("dragover", e => {
                e.preventDefault();
            });

            slot.addEventListener("drop", e => {
                if (dragData?.type === "party") return;
                e.preventDefault();
                e.stopPropagation();

                if (!dragData) return;

                const targetCharacterId = parties[partyIndex][slotIndex];

                if (dragData.type === "character") {
                    if (parties[partyIndex].includes(dragData.characterId)) return;
                    if (getRemainUse(dragData.characterId) <= 0) return;
                    if (!isOwned(dragData.characterId)) return;

                    parties[partyIndex][slotIndex] = dragData.characterId;
                }

                if (dragData.type === "slot") {
                    const fromPartyIndex = dragData.fromPartyIndex;
                    const fromSlotIndex = dragData.fromSlotIndex;
                    const movingCharacterId = dragData.characterId;

                    if (fromPartyIndex === partyIndex && fromSlotIndex === slotIndex) {
                        dragData = null;
                        return;
                    }

                    const targetParty = [...parties[partyIndex]];

                    if (fromPartyIndex === partyIndex) {
                        targetParty[fromSlotIndex] = null;
                    }

                    if (
                        targetParty.includes(movingCharacterId) &&
                        targetCharacterId !== movingCharacterId
                    ) {
                        return;
                    }
                    if (fromPartyIndex !== partyIndex && targetCharacterId &&
                        parties[fromPartyIndex].some((id, i) => i !== fromSlotIndex && id === targetCharacterId)) return;

                    parties[fromPartyIndex][fromSlotIndex] = targetCharacterId;
                    parties[partyIndex][slotIndex] = movingCharacterId;
                }

                dragData = null;
                render();
            });

            if (characterId) {
                const character = characters.find(c => c.id === characterId);

                slot.innerHTML = `
                    <div class="done" draggable="true">
                        <span class="remove_char">×</span>
                        <img src="images/${character.id}.png" alt="${character.name}">
                    </div>
                `;

                slot.querySelector(".done").addEventListener("dragstart", e => {
                    dragData = {
                        type: "slot",
                        characterId: characterId,
                        fromPartyIndex: partyIndex,
                        fromSlotIndex: slotIndex
                    };

                    e.dataTransfer.effectAllowed = "move";
                    e.dataTransfer.setData("text/plain", characterId);
                    e.dataTransfer.setDragImage(slot.querySelector("img"), 40, 40);
                });

                slot.addEventListener("dragover", e => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "move";
                });

                slot.querySelector(".remove_char").addEventListener("click", () => {
                    parties[partyIndex][slotIndex] = null;
                    render();
                });

                slot.querySelector(".remove_char").addEventListener("dragstart", e => {
                    e.stopPropagation();
                    e.preventDefault();
                });
            } else {
                slot.innerHTML = `
                    <div class="none"><span>+</span><p>캐릭터 추가</p></div>
                `;
            }

            contBody.appendChild(slot);
        });

        partyCont.querySelector(".party_btn.del").addEventListener("click", () => {
            if (parties.length === 1) {
                parties[0] = [null, null, null];
                partyUsed[0] = false;
                partyCircuits[0] = null;
            } else {
                parties.splice(partyIndex, 1);
                partyUsed.splice(partyIndex, 1);
                partyCircuits.splice(partyIndex, 1);
            }

            render();
        });

        partyArea.appendChild(partyCont);
    });
}

function renderOwnList() {
    const ownList = document.querySelector("#ownList");
    ownList.innerHTML = "";

    characters
        .filter(character =>
            popupFilter === "all" || character.elList.includes(popupFilter)
        )
        
        .forEach(character => {
            const owned = tempOwnedMap[character.id] !== false;

            const li = document.createElement("li");
            li.className = owned ? "" : "not_owned";
            li.dataset.id = character.id;

            li.innerHTML = `
                <div class="own_img ${owned ? "" : "none"}">
                    <img src="images/${character.id}.png" alt="${character.name}">
                </div>
                <p>${character.name}</p>
                <dl>
                    <dt class="${owned ? "active" : ""}">보유</dt>
                    <dd class="${!owned ? "active" : ""}">미보유</dd>
                </dl>
            `;

            li.querySelector("dt").addEventListener("click", () => {
                tempOwnedMap[character.id] = true;
                renderOwnList();
            });

            li.querySelector("dd").addEventListener("click", () => {
                tempOwnedMap[character.id] = false;
                renderOwnList();
            });

            ownList.appendChild(li);
            renderPopupFilters();
        });
}

function openOwnedPopup() {
    tempOwnedMap = { ...ownedMap };
    popupFilter = "all";
    renderOwnList();

    document.querySelector("#layerDim").classList.add("active");
    document.querySelector("#ownedPopup").classList.add("active");
    document.querySelector(".wrap").classList.add("lock");
}

function closeOwnedPopup() {
    document.querySelector("#layerDim").classList.remove("active");
    document.querySelector("#ownedPopup").classList.remove("active");
    document.querySelector(".wrap").classList.remove("lock");
}

document.querySelector("#mainFilter").addEventListener("click", e => {
    const filterBtn = e.target.closest("li");

    if (!filterBtn) return;

    currentFilter = currentFilter === filterBtn.dataset.filter ? "all" : filterBtn.dataset.filter;
    render();
});

document.querySelector("#ownedPopup .main_filter").addEventListener("click", e => {
    const btn = e.target.closest("li");
    if (!btn) return;

    popupFilter = btn.dataset.filter;
    renderOwnList();
});

document.querySelector("#ownedFilterBtn").addEventListener("click", () => {
    showOwnedOnly = !showOwnedOnly;
    render();
});

document.querySelector("#ownedPopupBtn").addEventListener("click", () => {
    openOwnedPopup();
});

document.querySelector("#ownedOkBtn").addEventListener("click", () => {
    ownedMap = {...tempOwnedMap};

    parties = parties.map(party => {
        return party.map(characterId => {
            if (!characterId) return null;
            return isOwned(characterId) ? characterId : null;
        });
    });

    closeOwnedPopup();
    render();
});

document.querySelector("#ownedCancelBtn").addEventListener("click", () => {
    closeOwnedPopup();
});

document.querySelector("#layerDim").addEventListener("click", () => {
    closeOwnedPopup();
});

document.querySelector("#addPartyBtn").addEventListener("click", () => {
    parties.push([null, null, null]);
    partyUsed.push(false);
    partyCircuits.push(null);
    render();
});

document.querySelector("#saveBtn").addEventListener("click", () => {
    const today = new Date().toISOString().slice(0, 10);
    let text = "";

    parties.forEach((party, idx) => {
        text += `파티 ${idx + 1}\n`;

        const names = party
            .filter(charId => charId)
            .map(charId => {
                const character = characters.find(c => c.id === charId);
                return character.name;
            });

        const circuit = circuits.find(c => c.id === partyCircuits[idx]);
        text += `- ${names.join(" / ")}\n`;
        text += `- 상태: ${partyUsed[idx] ? "사용완료" : "미사용"}\n`;
        text += `- 회로: ${circuit ? circuit.name : "미선택"}\n\n`;
    });

    const blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `매트릭스_${today}.txt`;
    a.click();

    URL.revokeObjectURL(url);
});

document.querySelector("#resetPartyBtn").addEventListener("click", () => {
    if (!confirm("파티 구성을 초기화할까요?")) return;

    parties = [
        [null, null, null]
    ];

    partyUsed = [false];
    partyCircuits = [null];
    
    render();
});

function moveParty(from, to) {
    if (to < 0 || to >= parties.length) return;
    [parties, partyUsed, partyCircuits].forEach(list => list.splice(to, 0, list.splice(from, 1)[0]));
    render();
}

document.addEventListener("dragend", () => {
    dragData = null;
    document.querySelectorAll(".dragging, .drop_target").forEach(el => el.classList.remove("dragging", "drop_target"));
});

function circuitIcon(kind) {
    const paths = {
        buff_01: 'images/buff_01.png',
        buff_02: 'images/buff_02.png',
        buff_03: 'images/buff_03.png',
        buff_04: 'images/buff_04.png'
    };
    return `<img src="${paths[kind]}">`;
}

const circuitDialog = document.querySelector("#circuitDialog");
document.querySelector("#closeCircuitBtn").addEventListener("click", () => circuitDialog.close());

function setupCircuitDialog(title, help) {
    document.querySelector("#circuitTitle").textContent = title;
    document.querySelector("#circuitHelp").textContent = help;
    document.querySelector("#circuitContent").replaceChildren();
    document.querySelector("#circuitFooter").replaceChildren();
    if (!circuitDialog.open) circuitDialog.showModal();
}

function dialogButton(label, handler, primary = false) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = primary ? "party_btn" : "party_btn secondary";
    button.textContent = label;
    button.addEventListener("click", handler);
    document.querySelector("#circuitFooter").appendChild(button);
    return button;
}

function openCircuitPicker(partyIndex) {
    let selected = circuits.some(c => c.id === partyCircuits[partyIndex]) ? partyCircuits[partyIndex] : null;
    setupCircuitDialog(`${partyIndex + 1}번 파티 · 회로 버프 선택`, "파티에 적용할 회로 버프를 선택하세요. 선택한 회로를 다시 누르면 해제됩니다.");
    const content = document.querySelector("#circuitContent");
    content.className = "circuit_grid";
    circuits.forEach(circuit => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "circuit_card";
        button.setAttribute("aria-pressed", String(selected === circuit.id));
        button.innerHTML = circuitIcon(circuit.icon) + '<strong></strong><p></p>';
        button.querySelector("strong").textContent = circuit.name;
        button.querySelector("p").textContent = circuit.description;
        button.addEventListener("click", () => {
            selected = selected === circuit.id ? null : circuit.id;
            content.querySelectorAll("button").forEach(el => el.setAttribute("aria-pressed", String(selected !== null && el === button)));
        });
        content.appendChild(button);
    });
    dialogButton("확인", () => {
        partyCircuits[partyIndex] = selected;
        render();
        circuitDialog.close();
    }, true);
    dialogButton("취소", () => circuitDialog.close());
}

function render() {
    renderFilters();
    renderCharacters();
    renderParties();
    saveLocalData();
}

loadLocalData();
render();

document.querySelector("#saveImageBtn").addEventListener("click", async () => {
    const capture = document.createElement("div");

    capture.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: 1200px;
        padding: 30px;
        background: #0b0b10;
        color: white;
        font-family: Arial, sans-serif;
    `;

    const today = new Date().toLocaleDateString("ko-KR");

    /*
    capture.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;
                    margin-bottom:24px; padding-bottom:20px; border-bottom:1px solid #333;">
            <div>
                <h1 style="color:white; font-size:28px; margin:0;">
                명조 매트릭스 파티 빌더
            </h1>
            <p style="color:#999; margin-top:8px;">
                명조: 워더링 웨이브 종말 매트릭스 파티 편성표
            </p>
            </div>
            <strong style="color:#ffbf00;">${today}</strong>
        </div>
        

        <div id="captureParties"
             style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        </div>
    `;
    */

    capture.innerHTML = `
        <div id="captureParties"
            style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        </div>
    `;

    const partyContainer = capture.querySelector("#captureParties");

    parties.forEach((party, index) => {
        const circuit = circuits.find(c => c.id === partyCircuits[index]);

        const card = document.createElement("div");

        card.style.cssText = `
            display:flex;
            align-items:center;
            justify-content:center;
            gap:12px;
            padding:20px;
            background:#15151d;
            border:1px solid #30303a;
            border-radius:16px;
        `;

        let html = `
            <strong style="color:#777; font-size:22px; margin-right:12px;">
                ${String(index + 1).padStart(2, "0")}
            </strong>
        `;

        party.forEach(characterId => {
            const character = characters.find(c => c.id === characterId);

            html += `
                <div style="width:90px; text-align:center;">
                    <div style="height:90px; border:1px solid #333;
                                border-radius:10px; overflow:hidden;">
                        ${character
                            ? `<img src="images/${character.id}.png"
                                    style="width:100%; height:100%; object-fit:cover;">`
                            : `<div style="color:#666; padding-top:35px;">+</div>`
                        }
                    </div>
                    <p style="color:white; font-size:12px; margin-top:5px;">
                        ${character ? character.name : "-"}
                    </p>
                </div>
            `;
        });

        html += `
            <div style="width:90px; text-align:center;">
                <div style="height:90px; display:flex; align-items:center;
                            justify-content:center; border:1px solid #333;
                            border-radius:10px;">
                    ${circuit
                        ? circuitIcon(circuit.icon).replace('<img ', '<img style="width:64px; height:64px; object-fit:contain;" ')
                        : `<span style="color:#666;">+</span>`
                    }
                </div>
                <p style="color:white; font-size:12px; margin-top:5px;">
                    ${circuit ? circuit.shortName : "-"}
                </p>
            </div>
        `;

        card.innerHTML = html;
        partyContainer.appendChild(card);
    });

    document.body.appendChild(capture);

    try {
        await Promise.all(
            Array.from(capture.querySelectorAll("img")).map(img => {
                if (img.complete) return Promise.resolve();

                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            })
        );

        const canvas = await html2canvas(capture, {
            backgroundColor: "#0b0b10",
            scale: 2
        });

        const link = document.createElement("a");
        link.download = `매트릭스_파티_${today.replace(/\.\s*/g, "-").replace(/-$/, "")}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();

    } finally {
        capture.remove();
    }
});