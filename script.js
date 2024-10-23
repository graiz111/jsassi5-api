
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
   
    displayProducts(data);
  })
  .catch(error => console.error('Error fetching the products:', error));


function displayProducts(products) {
  const productList = document.getElementById('product-list');

  
  productList.innerHTML = products.map(product => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top h-50" alt="${product.title}">
        <div class="card-body h-30">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}...</p>
          <h6 class="text-success">$${product.price}</h6>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  `).join('')}; 
