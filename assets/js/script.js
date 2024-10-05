const searchForm = document.querySelector(".search-form");
const productList = document.querySelector(".product-list");
const priceChart = document.querySelector(".price-chart");

let myChart = "";
searchForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const inputValue = event.target[0].value;
  const API = `https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`;

  const data = await fetch(API);
  const products = (await data.json()).results.slice(0, 12);

  displayProduct(products);
  updateChart(products);
});

function displayProduct(products) {
  productList.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
          <img src="${product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}" alt="${product.title
        }">
          <h3>${product.title}</h3>
          <p class="product-price">${product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</p>
          <a href="${product.permalink}">Ver Produto</a>
        </div>
 
 `
    )
    .join("");
}

function updateChart(products) {
  const ctx = priceChart.getContext("2d");
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: products.map((product) => product.title.substring(0, 20) + "..."),
      datasets: [
        {
          label: "Preço",
          data: products.map((product) => product.price),
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              });
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Preço dos Produtos",
          font: {
            size: 18,
          },
        },
      },

    },
  });
}
