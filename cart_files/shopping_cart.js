

    var cart_i_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    if(cart_i_items.length > 0){
        document.getElementById("non_empty_cart").style.display = "block";
        document.getElementById("empty_cart").style.display = "none";
    } else{
        document.getElementById("non_empty_cart").style.display = "none";
        document.getElementById("empty_cart").style.display = "flex";
    }

    function display_all_cart_items(){
        console.log("hii");
        var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

        if(cart_items.length === 0){

        } else{

            var total_cart_price = 0;

            cart_items.forEach(ele => {
                var item_id = ele.id;
                var item_name = ele.name;
                var item_color = ele.color;
                var item_size = ele.size;
                var item_image_url = ele.image;
                
                var item_price = ele.price;
                var item_price_string = add_commas_to_price_string(item_price + "");


                var item_quantity = ele.quantity;
                console.log(item_quantity);
                var item_quantity_string = "" + item_quantity;
                var item_url = ele.item_url;

                var item_color_plus_size = item_color + "/" + item_size;
                var item_total_price = item_price*item_quantity;

                total_cart_price += item_total_price;

                localStorage.setItem("cart_total_price", total_cart_price);

                var item_total_price_in_string = "Rs. " + add_commas_to_price_string(item_total_price + "");

                var item_quantity_span_id = "span_quantity_of_product_" + item_id;
                var item_total_price_id = "span_total_price_of_product_" + item_id;

                var item_unit_price_id = "span_unit_price_" + item_id;

                var item_remove_tag_id = "remove_tag_" + item_id;

                var new_div =document.createElement("div");
                new_div.className = "product";
                new_div.id = item_id;

                new_div.innerHTML = `<div class="first_sixty_percent">
        <div class="product_image_div"><img class="product_image" src="${item_image_url}"></div>
        <div class="product_description">
            <a class="product_name" href="${item_url}">${item_name}</a>
            <p class="product_color_and_size"> ${item_color_plus_size} </p>
            <span class="product_price" >Rs. <span id="${item_unit_price_id}" >${item_price_string}</span> </span>
        </div>
    </div>

    <div class="quantity_div">
        <div class="product_quantity_box">
            <div class="product_quantity_box_minus_box"  onclick='decrease_item_quantity("${item_id}")'  ><svg class="product_quantity_box_minus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></div>
            <div class="product_quantity_box_number"><span id="${item_quantity_span_id}">${item_quantity_string}</span></div>
            <div class="product_quantity_box_plus_box"  onclick='increase_item_quantity("${item_id}")'  > <svg class="product_quantity_box_plus_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> </div>
        </div>

    </div>

    <div class="price_div">
        <span class="product_total_price_span" id="${item_total_price_id}">${item_total_price_in_string}</span>
        <div class="remove_button_container">        
            <a id="${item_remove_tag_id}" href="#" class="remove_button" onclick='remove_item("${item_id}")' >Remove</a>
        </div>
        </div>`;

        document.querySelector("#items").append(new_div);

        document.getElementById("cart_total").innerText = add_commas_to_price_string(total_cart_price + "");

            });
        }

    }

    display_all_cart_items();

    function increase_item_quantity(product_id){

            var cart_items = JSON.parse(localStorage.getItem("cart_items"));

            var new_cart_items = cart_items.forEach(ele =>{
                if(ele.id === product_id){
                    ele.quantity = ele.quantity + 1;
                }
            });

            console.log(product_id);
            var span_id = "span_quantity_of_product_" + product_id;
            var current_quantity = document.getElementById(span_id).innerText;
            var new_quantity = parseInt(current_quantity) + 1;

            var cart_items = JSON.parse(localStorage.getItem("cart_items"));

            cart_items.forEach(ele =>{
                if(ele.id === product_id){
                    ele.quantity = new_quantity;
                }
            });

            localStorage.setItem("cart_items", JSON.stringify(cart_items));

            var new_quantity_string = "" + new_quantity;
            var new_total_price = parseInt(remove_commas_from_price_string(document.getElementById("span_unit_price_" + product_id).innerText) + "")*new_quantity;

            var new_total_price_string = "Rs. " + add_commas_to_price_string(new_total_price);

            document.getElementById("span_total_price_of_product_" + product_id).innerText = new_total_price_string;

            document.getElementById(span_id).innerText = new_quantity_string;

            var current_cart_price = parseInt(remove_commas_from_price_string(document.getElementById("cart_total").innerText));
            var new_cart_price = current_cart_price + parseInt(remove_commas_from_price_string(document.getElementById("span_unit_price_" + product_id).innerText));
            document.getElementById("cart_total").innerText = "" + add_commas_to_price_string(new_cart_price);
            localStorage.setItem("cart_total_price", new_cart_price);

    }

    function decrease_item_quantity(product_id){
            console.log(product_id);
            var span_id = "span_quantity_of_product_" + product_id;
            var current_quantity = document.getElementById(span_id).innerText;
            var new_quantity = parseInt(current_quantity) - 1;
            var new_quantity_string = "" + new_quantity;
            document.getElementById(span_id).innerText = new_quantity_string;

            var cart_items = JSON.parse(localStorage.getItem("cart_items"));

            if(new_quantity === 0){
                
                var element = document.getElementById(product_id);

                var total_cost_to_be_reduced = 0;
                cart_items.forEach( ele =>{
                    if(ele.id === product_id){
                        var this_item_total_cost = ele.price*ele.quantity;
                        total_cost_to_be_reduced += this_item_total_cost;
                    }
                })

                var current_cart_price = parseInt(remove_commas_from_price_string(document.getElementById("cart_total").innerText));
                var new_cart_price = current_cart_price - total_cost_to_be_reduced;
                localStorage.setItem("cart_total_price", new_cart_price);
                document.getElementById("cart_total").innerText = add_commas_to_price_string(new_cart_price);

                var new_cart = cart_items.filter(ele =>{
                    return ele.id != product_id;
                });

                localStorage.setItem("cart_items", JSON.stringify(new_cart));

                element.remove();

            } else{

                

                cart_items.forEach(ele =>{
                    if(ele.id === product_id){
                        ele.quantity = ele.quantity - 1;
                    }
                });

                localStorage.setItem("cart_items", JSON.stringify(cart_items));

                document.getElementById(span_id).innerText = new_quantity_string;
                var new_total_price = parseInt(remove_commas_from_price_string(document.getElementById("span_unit_price_" + product_id).innerText))*new_quantity;

                var new_total_price_string = "Rs. " + add_commas_to_price_string(new_total_price);

                document.getElementById("span_total_price_of_product_" + product_id).innerText = new_total_price_string;

            }

            var cart_i_items = JSON.parse(localStorage.getItem("cart_items")) || [];
            if(cart_i_items.length > 0){
                document.getElementById("non_empty_cart").style.display = "block";
                document.getElementById("empty_cart").style.display = "none";
            } else{
                document.getElementById("non_empty_cart").style.display = "none";
                document.getElementById("empty_cart").style.display = "flex";
            }

            var current_cart_price = parseInt(remove_commas_from_price_string(document.getElementById("cart_total").innerText));
            var new_cart_price = current_cart_price - parseInt(remove_commas_from_price_string(document.getElementById("span_unit_price_" + product_id).innerText));
            localStorage.setItem("cart_total_price", new_cart_price);
            document.getElementById("cart_total").innerText = add_commas_to_price_string(new_cart_price);

    }

    function remove_item(product_id){
        console.log("hii");
        console.log(product_id);
        var element = document.getElementById(product_id);

        var total_cost_to_be_reduced = 0;

        var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

        cart_items.forEach( ele =>{
            if(ele.id === product_id){
                var this_item_total_cost = ele.price*ele.quantity;
                total_cost_to_be_reduced += this_item_total_cost;
            }
        })

        var current_cart_price = parseInt(remove_commas_from_price_string(document.getElementById("cart_total").innerText));
        var new_cart_price = current_cart_price - total_cost_to_be_reduced;
        localStorage.setItem("cart_total_price", new_cart_price);
        document.getElementById("cart_total").innerText = add_commas_to_price_string(new_cart_price);

        var new_cart = cart_items.filter(ele =>{
            return ele.id != product_id;
        });

        localStorage.setItem("cart_items", JSON.stringify(new_cart));

        var cart_i_items = JSON.parse(localStorage.getItem("cart_items"));
        if(cart_i_items.length > 0){
            document.getElementById("non_empty_cart").style.display = "block";
            document.getElementById("empty_cart").style.display = "none";
        } else{
            document.getElementById("non_empty_cart").style.display = "none";
            document.getElementById("empty_cart").style.display = "flex";
        }

        element.remove();
    }

    function add_commas_to_price_string(str){
        var new_str = "";
        console.log(str);
        if(str.length>3){
                    var int_passed = 0;
                    for(var ind = str.length-1; ind>=0; ind--){
                        if(int_passed === 3){
                            new_str += "," + str[ind];
                            int_passed = 0;
                        } else{
                            new_str += str[ind];
                            int_passed++; 
                        }
                    }

                    var reverse_str = "";
                    for(var ind = new_str.length - 1; ind>=0; ind--){
                        reverse_str += new_str[ind] + "";
                    }

                    return reverse_str;
        } else{
            return str;
        }
    }

    function remove_commas_from_price_string(str){
        var new_str = "";

        for(var ind = str.length - 1; ind>=0; ind--){
            if(str[ind] === ','){

            } else{
                new_str += str[ind];
            }
        }

        var reverse_str = "";
        for(var ind = new_str.length - 1; ind>=0; ind--){
            reverse_str += new_str[ind] + "";
        }

        return reverse_str;

    }

    function go_to_shop_our_products_page(){
        window.location.href = "https://blissclub.com/collections/all";
    }