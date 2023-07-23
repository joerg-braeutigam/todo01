import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Todolist = () => {
	const [opencount, setOpencount] = useState(0);
	const [todos, setTodos] = useState(() => {
		const items = localStorage.getItem("items");
		return JSON.parse(items) || [];
	});
	const [textinput, setTextinput] = useState("");

	const changeText = e => {
		setTextinput(e.target.value);
	};

	const submit = e => {
		e.preventDefault();
		const newTodos = [...todos, { description: textinput, done: false }];
		setTodos(newTodos);
		setTextinput("");
	};

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
		localStorage.setItem("items", JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="shadow-sm hover:shadow-xl">
			<div className="text-center bg-gray-600 text-white text-3xl py-4">
				<h1 className="text-2xl">Todolist</h1>
				<h2 className="text-sm">Offene Todos: {opencount}</h2>
				<form action="#" className="grid grid-cols-3 py-2">
					<input
						type="text"
						name=""
						id=""
						className="text-black p-2 col-span-2 text-sm"
						placeholder="Neues Todo"
						onChange={changeText}
						value={textinput}
					/>
					<input
						type="submit"
						value="Add Todo"
						className="text-sm col-span-1 bg-orange-700"
						onClick={submit}
					/>
				</form>
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
