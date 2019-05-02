import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	todosUrl:string = "http://localhost:3000/todo_list";
	title:string = 'Hello, my friend. How are you? Ok?';
}
