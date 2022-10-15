
function drawerMightLike(data) {
    console.log(data);
     return `<div id="drawerUp-mightLikeTop">
     <p id="drawerUp-mightLike">YOU MAY ALSO LIKE</p>
     <h4 id="drawerUp-PlusMinus">-</h4>
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
                 <button class="drawerUp-select-color5"></buttom>
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
 </div>`
}

export { drawerMightLike };
