
 import { checkout_cart,displayitems,contact_adress_html,shipping_item } from "../checkout_components/checkout_cart.js";

 document.querySelector(".checkout_mid2").innerHTML=checkout_cart();

//  import { displayitems } from "./checkout.js";

let allitem=JSON.parse(localStorage.getItem("allitems"))||[];


 displayitems(allitem);


 document.querySelector(".checkout_adress_div").innerHTML=contact_adress_html();

 



// console.log("ram");

//  let shipping_item=()=>{
//     // let email=JSON.parse(localStorage.getItem("email"))
//     let adress=JSON.parse(localStorage.getItem("adress"));
//     let email1=document.querySelector(".shipping_email").innerText=adress.email;
//     let final_adress=`${adress.adress1},${adress.apartment},${adress.city},${adress.state},${adress.pincode}`;
//     let all_adress=document.querySelector(".shipping_adress").innerText=final_adress;
    
//     // shipping_email.innerText=email;
//     console.log(adress);
//  }
 shipping_item();