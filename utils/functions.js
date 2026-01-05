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
          <a href="./leggings.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Women_s_activewear_leggings_2.png?v=1636524278"
              alt="leggings"
          /></a>
        </div>
        <a href="./leggings.html">Leggings</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href="./pants.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Cotton_Flare-Circular_Thumbnail1.jpg?v=1663950652"
              alt="pants"
          /></a>
        </div>
        <a href="./pants.html">Pants</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href="./tops.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Breezy2WayTop-Nav-Thumbnail.png?v=1660740425"
              alt=""
          /></a>
        </div>
        <a href="./tops.html">Tops</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <div id="new-launches-tag"></div>
          <a href="./tees.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/BreezyBoyfriendTee-Nav-Thumbnail.png?v=1660740394"
              alt=""
          /></a>
        </div>
        <a href="./tees.html">Tees</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href="./sportsBras.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Thumbnail-CategoryMenu-SPORTSBRA-TUSSB_1.png?v=1637662853"
              alt="Bras"
          /></a>
        </div>
        <a href="./sportsBras.html">Sports Bras</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href="./maternity.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/Maternity-Nav-Thumbnail.png?v=1643893313"
              alt=""
          /></a>
        </div>
        <a href="./maternity.html">Maternity</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href="./accessories.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/AllDayPerformanceSocksDAWN-NavThumbnail_1.png?v=1655365456"
              alt=""
          /></a>
        </div>
        <a href="./accessories.html">Accessories</a>
      </div>
      <div id="all-Items-slidebaar-image">
        <div>
          <a href="./shopAll.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0404/0196/1115/files/women_s_tops.png?v=1636457983"
              alt=""
          /></a>
        </div>
        <a href="./shopAll.html">SHOP ALL</a>
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
    let detailsBox = document.createElement("div");
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
    detailsBox.append(nameAnchor, priceBox);
    itemBox.append(imageAnchor, detailsBox);

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

function filtering() {
  return `<header>
    <h2>Price</h2>
    </header>
    <div class="price-input">
      <div
          class="field">
          <input type="number" class="input-min" id="input-min" value="0">
      </div>
      <div class="separator">-</div>
      <div
          class="field">
          <input type="number" class="input-max" id="input-max" value="5000">
      </div>
    </div>
    <div class="slider">
      <div class="progress"></div>
    </div>
    <div class="range-input">
      <input type="range" class="range-min" id="range-min" min="0" max="5000" value="0" step="50">
      <input type="range" class="range-max" id="range-max" min="0" max="5000" value="5000" step="50">
    </div>`;
}

function HeadingSort() {
  return `<div id="all-Items-dropdown">
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort
          </button>
          <div class="dropdown-menu">
              <p class="dropdown-item" id="priceL2H">Price, low to high</p>
              <p class="dropdown-item" id="priceH2L">Price, high to low</p>
          </div>
      </div>
  </div>`;
}

function filterData(data) {
  let arr = data;
  let priceInputMin = Number(document.querySelector(".input-min").value);
  let priceInputMax = Number(document.querySelector(".input-max").value);
  let newArr = arr.filter((elem) => {
    if (elem.price1 > priceInputMin && elem.price1 < priceInputMax) {
      return elem;
    }
  });
  displayData(newArr);
  // return newArr;
}

let filterDataL2H = (data) => {
  let arr = data;
  let L2H = arr.sort(function (a, b) {
    return Number(a.price1) - Number(b.price1);
  });
  // console.log(L2H);
  displayData(L2H);
};

let filterDataH2L = (data) => {
  let arr = data;

  let H2L = arr.sort(function (a, b) {
    return Number(b.price1) - Number(a.price1);
  });

  displayData(H2L);
};

export {
  slidebar,
  fetchData,
  displayData,
  sliderLeft,
  slideRight,
  filtering,
  HeadingSort,
  filterData,
  filterDataL2H,
  filterDataH2L,
};
