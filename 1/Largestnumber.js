/*Write a Javascript program to take tree numbers from the user
as input and print the largest number on the document.*/


const num1 = parseFloat(prompt("enter 1st number."));
const num2 = parseFloat(prompt("enter 2nd number."));
const num3 = parseFloat(prompt("enter 3rd number."));
let largest;
if((num1>=num2)&&(num1>=num3)){
    largest=num1;
}
else if((num2>=num1)&&(num2>=num3)){
    largest=num2;
}
else{
    largest=num3;
}

console.log("largest number is "+largest);
