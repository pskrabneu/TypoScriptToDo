/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 4 "Custom types" >
// Video03 "Extending interface"

interface Todo {
    name: string;
    completed?: boolean; // '?' makes the property optional
}

interface jQuery {
    (selector: (string | any)): jQueryElement;
    fn: any;
    version: number;
}

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}

$.fn.todo = function (todo?: Todo) {

    if(todo) {
        $(this).data('todo', todo)
    } else {
        return $(this).data('todo');
    }

}

var todo = { name: "Pick up my car"};
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');


