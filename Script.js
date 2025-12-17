var sidemenu = document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-100%";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzUUfFvoBsQY6EACKVkl_1SaS_cYcAB1J1W9mg3StSZ4yQF_Au95kfOHjQrkUDaIUnhvw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
                form.reset()
            }, 5000)
        })
        .catch(error => console.error('Error!', error.message))
})