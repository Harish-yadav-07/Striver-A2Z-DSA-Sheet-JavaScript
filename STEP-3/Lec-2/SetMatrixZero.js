let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

var setZeroes = function(matrix) {
    let row = matrix.length, col = matrix[0].length;
    let firstRow = false, firstCol = false;

    for (let j = 0; j < col; j++) if (matrix[0][j] === 0) firstRow = true;
    for (let i = 0; i < row; i++) if (matrix[i][0] === 0) firstCol = true;

    for (let i = 1; i < row; i++)
        for (let j = 1; j < col; j++)
            if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;

    for (let i = 1; i < row; i++)
        for (let j = 1; j < col; j++)
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;

    if (firstRow) for (let j = 0; j < col; j++) matrix[0][j] = 0;
    if (firstCol) for (let i = 0; i < row; i++) matrix[i][0] = 0;
    
};

setZeroes(matrix);
console.log(matrix);