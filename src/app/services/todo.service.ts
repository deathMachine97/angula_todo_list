import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../modules/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':'application/json'
	})
}

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	todosUrl:string = "http://localhost:3000/todo_list";
	limit:string = "?_limit=5";
	constructor(private http:HttpClient) { }

	// Get Todos
	getTodos():Observable<Todo[]>{
		return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
	}

	// Toggle Completed
	toggleCompleted(todo:Todo):Observable<any>{
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.put(url,todo,httpOptions);
	}

	// Delete Todo
	deleteTodo(todo:Todo):Observable<any>{
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.delete<Todo>(url,httpOptions);
	}

	addTodo(todo):Observable<any>{
		const url = `${this.todosUrl}`;
		return this.http.post(url,todo,httpOptions);
	}
}
