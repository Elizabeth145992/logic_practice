const numbers = [1, 2, 2, 3, 1, 2, 4, 3, 3];
const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];
const frequency = countFrequency(numbers);
const frequencyWords = countFrequency(words);
console.log(frequency);
console.log(frequencyWords);

function countFrequency(values) {
    const frequency = {};

    for (const value of values) {
        if (value in frequency) {
            frequency[value]++;
        } else {
            frequency[value] = 1;
        }
    }
    return frequency;
}
