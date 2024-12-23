document.addEventListener("DOMContentLoaded", () => {
    const rssUrl = 'https://cbr.ru/rss/eventrss';
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
    const rssFeedContainer = document.getElementById('rssFeed');

    async function loadRSS() {
        try {
            const response = await fetch(proxyUrl);
            if (!response.ok) throw new Error('Ошибка загрузки RSS');

            const rssText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(rssText, 'application/xml');

            const items = xmlDoc.querySelectorAll('item');
            rssFeedContainer.innerHTML = '';

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const imageUrl = getRandomPlaceholderImage();
                const link = item.querySelector('link').textContent;
                const description = item.querySelector('description') ? item.querySelector('description').textContent : 'No description';

                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <img src="${imageUrl}" alt="news image">
                    <h2>${title}</h2>
                    <p>${description}</p>
                `;
                
                // Добавляем обработчик на клик по блоку
                newsItem.addEventListener('click', () => {
                    window.open(link, '_blank'); // Переход по ссылке
                });

                rssFeedContainer.appendChild(newsItem);
            });
        } catch (error) {
            console.error(error);
            rssFeedContainer.innerHTML = '<p>Не удалось загрузить новости.</p>';
        }
    }
function getRandomPlaceholderImage() {
        // Ссылка на случайное изображение с LoremFlickr
        return `https://loremflickr.com/600/400?random=${Math.floor(Math.random() * 1000)}`;
    }
    loadRSS();
});

    

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Добавляем или убираем класс 'open'
    });
});

