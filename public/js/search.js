function search(productSearch) {
  console.log("-----------search function------------");
  console.log(productSearch);

  (async () => {
    const rawResponse = await fetch("https://fakestoreapi.com/products");
    const content = await rawResponse.json();
    console.log(content);
    // for (let i = 0; i < content.length; i++) {
    //     content[i].id,
    //     content[i].title,
    //     content[i].price,
    //     content[i].category,
    //     content[i].description,
    //     content[i].image
    // }
    let i = 0;
    let id = null;
    while (productSearch === content[i].title);
    while (productSearch === content[i].title) {
      id = content[i].id;
      i++;
    }
    console.log(id);
  })();
}
