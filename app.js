document.write("<h1>JavaScript By Superjane</h1>");
document.write("<h1>This write by JavaScript</h1>");

// alert("Hi! Hi!");
// white color text
console.log("Hello Javascript");
// red color text
console.error("Found malware!!");
// yellow color text
console.warn("Found Mistake informatiob");

// variable

let name;
name = "SuperJane";
let age;
age = 30;

console.log(name);
document.write(name);
console.log("Age :",age);

let money = 500;
let vat = 0.07;

console.log(money);
console.log(vat);
console.log(money*vat);


console.log(typeof(money*vat))

console.log(money>vat)
console.log(typeof(money>vat))


// type convert string --> number

let age2 = "30";
console.log(age2,",",typeof(age2))

let age3 = +"30";
console.log(age3,",",typeof(age3))

// type convert number --> string
let price1 = 2057.25;
console.log(price1,",",typeof(price1))

let price2 = 2057.25.toString();
console.log(price2,",",typeof(price2))

// Array syntex 1
let alphabet1 = "a" ,alphabet2 = "b", alphabet3 = "c", alphabet4 = "d";

console.log(alphabet3);

let alphabet = Array("a","b","c","d","e","f");
console.log("alphabet :",alphabet);
console.log("Array index[2] :",alphabet[2]);

// Array syntex 2
let color = ["red","green","blue","black","white"];

console.log("Color :",color);
console.log("Color index[2] :", color[2]);

// Operator
console.log("Price:",price1,"vat:",vat,"Vat amount :",price1*vat,"Pay :",(price1+(price1*vat)));

console.log("price1==price2 :",price1==price2);
console.log("price1!=age3 :",price1!=age3);
console.log("color[1]==green :",color[1]=="green");
console.log("age==age2 :",age==age2);
console.log("age>age2 :",age>age2);
console.log("age<age2 :",age<age2);
console.log("age!=age2 :",age!=age2);



