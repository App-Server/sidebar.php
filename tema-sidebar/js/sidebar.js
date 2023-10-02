const container = document.querySelector('.container');
const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
    container.classList.toggle('open');
});