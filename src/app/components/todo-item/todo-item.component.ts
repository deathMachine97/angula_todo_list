import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../modules/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.sass']
})

export class TodoItemComponent implements OnInit {
	@Input() todo: Todo;
	@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
	constructor(private todoService:TodoService) { }

	ngOnInit() {
	}

	// Set dynamic classes
	setClasses(){
		let classes = {
			todo: true,
			'is-complete': this.todo.completed
		}
		return classes;
	}

	onToggle(todo){
		todo.completed = !todo.completed;
		this.todoService.toggleCompleted(todo).subscribe(todo=>{
			console.log(todo)
		})
	}

	// deleteTodo находится в todo.components
	onDelete(todo):void{
		this.deleteTodo.emit(todo);
	}
}
