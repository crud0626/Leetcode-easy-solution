// 79ms, 95.82%
// 44.8 MB

const twoOutOfThree = function(nums1, nums2, nums3) {
    const numsArr = Array.from(new Set([...nums1, ...nums2, ...nums3]));
    const result = [];

    for(let i = 0; i < numsArr.length; i++) {
        const elem = numsArr[i];
        
        if (
            (nums1.includes(elem) && nums2.includes(elem)) ||
            (nums2.includes(elem) && nums3.includes(elem)) ||
            (nums1.includes(elem) && nums3.includes(elem))
        ) {
            result.push(elem);
        }
        
    }

    return result;
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));

console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));

console.log(twoOutOfThree([1, 2 ,2], [4, 3, 3], [5]));