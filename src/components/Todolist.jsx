import React from "react";
import Todo from "./Todo";

const todos = [
	{ description: "Einkaufen", done: true },
	{ description: "Bier holen", done: false },
	{ description: "React App erstellen", done: false }
];
const Todolist = () => {
	return (
		<div className="shadow-sm hover:shadow-2xl">
			<div className="text-center bg-gray-600 text-white text-3xl py-4">
				<h1>Todolist</h1>
			</div>
			{todos.map((item, index) => {
				return (
					<Todo description={item.description} done={item.done} key={index} />
				);
			})}
		</div>
	);
};

export default Todolist;
