// Creamos el elemento select
const select = document.createElement("select");
select.classList.add("form-control", "mb-4");

// Creamos la opción para mostrar todas las cards
const allOption = document.createElement("option");
allOption.value = "";
allOption.text = "Todas";
select.add(allOption);

// Agregamos el select al contenedor de las cards
const contenedorCards = document.getElementById("contenedorCards");
contenedorCards.insertAdjacentElement("beforebegin", select);

// Hacemos una llamada a la API de los personajes
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results.slice(0, 12);

    // Iteramos a través de los primeros 12 personajes y creamos las cards
    for (let i = 0; i < characters.length; i++) {
      if (i % 4 === 0) {
        // Creamos una nueva fila
        const fila = document.createElement("div");
        fila.classList.add("row", "mb-4");
        fila.style.maxWidth = "100%";

        // Agregamos la fila al contenedor de filas
        contenedorCards.appendChild(fila);
      }

      // Creamos una nueva card
      const character = characters[i];
      const card = document.createElement("div");
      card.classList.add("card", "col-md-3", "col-sm-6", "mb-4");

      // Agregamos la imagen a la card
      const image = document.createElement("img");
      image.src = character.image;
      image.alt = character.name;
      card.appendChild(image);

      // Agregamos el nombre y especie a la card
      const title = document.createElement("h3");
      title.textContent = `${character.name} (${character.species})`;
      card.appendChild(title);

      // Agregamos la card a la fila actual
      const filaActual = contenedorCards.lastElementChild;
      filaActual.appendChild(card);

      // Agregamos una opción al elemento select con el nombre del personaje
      const option = document.createElement("option");
      option.value = character.name;
      option.textContent = character.name;
      select.appendChild(option);
    }

    // Seleccionamos todas las cards
    const cards = document.querySelectorAll(".card");

    // Agregamos el evento change al select
    select.addEventListener("change", () => {
      const selectedValue = select.value;

      // Iteramos a través de todas las cards
      cards.forEach((card) => {
        // Si la card coincide con el valor seleccionado, la mostramos
        if (
          selectedValue === "" ||
          card.querySelector("h3").textContent.includes(selectedValue)
        ) {
          card.style.display = "block";
        } else {
          // De lo contrario, la ocultamos
          card.style.display = "none";
        }
      });
    });
  });
