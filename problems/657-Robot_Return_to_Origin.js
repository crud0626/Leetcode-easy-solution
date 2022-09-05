// 79ms, 84.60%
// 42.8 MB

const judgeCircle = function(moves) {
    let posX = 0, posY = 0;
  
    for(let i = 0; i < moves.length; i++) {
      switch(moves[i]) {
        case "U":
          posY += 1;
          break;
        case "D":
          posY -= 1;
          break;
        case "L":
          posX -= 1;
          break;
        case "R":
          posX += 1;
          break;
      }
    }
    return posX === 0 && posY === 0 ? true : false;
};

console.log(judgeCircle("UD"));

console.log(judgeCircle("LL"));