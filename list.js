// console.log("test");

const todos = ["buy new turtle"];

var input = prompt("what would you like to do ?")

while(input !== "quit") {
    if(input === "list") {
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
} else if(input === "new") {
    const newTodo = prompt("enter new todo");
    todos.push(newTodo);
    }

    input = prompt("what would you like to do ?")
}
console.log("BYE")