// 101ms, 93.81%
// 49.8mb

const MinStack = function() {
    this.min = null;
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.min === null || this.min > val) {
        this.min = val;
    }
    return;
};

MinStack.prototype.pop = function() {
    const deleted = this.stack.pop();
    if(this.min === deleted) {
        this.min = Math.min(...this.stack);
    }
    return this.deleted;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

MinStack.prototype.getMin = function() {
    return this.min;
};