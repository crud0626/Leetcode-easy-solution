// 74ms, 82.91%
// 42.2 MB

const nextGreaterElement = function(nums1, nums2) {
    const result = new Array(nums1.length).fill(-1);
    for(let i = 0; i < nums1.length; i++) {
        const targetIndex = nums2.indexOf(nums1[i]);
        const curr = nums2[targetIndex];
        let next = nums2[targetIndex+1];
        
        for(j = targetIndex+1; j < nums2.length; j++) {
            if(curr < next) {
                result[i] = next;
                break;
            }
            next = nums2[j + 1];
        }
    }
    return result;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));

console.log(nextGreaterElement([2,4], [1,2,3,4]));