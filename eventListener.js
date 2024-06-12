  // ref
  const language3 = document.getElementById('language3');
  const languageDisplay3 = document.getElementById('languageDisplay3')

  const link3 = document.getElementById('link3')
  // event
  language3.addEventListener('change',languageDisplay)
  link3.addEventListener('mouseover',highLight3(this))
  link3.addEventListener('mouseout',unHighLight3(this))


function languageDisplay() {
    console.log(language3.value);
    languageDisplay3.innerText = language3.value
}

function highLight3(obj) {
    obj.style.background = 'orange';
}

function unHighLight3(obj) {
    obj.style.background = 'black';
    obj.style.color = 'white';
}