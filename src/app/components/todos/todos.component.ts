import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../../interfaces/todo-item.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

	id: string;
	itemId: string;

	todos: TodoItem[] = [
		{
			id: 'ara8l14twy',
			text: 'Create component "todo"',
			completed: false
		},
		{
			id: 'wivni0dnld',
			text: 'Create component "todo-item" with own methods',
			completed: false
		},
		{
			id: 'vdsbmk22fp',
			text: 'Complete homework as soon as I can',
			completed: false
		}
	]

	constructor() { }

	ngOnInit() {
	}

	pushTodoItem(todoText: string): void {
		let itemId = Math.random().toString(36).substr(2, 10);

		if (todoText) {
			this.todos.unshift({
				id: itemId,
				text: todoText,
				completed: false
			});
		}	
	}

	setAllTodosDone(value: boolean): void {
		for (let todo of this.todos) {
			todo.completed = true;
		}
	}

	deleteTodosItem(idValue: string): void {
		let indexTodo = this.todos.findIndex((item) => {
			return item.id === idValue;
		})	
		this.todos.splice(indexTodo, 1);
	}
}
