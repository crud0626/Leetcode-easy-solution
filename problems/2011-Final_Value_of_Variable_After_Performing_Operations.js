// 63ms, 97.55%
// 44.2 MB

const finalValueAfterOperations = function(operations) {
    let num = 0;

    operations.forEach(op => {
        op.match(/--/) !== null ? num -= 1 : num += 1;
    });

    return num;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));

console.log(finalValueAfterOperations(["++X","++X","X++"]));

console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));