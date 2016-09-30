/**
 * Created by pskrebnev on 19.09.2016.
 */
// Chapter 02 > 02-07
// Destructing
var todo = {
    id: 123,
    title: "Pick up my code",
    completed: false
};
var completed = todo.completed, id = todo.id, title = todo.title;
console.log(todo.id, todo.title, todo.completed);
// One more example of destructuring
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
//# sourceMappingURL=app.js.map