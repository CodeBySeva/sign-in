import axios from "axios";

const url = "http://localhost:3001/users";
let userId = localStorage.getItem("userId");

function showUser(user) {
    const userEmail = document.querySelector('#userEmail');
    if (userEmail) userEmail.textContent = user.email;

    const lastname = document.querySelector('#lastname');
    if (lastname) lastname.textContent = user.lastname;

    const surname = document.querySelector('#surname');
    if (surname) surname.textContent = user.surname + '!';

    const email = document.querySelector('.email');
    if (email) email.textContent = user.email;
};

axios.get(`${url}/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => {
        console.error(error);
    });