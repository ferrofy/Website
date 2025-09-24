const Product_List = [
  {
    name: "Laptop Sticker 1x {Limited Time}",
    image: "../Images/Shop_Item/Laptop_Skin.jpeg",
    price: 150,
    description: "Cut and Stick",
    stock: { AryaBhata: 1, Gargi: 0, Kalpana: 0, Sarabhai: 0 }
  },
  {
    name: "Yippe - 4 Pack",
    image: "../Images/Shop_Item/Yippe.jpeg",
    price: 50,
    description: "Instant noodles pack of 4.",
    stock: { AryaBhata: 0, Gargi: 0, Kalpana: 0, Sarabhai: 0 }
  },
  {
    name: "Coca Cola",
    image: "../Images/Shop_Item/Coca_Cola.jpeg",
    price: 45,
    description: "Refreshing soft drink.",
    stock: { AryaBhata: 0, Gargi: 0, Kalpana: 0, Sarabhai: 0 }
  },
  {
    name: "Eggs",
    image: "../Images/Shop_Item/Eggs.jpeg",
    price: 7,
    description: "Fresh eggs.",
    stock: { AryaBhata: 32, Gargi: 0, Kalpana: 0, Sarabhai: 0 }
  }
];

const Hostel_Numbers = {
  AryaBhata: "7009095794",
  Gargi: "7009095794",
  Kalpana: "7009095794",
  Sarabhai: "7009095794"
};

// === DOM Elements ===
const hostelContainers = {
  AryaBhata: document.getElementById("Grid_Arya"),
  Gargi: document.getElementById("Grid_Gargi"),
  Kalpana: document.getElementById("Grid_Kalpana"),
  Sarabhai: document.getElementById("Grid_Sara")
};

const Button_OpenCart = document.getElementById("Button_OpenCart");
const Div_CartDrawer = document.getElementById("Div_CartDrawer");
const Div_CartList = document.getElementById("Div_CartList");
const Div_CartEmpty = document.getElementById("Div_CartEmpty");
const Span_CartTotal = document.getElementById("Span_CartTotal");
const Button_Checkout = document.getElementById("Button_Checkout");
const Button_CloseCart = document.getElementById("Button_CloseCart");
const Cart_Badge = document.getElementById("Cart_Badge");

const Div_ProductModal = document.getElementById("productModal");
const Button_CloseModal = document.querySelector(".close-btn");
const Modal_Image = document.getElementById("modalImage");
const Modal_Name = document.getElementById("modalTitle");
const Modal_Description = document.getElementById("modalDescription");
const Modal_Price = document.getElementById("modalPrice");
const Modal_Stock = document.getElementById("modalStock");
const Button_AddToCart = document.getElementById("addToCartBtn");

const Button_Search = document.getElementById("Button_Search");
const Input_Search = document.getElementById("Input_Search");
const Input_PriceRange = document.getElementById("Input_PriceRange");
const Span_PriceVal = document.getElementById("Span_PriceVal");

const Popup_Container = document.getElementById("popupContainer");

let Cart_Items = [];
let Current_Filter = { search: "", maxPrice: 1000 };
let Selected_Product = null;
let Selected_Hostel = null;

