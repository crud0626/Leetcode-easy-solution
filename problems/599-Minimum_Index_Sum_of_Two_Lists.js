// 119ms, 82.32%
// 46.8 MB

const findRestaurant = function(list1, list2) {
    let result = [];
    let minSum = Infinity;

    for(let i = 0; i < list1.length; i++) {
        const target = list1[i];
        const targetIndex = list2.indexOf(target);
        const indexSum = targetIndex + i;

        if(targetIndex !== -1) {
            if(indexSum < minSum) {
                minSum = indexSum;
                result = [target];
            } else if(indexSum === minSum) {
                result.push(target);
            } else {}
        }
    }

    return result;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]));

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]));

console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]));