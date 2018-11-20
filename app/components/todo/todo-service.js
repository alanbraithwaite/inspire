

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
			.then((res) => {
				todoList = res.data.data
				console.log("ToDo Get", todoList)
				draw(todoList)
			})

			.catch(logError)
	}

	addTodo(todo, getTodos) {
		console.log("Posting new Todo")
		let description = todo
		todoApi.post('', { description })
			.then(getTodos)

			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		let todo = todoList.find(todo => todo._id === todoId)
		todo.completed = !todo.completed;
		todoApi.put(todoId, todo).then(getTodos).catch(logError)

			.catch(logError)
	}

	removeTodo(id, getTodos) {
		console.log("removing the ID", id)
		todoApi.delete(id).then(getTodos).catch(logError)

			.catch(logError)
	}

}
