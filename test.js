"use strict";

const todos = [
	{ description: "Einkaufen", done: false },
	{ description: "Bier holen", done: false },
	{ description: "React App erstellen", done: false }
];

todos.map(item => {
	console.log(item.description);
});
