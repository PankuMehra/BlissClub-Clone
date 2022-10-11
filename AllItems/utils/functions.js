function slidebar() {
  return `
  <div id="all-Items-slidebaar">
    <div id="all-items-leftSlideButtonBox">
      <button id="all-items-leftSlideButton">
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>
    </div>
    <div id="all-Items-slidebar-mover">
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Women_s_activewear_leggings_2.png?v=1636524278"
              alt="leggings"
          /></a>
        </div>
        <a href="">Leggings</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Cotton_Flare-Circular_Thumbnail1.jpg?v=1663950652"
              alt=""
          /></a>
        </div>
        <a href="">Pants</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/CyclingShorts.png?v=1639139144"
              alt=""
          /></a>
        </div>
        <a href="">Shorts</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <div id="new-launches-tag"></div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/BreezyBoyfriendTee-Nav-Thumbnail.png?v=1660740394"
              alt=""
          /></a>
        </div>
        <a href="">New Launches</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Thumbnail-CategoryMenu-SPORTSBRA-TUSSB_1.png?v=1637662853"
              alt="Bras"
          /></a>
        </div>
        <a href="">Sports Bras</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/women_s_tops.png?v=1636457983"
              alt=""
          /></a>
        </div>
        <a href="">Tops and Tees</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Maternity-Nav-Thumbnail.png?v=1643893313"
              alt=""
          /></a>
        </div>
        <a href="">Maternity</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href=""
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/AllDayPerformanceSocksDAWN-NavThumbnail_1.png?v=1655365456"
              alt=""
          /></a>
        </div>
        <a href="">Accessories</a>
      </div>
    </div>
    <div id="all-items-rightSlideButtonBox">
      <button id="all-items-rightSlideButton">
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  </div>`;
}

async function fetchData(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log("data:", data);
  return data;
}

function displayData(data) {
  data.map(function (elem) {
    document.getElementById("all-Items-fetchedProducts").innerHTML += `<div id="all-Items-item">
    <img src="${elem.image_1}" alt="">
    <h5>${elem.name}</h5>
    <p>$${elem.price}</p>
    </div>`;
  });
}

export { slidebar, fetchData, displayData };
