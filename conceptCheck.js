//1. write 3 variables (number, string, boolean)
let number = 13454;
let stringVariable = "Hi"
let booleanVariable = true;

//2. 2 variables  using (let, const). Which one can be updated and not

// function checking ( num1, num2){
//     if(typeof(num1) == )
// }

//3 Declare 2 variables and + - * / simple math operations

function mathOperation (num1, num2){
    return console.log("Addition:", num1+num2,"\n Substraction: ", num1-num2, "\n Multiplication: ", num1*num2, "\n Division: ", num2/num1);
}

let num1 = 1;
let num2 = 2;

mathOperation(num1,num2);

//4. comparison of two variables if a variable is smaller or larger or equal or not equal  greater or equal or smaller or equal

//5 fullfill both condition or full fill one condition

//6. if-else

//7. while loop to display all the odd numbers from 7 to 19

//8. Declare an array. Number of elements and replace the 4th position array element, add or remove elements. check whether a specific element is inside the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.length);
arr[3] = 15;
for(let element in arr)
{
    console.log(arr[element])
}
//9. for loop to display every element of an array


//10. you have an array of numbers. Display only the numbers bigger than 80

//11 write a function that takes three numbers and return the multiplication of them

//12. Declare an object and change any property

let test = {
    name: "Diganta",
    age: 24,

}

console.log(test)

test.age = 26;
console.log("\nAfter change: ", test)