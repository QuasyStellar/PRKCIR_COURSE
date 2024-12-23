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
                const link = item.querySelector('link').textContent;

                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h2>${title}</h2>
                    <a href="${link}" target="_blank">Читать далее</a>
                `;
                rssFeedContainer.appendChild(newsItem);
            });
        } catch (error) {
            console.error(error);
            rssFeedContainer.innerHTML = '<p>Не удалось загрузить новости.</p>';
        }
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


