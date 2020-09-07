const todos = ["Buy New Turtle"];

const input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list") {
		printList();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function printList() {
	console.log("**********");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function addTodo(){
	//ask for new todo
	let newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log(newTodo + " added to list")
}

function deleteTodo(){
	let index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Todo Removed")
}