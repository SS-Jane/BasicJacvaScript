let colors = ['Red', 'Green', 'Blue'];
colors.push("Black", "White", "Brown")
// for (let i = 0;i < colors.length ;i++){
//     console.log(colors[i]);
// }                 

colors.forEach(myData);

function myData(item){
    console.log(item);
}

console.log(typeof(colors));
let x = colors.toString();

console.log(typeof(x));
console.log(x);

let y = colors.join("");
console.log(typeof(y));
console.log(y);

let fruits = ["Orange", "Grap", "Mango"]
let vegetables = ["ผักชี", "s", "d", "d"]
let hardwares = ["q", "w", "r", "c"]

carts = fruits.concat(vegetables,hardwares);
console.log(carts);
cartsNumber = carts.length;
console.log(cartsNumber);