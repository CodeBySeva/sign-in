export function transactions(data) {
    const tr = document.createElement('tr');
    tr.classList.add('tr');
   
    const id = document.createElement('td');
    id.classList.add('td');
    id.textContent = data.id;

    const walletType = document.createElement('td');
    walletType.classList.add('td');
    walletType.textContent = data.walletType;

    const category = document.createElement('td');
    category.classList.add('td');
    category.textContent = data.category;

    const amount = document.createElement('td');
    amount.classList.add('td');
    amount.textContent = data.amount;

    const date = document.createElement('td');
    date.classList.add('td');
    date.textContent = data.date;

    tr.append(id, walletType, category, amount, date);

    return tr;
};