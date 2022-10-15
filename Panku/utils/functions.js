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
  return data;
}

function displayData(data) {
  // console.log("data:", data);
  document.getElementById("all-Items-fetchedProducts").innerHTML = "";
  data.map(function (elem) {
    let itemBox = document.createElement("div");
    let imageAnchor = document.createElement("a");
    let image = document.createElement("img");
    let nameAnchor = document.createElement("a");
    let name = document.createElement("h5");
    let priceBox = document.createElement("div");
    let price = document.createElement("p");
    let strikedPrice = document.createElement("p");

    imageAnchor.href = "./viewProduct.html";
    image.src = elem.image1;
    nameAnchor.href = "./viewProduct.html";
    name.innerText = elem.name;
    price.innerHTML = `Rs. ${elem.price1}`;
    strikedPrice.innerHTML = `Rs. ${elem.price2}`;

    itemBox.id = "all-Items-item";
    priceBox.id = "all-Items-priceBox";
    priceBox.append(strikedPrice, price);
    imageAnchor.append(image);
    nameAnchor.append(name);
    itemBox.append(imageAnchor, nameAnchor, priceBox);

    function setItemId() {
      localStorage.setItem("productId", elem.id);
    }
    image.addEventListener("click", setItemId);
    name.addEventListener("click", setItemId);

    document.getElementById("all-Items-fetchedProducts").append(itemBox);
  });
}

//
let x = 0;
function sliderLeft(sliderId) {
  x++;
  if (x > 0) {
    x = -3;
  }
  document.getElementById(`${sliderId}`).style.transform = `translateX(${
    x * 13
  }%)`;
}

function slideRight(sliderId) {
  x--;
  if (x < -3) {
    x = 0;
  }
  document.getElementById(`${sliderId}`).style.transform = `translateX(${
    x * 13
  }%)`;
}

export { slidebar, fetchData, displayData, sliderLeft, slideRight };
