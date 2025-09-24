const URL = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch(URL + productId, {
  headers: {
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
    document.getElementById("productImg").src = data.imageUrl;
    document.getElementById("productName").textContent = data.name;
    document.getElementById("productDescription").textContent = data.description;
    document.getElementById("productPrice").textContent = `€ ${data.price}`;
  });
