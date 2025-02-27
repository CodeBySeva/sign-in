import { getData } from "./utils/api";
import { checkAcces } from "./utils/token";
import { createWalletsElement } from "./Components/wallets";
import { render } from "./utils/libs";
import { transactions } from "./Components/transactions";

checkAcces();

const walletContainer = document.querySelector('.wallet-container');
const tbody = document.querySelector('tbody');

let userId = localStorage.getItem("userId");

export function showUser(user) {
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

getData(`wallets?userId=${userId}`)
    .then(res => render(res.data, walletContainer, createWalletsElement))
    .catch(error => console.error(error));

getData(`transactions?userId=${userId}`)
    .then(res => render(res.data, tbody, transactions))
    .catch(error => console.error(error));