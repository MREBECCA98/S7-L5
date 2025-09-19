const URL = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const form = document.getElementById("productForm");
// const deleteBtn = document.getElementById("deleteBtn");
// const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const prodotto = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: Number(document.getElementById("price").value),
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
  };
  console.log("Dati da inviare:", prodotto);

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(prodotto),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGNhYTZmMzAyMjAwMTUxMDgwY2EiLCJpYXQiOjE3NTgyNjg1ODYsImV4cCI6MTc1OTQ3ODE4Nn0.Rv8euIOCl_52Npr4jEhQo7qMseRjgWh9YvjxOMuq5w4",
    },
  })
    .then((response) => {
      console.log("response", response);

      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Errore 2", error);
    });
});
