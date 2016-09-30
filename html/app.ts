/**
 * Created by pskrebnev on 19.09.2016.
 */

// Chapter 02 > 02-07
// Destructing

var todo = {
    id: 123,
    title: "Pick up my code",
    completed: false
}

var {completed, id, title} = todo;

console.log(todo.id, todo.title, todo.completed);

// One more example of destructuring

function countdown({
    initial,
    final: final = 0,
    interval: interval = 1,
    initial: current
}) {
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}

