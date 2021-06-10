function products(id, title, price, category, description, image) {
  var product = document.createElement("div");
  product.setAttribute('class', 'col-lg-3');
  product.innerHTML = `
    <div class="card">
        <h5>${category}</h5>
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <a href="${id}" class="btn">Buy now</a>
        </div>
    </div>`;
  return product;
}
