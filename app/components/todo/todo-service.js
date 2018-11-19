

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/abraithwaite/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {



	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				todoList = res.data.data
				console.log("ToDo Get", todoList)
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		console.log("Posting new Todo")
		let description = todo
		todoApi.post('', { description })
			// .then(this.getTodos(draw))
			.then(getTodos)
			// .then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
			// 	console.log("Add ToDo", todo)
			// this.getTodos(draw)
			// })
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		let todo = todoList.find(todo => todo._id === todoId)  ///MODIFY THIS LINE
		todo.completed = !todo.completed;
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo).then(getTodos).catch(logError)
	}

	removeTodo(id, getTodos) {
		// Umm this one is on you to write.... The method is a DELETE
		console.log("removing the ID", id)
		todoApi.delete(id).then(getTodos).catch(logError)
	}

}
