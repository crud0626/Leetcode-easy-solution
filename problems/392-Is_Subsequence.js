// 64ms, 93.53%
// 42.1 MB

const isSubsequence = function(s, t) {
    let targetIndex = 0;
    let target = s[0];

    for(let i = 0; i < t.length; i++) {
        if(!target) return true;

        if(target === t[i]) {
            targetIndex ++;
            target = s[targetIndex];
        }
    }

    return target === undefined;
};

console.log(isSubsequence( "abc", "ahbgdc"));

console.log(isSubsequence( "axc", "ahbgdc"));
