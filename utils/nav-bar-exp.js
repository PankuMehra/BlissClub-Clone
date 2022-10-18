let navBar = () => {
  return `
  <div id="side-nav-outer-box">
    <header class="side-nav-header">
      <button id="drawer-close-button">
        <ion-icon class="drawer-close-icon" name="close-sharp"></ion-icon>
      </button>
    </header>
    <div id="drawer-main">
      <div class="drawer-container">
        <nav class="side-nav-main">
          <div class="side-nav-head">
            <a
              href="./shopAll.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >SHOP ALL</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./leggings.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >LEGGINGS</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./pants.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >PANTS</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./tops.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >TOPS</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./tees.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >TEES</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./sportsBras.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >SPORTS BRAS</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./maternity.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >MATERNITY</a
            >
          </div>
          <div class="side-nav-head">
            <a
              href="./accessories.html"
              class="side-nav-head-buttons side-nav-text-font-family"
              >ACCESSORIES</a
            >
          </div>
          <div class="side-nav-head">
            <a href="#" class="side-nav-head-buttons">
              <img
                class="side-nav-royality-image"
                src="https://cdn.shopify.com/s/files/1/0404/0196/1115/t/60/assets/Loyalty-Logo_200x.png?v=127916081523299122021658468464"
                alt="royalit-program-imagee"
              />
            </a>
          </div>
          <div class="side-nav-head">
            <form class="side-bar-search-menu" action="/search">
              <input
                id="side-search"
                class="input-search-procucts"
                type="text"
                placeholder="search our products"
              />
              <button class="submit-search" id="side-submit-search" type="submit"></button>
            </form>
          </div>
        </nav>
        <nav class="side-nav-bar">
          <hr class="side-nav-hr" />
          <ul class="linked-list">
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Login / Create Account</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Returns/Exchanges</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Refer & Earn</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Order Tracking</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >FAQ</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Our Story</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Careers</a
              >
            </li>
            <li class="linked-list-item">
              <a class="sideNavFooterText side-nav-text-font-family" href=""
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>`;
};

let topNavBar = () => {
  return `<div id="header-left">
  <div class="header-item1">
    <button id="side-header-menu-button" class="back-trans">
      <!-- <ion-icon  name="menu-sharp"></ion-icon> -->
      <ion-icon id="side-header-menu-icon" name="menu-outline"></ion-icon>
    </button>
  </div>
  <div class="header-item-logo">
  <a href="./index.html">
    <img
      class="header-logo-image"
      src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/logo_180x.png?v=1651155764"
      alt=""
    />
  </a>
  </div>
</div>
<div id="header-right">
  <!-- <div class="top-nav-head"> -->
  <div id="header-searchBox">
    <form class="top-bar-search-menu">
      <input
        id="top-search"
        class="input-search-procucts back-trans"
        type="text"
        placeholder="search our products"
      />
      <button
        id="submit-search"
        class="submit-search back-trans"
        type="submit"
      >
        <ion-icon class="search-icon" name="search"></ion-icon>
      </button>
    </form>
    <div id="micBox">
      <button id="speak" class="back-trans">
        <ion-icon id="mic-icon" name="mic"></ion-icon>
      </button>
    </div>
  </div>
  <!-- </div> -->
  <div class="header-item2">
    <a id="header-item-image-account" href="">
      <span id="current-user"></span>
      <img
        src="https://cdn.shopify.com/s/files/1/0404/0196/1115/t/60/assets/account-mob_40x.png?v=133119758951624850871658468464"
        alt=""
      />
    </a>
    <a id="header-item-image-whatsapp" href="https://api.whatsapp.com/send?phone=919900001845&text=Hey%20BlissClub">
      <img
        src="https://cdn.shopify.com/s/files/1/0404/0196/1115/t/60/assets/whatsapp-bliss_40x.png?v=126833938998310098061663749308"
        alt=""
      />
    </a>
    <a class="btn btn-primary"
    id="home-CartIcon"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight" id="header-item-image-cart" href="">
      <img
        src="https://cdn.shopify.com/s/files/1/0404/0196/1115/t/60/assets/cart_40x.png?v=96190718169835338971658468464"
        alt=""
      />
    </a>
  </div>
</div>`;
};

export { navBar, topNavBar };
// export topNavBar();
