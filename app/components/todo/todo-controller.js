import TodoService from "./todo-service.js";



var todoService = new TodoService()

function getTodos() {
	todoService.getTodos(draw)
}

function draw(todos) {
	var template = ''
	console.log(todos)
	todos.forEach(item => {
		let checkedtodo = ""
		let numtodos = todos.length
		if (item.completed)
			checkedtodo = "checked"

		template += `
		<div class="todo">
			<input type="checkbox" ${checkedtodo}  onclick="app.controllers.todoController.toggleTodoStatus('${item._id}')">
		${item.description}
		<button onclick="app.controllers.todoController.removeTodo('${item._id}')">Remove</button>
		</div>
		`
	});
	document.getElementById("todos").innerHTML = template
}


export default class TodoController {
	constructor() {
		todoService.getTodos(draw)

	}

	addTodoFromForm(e) {
		e.preventDefault();
		var form = e.target;
		var todo = form.todo.value;
		console.log(todo);
		todoService.addTodo(todo, getTodos);
		form.reset()
	}

	toggleTodoStatus(todoId) {
		todoService.toggleTodoStatus(todoId, getTodos);
	}

	removeTodo(todoId) {
		todoService.removeTodo(todoId, getTodos);
	}


}
