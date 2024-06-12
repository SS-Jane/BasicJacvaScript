let a = document.getElementsByTagName('p');
let c = document.querySelector('p');
console.log(a);

let b = document.getElementById('demo');
let e = document.querySelector('#demo');
b.innerText='aaaaaaa';
console.log(b);

let count = 1;

function display(){
    const b = document.getElementById('demo');
    const x = 10;
    const y = 20;
    b.innerHTML = `X = ${x} , Y = ${y}`;
}

function changeStyle() {
    const f = document.getElementById('title');
    f.style.color='red';
    f.style.backgroundColor='black';
    f.style.fontSize='50px';

}

function darkmode() {
    const theam = document.querySelector('.light');

    theam.setAttribute('class','dark')
}

function lightmode() {
    const theam = document.querySelector('.dark');
    theam.setAttribute('class','light')
}

function addItem() {
    const menu = document.getElementById('menu')
    const item = document.createElement('li')
    item.innerText = 'Item'+(count++);
    menu.appendChild(item)
}

function deleteItem() {
    const menu = document.getElementById('menu')
    const item = document.querySelectorAll('li')
    const last = item.length
    console.log(last);
    console.log(item);
    menu.removeChild(item[last-1])
}