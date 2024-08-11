// api url
let url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let userData = {};


function startApp() {
    axios
        .get(url)
        .then(function (response) {
            console.log(response.data);
            userData = response.data;
            console.log(userData);
            username.innerText = userData.name;
            email.innerText = userData.email;
            address.innerText = userData.address;
        })
}

startApp();