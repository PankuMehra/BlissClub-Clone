function drawerMightLike(data) {
  console.log("data:", data);
  return `<div id="drawerUp-mightLikeTop">
     <p id="drawerUp-mightLike">YOU MAY LIKE</p>
     <h4 id="drawerUp-PlusMinus"><i class="fa-solid fa-minus" id="minusProduct"></i></h4>
 </div>
 <div id="drawerUp-product">
     <div id="drawerUp-productImage">
         <img src="${data.image1}" alt="">
     </div>
     <div id="drawerUp-productDetailsBox">
         <p id="drawerUp-productName">${data.name}</p>
         <div id="drawerUp-PriceDiv">
             <p id="drawerUp-productStrikedPrice">Rs. ${data.price2}</p>
             <p id="drawerUp-productPrice">Rs. ${data.price1}</p>
         </div>
         <div id="drawerUp-select-color-Box">
             <div id="drawerUp-outer-select-color1">
                 <button class="drawerUp-select-color1"></button>
             </div>
             <div>
                 <button class="drawerUp-select-color2"></button>
             </div>
             <div>
                 <button class="drawerUp-select-color3"></button>
             </div>
             <div>
                 <button class="drawerUp-select-color4"></button>
             </div>
             <div>
                 <button class="drawerUp-select-color5"></button>
             </div>
         </div>
         <select id="drawerUp-productSelectSize">
             <option value="XS-elene">XS-elene</option>
             <option value="S-elene">S-elene</option>
             <option value="M-aia">M-aia</option>
             <option value="L-una">L-una</option>
             <option value="XL-una">XL-una</option>
             <option value="XXL-una">XXL-una</option>
             <option value="XXXL-una">XXXL-una</option>
             <option value="XXXXL-una">XXXXL-una</option>
         </select>
         <button id="drawerUp-productAddButton">Add</button>
     </div>
 </div>`;
}

function sideCartFooter(data) {
  let MRP = 0;
  let YouPay = 0;
  data.map((elem) => {
    MRP = MRP + Number(elem.price2) * Number(elem.quantity);
    YouPay = YouPay + Number(elem.price1) * Number(elem.quantity);
  });

  return `<p>You will earn
    <span>
        ${YouPay} BlissCoins
    </span> worth
    <span>
        Rs. ${(YouPay / 10).toFixed(2)}
    </span> on this purchase.</p>
<div id="sideDrawer-MRP">
    <p>MRP</p>
    <p>Rs. <span id="sideCartMRP">${MRP}</span></p>
</div>
<div id="sideDrawer-YouSave">
  <p>YOU SAVE</p>
  <p>Rs. <span id="sideCartYouSave">${MRP - YouPay}</span></p>
</div>
<div id="sideDrawer-YouPay">
  <h4>YOU PAY</h4>
  <h4>Rs. <span id="sideCartYouPay">${YouPay}</span></h4>
</div>
<a href="./cart.html"><button id="sideDrawer-checkout">Proceed</button></a>
<p>Free shipping, cash on delivery, free exchanges and returns</p>`;
}

function sideCart() {
  return `<div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header" id="sideDrawer-Top">
      <h5>Shopping Cart</h5>
      <button
      type="button"
      class="btn-close"
      id="sideDrawer-closeButton"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div id="sideDrawer-Box">
      <div id="sideDrawer-ProductBox"></div>
      <div id="drawerUp"></div>
      <div id="sideDrawer-Footer"></div>
    </div>
  </div>`;
}

