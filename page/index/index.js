import { get, post } from "../../utils/ajax.js";


let isCool = true;
let activeIndex = 0;
let goCarousel;
let moveCarousel;

const initCarousel = () => {
  goCarousel = setInterval(() => {
    if (!document.hidden) {
      startCarousel(activeIndex + 1);
    }
  }, 3000);
};
initCarousel();

const startCarousel = (nextIndex) => {
  // document.getElementById('filter-svg').current.beginElement();
  document.getElementById('animate').beginElement()
  let step = 0;
  let _nextIndex = nextIndex;
  if (nextIndex === 4 && activeIndex != 3) {
    _nextIndex = 0;
  }
  const nextStep = ((_nextIndex - activeIndex) * 100) / 20;
  moveCarousel = setInterval(() => {
    if (activeIndex * 100 + step === _nextIndex * 100) {
      clearInterval(moveCarousel);
      activeIndex = _nextIndex;
      if (activeIndex >= 4) {
        activeIndex = 0;
        document.getElementsByClassName("home-carousel")[0].style.right = "0%";
        returnDotColor();
      } else {
        returnDotColor();
      }
    } else {
      step += nextStep;
      document.getElementsByClassName("home-carousel")[0].style.right =
        activeIndex * 100 + step + "%";
    }
  }, 10);
};

const returnDotColor = () => {
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("step-item")[i].style.backgroundColor =
      "rgba(0,0,0,0.5)";
  }
  document.getElementsByClassName("step-item")[
    activeIndex
  ].style.backgroundColor = "white";
};

const jumpDot = (index) => {
  clearInterval(goCarousel);
  clearInterval(moveCarousel);
  startCarousel(index);
  initCarousel();
};
window.jumpDot = jumpDot;

const getNews = async function () {
  try {
    let news = await get(
      "https://www.fastmock.site/mock/d8c33ca26a546a3c9be78ee13f714990/t1-0fficial/api/news",
      { page: 1, page_size: 4 }
    );
    renderNews(news.data);
  } catch (error) {
    console.log(error);
  }
};

getNews();

const renderNews = (news) => {
  let domString = '';
  news.map((item) => {
    let url =  `../news-detail/?${item.code}`;
    domString +=`
    <a href=${url} >
      <div class="news-item" >
          <img class="news-item-img lazyload" src="../../asset/loading.gif" data-src=${item.img} />
          <div class="news-item-title" >${item.title}</div>
          <div class="news-item-keyword" >${item.keyword}</div>
      </div>
    </a>
    `
  });
  document.getElementsByClassName('news-box')[0].innerHTML=domString;
};