/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 02 > 02-08
// The spread operator
/*function calculate(action, ...values) {
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

console.log(calculate('add', 1, 2, 3, 4, 5));*/
// Spreading array
/*var sourse = [5, 6, 7];
var target = [1, 2, 3, 4, ...sourse, 8, 9];
console.log(target);*/
// Spreading array
/*var list1 = [1,3,4,5];
var list2 = [6,7,8];

list1.push(...list2);
console.log(list1);*/
// Chapter 02 > 02-09
// Computed properties
var osPrefix = 'os_';
var support = (_a = {},
    _a[osPrefix + 'Windows'] = isSupported('Windows'),
    _a[osPrefix + 'iOS'] = isSupported('iOS'),
    _a[osPrefix + 'Android'] = isSupported('Android'),
    _a
);
function isSupported(os) {
    return Math.random() >= 0.5;
}
console.log(support);
var _a;
//# sourceMappingURL=app.js.map