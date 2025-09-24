const URL = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const form = document.getElementById("productForm");
// const deleteBtn = document.getElementById("deleteBtn");
// const resetBtn = document.getElementById("resetBtn");
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");

  if (!productId) {
    const btnCrea = document.createElement("button");
    btnCrea.type = "submit";
    btnCrea.innerText = "Crea prodotto";
    btnCrea.classList.add("btn", "btn-primary", "me-2");

    form.appendChild(btnCrea);

    btnCrea.addEventListener("click", (e) => {
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
            alert("Prodotto creato con successo!");
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
  }
});

//metodo PUT
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");

  if (productId) {
    text.innerText = "Modifica il prodotto";

    //GET per inserire i dati già esistenti del prodotto
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
        document.getElementById("name").value = data.name;
        document.getElementById("description").value = data.description;
        document.getElementById("price").value = data.price;
        document.getElementById("brand").value = data.brand;
        document.getElementById("imageUrl").value = data.imageUrl;
      });
  }
});
window.addEventListener("DOMContentLoaded", () => {
  if (productId) {
    const btnModifica = document.createElement("button");
    btnModifica.innerText = "MODIFICA";
    btnModifica.classList.add("btn", "btn-primary", "me-4");
    form.appendChild(btnModifica);

    btnModifica.addEventListener("click", (e) => {
      e.preventDefault();

      const prodotto = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: Number(document.getElementById("price").value),
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
      };
      console.log("Dati da inviare:", prodotto);

      fetch(URL + productId, {
        method: "PUT",
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
            alert("Prodotto modificato con successo!");
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
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (productId) {
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "ELIMINA";
    btnDelete.classList.add("btn", "btn-danger");
    form.appendChild(btnDelete);

    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();
      fetch(URL + productId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGNhYTZmMzAyMjAwMTUxMDgwY2EiLCJpYXQiOjE3NTgyNjg1ODYsImV4cCI6MTc1OTQ3ODE4Nn0.Rv8euIOCl_52Npr4jEhQo7qMseRjgWh9YvjxOMuq5w4",
        },
      })
        .then((response) => {
          console.log("response", response);

          if (response.ok) {
            alert("Prodotto eliminato con successo!");
            window.location.href = "index.html";
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
  }
});
