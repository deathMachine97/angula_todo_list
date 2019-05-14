import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {
	@Output() addTodo: EventEmitter<any> = new EventEmitter();
	title:string;
	constructor(private todoService:TodoService) { }
	ngOnInit() {
	}

	onSubmit(){
		const todo = {
			title: this.title,
			completed: false
		}
		console.log(todo);

		this.addTodo.emit(todo);
		this.title = "";
	}
}
