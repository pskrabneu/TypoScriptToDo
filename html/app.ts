/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 4 "Custom types" >
// Video01 "Defining custom types with interfaces"

interface Todo {
    name: string;
    completed?: boolean; // '?' makes the property optional
}

interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getBuId(todoId: number): Todo;
}

var todo: Todo = {
    name: 'Pick up my boots',
};









