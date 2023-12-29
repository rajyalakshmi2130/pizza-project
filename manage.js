let data = loadDataFromLocalStorage()

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('pizzaData');
    return storedData ? JSON.parse(storedData) : [];
}

function saveDataToLocalStorage() {
    localStorage.setItem('pizzaData', JSON.stringify(data));
}


const manageList = document.getElementById('manageList')
let currentlyEditingPizzaId = null;


function populateManageList() {
    manageList.textContent = ''
    data.forEach(item => {
        const listItem = document.createElement('li')
        const { title, description, price, imgURL } = item
        listItem.classList.add('manage-item')
        listItem.id = title

        listItem.innerHTML = `
            <div>
                <img src="${imgURL}" alt="pizza" class="manage-item-image">
            </div>
            <div class="manage-item-heading-wrapper">
                <h1>${title}</h1>
                <p>"${description}"</p>
            </div>
            <div class="manage-price-wrapper">
                <p>$${price}</p>
            </div>
            <div class="icons-container">
                <i class="fa-solid fa-pen-to-square icon-size" onclick="showEditModal('${title}')"></i>
                <i class="fa-solid fa-trash-can icon-size" onclick="deletePizza('${title}')"></i>
            </div>
            `
        manageList.appendChild(listItem)
    })
}
populateManageList()

const deletePizza = function (pizzaId) {
    const pizzaIndex = data.findIndex(pizza => pizza.title === pizzaId);
    data.splice(pizzaIndex, 1);
    saveDataToLocalStorage()
    populateManageList();
};

const showEditModal = function (pizzaId) {
    const pizzaToEdit = data.find(pizza => pizza.title === pizzaId);
    document.getElementById('editTitle').value = pizzaToEdit.title;
    document.getElementById('pizzaImage').src = pizzaToEdit.imgURL;
    document.getElementById('editDescription').value = pizzaToEdit.description;
    document.getElementById('editPrice').value = pizzaToEdit.price;

    currentlyEditingPizzaId = pizzaId

    $('#editModal').modal('show');
};

const saveEditedPizza = function () {
    if (currentlyEditingPizzaId !== null) {
        const pizzaToEdit = data.find(pizza => pizza.title === currentlyEditingPizzaId);

        pizzaToEdit.title = document.getElementById('editTitle').value;
        pizzaToEdit.description = document.getElementById('editDescription').value;
        pizzaToEdit.price = document.getElementById('editPrice').value;

        $('#editModal').modal('hide');

        currentlyEditingPizzaId = null;
        saveDataToLocalStorage()
        populateManageList();
    } else {
        alert("No pizza ID to edit.");
    }
};

const showAddModal = function () {
    document.getElementById('addTitle').value = '';
    document.getElementById('addDescription').value = '';
    document.getElementById('addPrice').value = '';
    document.getElementById('addPizzaImage').src = "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg";
    $('#addModal').modal('show');
};

const saveNewPizza = function () {

    const newTitle = document.getElementById('addTitle').value;
    const newDescription = document.getElementById('addDescription').value;
    const newPrice = document.getElementById('addPrice').value;


    if (newTitle.trim() === '' || newDescription.trim() === '' || newPrice.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    const newPizza = {
        id: newTitle,
        title: newTitle,
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg",
        description: newDescription,
        price: newPrice,
    };

    data.push(newPizza);
    saveDataToLocalStorage()
    $('#addModal').modal('hide');

    populateManageList();
};



