
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
    <button id="checkout_apply_coupan_b" class="checkout_apply_coupan_b">Apply</button>
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
<span id="total_price_span" class="checkout_cart_total_price">

</span>
</div>
</div>`;
}
// export {checkout_cart};

let apply_coupan=()=>{
  console.log(1000);
  document.querySelector(".checkout_apply_coupan_b").addEventListener("click",()=>{
  // let coupan_applied=()=>{
    // event.preventDefault();
    let coupon=document.querySelector(".checkout_gift_coupan_input").value;
      if(coupon=="BLISS20"){
       let total= document.querySelector(".checkout_cart_total_price").value;
       let rest=(total-(total/5));
       console.log(1000);
       document.querySelector(".checkout_cart_total_price").innerText=rest;
      }
      else{
        console.log("not running");
      }
    // })
    // return coupan_applied();
      

   
  
})
}

// apply_coupan();


let checkout_cart1 = () => {
  // console.log("2st Checkout");
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
    <button id="checkout_apply_coupan_b" class="checkout_apply_coupan_b">Apply</button>
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
<span id="total_price_span" /*class="checkout_cart_total_price"*/></span>
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
  let total_price=0;

  allitem.forEach(element => {
    total_price+=Number((element.price1)*(element.quantity));
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
    image.src = element.image1;
    th2.append(element.name);
    td3.append(element.countofitem);
    td3.setAttribute("class", "checkout_hidden_item");
    td4.append(element.price1);
    let imgthumb = document.createElement("span");
    imgthumb.setAttribute("class", "checkout_cart_thumbanail")
    thumbdiv.setAttribute("class", "checkout_image_thumb_main");
    imagediv.setAttribute("class", "checkout_cart_image")
    imgthumb.append(element.quantity);
    imagediv.append(image);
    thumbdiv.append(imagediv, imgthumb);
    td1.append(thumbdiv);
    tr.append(td1, th2, td3, td4);
    document.querySelector("#tbody_mid2").append(tr);
  })
  console.log(total_price ," lol");
  document.getElementById("total_price_span").innerText =total_price;

}





function displayitems1(allitem){
  let total_price=0;
  allitem.forEach(element => {
    total_price+=element.price1*(element.quantity);
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
   image.src=element.image1;
   th2.append(element.name);
   td3.append(element.countofitem);
   td3.setAttribute("class","checkout_hidden_item");
   td4.append(element.price1);
   let imgthumb=document.createElement("span");
   imgthumb.setAttribute("class","checkout_cart_thumbanail")
   thumbdiv.setAttribute("class","checkout_image_thumb_main");
   imagediv.setAttribute("class","checkout_cart_image")
   imgthumb.append(element.quantity);
   imagediv.append(image);
   thumbdiv.append(imagediv,imgthumb);
   td1.append(thumbdiv);
   tr.append(td1,th2,td3,td4);
   document.querySelector("#tbody_items").append(tr);
  })
  console.log(total_price);
  document.querySelector(".checkout_cart_total_price").innerText=total_price;

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




// function append_adress() {
//  let data=JSON.parse(localStorage.getItem("adress"))||[];
// //  if(data.email!=""){

//   let email = document.querySelector("#checkout_emailbox").value;
//   email=data.email;
//   let country = document.querySelector(".checkout_country_s1").value;
//   country=data.country;
//   let first_name = document.querySelector("#checkout_first_name").value;
//   first_name=data.first_name;
//   let last_name = document.querySelector("#checkout_last_name").value;
//   last_name=data.last_name;
//   let adress1 = document.querySelector("#checkout_adress1").value;
//   adress1=data.adress1;
//   let apartment = document.querySelector("#checkout_apartment").value;
//   apartment=data.apartment;
//   let city = document.querySelector("#checkout_city").value;
//   city=data.city;
//   let state = document.querySelector("#checkout_state").value;
//   state=data.state;
//   let pincode = document.querySelector("#checkout_pincode").value;
//   pincode=data.pincode;
//   let phone = document.querySelector("#checkout_phone1").value;
//   phone=data.phone;
// //  }
// }







export {apply_coupan, checkout_cart, checkout_cart1, displayitems,displayitems1, shipping_item };