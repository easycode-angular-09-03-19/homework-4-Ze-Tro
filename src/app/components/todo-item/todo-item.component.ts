import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../../interfaces/todo-item.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	
	id: string;
	@Input() todoTask: any; //Не принимает в качестве типа Интерфейс
	
	@Output() deleteTodoItem = new EventEmitter<TodoItem>();
	
	constructor() { }
	
	completeTask():void {
		this.todoTask.completed = !this.todoTask.completed;
	}

	deleteTask(): void {
		if(confirm('Are you sure?')) {
			this.deleteTodoItem.emit(this.todoTask.id);
		}
	}

	ngOnInit() {
	}
}