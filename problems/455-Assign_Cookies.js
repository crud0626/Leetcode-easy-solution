// 103ms, 90.54%
// 44.9 MB

const findContentChildren = function(g, s) {
    g = g.sort((a, b) => b - a);
    s = s.sort((a, b) => b - a);

    let counter = 0;

    cookie = s.shift();
    child = g.shift();

    while(cookie && child) {
        if(child <= cookie) {
            cookie = s.shift();
            counter++;
        }
        child = g.shift();
    }

    return counter;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));

console.log(findContentChildren([1, 2], [1, 2, 3]));