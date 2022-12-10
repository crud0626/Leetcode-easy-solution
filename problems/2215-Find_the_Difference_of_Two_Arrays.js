// 102ms, 93.24%
// 48.5 MB

const findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2);

    const result1 = Array.from(set1).filter(num => !set2.has(num));
    const result2 = Array.from(set2).filter(num => !set1.has(num));

    return [result1, result2];
};

console.log(findDifference([1,2,3], [2,4,6]));

console.log(findDifference([1,2,3,3], [1,1,2,2]));