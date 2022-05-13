// 74ms, 70.60%
// 44.3mb

const longestCommonPrefix = function(strs) {    
    let result = strs[0];

    for(let i = 1; i < strs.length; i++) {
        let prefix = "";
        for(let j = 0; j < strs[i].length; j++) {
            if(result[j] !== strs[i][j]) {
                break;
            }
            prefix += strs[i][j];
        }
        result = prefix;
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));

console.log(longestCommonPrefix(["dog","racecar","car"]));