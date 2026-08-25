type NumberFrequency = { [key: number | string]: number };

const numbers2: number[] = [1, 2, 2, 3, 1, 2, 4, 3, 3];
const words2: string[] = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

const frequency2: NumberFrequency = countFrequency2(numbers2);
const frequencyWords2: NumberFrequency = countFrequency2(words2);
console.log(frequency2);
console.log(frequencyWords2);

function countFrequency2(values: (number | string)[]): NumberFrequency {
    const frequency: NumberFrequency = {};

    for (const value of values) {
        if (value in frequency) {
            frequency[value]++;
        } else {
            frequency[value] = 1;
        }
    }
    return frequency;
}
