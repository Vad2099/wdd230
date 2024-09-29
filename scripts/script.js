const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navElements = document.querySelector('.menuList');

hamburgerBtn.addEventListener('click', () => {
    navElements.classList.toggle('open');
})