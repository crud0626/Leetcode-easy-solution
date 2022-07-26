// 60ms, 95.88%
// 42.3 MB

const getDecimalValue = function(head) {
    let num = "";
    while(head) {
        num += head.val;
        head = head.next;
    }
    return parseInt(num, 2);
};

// [1, 0, 1]

// [0]