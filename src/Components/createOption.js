export function createOption(wallet) {
    const option = document.createElement("option");
    option.value = wallet.id;
    option.textContent = wallet.name;
    return option;
};