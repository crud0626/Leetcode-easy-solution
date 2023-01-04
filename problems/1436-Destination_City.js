// 67ms, 91.9%
// 43.4 MB

const destCity = function(paths) {
    const cityList = Array.from(new Set(paths.flat()));
    const startCities = new Set();

    paths.forEach(([A, _]) => {
        startCities.add(A);
    });

    for(let i = 0; i < cityList.length; i++) {
        if(!startCities.has(cityList[i])) return cityList[i];
    }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));

console.log(destCity([["B","C"],["D","B"],["C","A"]]));

console.log(destCity([["A","Z"]]));