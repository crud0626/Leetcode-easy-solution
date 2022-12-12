// 66ms, 92.97%
// 42.2 MB

function covertHourToMinutes(time) {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours) * 60;
    return hours + parseInt(minutes);
}

const convertTime = function(current, correct) {
    const divider = [60, 15, 5, 1];
    let count = 0;

    let timeDiff = covertHourToMinutes(correct) - covertHourToMinutes(current);

    for (let i = 0; i < divider.length; i++) {
        const quotient = parseInt(timeDiff / divider[i]);
        count += quotient;
        timeDiff = timeDiff - (quotient * divider[i]);
    }

    return count;
};

console.log(convertTime("02:30", "04:35"));

console.log(convertTime("11:00", "11:01"));