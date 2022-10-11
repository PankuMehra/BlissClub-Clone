class item{
    constructor(a,b,c,d){
        this.name=a;
        this.image=b;
        this.price=c;
        this.countofitem=d;
    }
}


let item1=new item("Bulbull Burgundy","https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB_BulbullBurgundy-Thumbnail_600x.jpg?v=1637662576", 1499,1)
let item2=new item("Farah Forest","https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB-Forest-Thumbnail_600x.jpg?v=1644308952",1499,2)
let item3=new item("Farah Forest","https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB-Forest-Thumbnail_600x.jpg?v=1644308952",1499,5)

// let cartitem=localStorage.getItem
let allitems=[];

allitems.push(item1,item2,item3);
localStorage.setItem("allitems",JSON.stringify(allitems));



let allitem=JSON.parse(localStorage.getItem("allitems"))||[];
// if(allitem.length>0){
//     displayitems(allitem);
// }
console.log(allitem);
function displayitems(allitem){
//    let allitems=JSON.parse(localStorage.getItem("allitems"))||[];
   allitem.forEach(element => {
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
    // let name=document.createElement("h3");
    // name.innerText=element.name;
    let image=document.createElement("img");
    image.setAttribute("id","checkout_cart_item_image");
    image.src=element.image;
    // let price=document.createElement("h3");
    // price=Number(element.price);
    // let numberofitem=document.createElement("h4");
    // numberofitem=element.countofitem;
    th2.append(element.name);
    td3.append(element.countofitem);
    td3.setAttribute("class","checkout_hidden_item");
    td4.append(element.price);
    let imgthumb=document.createElement("span");
    imgthumb.setAttribute("class","checkout_cart_thumbanail")
    imgthumb.append(element.countofitem);
    imagediv.append(image);
    thumbdiv.append(imagediv,imgthumb);
    td1.append(thumbdiv);
    tr.append(td1,th2,td3,td4);
    document.querySelector("tbody").append(tr);
    // itemdiv.append(image,name,price,numberofitem);
    // document.querySelector(".checkoutmid_p2").append(itemdiv);
   })
}
displayitems(allitem);