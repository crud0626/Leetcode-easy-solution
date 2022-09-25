// 63ms, 90.60%
// 42.6 MB

const isOneBitCharacter = function(bits) {
    let i = 0;
    
    while(i < bits.length-1){
        if(bits[i])i++
        i++
    }

    return bits[i] === 0;
};

console.log(isOneBitCharacter([1,0,0]));

console.log(isOneBitCharacter([1,1,1,0]));