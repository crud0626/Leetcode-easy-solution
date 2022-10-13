// 63ms, 97.46%
// 43.4 MB

const halvesAreAlike = function(s) {
    const a = s.slice(0, s.length/2);
    const b = s.slice(s.length/2);
    
    const regex = new RegExp("[aeiou]", "gi");
    const vowelOfA = a.match(regex);
    const vowelOfB = b.match(regex);

    return vowelOfA?.length === vowelOfB?.length;
};

console.log(halvesAreAlike("book"));

console.log(halvesAreAlike("textbook"));