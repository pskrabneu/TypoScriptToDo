/**
 * Created by pskrebnev on 19.09.2016.
 */
var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
countdown(10, 0, 1);
//# sourceMappingURL=app.js.map