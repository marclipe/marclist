window.addEventListener('DOMContentLoaded', function() {
    const buttonCreate = document.querySelector(".button__create");
    const popup = document.querySelector(".popup__list");
    const closeBtn = this.document.querySelector('.button__cancel');

    buttonCreate.addEventListener('click', function() {
        popup.style.display = 'block'
    })

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none'
    })
})