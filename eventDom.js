function welcome() {
    console.log('Welcome to SuperJane website');
}

function highLight2(obj) {
    obj.style.background = 'orange';
}

function unHighLight2(obj) {
    obj.style.background = 'black';
    obj.style.color = 'white';
}

function getMenu() {
    const language2 = document.getElementById('language2')
    const languageDisplay2 = document.getElementById('languageDisplay2')
    console.log(language2.value);
    languageDisplay2.innerText = language2.value
}