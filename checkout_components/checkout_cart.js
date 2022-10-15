
let checkout_cart = () => {
  // console.log("1st Checkout");
  return `<div class="checkoutmid_p2">
  <div class="checkout_table_div"> <table>
  <caption class="checkout_hidden_item">Shopping Cart</caption>
  <thead class="checkout_product_table">
  <tr class="checkout_product_hrow">
  <th>
            <span class="checkout_hidden_item">Product Image</span>
          </th>
          <th>
            <span class="checkout_hidden_item">Description</span>
          </th>
          <th>
            <span class="checkout_hidden_item">Quantity</span>
          </th>
          <th>
            <span class="checkout_hidden_item">Price</span>
          </th>
          
        </tr>
    </thead>
    <tbody id="tbody_mid2" class="checkout_cart_items">

    </tbody>
   </table>
</div>

<div class="checkout_coupan_div5">
<div><h3 class="count_bliss_coin">YOU HAVE 1000 BlissCoins</h3></div>
<div class="checkout_coupan_div6">
<select name="" id="bliss_coin_selector" class="checkout_gift_coupan_input5">
<option value="0">Choose Reward</option>
<option value="100">₹100 off (1000 Points)</option>
<option value="200">₹200 off (2000 Points)</option>
<option value="300">₹300 off (3000 Points)</option>
<option value="400">₹400 off (4000 Points)</option>
<option value="500">₹500 off (5000 Points)</option>
</select>
    <button class="checkout_apply_coupan_b5">Apply</button>
    </div>
</div>


<div class="checkout_coupan_div">
    <input type="text" class="checkout_gift_coupan_input" placeholder="Gift card or discount code">
    <button class="checkout_apply_coupan_b">Apply</button>
</div>
<div class="checkout_cart_price111">
<div class="checkout_cart_total">
    <span>Subtotal</span>
    <div class="checkout_cart_subtotal_price"></div>
</div>

<div class="checkout_shipping_total">
    <span>Shipping</span>
    <div class="checkout_cart_subtotal_price">
        <h4>Free</h4>
    </div>
</div>
</div>
<div class="checkout_cart_total">
<div class="checkout_price_div11"><span>Total</span>
<p class="checkout_tax_p"></p></div>
<span class="checkout_cart_total_price">

</span>
</div>
</div>`
}
// export {checkout_cart};


let checkout_cart1 = () => {
  console.log("2st Checkout");
  return `<div class="checkoutmid_p2">
  <div class="checkout_table_div"> <table>
  <caption class="checkout_hidden_item">Shopping Cart</caption>
  <thead class="checkout_product_table">
  <tr class="checkout_product_hrow">
  <th>
            <span class="checkout_hidden_item">Product Image</span>
          </th>
          <th>
            <span class="checkout_hidden_item">Description</span>
          </th>
          <th>
            <span class="checkout_hidden_item">Quantity</span>
          </th>
          <th>
            <span class="checkout_hidden_item">Price</span>
          </th>
          
        </tr>
    </thead>
    <tbody class="checkout_cart_items" id="tbody_items">

    </tbody>
   </table>
</div>

<div class="checkout_coupan_div5">
<div><h2 class="count_bliss_coin">YOU HAVE 1000 BlissCoins</h2></div>
<div class="checkout_coupan_div6">
<select name="" id="bliss_coin_selector" class="checkout_gift_coupan_input5">
<option value="0">Choose Reward</option>
<option value="100">₹100 off (1000 Points)</option>
<option value="200">₹200 off (2000 Points)</option>
<option value="300">₹300 off (3000 Points)</option>
<option value="400">₹400 off (4000 Points)</option>
<option value="500">₹500 off (5000 Points)</option>
</select>
    <button class="checkout_apply_coupan_b5">Apply</button>
    </div>
</div>


<div class="checkout_coupan_div">
    <input type="text" class="checkout_gift_coupan_input" placeholder="Gift card or discount code">
    <button class="checkout_apply_coupan_b">Apply</button>
</div>
<div class="checkout_cart_price111">
<div class="checkout_cart_total">
    <span>Subtotal</span>
    <div class="checkout_cart_subtotal_price"></div>
</div>

<div class="checkout_shipping_total">
    <span>Shipping</span>
    <div class="checkout_cart_subtotal_price">
        <h4>Free</h4>
    </div>
</div>
</div>
<div class="checkout_cart_total">
<div class="checkout_price_div11"><span>Total</span>
<p class="checkout_tax_p"></p></div>
<span class="checkout_cart_total_price">

</span>
</div>
</div>`
}
// export {checkout_cart1};






