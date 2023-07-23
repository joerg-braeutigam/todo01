import React from "react";

const Todo = ({ description, done }) => {
	return (
		<div className="flex items-center justify-between p-2">
			<h2 className="text-lg">
				{description}: {done ? "Erledigt" : "Offen"}
			</h2>
			<button className="text-lg bg-gray-800 text-yellow-50 p-2">
				Löschen
			</button>
		</div>
	);
};

export default Todo;
