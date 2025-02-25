export function createWalletsElement(wallet) {
    const walletDiv = document.createElement('div');
    walletDiv.classList.add('wallet');

    const walletType = document.createElement('span');
    walletType.classList.add('visa');
    walletType.textContent = wallet.type;

    const walletCurrency = document.createElement('span');
    walletCurrency.classList.add('rub');
    walletCurrency.textContent = wallet.currency;

    walletDiv.append(walletType, walletCurrency);

    return walletDiv;
};
