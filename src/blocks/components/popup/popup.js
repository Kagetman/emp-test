let popupBg = document.querySelector('.popup');
let popup = document.querySelector('.popup__inner');
let body = document.querySelector('body');
let openPopupButtons = document.querySelectorAll('.js-open-popup');
let closePopupButton = document.querySelector('.popup__close');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        body.classList.add('hidden');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    body.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        body.classList.remove('hidden');
    }
});
