let showModal = false;
const openModal = () => {
  showModal=!showModal;
  renderHeader();
}
const closeModal = () => {
  showModal=false;
  renderHeader();
}
const renderHeader = () => {
  document.getElementsByTagName('header')[0].innerHTML =
    `
    <div class='header' >
      <div class='header-title' >
        <svg
          class='icon header-title-icon'
          width='1em'
          height='1em'
          fill='currentColor'
          overflow='hidden'
          aria-hidden='true'
        >
          <use href='#icon-pokecoin'></use>
        </svg>
        <div class='header-title-text' >Pokemon</div>
      </div>
      <div class='header-link' >
        <a class='header-link-item' href='../index' >
            <svg
              class='icon header-link-item-icon'
              width='1em'
              height='1em'
              fill='currentColor'
              overflow='hidden'
              aria-hidden='true'
            >
              <use href='#icon-crown'></use>
            </svg>
            <span>首页</span>
        </a>
        <a class='header-link-item' href='../news' >
            <svg
              class='icon header-link-item-icon'
              width='1em'
              height='1em'
              fill='currentColor'
              overflow='hidden'
              aria-hidden='true'
            >
              <use href='#icon-star-'></use>
            </svg>
            <span>新闻</span>
        </a>
        <a class='header-link-item' href='../about' >
            <svg
              class='icon header-link-item-icon'
              width='1em'
              height='1em'
              fill='currentColor'
              overflow='hidden'
              aria-hidden='true'
            >
              <use href='#icon-compass'></use>
            </svg>
            <span>关于我们</span>
        </a>
      </div>
      <div class='menu-button' onmouseleave='closeModal()' onclick='openModal()' \>
        <svg
          class='icon'
          width='1em'
          height='1em'
          fill='currentColor'
          overflow='hidden'
          aria-hidden='true'
        >
          <use href='#icon-insignia-'></use>
        </svg>
        <div class='menu-box' style='${showModal&&"visibility:visible"}' >
          <a class='menu-box-item' href='../index' >
              <svg
                class='icon menu-box-item-icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-crown'></use>
              </svg>
              <span>首页</span>
          </a>
          <a class='menu-box-item' href='../news' >
              <svg
                class='icon menu-box-item-icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-star-'></use>
              </svg>
              <span>新闻</span>
          </a>
          <a class='menu-box-item' href='../about' >
              <svg
                class='icon menu-box-item-icon'
                width='1em'
                height='1em'
                fill='currentColor'
                overflow='hidden'
                aria-hidden='true'
              >
                <use href='#icon-compass'></use>
              </svg>
              <span>关于我们</span>
          </a>
        </div>
      </div>
    </div>
    <svg style='display:none;' >
      <filter id='fractal' filterUnits='objectBoundingBox' x='0%' y='0%' width='100%' height='100%'>
          <feTurbulence id='turbulence' type='fractalNoise' baseFrequency='.04' numOctaves='20' />
          <feDisplacementMap in='SourceGraphic' scale='10' />
      </filter>
    </svg>
  `;
}
renderHeader();