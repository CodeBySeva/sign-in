import axios from "axios";

const url = "http://localhost:3001/users";
const form = document.forms.signUp;

form.onsubmit = (e) => {
    e.preventDefault();

    let user = {};

    const fn = new FormData(form);

    fn.forEach((value, key) => {
        user[key] = value;
    });

    axios.post(url, user)
        .then(res => {
            localStorage.setItem("userId", res.data.id)
            window.location.href = "/";
            console.log(res.data);
        })
        .catch(error => {
            console.error(error);
        });
};