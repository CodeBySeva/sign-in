import axios from "axios";
import { postData } from "../../utils/api";
import { render } from "../../utils/libs";
import { createOption } from "../../Components/createOption";

const form = document.forms.addWallet;
const currencySelect = document.querySelector("#currencySelect");
let userId = localStorage.getItem("userId");

axios.get("https://api.apilayer.com/currency_data/list?base=USD&symbols=EUR,GBP", {
    headers: {
        apikey: "VLuQkzytFlL9EenW2KV6tO9ggKGtQ5I2",
    }
})
    .then(res => {
        render(Object.keys(res.data.currencies), currencySelect, createOption);
    })
    .catch(error => console.error(error))


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