let bottom_checkout_part = () => {
  return `<a href="" class="checkout_bottom_p1">Refund policy</a>
  <a href="" class="checkout_bottom_p2">Shipping policy</a>
  <a href="" class="checkout_bottom_p3">Privacy policy</a>
  <a href="" class="checkout_bottom_p4">Terms of sevices</a>`
}

// console.log(allitem);
function displayitems(allitem) {
  allitem.map(element => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let th2 = document.createElement("th");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let thumbdiv = document.createElement("div");
    let imagediv = document.createElement("div");
    console.log(element);
    let itemdiv = document.createElement("div");
    itemdiv.setAttribute("id", "checkout_cart_itemdiv");
    let image = document.createElement("img");
    image.setAttribute("id", "checkout_cart_item_image");
    image.src = element.image;
    th2.append(element.name);
    td3.append(element.countofitem);
    td3.setAttribute("class", "checkout_hidden_item");
    td4.append(element.price);
    let imgthumb = document.createElement("span");
    imgthumb.setAttribute("class", "checkout_cart_thumbanail")
    thumbdiv.setAttribute("class", "checkout_image_thumb_main");
    imagediv.setAttribute("class", "checkout_cart_image")
    imgthumb.append(element.countofitem);
    imagediv.append(image);
    thumbdiv.append(imagediv, imgthumb);
    td1.append(thumbdiv);
    tr.append(td1, th2, td3, td4);
    document.querySelector("#tbody_mid2").append(tr);
  })
}






function displayitems1(allitem){
  allitem.map(element => {
   let tr=document.createElement("tr");
   let td1=document.createElement("td");
   let th2=document.createElement("th");
   let td3=document.createElement("td");
   let td4=document.createElement("td");
   let thumbdiv=document.createElement("div");
   let imagediv=document.createElement("div");
   console.log(element);
   let itemdiv=document.createElement("div");
   itemdiv.setAttribute("id","checkout_cart_itemdiv");
   let image=document.createElement("img");
   image.setAttribute("id","checkout_cart_item_image");
   image.src=element.image;
   th2.append(element.name);
   td3.append(element.countofitem);
   td3.setAttribute("class","checkout_hidden_item");
   td4.append(element.price);
   let imgthumb=document.createElement("span");
   imgthumb.setAttribute("class","checkout_cart_thumbanail")
   thumbdiv.setAttribute("class","checkout_image_thumb_main");
   imagediv.setAttribute("class","checkout_cart_image")
   imgthumb.append(element.countofitem);
   imagediv.append(image);
   thumbdiv.append(imagediv,imgthumb);
   td1.append(thumbdiv);
   tr.append(td1,th2,td3,td4);
   document.querySelector("#tbody_items").append(tr);
  })
}


// export {displayitems1};




// let contact_adress_html=()=>{
//   return`<div class="checkout_contact_email">
//   <span class="shipping_emailid">Contact</span>
//      <span class="shipping_email"></span>
// </div>
// <div class="checkout_contact_adress">
//   <span class="shipping_adress_r1">Adress</span>
//       <span class="shipping_adress"></span>
// </div>`
// }


// console.log("ram");

let shipping_item = () => {
  // let email=JSON.parse(localStorage.getItem("email"))
  let adress = JSON.parse(localStorage.getItem("adress"));
  let email1 = document.querySelector(".shipping_email").innerText = adress.email;
  let final_adress = `${adress.adress1},${adress.apartment},${adress.city},${adress.state},${adress.pincode}`;
  let all_adress = document.querySelector(".shipping_adress").innerText = final_adress;

  // shipping_email.innerText=email;
  console.log(adress);
}
//  shipping_item();







export { checkout_cart, checkout_cart1, displayitems,displayitems1, shipping_item };