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