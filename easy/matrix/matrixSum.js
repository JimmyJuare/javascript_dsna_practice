let sumOfMatrix = (matrix) => {
    let sum = 0;
    let primary = [];
    let secondary = [];

    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        primary.push(arr[i]);
        secondary.push(arr[arr.length - (1 + i)]);
        sum += arr[i] + arr[arr.length - (1 + i)];
        
        
        
        
    }
    if (matrix.length % 2 === 1) {
        const centerIndex = Math.floor(matrix.length / 2);
        sum -= matrix[centerIndex][centerIndex];
    }
    
    return sum;
};

let newMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let oneMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
];
console.log(sumOfMatrix(newMatrix));
console.log(sumOfMatrix(oneMatrix));
