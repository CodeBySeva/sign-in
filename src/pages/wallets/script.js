import { createWalletsElement } from "../../Components/wallets";
import { getData } from "../../utils/api";
import { render } from "../../utils/libs";
import { showUser } from "../../main";
import { header } from "../../Components/header";
import { checkAcces } from "../../utils/token";

header();
checkAcces();

const userId = localStorage.getItem("userId");
const walletContainer = document.querySelector('.wallets');
const btn = document.querySelector('.add-btn');

btn.onclick = () => {
    window.location.href = '/src/pages/add-wallet-form/';
};

getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => {
        console.error(error);
    });

getData(`wallets?userId=${userId}`)
    .then(res => render(res.data, walletContainer, createWalletsElement))
    .catch(error => console.error(error));