<script>
let cart = [];

function addToCart(name, price){

  let item = cart.find(p => p.name === name);

  if(item){
    item.qty += 1;
  } else {
    cart.push({
      name,
      price,
      qty: 1
    });
  }

  updateCart();
}

function removeItem(name){

  cart = cart.filter(item => item.name !== name);

  updateCart();
}

function updateCart(){

  let list = document.getElementById("cart-items");

  let totalText = document.getElementById("total");

  let checkout = document.getElementById("checkout");

  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    let itemTotal = item.price * item.qty;

    total += itemTotal;

    let li = document.createElement("li");

    li.innerHTML = `
      ${item.name} x${item.qty} - $${itemTotal}

      <button onclick="removeItem('${item.name}')"
      style="
      margin-left:10px;
      background:red;
      color:white;
      border:none;
      padding:5px 10px;
      border-radius:5px;
      cursor:pointer;">
      Remove
      </button>
    `;

    list.appendChild(li);
  });

  totalText.innerText = "Total: $" + total;

  let message = "Hello, I want to order:%0A";

  cart.forEach(item => {

    message += "- " + item.name + " x" + item.qty;

    message += " ($" + (item.price * item.qty) + ")%0A";
  });

  message += "%0ATotal: $" + total;

  checkout.href =
  "https://wa.me/2207597080?text=" + message;
}
</script>
  
