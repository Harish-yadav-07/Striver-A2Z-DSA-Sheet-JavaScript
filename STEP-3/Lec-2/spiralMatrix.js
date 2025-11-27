function spiralMatrix(matrix) {
    let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;
        let result = [];
        // Loop until boundaries collapse
        while (top <= bottom && left <= right) {

            // Traverse top row from left to right
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++; // Move top down

            // Traverse right column from top to bottom
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--; // Move right left

            // Check remaining rows
            if (top <= bottom) {
                // Traverse bottom row from right to left
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--; // Move bottom up
            }

            // Check remaining columns
            if (left <= right) {
                // Traverse left column from bottom to top
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++; // Move left right
            }
        }

        return result;
};
const matrix = [
  [1,  2,  3,  4,  5,  6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
];

console.log(spiralMatrix(matrix));