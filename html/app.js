/**
 * Created by pskrebnev on 19.09.2016.
 */
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var todo = { name: "Pick up my car" };
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');
//# sourceMappingURL=app.js.map