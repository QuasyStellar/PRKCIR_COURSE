const hexGrid = document.querySelector('.hex-grid');


        // Обработка мыши
        roadmap.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            // Увеличиваем множители для большего поворота
            hexGrid.style.transform = `rotateX(${-deltaY * 30}deg) rotateY(${deltaX * 30}deg)`;
        });

        // Обработка сенсорных касаний
        roadmap.addEventListener('touchstart', (event) => {
            isTouching = true;
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
        });

        roadmap.addEventListener('touchmove', (event) => {
            if (!isTouching) return;

            const x = event.touches[0].clientX;
            const y = event.touches[0].clientY;

            const deltaX = (x - touchStartX) / window.innerWidth;
            const deltaY = (y - touchStartY) / window.innerHeight;

            // Увеличиваем множители для большего поворота
            hexGrid.style.transform = `rotateX(${-deltaY * 30}deg) rotateY(${deltaX * 30}deg)`;

            // Обновление начальных координат для следующего касания
            touchStartX = x;
            touchStartY = y;
        });

        roadmap.addEventListener('touchend', () => {
            isTouching = false;
        });


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Добавляем или убираем класс 'open'
    });
});

