import { checkout_cart,contact_adress_html ,displayitems,shipping_item} from "../checkout_components/checkout_cart.js";

 document.querySelector(".checkout_mid2").innerHTML=checkout_cart();

 let allitem=JSON.parse(localStorage.getItem("allitems"))||[];

displayitems(allitem);

 document.querySelector(".checkout_adress_div").innerHTML=contact_adress_html();

 shipping_item();