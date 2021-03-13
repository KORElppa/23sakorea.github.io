function download() {
    var filter = navigator.userAgent;

    if (navigator.platform) {
        if(filter.indexOf("iPhone") != -1 || filter.indexOf("Macintosh") != -1 || filter.indexOf("iPod") != -1 || filter.indexOf("iPad") != -1){
           //location.href='itms-services://?action=download-manifest&url=https://www.shiqiee.com/tg/m/shiqi_ko.plist';
            location.href='itms-beta://testflight.apple.com/join/gKjn5ZG6';
           }
        /*else if(filter.indexOf("Android") != -1){
           location.href='https://uccdn.shiqiee.com/V1/app/shiqiee-0711.apk';
           }*/
        else{
            alert('해당 설치는 iOS/iPadOS에서만 설치가 가능합니다.');
        }
    }
}

