// console.log("test");

const todos = ["buy new turtle"];

let input = prompt("what would you like to do ?")

while(input !== "quit") {
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }

    input = prompt("what would you like to do ?")
}
console.log("bye")

function listTodos() {
    console.log("*********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
});
    console.log("*********")
}

function addTodo() {
    const newTodo = prompt("enter new todo");
        todos.push(newTodo);
        console.log("Added");
}

function deleteTodo() {
    let index = prompt("Enter index of item to delete");
        todos.splice(index, 1); // delete one item
        console.log("Deleted");
}


// const todos = ["buy new turtle"];

// let input = prompt("what would you like to do ?")

// while(input !== "quit") {
//     if(input === "list") {
//         console.log("*********")
//         todos.forEach(function(todo, i){
//             console.log(i + ": " + todo);
//     });
//         console.log("*********")
//     } else if(input === "new") {
//         const newTodo = prompt("enter new todo");
//         todos.push(newTodo);
//         console.log("Added");
//     } else if(input === "delete"){
//         let index = prompt("Enter index of item to delete");
//         todos.splice(index, 1); // delete one item
//         console.log("Deleted");
//     }

//     input = prompt("what would you like to do ?")
// }
// console.log("bye")

