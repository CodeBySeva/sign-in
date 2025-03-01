import { postData } from "../../utils/api";
import { render } from "../../utils/libs";

const walletSelect = document.querySelector('#wallet');
const form = document.forms.transactionsForm;
let userId = localStorage.getItem("userId");

function createOption(wallet) {
    const option = document.createElement("option");
    option.value = wallet.id;
    option.textContent = wallet.name;
    return option;
};

form.onsubmit = (e) => {
    e.preventDefault();

    const fn = new FormData(form);
    const sum = fn.get('sum');
    const description = fn.get('category');
    const walletId = fn.get('wallet');
    const selectedWallet = walletSelect.querySelector(``)

    const transactionData = {
        description: description,
        sum: sum,
        userId: userId,
        wallet: {
            id: walletId,
            name: selectedWallet.textContent
        },
        createdAt: new Date().toISOString().split('T')[0]
    };

    postData("transactions", transactionData)
        .then(res => {
            alert("successfully added!")
            window.location.href = "src/pages/transactions/";
        })
        .catch(error => console.error(error));

};
console.log(form);