import { getData } from "./utils/api";
import { checkAcces } from "./utils/token";
import { createWalletsElement } from "./Components/wallets";
import { render } from "./utils/libs";
import { transactions } from "./Components/transactions";

checkAcces();

const walletContainer = document.querySelector('.wallet-container');
const tbody = document.querySelector('tbody');

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

getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => {
        console.error(error);
    });

fetch('http://localhost:3001/wallets')
    .then(response => response.json())
    .then(data => render(data, walletContainer, createWalletsElement))
    .catch(error => console.error(error))

fetch('http://localhost:3001/transactions')
    .then(response => response.json())
    .then(data => render(data, tbody, transactions))
    .catch(error => console.error(error))