// 168ms, 82.48%
// 50.3 MB

const islandPerimeter = function(grid) {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) return dfs(i, j, grid);
        }
    }
    return 0;
};

function dfs(i, j, grid) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
    if(grid[i][j] === 0) return 1;

    if(grid[i][j] === -1) return 0;

    let count = 0;

    // Check
    grid[i][j] = -1;

    count += dfs(i-1, j, grid);
    count += dfs(i+1, j, grid);
    count += dfs(i, j-1, grid);
    count += dfs(i, j+1, grid);

    return count;
}

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));

console.log(islandPerimeter([[1]]));

console.log(islandPerimeter([[1, 0]]));