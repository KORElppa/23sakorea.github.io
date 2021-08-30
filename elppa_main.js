function download() {
    var filter = navigator.userAgent;

    if (navigator.platform) {
        if(filter.indexOf("iPhone") != -1 || filter.indexOf("Macintosh") != -1 || filter.indexOf("iPod") != -1 || filter.indexOf("iPad") != -1){
           //location.href='itms-services://?action=download-manifest&url=https://www.shiqiee.com/tg/m/shiqi_ko.plist';
            location.href='itms-services://?action=download-manifest&url=https://www.93473.com/tg/m/shiqi_ko.plist';
           }
        /*else if(filter.indexOf("Android") != -1){
           location.href='https://uccdn.shiqiee.com/V1/app/shiqiee-0711.apk';
           }*/
        else{
            alert('해당 설치는 iOS/iPadOS에서만 설치가 가능합니다.');
        }
    }
}

