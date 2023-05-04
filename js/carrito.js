let cartContainer = document.getElementById('cart-container');
let products = JSON.parse(localStorage.getItem('productosCarritos')) || [];
let total = 0;

products.forEach(product => {
  total += product.price;
  cartContainer.innerHTML += `
    <div class="card mx-3 shadow" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top p-2 img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <span>
          <b class="">$${product.price}</b>
        </span>
      </div>
    </div>
  `;
});

cartContainer.innerHTML += `
  <div class="total-price">
    <h4>Total: $${total}</h4>
  </div>
`;
