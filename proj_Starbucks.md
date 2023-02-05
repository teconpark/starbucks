# Starbucks Homepage 만들기
## 1. 시작하기
### 1) 프로젝트시작
. index.html  : 생성, 문자인코딩 설정, 스타일 초기화, css 연결, favicon  
. main.css    : css폴더에 생성. index파일과 연결  

. 문자 인코딩(Character Encoding) 설정  
`<meta charset="UTF-8"/>` UTF-8: 초성, 중성, 종성으로 구분하여 문자를 작성(권장). EUC-KR: 하나의 완성된 글자를 인식  

. 스타일초기화  : `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-reset@0.0.1/reset.min.css">`

. 뷰포트(Viewport) 렌더링 방식 설정  
웹페이지가 화면(Viewport)에 표현되는 방식 설정.
모바일 환경에서 적용됨.

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`  
width=device-width : 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용  
initial-scale=1.0 : 화면의 초기 화면 배율(확대 정도)을 설정  
user-scalable=no : 사용자가 디바이스 화면을 확대(yes)/축소(no)할 수 있는지 설정  
maximum-scale=1 : 사용자가 화면을 확대할 수 있는 최댓값  
minimum-scale=1 : 사용자가 화면을 축소할 수 있는 최솟값

. Favicon, favorite icon  
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정.
대부분의 경우 루트 경로에 favicon.ico 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없음. favicon.png 파일을 사용하려면 다음과 같이 `<link />`를 작성.

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

favicon.ico 64 x 64 (px) 또는 32 x 32 또는 16 x 16  
favicon.png 500 x 500 (px)


### 2) 오픈그래프와 트위터카드

#### (1) The Open Graph Protocol 

. 웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정  
. 참고사이트 https://ogp.me/

사용예
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />

<!-- 
  og:type: 페이지의 유형(E.g, website, video.movie)
  og:site_name: 속한 사이트의 이름
  og:title: 페이지의 이름(제목)
  og:description: 페이지의 간단한 설명
  og:image: 페이지의 대표 이미지 주소(URL)
  og:url: 페이지 주소(URL) -->
```

#### (2) Twitter Cards

. 웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정

. 참고사이트 https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started

사용예
```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />

<!-- 
  twitter:card: 페이지(카드)의 유형(E.g. summary, player)
  twitter:site: 속한 사이트의 이름
  twitter:title: 페이지의 이름(제목)
  twitter:description: 페이지의 간단한 설명
  twitter:image: 페이지의 대표 이미지 주소(URL)
  twitter:url: 페이지 주소(URL)
 -->
```

### 3) Google Fonts
페이지에서 사용할 '나눔고딕' 폰트를 지정  
폰트 라이선스 확인

Google Fonts에서 고른 폰트 파일 가져오기
```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```
페이지에 폰트를 적용(CSS 상속)
```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```

### 4) Google Material Icons
. 구글에서 제공하는 머터리얼 아이콘을 무료로 사용할 수 있음  

. 참고사이트  
<설정방법> https://developers.google.com/fonts/docs/material_icons?hl=ko#icon_font_for_the_web  
< Material Components for the web>  https://material.io/develop/web/getting-started

`Google 머티리얼 아이콘에서 고른 아이콘 파일 가져오기`
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

`HTML에 아이콘 적용`
```html
<!-- upload 아이콘 -->
<div class="material-icons">upload</div>

<!-- search 아이콘 -->
<div class="material-icons">search</div>
```

<br>

## 2. 헤더와 드롭다운 메뉴
### 1) header부분 로고 배치 조정을 위한 연습
```html
<div class="container">
  <div class="item"></div>
</div>
```
. container 안에 있는 아이템을 컨테이너의 수직 수평 정중앙에 배치하는 방법 : item 요소에 대해서 width, height명시. position: absolute; 지정. 수직 정중앙 배치 위해서는 top과 bottom, 수평정중앙 위치를 위해서는 left, right 값 0 설정 후 margin값 이용.  
. 동시에 부모요소에 대해서는 position: relative;지정
```js
.container {
  width: 400px;
  height: 250px;
  background-color: royalblue;
  position: relative;
}
.item {
  width: 100px;
  height: 100px;
  background-color: orange;
  position: abloute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // margin: auto 0;
  // margin: auto auto;
  margin: auto;
}
```

### 2) 정확한 CSS선택자를 위한 BEM
. Block Element Modifier  
. HTML 클래스 속성의 작명법  
: `요소__일부분`  - Underscore(Lodash) 기호로 요소의 일부분을 표시  
: `요소--상태`    - Hyphon(Dash) 기호로 요소의 상태를 표시

