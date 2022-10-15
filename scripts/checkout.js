import { checkout_cart, checkout_cart1, displayitems, displayitems1} from "../checkout_components/checkout_cart.js";


document.getElementById("checkout_mid2").innerHTML = checkout_cart();


document.querySelector("#checkout_mid_hidden").innerHTML = checkout_cart1();









class item {
    constructor(a, b, c, d) {
        this.name = a;
        this.image = b;
        this.price = c;
        this.countofitem = d;
    }
}


let item1 = new item("Bulbull Burgundy", "https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB_BulbullBurgundy-Thumbnail_600x.jpg?v=1637662576", 1499, 1)
let item2 = new item("Farah Forest", "https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB-Forest-Thumbnail_600x.jpg?v=1644308952", 1499, 2)
let item3 = new item("Farah Forest", "https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB-Forest-Thumbnail_600x.jpg?v=1644308952", 1499, 5)


let allitems = [];

allitems.push(item1, item2, item3);
localStorage.setItem("allitems", JSON.stringify(allitems));

let allitem = JSON.parse(localStorage.getItem("allitems")) || [];


displayitems(allitem);

 displayitems1(allitem);





class shipping_items {
    constructor(a, b, c, d, e, f, g, h, i, j) {
        this.email = a;
        this.country = b;
        this.first_name = c;
        this.last_name = d;
        this.adress1 = e;
        this.apartment = f;
        this.city = g;
        this.state = h;
        this.pincode = i;
        this.phone = j;
    }
}


document.querySelector("#checkout_button_shipping").addEventListener("click", collect_adress);
// event.preventDefault();

// let shipping_adress=[];
function collect_adress() {
    let email = document.querySelector("#checkout_emailbox").value;
    let country = document.querySelector(".checkout_country_s1").value;
    let first_name = document.querySelector("#checkout_first_name").value;
    let last_name = document.querySelector("#checkout_last_name").value;
    let adress1 = document.querySelector("#checkout_adress1").value;
    let apartment = document.querySelector("#checkout_apartment").value;
    let city = document.querySelector("#checkout_city").value;
    let state = document.querySelector("#checkout_state").value;
    let pincode = document.querySelector("#checkout_pincode").value;
    let phone = document.querySelector("#checkout_phone1").value;
    let adressbag = `${adress1},${apartment},${pincode},${state},${country}`;
    let email_adress = [];
    email_adress.push(email);
    let adress = [];
    adress.push(adressbag);
    let all_shipping_items = new shipping_items(email, country, first_name, last_name, adress1, apartment, city, state, pincode, phone);
    localStorage.setItem("email", JSON.stringify(email_adress));
    localStorage.setItem("adress", JSON.stringify(all_shipping_items));
    // window.location.href="./Shipping.html";

}
// collect_adress();
