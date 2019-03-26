import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

	todoText: string;

	@Output() pushTodoItem = new EventEmitter();
	@Output() setTodosDone = new EventEmitter();

	constructor() { }

	ngOnInit() {
  	}

	setTasksDone(): void {
		this.setTodosDone.emit(true);
	}

	pushTask(): void {
		this.pushTodoItem.emit(this.todoText);
		this.todoText = '';
	}
}