`__` 사용예
```html
<div class = "container">
  <div class = "name"></div>
  <div class = "item">
    <div class = "name"></div>
  </div>
</div>

<!-- 아래와 같이 `__`를 이용하여 부모요소의 일부임을 표시함 -->
<div class = "container">
  <div class = "container__name"></div>
  <div class = "item">
    <div class = "item__name"></div>
  </div>
</div>
```
`--` 사용예
```html
<div class = "btn primary"></div>
<div class = "btn success"></div>
<div class = "btn error"></div>

<!-- 아래와 같이 `--`를 이용하여 부모요소의 특정상태임을 표시함 -->
<div class = "btn btn--primary"></div>
<div class = "btn btn--success"></div>
<div class = "btn btn--error"></div>
```

자식요소의 위치기준으로서 부모요소를 지정하는 방법1  
단, 화면비율은 브라우저에 맞게 변화할 수 있도록
```css
header {
  position: relative;
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
}
```

자식요소의 위치기준으로서 부모요소를 지정하는 방법2
```css
header {
  width: 100%;
  /* position: relative; */
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
  position: fixed;
}
```
<br>  

### 3) Lodash
. Lodash는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리

. Lodash API https://lodash.com/docs/4.17.15  
. Lodash throttle https://lodash.com/docs/4.17.15#throttle

<br>

`HTML에 Lodash 불러들이기`  
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```
<br>

### 4) GSAP & ScrollToPlugin

. GSAP(The GreenSock Animation Platform)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리

. ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인

. 자바스크립트 지식이 뛰어나지 않아도 충분히 사용할 수 있음

`HTML에 GSAP & ScrollToPlugin 불러들이기`  
. 아래의 코드를 js 코드 호출 코드 앞에 삽입

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

`.to()` 사용법 GSAP Easing

```js
// gsap.to(요소, 시간, 옵션)
// 또는
// TweenMax.to(요소, 시간, 옵션)

gsap.to(window, .7, {
  scrollTo: 0
});
```

### 5) 전역버튼스타일  
전체 HTML에 공통으로 적용되는 버튼 스타일
```js
// 기본버튼스타일
.btn {
  width: 130px;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: .4s;
}
.btn:hover {
  background-color: #333;
  color: #fff;
}
// 상황에 따라 선택/적용할 수 있는 버튼스타일
.btn.btn--reverse {
  background-color: #333;
  color: #fff;
}
.btn.btn--reverse:hover {
  background-color: transparent;
  color: #333;
}
.btn.btn--brown {
  color: #592818;
  border-color: #592818;
}
.btn.btn--brown:hover {
  color: #fff;
  background-color: #592818;
}
.btn.btn--gold {
  color: #d9aaba;
  border-color: #d9aaba;
}
.btn.btn--brown:hover {
  color: #fff;
  background-color: #d9aaba;
}
.btn.btn--white {
  color: #fff;
  border-color: #fff;
}
.btn.btn--white:hover {
  color: #333;
  background-color: #fff;
}
```


### 6) 순차적 애니메이션
JS로 구현

#### (1) 순차적 애니메이션을 적용한 부분을 정리
```html
      <div class="title">
        <img src="./images/visual_title.png" alt="STARBUCKS DELIGHTFUL START TO THE YEARS" />
        <a href="javascript:void(0)" class="btn btn--brown">자세히 보기</a>
      </div>
      <img src="./images/visual_cup1.png" alt="new OATMEAL LATTE" class="cup1 image" />
      <img src="./images/visual_cup1_text.png" alt="오트밀 라떼" class="cup1 text" />
      <img src="./images/visual_cup2.png" alt="new STARBUCKS CARAMEL CRUMBLE MOCHA" class="cup2 image" />
      <img src="./images/visual_cup2_text.png" alt="스타벅스 카라멜 크럼블 모카" class="cup2 text" />
      <img src="./images/visual_spoon.png" alt="Spoon" class="spoon" /> 
```
```html
      <div class="title fade-in">
        <img src="./images/visual_title.png" alt="STARBUCKS DELIGHTFUL START TO THE YEARS" />
        <a href="javascript:void(0)" class="btn btn--brown">자세히 보기</a>
      </div>
      <div class="fade-in>
        <img src="./images/visual_cup1.png" alt="new OATMEAL LATTE" class="cup1 image" />
        <img src="./images/visual_cup1_text.png" alt="오트밀 라떼" class="cup1 text" />
      </div>
      <div class="fade-in>  
        <img src="./images/visual_cup2.png" alt="new STARBUCKS CARAMEL CRUMBLE MOCHA" class="cup2 image" />
        <img src="./images/visual_cup2_text.png" alt="스타벅스 카라멜 크럼블 모카" class="cup2 text" />
      </div>
      <div class="fade-in>
        <img src="./images/visual_spoon.png" alt="Spoon" class="spoon" /> 
      </div>  
