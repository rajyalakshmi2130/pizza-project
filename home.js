let data = loadDataFromLocalStorage()

function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem('pizzaData');
  return storedData ? JSON.parse(storedData) : [];
}

function populatePizzaList(data) {
  const homeList = document.getElementById('pizzaList');
  homeList.textContent = '';

  data.forEach(item => {
    const listItem = document.createElement('li');
    const { title, description, price, imgURL } = item;
    listItem.classList.add('pizza-item')
    listItem.innerHTML = `
      <img src='${imgURL}' alt="" class="pizza-image">
      <p class="pizza-name">${title}</p>
      <p class="pizza-description">${description}</p>
      <p class="pizza-price">$${price}</p>
      `;

    homeList.appendChild(listItem);
  });
}
populatePizzaList(data);



