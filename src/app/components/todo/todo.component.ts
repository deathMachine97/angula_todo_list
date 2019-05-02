import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modules/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
	todos:Todo[];
	constructor(private todoService:TodoService) { }

	ngOnInit() {
		this.todoService.getTodos().subscribe(todos=>{
			this.todos = todos;
		});
	}

	// Реализация html этой функции стоит в todo.components.html
	deleteTodo(todo:Todo){
		// Remove from application
		this.todos =  this.todos.filter(t=> t.id !== todo.id);
		// Remove from server
		this.todoService.deleteTodo(todo).subscribe();
	}

}
