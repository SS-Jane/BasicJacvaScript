

function addStyle(){
    const box = document.getElementById('box')
    if (statusBox) {
        box.classList.add('darkmode')
    } else {
        box.classList.add('lightmode')
    }
}

function removeStyle(){
    const box = document.getElementById('box')
    box.classList.remove('darkmode')
}

function switchStyle(){
    const box = document.getElementById('box')
    box.classList.toggle('darkmode')
    let statusBox = box.classList.contains('darkmode')
    if (statusBox) {
        box.classList.remove('lightmode')
        box.classList.add('darkmode')
    } else {
        box.classList.remove('darkmode')
        box.classList.toggle('lightmode')
    }
}
