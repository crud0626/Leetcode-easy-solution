// 65ms, 86.86%
// 42.3 MB

const defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]");
};

console.log(defangIPaddr("1.1.1.1"));

console.log(defangIPaddr("255.100.50.0"));