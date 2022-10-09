// 61ms, 95.09%
// 41.6 MB

const solution = function(isBadVersion) {
    return function(n) {
        let start = 1, end = n;
        
        while(start <= end) {
            const middle = Math.floor((start + end) / 2);
            
            isBadVersion(middle) ? end = middle - 1 : start = middle + 1;
        }
        
        return start;
    };
};