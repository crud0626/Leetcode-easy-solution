// 84ms, 95.74%
// 45.8 MB

const canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split("");
    ransomNote = ransomNote.split("");

    for(let i = 0; i < ransomNote.length; i++) {
        const index = magazine.indexOf(ransomNote[i]);

        if(index === -1) return false;

        magazine.splice(index, 1);
    }
    return true;
};

console.log(canConstruct("a", "b"));

console.log(canConstruct("aa", "ab"));

console.log(canConstruct("aa", "aab"));