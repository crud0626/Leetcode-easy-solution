// 89ms, 94.72%
// 50.4 MB

const lemonadeChange = function(bills) {
    const money = {
        5: 0,
        10: 0,
        20: 0,
    };

    for(let i = 0; i < bills.length; i++) {
        const bill = bills[i];

        switch(bill) {
            case 5:
                money[5] += 1;
                break;
            case 10:
                if(money[5] > 0) {
                    money[5] -= 1;
                    money[10] += 1;
                } else {
                    return false;
                }
                break;
            case 20:
                if(money[10] > 0 && money[5] > 0) {
                    money[10] -= 1;
                    money[5] -= 1;
                } else if(money[5] >= 3) {
                    money[5] -= 3;
                } else {
                    return false;
                }
                
                money[20] += 1;
                break;
        }
    }

    return true;
};

console.log(lemonadeChange([5,5,5,10,20]));

console.log(lemonadeChange([5,5,10,10,20]));