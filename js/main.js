const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// ...= document.querySelector('.search input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {  // #to-top이 위에서 정의되었기 때문에 "gsap.to('#to-top', .2, {"를 toTopEl 함수이용하여 표현 가능
      x: 0
    });
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// const toTopEl = document.querySelector('#to-top');  // 효율적 프로그래밍을 위해 위로 이동
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
});


// 순차적 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 1.4 2.1 2.8
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay : 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }

});

new Swiper('.awards .swiper', {
  direction: 'horizontal', // default값이 horisontal이기 때문에 굳이 지정하지 않아도 됨
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

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

// 현재년도 추출
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();