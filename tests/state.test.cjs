// 브라우저 UI 없이 기존 저장 데이터 호환성과 파티 메타데이터 이동을 검증합니다.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');

function app(saved) {
    const storage = new Map(saved ? [['matrixPartySimulator', JSON.stringify(saved)]] : []);
    const handlers = new Map();
    const context = vm.createContext({
        window: {}, structuredClone,
        document: { querySelector: selector => ({ addEventListener(event, callback) { handlers.set(`${selector}:${event}`, callback); } }), addEventListener() {} },
        localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }
    });
    vm.runInContext(fs.readFileSync(path.join(root, 'js/circuits.js'), 'utf8'), context);
    const source = fs.readFileSync(path.join(root, 'js/script.js'), 'utf8').replace(/^loadLocalData\(\);\s*render\(\);/m, '');
    vm.runInContext(source + '\nrender = () => saveLocalData(); loadLocalData();', context);
    return {
        run: code => vm.runInContext(code, context),
        click: (selector, event = {}) => handlers.get(`${selector}:click`)(event),
        state: () => JSON.parse(vm.runInContext('JSON.stringify({parties, partyUsed, partyCircuits, ownedMap})', context)),
        saved: () => JSON.parse(storage.get('matrixPartySimulator'))
    };
}

test('기존 저장 데이터에 회로 필드가 없어도 파티와 사용 상태 유지', () => {
    const a = app({ parties: [['verina', null, null], ['shorekeeper', null, null]], partyUsed: [true], ownedMap: { jiyan: false } });
    assert.deepEqual(a.state().partyCircuits, [null, null]);
    assert.deepEqual(a.state().partyUsed, [true, false]);
    assert.equal(a.state().parties[0][0], 'verina');
    assert.equal(a.state().ownedMap.jiyan, false);
});

test('파티 순서를 바꾸면 캐릭터, 사용완료, 회로가 함께 이동하고 저장됨', () => {
    const a = app({ parties: [['verina', null, null], ['jiyan', null, null], ['shorekeeper', null, null]], partyUsed: [true, false, false], partyCircuits: ['status', 'damage', 'general'] });
    a.run('moveParty(0, 2)');
    assert.deepEqual(a.saved().parties.map(p => p[0]), ['jiyan', 'shorekeeper', 'verina']);
    assert.deepEqual(a.saved().partyUsed, [false, false, true]);
    assert.deepEqual(a.saved().partyCircuits, ['damage', 'general', 'status']);
    a.run('moveParty(2, 0)');
    assert.deepEqual(a.state().partyCircuits, ['status', 'damage', 'general']);
});

test('동일 위치와 범위 밖 순서 이동으로 파티 데이터가 손실되지 않음', () => {
    const a = app();
    const before = a.state();
    a.run('moveParty(0, 0); moveParty(0, -1); moveParty(0, 1)');
    assert.deepEqual(a.state(), before);
});

test('저장 후 다시 불러와도 파티 회로와 사용 상태 유지', () => {
    const a = app({ parties: [['verina', null, null]], partyUsed: [true], partyCircuits: ['harmony'] });
    a.run('saveLocalData()');
    const b = app(a.saved());
    assert.deepEqual(b.state(), a.state());
});

test('보유설정 속성 재클릭은 ALL, 다른 속성 클릭은 해당 속성으로 전환', () => {
    const a = app();
    a.run('renderOwnList = () => {}');
    const choose = filter => a.click('#ownedPopup .main_filter', { target: { closest: () => ({ dataset: { filter } }) } });
    choose('glacio');
    assert.equal(a.run('popupFilter'), 'glacio');
    choose('glacio');
    assert.equal(a.run('popupFilter'), 'all');
    choose('fusion');
    choose('aero');
    assert.equal(a.run('popupFilter'), 'aero');
    choose('all');
    assert.equal(a.run('popupFilter'), 'all');
});

test('미사용 필터는 남은 횟수 기준으로 표시하고 캐릭터 제거 시 다시 표시', () => {
    const a = app({ parties: [['jiyan', 'verina', null]] });
    a.click('#unusedFilterBtn');
    const visible = id => a.run(`isVisibleCharacter(characters.find(c => c.id === '${id}'))`);
    assert.equal(visible('jiyan'), false);
    assert.equal(visible('verina'), true);
    a.run('parties.push(["verina", null, null])');
    assert.equal(visible('verina'), false);
    a.run('parties[1][0] = null');
    assert.equal(visible('verina'), true);
    a.click('#unusedFilterBtn');
    assert.equal(visible('jiyan'), true);
});

test('미사용·보유·속성 필터를 조합하고 새로고침 후 설정 유지', () => {
    const a = app({ parties: [['jiyan', null, null]], ownedMap: { jianxin: false }, currentFilter: 'aero', showOwnedOnly: true });
    a.click('#unusedFilterBtn');
    const b = app(a.saved());
    assert.equal(b.run('showUnusedOnly'), true);
    assert.equal(b.run('isVisibleCharacter(characters.find(c => c.id === "jiyan"))'), false);
    assert.equal(b.run('isVisibleCharacter(characters.find(c => c.id === "jianxin"))'), false);
    assert.equal(b.run('isVisibleCharacter(characters.find(c => c.id === "verina"))'), false);
    assert.equal(b.run('isVisibleCharacter(characters.find(c => c.id === "aalto"))'), true);
    assert.equal(app().run('showUnusedOnly'), false);
});
