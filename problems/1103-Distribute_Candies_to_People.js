// 72ms, 79.44%
// 41.7 MB

const distributeCandies = function(candies, num_people) {
    const people = new Array(num_people).fill(0);

    let candyNum = 1, i = 0;
    while(candies > 0) {
        if(candies < candyNum) {
            people[i] += candies;
            break;
        }
        
        people[i] += candyNum;
        candies -= candyNum;
        candyNum++;
        i++;

        if(i === people.length) i = 0;
    }

    return people;
};

console.log(distributeCandies(7, 4));

console.log(distributeCandies(10, 3));