//선택된 상품군만 보이기
document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', function(event) {
        // 마지막 항목인지 확인
        if (this === document.querySelectorAll('.menu-list a')) {
            // 마지막 항목이면 이벤트 중단하고 공지사항 페이지로 이동
            event.preventDefault();
            goToNoticePage();
        } else {
            // 일반적인 필터링 로직 실행
            event.preventDefault();
  
            const filterText = this.textContent;
            const filter = this.getAttribute('data-filter');
            const mainTitle = document.querySelector('.main_title');
  
            document.querySelectorAll('.image-grid div').forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
  
            mainTitle.textContent = filterText === '전체' ? "상품 리스트" : filterText;
        }
        // 상품 필터링
        document.querySelectorAll('.image-grid div').forEach(item => {
          if (filterText === '전체' || item.getAttribute('data-category') === filterText) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});



      

  //다크모드
  const DMbutton = document.getElementById('DM');

  const toggleMode = () => {
    document.body.classList.toggle('dark'); // 'dark' 클래스 추가/제거
  
    // 버튼 텍스트 변경
    if (document.body.classList.contains('dark')) {
      DMbutton.textContent = '라이트 모드'; // 다크 모드일 때
    } else {
      DMbutton.textContent = '다크 모드'; // 라이트 모드일 때
    }
  };

  // 버튼 클릭 시 toggleMode 함수 호출
  DMbutton.addEventListener('click', toggleMode);
    




// 큰 컨트롤 제공
const bigbutton = document.getElementById('bigc');
const bannerBtns = document.querySelectorAll('.banner'); // 모든 배너 버튼

const togglectrl = () => {
    bannerBtns.forEach(btn => {
        btn.classList.toggle('big_ctrler'); // 'big_ctrler' 클래스 추가/제거
    });

    // 버튼 텍스트 변경
    if (bannerBtns[0].classList.contains('big_ctrler')) {
        bigbutton.textContent = '쉬운컨트롤 OFF'; // 컨트롤이 켜진 상태
    } else {
        bigbutton.textContent = '쉬운컨트롤 ON'; // 컨트롤이 꺼진 상태
    }
};

// 버튼 클릭 시 togglectrl 함수 호출
bigbutton.addEventListener('click', togglectrl);





//대체텍스트 제거
const altTextButton = document.getElementById('alt_text');
const imagesWithAlt = document.querySelectorAll('img[alt]');
const linksWithAriaLabel = document.querySelectorAll('a[aria-label]');
const divsWithAriaLabel = document.querySelectorAll('div[aria-label]');

let isAltTextRemoved = false;

altTextButton.addEventListener('click', () => {
  isAltTextRemoved = !isAltTextRemoved;
  altTextButton.textContent = isAltTextRemoved ? '대체텍스트삽입' : '대체텍스트제거';

  // img 태그 처리
  imagesWithAlt.forEach(image => {
    if (isAltTextRemoved) {
      // 원래 alt 속성 값을 data-original-alt에 저장
      image.dataset.originalAlt = image.alt;
      image.removeAttribute('alt');
    } else {
      // 저장된 값을 복원
      image.setAttribute('alt', image.dataset.originalAlt);
      delete image.dataset.originalAlt; // 더 이상 필요 없으므로 삭제
    }
  });

  // a 태그 처리
  linksWithAriaLabel.forEach(link => {
    if (isAltTextRemoved) {
      link.dataset.originalAriaLabel = link.getAttribute('aria-label');
      link.removeAttribute('aria-label');
    } else {
      link.setAttribute('aria-label', link.dataset.originalAriaLabel);
      delete link.dataset.originalAriaLabel;
    }
  });

  // div 태그 처리
    // a 태그 처리
    divsWithAriaLabel.forEach(link => {
      if (isAltTextRemoved) {
        link.dataset.originalAriaLabel = link.getAttribute('aria-label');
        link.removeAttribute('aria-label');
      } else {
        link.setAttribute('aria-label', link.dataset.originalAriaLabel);
        delete link.dataset.originalAriaLabel;
      }
    });
  });




  const changeColorBtn = document.getElementById('shine');
  const discountedPriceElements = document.querySelectorAll('.discounted-price');
  let isBright = false; // 초기 상태: 어두운 상태
  
  changeColorBtn.addEventListener('click', () => {
      discountedPriceElements.forEach(element => {
          if (isBright) {
              // 밝은 상태에서 버튼 클릭 시 원래 색으로 복원
              element.style.color = ''; // 초기 스타일로 되돌림
          } else {
              // 어두운 상태에서 버튼 클릭 시 연녹색으로 변경
              element.style.color = '#90EE90'; // 연녹색
          }
      });
  
      // 버튼 텍스트 토글
      changeColorBtn.textContent = isBright ? '명도 -' : '명도 +';
  
      // 상태 토글
      isBright = !isBright;
  });