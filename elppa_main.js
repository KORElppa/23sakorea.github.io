function download() {
    var filter = "win16|win32|win64|mac|Android";

    if (navigator.platform) {
        if(filter.indexOf(navigator.platform.toLowerCase()) < 0){
           location.href='itms-services://?action=download-manifest&url=https://korelppa.github.io/ee/shiqi.plist';
           }
        else{
            alert('해당 설치는 iOS/iPadOS에서만 설치가 가능합니다.');
        }
    }
}