let cartData = (data = []) => {
  // Render the product list for the side cart. Data defaults to an empty array.
  const productBox = document.getElementById("sideDrawer-ProductBox");
  const footer = document.getElementById("sideDrawer-Footer");
  if (!productBox) return;
  productBox.innerHTML = "";

  // If cart is empty, show an empty-cart placeholder and clear footer
  if (!Array.isArray(data) || data.length === 0) {
    productBox.innerHTML = `<div id="sideDrawer-empty_cart" style="font-family: sans-serif">
              <h1 id="sideDrawer-empty_cart_line">
                Your cart is currently empty.
              </h1>
              <a href="./shopAll.html"
                ><button class="shop_button" type="button">SHOP OUR PRODUCTS</button></a
              >
            </div>`;
    if (footer) footer.innerHTML = "";
    return;
  }

  data.map((elem, index) => {
    let productBox = document.createElement("div");
    productBox.id = "cart-product";
    let productImageBox = document.createElement("div");
    productImageBox.id = "cart-productImage";
    let productImage = document.createElement("img");
    productImage.src = elem.image1;

    productImageBox.append(productImage);

    let productDetailsBox = document.createElement("div");
    productDetailsBox.id = "cart-productDetailsBox";
    let NameColorSizeBox = document.createElement("div");
    let productName = document.createElement("p");
    productName.id = "cart-productName";
    productName.innerHTML = elem.name;
    let productColorSize = document.createElement("p");
    productColorSize.id = "side-cart-productColorSize";
    productColorSize.innerHTML = elem.color + " / " + elem.size;

    NameColorSizeBox.append(productName, productColorSize);

    let productPriceBox = document.createElement("div");
    productPriceBox.id = "cart-PriceDiv";
    let productStrikedPrice = document.createElement("p");
    productStrikedPrice.id = "cart-productStrikedPrice";
    let productPrice = document.createElement("p");
    productPrice.id = "cart-productPrice";

    productStrikedPrice.innerHTML = "Rs. " + elem.price2;
    productPrice.innerHTML = "Rs. " + elem.price1;

    productPriceBox.append(productStrikedPrice, productPrice);
    productDetailsBox.append(NameColorSizeBox, productPriceBox);

    let productAddRemoveBox = document.createElement("div");
    productAddRemoveBox.id = "side-cart-removeAddBox";

    let productRemoveBox = document.createElement("div");
    productRemoveBox.id = "side-cart-removeProduct";
    let productRemove = document.createElement("p");
    productRemove.innerHTML = "REMOVE";

    let productAddBox = document.createElement("div");
    productAddBox.id = "side-cart-addProduct";
    let productMinusBox = document.createElement("div");
    productMinusBox.innerHTML = `<i class="fa-solid fa-minus" id="minusProduct"></i>`;
    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.id = "side-cart-addMinusQuantity";
    quantityInput.value = elem.quantity;
    let productPlusBox = document.createElement("div");
    productPlusBox.innerHTML = `<i class="fa-solid fa-plus" id="addProduct"></i>`;

    productRemoveBox.append(productRemove);
    productAddBox.append(productMinusBox, quantityInput, productPlusBox);
    productAddRemoveBox.append(productRemoveBox, productAddBox);
    productBox.append(productImageBox, productDetailsBox, productAddRemoveBox);

    document.getElementById("sideDrawer-ProductBox").append(productBox);

    productRemove.addEventListener("click", function () {
      removeProduct(index, data);
    });

    let DecreaseQuantity = () => {
      // If quantity will become less than 1, remove the product and re-render
      if (Number(quantityInput.value) <= 1) {
        data.splice(index, 1);
        localStorage.setItem("cart_items", JSON.stringify(data));
        document.getElementById("sideDrawer-ProductBox").innerHTML = "";
        document.getElementById("sideDrawer-Footer").innerHTML =
          sideCartFooter(data);
        cartData(data);
        return;
      }

      elem.quantity = Number(elem.quantity) - 1;
      quantityInput.value = elem.quantity;

      localStorage.setItem("cart_items", JSON.stringify(data));
      document.getElementById("sideDrawer-Footer").innerHTML =
        sideCartFooter(data);
    };

    let IncreaseQuantity = () => {
      if (Number(quantityInput.value) >= 9) {
        quantityInput.value = 9;
        return;
      }
      elem.quantity = Number(elem.quantity) + 1;
      quantityInput.value = elem.quantity;

      localStorage.setItem("cart_items", JSON.stringify(data));
      document.getElementById("sideDrawer-Footer").innerHTML =
        sideCartFooter(data);
    };

    productMinusBox.addEventListener("click", DecreaseQuantity);
    productPlusBox.addEventListener("click", IncreaseQuantity);

    let setItemId = () => {
      localStorage.setItem("productId", elem.id);
      location.href = "./viewProduct.html";
    };
    productName.addEventListener("click", setItemId);
    productImage.addEventListener("click", setItemId);
  });
  document.getElementById("sideDrawer-Footer").innerHTML = sideCartFooter(data);
};

let removeProduct = (index, data) => {
  data.splice(index, 1);
  localStorage.setItem("cart_items", JSON.stringify(data));
  document.getElementById("sideDrawer-ProductBox").innerHTML = "";
  document.getElementById("sideDrawer-Footer").innerHTML = sideCartFooter(data);
  cartData(data);
};

export { drawerMightLike, sideCartFooter, sideCart, cartData };
