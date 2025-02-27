export function transactions(data) {
    const tr = document.createElement('tr');
    tr.classList.add('tr');
   
    const id = document.createElement('td');
    id.classList.add('td');
    id.textContent = data.id;

    const walletType = document.createElement('td');
    walletType.classList.add('td');
    walletType.textContent = data.wallet.name;

    const description = document.createElement('td');
    description.classList.add('td');
    description.textContent = data.description;

    const sum = document.createElement('td');
    sum.classList.add('td');
    sum.textContent = data.sum;

    const createdAt = document.createElement('td');
    createdAt.classList.add('td');
    createdAt.textContent = data.createdAt;

    tr.append(id, walletType, description, sum, createdAt);

    return tr;
};