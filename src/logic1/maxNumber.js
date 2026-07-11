const numbers = [12, 7, 5, 20, 9, 15];
const infoNumbers = infoArray(numbers);

console.log(`Sum: ${infoNumbers.sum} \n`);
console.log(`Max Number: ${infoNumbers.maxNumber} \n`);
console.log(`Min Number: ${infoNumbers.minNumber} \n`);
console.log(`Average: ${infoNumbers.avarage} \n`);

function infoArray(numbers){
    let sum = 0;
    let maxNumber = numbers[0];
    let minNumber = numbers[0];
    numbers.map((number) => {
        sum += number;
        if(number > maxNumber) {
            maxNumber = number;
        }

        if(number < minNumber) {
            minNumber = number;
        }
    });

    const avarage = sum / numbers.length;

    return {
        sum: sum,
        maxNumber: maxNumber,
        minNumber: minNumber,
        avarage: avarage
    }
}
