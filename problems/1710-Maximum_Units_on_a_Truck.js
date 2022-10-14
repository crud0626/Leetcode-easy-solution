// 71ms, 98.70%
// 45 MB

const maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let result = 0;

    for(let i = 0; i < boxTypes.length; i++) {
        const [ numOfBox, unitPerBox ] = boxTypes[i];
        if (truckSize < numOfBox) {
            result += truckSize * unitPerBox;
            break;
        }
        
        result += numOfBox * unitPerBox;
        truckSize -= numOfBox;
    }

    return result;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));