// 84ms, 86.86%
// 42.8 MB

const isIsomorphic = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for(let i = 0; i < s.length; i++) {
        if(!mapS.has(s[i]) && !mapT.has(t[i])) {
            mapS.set(s[i], i);
            mapT.set(t[i], i);
            continue;
        }

        if (mapS.get(s[i]) === mapT.get(t[i])) {
            continue;
        }
        
        return false;
    }
    return true;
};

console.log(isIsomorphic("egg", "add"));

console.log(isIsomorphic("foo", "bar"));

console.log(isIsomorphic("paper", "title"));