import { getData, postData } from "../../utils/api";
import { render } from "../../utils/libs";
import { createOption } from "../../Components/createOption";

const walletSelect = document.querySelector('#wallet');
const form = document.forms.transactionsForm;
let userId = localStorage.getItem("userId");

getData(`wallets?userId=${userId}`)
    .then(res => render(res.data, walletSelect, createOption))
    .catch(error => console.error(error))

form.onsubmit = (e) => {
    e.preventDefault();

    const fn = new FormData(form);
    const sum = fn.get('sum');
    const description = fn.get('category');

    const transactionData = {
        description: description,
        sum: sum,
        userId: userId,
        wallet: {
            name: walletSelect.value
        },
        createdAt: new Date().toISOString().split('T')[0]
    };

    postData("transactions", transactionData)
        .then(res => {
            console.log("added:", res.data.statusTeaxt);
            window.location.replace("/src/pages/transactions/"  );
        })
        .catch(error => console.error(error));

};
console.log(form);