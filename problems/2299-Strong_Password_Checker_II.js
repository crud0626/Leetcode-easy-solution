// 60ms, 98.39%
// 42.2 MB

const strongPasswordCheckerII = function(password) {
    const specialRegex = new RegExp(/[\!\@\#\$\%\^\&\*\(\)\-\+]/);

    if (password.length >= 8 &&
        password.match(/[a-z]/) &&
        password.match(/[A-Z]/) &&
        password.match(/[0-9]/) &&
        password.match(specialRegex) &&
        !password.match(/(.)\1+/)
    ) {
        return true;
    }

    return false;
};

console.log(strongPasswordCheckerII("IloveLe3tcode!"));

console.log(strongPasswordCheckerII("Me+You--IsMyDream"));

console.log(strongPasswordCheckerII("1aB!"));