```

#### (2) 순차적 애니메이션을 적용한 부분 CSS 투명처리
```css
.visual .fade-in {
  opacity: 0;
}
```
#### (3) 순차적 애니메이션 JS코딩 
```js
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
```

### 7) 요소 슬라이드
#### (1) HTML에 슬라이드를 구성할 section 코딩 
```html
  <section class="notice">
    <div class="notice-line">
      <div class="bg-left"></div>
      <div class="bg-right"></div>
      <div class="inner">
        <div class="inner__left"></div>
        <div class="inner__right"></div>
      </div>
    </div>
  </section>
```  

#### (2)슬라이드를 구성할 section에 대한 CSS 코딩 
```css
.notice {

}
.notice .notice-line {
  position: relative;
}
.notice .notice-line .bg-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #333;
}
.notice .notice-line .bg-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #f6f5ef;
}
.notice .notice-line .inner {
  height: 62px;
  border: 2px solid red;
}
```
#### (3)section 내 공지사항 코딩 

```html
        <div class="inner__left">
          <h2>공지사항</h2>
          <div class="swipe-container"></div>
          <a href="javascript:void(0)" class="notice-line__more">
            <div class="material-icons">add_circle</div>
          </a>
        </div>
        <div class="inner__right">
          <h2>스타벅스 프로모션</h2>
          <div class="toggle-promotion">
            <div class="material-icons">upload</div>
          </div>
        </div>
