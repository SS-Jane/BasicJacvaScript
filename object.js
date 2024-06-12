let user = {
    name : "Jane",
    age : 30,
    email : "superjane.prodev@gmail.com",
    getUser:function(){
        return this.name + " " + this.email;
    }
};
let product = {
    name : "Mango",
    price : 200,
    category : "fruits",
    displayProduct:function(){
        return this.name + " " + this.price;
    }
};

console.log(user.name);
console.log(user.getUser());
console.log(product.displayProduct());