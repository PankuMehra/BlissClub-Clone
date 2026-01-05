import {
  drawerMightLike,
  sideCartFooter,
  cartData,
} from "../utils/sideCartFunc.js";
import { fetchData } from "../utils/functions.js";

let cartArray = JSON.parse(localStorage.getItem("cart_items")) || [];

document.getElementById("sideDrawer-Footer").innerHTML =
  sideCartFooter(cartArray);
cartData(cartArray);

let showModal = () => {
  const footer = document.getElementById("sideDrawer-Footer");
  if (footer) footer.style.transform = "translateY(0%)";

  let productId = localStorage.getItem("mightLikeProductId");
  let Url = `https://blissclub-data.onrender.com/products/${productId}`;
  fetchData(Url).then(function (data) {
    document.getElementById("drawerUp").innerHTML = drawerMightLike(data);

    // Function to open the Drawer of may also Like up and down
    let Plus = true;
    let showRandomProduct = () => {
      if (Plus) {
        document.getElementById("drawerUp").style.transform = "translateY(82%)";
        // document.getElementById("drawerUp-product").style.display = "none";
        document.getElementById(
          "drawerUp-PlusMinus"
        ).innerHTML = `<i class="fa-solid fa-plus" id="addProduct"></i>`;
        document.getElementById("sideDrawer-ProductBox").style.height = "360px";

        Plus = false;
      } else if (!Plus) {
        Plus = true;
        document.getElementById("drawerUp").style.transform = "translateY(0%)";
        document.getElementById("sideDrawer-ProductBox").style.height = "190px";
        // document.getElementById("drawerUp-product").style.display = "flex";
        document.getElementById(
          "drawerUp-PlusMinus"
        ).innerHTML = `<i class="fa-solid fa-minus" id="minusProduct"></i>`;
      }
    };

    document
      .getElementById("drawerUp-PlusMinus")
      .addEventListener("click", showRandomProduct);

    // Select Colour Boxes Function
    let SelectColor1 = () => {
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(2)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(3)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(4)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(5)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(1)"
      ).id = "drawerUp-outer-select-color1";
      // update add-button state after color change
      try {
        updateAddButtonState();
      } catch (e) {}
    };
    let SelectColor2 = () => {
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(1)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(3)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(4)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(5)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(2)"
      ).id = "drawerUp-outer-select-color2";
      // update add-button state after color change
      try {
        updateAddButtonState();
      } catch (e) {}
    };
    let SelectColor3 = () => {
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(1)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(2)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(4)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(5)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(3)"
      ).id = "drawerUp-outer-select-color3";
      // update add-button state after color change
      try {
        updateAddButtonState();
      } catch (e) {}
    };
    let SelectColor4 = () => {
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(1)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(2)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(3)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(5)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(4)"
      ).id = "drawerUp-outer-select-color4";
      // update add-button state after color change
      try {
        updateAddButtonState();
      } catch (e) {}
    };
    let SelectColor5 = () => {
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(1)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(2)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(3)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(4)"
      ).id = "";
      document.querySelector(
        "#drawerUp-select-color-Box > div:nth-child(5)"
      ).id = "drawerUp-outer-select-color5";
      // update add-button state after color change
      try {
        updateAddButtonState();
      } catch (e) {}
    };

    document
      .querySelector("#drawerUp-select-color-Box > div:nth-child(1)")
      .addEventListener("click", SelectColor1);
    document
      .querySelector("#drawerUp-select-color-Box > div:nth-child(2)")
      .addEventListener("click", SelectColor2);
    document
      .querySelector("#drawerUp-select-color-Box > div:nth-child(3)")
      .addEventListener("click", SelectColor3);
    document
      .querySelector("#drawerUp-select-color-Box > div:nth-child(4)")
      .addEventListener("click", SelectColor4);
    document
      .querySelector("#drawerUp-select-color-Box > div:nth-child(5)")
      .addEventListener("click", SelectColor5);

    // Helper: returns current size and color selection
    function getSelectedVariant() {
      const sizeSelect = document.getElementById("drawerUp-productSelectSize");
      const size = sizeSelect ? sizeSelect.value : "";
      let color = "";
      for (let i = 1; i <= 5; i++) {
        const wrapper = document.querySelector(
          `#drawerUp-select-color-Box > div:nth-child(${i})`
        );
        if (
          wrapper &&
          wrapper.id &&
          wrapper.id.startsWith("drawerUp-outer-select-color")
        ) {
          const btn = wrapper.querySelector("button");
          color = (btn && btn.name) || `color${i}`;
          break;
        }
      }
      return { size, color };
    }

    // Update add button state based on whether this variant is already in cart AND marked as added
    function updateAddButtonState() {
      const addBtn = document.getElementById("drawerUp-productAddButton");
      if (!addBtn) return;
      const { size, color } = getSelectedVariant();
      const cart = JSON.parse(localStorage.getItem("cart_items")) || [];
      const exists = cart.find(
        (it) => it.id === data.id && it.size === size && it.color === color
      );
      if (exists && exists.added) {
        addBtn.innerText = "Added";
        addBtn.disabled = true;
      } else {
        addBtn.innerText = "Add";
        addBtn.disabled = false;
      }
    }

    // watch size changes
    const sizeSelect = document.getElementById("drawerUp-productSelectSize");
    if (sizeSelect) sizeSelect.addEventListener("change", updateAddButtonState);

    // initialize button state
    updateAddButtonState();

    // Open product on image/name click
    const drawerImage = document.querySelector("#drawerUp-productImage img");
    const drawerName = document.getElementById("drawerUp-productName");
    const addButton = document.getElementById("drawerUp-productAddButton");

    if (drawerImage) {
      drawerImage.style.cursor = "pointer";
      drawerImage.addEventListener("click", () => {
        localStorage.setItem("productId", data.id);
        location.href = "./viewProduct.html";
      });
    }
    if (drawerName) {
      drawerName.style.cursor = "pointer";
      drawerName.addEventListener("click", () => {
        localStorage.setItem("productId", data.id);
        location.href = "./viewProduct.html";
      });
    }

    if (addButton) {
      addButton.style.cursor = "pointer";
      addButton.addEventListener("click", () => {
        try {
          const { size, color } = getSelectedVariant();

          let cart = JSON.parse(localStorage.getItem("cart_items")) || [];
          let existing = cart.find(
            (it) => it.id === data.id && it.size === size && it.color === color
          );
          if (existing) {
            // Use string quantity to match requested schema, and mark as added
            existing.quantity = String(
              Math.min(9, Number(existing.quantity || 0) + 1)
            );
            existing.added = true;
          } else {
            const newItem = {
              id: String(data.id),
              category: data.category || "",
              name: data.name,
              image1: data.image1,
              price1: String(Number(data.price1 || 0).toFixed(2)),
              price2: String(
                Number(data.price2 || data.price1 || 0).toFixed(2)
              ),
              color: color,
              size: size,
              quantity: "1",
              added: true,
            };
            cart.push(newItem);
          }

          localStorage.setItem("cart_items", JSON.stringify(cart));
          const updatedCart =
            JSON.parse(localStorage.getItem("cart_items")) || [];
          document.getElementById("sideDrawer-Footer").innerHTML =
            sideCartFooter(updatedCart);
          cartData(updatedCart);

          // update button state immediately and keep it disabled (no navigation)
          addButton.innerText = "Added";
          addButton.disabled = true;
        } catch (err) {
          console.error("Error adding item to cart from drawer:", err);
        }
      });
    }
  });
};

const homeCartIcon = document.getElementById("home-CartIcon");
if (homeCartIcon) homeCartIcon.addEventListener("click", showModal);

let hideModal = () => {
  const footer = document.getElementById("sideDrawer-Footer");
  if (footer) footer.style.transform = "translateY(110%)";
};
const sideDrawerCloseBtn = document.getElementById("sideDrawer-closeButton");
if (sideDrawerCloseBtn) sideDrawerCloseBtn.addEventListener("click", hideModal);
