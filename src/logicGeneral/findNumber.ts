function findDuplicates(numbers: number[]): number[] {
    let duplicates: Set<number> = new Set();
    let seen: Set<number> = new Set();

    for (const number of numbers) {
        if(seen.has(number) && !duplicates.has(number)) {
            duplicates.add(number);
        }else {
            seen.add(number);
        }
    }
    return Array.from(duplicates).sort((a, b) => a - b);
}

const numbers: number[] = [5, 1, 3, 5, 2, 1, 4, 3];
const duplicates = findDuplicates(numbers);
console.log(duplicates);