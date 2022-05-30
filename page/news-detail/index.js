import { get, post } from "../../utils/ajax.js";

const getNews = async function () {
  console.log(window.location.search)
  let server_id = window.location.search.replace(/\?/,'')
  try {
    let news = await get(
      "https://www.fastmock.site/mock/d8c33ca26a546a3c9be78ee13f714990/t1-0fficial/api/news/" + server_id,
    );
    renderNews(news.data);
    // console.log(news)
  } catch (error) {
    console.log(error);
  }
};

getNews();

const renderNews = (news) => {
  console.log(news)
  document.getElementsByClassName('title-text')[0].innerHTML = news.title;
  document.getElementsByClassName('news-detail-text')[0].innerHTML = news.text;
}