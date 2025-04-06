fetch("https://fakestoreapi.com/products?limit=7")
  .then((res) => res.json())
  .then((json) => {
    const ul = document.getElementById("listaProduto");
    json.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        
          <a href="#"
            ><img width="50" src="${item.image}" alt="" />
            <span class="item-name">${item.title}</span>
          </a>
`;
      ul.appendChild(li);
    });
  });
