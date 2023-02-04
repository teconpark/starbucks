// 본 JS를 index.html head에서 호출
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubePlayerAPIReady() {
  new YT.Player('player', {   // player --> <div id="player"></div>
    videoId: 'An6LvWQuj_8',   // youtube 소스코드도 있지만 제어 불가. 아이디 이용
    playerVars: {
      autoplay: true,         // 자동재생 여부
      loop: true,             // 반복재생 여부. playList를 제공해야 함
      playList: 'An6LvWQuj_8' // 반복재생할 유튜브영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute()   // 음소거
      }
    }
  })
}