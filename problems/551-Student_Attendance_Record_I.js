// 62ms, 89.73%
// 42.3 MB

const checkRecord = function(s) {
    const result = {
        "A": 0,
        "L": 0
    };

    for(let i = 0; i < s.length; i++) {
        if (result["L"] > 2) return false;

        switch(s[i]) {
            case "A":
                result["A"] += 1;
                result["L"] = 0;
                break;
            case "L":
                result["L"] += 1;
                break;
            default:
                result["L"] = 0;
                break;
        }
    }
    
    return result["A"] > 1 || result["L"] > 2 ? false : true;
};

console.log(checkRecord("PPALLP"));

console.log(checkRecord("PPALLL"));