```
```css
.notice .notice-line .inner__left {
  width: 60%;
  height: 100%;
  background-color:  #333;
  display: flex;
  align-items: center;
}
.notice .notice-line .inner__left h2 {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin-right: 20px;
}
.notice .notice-line .inner__left .swipe-container {
  height: 62px;
  background-color: orange;
  flex-grow: 1;
}
.notice .notice-line .inner__left .notice-line__more {
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notice .notice-line .inner__left .notice-line__more .material-icons {
  color: #fff;
  font-size: 30px;
}
.notice .notice-line .inner__right { 
  width: 40%;
  height: 100%;
  display:flex;
  justify-content: flex-end;
  align-items: center;
}
.notice .notice-line .inner__right h2 { 
  font-size: 17px;
  font-weight: 700;
}
.notice .notice-line .inner__right .toggle-promotion { 
  width: 62px;
  height: 62px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notice .notice-line .inner__right .toggle-promotion .material-icons { 
  font-size: 3opx;
}
```

#### (4)슬라이드 애니메이션을 JS로 코딩 
##### a. Swiper 라이브러리
. Swiper는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리  
. 홈페이지 : https://swiperjs.com/  
. Getting Started With Swiper https://swiperjs.com/get-started  
. Swiper 6버전 기준. 현재 9.0  
. HTML 호출방법
```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- v8.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<!-- v9.0.0 ??? -->


<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>

<!-- // v7.0, v8.0의 경우 
<div class="swiper-container"> -> <div class="swiper"> 와 같이 사용하는 class이름이 달라졌음
-->
<!-- v9.0.0 -->
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
    ...
  </div>

    <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>

</div>

```
. Swiper API(옵션, )을 확인 https://swiperjs.com/swiper-api
```js
// new Swiper(요소, 옵션);
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

// v8.0 v9.0.0
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```


### 8) Youtube iframe API
#### (1) 화면구성
```html
<div class="container">
  <div class="item"></div>
</div>
```
```css
.container {
  width: 500px;
  background-color: royalblue;
}
.container .item {
  width: 100%;
  height: 0;
  padding-top: 50%;  /* height가 0이기 때문에 화면에 나타나지 않지만 내부여백을 지정하면 여백부문에 부모요소의 모습이 나타남. Youtube의 16:9의 화면을 나타내기 위한 비율계산 100%:x=16:9 */
}
```
#### (2) youtube.js 작성

IFrame Player API를 통해 YouTube 동영상을 제어가능  
참고문서 : https://developers.google.com/youtube/iframe_api_reference?hl=ko  

. HTML : 유튜브 영상 출력을 위한 js파일 호출 및 출력위치에 요소 지정(생성)
```html 
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

. JS --> youtube.js로 저장   
`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않음. 그리고 함수는 전역(Global) 등록해야 함

플레이어 매개변수(playerVars)에서 더 많은 옵션을 확인할 수 있음  
참고문서 : https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters

```js
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

### 9) 반복애니메이션

GSAP & ScrollToPlugin 참고  
. GSAP(The GreenSock Animation Platform)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리   
. ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인 (https://greensock.com/scrolltoplugin/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```
.to() 사용법 GSAP Easing
```js
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)
gsap.to(window, .7, {
  scrollTo: 0
});
```

### 10) 고정애니메이션
화면이 스크롤되어도 이미지가 고정되게 하는 방법

### 11) 3D 애니메이션
```html
<div class="container">
  <div class="item front">앞</div>
  <div class="item back">뒤</div>
</div>
```
```js
body {
  padding: 50px;
}
.container {
  width: 100px;
  height: 100px;
  background-color: orange;
  perspective: 300px;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden;
  transition: 1s;
}
.container .item.front {
  position: absolute;
  transform: rotateY(0deg);
}
.container:hover .item.front {
  transform: rotateY(-180deg);
}
.container .item.back {
  transform: rotateY(-180deg);
}
.container:hover .item.back {
  transform:rotateY(0deg);
}
```

### 12) 스크롤 위치계산 애니메이션
#### (1) 애니메이션 적용 요소에 대해 새로운 클래스 할당 함수 생성
`ScrollMagic`  
. ScrollMagic은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리 https://cdnjs.com/libraries/ScrollMagic  
. 대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용  
. 참고자료 http://scrollmagic.io/docs/
ScrollMagic API
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```
```js
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```

JS 작성예
```js
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')

// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({                  // 감시할 장면Scene 추가
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소 지정
      triggerHook: .8         // 화면의 80% 하단 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show')        // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller())   // 컨트롤러에 장면을 할당(필수!)
})
```
HTML 적용대상 섹션클래스에 scroll-spy 클래스 추가
```html
  <section class="season-product scroll-spy">

  <section class="reserve-coffee scroll-spy">

  <section class="pick-your-favorite scroll-spy">

  <section class="find-store scroll-spy">
```
#### (2) CSS 애니메이션 적용 내용 작성
```css
.back-to-position {
  opacity: 0;
  transition: 1s;
}
.back-to-position.to-right {
  transform: translateX(-150px);
}
.back-to-position.to-left {
  transform: translateX(150px);
}
.show .back-to-position {
  opacity: 1;
  transform: translateX(0);
}
.show .back-to-position.delay-0 {
  transition-delay: 0s;
}
.show .back-to-position.delay-1 {
  transition-delay: .3s;
}
.show .back-to-position.delay-2 {
  transition-delay: .6s;
}
.show .back-to-position.delay-3 {
  transition-delay: .9s;
}
```
#### (3) HTML에서 애니메이션을 적용할 대상에 대해서 CSS 스타일상의 클래스 삽입

```html
<!-- 일부 예 -->
<img src="./images/season_product_image.png" alt="" class="product back-to-position to-right delay-0" />

```


### 13) 다중요소 슬라이드


### 14) 푸터

특수기호  
`<`,  `>`, ..., `@`  
참고자료 : https://tools.w3cub.com/html-entities

```html
&copy;
```
```js
font-size: 70px;
```

### 15) 페이지상단이동 
`ScrollTo` : https://cdnjs.com/libraries/gsap  https://greensock.com/scrolltoplugin/  

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js" integrity="sha512-tQFq+nb/TSS648SDzWbSj0A67t4I1PFzR0U6Oi/yEYFyUbAIwg74SOCbr7t2X1Rn+iln7sYwfh8y+z7p0gddOw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```


# Git

## 1. 시작
```
<!-- 개행문자(NewLine) 설정 -->
git config --global core.autocrlf true

<!-- 사용자 정보 -->
git config --global user.name 'TeconPark'
git config --global user.email 'pakjaejin@gmail.com'

<!-- 구성확인 -->
git config --global --list
git status

<!-- 버전관리 시작 -->
git init

<!-- 버전관리(변경사항 추적)할 파일 지정 -->
git add .
<!-- git add 파일명 -->

git status

<!-- 버전명 지정 새로운 버전 생성 -->
git commit -m 'Start_project'
git log

<!-- 원격외부환경 연결 및 저장 -->
git remote add origin https://github.com/teconpark/starbucks.git
git push origin master

```
## 2. Branch
```
git branch
gir branch -a

git branch signin
git branch

git checkout signin
<!-- signin branch 생성 후 작업 -->
git status

git commit -m 'SignIn_Page'
git log

git checkout master
<!-- 디렉토리 확인. signin branch 작성 후 작업내용은 master branch에서 확인할 수 없음. master branch는 signin branch에서의 작업에 의해 영향을 받지 않음 -->

git checkout signin


