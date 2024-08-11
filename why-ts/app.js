// api url
let url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let userData = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {String} city
 */


/**
 * @typedef {object} User
 * @Property {string} name
 * @property {string} email
 * @property {Address} address
 */


/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url);
  }
  
  fetchUser().then(function(response) {
    response.address.city;
  })

function startApp() {
    fetchUser()
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