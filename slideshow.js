//슬라이드 쇼
let slideIndex = 0;
let slideInterval;

showSlides(slideIndex);
startSlideShow();

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const liveRegion = document.getElementById("liveRegion");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  
    }

    slides[slideIndex].classList.add("active");

    // 현재 슬라이드의 alt 텍스트를 liveRegion에 업데이트
    const currentImage = slides[slideIndex].querySelector("img");
    liveRegion.textContent = currentImage.alt; // 스크린 리더에게 현재 이미지 설명 전달

        // 2초 후에 liveRegion 내용 제거
        setTimeout(() => {
          liveRegion.textContent = ''; // 내용을 초기화
      }, 2000); // 2000ms = 2초
  
}

// 자동 슬라이드 변경 시작
function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // 5초마다 슬라이드 변경
}

// 자동 슬라이드 변경 정지
function stopSlideShow() {
    clearInterval(slideInterval);
}

// 슬라이더 영역 선택
const slider = document.querySelector('.slider');

// 마우스가 진입할 때 정지, 떠날 때 재개
slider.addEventListener('mouseenter', stopSlideShow);
slider.addEventListener('mouseleave', startSlideShow);

// 키보드 포커스가 들어올 때 정지, 나갈 때 재개
slider.addEventListener('focusin', stopSlideShow);
slider.addEventListener('focusout', startSlideShow);
