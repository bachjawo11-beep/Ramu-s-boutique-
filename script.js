<script>
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-list");
  let total = document.getElementById("total");
  let checkout = document.getElementById("checkout");

  list.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
    sum += item.price;
  });

  total.textContent = "Total: $" + sum;

  let message = "Hello I want to order:%0A";
  cart.forEach(i => {
    message += i.name + " - $" + i.price + "%0A";
  });

  message += "Total: $" + sum;

  checkout.href = "https://wa.me/2207597080?text=" + message;
}
</script>
