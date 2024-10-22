const menuIcon = document.getElementById('solid'); // No # needed for ID
const mobileMenu = document.querySelector('.menu'); // Using querySelector for class selection

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('men')
});
