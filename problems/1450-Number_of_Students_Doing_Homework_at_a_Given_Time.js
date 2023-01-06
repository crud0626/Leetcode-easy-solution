// 59ms, 94.31%
// 41.7 MB

const busyStudent = function(startTime, endTime, queryTime) {
    let result = 0;

    for(let i = 0; i < startTime.length; i++) {
        const start = startTime[i], end = endTime[i];

        if(start <= queryTime && queryTime <= end) {
            result ++;
        }
    }

    return result;
};

console.log(busyStudent([1,2,3], [3,2,7], 4));

console.log(busyStudent([4], [4], 4));