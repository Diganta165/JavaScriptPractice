//1. onversion from foot to inch

function feetToInch( height){
    return height * 12;
}

let height = 6;
console.log(feetToInch(height),"inch");

//2. conversion from cm to m

function centimeterToMeter(value){
    return value / 100;
}

let value = 1;
console.log(centimeterToMeter(value), "m");

//3. calculation

function pageRequirements(book1, book2, book3){
    return (book1 * 100) + (book2 * 200) + (book3 * 300);
}

let book1 = 3;
let book2= 2;
let book3 = 2;

console.log("Total page required : ", pageRequirements(book1, book2, book3));

//4. return largest string

function bestFriend(friends){
    let max = '';
    for(let element in friends){
        if(friends[element].length > max.length){
            max = friends[element];
        }
    }
    return max;
}

let arr = ["Diganta" , "Unnata", "Maruf", "Osru", "Gi Gi Shwe", "Mim"];
console.log(bestFriend(arr));

//5. Will stop the loop is the array has any negative number and will return all the positive number till that negative number

function onlyPositive(numbers){

    let positive = [];

    for(let element in numbers){
        if (numbers[element] > 0){
            positive.push(numbers[element]);
        }
        else{
            break;
        }
    }

    return positive;

}

let numbers = [1,2,3,4,5,-45,324,10];
console.log(onlyPositive(numbers));