function getFactrorial (number){
    let result = 1;
    for(var i=1; i<=number; i++){
         result = result * i;
    }
    return result;
}

const myNumber = getFactrorial(5);
// console.log(myNumber);

//Factorial reverse away for loop
function getFactrorial (number){
    let result = 1;
    for(var i= number; i>=1; i--){
        result = result * i;
    }
    return result;
}
const myNumber2 = getFactrorial(5);
// console.log(myNumber2);


//get factorial using while loop
function getFactrorial(number){
    let i = 1;
    let result = 1;
    while(i<number){
        i++;
        result = result * i;        
    }
    return result;
}

const myNumber3 = getFactrorial(5);
console.log(myNumber3);