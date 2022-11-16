// 60ms, 95.74%
// 41.6 MB

const countPoints = function(rings) {
    const rods = {};
    
    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i], rod = rings[i + 1];

        if(!rods[rod]) {
            rods[rod] = new Set();
        }

        rods[rod].add(color);
    }
    
    const arr = Object.values(rods);
    return arr.filter((e) => e.size === 3).length;
};

console.log(countPoints("B0B6G0R6R0R6G9"));

console.log(countPoints("B0R0G0R9R0B0G0"));

console.log(countPoints("G4"));