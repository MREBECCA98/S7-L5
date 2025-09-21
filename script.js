const URL = "https://striveschool-api.herokuapp.com/api/product/";

const genereteCard = () => {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGNhYTZmMzAyMjAwMTUxMDgwY2EiLCJpYXQiOjE3NTgyNjg1ODYsImV4cCI6MTc1OTQ3ODE4Nn0.Rv8euIOCl_52Npr4jEhQo7qMseRjgWh9YvjxOMuq5w4",
    },
    cache: "no-cache",
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

      const row = document.getElementById("row");

      data.forEach((cardNokia) => {
        //col
        const col = document.createElement("div");
        col.className = "col-12 col-md-4";
        //card
        const card = document.createElement("div");
        card.className = "card  mb-4 shadow-sm ";

        //img
        const cardImg = document.createElement("img");
        cardImg.className = "cardImg bd-placeholder-img card-img-top img-fluid card-img-top";
        cardImg.src = cardNokia.imageUrl;
        cardImg.style.width = "100%";
        cardImg.style.height = "150px";
        cardImg.style.objectFit = "cover";
        //card-body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        //titolo
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = cardNokia.name;

        const cardText = document.createElement("p");
        cardText.className = "price";
        cardText.innerText = "Price " + cardNokia.price;
        //btn modifica
        const btnModifica = document.createElement("a");
        btnModifica.href = `backoffice.html?id=${cardNokia._id}`;
        btnModifica.id = "btnModifica";
        btnModifica.className = "btn btn-primary me-2";
        btnModifica.textContent = "Modifica";

        //btn scopri
        const btnScopri = document.createElement("a");
        btnScopri.href = `dettaglio.html?id=${cardNokia._id}`;
        btnScopri.id = "btnScopri";
        btnScopri.className = "btn btn-primary my-2";
        btnScopri.textContent = "Scopri di più";

        cardBody.append(cardTitle, cardText, btnModifica, btnScopri);
        card.append(cardImg, cardBody);

        col.appendChild(card);
        row.appendChild(col);
      });
    })

    .catch((error) => {
      console.log("Errore 2", error);
    });
};
genereteCard();
