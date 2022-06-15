'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

// querySelector only selects the 1st element - the first modal button--you have to add all to do more

for(let i = 0; i < btnOpenModal.length; i++) {
    const openModal = function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    }
    btnOpenModal[i].addEventListener('click', openModal)
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

// HOW TO HANDLE KEYPRESS EVENTS

// KEYUP - when finger goes away from key

// KEYPRESS - while holding key pressed

// KEYDOWN - when pressing down key

document.addEventListener('keydown', function (e) {
    //passing in the e or eventObject as a parameter
    if(e.key === 'Escape'){
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});



