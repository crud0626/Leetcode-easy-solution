// 60ms, 94.99%
// 42.2 MB

const interpret = function(command) {
    command = command.replace(/\(\)/g, "o").replace(/\(al\)/g,"al");
    return command;
};

console.log(interpret("G()(al)"));

console.log(interpret("G()()()()(al)"));

console.log(interpret("(al)G(al)()()G"));