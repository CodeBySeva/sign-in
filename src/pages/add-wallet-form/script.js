import { postData } from "../../utils/api";

const form = document.forms.addWallet;
let userId = localStorage.getItem("userId");

form.onsubmit = (e) => {
    e.preventDefault();

    const fn = new FormData(form);
    const name = fn.get('name');
    const currency = fn.get('currency');

    const walletData = {
        name: name,
        currency: currency,
        balance: 10000,
        userId: userId
    };

    postData("wallets", walletData)
        .then(res => {
            alert("successfully added!")
            window.location.href = "scr/pages/wallets/"
        })
        .catch(error => console.error(error));
};

console.log(form);
