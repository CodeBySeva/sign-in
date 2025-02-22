import axios from "axios";

const form = document.forms.signIn;

form.onsubmit = (e) => {
    e.preventDefault();

    const emailInput = form.elements.email.value;

    axios.get(`http://localhost:3001/users?email=${emailInput}`)
        .then(res => {
            if (res.data.length > 0) {
                const user = res.data[0];
                localStorage.setItem('userId', user.id);
                window.location.href = "/";
            } else {
                alert('Пользователь не найден!');
            }
        })
        .catch(error => {
            console.error(error);
        });
};