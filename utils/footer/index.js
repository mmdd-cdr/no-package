const renderFooter = () => {
  document.getElementsByTagName('footer')[0].innerHTML =
    `
    <div class="footer" >
        <div class="footer-top" >
          <div class="footer-top-item" >
              <svg
                class='icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-QQ'></use>
              </svg>
              <div class="footer-top-item-tips" >QQ: 742046286</div>
          </div>
          <div class="footer-top-item" >
              <svg
                class='icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-zhihu'></use>
              </svg>
              <div class="footer-top-item-tips" >知乎: 懵懂看花</div>
          </div>
          <div class="footer-top-item" >
              <svg
                class='icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-weixin'></use>
              </svg>
              <div class="footer-top-item-tips" >微信: czxbulubulu</div>
          </div>
          <div class="footer-top-item" >
              <svg
                class='icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-yuque-fill'></use>
              </svg>
              <div class="footer-top-item-tips" >雨雀: 4。</div>
          </div>
        </div>
        <div class="footer-bottom" >
            没有版权
        </div>
    </div>
  `;
}
renderFooter();