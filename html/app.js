/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 02 > 02-08
// The spread operator
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
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
//# sourceMappingURL=app.js.map