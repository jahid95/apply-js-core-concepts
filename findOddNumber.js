function getOddNumber(number){
    const oddNumber = [];
    for(var i=0; i<number.length; i++){
        const num = number[i];
        if(num % 2 === 1){
            oddNumber.push(num);
        }
    }
    return oddNumber;
}

const myNumber = [10,11,32,54,55,888,99,111];
const result = getOddNumber(myNumber);
console.log(result);