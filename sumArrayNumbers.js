function sumOfArrayNumbers (numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum+element;
    }
    return sum;
}

const myNumbers = [10,21,25,30,40,35];

// console.log(result);

function findOddNumbers (numbers){
    const oddNumbers =[];
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const number = numbers[index];
        if(number % 2 === 1){
            oddNumbers.push(number)
        }
    }
    return oddNumbers;
}

const oddNumbers = findOddNumbers(myNumbers);
console.log(oddNumbers);
const result = sumOfArrayNumbers(oddNumbers);
console.log('sum of odd number:', result);
