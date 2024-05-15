const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sumOfNumbers(inputString) {
    if (inputString.trim() === "") {
        return 0;
    }
    const numbers = inputString.split(","); 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const num = parseFloat(numbers[i]);

        if (!isNaN(num)) { 
            sum += num;
        }
    }
    return sum;
}
r1.question("enter your numbers here:", (input)=>{
    let sum= sumOfNumbers(input);
    console.log(sum);
    r1.close();
}
);
//testing
console.log(sumOfNumbers("4,3,6")); 
console.log(sumOfNumbers("10,20,30,a,40"));
console.log(sumOfNumbers(""));
console.log(sumOfNumbers("6,2,xyz,1"));