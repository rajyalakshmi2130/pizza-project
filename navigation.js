const homeLink = document.querySelector('a[href="#home"]');
homeLink.addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'home.html';
});

const manageLink = document.querySelector('a[href="#manage"]');
manageLink.addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'manage.html';
});
const navIconLink = document.querySelector('a[href="#navHome"]');
navIconLink.addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'home.html';
});



const logoutLink = document.getElementById('logoutLink');
logoutLink.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem('userLoggedIn')
    window.location.href = 'login.html';
});