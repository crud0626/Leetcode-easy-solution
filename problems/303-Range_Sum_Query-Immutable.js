// 108ms, 97.84%
// 48.6 MB

const NumArray = function(nums) {
    this.sum = new Array(nums.length+1).fill(0);
    
    for(let i = 0; i < nums.length; i++) {
        this.sum[i+1] = this.sum[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right+1] - this.sum[left];
};