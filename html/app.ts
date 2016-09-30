/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 02 > 02-08
// The spread operator
function calculate(action, ...values) {
    var total = 0;

    for (var value of values) {

        switch (action) {
            case 'add':
                total += value;
                break;

            case 'substract':
                total -= value;
                break;
        }
    }

    return total;
}

console.log(calculate('add', 1, 2, 3, 4, 5));



