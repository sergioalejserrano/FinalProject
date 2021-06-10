function search(productSearch) {
  console.log("-----------search function------------");
  console.log(productSearch);

  (async () => {
    const rawResponse = await fetch("https://fakestoreapi.com/products/category/" + productSearch);
    const content = await rawResponse.json();
    console.log(content);

  })();
  setTimeout(() => { window.location.replace("/products.html?category=" + productSearch); }, 1000);
  ;
}

function productsBySearch(id, title, price, category, description, image){
    var product = document.createElement("div");
    product.setAttribute('class', 'col');
    product.innerHTML =
    `
    <div class="card h-100">
    <img src="${image}" class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
        ${description}
        </p>
    </div>
    </div>

`;
  return product;
}