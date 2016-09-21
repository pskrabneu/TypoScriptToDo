/**
 * Created by pskrebnev on 19.09.2016.
 */
var container = document.getElementById('container');
// function countdown(initial, final = 0, interval = 1) {
//
//     var current = initial;
//
//     while (current > final) {
//         container.innerHTML = current;
//         current -= interval;
//     }
// }
//
// countdown(10, 0, 1);
var todo = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
};
// var displayName = `Todo #${todo.id}`
container.innerHTML = "\n<div todo='" + todo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (todo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">" + todo.name + "</span>\n</div>\n";
//# sourceMappingURL=app.js.map