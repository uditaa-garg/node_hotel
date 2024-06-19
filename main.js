//assignment 1

//question 1

var prompt = require('prompt-sync')();

var age = prompt("enter your age: ");

if(age<18){
    console.log("you get 20% off");
}

else if(age>=65){
    console.log("you get 30% off");
}

else{
    console.log("normal ticket price applies");

}


//question 2

var length = prompt("enter the length: ");
var breadth = prompt("enter the breadth: ");
var area = length*breadth;
console.log("the area of rectangle is: "+area);


//question 3
var products = [];
var names = ["gloves","bat","ball"];
var prices = [30,22,20];
var instocks =[true,false,true];

for(i = 0;i<3;i++){
const product = {
    name:names[i],
    price: prices[i],
    instock:instocks[i]
};
products.push(product);
}
console.log(products);


// question 4

var guestlist = ['uditaa','prakher','shikha'];

var guest  = prompt("please enter your name: ");
var check = 0;
for(i in guestlist){
    if(guest == guestlist[i]){
       check = 1; 
    }
}
if(check==1){
    console.log("you are welcome");
}
else{
    console.log("you are not there in guestlist");
}







