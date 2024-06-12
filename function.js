function hello() {
    console.log("Hello word");
};

function displayName() {
    document.write("Function Display Name");
};

function plusNumber(x,y,z) {
    let total = x+y;
    console.log(x,y,z);
    console.log('Total :',total);
};

function getComputerIP(){
    return "127.0.0.1";
};

function getNumber(x,y){
    return x*y;
}

function setSalary(salary){
    let bonus = (salary/12)*3;
    return salary+bonus;
}

function fullName(fname,lname,city="Bangkok"){
    console.log("First Name: ",fname,"Last Name:", lname, "Address :", city);
}

hello();
hello();
plusNumber(50,20,0.3)
let myIP=getComputerIP();
console.log(myIP);
let total=getNumber(20,10);
console.log(total);

let income = setSalary(480000);
console.log(income);

fullName("SuperJane", "Sangprasit");
fullName("Kambum", "Jan", "Roiet");

let a = 100;

function display(){
    let a = 50;
    console.log("local a:", a);
}

console.log("Gobal a:", a);
display();


function deleteData() {
    const result = confirm("Do you delete Data?");
    if (result) {
        console.log("delete data");
    } else {
        console.log("Cancel delete data");
    }
} 