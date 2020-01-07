function rebirth() {
    var count = Number($('#count').get(0).value); //환생
    var level = Number($('#level').get(0).value); //레벨
    var qust = Number($('#qust').get(0).value); //환포퀘
    var hp = Number($('#hp').get(0).value); //체력
    var attack = Number($('#attack').get(0).value); //공격
    var defense = Number($('#defense').get(0).value); //방어
    var speed = Number($('#speed').get(0).value); //순발
    var fullpoint = hp + attack + defense + speed; //전체 포인트
    var point = (fullpoint / 12) + (qust / 4) + (level - (85 * (count))) / 4;
    var counthp = Math.floor((hp / fullpoint) * (point) + 0.5);
    var countatt = Math.floor((attack / fullpoint) * (point) + 0.5);
    var countdef = Math.floor((defense / fullpoint) * (point) + 0.5);
    var countspeed = Math.floor((speed / fullpoint) * (point) + 0.5);
    alert("환생 포인트 : " + (point + (count * 10)).toFixed(0) + "\n" + "체   력 : " + counthp + "\n완   력 : " + countatt + "\n건   강 : " + countdef + "\n스피드 : " + countspeed + "\n오차가 있을 수 있습니다!\n\n1환생은 환생 퀘스트 문서를\n사용하지 않을 경우 무조건 60 포인트 입니다.");
}

function ride() {
    var chatt = Number($('#chatt').get(0).value); //캐릭터 공격력
    var chdef = Number($('#chdef').get(0).value); //캐릭터 방어력
    var chspd = Number($('#chspd').get(0).value); //캐릭터 순발력
    var petatt = Number($('#petatt').get(0).value); //탑승펫 공격력
    var petdef = Number($('#petdef').get(0).value); //탑승펫 방어력
    var petspd = Number($('#petspd').get(0).value); //탑승펫 순발력
    var resultatt = Math.floor((chatt * 80 / 100) + (petatt * 80 / 100));
    var resultdef = chdef + petdef;
    var resultspd = Math.floor((chspd * 20 / 100) + (petspd * 80 / 100));
    var resultatt2 = Math.floor(chatt + (petatt * 20 / 100));
    var resultspd2 = Math.floor((chspd * 80 / 100) + (petspd * 20 / 100));
    alert("계산 된 탑승 후 능력치 입니다!\n\n근거리 능력치\n공격력 : " + resultatt + "\n방어력 : " + resultdef + "\n순발력 : " + resultspd + "\n\n원거리 능력치\n공격력 : " + resultatt2 + "\n방어력 : " + resultdef + "\n순발력 : " + resultspd2 + "\n\n탑승 후 데미지\n캐릭터 : 총 데미지 X (" + Math.floor(petdef / resultdef * 1000) / 1000 + ")\n페트 : 총 데미지 X (" + Math.floor(chdef / resultdef * 1000) / 1000 + ")");
}

function down() {
    alert('현재 더 빠른 다운로드 속도를 위해 개인 다운로드 서버를 구축중입니다!\n사이트 하단의 광고 한번씩 클릭해주세요!');
    window.open('https://wkuackr-my.sharepoint.com/personal/sa_8001_wku_ac_kr/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fsa%5F8001%5Fwku%5Fac%5Fkr%2FDocuments%2Fapk%2F精灵王传说%5FV20191210%5Fsa182%5Ffull%5Fsigned%2Eapk');
}

function link(key) {
    location.href = key;
}
