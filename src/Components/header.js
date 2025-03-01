export function header() {
    const header = document.querySelector('header');

    header.innerHTML = `
  <nav>
      <a href="/">Главная</a>
      <a href="/src/pages/wallets/index.html">Мои кошельки</a>
      <a href="/src/pages/transactions/">Мои транзакции</a>
    </nav>
    <nav>
      <a href="">
        <span class="email"></span>
      </a>
    <button id="logout">
        <img src="/log-out.svg" alt="">
    </button>
    </nav>
  `

  let logout = document.querySelector('#logout');

  logout.onclick = () => {
    localStorage.clear();
    window.location.replace('/src/pages/sign-up/');
  };
};