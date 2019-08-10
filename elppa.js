function rebirth(){
    var count = Number($('#count').get(0).value); //환생
    var level = Number($('#level').get(0).value); //레벨
    var qust = Number($('#qust').get(0).value); //환포퀘
    var hp = Number($('#hp').get(0).value); //체력
    var attack = Number($('#attack').get(0).value); //공격
    var defense = Number($('#defense').get(0).value); //방어
    var speed = Number($('#speed').get(0).value); //순발
    var fullpoint = hp+attack+defense+speed; //전체 포인트
    var point = Math.floor((fullpoint/12)+(qust/4)+(level-(85*(count)))/4);
    var counthp = Math.floor((hp/fullpoint)*(point)+0.5);
    var countatt = Math.floor((attack/fullpoint)*(point)+0.5);
    var countdef = Math.floor((defense/fullpoint)*(point)+0.5);
    var countspeed = Math.floor((speed/fullpoint)*(point)+0.5);
    alert("환생 포인트 : "+(point+(count*10))+"\n"+"체   력 : "+counthp+"\n완   력 : "+countatt+"\n건   강 : "+countdef+"\n스피드 : "+countspeed+"\n오차가 있을 수 있습니다!");
}

function ride(){
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
    alert("계산 된 탑승 후 능력치 입니다!\n근거리 능력치\n공격력 : "+resultatt+"\n방어력 : "+resultdef+"\n순발력 : "+resultspd+"\n\n원거리 능력치\n공격력 : "+resultatt2+"\n방어력 : "+resultdef+"\n순발력 : "+resultspd2+"\n\n탑승 후 데미지\n캐릭터 : 총 데미지 X ("+petdef/resultdef+")\n페트 : 총 데미지 X ("+chdef/resultdef);
}

function link(key){
    location.href = key;
}