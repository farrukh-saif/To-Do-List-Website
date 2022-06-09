//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
	event.preventDefault();
	console.log("Clicked Button");
	//Prevent Form From Submitting
	event.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");

	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");

	const checkButton = document.createElement("button");
	checkButton.innerHTML = '<i class = "fas fa-check"></i>';
	checkButton.classList.add("check-btn");

	todoDiv.appendChild(newTodo);
	todoDiv.appendChild(checkButton);
	todoDiv.appendChild(trashButton);

	//Append To List
	todoList.appendChild(todoDiv);
	todoInput.value = "";
}
