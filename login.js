
let data = [
    {
        title: "Cheese Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg",
        description:
            "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: 15.95,
    },
    {
        title: "Pepperoni Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/7777.jpg",
        description:
            "Get our classic Pepperoni pizza with your choice of sauce and crust.",
        price: 16.35,
    },
    {
        title: "Vegetarian Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/p1.jpg",
        description:
            "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
        price: 19.95,
    },
    {
        title: "Mozzarella Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/09.jpg",
        description:
            "Secret homemade spicy sauce, with curly pepperoni and fresh mozzarella",
        price: 22.55,
    },
    {
        title: "Sicilian Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/46.jpg",
        description: "Salami, pepperoni, Italian sausage, green peppers & onions",
        price: 19.15,
    },
    {
        title: "Grilled Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/68.jpg",
        description: "Tomato, onions, green peppers & grilled or fried chicken",
        price: 14.25,
    },
    {
        title: "Veggie Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/53.jpg",
        description: "Black olives, green pepper, onion, mushroom & tomato",
        price: 12.25,
    },
    {
        title: "Chicken Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/22.jpg",
        description: "Alfredo sauce, grilled chicken, mushrooms & black olives",
        price: 13.55,
    },
    {
        title: "Hot Brown Pizza",
        imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/43.jpg",
        description:
            "Roasted turkey, bacon, tomato over creamy cheddar alfredo sauce",
        price: 18.00,
    },
];


function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Enter Username and Password');
    } else if (username === password) {
        localStorage.setItem('pizzaData', JSON.stringify(data));
        localStorage.setItem('userLoggedIn', true);
        window.location.href = 'home.html';
    }
    else {
        alert('username and password must be same');
    }
}

