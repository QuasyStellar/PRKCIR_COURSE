let blockchain = []; // Хранит блоки

document.getElementById('sendBtn').addEventListener('click', () => {
    const sender = document.getElementById('sender').value;
    const receiver = document.getElementById('receiver').value;
    const amount = document.getElementById('amount').value;

    if (sender && receiver && amount > 0) {
        const previousHash = blockchain.length
            ? blockchain[blockchain.length - 1].hash
            : '0'; // Первый блок — генезис
        const transaction = `${sender} отправил ${amount} руб. ${receiver}`;
        const hash = generateHash(previousHash + transaction);

        // Создаем новый блок
        const block = {
            index: blockchain.length + 1,
            transaction,
            previousHash,
            hash,
        };
        blockchain.push(block);

        renderBlockchain();
    } else {
        alert('Заполните все поля корректно.');
    }
});

function generateHash(input) {
    // Простая хэш-функция для демонстрации
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = (hash << 5) - hash + input.charCodeAt(i);
        hash = hash & hash; // Преобразование в 32-битное число
    }
    return hash.toString(16).padStart(8, '0'); // Упрощенный хэш
}

function renderBlockchain() {
    const blocksContainer = document.getElementById('blocks');
    blocksContainer.innerHTML = ''; // Очищаем контейнер

    blockchain.forEach((block) => {
        const blockElement = document.createElement('div');
        blockElement.className = 'block';
        blockElement.innerHTML = `
            <h4>Блок ${block.index}</h4>
            <p><strong>Транзакция:</strong> ${block.transaction}</p>
            <p><strong>Предыдущий хэш:</strong> ${block.previousHash}</p>
            <p><strong>Хэш:</strong> ${block.hash}</p>
        `;
        blocksContainer.appendChild(blockElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Добавляем или убираем класс 'open'
    });
});

