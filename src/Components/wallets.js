export function createWalletsElement(wallet) {
    const walletDiv = document.createElement('div');
    walletDiv.classList.add('wallet');

    const walletName = document.createElement('span');
    walletName.classList.add('wallet-name');
    walletName.textContent = wallet.name;

    const walletCurrency = document.createElement('span');
    walletCurrency.classList.add('rub');
    walletCurrency.textContent = wallet.currency;

    walletDiv.append(walletName, walletCurrency);

    return walletDiv;
};
