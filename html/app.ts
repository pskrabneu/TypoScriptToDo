/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 4 "Custom types" >
// Video04 "Defining constant values with enums".

interface Todo {
    name: string;
    completed?: boolean;
}

var todo: Todo = {
    name: "Pick up my car",
    completed: true
}

// Arrow function
var inc = (x)=>(x * 5 + 6);
console.log(inc(8));





