console.log("Hello world this is my first javascript program");
age = 27;
console.log(age);

const product = {
    name : "amazon pen",
    price : 30,
    discount : 5,
};

product["price"] = product["price"] + 1;
console.log(product["price"]);

console.log(product);
console.log(product["name"]);


//alert("this is an alert tag");
let take = prompt("This is a prompt");
console.log("This was the input",take);

for(i=0;i<=5;i++){
    console.log("first for loop in js");
}