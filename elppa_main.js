function download() {
    var filter = navigator.userAgent;

    if (navigator.platform) {
        if(filter.indexOf("iPhone") || filter.indexOf("iPad") || filter.indexOf("iPod")){
           location.href='itms-services://?action=download-manifest&url=https://korelppa.github.io/ee/shiqi.plist';
           }
        else{
            alert('해당 설치는 iOS/iPadOS에서만 설치가 가능합니다.');
        }
    }
}

