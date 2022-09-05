// 64ms, 85.53%
// 42.1 MB

const distanceBetweenBusStops = function(distance, start, destination) {
    if(start > destination) [start, destination] = [destination, start];

    const result = {
        clockwise: 0,
        counterclockwise: 0
    };

    for (let i = 0; i < distance.length; i++) {
        start <= i && i < destination
        ? result.clockwise += distance[i]
        : result.counterclockwise += distance[i];
    }

    return Math.min(...Object.values(result));
};

console.log(distanceBetweenBusStops([1,2,3,4], 0, 1));

console.log(distanceBetweenBusStops([1,2,3,4], 0, 2));

console.log(distanceBetweenBusStops([1,2,3,4], 0, 3));