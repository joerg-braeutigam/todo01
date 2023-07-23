import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const alltodos = [
	{ description: "Einkaufen", done: true },
	{ description: "Sport", done: false },
	{ description: "React App erstellen", done: false }
];
const Todolist = () => {
	const [opencount, setOpencount] = useState(0);
	const [todos, setTodos] = useState(alltodos);

	const countOpen = () => {
		const donetodos = todos.filter(item => {
			return !item.done;
		});
		setOpencount(donetodos.length);
	};

	const changeTodo = index => {
		const newTodos = [...todos];
		if (newTodos[index].done) {
			newTodos[index].done = false;
		} else {
			newTodos[index].done = true;
		}
		setTodos(newTodos);
	};

	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	useEffect(() => {
		countOpen();
	}, [todos]);

	return (
		<div className="shadow-sm hover:shadow-xl">
			<div className="text-center bg-gray-600 text-white text-3xl py-4">
				<h1 className="text-2xl">Todolist</h1>
				<h2 className="text-sm">Offene Todos: {opencount}</h2>
			</div>
			{todos.map((item, index) => {
				return (
					<Todo
						description={item.description}
						done={item.done}
						key={index}
						index={index}
						onChangeTodo={changeTodo}
						onDeleteTodo={deleteTodo}
					/>
				);
			})}
		</div>
	);
};

export default Todolist;
