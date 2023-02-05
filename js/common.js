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

// 현재년도 추출
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();