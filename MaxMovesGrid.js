var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const memo = new Map();

    const dfs = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return 0;
        }
        
        if (memo.has(`${row}-${col}`)) {
            return memo.get(`${row}-${col}`);
        }

        let maxMoves = 0;
        const currentVal = grid[row][col];

        for (let rDiff = -1; rDiff <= 1; rDiff++) {
            for (let cDiff = 1; cDiff <= 1; cDiff++) {
                const newRow = row + rDiff;
                const newCol = col + cDiff;

                if (newRow >= 0 && newRow < m && newCol < n &&
                    grid[newRow][newCol] > currentVal) {
                    maxMoves = Math.max(maxMoves, 1 + dfs(newRow, newCol));
                }
            }
        }

        memo.set(`${row}-${col}`, maxMoves);
        return maxMoves;
    };

    let max = 0;
    for (let i = 0; i < m; i++) {
        max = Math.max(max, dfs(i, 0));
    }

    return max;
};

// Example usage
const grid1 = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
console.log(maxMoves(grid1)); // Output: 3

const grid2 = [[3, 2, 4], [2, 1, 9], [1, 1, 7]];
console.log(maxMoves(grid2)); // Output: 0
