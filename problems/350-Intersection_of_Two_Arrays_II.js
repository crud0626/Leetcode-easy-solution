// 74ms, 77.34%
// 42.7 MB

const intersect = function(nums1, nums2) {
    let arr1 = nums1;
    let arr2 = nums2;
    const result = [];

    if(nums1.length > nums2.length) {
        arr1 = nums2;
        arr2 = nums1;
    }

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            result.push(arr2[index]);
            arr2.splice(index, 1);
        }
    }
    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

console.log(intersect([3, 1, 2], [1, 1]));