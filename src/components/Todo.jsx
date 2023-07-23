import React, { useState } from "react";

const Todo = ({ description, done, onChangeTodo, onDeleteTodo, index }) => {
	return (
		<>
			<div className={done ? "bg-green-900" : "bg-red-900"}>
				<div className="flex items-center justify-between p-2">
					<h2
						className="text-lg text-white"
						onClick={() => {
							onChangeTodo(index);
						}}>
						{description}
					</h2>
					<button
						className="text-lg bg-gray-800 text-yellow-50 p-2"
						onClick={() => {
							onDeleteTodo(index);
						}}>
						Löschen
					</button>
				</div>
			</div>
		</>
	);
};

export default Todo;
