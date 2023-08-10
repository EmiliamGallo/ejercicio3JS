const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const form = document.getElementById('form');
const container = document.getElementById('container');
const error = document.getElementById('error');
const inputnumber = document.getElementById('input-number');

const init = () => {
  form.addEventListener("submit", searchPizza);
  renderLastSearchedPizza();
}

const searchPizza = (e) => {
  e.preventDefault();

  if (inputnumber.value == "") {
    container.innerHTML = ""
    error.textContent = "Por favor ingrese un numero"
    return;
  }

  const pizza = pizzas.find((pizza) => pizza.id == inputnumber.value);
  console.log(pizza);

  if (!pizza) {
    container.innerHTML = ""
    error.textContent = "No existe una pizza con ese ID"
    return;
  }
  if (pizza) {
    error.textContent = ""
    container.innerHTML = `
    <div>
      <h2>${pizza.nombre}</h2>
      <p>${pizza.precio}</p>
      <img src="${pizza.imagen}" />
    </div>`;
  }
}

const renderLastSearchedPizza = () => {
  const lastSearchedPizza = JSON.parse(localStorage.getItem('lastSearchedPizza'));
  if (lastSearchedPizza) {
    container.innerHTML = `
    <div>
      <h2>${lastSearchedPizza.nombre}</h2>
      <p>${lastSearchedPizza.precio}</p>
      <img src="${lastSearchedPizza.imagen}" />
    </div>`;
  }
}

init();

