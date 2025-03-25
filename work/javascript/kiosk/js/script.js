//주문리스트에 주문거리 추가하는 JS
const products = [
  { id: 1, images: "menu1.png", name: "떡볶이", price: 3500, quantity: 1 },
  { id: 2, images: "menu2.png", name: "로제 떡볶이", price: 5500, quantity: 1 },
  { id: 3, images: "menu3.png", name: "순대", price: 3500, quantity: 1 },
  { id: 4, images: "menu4.png", name: "만두 튀김(3)", price: 1700, quantity: 1 },
  { id: 5, images: "menu5.png", name: "김말이 튀김(3)", price: 1700, quantity: 1 },
  { id: 6, images: "menu6.png", name: "콘지츠", price: 4000, quantity: 1 },
  { id: 7, images: "menu7.png", name: "사이다", price: 2000, quantity: 1 },
  { id: 8, images: "menu8.png", name: "콜라", price: 2000, quantity: 1 },
  { id: 9, images: "menu9.png", name: "쿨피스", price: 2000, quantity: 1 }
];

let cart = []

const productsHTML = products.map(
  (product) => `<div class="product-card" id="product-${product.id}">
        <img src="./img/${product.images}">
        <h2 class="product-name">${product.name}</h2>
        <strong>${product.price}원</strong>
    </div>`
);
const result = document.querySelector(".result");
result.innerHTML = productsHTML.join("");


function updateCart() {
  const cartHTML = cart.map(
    (item) => `<div class="cart-item">
            <h3>${item.name}</h3>
            <div class="cart-detail">
              <div class="mid">
                  <button class="minus" onclick="decrItem(${item.id})">-</button>
                  <p>${item.quantity}</p>
                  <button class="plus" onclick="incrItem(${item.id})">+</button>
              </div>
              <p class="cart-price">${item.price * item.quantity}원</p>
              <button onclick="deleteItem(${item.id})" class="cart-product" id=${item.id}>X</button></div>
          </div>`
  );

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = cartHTML.join("");
}

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", function () {
    const productId = parseInt(card.id.replace('product-', '')); // product-id를 추출
    addToCart(products, productId);
  });
});

function addToCart(products, id) {
  const product = products.find((product) => product.id === id);
  const cartProduct = cart.find((product) => product.id === id);
  if (cartProduct != undefined && product.id == cartProduct.id) {
    incrItem(id);
  } else {
    cart.unshift(product);
  }
  updateCart();
  getTotal(cart);
};

function getTotal(cart) {
  let { totalItem, cartTotal } = cart.reduce(
    (total, cartItem) => {
      total.cartTotal += cartItem.price * cartItem.quantity;
      total.totalItem += cartItem.quantity;
      return total;
    },
    { totalItem: 0, cartTotal: 0 }
  );
  const totalItemsHTML = document.querySelector(".noOfItems");
  totalItemsHTML.innerHTML = `총 ${totalItem} 개`;
  const totalAmountHTML = document.querySelector(".total");
  totalAmountHTML.innerHTML = `총 ${cartTotal}원`;
}

function incrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] && cart[i].id == id) {
      cart[i].quantity += 1;
    }
  }
  updateCart();
  getTotal(cart);
}

function decrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].quantity > 1) {
      cart[i].quantity -= 1;
    }
  }
  updateCart();
  getTotal(cart);
}

function deleteItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = 1;
      cart.splice(i, 1);
    }
  }
  updateCart();
  getTotal(cart);
}



let totalPayMoney = 0; // 지불할 돈

const moneyElements = document.querySelectorAll(".money");
const payElement = document.querySelector(".pay");

moneyElements.forEach(function (moneyElement) {
  moneyElement.addEventListener("click", function () {
    const moneyValue = parseInt(moneyElement.textContent);
    totalPayMoney += moneyValue;
    payElement.textContent = totalPayMoney;
  });
});

const buyBtn = document.querySelector("#buy-btn");
const change = document.querySelector(".change");

buyBtn.addEventListener("click", function () {
  
  const cartTotalText = document.querySelector(".total").textContent;
  const cartTotal = parseInt(cartTotalText.replace('총 ', '').replace(' 원', ''));
  if (totalPayMoney >= cartTotal) {
    const cal = totalPayMoney - cartTotal;
    change.innerText = cal; 
  } else {
    alert("지불 금액이 부족합니다. 추가로 지불해주세요.");
  }
});




const reset = document.querySelector("#reset");

reset.addEventListener("click", function() {

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = ""; 

  const totalItemsHTML = document.querySelector(".noOfItems");
  totalItemsHTML.innerHTML = "총 0 개"; 

  const totalAmountHTML = document.querySelector(".total");
  totalAmountHTML.innerHTML = "총 0 원";

  const payElement = document.querySelector(".pay");
  payElement.innerHTML = "0"; 

  const change = document.querySelector(".change");
  change.innerHTML = "0"; 

  cart = []; 
  totalPayMoney = 0; 
});