function showPopup(message, type = "success") {
  if (!Popup_Container) {
    
    console[type === "error" ? "error" : "log"](message);
    return;
  }
  const popup = document.createElement("div");
  popup.className = `popup-message ${type}`;
  popup.textContent = message;
  Popup_Container.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

function getCartTotal() {
  return Cart_Items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return Cart_Items.reduce((sum, i) => sum + i.qty, 0);
}

function getAvailableStock(product, hostel) {
  const inCartQty = Cart_Items
    .filter(c => c.name === product.name && c.hostel === hostel)
    .reduce((a, c) => a + c.qty, 0);
  return (product.stock[hostel] || 0) - inCartQty;
}

function Render_Products() {
  Object.keys(hostelContainers).forEach(hostel => {
    const container = hostelContainers[hostel];
    if (!container) return;
    container.innerHTML = "";

    const products = Product_List.filter(p =>
      p.name.toLowerCase().includes(Current_Filter.search) &&
      p.price <= Current_Filter.maxPrice
    );

    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      const available = getAvailableStock(product, hostel);
      const stockClass = available > 0 ? "in-stock" : "out-of-stock";
      const stockText = available > 0 ? `In Stock: ${available}` : "Out of Stock";

      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <div class="price">₹${product.price}</div>
        <p class="stock-info ${stockClass}">${stockText}</p>
      `;

      if (available > 0) {
        div.addEventListener("click", () => Open_Modal(product, hostel));
      } else {
        div.style.opacity = "0.5";
        div.style.cursor = "not-allowed";
      }

      container.appendChild(div);
    });
  });
}

function Open_Modal(product, hostel) {
  Selected_Product = product;
  Selected_Hostel = hostel;

  Modal_Image.src = product.image;
  Modal_Name.textContent = product.name;
  Modal_Description.textContent = product.description;
  Modal_Price.textContent = `Price: ₹${product.price}`;

  const available = getAvailableStock(product, hostel);
  if (available > 0) {
    Modal_Stock.textContent = `In Stock: ${available}`;
    Modal_Stock.className = "stock-info in-stock";
    Button_AddToCart.disabled = false;
    Button_AddToCart.textContent = "Add to Cart 🛒";
  } else {
    Modal_Stock.textContent = "Out of Stock";
    Modal_Stock.className = "stock-info out-of-stock";
    Button_AddToCart.disabled = true;
    Button_AddToCart.textContent = "Out of Stock";
  }

  Div_ProductModal.classList.add("active");
}

Button_CloseModal.addEventListener("click", () => Div_ProductModal.classList.remove("active"));
Div_ProductModal.addEventListener("click", e => {
  if (e.target === Div_ProductModal) Div_ProductModal.classList.remove("active");
});

// === Cart Logic ===
Button_AddToCart.addEventListener("click", () => {
  if (!Selected_Product || !Selected_Hostel) return;

  // Single-hostel constraint
  if (Cart_Items.length > 0 && Cart_Items[0].hostel !== Selected_Hostel) {
    showPopup("You can only buy from one hostel at a time!", "error");
    return;
  }

  const available = getAvailableStock(Selected_Product, Selected_Hostel);
  if (available <= 0) {
    showPopup("This item is out of stock.", "error");
    return;
  }

  const existing = Cart_Items.find(c => c.name === Selected_Product.name && c.hostel === Selected_Hostel);
  if (existing) existing.qty++;
  else Cart_Items.push({ ...Selected_Product, hostel: Selected_Hostel, qty: 1 });

  Update_Cart();
  Render_Products();
  Div_ProductModal.classList.remove("active");
  showPopup("Item added to cart!", "success");
});

function Update_Cart() {
  Div_CartList.innerHTML = "";

  if (Cart_Items.length === 0) {
    Div_CartEmpty.style.display = "block";
    Span_CartTotal.textContent = "₹0";
    Cart_Badge.textContent = "0";
    return;
  }

  Div_CartEmpty.style.display = "none";
  Cart_Items.forEach(item => {
    const available = getAvailableStock(item, item.hostel) + item.qty; // available including current item qty
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <span><strong>${item.name}</strong> x ${item.qty}</span>
        <span>₹${item.price * item.qty}</span>
      </div>
      <div class="qty-controls">
        <button class="minus">-</button>
        <button class="plus">+</button>
      </div>
    `;

    const minusBtn = div.querySelector(".minus");
    const plusBtn = div.querySelector(".plus");

    minusBtn.addEventListener("click", () => {
      item.qty--;
      if (item.qty <= 0) {
        Cart_Items = Cart_Items.filter(c => !(c.name === item.name && c.hostel === item.hostel));
      }
      Update_Cart();
      Render_Products();
    });

    plusBtn.addEventListener("click", () => {
      if (item.qty >= available) {
        showPopup("Reached available stock limit.", "error");
        return;
      }
      item.qty++;
      Update_Cart();
      Render_Products();
    });

    Div_CartList.appendChild(div);
  });

  Span_CartTotal.textContent = `₹${getCartTotal()}`;
  Cart_Badge.textContent = getCartCount();
}

// === Drawer ===
Button_OpenCart.addEventListener("click", () => Div_CartDrawer.classList.add("open"));
Button_CloseCart.addEventListener("click", () => Div_CartDrawer.classList.remove("open"));

// === Checkout ===
Button_Checkout.addEventListener("click", () => {
  if (!Cart_Items.length) {
    showPopup("Cart is empty!", "error");
    return;
  }
  const hostel = Cart_Items[0].hostel;
  let msg = "Hey FerroFy Shop Our Order:\n\n";
  Cart_Items.forEach(item => { msg += `${item.name} x ${item.qty}\n`; });
  msg += "\nTotal: ₹" + getCartTotal() + "\n Your Name : [Name] \n Room No - [Your Room] \n Room Delivery : Yes / No ? \n \n Note: Room Delivery Cost Extra ₹5 \n \n If No Then We Will Provide Location Where To Pick Up Order";

  const phone = Hostel_Numbers[hostel];
  if (!phone) {
    showPopup("Hostel contact not found.", "error");
    return;
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

// === Filters ===
Button_Search.addEventListener("click", () => {
  Current_Filter.search = Input_Search.value.trim().toLowerCase();
  Render_Products();
});

// Live search as you type
Input_Search.addEventListener("input", () => {
  Current_Filter.search = Input_Search.value.trim().toLowerCase();
  Render_Products();
});

Input_PriceRange.addEventListener("input", () => {
  Current_Filter.maxPrice = parseInt(Input_PriceRange.value, 10) || Current_Filter.maxPrice;
  Span_PriceVal.textContent = Current_Filter.maxPrice;
  Render_Products();
});

// === Init ===
(function init() {
  // Ensure initial price label matches slider
  Span_PriceVal.textContent = Input_PriceRange.value;
  Render_Products();
  Update_Cart();
})();