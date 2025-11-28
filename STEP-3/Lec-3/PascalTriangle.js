// Function to generate Pascal's Triangle up to numRows
function pascalTriangle(numRows) {
    // Initialize the triangle as an empty array
    let triangle = [];

    // Iterate through each row
    for(let i = 0; i < numRows; i++){
        // Create a new row with (i + 1) elements, all initialized to 1
        let row = new Array(i + 1).fill(1);

        // Calculate the inner elements of the row (not the first or last)
        for(let j = 1; j < i; j++){
            // Each element is the sum of the two elements above it
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Add the completed row to the triangle
        triangle.push(row);
    }
    
    // Return the completed Pascal's Triangle
    return triangle;
};

// Example usage: Print Pascal's Triangle with 6 rows
console.log(pascalTriangle(6));

/*
Time Complexity: O(n^2)
Space Complexity: O(n^2)
Where n is numRows.
*/