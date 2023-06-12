function bubbleSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap elements
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        }
    }
    
    return arr;
}

const numbers = [5, 3, 8, 4, 2, 10, 1, 1, 2, 5, 6, 89];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); 
