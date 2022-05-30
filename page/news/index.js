import { get, post } from "../../utils/ajax.js";

let page = 1;
let page_size = 8

const getNews = async function () {
  try {
    let news = await get(
      "https://www.fastmock.site/mock/d8c33ca26a546a3c9be78ee13f714990/t1-0fficial/api/news",
      { page,page_size }
    );
    renderNews(news.data);
    renderPagination(news.meta.total);
  } catch (error) {
    console.log(error);
  }
};

getNews();

const renderNews = (news) => {
  let newsList = "";
  news.map((item) => {
    let url = `../news-detail/?${item.code}`;
    newsList += `<a class="news-box" href=${url} >
      <img class="news-box-img lazyload" src="../../asset/loading.gif" data-src=${item.img} alt="新闻图片"/>
      <div class="news-box-text" >
          <div class="news-box-text-title" >${item.title}</div>
          <div class="news-box-text-keyword" >${item.keyword}</div>
      </div>
  </a>`;
    document.getElementsByClassName("news-contant")[0].innerHTML = newsList;
  });
};

const changePage = (_page) => {
  page = _page;
  getNews();
}
window.changePage = changePage;

const renderPagination = (total) => {
  let paginationItem = '';
  const _page = Math.ceil(total/page_size);
  for(let i=1;i<=_page;i++){
    paginationItem += `<div class="pagination-item ${i===page&&'pagination-item-active'}" onclick=changePage(${i})>${i}</div>`
  }
  document.getElementsByClassName("pagination")[0].innerHTML = paginationItem;
}