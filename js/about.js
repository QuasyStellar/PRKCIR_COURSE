document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Добавляем или убираем класс 'open'
    });
});

document.querySelectorAll('.section h2').forEach(function (header) {
            header.addEventListener('click', function () {
                const section = header.closest('.section'); // Получаем ближайший родительский элемент .section
                section.classList.toggle('active'); // Добавляем или удаляем класс 'active' у секции
            });
        });

