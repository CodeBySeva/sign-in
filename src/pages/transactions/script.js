import { header } from "../../Components/header";
import { transactions } from "../../Components/transactions";
import { showUser } from "../../main";
import { getData } from "../../utils/api";
import { render } from "../../utils/libs";
import { checkAcces } from "../../utils/token";

header();
checkAcces();

const addTransaction = document.querySelector('#addTransaction');

addTransaction.onclick = () => {
    window.location.href = "/src/pages/add-transaction-form/";
};

const userId = localStorage.getItem("userId");
const transactionContainer = document.querySelector('tbody');

getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => {
        console.error(error);
    });

getData(`transactions?userId=${userId}`)
    .then(res => render(res.data, transactionContainer, transactions))
    .catch(error => console.error(error));