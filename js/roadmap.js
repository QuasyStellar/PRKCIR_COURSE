const blockchain = document.querySelector('.blockchain');

let rotateX = 20;
let rotateY = -30;

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    rotateY = -30 + (clientX / innerWidth) * 60;
    rotateX = 20 - (clientY / innerHeight) * 40;

    blockchain.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

